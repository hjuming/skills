# AI Citation Engineering - 工具與腳本

> **Phase 4 待開發：自動化工具集**

---

## 📁 資料夾結構

```
scripts/
├── README.md                    # 本文件：工具說明
├── phase0/                      # Phase 0 工具（Entity Optimization）
│   ├── entity_confidence_calculator.py
│   ├── entity_optimizer.py
│   └── entity_validator.py
├── phase1/                      # Phase 1 工具（AFB + E-E-A-T）
│   ├── afb_generator.py
│   ├── afb_validator.py
│   └── eeat_signal_calculator.py
├── phase2/                      # Phase 2 工具（Citations + Graph）
│   ├── citation_confidence_calculator.py
│   ├── entity_graph_generator.py
│   ├── citation_conflict_resolver.py
│   └── risk_detector.py
├── phase3/                      # Phase 3 工具（Testing）
│   ├── reverse_geo_tester.py
│   ├── output_capture.py
│   ├── diff_analyzer.py
│   └── question_matrix_generator.py
└── shared/                      # 共用工具
    ├── config.py
    ├── validators.py
    └── exporters.py
```

---

## 🎯 開發狀態

| Phase | 工具數量 | 狀態 | 優先級 |
|-------|---------|------|--------|
| Phase 0 | 3 個 | ⏳ 待開發 | 🔴 最高 |
| Phase 1 | 3 個 | ⏳ 待開發 | 🟠 高 |
| Phase 2 | 4 個 | ⏳ 待開發 | 🟡 中 |
| Phase 3 | 4 個 | ⏳ 待開發 | 🟢 中低 |
| Shared | 3 個 | ⏳ 待開發 | 🟢 中低 |

---

## 🛠️ Phase 0 工具（Entity Optimization）

### entity_confidence_calculator.py

**功能**：計算 Entity Confidence Score (EC)

**輸入**：
```json
{
  "entity_uri": "https://example.com/entity/zhang-expert",
  "platforms": {
    "linkedin": "https://linkedin.com/in/zhang-expert",
    "twitter": "https://twitter.com/zhangexpert",
    ...
  },
  "content_frequency": 12,
  "citation_count": 45
}
```

**輸出**：
```json
{
  "entity_confidence": 0.87,
  "breakdown": {
    "consistency": 0.95,
    "authority": 0.82,
    "citation": 0.88,
    "frequency": 0.75,
    "social": 0.80
  },
  "status": "pass",
  "recommendations": [...]
}
```

**使用方式**：
```bash
python entity_confidence_calculator.py --entity https://example.com/entity/zhang-expert
```

---

### entity_optimizer.py

**功能**：分析 Entity 並提供優化建議

**檢查項目**：
- sameAs 連結數量與品質
- 跨平台一致性
- Entity 頁面結構
- Schema.org 標記完整性

**輸出**：
```json
{
  "current_score": 0.65,
  "target_score": 0.75,
  "recommendations": [
    {
      "type": "add_platform",
      "platform": "GitHub",
      "impact": "+0.05",
      "priority": "high"
    },
    {
      "type": "improve_consistency",
      "field": "jobTitle",
      "issue": "LinkedIn 與 Twitter 不一致",
      "impact": "+0.03",
      "priority": "high"
    }
  ]
}
```

---

### entity_validator.py

**功能**：驗證 Entity JSON-LD 格式

**檢查項目**：
- Schema.org 格式正確性
- 必填欄位完整性
- sameAs URL 有效性
- 跨平台資料一致性

---

## 🛠️ Phase 1 工具（AFB + E-E-A-T）

### afb_generator.py

**功能**：從現有內容生成 Answer-First Block

**輸入**：
```json
{
  "content": "完整文章內容...",
  "entity_uri": "https://example.com/entity/zhang-expert",
  "target_question": "什麼是 AI Citation Engineering？"
}
```

**輸出**：
```json
{
  "@type": "Answer",
  "text": "AI Citation Engineering 是...",
  "contextFit": {...},
  "additionalProperty": [...]
}
```

**AI 輔助**：使用 LLM 自動提取關鍵答案

---

### afb_validator.py

**功能**：驗證 AFB 格式與品質

**檢查項目**：
- 四層結構完整性
- AI Quick Answer ≤ 30 字
- Context Fit 清晰度
- Machine-Readable Payload 格式
- Entity Confidence 門檻

---

### eeat_signal_calculator.py

**功能**：計算 E-E-A-T Signals Score

**四個維度**：
- Experience（實測/實例）
- Expertise（專有名詞/引用）
- Authoritativeness（Entity Confidence）
- Trust（可驗證來源）

---

## 🛠️ Phase 2 工具（Citations + Graph）

### citation_confidence_calculator.py

**功能**：計算 Citation Confidence Score (CCS)

**6 維計算**：
- Corroboration（0.28）
- Evidence Strength（0.20）
- Source Reputation（0.18）
- Recency Decay（0.14）
- Claim Specificity（0.12）
- Verification Status（0.08）

**輸入**：
```json
{
  "citation_id": "cite-2025-001",
  "source_entity": {...},
  "evidence_type": "peer_reviewed",
  "publication_date": "2025-12-01",
  "corroboration_sources": [...]
}
```

**輸出**：
```json
{
  "citation_confidence": 0.92,
  "breakdown": {
    "corroboration": 0.85,
    "evidence": 1.00,
    "reputation": 0.98,
    "recency": 0.95,
    "specificity": 1.00,
    "verification": 1.00
  },
  "status": "excellent",
  "warnings": []
}
```

---

### entity_graph_generator.py

**功能**：生成 Entity Graph JSON

**Graph Schema**：
- Nodes: entity, afb, citation, source
- Edges: answers, supported_by, from_source

**輸出**：
```json
{
  "graph_version": "2.0",
  "nodes": [...],
  "edges": [...],
  "metrics": {
    "ent:xyz": {
      "afbs": 4,
      "citations": 9,
      "distinct_sources": 3,
      "is_isolated": false,
      "single_source_risk": false
    }
  }
}
```

---

### citation_conflict_resolver.py

**功能**：處理 Citation 衝突

**衝突類型**：
- 相反結論（opposite conclusions）
- 數值差異（numerical divergence）
- 時效衝突（temporal conflict）

**解決策略**：
- Top-K 選擇（高 CCS 優先）
- 降級處理（標記 Contested）
- 拒用（顯著衝突）

---

### risk_detector.py

**功能**：檢測 Isolated Answer 與 Single-Source Risk

**檢測規則**：
- AFB 無 Citation → Isolated
- Citations 全 Failure State → Isolated
- Distinct Sources < 2 且涉及統計 → Single-Source Risk

---

## 🛠️ Phase 3 工具（Testing）

### reverse_geo_tester.py

**功能**：自動化 Reverse GEO Testing

**工作流程**：
1. 讀取 Question Matrix
2. 查詢多個 AI 平台（ChatGPT, Perplexity, Claude）
3. 捕獲輸出
4. 比對預測 vs 實際
5. 產出 Diff Report

**使用方式**：
```bash
python reverse_geo_tester.py \
  --matrix questions.json \
  --platforms chatgpt,perplexity,claude \
  --output results.json
```

---

### output_capture.py

**功能**：結構化捕獲 AI 輸出

**捕獲欄位**：
1. 是否引用你（yes/no）
2. 引用哪個 AFB
3. 是否引用非你的來源
4. 是否改寫/稀釋/合併
5. 是否標示 uncertainty
6. 是否忽略 Citation 結構

---

### diff_analyzer.py

**功能**：分析 Prediction vs Reality 差異

**6 種 Diff 類型**：
1. Missed Entity（沒識別你）
2. AFB Fragmented（拆用）
3. Citation Ignored（用內容不用證據）
4. Authority Override（被更大 Entity 壓過）
5. Hallucinated Merge（混用你與他人）
6. Overestimated CCS（預測過高）

**輸出**：
```json
{
  "diff_summary": {
    "total_tests": 50,
    "matched": 32,
    "missed_entity": 8,
    "afb_fragmented": 6,
    ...
  },
  "root_causes": [...],
  "recommendations": [...]
}
```

---

### question_matrix_generator.py

**功能**：生成測試用 Question Matrix

**問題類型**：
- definition（定義）
- comparison（比較）
- how_to（操作）
- analysis（分析）
- recommendation（建議）

**輸出**：
```json
{
  "questions": [
    {
      "id": "q-001",
      "type": "definition",
      "question": "什麼是 AI Citation Engineering？",
      "expected_afb": "afb:definition:v1",
      "expected_entity": "ent:ai-ready-seo",
      "expected_citations": ["cite-2026-001"]
    }
  ]
}
```

---

## 🔧 Shared 工具

### config.py

**功能**：共用配置管理

**配置項目**：
- Entity Confidence 門檻（0.60, 0.70, 0.90）
- CCS 門檻（0.60, 0.70, 0.90）
- 權重配置（可調）
- API Keys（AI 平台）

---

### validators.py

**功能**：共用驗證函數

**驗證類型**：
- JSON-LD 格式
- URL 有效性
- Schema.org 類型
- 日期格式
- 分數範圍（0-1）

---

### exporters.py

**功能**：共用輸出格式

**支援格式**：
- JSON
- CSV
- Markdown Report
- HTML Dashboard

---

## 📋 開發計劃

### Phase 4-A：核心工具（優先）
- [ ] entity_confidence_calculator.py
- [ ] afb_validator.py
- [ ] citation_confidence_calculator.py
- [ ] entity_graph_generator.py

**預計完成**：Phase 3 實測完成後

---

### Phase 4-B：優化工具
- [ ] entity_optimizer.py
- [ ] afb_generator.py（AI 輔助）
- [ ] citation_conflict_resolver.py
- [ ] risk_detector.py

---

### Phase 4-C：測試工具
- [ ] reverse_geo_tester.py
- [ ] output_capture.py
- [ ] diff_analyzer.py
- [ ] question_matrix_generator.py

---

## 🔐 API Keys 需求

部分工具需要 API Keys：

### Phase 3 測試工具
- **OpenAI API**（ChatGPT）
- **Perplexity API**
- **Anthropic API**（Claude）

### 可選
- **Google Search API**（驗證跨平台一致性）
- **GitHub API**（Entity 驗證）

---

## 🐍 技術要求

### Python 版本
- Python 3.9+

### 核心依賴
```txt
requests
beautifulsoup4
jsonschema
pydantic
openai
anthropic
```

### 安裝
```bash
cd scripts/
pip install -r requirements.txt
```

---

## 📖 使用範例

### 範例 1：計算 Entity Confidence

```bash
python phase0/entity_confidence_calculator.py \
  --entity https://example.com/entity/zhang-expert \
  --output entity_report.json
```

---

### 範例 2：驗證 AFB

```bash
python phase1/afb_validator.py \
  --input my_afb.json \
  --entity https://example.com/entity/zhang-expert
```

---

### 範例 3：生成 Entity Graph

```bash
python phase2/entity_graph_generator.py \
  --entity https://example.com/entity/zhang-expert \
  --output graph.json
```

---

### 範例 4：執行 Reverse GEO Testing

```bash
python phase3/reverse_geo_tester.py \
  --matrix questions.json \
  --platforms all \
  --output results.json
```

---

## 🔬 測試策略

### 單元測試
每個工具包含 `test_*.py`

### 整合測試
`tests/integration/` 測試工具間協作

### 實測數據
使用 Phase 3 真實測試數據驗證

---

## 📊 效能目標

| 工具 | 目標執行時間 | 準確度 |
|------|-------------|--------|
| Entity Confidence | < 5 秒 | ±5% |
| AFB Generator | < 10 秒 | 85%+ |
| CCS Calculator | < 3 秒 | ±3% |
| Graph Generator | < 30 秒 | 100% |
| Reverse GEO Test | < 5 分/問題 | - |

---

## 🚨 注意事項

### 不要過早優化
- Phase 3 實測完成前，不調整權重
- 至少需要 30-50 個樣本

### API 配額管理
- AI 平台 API 有使用限制
- 建議批次執行，避免超額

### 隱私與安全
- 不記錄 API Keys
- 測試數據不包含敏感資訊

---

## 🔗 相關文檔

- [SKILL.md](../SKILL.md) - 完整技能文檔
- [Phase 0-1](../docs/AI_READY_SEO_PLANNING.md) - Entity + AFB 規範
- [Phase 2](../docs/AI_CITATION_ENGINEERING_PHASE2.md) - Citation 規範
- [Phase 3](../docs/AI_CITATION_ENGINEERING_PHASE3.md) - 測試規範

---

**專案維護**: AI Citation Engineering Team  
**最後更新**: 2026-02-06  
**版本**: v0.5.0  
**狀態**: ⏳ Phase 4 待啟動

---

**回到專案**: [README.md](../README.md) | [PROJECT_STRUCTURE.md](../PROJECT_STRUCTURE.md)
