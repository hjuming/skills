# AI Citation Engineering - 專案結構說明

> **Answer Trust Infrastructure for Generative Systems**

---

## 📁 資料夾結構

```
ai-citation-engineering/
├── SKILL.md                             # ⭐ 主技能文檔（Cursor 調用入口）
├── README.md                            # 🚀 專案概覽與快速開始
├── AI_CITATION_ENGINEERING_INDEX.md     # 📚 完整文檔索引
├── AI_CITATION_ENGINEERING_STATUS.md    # 📊 專案進度與狀態
├── PROJECT_STRUCTURE.md                 # 📁 本文件：專案結構說明
├── CHANGELOG.md                         # 📝 版本更新記錄
│
├── docs/                                # 📖 完整技術文檔
│   ├── AI_READY_SEO_PLANNING.md        # Phase 0-1 核心規劃（3,625 行）
│   ├── AI_CITATION_ENGINEERING_PHASE2.md  # Phase 2 實作規範（1,127 行）
│   ├── AI_CITATION_ENGINEERING_PHASE3.md  # Phase 3 測試方法（700 行）
│   └── EXECUTIVE_SUMMARY.md            # 執行摘要（決策參考）
│
├── templates/                          # 🎨 JSON-LD 模板
│   ├── entity_template.json           # Entity 建立模板
│   ├── afb_template.json              # Answer-First Block 模板
│   └── citation_template.json         # Citation 模板
│
├── examples/                           # 💡 實際使用範例
│   ├── entity_example_person.json     # Entity 範例（個人）
│   ├── afb_example_definition.json    # AFB 範例（定義型）
│   └── citation_example_peer_reviewed.json  # Citation 範例（同儕審查）
│
├── scripts/                            # 🛠️ 工具腳本（待開發）
│   ├── phase0/                        # Phase 0 工具
│   ├── phase1/                        # Phase 1 工具
│   ├── phase2/                        # Phase 2 工具
│   └── phase3/                        # Phase 3 工具
│
└── references/                         # 📚 參考資料與研究
    └── (待補充)
```

---

## 🎯 快速導航

### 如果你是...

#### 👤 第一次接觸此系統
**開始於**: `README.md` → `SKILL.md`  
**閱讀時間**: 15 分鐘

---

#### 🔧 技術實作者
**開始於**: `SKILL.md` → `templates/` → `examples/`  
**然後**: `docs/AI_READY_SEO_PLANNING.md` (Phase 0-1)  
**閱讀時間**: 1 小時

---

#### 📊 決策者/管理者
**開始於**: `docs/EXECUTIVE_SUMMARY.md`  
**然後**: `AI_CITATION_ENGINEERING_STATUS.md`  
**閱讀時間**: 20 分鐘

---

#### 🔬 研究者/深度用戶
**開始於**: `AI_CITATION_ENGINEERING_INDEX.md`  
**閱讀路徑**: 按 Phase 0 → 1 → 2 → 3 順序  
**閱讀時間**: 3-5 小時（完整）

---

#### 🚀 SEO/內容專業人員
**開始於**: `SKILL.md` - "與現有 Skills 的整合"  
**然後**: `templates/afb_template.json` + `examples/`  
**閱讀時間**: 30 分鐘

---

## 📖 核心文檔說明

### 1. SKILL.md（⭐ 最重要）
**用途**: Cursor 技能調用的入口文檔  
**內容**:
- 技能定位與核心概念
- 使用時機與檢查清單
- 快速開始指南
- 與其他 Skills 的整合
- 關鍵公式與門檻值

**何時閱讀**: 每次調用此技能前，或需要快速參考時

---

### 2. README.md
**用途**: 專案總覽與快速啟動  
**內容**:
- 系統架構圖
- 三個核心能力
- 為什麼要用這套系統
- 快速開始（3 步驟）

**何時閱讀**: 第一次接觸，或向他人介紹此系統

---

### 3. AI_CITATION_ENGINEERING_INDEX.md
**用途**: 完整文檔地圖與導航中心  
**內容**:
- 按角色的閱讀路徑
- 按主題的快速查找
- 工具與腳本索引
- 核心概念速查

**何時閱讀**: 需要找特定主題，或規劃完整學習路徑

---

### 4. AI_CITATION_ENGINEERING_STATUS.md
**用途**: 專案進度儀表板  
**內容**:
- 各 Phase 完成狀態
- 核心交付物清單
- Go/No-Go 檢查清單
- 剩餘任務摘要

**何時閱讀**: 檢查專案進度，或決定下一步行動

---

## 📚 技術文檔說明（docs/）

### Phase 0-1: AI_READY_SEO_PLANNING.md
**長度**: 3,625 行  
**核心內容**:
- **Phase 0**: Entity Optimization（絕對第一優先）
  - Entity Confidence Score（5 維計算模型）
  - Entity Lock-In 策略
  - Entity Graph 建構
- **Phase 1**: Answer-First Block + E-E-A-T Signals
  - AFB 四層強制結構
  - E-E-A-T 從聲明到可驗證信號
- **六大技術檢測指標**
  - 爬蟲規則、Sitemap、Schema、Meta、HTML、API

**閱讀建議**: 分段閱讀，Phase 0 → Phase 1

---

### Phase 2: AI_CITATION_ENGINEERING_PHASE2.md
**長度**: 1,127 行  
**核心內容**:
- **Phase 2-A**: Machine-Readable Citations
  - Citation Object 強制結構
  - Evidence Type 分類（8 種）
  - Verification Status 狀態機
  - Citation Failure States（5 種）
- **Phase 2-B**: Citation Confidence Score（CCS）
  - 6 維計算模型（獨立於 Entity Confidence）
  - Conflict Handling 規則
  - Authority vs Recency Trade-off
- **Phase 2-C**: Entity Graph.json
  - 最小 Graph Schema
  - Isolated Answer 檢測
  - Single-Source Risk 檢測

**閱讀建議**: 完成 Phase 0-1 後再讀

---

### Phase 3: AI_CITATION_ENGINEERING_PHASE3.md
**長度**: 700 行  
**核心內容**:
- **Phase 3-A**: Question Matrix 建構
- **Phase 3-B**: AI Output Capture
- **Phase 3-C**: Prediction vs Reality Diff
  - 6 種 Diff 類型
  - Root Cause 分析
  - 調整建議（需 30+ 樣本）

**狀態**: ⚠️ 規範完成，實測進行中

---

### EXECUTIVE_SUMMARY.md
**用途**: 決策者參考文檔  
**核心內容**:
- 為什麼傳統 SEO 失效
- ROI 預期與週期
- 實施路徑圖
- 關鍵風險
- 競爭對比

**閱讀時間**: 15 分鐘

---

## 🎨 模板使用說明（templates/）

### entity_template.json
**用途**: 建立 Entity（Person / Organization）  
**必填欄位**:
- `@id`（唯一 URI）
- `name`
- `sameAs`（至少 5 個）

**建議填寫**:
- `knowsAbout`（專業領域）
- `worksFor`（組織）

---

### afb_template.json
**用途**: 創建 Answer-First Block  
**四層強制結構**:
1. `text`（AI Quick Answer）
2. `contextFit`（適用/不適用）
3. `additionalProperty`（Confidence Signals）
4. `citation`（Machine-Readable Payload）

---

### citation_template.json
**用途**: 添加 Machine-Readable Citation  
**關鍵欄位**:
- `citation_id`（唯一 ID）
- `evidence_type`（8 種分類）
- `verification_status`（狀態機）
- `corroboration_sources`（交叉驗證）

---

## 💡 範例使用說明（examples/）

### entity_example_person.json
**展示內容**:
- 完整的 Person Entity
- 跨平台 `sameAs` 連結
- `knowsAbout` 專業領域定義

**使用方式**: 複製並修改為自己的資訊

---

### afb_example_definition.json
**展示內容**:
- 定義型 AFB 的完整結構
- Context Fit 的適用/不適用情境
- Confidence Signals 的 JSON 格式

**使用方式**: 作為 AFB 設計的參考範本

---

### citation_example_peer_reviewed.json
**展示內容**:
- 同儕審查等級的 Citation
- CCS 各維度的具體數值
- Methodology 完整記錄

**使用方式**: 高品質 Citation 的標準範例

---

## 🛠️ 腳本與工具（scripts/）

### 目前狀態
⚠️ **Phase 4 待開發**

### 規劃中的工具

#### Phase 0
- `entity_confidence_calculator.py` - 計算 Entity Confidence
- `entity_optimizer.py` - Entity 優化建議

#### Phase 1
- `afb_generator.py` - 從內容生成 AFB
- `eeat_signal_calculator.py` - E-E-A-T 信號計算

#### Phase 2
- `citation_confidence_calculator.py` - 計算 CCS
- `entity_graph_generator.py` - 生成 Entity Graph
- `citation_conflict_resolver.py` - 衝突解決

#### Phase 3
- `reverse_geo_tester.py` - 反向 GEO 測試
- `output_capture.py` - AI 輸出捕獲
- `diff_analyzer.py` - 差異分析

---

## 📝 使用工作流程

### Workflow 1：新內容創建

```
1. 使用 templates/entity_template.json
   → 建立/驗證 Entity
   → 目標：Entity Confidence ≥ 0.70

2. 創建內容初稿
   → 確保有清晰主題與可驗證資訊

3. 使用 templates/afb_template.json
   → 重組為 AFB 格式
   → 確保四層結構完整

4. 使用 templates/citation_template.json
   → 添加高品質 Citations
   → 目標：CCS ≥ 0.70，至少 2 個來源

5. （待 Phase 2 工具完成）
   → 生成 Entity Graph
   → 檢查 Isolated Answer / Single-Source Risk

6. 發布並驗證
   → 使用 Phase 3 測試方法
```

---

### Workflow 2：現有內容優化

```
1. 評估 Entity Confidence
   → 如果 < 0.60，先提升 Entity

2. 選擇核心頁面（5-10 頁）
   → 優先選擇流量高或主題核心的頁面

3. 重組為 AFB 格式
   → 參考 examples/afb_example_definition.json

4. 添加/優化 Citations
   → 確保至少 2 個獨立來源

5. 驗證風險
   → 檢查是否有 Isolated Answer 或 Single-Source Risk

6. 發布更新
```

---

## 🔑 關鍵公式速查

### Entity Confidence (EC)
```
EC = Consistency(0.30) + Authority(0.25) + Citation(0.20) 
     + Frequency(0.15) + Social(0.10)
```
**門檻**: ≥ 0.70（及格），≥ 0.90（權威）

---

### Citation Confidence Score (CCS)
```
CCS = Corroboration(0.28) + Evidence(0.20) + Reputation(0.18) 
      + Recency(0.14) + Specificity(0.12) + Verification(0.08)
```
**門檻**: ≥ 0.70（可用），≥ 0.90（優先）  
**注意**: CCS 獨立於 EC

---

### E-E-A-T Score
```
EEAT = Experience(0.20) + Expertise(0.30) 
       + Authoritativeness(0.25) + Trust(0.25)
```
**門檻**: ≥ 0.70（專業），≥ 0.90（權威）

---

## 🚨 重要原則

### DO（必須做）
1. ✅ 始終從 Entity 開始
2. ✅ AFB 四層結構不可省略
3. ✅ 確保 CCS 獨立於 EC
4. ✅ 記錄 Failure States
5. ✅ 先驗證再優化（Phase 3）

### DON'T（禁止做）
1. ❌ 不要跳過 Entity 建立
2. ❌ 不要在數據不足時調參數
3. ❌ 不要混淆 EC 與 CCS
4. ❌ 不要省略「不適用情境」
5. ❌ 不要把 Graph 當視覺化

---

## 📊 專案狀態總覽

**版本**: v0.5.0  
**最後更新**: 2026-02-06

| Phase | 狀態 | 完成度 | 核心交付物 |
|-------|------|--------|-----------|
| Phase 0 | ✅ 完成 | 100% | Entity Optimization + EC Model |
| Phase 1 | ✅ 完成 | 100% | AFB + E-E-A-T Signals |
| Phase 2 | ✅ 封版 | 100% | Citation System + CCS + Graph |
| Phase 3 | 🚧 進行中 | 75% | Reverse GEO Testing |
| Phase 4 | ⏳ 待啟動 | 0% | Scripts + Tools |

---

## 🔗 相關資源

### 內部連結
- [SKILL.md](./SKILL.md) - 主技能文檔
- [README.md](./README.md) - 專案概覽
- [INDEX](./AI_CITATION_ENGINEERING_INDEX.md) - 文檔索引
- [STATUS](./AI_CITATION_ENGINEERING_STATUS.md) - 進度儀表板

### 文檔
- [Phase 0-1](./docs/AI_READY_SEO_PLANNING.md)
- [Phase 2](./docs/AI_CITATION_ENGINEERING_PHASE2.md)
- [Phase 3](./docs/AI_CITATION_ENGINEERING_PHASE3.md)
- [Executive Summary](./docs/EXECUTIVE_SUMMARY.md)

### 模板與範例
- [Templates](./templates/)
- [Examples](./examples/)

---

## 💬 常見問題

### Q: 我應該從哪裡開始？
**A**: 
1. 閱讀 `SKILL.md`（15 分鐘）
2. 使用 `templates/entity_template.json` 建立 Entity
3. 參考 `examples/` 創建第一個 AFB

---

### Q: 文檔太長，如何快速找到我需要的內容？
**A**: 
1. 使用 `AI_CITATION_ENGINEERING_INDEX.md` 按主題查找
2. 使用 `SKILL.md` 的檢查清單快速參考
3. 查看 `PROJECT_STRUCTURE.md`（本文件）的「快速導航」

---

### Q: Phase 3 什麼時候完成？
**A**: 
Phase 3 規範已完成，正在進行實測。完成後會更新 `CHANGELOG.md` 和 `AI_CITATION_ENGINEERING_STATUS.md`。

---

### Q: 我可以只用部分功能嗎（如只用 Entity）？
**A**: 
可以，但：
- 沒有 Entity → 沒有資格被引用
- 沒有 AFB → AI 難以抽取答案
- 沒有 Citations → 缺乏可驗證性

**建議**: 至少完成 Phase 0（Entity）+ Phase 1（AFB）。

---

## 📮 專案維護

**專案名稱**: AI Citation Engineering  
**定位**: Answer Trust Infrastructure for Generative Systems  
**狀態**: 🟢 活躍開發  
**最後更新**: 2026-02-06

---

**開始使用**: 閱讀 [README.md](./README.md) 或 [SKILL.md](./SKILL.md)
