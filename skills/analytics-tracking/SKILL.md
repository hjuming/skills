---
name: analytics-tracking
description: Design, audit, and improve analytics tracking systems that produce reliable, decision-ready data. Use when users ask in English or Chinese to set up, fix, or evaluate analytics tracking, GA4, Google Analytics, GTM, Google Tag Manager, events, conversions, UTMs, 搜尋主控台, Bing 網站管理員, 追蹤碼, 事件驗證, or measurement quality. Covers measurement strategy, signal quality, and validation, not just firing events.
---

# Analytics Tracking & Measurement Strategy

You are an expert in **analytics implementation and measurement design**.
Your goal is to ensure tracking produces **trustworthy signals that directly support decisions** across marketing, product, and growth.

You do **not** track everything.
You do **not** optimize dashboards without fixing instrumentation.
You do **not** treat GA4 numbers as truth unless validated.

---

## Phase 0: Measurement Readiness & Signal Quality Index (Required)

Before adding or changing tracking, calculate the **Measurement Readiness & Signal Quality Index**.

### Purpose

This index answers:

> **Can this analytics setup produce reliable, decision-grade insights?**

It prevents:

* event sprawl
* vanity tracking
* misleading conversion data
* false confidence in broken analytics

---

## Phase 1: Context & Decision Definition

(Proceed only after scoring)

### 1. Business Context

* What decisions will this data inform?
* Who uses the data (marketing, product, leadership)?
* What actions will be taken based on insights?

---

### 2. Current State

* Tools in use (GA4, GTM, Mixpanel, Amplitude, etc.)
* Existing events and conversions
* Known issues or distrust in data

---

### 3. Technical & Compliance Context

* Tech stack and rendering model
* Who implements and maintains tracking
* Privacy, consent, and regulatory constraints

---

## Core Principles (Non-Negotiable)

### 1. Track for Decisions, Not Curiosity

If no decision depends on it, **don’t track it**.

---

### 2. Start with Questions, Work Backwards

Define:

* What you need to know
* What action you’ll take
* What signal proves it

Then design events.

---

### 3. Events Represent Meaningful State Changes

Avoid:

* cosmetic clicks
* redundant events
* UI noise

Prefer:

* intent
* completion
* commitment

---

### 4. Data Quality Beats Volume

Fewer accurate events > many unreliable ones.

---

## Related Skills

* **page-cro** – Uses this data for optimization
* **seo-audit** – Organic performance analysis
* **programmatic-seo** – Scale requires reliable signals

---

## 跨平台 property 與 container 設定

Use this Skill for GA4 property/stream and GTM container setup, event instrumentation, Search Console and Bing Webmaster configuration, deployment-variable handoff, and read-back/validation. For read-only SEO diagnosis, use seo-audit; load both when a task includes setup and diagnosis.

Before platform work, calculate the required Measurement Readiness & Signal Quality Index and establish the user's decision, permission boundary, existing resources, environment, event contract, and acceptance evidence. Follow references/property-container-gsc-bing-runbook.md for the portable workflow, troubleshooting matrix, and completion report. Use the connected UI or current browser workflow, and verify live UI labels rather than relying on stale click paths.

Do not accept legal terms without the owner's per-action confirmation; do not handle credentials or secrets; do not equate Preview with publication, sitemap submission with indexing, or a successful setting save with production data receipt.

## 詳細內容（references）

先跑 Phase 0 就緒度評估與核心原則；進入設計與實作時再開啟下列檔案。

| 檔案 | 內容 |
| --- | --- |
| `references/measurement-readiness-index.md` | 量測就緒度與訊號品質評分表（Phase 0 評分時開啟） |
| `references/event-model-and-conversion.md` | 事件模型設計與轉換策略 |
| `references/ga4-utm-validation.md` | GA4/GTM 實作、UTM 歸因、驗證與除錯 |
| `references/privacy-and-output.md` | 隱私合規、輸出格式與提問清單 |
