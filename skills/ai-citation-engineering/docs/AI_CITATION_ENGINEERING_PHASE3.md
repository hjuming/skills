# Phase 3：Reverse GEO Testing

> **Answer Trust Infrastructure for Generative Systems - Phase 3**  
> **系统定位**：不再是 AI SEO，而是答案信任基础设施

---

## 🎯 Phase 3 的唯一目标（工程目标）

**验证：系统预测的「可被引用性」，是否与 AI 真实行为一致**

- ❌ 不是优化
- ❌ 不是提升
- ✅ 是验证

**关键原则**：

> 这是系统第一次接触现实世界。  
> 不要一开始就调参数。  
> 先收集 30-50 个测试 case，再动任何一个权重。

**为什么？**

因为你的系统第一次与 AI 真实行为对撞的原始数据，是极其珍贵的。

---

## Phase 3-A：Question Matrix Construction（问题矩阵构建）

### 核心原则

**不是随机问 AI，而是建立可重复测试集。**

---

### Question Matrix 结构（v1）

```yaml
question_matrix:
  version: "1.0"
  generated_at: "2026-02-06"
  total_questions: 50
  
  categories:
    - definition: 15
    - comparison: 10
    - how_to: 10
    - best_practices: 8
    - troubleshooting: 7
  
  questions:
    - id: "Q001"
      type: "definition"
      question: "What is Entity Confidence Score?"
      expected_afb: "afb:entity-confidence-definition"
      expected_entity: "ent:ai-citation-engineering"
      expected_citations: ["cite:2026-001", "cite:2026-002"]
      difficulty: "basic"
      
    - id: "Q002"
      type: "comparison"
      question: "How does Entity Confidence differ from Domain Authority?"
      expected_afb: "afb:entity-vs-domain-authority"
      expected_entities: ["ent:ai-citation-engineering", "ent:moz"]
      expected_citations: >=2
      difficulty: "intermediate"
      
    - id: "Q003"
      type: "how_to"
      question: "How to calculate Citation Confidence Score?"
      expected_afb: "afb:ccs-calculation-guide"
      expected_entity: "ent:ai-citation-engineering"
      expected_citations: >=3
      expected_methodology: true
      difficulty: "advanced"
```

---

### Question 设计原则

#### 1. 可预期结果

```yaml
✅ 良好设计：
question: "What are the 6 dimensions of Citation Confidence Score?"
expected_output: "明确列出 C, E, R, T, S, V 六个维度"
verifiable: true

❌ 模糊设计：
question: "Tell me about citation quality"
expected_output: "不明确"
verifiable: false
```

#### 2. 覆盖 AFB Usage Scenarios

**必须包含的场景**：

| 场景类型 | 问题数量 | AFB 类型 | 预期行为 |
|---------|---------|---------|---------|
| **Direct Answer** | 15 | Definition, Fact | 直接返回 AFB.text |
| **Summarization** | 10 | Overview, Summary | 提取多个 AFB 组合 |
| **Multi-Source** | 10 | Comparison | 引用多个 AFB，标注来源 |
| **Comparison** | 8 | Comparison | 并列两个 AFB 差异 |
| **Decision Support** | 7 | How-To, Best Practice | 根据 Context Fit 提供建议 |

#### 3. 难度分级

```python
DIFFICULTY_LEVELS = {
    "basic": {
        "description": "单一 AFB，明确答案",
        "expected_citation_count": 1-2,
        "example": "What is X?"
    },
    "intermediate": {
        "description": "多 AFB 或需要比较",
        "expected_citation_count": 2-3,
        "example": "How does X compare to Y?"
    },
    "advanced": {
        "description": "需要综合多个来源",
        "expected_citation_count": >=3,
        "example": "What is the best approach to X in scenario Y?"
    }
}
```

---

### Question Matrix 生成器

```python
class QuestionMatrixGenerator:
    """生成可重复测试的问题矩阵"""
    
    def __init__(self, entity_graph, afb_registry):
        self.graph = entity_graph
        self.afbs = afb_registry
    
    def generate_matrix(self, target_count=50):
        """
        生成问题矩阵
        
        分布：
        - Definition: 30%
        - Comparison: 20%
        - How-To: 20%
        - Best Practices: 15%
        - Troubleshooting: 15%
        """
        matrix = {
            "version": "1.0",
            "generated_at": datetime.now().isoformat(),
            "total_questions": target_count,
            "questions": []
        }
        
        # 按比例生成
        matrix["questions"].extend(
            self.generate_definition_questions(int(target_count * 0.30))
        )
        matrix["questions"].extend(
            self.generate_comparison_questions(int(target_count * 0.20))
        )
        matrix["questions"].extend(
            self.generate_howto_questions(int(target_count * 0.20))
        )
        
        return matrix
    
    def generate_definition_questions(self, count):
        """生成定义类问题"""
        questions = []
        
        # 从 AFB 注册表中选取定义类 AFB
        definition_afbs = [
            afb for afb in self.afbs 
            if afb.context_fit.includes("definition")
        ]
        
        for i, afb in enumerate(definition_afbs[:count]):
            questions.append({
                "id": f"Q{i+1:03d}",
                "type": "definition",
                "question": self.generate_definition_question(afb),
                "expected_afb": afb.id,
                "expected_entity": afb.entity_id,
                "expected_citations": [c.id for c in afb.citations],
                "difficulty": self.assess_difficulty(afb)
            })
        
        return questions
    
    def generate_definition_question(self, afb):
        """根据 AFB 生成问题"""
        concept = afb.about
        
        variations = [
            f"What is {concept}?",
            f"Define {concept}",
            f"Explain {concept}",
            f"What does {concept} mean?"
        ]
        
        return random.choice(variations)
```

---

### Question 验证清单

```bash
✅ Question 品质检查：

【可预期性】
□ 问题有明确的预期答案？
□ 预期答案与 AFB 对应？
□ 可以验证 AI 是否回答正确？

【覆盖性】
□ 覆盖所有 AFB 使用场景？
□ 覆盖不同难度等级？
□ 覆盖不同 Entity？

【可重复性】
□ 问题表述清晰无歧义？
□ 可以在不同时间点重复测试？
□ 不依赖于时间敏感信息？

【现实性】
□ 是真实用户会问的问题？
□ 不是为了测试而测试的问题？
```

---

## Phase 3-B：AI Output Capture（AI 输出捕获）

### 核心原则

**你不是在看「有没有提到你」，而是要记录完整的引用行为。**

---

### Output Capture Schema

```json
{
  "capture_id": "cap-2026-001",
  "question_id": "Q001",
  "timestamp": "2026-02-06T10:30:00Z",
  
  "model_info": {
    "platform": "chatgpt",
    "model": "gpt-4.1",
    "version": "2025-12-01"
  },
  
  "query": {
    "text": "What is Entity Confidence Score?",
    "context": "none",
    "language": "en"
  },
  
  "response": {
    "full_text": "...",
    "word_count": 250,
    "structure": ["intro", "explanation", "example"]
  },
  
  "citation_analysis": {
    "used_sources": [
      {
        "name": "AI Citation Engineering",
        "entity_id": "ent:ai-citation-engineering",
        "explicit": true,
        "implicit": false,
        "citation_style": "direct",
        "quoted_text": "Entity Confidence Score measures...",
        "position": "paragraph_1"
      }
    ],
    "total_sources": 3,
    "your_entity_rank": 1,
    "citation_style": "direct",
    "confidence_language": "strong"
  },
  
  "match_analysis": {
    "afb_matched": "afb:entity-confidence-definition",
    "afb_text_similarity": 0.87,
    "citations_matched": ["cite:2026-001"],
    "citations_missing": ["cite:2026-002"],
    "unexpected_sources": ["wikipedia"]
  },
  
  "prediction_vs_reality": {
    "predicted": "should_cite_primary",
    "actual": "cited_primary",
    "match": true,
    "confidence_predicted": 0.89,
    "confidence_actual": "high"
  }
}
```

---

### Capture 维度说明

#### 1. 引用识别（Citation Detection）

```python
class CitationDetector:
    """检测 AI 输出中的引用行为"""
    
    def detect_citation_type(self, response_text, entity_name):
        """
        判断引用类型
        """
        # Explicit：明确提到来源
        if entity_name in response_text:
            if self.has_attribution(response_text, entity_name):
                return "explicit_attributed"
            else:
                return "explicit_unattributed"
        
        # Implicit：使用了内容但未提及
        if self.content_similarity(response_text) > 0.80:
            return "implicit_paraphrase"
        
        return "not_cited"
    
    def has_attribution(self, text, entity_name):
        """检查是否有归因"""
        attribution_patterns = [
            f"according to {entity_name}",
            f"{entity_name} states that",
            f"as {entity_name} explains",
            f"source: {entity_name}"
        ]
        return any(p.lower() in text.lower() for p in attribution_patterns)
```

#### 2. 信心语言分析（Confidence Language）

```python
def analyze_confidence_language(response_text):
    """
    分析 AI 回答的信心程度
    """
    strong_signals = [
        "is", "are", "definitively", "clearly",
        "research shows", "studies indicate"
    ]
    
    hedged_signals = [
        "may", "might", "could", "possibly",
        "some suggest", "it's thought that"
    ]
    
    strong_count = sum(1 for s in strong_signals if s in response_text.lower())
    hedged_count = sum(1 for s in hedged_signals if s in response_text.lower())
    
    if strong_count > hedged_count * 2:
        return "strong"
    elif hedged_count > strong_count * 2:
        return "hedged"
    else:
        return "neutral"
```

#### 3. AFB 匹配度（AFB Match Score）

```python
def calculate_afb_match_score(ai_response, expected_afb):
    """
    计算 AI 回答与预期 AFB 的匹配度
    """
    # 语义相似度
    semantic_similarity = calculate_embedding_similarity(
        ai_response,
        expected_afb.ai_quick_answer
    )
    
    # 关键要素覆盖
    key_points = expected_afb.key_points
    coverage = sum(
        1 for point in key_points 
        if point.lower() in ai_response.lower()
    ) / len(key_points)
    
    # 综合分数
    match_score = (semantic_similarity * 0.6) + (coverage * 0.4)
    
    return {
        "match_score": match_score,
        "semantic_similarity": semantic_similarity,
        "key_points_coverage": coverage
    }
```

---

### Multi-Platform Testing

```python
PLATFORMS = [
    {
        "id": "chatgpt",
        "name": "ChatGPT",
        "model": "gpt-4.1",
        "api_endpoint": "https://api.openai.com/v1/chat/completions"
    },
    {
        "id": "perplexity",
        "name": "Perplexity AI",
        "model": "pplx-7b-online",
        "api_endpoint": "https://api.perplexity.ai/chat/completions"
    },
    {
        "id": "claude",
        "name": "Claude",
        "model": "claude-3-opus",
        "api_endpoint": "https://api.anthropic.com/v1/messages"
    }
]

def test_across_platforms(question, platforms=PLATFORMS):
    """跨平台测试"""
    results = []
    
    for platform in platforms:
        response = query_platform(platform, question)
        capture = capture_output(response, question)
        results.append(capture)
    
    return {
        "question_id": question.id,
        "platforms_tested": len(platforms),
        "captures": results,
        "consistency": calculate_cross_platform_consistency(results)
    }
```

---

## Phase 3-C：Prediction vs Reality Diff（预测与现实差异）

### 核心输出：误差类型分析

**这是 Phase 3 的核心，不是图表，是误差类型。**

---

### Diff 分类系统

```python
class PredictionRealityDiff:
    """预测与现实差异分析"""
    
    DIFF_TYPES = {
        "OVERESTIMATED_CCS": {
            "condition": "predicted_cite AND NOT actual_cite AND high_ccs",
            "description": "高估了 Citation 品质",
            "severity": "high",
            "action": "Review CCS calculation"
        },
        "UNDERESTIMATED_CCS": {
            "condition": "predicted_reject AND actual_cite",
            "description": "低估了 Citation 品质",
            "severity": "medium",
            "action": "Review rejection criteria"
        },
        "ENTITY_CONFIDENCE_MISMATCH": {
            "condition": "high_ec BUT NOT cited",
            "description": "Entity Confidence 未能预测引用",
            "severity": "high",
            "action": "Review EC vs citation correlation"
        },
        "AFB_FORMAT_ISSUE": {
            "condition": "content_used BUT NOT attributed",
            "description": "内容被使用但未归因",
            "severity": "medium",
            "action": "Review AFB structure"
        },
        "BLIND_SPOT": {
            "condition": "predicted_reject BUT actual_primary_source",
            "description": "系统未预测到的引用",
            "severity": "critical",
            "action": "Investigate missing factors"
        },
        "ACCEPTABLE_VARIANCE": {
            "condition": "predicted_direct BUT actual_paraphrase",
            "description": "引用形式不同但本质相同",
            "severity": "low",
            "action": "Monitor"
        }
    }
```

---

### Diff Analysis Table

```markdown
| Case ID | Question | Predicted | Actual | Diff Type | Severity | Root Cause |
|---------|----------|-----------|--------|-----------|----------|------------|
| Q001 | "What is ECS?" | Should cite (0.89) | Cited (rank 1) | ✅ Match | - | - |
| Q002 | "Compare ECS vs DA" | Should cite (0.75) | Not cited | Overestimated CCS | 🔴 High | CCS too high for this content |
| Q003 | "Calculate CCS" | Should reject (0.55) | Cited (rank 2) | Underestimated | 🟡 Medium | Missing corroboration bonus |
| Q004 | "AFB benefits" | Partial (0.68) | Paraphrased | Acceptable variance | 🟢 Low | Format difference acceptable |
| Q005 | "Entity types" | Should reject (0.45) | Primary source | 🚨 Blind spot | 🔴 Critical | Unknown factor |
```

---

### Root Cause Analysis

```python
def analyze_diff_root_cause(diff_case):
    """
    分析差异的根本原因
    """
    # 1. CCS 计算问题
    if diff_case.type == "OVERESTIMATED_CCS":
        # 检查哪个维度高估了
        ccs_breakdown = diff_case.predicted_ccs_breakdown
        
        suspects = []
        if ccs_breakdown['corroboration'] > 0.80:
            suspects.append("Corroboration may be overvalued")
        if ccs_breakdown['source_reputation'] > 0.90:
            suspects.append("Source reputation too high")
        
        return {
            "category": "CCS_CALCULATION",
            "suspects": suspects,
            "recommendation": "Review dimension weights"
        }
    
    # 2. Entity Confidence 问题
    if diff_case.type == "ENTITY_CONFIDENCE_MISMATCH":
        return {
            "category": "ENTITY_CONFIDENCE",
            "suspects": ["EC not predictive of citation"],
            "recommendation": "Investigate EC-to-citation correlation"
        }
    
    # 3. 未知因素（Blind Spot）
    if diff_case.type == "BLIND_SPOT":
        # 这是最重要的发现
        return {
            "category": "UNKNOWN_FACTOR",
            "suspects": ["AI using signals not in our model"],
            "recommendation": "INVESTIGATE - this reveals model gaps",
            "priority": "CRITICAL"
        }
```

---

### Adjustment Recommendations

**关键原则：不要立即调参数，先累积数据**

```python
class AdjustmentEngine:
    """参数调整建议引擎"""
    
    MIN_SAMPLE_SIZE = 30  # 最少样本数
    
    def recommend_adjustments(self, diff_results):
        """
        基于差异结果推荐调整
        
        但只在样本数足够时才执行
        """
        if len(diff_results) < self.MIN_SAMPLE_SIZE:
            return {
                "status": "INSUFFICIENT_DATA",
                "message": f"Need {self.MIN_SAMPLE_SIZE - len(diff_results)} more samples",
                "action": "CONTINUE_TESTING"
            }
        
        # 统计差异模式
        diff_counts = Counter([d.type for d in diff_results])
        
        # 如果某种差异超过 30%
        critical_diffs = {
            dtype: count 
            for dtype, count in diff_counts.items() 
            if count / len(diff_results) > 0.30
        }
        
        if critical_diffs:
            return {
                "status": "ADJUSTMENT_NEEDED",
                "critical_patterns": critical_diffs,
                "recommendations": self.generate_recommendations(critical_diffs)
            }
        
        return {
            "status": "ACCEPTABLE_VARIANCE",
            "action": "CONTINUE_MONITORING"
        }
```

---

### Phase 3 Complete Output

```json
{
  "phase3_summary": {
    "test_period": "2026-02-06 to 2026-02-20",
    "total_questions": 50,
    "total_captures": 150,
    "platforms_tested": 3,
    
    "match_rate": 0.72,
    "overestimation_rate": 0.18,
    "underestimation_rate": 0.06,
    "blind_spot_rate": 0.04,
    
    "critical_findings": [
      {
        "finding": "CCS overestimates when Corroboration = 1.0",
        "frequency": 9,
        "recommendation": "Lower Corroboration weight from 0.28 to 0.24"
      },
      {
        "finding": "Entity Confidence < 0.70 still gets cited if AFB structure excellent",
        "frequency": 3,
        "recommendation": "AFB quality may override EC in some cases"
      },
      {
        "finding": "AI prefers recent citations even with lower CCS",
        "frequency": 7,
        "recommendation": "Increase Recency weight from 0.14 to 0.18"
      }
    ],
    
    "blind_spots": [
      {
        "case": "Q037",
        "issue": "Cited despite all negative signals",
        "hypothesis": "AI may value unique perspective over pure trust"
      }
    ]
  }
}
```

---

## Phase 3 执行计划

### Week 1: Question Matrix
- [ ] 生成 50 个问题
- [ ] 验证问题品质
- [ ] 建立预期结果

### Week 2-3: Data Collection
- [ ] 跨 3 个平台测试
- [ ] 捕获 150 个输出
- [ ] 记录完整 capture data

### Week 4: Analysis
- [ ] Diff 分类与统计
- [ ] Root cause 分析
- [ ] 生成调整建议

### Week 5: Iteration
- [ ] 根据数据调整参数
- [ ] 重新测试关键 cases
- [ ] 验证改善

---

## 关键原则

1. **不要一开始就调参数**
2. **先收集 30-50 个样本**
3. **Blind Spot 是最珍贵的发现**
4. **可重复性 > 覆盖率**
5. **验证 > 优化**

---

**Phase 3 启动。系统第一次接触现实。**

---

**文档维护者**：Answer Trust Infrastructure Team  
**Phase 3 状态**：🚧 执行中  
**最后更新**：2026-02-06
