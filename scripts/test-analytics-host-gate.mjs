import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map((match) => match[1]);
const bootstrap = scripts.find((script) => script.includes('__WEDO_ANALYTICS_ALLOWED__'));

assert.ok(bootstrap, 'analytics bootstrap must exist');
assert.equal((html.match(/googletagmanager\.com\/gtag\/js\?id=G-LVR6KRJYMB/g) || []).length, 1);
assert.equal((html.match(/googletagmanager\.com\/gtm\.js\?id=GTM-TNM3J7XS/g) || []).length, 1);
assert.doesNotMatch(html, /<script[^>]+src=["']https:\/\/www\.googletagmanager\.com\//i);

function runBootstrap({ hostname, webdriver = false, locationThrows = false, navigatorThrows = false }) {
  const inserted = [];
  const firstScript = {
    parentNode: {
      insertBefore(node) {
        inserted.push(node.src);
      },
    },
  };
  const document = {
    getElementsByTagName(name) {
      assert.equal(name, 'script');
      return [firstScript];
    },
    createElement(name) {
      assert.equal(name, 'script');
      return { async: false, src: '' };
    },
  };
  const window = {};

  if (locationThrows) {
    Object.defineProperty(window, 'location', { get() { throw new Error('location unavailable'); } });
  } else {
    window.location = {
      hostname,
      pathname: '/guide',
      search: '?from=test',
      href: `https://${hostname}/guide?from=test`,
    };
  }

  if (navigatorThrows) {
    Object.defineProperty(window, 'navigator', { get() { throw new Error('navigator unavailable'); } });
  } else {
    window.navigator = { webdriver };
  }

  vm.runInNewContext(bootstrap, { window, document, Date, String, Error }, { timeout: 1_000 });
  return { window, inserted };
}

const allowedHosts = [
  'wedopr.com',
  'www.wedopr.com',
  'skills.wedopr.com',
  'deep.skills.wedopr.com',
  'skills.wedopr.com.',
];

for (const hostname of allowedHosts) {
  const { window, inserted } = runBootstrap({ hostname });
  assert.equal(window.__WEDO_ANALYTICS_ALLOWED__, true, `${hostname} should be allowed`);
  assert.deepEqual(inserted, [
    'https://www.googletagmanager.com/gtag/js?id=G-LVR6KRJYMB',
    'https://www.googletagmanager.com/gtm.js?id=GTM-TNM3J7XS',
  ]);
  assert.equal(window.dataLayer.length, 4);
  assert.equal(window.dataLayer[2].event, 'wedo_rollup_context');
  assert.equal(window.dataLayer[2].project_host, hostname);
  assert.equal(window.dataLayer[3].event, 'gtm.js');
}

const longLabel = 'a'.repeat(64);
const longHostname = `${'a'.repeat(63)}.${'b'.repeat(63)}.${'c'.repeat(63)}.${'d'.repeat(52)}.wedopr.com`;
const blockedHosts = [
  'localhost',
  '127.0.0.1',
  '::1',
  'skills-wedo.pages.dev',
  'preview.skills.wedopr.com.pages.dev',
  'staging.example.com',
  'wedopr.com.example.com',
  'evilwedopr.com',
  'wedopr.com.evil',
  'skills.wedopr.com.evil',
  'skills..wedopr.com',
  '-skills.wedopr.com',
  'skills-.wedopr.com',
  `${longLabel}.wedopr.com`,
  longHostname,
  'skills_wedo.wedopr.com',
  '技能.wedopr.com',
];

for (const hostname of blockedHosts) {
  const { window, inserted } = runBootstrap({ hostname });
  assert.equal(window.__WEDO_ANALYTICS_ALLOWED__, false, `${hostname} should be blocked`);
  assert.equal(Object.hasOwn(window, 'dataLayer'), false, `${hostname} must not create dataLayer`);
  assert.deepEqual(inserted, [], `${hostname} must not load analytics scripts`);
}

for (const input of [
  { hostname: 'skills.wedopr.com', webdriver: true },
  { hostname: 'skills.wedopr.com', locationThrows: true },
  { hostname: 'skills.wedopr.com', navigatorThrows: true },
]) {
  const { window, inserted } = runBootstrap(input);
  assert.equal(window.__WEDO_ANALYTICS_ALLOWED__, false);
  assert.equal(Object.hasOwn(window, 'dataLayer'), false);
  assert.deepEqual(inserted, []);
}

console.log(`analytics host gate: ${allowedHosts.length} allowed, ${blockedHosts.length + 3} blocked cases passed`);
