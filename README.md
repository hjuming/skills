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

最後更新：`2026-07-07`（自動更新）

- GitHub Stars（本前台倉庫 `hjuming/skills`）：`0`
- 每月網站到訪（或轉換）量：`待接 Cloudflare 權杖或 Zone ID`
- 每月 issue / PR：`Issue 開啟 0 / 關閉 0；PR 開啟 0 / 關閉 0`
- 每季主要更新次數：`1`

#### 自動更新

- 手動同步：`node scripts/update-public-readme-metrics.mjs`
- 自動同步：GitHub Actions 每日 04:00 UTC 自動執行 .github/workflows/update-public-readme-metrics.yml
- GitHub Stars、issue / PR、季度更新次數會由 API 即時抓取更新；網站流量維持手動更新，或設定 `WEBSITE_MONTHLY_VISITS` 後改為自動化。
- GitHub Stars、issue / PR、季度更新次數會由 API 即時抓取更新；網站流量可選：
  - `WEBSITE_MONTHLY_VISITS_SOURCE=cloudflare`（Cloudflare Analytics）
  - `WEBSITE_MONTHLY_VISITS_SOURCE=ga4`（GA4 Data API）
- 也可改用 `WEBSITE_MONTHLY_VISITS` 直接人工覆寫單月數值。

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
