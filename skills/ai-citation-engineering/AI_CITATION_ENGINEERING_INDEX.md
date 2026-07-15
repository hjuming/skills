# AI Citation Engineering - 系統文檔索引

> **Answer Trust Infrastructure for Generative Systems**  
> **完整文檔導覽與快速入口**

---

## 📚 文檔結構

### 核心文檔（必讀）

#### 1. 主規劃文檔
**檔案**：`AI_READY_SEO_PLANNING.md` (3,619 行)

**內容**：
- 系統定位與核心目標
- Phase 0：Entity Optimization 完整規範
- Phase 1：AFB + E-E-A-T Signals 完整規範
- 六大技術檢測指標
- 與現有 Skills 的協同整合
- 實施計劃與時程

**適合對象**：
- 系統架構師
- 內容策略負責人
- 想了解完整設計的開發者

**閱讀時間**：60-90 分鐘

---

#### 2. Phase 2 實作文檔
**檔案**：`AI_CITATION_ENGINEERING_PHASE2.md` (1,127 行)

**內容**：
- Machine-Readable Citations 完整規範
- Citation Confidence Score (CCS) 6 維模型
- Citation 生命週期管理
- Entity Graph.json 實作
- Go/No-Go 驗收清單

**適合對象**：
- 後端工程師
- 數據科學家
- 需要實作 Citation 系統的開發者

**閱讀時間**：45-60 分鐘

---

#### 3. Phase 3 測試規範
**檔案**：`AI_CITATION_ENGINEERING_PHASE3.md` (1,200 行)

**內容**：
- Reverse GEO Testing 方法論
- Question Matrix 構建規範
- AI Output Capture 標準
- Prediction vs Reality Diff 分析

**適合對象**：
- QA 測試人員
- 數據分析師
- 需要驗證系統的研究者

**閱讀時間**：40-55 分鐘

---

#### 4. 執行狀態追蹤
**檔案**：`AI_CITATION_ENGINEERING_STATUS.md`

**內容**：
- 整體進度儀表板
- 各 Phase 完成狀態
- 關鍵指標快查
- 下一步行動清單

**適合對象**：
- 專案管理者
- 需要快速了解進度的決策者

**閱讀時間**：5-10 分鐘

---

## 🚀 快速入口

### 我是...

#### 👨‍💼 決策者/管理層
**想知道**：這是什麼？為什麼要做？進度如何？

**閱讀路徑**：
1. `AI_CITATION_ENGINEERING_STATUS.md` - 5 分鐘了解全局
2. `AI_READY_SEO_PLANNING.md` - 只讀「專案概述」章節（前 100 行）

---

#### 👨‍🎨 內容創作者/SEO 專家
**想知道**：如何優化內容？有什麼新方法？

**閱讀路徑**：
1. `AI_READY_SEO_PLANNING.md` - 閱讀「核心策略框架」
   - 策略 0：Entity Optimization
   - 策略 1：Answer-First Block (AFB)
2. 實作時參考 Phase 2-A：Citation 規範

---

#### 👨‍💻 前端/後端工程師
**想知道**：如何實作？有什麼技術規範？API 格式？

**閱讀路徑**：
1. `AI_READY_SEO_PLANNING.md` - 閱讀「六大技術檢測指標」
2. `AI_CITATION_ENGINEERING_PHASE2.md` - 完整技術規範
3. 查看 JSON Schema 範例與 API 定義

---

#### 👨‍🔬 數據科學家/研究者
**想知道**：評分模型如何設計？如何驗證？

**閱讀路徑**：
1. `AI_READY_SEO_PLANNING.md` - Entity Confidence Model
2. `AI_CITATION_ENGINEERING_PHASE2.md` - CCS 6 維模型
3. `AI_CITATION_ENGINEERING_PHASE3.md` - 驗證方法論

---

#### 👨‍🏫 想全面了解系統
**想知道**：完整設計邏輯與實作細節

**閱讀路徑**：
1. `AI_CITATION_ENGINEERING_STATUS.md` - 了解整體架構
2. `AI_READY_SEO_PLANNING.md` - Phase 0 & Phase 1
3. `AI_CITATION_ENGINEERING_PHASE2.md` - Phase 2
4. `AI_CITATION_ENGINEERING_PHASE3.md` - Phase 3

**總閱讀時間**：2.5-3 小時

---

## 🎯 核心概念速查

### Entity Confidence Score (EC)

**公式**：
```
EC = Consistency(0.30) + Authority(0.25) + Citation(0.20) 
     + Frequency(0.15) + Social(0.10)
```

**門檻**：
- ≥ 0.90：權威
- ≥ 0.70：及格
- < 0.60：不及格

**文檔位置**：`AI_READY_SEO_PLANNING.md` - Entity Confidence Model

---

### Answer-First Block (AFB)

**四層結構**：
1. AI Quick Answer（≤30 字）
2. Context Fit（適用/不適用場景）
3. Confidence Signals（信任信號）
4. Machine-Readable Payload（JSON-LD）

**資格門檻**：Entity Confidence ≥ 0.60

**文檔位置**：`AI_READY_SEO_PLANNING.md` - 策略 1

---

### Citation Confidence Score (CCS)

**公式**：
```
CCS = Corroboration(0.28) + Evidence(0.20) + Reputation(0.18) 
      + Recency(0.14) + Specificity(0.12) + Verification(0.08)
```

**關鍵**：CCS 獨立於 Entity Confidence

**門檻**：
- ≥ 0.90：優秀
- ≥ 0.70：可用
- < 0.60：拒絕

**文檔位置**：`AI_CITATION_ENGINEERING_PHASE2.md` - Phase 2-B

---

### Entity Graph

**目的**：風險檢測（非視覺化）

**檢測**：
1. Isolated Answer（孤立答案）
2. Single-Source Risk（單一來源風險）
3. Phase 3 比對基準

**文檔位置**：`AI_CITATION_ENGINEERING_PHASE2.md` - Phase 2-C

---

## 🔧 工具與腳本索引

### Phase 0 工具
- `entity_confidence_calculator.py` - Entity 信任度計算
- `entity_optimizer.py` - Entity 優化建議

### Phase 1 工具
- `afb_generator.py` - AFB 自動生成
- `eeat_signal_calculator.py` - E-E-A-T 信號計算

### Phase 2 工具
- `citation_confidence_calculator.py` - CCS 計算
- `citation_lifecycle_manager.py` - Citation 生命週期
- `entity_graph_generator.py` - Entity Graph 生成
- `citation_conflict_resolver.py` - 衝突解決

### Phase 3 工具
- `question_matrix_generator.py` - 問題矩陣生成
- `reverse_geo_tester.py` - 反向 GEO 測試
- `output_capture.py` - AI 輸出捕獲
- `diff_analyzer.py` - 差異分析

### Phase 4 工具（待開發）
- `ai_readiness_scorer.py` - 完整評分工具
- `auto_optimizer.py` - 自動優化建議
- `ci_cd_integration.sh` - CI/CD 整合腳本

---

## 📖 術語表

### 核心術語

- **AI Citation Engineering**：讓內容成為 AI 答案來源的工程化方法
- **Answer Trust Infrastructure**：答案信任基礎設施
- **GEO**：Generative Engine Optimization（向下相容術語）
- **Entity**：在多個來源中保持一致的知識節點
- **Entity Confidence (EC)**：實體整體可信度分數
- **AFB**：Answer-First Block，最小答案單元
- **CCS**：Citation Confidence Score，引用可信度分數
- **MAU**：Minimum Answer Unit，最小答案單元
- **Corroboration**：跨來源交叉驗證

### 技術術語

- **Entity Graph**：Entity-AFB-Citation 關係圖
- **Failure State**：失效狀態（outdated, unverifiable 等）
- **Context Fit**：答案適用場景
- **Confidence Signals**：可量化的信任信號
- **Machine-Readable Payload**：機器可讀的資料載荷
- **Reverse GEO**：反向生成引擎優化測試

---

## 🎯 系統定位聲明

### 這不是...

- ❌ 進階 SEO 技巧
- ❌ Content Marketing 策略
- ❌ AI 提示詞優化
- ❌ 關鍵字研究工具

### 這是...

- ✅ **Answer Trust Infrastructure**
- ✅ 讓內容成為 AI 答案來源的工程化系統
- ✅ 可計算、可驗證、可拒絕的信任框架
- ✅ AI 答案層的最小可行標準（MVS）

### 一句話定位

> **我不是幫你排第一名，我是幫你進 AI 的答案層。**

---

## 📞 聯絡與貢獻

**專案狀態**：開放開發中  
**文檔維護**：Answer Trust Infrastructure Team  
**最後更新**：2026-02-06

---

## 快速連結

- [主規劃文檔](./AI_READY_SEO_PLANNING.md)
- [Phase 2 實作](./AI_CITATION_ENGINEERING_PHASE2.md)
- [Phase 3 測試](./AI_CITATION_ENGINEERING_PHASE3.md)
- [執行狀態](./AI_CITATION_ENGINEERING_STATUS.md)

---

**開始閱讀**：建議從 `AI_CITATION_ENGINEERING_STATUS.md` 開始，獲得全局概覽。
