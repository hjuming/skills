// Service Worker - Skills WEDO
// Version: 4.2.0

const CACHE_NAME = 'skills-cache-v4.2';
const RUNTIME_CACHE = 'skills-runtime-v4.2';

// 需要快取的靜態資源
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/skills-data.js',
  '/llms.txt',
  '/assets/og-skills-wedo-1200x630.png',
  '/assets/leo-49-hero.png',
  '/assets/leo-49-point.png',
  '/assets/leo-49-wave.png',
  '/assets/leo-49-logo.png',
  '/favicon_io/favicon.ico',
  '/favicon_io/favicon-32x32.png',
  '/favicon_io/favicon-16x16.png',
  '/favicon_io/apple-touch-icon.png',
  '/favicon_io/android-chrome-192x192.png',
  '/favicon_io/android-chrome-512x512.png',
  '/favicon_io/site.webmanifest',
  '/robots.txt',
  '/sitemap.xml'
];

// 安裝事件 - 預快取靜態資源
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker v4.2...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// 啟用事件 - 清理舊快取
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker v4.2...');

  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              return cacheName.startsWith('skills-') &&
                     cacheName !== CACHE_NAME &&
                     cacheName !== RUNTIME_CACHE;
            })
            .map(cacheName => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch 事件 - 快取策略
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // 跳過非 GET 請求
  if (request.method !== 'GET') {
    return;
  }

  // 跳過 Chrome extensions 和其他來源
  if (!url.origin.includes(self.location.origin)) {
    return;
  }

  // 跳過 Google Analytics
  if (url.hostname.includes('google-analytics.com') ||
      url.hostname.includes('googletagmanager.com')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // 如果快取中有，直接返回
        if (cachedResponse) {
          console.log('[SW] Serving from cache:', request.url);

          // 後台更新快取 (Stale-While-Revalidate)
          fetch(request)
            .then(response => {
              if (response && response.status === 200) {
                caches.open(RUNTIME_CACHE)
                  .then(cache => cache.put(request, response));
              }
            })
            .catch(() => {}); // 靜默失敗

          return cachedResponse;
        }

        // 如果快取中沒有，從網路獲取
        console.log('[SW] Fetching from network:', request.url);
        return fetch(request)
          .then(response => {
            // 檢查是否是有效的回應
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // 複製回應（因為 response 是 stream，只能讀一次）
            const responseToCache = response.clone();

            // 將新資源加入運行時快取
            caches.open(RUNTIME_CACHE)
              .then(cache => {
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            console.error('[SW] Fetch failed:', error);

            // 如果離線且是 HTML 請求，返回離線頁面
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }

            // 其他情況返回錯誤
            return new Response('Network error', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
  );
});

// 訊息事件 - 用於手動控制
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(RUNTIME_CACHE)
        .then(cache => cache.addAll(event.data.payload))
    );
  }
});
