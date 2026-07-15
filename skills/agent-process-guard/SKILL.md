---
name: agent-process-guard
description: Use when an AI agent (Claude Code, Codex, Cursor, Antigravity) is about to take a non-trivial, irreversible, or high-risk action — including file deletion, schema migration, production deployment, credential handling, mass data modification, git force push, or any task that cannot be undone without manual recovery. Triggers include 危險操作, 高風險任務, agent guardrail, 不可逆操作, production 操作, 刪除檔案前確認, agent 暫停, 人工確認, 風險控管, process guard, agent safety, 操作前確認.
version: 1.0.0-wedo
license: internal-wedo
---

# Agent Process Guard

Agent 執行高風險操作前的暫停與確認機制。目標：讓 AI agent 在不可逆操作前主動停下來，等待人工確認。

## 觸發條件

以下任一情況出現，agent 必須暫停並說明，不得直接執行：

| 類型 | 範例 |
|------|------|
| **資料刪除** | `DROP TABLE`、`DELETE` 無條件限制、`rm -rf` |
| **Schema 變更** | 新增 migration、修改欄位類型、RLS 變更 |
| **Production 部署** | 直接推送 main/production、Cloudflare Pages 正式發佈 |
| **Credential 操作** | 讀取/寫入 `.env`、secrets、API key、service role key |
| **Git 破壞性操作** | `git force push`、`git reset --hard`、重寫 commit history |
| **大量資料修改** | 影響 100+ 筆記錄的 UPDATE、批次刪除、資料遷移 |
| **外部 API 寫入** | 發送 EDM/通知給真實用戶、Webhook 觸發、金流 API 呼叫 |

## 暫停確認格式

Agent 遇到觸發條件時，必須輸出以下格式再停下來：

```
⚠️ PROCESS GUARD — 操作需要確認

操作類型：[類型]
具體操作：[將要執行的指令或操作描述]
影響範圍：[受影響的資料、檔案、系統、用戶數量]
不可逆性：[是否可回滾，回滾方法是什麼]

請確認後我才繼續。輸入 [確認執行] 或 [取消]。
```

## 低風險豁免

以下操作不需要觸發 Guard（可直接執行）：

- 讀取操作（SELECT、讀檔、grep、ls）
- 寫入新檔案（不覆蓋既有檔案）
- 本機開發環境的 migration（非 production）
- 測試資料庫的任何操作
- `npm install`、`pip install` 等依賴安裝
- lint、type-check、build（無副作用的驗證）

## 與 ai-development-control-log 的關係

- `agent-process-guard`：**即時**暫停機制，在執行前攔截
- `ai-development-control-log`：**事後**記錄機制，記錄決策與結果

兩者應同時啟用於非 trivial 的 AI 開發任務。

## 快速啟動

所有工程任務的 context 頂部加上：

```text
掛 agent-process-guard + ai-development-control-log。
任何不可逆操作（刪資料、改 schema、部署 production、讀寫 secrets）執行前必須暫停確認。
```
