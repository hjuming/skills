# AI Citation Engineering - 參考資料

> **研究背景、學術論文、產業報告與相關資源**

---

## 📚 資料夾說明

本資料夾用於儲存與 AI Citation Engineering 相關的參考資料，包括：

- 學術論文（PDF）
- 產業研究報告
- AI 搜尋引擎官方文檔連結
- 競品分析資料
- 測試數據集
- 外部引用清單

---

## 🎯 分類結構

```
references/
├── README.md                    # 本文件：參考資料說明
├── academic/                    # 學術論文
│   ├── entity-recognition/
│   ├── answer-extraction/
│   └── citation-behavior/
├── industry/                    # 產業報告
│   ├── ai-search-trends/
│   └── seo-evolution/
├── official-docs/              # 官方文檔連結
│   ├── chatgpt.md
│   ├── perplexity.md
│   ├── claude.md
│   └── google-ai-overview.md
├── datasets/                   # 測試數據集
│   └── question-matrices/
├── case-studies/              # 實際案例研究（Phase 3 完成後）
└── external-citations/        # 外部引用清單
```

---

## 📖 核心參考文獻（規劃中）

### 學術論文

#### Entity Recognition & Knowledge Graphs
- [ ] "Knowledge Graph Embedding: A Survey" (2017)
- [ ] "Entity Linking in Web Tables" (2020)
- [ ] "Cross-Platform Entity Alignment" (2022)

#### Answer Extraction
- [ ] "Neural Answer Selection" (2019)
- [ ] "Answer Sentence Selection via Multi-Task Learning" (2020)
- [ ] "Answer-First Block: Structured Answer Extraction for LLMs" (待引用)

#### Citation Behavior
- [ ] "Citation Analysis in NLP Research" (2021)
- [ ] "Automatic Citation Generation" (2022)
- [ ] "Trust and Authority in AI-Generated Answers" (2024)

---

### 產業報告

#### AI Search Trends
- [ ] Gartner: "Future of Search: AI-First Strategies" (2025)
- [ ] McKinsey: "The Zero-Click Economy" (2024)
- [ ] Forrester: "Generative Engine Optimization" (2025)

#### SEO Evolution
- [ ] BrightEdge: "AI Search Impact Report" (2025)
- [ ] Moz: "Beyond Traditional SEO" (2024)
- [ ] SEMrush: "AI Citation Metrics" (2025)

---

## 🔗 官方文檔連結

### ChatGPT (OpenAI)
- **官方網站**: https://openai.com/chatgpt
- **API 文檔**: https://platform.openai.com/docs
- **模型能力**: https://openai.com/research

**Citation 行為觀察**：
- 優先引用權威機構（.edu, .gov）
- 重視發布日期（2 年內優先）
- 傾向引用結構化內容（列表、表格）

---

### Perplexity
- **官方網站**: https://www.perplexity.ai
- **Pro Search**: https://www.perplexity.ai/pro
- **Blog**: https://blog.perplexity.ai

**Citation 行為觀察**：
- 明確顯示來源連結
- 多來源交叉驗證
- 引用最新資訊（即時性強）

---

### Claude (Anthropic)
- **官方網站**: https://www.anthropic.com/claude
- **API 文檔**: https://docs.anthropic.com
- **Research**: https://www.anthropic.com/research

**Citation 行為觀察**：
- 重視引用透明度
- 標記不確定性（hedge language）
- 傾向保守引用

---

### Google AI Overview
- **官方公告**: https://blog.google/products/search/generative-ai-search/
- **SGE 文檔**: https://support.google.com/websearch/answer/13491530

**Citation 行為觀察**：
- 整合 Knowledge Graph
- 優先引用 Google 生態內容（YouTube, Scholar）
- 強調 E-E-A-T 信號

---

## 📊 測試數據集

### Phase 3 Question Matrices（規劃中）

#### 技術主題（50 問）
- Definition questions（10）
- How-to questions（15）
- Comparison questions（10）
- Analysis questions（10）
- Recommendation questions（5）

#### 產業主題（50 問）
- Marketing & SEO（15）
- Software Development（15）
- Business Strategy（10）
- Healthcare（5）
- Education（5）

---

### Baseline Datasets
- [ ] SQuAD（Stanford Question Answering Dataset）
- [ ] Natural Questions（Google）
- [ ] MS MARCO（Microsoft）

---

## 🧪 實驗數據（Phase 3 完成後補充）

### Reverse GEO Testing Results
- [ ] ChatGPT Citation Behavior（N=50）
- [ ] Perplexity Citation Behavior（N=50）
- [ ] Claude Citation Behavior（N=50）
- [ ] Google AI Overview Behavior（N=50）

### AFB vs Non-AFB Comparison
- [ ] Citation Rate Comparison
- [ ] Answer Position Analysis
- [ ] Content Fragmentation Rate

### Entity Confidence Impact
- [ ] EC ≥ 0.90 vs 0.70-0.89 vs < 0.70
- [ ] Citation Rate by EC Tier
- [ ] Authority Override Cases

---

## 📝 案例研究（待補充）

### Case Study 1: 技術部落格（待 Phase 3）
- **Entity Type**: Person
- **Content Type**: Technical Blog
- **EC**: 0.85
- **結果**: TBD

### Case Study 2: SaaS 產品文檔（待 Phase 3）
- **Entity Type**: Organization
- **Content Type**: Product Documentation
- **EC**: 0.92
- **結果**: TBD

---

## 🔍 競品分析

### GEO Tools & Services
- [ ] **Frase.io** - AI Content Optimization
- [ ] **MarketMuse** - Content Intelligence
- [ ] **Clearscope** - Content Optimization
- [ ] **SurferSEO** - SERP Analysis

**評估重點**：
- 是否有 Entity Optimization？
- 是否有 Answer-First Block 概念？
- 是否計算 Citation Confidence？
- 是否有 Reverse GEO Testing？

---

## 📚 相關書籍

### SEO & Search
- [ ] "The Art of SEO" (O'Reilly, 2023)
- [ ] "SEO for Growth" (2024)

### AI & NLP
- [ ] "Natural Language Processing with Transformers" (O'Reilly, 2022)
- [ ] "Building LLM Applications" (O'Reilly, 2024)

### Knowledge Graphs
- [ ] "Knowledge Graphs: Fundamentals, Techniques" (2023)
- [ ] "Entity Resolution in the Web of Data" (2022)

---

## 🎓 線上課程與資源

### AI Search
- [ ] Coursera: "AI-Powered Search"
- [ ] Udemy: "Generative Engine Optimization"

### Knowledge Graphs
- [ ] Stanford: "CS224W: Machine Learning with Graphs"
- [ ] Neo4j: "Graph Data Science"

---

## 🔗 社群與論壇

### 專業社群
- **Reddit**: r/SEO, r/TechSEO
- **LinkedIn**: GEO 專業群組
- **Twitter/X**: #GEO, #AISearch

### 技術論壇
- **Stack Overflow**: [ai-search] tag
- **GitHub Discussions**: AI Citation Engineering

---

## 📊 數據來源

### AI Search Analytics
- [ ] SimilarWeb: AI Search Usage Stats
- [ ] Ahrefs: Zero-Click Search Trends
- [ ] SEMrush: AI Answer Box Data

### Entity Recognition
- [ ] Wikidata: Entity Database
- [ ] Google Knowledge Graph: Entity Relations
- [ ] Schema.org: Entity Types

---

## 🔐 引用規範

### 引用本專案
```
AI Citation Engineering Team (2026). 
"Answer Trust Infrastructure for Generative Systems". 
https://github.com/[repo-url]
```

### 引用格式（APA）
```
作者 (年份). 標題. 來源.
```

### 引用格式（JSON-LD）
```json
{
  "@type": "Citation",
  "citation_id": "cite-[year]-[id]",
  "source_entity": {...},
  "claim": "...",
  "source_url": "..."
}
```

---

## 📋 貢獻指南

### 如何添加參考資料

1. **分類**：選擇正確的子資料夾
2. **命名**：使用清晰的檔案名稱
   - 學術論文：`author-year-title.pdf`
   - 報告：`company-year-topic.pdf`
3. **記錄**：在本 README 中更新清單
4. **引用**：在主文檔中引用時使用標準格式

---

### 資料品質標準

✅ **接受**：
- 同儕審查期刊論文
- 權威機構研究報告
- 官方文檔與公告
- 實測數據與案例（含方法論）

❌ **不接受**：
- 未經驗證的部落格文章
- 行銷導向內容
- 無來源的聲明
- 過時資料（> 5 年，除非經典）

---

## 🔄 更新頻率

- **官方文檔連結**：每季檢查更新
- **學術論文**：持續補充
- **產業報告**：年度更新
- **測試數據**：Phase 3 完成後定期更新

---

## 📮 聯絡方式

如有推薦的優質參考資料，請透過以下方式提供：
- GitHub Issue
- Email: [project-email]
- Pull Request（附上資料摘要）

---

**專案維護**: AI Citation Engineering Team  
**最後更新**: 2026-02-06  
**版本**: v0.5.0

---

**回到專案**: [README.md](../README.md) | [PROJECT_STRUCTURE.md](../PROJECT_STRUCTURE.md)
