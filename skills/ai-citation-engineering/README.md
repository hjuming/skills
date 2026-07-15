# AI Citation Engineering

> **Answer Trust Infrastructure for Generative Systems**

Engineering your content to become part of AI-generated answers.

---

## 🎯 這是什麼？

這不是「進階 SEO」，而是 **AI 答案層工程（Answer-Layer Engineering）** 的第一個實作規範。

**核心目標**：
- ❌ 不是讓你排第一名
- ✅ 是讓你進入 AI 的答案層

---

## 🔑 核心差異

### 傳統 SEO vs AI Citation Engineering

| 層面 | 傳統 SEO | AI Citation Engineering |
|------|---------|------------------------|
| **優化目標** | Google 排名 | AI 引用來源 |
| **成功指標** | 點擊率、排名 | 引用頻率、權威度 |
| **內容策略** | 關鍵字優化 | 答案模組封裝 |
| **用戶行為** | 點擊進入網站 | 直接獲得答案 |
| **技術實作** | Meta 標籤 | Entity + AFB + Citation Object |
| **可計算性** | 部分可量化 | 全系統可量化 |
| **風險管理** | 無 | 系統可拒絕自己 |

---

## 🏗️ 系統架構

```
Answer Trust Infrastructure

├─ Layer 0: Entity Trust（實體信任層）
│   └─ Entity Confidence Score（5 維）
│      ├─ Cross-Platform Consistency (30%)
│      ├─ Authority Verification (25%)
│      ├─ Citation Network (20%)
│      ├─ Content Frequency (15%)
│      └─ Social Proof (10%)
│
├─ Layer 1: Answer Packaging（答案封裝層）
│   └─ Answer-First Block (AFB)
│      ├─ AI Quick Answer（≤30 字）
│      ├─ Context Fit（適用場景）
│      ├─ Confidence Signals（信任信號）
│      └─ Machine-Readable Payload（JSON-LD）
│
├─ Layer 2: Citation Trust（引用信任層）
│   └─ Citation Confidence Score（6 維）
│      ├─ Corroboration (28%)（最高權重）
│      ├─ Evidence Strength (20%)
│      ├─ Source Reputation (18%)
│      ├─ Recency Decay (14%)
│      ├─ Claim Specificity (12%)
│      └─ Verification Status (8%)
│
└─ Layer 3: Risk Detection（風險檢測層）
    └─ Entity Graph
       ├─ Isolated Answer Detection
       ├─ Single-Source Risk Detection
       └─ Citation Conflict Resolution
```

---

## 📊 系統能力進化

```
Phase 0 → 獲得「被引用資格」
  └─ Entity Optimization + Confidence Model
  
Phase 1 → 成為「可引用答案」
  └─ AFB Spec + E-E-A-T Signals
  
Phase 2 → 具備「可控風險」能力（✅ 封版）
  └─ Machine-Readable Citations + CCS + Graph
  
Phase 3 → 驗證「預測準確度」（🚧 進行中）
  └─ Reverse GEO Testing
  
Phase 4 → 產出「可部署系統」（⏳ 待啟動）
  └─ SKILL.md + Scripts + Automation
```

---

## 🎓 核心概念

### 1. Entity Confidence Score (EC)

**什麼是 Entity？**

在 AI 知識圖譜中，Entity 不是「網站」，而是在多個來源中保持一致的「知識節點」。

**為什麼 Entity 是第一優先？**

> 沒有 Entity，你連「被考慮引用」的資格都沒有。

AI 引用決策層級：
1. **已知權威實體** ← 70% 引用決策在這裡
2. 已被多次引用的來源
3. 與問題高度語義貼合的段落
4. 才是結構漂亮的內容

**計算公式**：
```
EC = Consistency(0.30) + Authority(0.25) + Citation(0.20) 
     + Frequency(0.15) + Social(0.10)
```

**門檻**：
- ≥ 0.90：🌟 權威
- ≥ 0.70：🟢 及格
- < 0.60：🔴 不及格

---

### 2. Answer-First Block (AFB)

**什麼是 AFB？**

AFB 不是摘要，是「在生成過程中可以被單獨拉走、不需要上下文的 Answer Object」。

**四層強制結構**：
1. **AI Quick Answer**：≤30 字的完整答案
2. **Context Fit**：適用/不適用場景
3. **Confidence Signals**：可量化信任信號
4. **Machine-Readable Payload**：完整 JSON-LD

**資格門檻**：
- Entity Confidence < 0.60 → 不生成 AFB
- 0.60-0.74 → 標記 Low Confidence
- ≥ 0.75 → 完整 AFB

---

### 3. Citation Confidence Score (CCS)

**什麼是 CCS？**

**關鍵**：CCS 獨立於 Entity Confidence

- Entity Confidence：實體整體可信度
- Citation Confidence：這筆證據本身可靠度

**6 維計算模型**：
```
CCS = Corroboration(0.28) + Evidence(0.20) + Reputation(0.18) 
      + Recency(0.14) + Specificity(0.12) + Verification(0.08)
```

**為什麼 Corroboration 最大？**

> 生成引擎最怕單一來源失誤；跨來源一致是「安全感」。

---

## 🚀 快速開始

### 1. 建立 Entity（必須）

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://yoursite.com/entity/your-name",
  "name": "你的名字",
  "jobTitle": "你的職稱",
  "sameAs": [
    "https://linkedin.com/in/you",
    "https://twitter.com/you",
    "https://github.com/you"
  ]
}
```

**檢查**：跨平台一致性 ≥ 0.95？

---

### 2. 計算 Entity Confidence

```bash
python entity_confidence_calculator.py your-entity-id
```

**目標**：≥ 0.70

---

### 3. 創建 AFB

```markdown
## Answer-First Block

### AI Quick Answer
[30 字以內的完整答案]

### Context Fit
**適用**：definition, how_to
**不適用**：⚠️ [明確列出]

### Confidence Signals
```json
{"entity_confidence": 0.87, "last_verified": "2026-02-06"}
```

### Machine-Readable Payload
[完整 JSON-LD]
```

---

### 4. 添加 Citations

```json
{
  "@type": "Citation",
  "source_entity": {...},
  "claim": "具體聲明",
  "evidence_type": "peer_reviewed",
  "confidence": 0.92
}
```

---

### 5. 驗證系統

```bash
# 生成 Entity Graph
python entity_graph_generator.py

# 檢查風險
python risk_detector.py

# 反向測試
python reverse_geo_tester.py
```

---

## 📈 系統現況

**完成度**：62.5%

- ✅ Phase 0：Entity Optimization（100%）
- ✅ Phase 1：AFB + E-E-A-T Signals（100%）
- ✅ Phase 2：Citation System（100%，已封版）
- 🚧 Phase 3：Reverse GEO Testing（30%）
- ⏳ Phase 4：SKILL.md + Scripts（0%）

---

## 🎯 關鍵原則

1. **Entity First, Content Second**
2. **Signals > Claims**（信號勝於聲明）
3. **可計算 > 可讀**
4. **系統可以拒絕自己**
5. **驗證 > 優化**

---

## 📚 延伸閱讀

### 新手入門
1. 閱讀 [執行狀態](./AI_CITATION_ENGINEERING_STATUS.md)（5 分鐘）
2. 了解 [系統索引](./AI_CITATION_ENGINEERING_INDEX.md)（10 分鐘）
3. 選擇感興趣的 Phase 深入閱讀

### 完整學習
1. [Phase 0 & 1](./AI_READY_SEO_PLANNING.md) - Entity + AFB
2. [Phase 2](./AI_CITATION_ENGINEERING_PHASE2.md) - Citation System
3. [Phase 3](./AI_CITATION_ENGINEERING_PHASE3.md) - Testing

**總時間投入**：2.5-3 小時

---

## ⚡ 關鍵數字

```
門檻值：
- Entity Confidence ≥ 0.70（及格）
- Citation Confidence ≥ 0.70（可用）
- AFB 資格 ≥ 0.60
- Corroboration 建議 ≥ 0.50

權重配置：
- Entity: Consistency(30%) 最高
- Citation: Corroboration(28%) 最高
- E-E-A-T: Expertise(30%) 最高

風險閾值：
- Conflict 差距 < 0.20 → 降級
- Recency < 0.35 → 需要交叉驗證
- Single Source + Quantitative Claim → 拒絕
```

---

## 🌟 為什麼這個系統重要？

### 從「猜測」到「工程」

**傳統 GEO**：「寫好內容，希望 AI 會引用」  
**本系統**：「計算可引用性，預測 AI 決策，主動風險管理」

### 從「聲明」到「信號」

**傳統做法**：「我是專家，我有 10 年經驗」  
**本系統**：「可驗證的信號：發表 127 篇，被引用 23 次，跨平台一致性 0.91」

### 從「內容」到「基礎設施」

**傳統 SEO**：優化個別頁面  
**本系統**：建立 Answer Trust Infrastructure

---

## 🚀 開始使用

1. **閱讀**：[執行狀態文檔](./AI_CITATION_ENGINEERING_STATUS.md)
2. **理解**：[系統索引](./AI_CITATION_ENGINEERING_INDEX.md)
3. **實作**：[主規劃文檔](./AI_READY_SEO_PLANNING.md)
4. **追蹤**：定期查看 Status 更新

---

**版本**：v0.5（Phase 3 進行中）  
**更新日期**：2026-02-06  
**專案狀態**：🟢 活躍開發

---

**這不是一個 SEO 技巧，這是面向 AI 搜尋時代的內容工程規範。**
