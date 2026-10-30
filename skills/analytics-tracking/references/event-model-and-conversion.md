# 事件模型設計與轉換策略

> 由 `analytics-tracking/SKILL.md` 拆出。SKILL.md 保持為低 token 入口，本檔存放完整細節。

## Event Model Design

### Event Taxonomy

**Navigation / Exposure**

* page_view (enhanced)
* content_viewed
* pricing_viewed

**Intent Signals**

* cta_clicked
* form_started
* demo_requested

**Completion Signals**

* signup_completed
* purchase_completed
* subscription_changed

**System / State Changes**

* onboarding_completed
* feature_activated
* error_occurred

---

### Event Naming Conventions

**Recommended pattern:**

```
object_action[_context]
```

Examples:

* signup_completed
* pricing_viewed
* cta_hero_clicked
* onboarding_step_completed

Rules:

* lowercase
* underscores
* no spaces
* no ambiguity

---

### Event Properties (Context, Not Noise)

Include:

* where (page, section)
* who (user_type, plan)
* how (method, variant)

Avoid:

* PII
* free-text fields
* duplicated auto-properties

---

## Conversion Strategy

### What Qualifies as a Conversion

A conversion must represent:

* real value
* completed intent
* irreversible progress

Examples:

* signup_completed
* purchase_completed
* demo_booked

Not conversions:

* page views
* button clicks
* form starts

---

### Conversion Counting Rules

* Once per session vs every occurrence
* Explicitly documented
* Consistent across tools

---
