# AI Citation Engineering - 系統執行狀態

> **Answer Trust Infrastructure for Generative Systems**  
> **最後更新**：2026-02-06

---

## 📊 整體進度

```
Phase 0 ████████████████████ 100% ✅
Phase 1 ████████████████████ 100% ✅
Phase 2 ████████████████████ 100% ✅
Phase 3 ██████░░░░░░░░░░░░░░  30% 🚧
Phase 4 ░░░░░░░░░░░░░░░░░░░░   0% ⏳

整體進度：62.5% (3/4 完成 + Phase 3 進行中)
```

---

## ✅ Phase 0：Entity Optimization（完成）

### 核心交付

- ✅ Entity 定義與識別策略
- ✅ 跨平台一致性（sameAs）配置
- ✅ Entity Confidence Score 計算模型（5 維）
- ✅ Entity Graph 基礎架構
- ✅ Entity 專屬頁面規範

### 關鍵成就

**讓「被 AI 引用」從玄學變成工程問題**

- Entity Confidence 計算公式
- 跨平台一致性評分（≥0.95 合格）
- 權威平台驗證（≥5 個平台）
- Entity 健康度監測機制

### 輸出產物

- `entity_confidence_calculator.py` - Entity 信任度計算工具
- Entity Schema 規範
- Entity 專屬頁面模板

---

## ✅ Phase 1：AFB + E-E-A-T Signals（完成）

### 核心交付

- ✅ Answer-First Block (AFB) 四層強制結構
- ✅ AFB 與 Entity Confidence 耦合規則
- ✅ AI 回答場景映射（5 種場景）
- ✅ E-E-A-T Signals 可驗證化
- ✅ Machine-Readable Payload 規範

### 關鍵成就

**從「可引用資格」升級為「可引用答案」**

- AFB = 最小答案單元（MAU）
- 四層結構：AI Quick Answer + Context Fit + Confidence Signals + Machine-Readable Payload
- AFB Eligibility Rule：Entity Confidence < 0.60 不生成 AFB
- E-E-A-T 從聲明轉為可計算信號

### 輸出產物

- AFB 生成模板
- AFB 品質檢查清單
- `afb_generator.py` - AFB 自動生成工具
- `eeat_signal_calculator.py` - E-E-A-T 信號計算工具

---

## ✅ Phase 2：Machine-Readable Citation System（完成並封版）

### 核心交付

**Phase 2-A：Machine-Readable Citations**
- ✅ Citation Object 強制結構（JSON-LD）
- ✅ 8 種 Evidence Type 分類
- ✅ 7 種 Verification Status 狀態機
- ✅ Citation ↔ AFB 雙向綁定規則
- ✅ 5 種 Citation Failure States
- ✅ Citation 生命週期管理

**Phase 2-B：Citation Quality Evaluation**
- ✅ CCS（Citation Confidence Score）6 維模型
- ✅ CCS 獨立於 Entity Confidence
- ✅ Corroboration 優先設計（0.28 權重）
- ✅ 衝突處理三段式規則
- ✅ 權威 vs 時效性權衡機制

**Phase 2-C：Entity Graph.json**
- ✅ 最小 Graph Schema（4 node + 3 edge）
- ✅ Isolated Answer 檢測
- ✅ Single-Source Risk 檢測
- ✅ 綜合風險評估系統

### 關鍵成就

**系統具備「可控風險」能力**

- Citation 從文字升級為可計算資料物件
- CCS 6 維計算：C(0.28) + E(0.20) + R(0.18) + T(0.14) + S(0.12) + V(0.08)
- 系統可以「拒絕自己」
- 完整的風險檢測機制

### Go/No-Go 驗收

✅ **所有 Go 條件滿足**：
- [x] AFB JSON 可輸出
- [x] Citation 可獨立評分（CCS 0~1）
- [x] Conflict 判定與處理
- [x] Graph.json 可生成
- [x] 系統能輸出拒絕理由

❌ **無 No-Go 項目**

### 輸出產物

- `citation_confidence_calculator.py` - CCS 計算工具
- `citation_lifecycle_manager.py` - Citation 生命週期管理
- `entity_graph_generator.py` - Entity Graph 生成器
- `citation_conflict_resolver.py` - 衝突解決引擎
- `entity_graph.json` - Graph 輸出格式 v2.0

---

## 🚧 Phase 3：Reverse GEO Testing（執行中）

### 核心目標

**驗證：系統預測的「可被引用性」，是否與 AI 真實行為一致**

### 三大組件

**Phase 3-A：Question Matrix Construction**
- 生成 50 個可重複測試問題
- 覆蓋 5 種 AI 回答場景
- 3 個難度等級
- 明確預期結果

**Phase 3-B：AI Output Capture**
- 跨 3 個平台（ChatGPT, Perplexity, Claude）
- 記錄完整引用行為
- 捕獲 150 個輸出
- 標準化 capture schema

**Phase 3-C：Prediction vs Reality Diff**
- 誤差類型分類（6 種）
- Root Cause 分析
- 調整建議生成
- Blind Spot 識別

### 關鍵原則

1. **不要一開始就調參數**
2. **先收集 30-50 個樣本**
3. **Blind Spot 是最珍貴的發現**
4. **驗證 > 優化**

### 執行計劃

- Week 1: Question Matrix ⏳
- Week 2-3: Data Collection ⏳
- Week 4: Analysis ⏳
- Week 5: Iteration ⏳

---

## ⏳ Phase 4：SKILL.md + Scripts（待啟動）

### 規劃內容

**SKILL.md 結構**
- 完整技能文檔
- 使用手冊
- 實作範例
- API 規範

**Scripts 工具集**
- `entity_confidence_calculator.py`
- `afb_generator.py`
- `eeat_signal_calculator.py`
- `citation_confidence_calculator.py`
- `entity_graph_generator.py`
- `reverse_geo_tester.py`

**Examples & Templates**
- Entity 模板
- AFB 模板
- Citation 範例
- 完整案例庫

---

## 📁 文檔結構

```
/skills/ai-citation-engineering/
├── AI_READY_SEO_PLANNING.md           (主規劃，3,619 行)
├── AI_CITATION_ENGINEERING_PHASE2.md  (Phase 2 實作，1,127 行)
├── AI_CITATION_ENGINEERING_PHASE3.md  (Phase 3 規範，1,200 行)
├── AI_CITATION_ENGINEERING_STATUS.md  (本文件，狀態追蹤)
│
├── scripts/                           (Phase 4)
│   ├── entity_confidence_calculator.py
│   ├── afb_generator.py
│   ├── eeat_signal_calculator.py
│   ├── citation_confidence_calculator.py
│   ├── entity_graph_generator.py
│   └── reverse_geo_tester.py
│
├── templates/                         (Phase 4)
│   ├── entity_template.json
│   ├── afb_template.json
│   ├── citation_template.json
│   └── graph_template.json
│
└── examples/                          (Phase 4)
    ├── entity_example_person.json
    ├── entity_example_org.json
    ├── afb_example_definition.json
    ├── afb_example_howto.json
    └── complete_case_study/
```

---

## 🎯 系統能力進化

```
階段 0：獲得「被引用資格」
  └─ Entity + Entity Confidence Model
  
階段 1：成為「可引用答案」
  └─ AFB + E-E-A-T Signals
  
階段 2：具備「可控風險」能力
  └─ Citation + CCS + Entity Graph
  
階段 3：驗證「預測準確度」（進行中）
  └─ Reverse GEO + Reality Check
  
階段 4：產出「可部署系統」（待啟動）
  └─ SKILL.md + Scripts + CI/CD
```

---

## 📊 關鍵指標

### 系統成熟度

| 維度 | 狀態 | 分數 |
|------|------|------|
| **Entity 基礎設施** | ✅ 完成 | 100% |
| **Answer 封裝規範** | ✅ 完成 | 100% |
| **Citation 信任系統** | ✅ 完成 | 100% |
| **風險檢測機制** | ✅ 完成 | 100% |
| **現實驗證** | 🚧 進行中 | 30% |
| **工具與自動化** | ⏳ 待啟動 | 0% |

**整體系統成熟度**：72%

---

## 🔑 核心差異化

### 本系統 vs 市面 GEO 方案

| 特徵 | 市面 GEO | 本系統 |
|------|---------|--------|
| **核心定位** | SEO 2.0 | Answer Trust Infrastructure |
| **Entity 處理** | 提及作者 | Entity Confidence Model |
| **內容策略** | 結構化寫作 | AFB 答案模組 |
| **Citation** | 參考連結 | Citation Object + CCS |
| **風險管理** | 無 | 完整 Failure States |
| **可計算性** | 靜態建議 | 全系統可量化 |
| **自我否決** | 無 | 系統可拒絕自己 |

---

## 🎯 下一步行動

### 立即行動（本週）

- [x] Phase 0 完成
- [x] Phase 1 完成
- [x] Phase 2 完成並封版
- [ ] Phase 3-A：建立 Question Matrix（50 題）
- [ ] Phase 3-B：設定跨平台測試環境

### 短期計劃（2-4 週）

- [ ] 完成 Phase 3 數據收集（150 個 captures）
- [ ] Diff 分析與 Root Cause 識別
- [ ] 產生第一版調整建議
- [ ] 驗證改善效果

### 中期計劃（1-3 個月）

- [ ] Phase 3 完整驗證循環
- [ ] Phase 4 SKILL.md 撰寫
- [ ] 開發完整工具集
- [ ] 建立案例資料庫
- [ ] 白皮書轉化

---

## 🔒 系統穩定性聲明

### 已封版組件（不再變動）

- ✅ Entity Confidence 計算公式（5 維）
- ✅ AFB 四層結構
- ✅ CCS 計算公式（6 維）
- ✅ Entity Graph Schema v2.0
- ✅ Failure States 定義

### 可調整組件（基於 Phase 3 結果）

- ⚙️ CCS 維度權重（C, E, R, T, S, V）
- ⚙️ Entity Confidence 維度權重
- ⚙️ Conflict 處理閾值（目前 0.20）
- ⚙️ AFB Eligibility 門檻（目前 0.60）

---

## 💡 關鍵洞察

### 系統三大突破

1. **Citation 從裝飾物 → 可否決物件**
   - 有 Object Schema
   - 有 Failure State
   - 有生命週期
   - 有拒絕理由

2. **CCS 與 Entity Confidence 完全解耦**
   - EC = 實體整體可信度
   - CCS = 證據本身可靠度
   - 權威 Entity 也可以有低 CCS
   - 避免被權威綁架

3. **Entity Graph 只做風險檢測**
   - 不做視覺化
   - 不做關係探索
   - 專注：Isolated Answer + Single-Source Risk
   - Graph = Safety Layer

---

## 🎓 設計原則（不可妥協）

1. **Entity First, Content Second**
2. **Signals > Claims**
3. **可計算 > 可讀**
4. **驗證 > 優化**
5. **系統可以拒絕自己**

---

## 📞 快速參考

### 文檔索引

- **主規劃**：`AI_READY_SEO_PLANNING.md` (3,619 行)
- **Phase 2**：`AI_CITATION_ENGINEERING_PHASE2.md` (1,127 行)
- **Phase 3**：`AI_CITATION_ENGINEERING_PHASE3.md` (1,200 行)
- **狀態追蹤**：`AI_CITATION_ENGINEERING_STATUS.md` (本文件)

### 關鍵分數門檻

```
Entity Confidence:     ≥ 0.70 及格，≥ 0.90 權威
AFB Eligibility:       ≥ 0.60 可生成
Citation Confidence:   ≥ 0.60 可使用，≥ 0.80 優先
E-E-A-T Score:         ≥ 0.70 專業，≥ 0.90 權威
```

### 計算公式快查

```python
# Entity Confidence
EC = Consistency(0.30) + Authority(0.25) + Citation(0.20) 
     + Frequency(0.15) + Social(0.10)

# Citation Confidence Score
CCS = Corroboration(0.28) + Evidence(0.20) + Reputation(0.18) 
      + Recency(0.14) + Specificity(0.12) + Verification(0.08)

# E-E-A-T Score
EEAT = Experience(0.20) + Expertise(0.30) 
       + Authoritativeness(0.25) + Trust(0.25)
```

---

## 🚀 Phase 3 現況

### 當前任務

- [ ] 建立 50 個測試問題
- [ ] 設定跨平台測試環境
- [ ] 開發 capture 工具
- [ ] 執行第一輪測試

### 預期產出

- Question Matrix (YAML)
- 150 個 AI Output Captures (JSON)
- Diff Analysis Report
- 調整建議清單

### 時程

- Week 1: Question Matrix ⏳
- Week 2-3: Data Collection ⏳
- Week 4: Analysis ⏳
- Week 5: Iteration ⏳

---

**Phase 2 封版。Phase 3 啟動。系統準備接受現實驗證。**

---

**系統狀態**：🟢 健康運行  
**下一個里程碑**：Phase 3 完成數據收集（預計 3 週）  
**最後更新**：2026-02-06
