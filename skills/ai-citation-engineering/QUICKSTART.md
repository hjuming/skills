# AI Citation Engineering - 快速開始

> **5 分鐘了解核心概念，15 分鐘建立第一個 Entity 和 AFB**

---

## 🎯 一句話概念

**AI Citation Engineering 不是幫你排第一名，而是幫你進入 AI 的答案層。**

---

## 🤔 為什麼需要這個？

### 傳統 SEO vs AI Citation Engineering

| 維度 | 傳統 SEO | AI Citation Engineering |
|------|----------|------------------------|
| **目標** | 搜尋結果頁排名 | 成為 AI 引用來源 |
| **成功指標** | 點擊率、排名 | 被引用頻率 |
| **優化對象** | Google 演算法 | ChatGPT, Perplexity, Claude |
| **內容形式** | 關鍵字優化文章 | Answer-First Block |
| **信任基礎** | 反向連結 | Entity + Citations |

---

## ⚡ 3 步驟快速開始

### Step 1: 建立 Entity（5 分鐘）

**為什麼先做這個？**  
沒有 Entity = 沒有資格被 AI 引用

**操作**：
1. 複製 `templates/entity_template.json`
2. 填入你的資訊：
   - `@id`（唯一網址）
   - `name`
   - `sameAs`（LinkedIn, Twitter, GitHub...至少 5 個）
3. 添加到你的網站（建議路徑：`/entity/your-name`）

**完整範例**: `examples/entity_example_person.json`

**檢查**：
```bash
✅ 跨平台一致性 ≥ 0.95？
✅ 至少 5 個 sameAs 連結？
✅ 包含 LinkedIn + 1 個權威平台？
```

---

### Step 2: 創建 Answer-First Block（7 分鐘）

**什麼是 AFB？**  
一個 AI 可以直接抽取、不需要上下文的答案單元

**四層強制結構**：
1. **AI Quick Answer**（≤30 字）
2. **Context Fit**（適用/不適用情境）
3. **Confidence Signals**（JSON 格式）
4. **Machine-Readable Payload**（JSON-LD）

**操作**：
1. 複製 `templates/afb_template.json`
2. 填入：
   - 簡短答案（30 字內）
   - 適用問題類型
   - **不適用情境**（很重要！）
   - Entity 連結
3. 添加到內容頁面

**完整範例**: `examples/afb_example_definition.json`

---

### Step 3: 添加 Citations（3 分鐘）

**為什麼需要 Citations？**  
讓 AI 能驗證你的聲明

**操作**：
1. 複製 `templates/citation_template.json`
2. 填入：
   - 來源機構/作者
   - 具體聲明
   - 證據類型（peer_reviewed / official_report / ...）
   - 來源網址
3. 連結到 AFB

**完整範例**: `examples/citation_example_peer_reviewed.json`

**最佳實踐**：
- ✅ 至少 2 個獨立來源
- ✅ 選擇高信譽來源
- ✅ 記錄具體方法與樣本數

---

## 📊 關鍵指標速查

### Entity Confidence (EC)
**公式**:
```
EC = 一致性(0.30) + 權威性(0.25) + 引用網絡(0.20) 
     + 內容頻率(0.15) + 社群證明(0.10)
```
**門檻**: ≥ 0.70（及格），≥ 0.90（權威）

---

### Citation Confidence Score (CCS)
**公式**:
```
CCS = 交叉驗證(0.28) + 證據強度(0.20) + 來源信譽(0.18) 
      + 時效性(0.14) + 可驗證度(0.12) + 驗證狀態(0.08)
```
**門檻**: ≥ 0.70（可用），≥ 0.90（優先）

**重要**: CCS 獨立於 Entity Confidence

---

## ✅ 完成檢查清單

### Entity 檢查
```bash
□ 有唯一的 @id（URI）？
□ 跨平台一致性 ≥ 0.95？
□ 至少 5 個 sameAs 連結？
□ 包含 LinkedIn + 1 個權威平台？
□ Entity Confidence ≥ 0.70？
```

### AFB 檢查
```bash
□ AI Quick Answer ≤ 30 字？
□ 可獨立理解，無需上下文？
□ Context Fit 明確（適用 + 不適用）？
□ Confidence Signals 為 JSON 格式？
□ Machine-Readable Payload 完整？
```

### Citation 檢查
```bash
□ Citation ID 唯一？
□ Source Entity 存在且有效？
□ Claim 清晰具體？
□ Evidence Type 已分類？
□ Source URL 可訪問？
□ CCS ≥ 0.60？
```

---

## 🚨 新手常見錯誤

### ❌ 錯誤 1：跳過 Entity 建立
**問題**: 沒有 Entity，你連被考慮的資格都沒有  
**解決**: 始終從 Entity 開始

---

### ❌ 錯誤 2：省略「不適用情境」
**問題**: AI 可能在錯誤場景使用你的答案  
**解決**: Context Fit 的負面清單同等重要

---

### ❌ 錯誤 3：Citations 缺乏交叉驗證
**問題**: 單一來源風險高  
**解決**: 統計聲明至少需要 2 個獨立來源

---

### ❌ 錯誤 4：混淆 EC 與 CCS
**問題**: 導致被權威綁架  
**解決**: CCS 獨立計算，不受 Entity 影響

---

### ❌ 錯誤 5：過早優化參數
**問題**: 數據不足時調整導致偏差  
**解決**: 至少收集 30-50 個樣本再調整

---

## 📚 下一步學習路徑

### 如果你是...

#### 👤 完全新手
1. ✅ 完成快速開始（本文件）
2. 📖 閱讀 [README.md](./README.md)
3. 📖 閱讀 [SKILL.md](./SKILL.md) - 檢查清單部分

---

#### 🔧 技術實作者
1. ✅ 完成快速開始
2. 📖 閱讀 [docs/AI_READY_SEO_PLANNING.md](./docs/AI_READY_SEO_PLANNING.md) - Phase 0-1
3. 🛠️ 使用 templates/ 和 examples/ 開始實作
4. 📖 閱讀 [docs/AI_CITATION_ENGINEERING_PHASE2.md](./docs/AI_CITATION_ENGINEERING_PHASE2.md)

---

#### 📊 決策者
1. ✅ 閱讀快速開始（概念部分）
2. 📖 閱讀 [docs/EXECUTIVE_SUMMARY.md](./docs/EXECUTIVE_SUMMARY.md)
3. 📊 查看 [AI_CITATION_ENGINEERING_STATUS.md](./AI_CITATION_ENGINEERING_STATUS.md)

---

#### 🔬 研究者
1. ✅ 完成快速開始
2. 📖 按順序閱讀 Phase 0 → 1 → 2 → 3
3. 📚 查看 [AI_CITATION_ENGINEERING_INDEX.md](./AI_CITATION_ENGINEERING_INDEX.md)

---

## 💡 實用技巧

### 技巧 1：先優化核心頁面
不要一次優化所有頁面，先選 5-10 個核心頁面開始

---

### 技巧 2：用範例作為起點
複製 `examples/` 中的檔案，直接修改比從零開始快

---

### 技巧 3：Entity 是一切的基礎
Entity Confidence < 0.60 時，先提升 Entity 再做其他優化

---

### 技巧 4：Citations 要具體
包含數字、方法、樣本數、時間範圍的 Citation 更可信

---

### 技巧 5：測試前先建立基礎
完成 Phase 0（Entity）+ Phase 1（AFB）後再進行 Phase 3 測試

---

## 🔗 重要連結

### 核心文檔
- [SKILL.md](./SKILL.md) - 完整技能文檔
- [README.md](./README.md) - 專案概覽
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - 資料夾結構

### 模板與範例
- [templates/](./templates/) - JSON-LD 模板
- [examples/](./examples/) - 使用範例

### 技術文檔
- [Phase 0-1](./docs/AI_READY_SEO_PLANNING.md) - Entity + AFB
- [Phase 2](./docs/AI_CITATION_ENGINEERING_PHASE2.md) - Citations
- [Phase 3](./docs/AI_CITATION_ENGINEERING_PHASE3.md) - Testing

---

## 🎓 核心原則（務必記住）

1. **Entity First, Content Second**  
   先建立可信的 Entity，再產出內容

2. **Signals > Claims**  
   可驗證的信號比聲明重要

3. **可計算 > 可讀**  
   機器可計算比人類可讀重要

4. **系統可以拒絕自己**  
   條件不足時，不生成 AFB / 不使用 Citation

5. **驗證 > 優化**  
   先驗證預測準確度，再調整參數

---

## ⏱️ 預期時間線

| 階段 | 時間 | 成果 |
|------|------|------|
| **第 1 天** | 1 小時 | Entity 建立完成 |
| **第 1 週** | 5 小時 | 5-10 個核心頁面轉為 AFB |
| **第 1 個月** | - | Entity Confidence ≥ 0.70 |
| **第 3 個月** | - | 開始被 AI 引用 |
| **第 6 個月** | - | 成為特定主題的 Default Source |

---

## ❓ 常見問題

### Q: 我必須全部做完才有效果嗎？
**A**: 不，但建議至少完成：
- Phase 0（Entity）+ Phase 1（AFB）
- 沒有 Entity = 沒有資格

---

### Q: 這會影響我現有的 SEO 嗎？
**A**: 不會。AI Citation Engineering 是額外優化，不影響傳統 SEO。

---

### Q: 多久能看到效果？
**A**: 
- 1 個月：基礎就位
- 3 個月：開始被引用
- 6 個月：形成權威

---

### Q: 我可以只用 ChatGPT/Perplexity 測試嗎？
**A**: 可以，但建議至少測試 2-3 個 AI 平台（ChatGPT, Perplexity, Claude）

---

## 🚀 現在就開始

1. 📋 複製 `templates/entity_template.json`
2. ✏️ 填入你的資訊
3. 🚀 添加到網站
4. ✅ 完成第一個 Entity！

**需要幫助？** 查看 [examples/](./examples/) 或閱讀 [SKILL.md](./SKILL.md)

---

**專案維護**: AI Citation Engineering Team  
**最後更新**: 2026-02-06  
**版本**: v0.5.0

---

**查看完整專案**: [README.md](./README.md) | [SKILL.md](./SKILL.md) | [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
