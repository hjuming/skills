# Pocock TDD 增補：seam 紀律與反作弊

來源：mattpocock/skills@ed37663 `engineering/tdd`，與本 skill 的 Iron Law 互補。
本 skill 管「順序」（紅先於綠），本篇管「測什麼、在哪測」。

## 核心原則

Tests should verify behavior through public interfaces, not implementation details. Code can change entirely; tests shouldn't.

好測試讀起來像規格：「user can checkout with valid cart」。它們只走公開 API，重構後依然存活。判斷法：**重構後行為沒變但測試爆了，就代表測到了實作而非行為。**

## 反模式一：水平切片

**禁止「先寫全部測試，再寫全部實作」。** 那是把 RED 當成「寫完所有測試」、GREEN 當成「寫完所有 code」的水平切片，產出的是爛測試：

- 批量寫的測試測的是「想像中的行為」，不是「真實行為」
- 只測到資料結構與函式簽章的「形狀」，測不到使用者在乎的行為
- 行為壞了照樣過、行為沒壞反而掛

正確做法：垂直切片（tracer bullet）。一個測試 → 一段實作 → 重複。每個新測試都回應上一輪學到的東西。

```
WRONG (horizontal):  RED: test1..test5 → GREEN: impl1..impl5
RIGHT (vertical):    test1→impl1, test2→impl2, ...
```

## 反模式二：實作耦合

紅旗清單：

- mock 內部協作者（`expect(mockPayment.process).toHaveBeenCalledWith(...)`）
- 測 private method
- assert 呼叫次數/順序
- 繞過介面驗證（直接查 DB 而不是走 `getUser()`）
- 測試名稱描述 HOW 而不是 WHAT

```typescript
// BAD: 繞過介面
await createUser({ name: "Alice" });
const row = await db.query("SELECT * FROM users WHERE name = ?", ["Alice"]);

// GOOD: 走介面驗證
const user = await createUser({ name: "Alice" });
expect((await getUser(user.id)).name).toBe("Alice");
```

WEDO Supabase 場景：在 repository／gateway 介面這個 seam 測（把 Supabase client 當注入的 adapter，用 in-memory 或 PGLite 替身），不要在測試裡直接查資料庫驗證。

## 反模式三：套套邏輯測試

`expect(add(a, b)).toBe(a + b)` 這種「用和 code 相同的邏輯算期望值」的測試永遠抓不到 bug。**期望值必須來自獨立真值來源**：已知字面值、手算範例、spec 裡的數字。這是審查 AI 產出測試時的第一檢查點。

（註：此條為 Pocock workshop／影片中的紀律，repo tdd SKILL.md 未逐字收錄；經驗證與其「tests shouldn't change」哲學一致。）

## 實作前的 Planning 檢查

寫任何 code 之前：

- [ ] 跟使用者確認公開介面長什麼樣
- [ ] 跟使用者確認要測哪些行為、在哪些 seam 測（**不可能測所有東西**，聚焦關鍵路徑與複雜邏輯）
- [ ] 找深模組機會（小介面、深實作；見 `codebase-deepening`）
- [ ] 測試名稱與介面用詞對齊專案 `CONTEXT.md` 語彙、尊重該區的 ADR

## 每輪循環檢查

- [ ] 測試描述行為，不是實作
- [ ] 只用公開介面
- [ ] 內部重構後測試仍存活
- [ ] code 是通過當前測試的最小量
- [ ] 沒有偷加預期外功能
- [ ] 期望值來自獨立真值來源
