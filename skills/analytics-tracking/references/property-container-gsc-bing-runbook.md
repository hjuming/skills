# GA4、GTM、Search Console 與 Bing 設定／驗收流程

> 本文是跨模型、跨專案的操作細節 SSOT。平台介面會變動；依當下介面回讀設定，不照抄過時的按鈕路徑。共用權限、停止條件與證據分層見 WEDO Playbook 的 GA4／GTM／GSC／Bing 專案量測關卡。

## 適用範圍

用於建立或接手 GA4 property／web stream、GTM web container、事件量測、部署環境變數、Search Console 與 Bing Webmaster 驗證，以及正式站 read-back。單純只讀稽核仍依使用者指定範圍；「看資料」不自動包含「改設定、送出索引要求或發布」。

## 開始前：授權與底層現況

先把每項工作標成 READ ONLY、CONFIGURE、PREVIEW、PUBLISH 或 SUBMIT，逐項確認使用者要求涵蓋的範圍。若有不明確的外部寫入，先做不依賴它的檢查，待作者確認該寫入。

回讀並記錄：正式 canonical origin、預覽網址、部署平台／專案、正式與預覽分支；既有 GA4 account／property／web stream／Measurement ID、GTM account／container／workspace／版本；頁面原始碼是否有正確容器 ID；部署平台的 Preview、Production 變數是否分開設定及最近一次 build 是否吸收變數；事件與參數、搜尋引擎 property 類型、sitemap URL、指定索引要求網址；時區、幣別、保留期、Enhanced Measurement、Google Signals、廣告個人化與搜尋 query parameter 等專案要求；以及帳戶建立、條款、DNS、平台寫入、GTM 發布與正式部署授權。

先確認既有資源再建立，避免重複 property、stream 或 container。把事實、推論、未查證分開；沒有 read-back 證據就標「未查證」。

## 權限與資料安全

- 作者登入平台；不得索取、代貼或記錄密碼、OTP、token、服務帳戶金鑰、OAuth code、API key 或其他 secret。不得將這些內容放進 repo、Issue、PR、截圖或聊天。
- GA4 Measurement ID（G-…）與 GTM Container ID（GTM-…）是公開識別資訊，可以記錄及交給作者設定部署變數；它們不是認證憑證。
- 建立帳戶、property 或 container 需作者明確授權。接受 Google 等服務法律條款須作者在接受動作發生時確認；讓作者自行操作接受畫面。
- DNS、權限、資料分享、隱私、保留政策、正式發布及資料刪除都要有明確範圍與授權。不得由「請設定 GA/GSC」推定可改 DNS 或公開資料。
- 使用者指定只讀、只匯出、只預覽或不發布時，維持該界線；授權不足就停在可回讀狀態並報告。

## GA4 property 與 web stream

1. 優先檢查既有 property 與 stream；只有使用者明確要求且確認不存在時才建立。
2. 依專案要求設定名稱、正式網站 URL、時區、幣別與資料串流；不要把單一專案的值當成所有站點預設。
3. 依核准的資料最小化政策設定 Enhanced Measurement、站內搜尋 query parameter、Google Signals、廣告個人化及資料保留期。每個欄位都要讀回；不要只報「已儲存」。
4. Measurement ID 可作公開設定值；不把登入資訊或 API credentials 寫進程式碼或文件。
5. 分開記錄 property/stream 建立、設定 read-back、網站送出事件、GA4 收到資料；其中一項不代表其餘項完成。

## GTM container、事件契約與部署變數

1. 回讀現有 container 與 workspace，避免重複 container；記下 container ID、工作區及未發布變更數。不要覆蓋其他人的 workspace 修改。
2. 先建立事件表：使用者動作、DOM/dataLayer 訊號、GTM trigger 條件、GA4 event name、必要參數、預期觸發及不得觸發情境。
3. 對 data-track 等標記按實際語意設定 trigger。連字號是否轉底線以核准的事件表為準，並明列 mapping。不要把搜尋框 focus/click 當成完成搜尋；若網站在停打後推送 dataLayer 自訂事件，按該事件與搜尋字詞參數驗證。沒有分享按鈕就不建立不可觸發的分享事件。
4. 404 頁面以穩定錯誤頁訊號判斷（例如專用 dataLayer event、明確頁面 title），不可假設錯誤網址一定含 /404。先核對實際 404 markup 與 title。
5. 把公開 Container ID 交給作者設定網站部署環境變數，例如 Cloudflare Pages 的 PUBLIC_GTM_ID。Production 與 Preview 要逐一設定並 read-back；變數儲存通常需下一次 build 才進入產物。記錄預覽 build commit 與環境，避免用設定前的舊預覽作驗收。
6. 用 GTM Preview／Tag Assistant 連到正確的預覽部署及 container。先確認頁面原始碼有正確 container ID，再逐事件核對 dataLayer event、命中 trigger、觸發 tag、GA4 event name 與參數。記錄未觸發／重複觸發，不以 workspace 設定存在代替執行證據。
7. 未經明確授權不得按 Submit／Publish。通過 Preview 後，如獲授權才以可追溯名稱發布版本；記錄版本號、名稱、日期及變更範圍。
8. 正式部署後再檢查正式 HTML 的 container ID、Tag Assistant／DebugView 或 Realtime 事件。Preview 成功不代表正式環境已發布或資料已收到。

### GTM／GA4 常見故障排除

| 症狀 | 先查什麼 | 回報與處理 |
|---|---|---|
| Tag Assistant 找不到 GTM Container | 正式／預覽 HTML 是否含目標 ID；deployment commit 是否晚於環境變數設定；是否連錯網域或用舊預覽 | 分開回讀 Preview、Production 變數與 build。缺 ID 時請部署負責人修正並重新建置；不可宣稱 GTM 已載入 |
| 已連線但沒有 tag fired | workspace/container、頁面事件、trigger filter、click 變數、dataLayer 自訂事件拼字 | 逐項核對 event timeline 與 trigger 條件；不要為了看到 fired 而放寬到所有點擊 |
| 搜尋事件未觸發或每個字都多次觸發 | 網站是 focus、input、debounce 還是 dataLayer event；事件是否含 query | 按一次有效搜尋意圖定義 debounce/事件。避免把 focus 當搜尋或把每個 keystroke 記成搜尋 |
| Preview 看似成功但 GA4 無資料 | Measurement ID、Consent 狀態、GA4 property、DebugView／Realtime 時間範圍、瀏覽器擴充功能 | 以 Tag Assistant 和 GA4 DebugView／Realtime 交叉確認；無法讀 network 時用平台 read-back，不捏造 network evidence |
| 正式站有 ID，但 Preview 沒標籤 | Preview URL、是否允許該 Preview environment、舊部署快取 | 確認 deployment commit 與 environment，再連線；不要把正式容器誤認為 Preview 測試容器 |
| Cloudflare 顯示 queued／preparing | 部署狀態和 build log 最後階段 | queued／尚未開始不等於 build failure 或 in progress。只有 logs 有實際步驟時才診斷原因；沒有 logs 就明說未查明，不盲目取消或重試 |

## Search Console property 與索引要求

1. 確認使用者指定 URL-prefix 或 Domain property，以及協定、主機名、子路徑範圍。Domain property 通常涉及 DNS；若 DNS 未授權或被專案決策禁止，不能自行改走 DNS。
2. URL-prefix 搭配 GTM 驗證時，必須在完全相同的正式 prefix 上確認可抓取頁面已輸出正確 GTM container，再由作者登入 Search Console 完成驗證 read-back。預覽站的 GTM 不能證明正式 property 已驗證。
3. 只在站點已部署且獲授權提交時送 sitemap。記錄完整 URL、送出時間、平台狀態。
4. 使用者指定的頁面可送 index request；記錄網址及畫面狀態。嚴格區分已送出索引請求、Sitemap 已提交／讀取、已發現／已檢索、已收錄；前三者都不能當成已收錄。
5. 失敗時查 property scope、URL canonical、HTTP status、robots/noindex、sitemap 回應、平台訊息。只做授權範圍內修正；只讀任務不提交 sitemap 或索引要求。

## Bing Webmaster

1. 使用者授權並登入後，若有可匯入的 Search Console property，依要求匯入並讀回確切 site URL 與驗證狀態。
2. 提交與正式 canonical host 相符的 sitemap；不用 Preview host 替代正式站。
3. 回讀 Bing 顯示的提交／處理／成功狀態。Submitted、Processing 不等於已抓取或已收錄。
4. GSC 與 Bing 分別記錄 property、sitemap、時間、狀態與錯誤；一邊成功不推定另一邊完成。

## 證據分層與完成回報

| 層級 | 證據 | 可宣稱 |
|---|---|---|
| 設定 read-back | GA4／GTM／Cloudflare／GSC／Bing 畫面或受信任 API 欄位值 | 欄位目前設定值 |
| 部署產物 | 指定 commit、environment、正式／預覽 URL、HTML/container source | 此部署產物含有什麼 |
| GTM Preview | Tag Assistant container、事件時間軸、tag/trigger 結果 | 此次 debug session 的觸發結果 |
| GA4 資料 | DebugView／Realtime event name、參數、時間 | GA4 實際收到的資料（限觀察範圍） |
| 索引平台 | GSC／Bing property、sitemap、URL inspection 畫面狀態 | 平台回報狀態，不保證排名或收錄 |
| 正式環境 | 發布版本、正式 deployment、正式頁面 read-back | 正式站目前行為 |

截圖檔名與日期記入部署／量測 log。截圖若含帳號 email、權限、使用者資料或安全設定，勿放公開 repo；存核准的私有位置或先遮蔽。Public Measurement ID 與 Container ID 可記錄，secret 一律不記錄。

回報至少列：目標 domain/property/container、每個環境、已讀回設定、事件清單與 Preview 結果、是否發布及版本、GSC/Bing property 與 sitemap 狀態、索引要求狀態、截圖檔名/日期、未完成項與風險。平台不可用或證據缺失時用「未驗證／卡住」，不把嘗試當成果。
