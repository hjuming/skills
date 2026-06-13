# Skills WEDO Public Web

AI 能力提升實戰與 Skills 快速上手。  
This repository contains the public static frontend for [skills.wedopr.com](https://skills.wedopr.com).

![Skills WEDO Hero](assets/og-skills-wedo-1200x630.png)

## 專案定位

Skills WEDO Public Web 是 AI 學習者進入 agent 生態的公開導覽入口。  
目標是降低「會不會用 Skills」與「不知道安裝」之間的落差，提供可直接複製、可直接實作的導入流程。

- 讓初學者理解什麼是 Skill、Prompt、MCP、AGENTS/CLAUDE.md 的差異
- 幫助快速找到可重複使用的推薦 Skills
- 提供可複製安裝/初始化指令與工作流提示
- 支援後續維護與個人化工作流建立

網站上線網址：<https://skills.wedopr.com>

## 為什麼這個專案需要 Codex for Open Source 支持

### 1) 專案對整體生態系有實際價值
- Skills 這類基礎工具的導入門檻高，卻影響大量 AI coding workflow 的實際品質與效率。  
- 本站不只展示內容，而是承接「能否開始使用」的落地問題：選擇、安裝、操作、維護、持續迭代。
- 透過前端導覽，將 AI 初學者的第一步路徑標準化，對 AI 工具普及有放大效應。

### 2) 維護工作已形成持續且可擴展的負擔
- 定期更新首頁結構、SEO/分享 metadata、快取策略與安全邊界
- 持續同步推薦清單，確保技能建議保持一致與可理解
- 回應社群提問、整理 issue、審查內容修改、管理外部連結與行為導向
- 管理發布流程（快取版本對齊、export 流程、導向規則維持）

### 3) 安全與品質風險高，需更強化的維護工具
- 網站對外可見，任何不當連結、快取策略、腳本變更都可能直接影響使用者信任。
- 我們維持「不外露憑證、不外流機密」原則，但仍需持續稽核可能回流的敏感字串與路徑。
- `Codex Security` 可在維護流程中降低漏檢風險，縮短審核時間，維持高品質更新節奏。

### 4) 參與指標（請在申請時補實際數值）

最後更新：`2026-06-10`（自動更新）

- GitHub Stars（本前台倉庫 `hjuming/skills`）：`N/A`
- 每月網站到訪（或轉換）量：`待接 GA/Cloudflare 接口`
- 每月 issue / PR：`Issue 開啟 N/A / 關閉 N/A；PR 開啟 N/A / 關閉 N/A`
- 每季主要更新次數：`28`

#### 自動更新

- 手動同步：`node scripts/update-public-readme-metrics.mjs`
- 自動同步：GitHub Actions 每日 04:00 UTC 自動執行 .github/workflows/update-public-readme-metrics.yml
- GitHub Stars、issue / PR、季度更新次數會由 API 即時抓取更新；網站流量可由 Cloudflare Analytics 或 GA4 Data API 自動補齊。

##### 流量來源可切換（雙軌道）

- `WEBSITE_MONTHLY_VISITS_SOURCE=cloudflare`：使用 Cloudflare Analytics API（預設）
- `WEBSITE_MONTHLY_VISITS_SOURCE=ga4`：使用 GA4 Data API
- 不設定時預設為 Cloudflare；也可在 GitHub Actions `workflow_dispatch` 點手動輸入，或用 repo variables 設 `WEBSITE_MONTHLY_VISITS_SOURCE`。

##### Cloudflare Analytics 自動補齊（推薦）

要自動填 `每月網站到訪（或轉換）量`，先完成 2 件事：

1. 在 GitHub Actions 設定 Secrets（本 repo 需有權限）：
   - `CLOUDFLARE_ZONE_ID`：要查詢的 Zone ID（對應 `skills.wedopr.com` 的 zone）
   - `CLOUDFLARE_API_TOKEN`：Cloudflare API Token，最低權限建議 `Zone: Read` + `Zone Settings: Read`

2. 檢查工作流程已啟用 Cloudflare 來源（目前預設為 on）：
   - `.github/workflows/update-public-readme-metrics.yml` 的 `WEBSITE_MONTHLY_VISITS_SOURCE: cloudflare`
   - `scripts/update-public-readme-metrics.mjs` 會用 `zones/{zoneId}/analytics/dashboard` 查詢月份累計訪客量

##### GA4 Data API 自動補齊

1. 在 GitHub Actions 設定 Secrets：
   - `GA4_PROPERTY_ID`：GA4 財產 ID（數字字串，例如 `123456789`）
   - `GA4_ACCESS_TOKEN`：GA4 Data API 的 OAuth Access Token，建議使用 `https://www.googleapis.com/auth/analytics.readonly` scope
2. 依序啟用 GA4 來源：
   - `.github/workflows/update-public-readme-metrics.yml` 設定 `WEBSITE_MONTHLY_VISITS_SOURCE: ga4`
   - 或在手動執行時帶入：`WEBSITE_MONTHLY_VISITS_SOURCE=ga4`
3. 如需追蹤不同口徑（例如瀏覽量），可補上：
   - `GA4_METRIC_NAME=screenPageViews`（預設是 `sessions`）

> GA4 建議建立可自動輪替 token 的方式，避免手動維護短效 token。

如果你先不想接任一 API，先手動維持值也可以：

- `WEBSITE_MONTHLY_VISITS`：在 workflow env（或本地執行）直接寫入目前月份數值。
- 範例手動：`WEBSITE_MONTHLY_VISITS=1234 node scripts/update-public-readme-metrics.mjs web/PUBLIC_README.md`

GA4 來源可直接改 `WEBSITE_MONTHLY_VISITS_SOURCE=ga4` 使用，同步時需補齊 GA4 的 Access Token 與 Property ID（見下方區段）。

> 申請文件可直接抄到這段，最後更新前只改上方 ___

## 專案架構（公開檔案）

本倉庫只包含對外發布的前台靜態資源：

- `index.html`
- `styles.css`
- `app.js`
- `skills-data.js`
- `sw.js`
- `llms.txt`
- `robots.txt`
- `sitemap.xml`
- `_redirects`
- `_headers`
- `assets/*`
- `favicon_io/*`

內部 WEDO workflow Skills、歷史 skill archive、內部設定文件、完整 `skills/` 內容都不會包含在這個 public export。

## 本地預覽

```bash
python3 -m http.server 4190 --bind 127.0.0.1
```

再開啟：

```text
http://127.0.0.1:4190/
```

## 維護規則（對外）

- 只納入面向公開訪客與 GitHub 閱讀者的內容。
- 不放入 API key、環境變數、客戶專案機密流程、私人本機路徑。
- 所有對外資料變更都需確認不外洩 WEDO 內部工作流與敏感路徑。
- 任何新增推薦 Skill，需具備：
  - 明確用途
  - 可複製範例 prompt
  - 可公開查閱的連結來源

## 最新更新（2026-06-10）

- 首頁導向調整為五步學習流程（定位、發現、安裝、使用、維護）。
- 新增 `agent-process-guard` 至公開推薦流程。
- 版本與快取同步：
  - `index.html` 使用 `styles.css?v=20260610-five-modules`
  - `sw.js` `skills-cache-v4.2`、`skills-runtime-v4.2`
- 安全邊界維持不變：不公開內部 workflow、金鑰、私有 repository path。
