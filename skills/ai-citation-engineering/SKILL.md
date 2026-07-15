---
name: ai-citation-engineering
description: Answer Trust Infrastructure for Generative Systems. Engineering your content to become part of AI-generated answers. Use when optimizing content for AI search engines (ChatGPT, Perplexity, Google AI), building Entity trust, creating Answer-First Blocks, or implementing machine-readable citations. This is not advanced SEO - it's Answer-Layer Engineering.
license: MIT
metadata:
  version: 0.5.1
  author: AI Citation Engineering Team
  category: ai-optimization
  domain: answer-trust-infrastructure
  updated: 2026-06-04
  status: Phase 3 - Testing
  tech-stack: Entity-Optimization, AFB, Citation-System, JSON-LD, Schema.org
---

# AI Citation Engineering

Use this skill to make content easier for AI answer systems to understand, trust, quote, and connect to an entity. This is answer-layer engineering, not generic SEO.

## Trigger Phrases

- AIO, AI Optimization, AI 引用, AI 搜尋, AI Overview, Perplexity, ChatGPT search
- Answer-first block, machine-readable citation, Entity trust, knowledge graph
- GEO, generative engine optimization, AI-ready SEO
- 讓內容被 AI 引用、讓品牌出現在 AI 答案裡、建立可信來源

## Load Policy

Default to this compact workflow. Load `references/full-guide.md` only when you need the full concept model, formulas, examples, FAQs, project status, or integration details.

Useful existing resources:

- `README.md`
- `QUICKSTART.md`
- `docs/AI_READY_SEO_PLANNING.md`
- `templates/afb_template.json`
- `templates/citation_template.json`
- `templates/entity_template.json`

## Core Model

1. Entity first: define who/what the content represents.
2. Answer-first: put a concise, quotable answer near the top.
3. Evidence: cite primary, verifiable, current sources.
4. Machine-readable layer: JSON-LD, Schema.org, structured references.
5. Confidence signals: author, date, method, scope, limitations, update path.

## Workflow

### New Content

1. Identify target entity, audience, and answer intent.
2. Write an answer-first block: direct answer, context fit, confidence signals.
3. Add structured sections with clear headings, FAQ, definitions, and source notes.
4. Add machine-readable citations and schema where appropriate.
5. Verify that every strong claim has support.

### Existing Content Optimization

1. Audit whether the page has a clear entity and answer target.
2. Move the direct answer above long context.
3. Replace vague claims with specific, source-backed statements.
4. Add citations, dates, author/organization context, and update notes.
5. Produce before/after recommendations with priority.

## Quality Rules

- Do not fabricate citations, authors, dates, metrics, or awards.
- Prefer primary sources and official pages.
- Distinguish facts, interpretation, and recommendation.
- Use zh-TW headings when the target audience is Taiwan.
- Make paragraphs independently quotable.
- Avoid stuffing keywords or writing for search bots at the expense of humans.

## Output Formats

For page audits:

```text
Priority | Issue | AI-answer impact | Fix
```

For content creation:

```text
Entity:
Answer-first block:
Evidence/citations:
Structured data:
FAQ:
Verification notes:
```
