// Public starter-oriented Skills data for skills.wedopr.com.
// This list intentionally excludes WEDO-internal workflow skills.
const skillsData = [
    {
        id: "skill-creator",
        name: "skill-creator",
        icon: "✦",
        category: "basics",
        categoryName: "基礎工作流",
        level: "入門必學",
        persona: "想做自己的第一個 Skill",
        description: "協助你把重複任務整理成 SKILL.md，包含命名、description、觸發條件、範例與資料夾結構。",
        examples: [
            "請用 skill-creator 幫我把「每週產出 SEO 文章簡報」整理成一個可重複使用的 Skill。",
            "請檢查我的 SKILL.md 是否有清楚的 description、使用時機與步驟。"
        ],
        recommendationReason: "新手最該先學會的不是收集更多 Skills，而是把自己的工作流程封裝起來。",
        link: "https://github.com/hjuming/skills",
        featured: true
    },
    {
        id: "prompt-engineering",
        name: "prompt-engineering",
        icon: "⌘",
        category: "basics",
        categoryName: "基礎工作流",
        level: "入門必學",
        persona: "想讓指令更穩定的人",
        description: "整理高品質提示詞設計模式，讓任務描述、上下文、限制與輸出格式更清楚。",
        examples: [
            "請用 prompt-engineering 幫我把這段模糊需求改成可交付的 AI 任務指令。",
            "請把我的 prompt 改成更適合長期重複使用的工作流。"
        ],
        recommendationReason: "好的 Skills 來自好的任務定義。這是所有 AI 工作流的底層能力。",
        link: "https://github.com/hjuming/skills",
        featured: true
    },
    {
        id: "plan-writing",
        name: "plan-writing",
        icon: "01",
        category: "basics",
        categoryName: "基礎工作流",
        level: "入門必學",
        persona: "需要把事情拆清楚的人",
        description: "把複雜任務拆成目標、限制、步驟、依賴、驗證方式，適合專案啟動與任務拆解。",
        examples: [
            "請用 plan-writing 幫我把這個網站重構需求拆成可執行計畫。",
            "請把這個企劃案整理成目標、里程碑、風險與驗證清單。"
        ],
        recommendationReason: "初學者常輸在任務太大。先會拆任務，才會真正用好 AI。",
        link: "https://github.com/hjuming/skills",
        featured: true
    },
    {
        id: "humanizer-zh-tw",
        name: "humanizer-zh-tw",
        icon: "文",
        category: "content",
        categoryName: "內容與溝通",
        level: "入門友善",
        persona: "常寫繁中內容的人",
        description: "把繁體中文改寫得更自然，降低 AI 罐頭語氣，適合貼文、信件、企劃與公開說明。",
        examples: [
            "請用 humanizer-zh-tw 把這段文章改得更像真人寫、保留原本意思。",
            "請把這封信改得自然、直接、不要像 AI 產生。"
        ],
        recommendationReason: "中文內容工作者最容易立即感受到價值，特別適合做第一個日常 Skill。",
        link: "https://github.com/hjuming/skills",
        featured: true
    },
    {
        id: "copywriting",
        name: "copywriting",
        icon: "筆",
        category: "content",
        categoryName: "內容與溝通",
        level: "入門友善",
        persona: "需要寫銷售與行銷文字的人",
        description: "協助產出、重寫與優化行銷文案，讓賣點、受眾、語氣與行動呼籲更清楚。",
        examples: [
            "請用 copywriting 幫我重寫這個產品介紹，讓價值更明確。",
            "請把這段文案改成適合 Threads 的開場與段落。"
        ],
        recommendationReason: "很適合初學者理解 Skills 如何把語氣、格式與流程固定下來。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "seo-content-writer",
        name: "seo-content-writer",
        icon: "SEO",
        category: "content",
        categoryName: "內容與溝通",
        level: "入門友善",
        persona: "需要寫可被搜尋理解的內容",
        description: "協助撰寫 SEO 文章、標題、小節與摘要，讓內容更容易被搜尋引擎與 AI 系統理解。",
        examples: [
            "請用 seo-content-writer 幫我規劃一篇「什麼是 AI Skills」的文章大綱。",
            "請根據這組關鍵字寫一篇 AI 友善的教學文章。"
        ],
        recommendationReason: "適合把 AIO、SEO 與內容工作流做成穩定模板。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "doc-coauthoring",
        name: "doc-coauthoring",
        icon: "協",
        category: "content",
        categoryName: "內容與溝通",
        level: "入門友善",
        persona: "需要共同撰寫文件的人",
        description: "把共同寫作流程拆成目的、讀者、版本、修訂與交付格式，適合提案、白皮書、企劃文件。",
        examples: [
            "請用 doc-coauthoring 和我一起整理這份提案，先確認讀者與結構。",
            "請把這份草稿改成可對外發布的文件版本。"
        ],
        recommendationReason: "讓 AI 不只是改字，而是成為可以一起建立文件結構的協作者。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "pdf",
        name: "pdf",
        icon: "PDF",
        category: "document",
        categoryName: "文件與簡報",
        level: "入門友善",
        persona: "常處理 PDF 的人",
        description: "PDF 讀取、整理、表單與轉換相關工作流，適合把文件處理變成可重複流程。",
        examples: [
            "請用 pdf 幫我整理這份 PDF 的重點與可引用段落。",
            "請檢查這份 PDF 表單欄位，列出需要填寫的資訊。"
        ],
        recommendationReason: "文件是大多數知識工作者最常見的 AI 任務，PDF Skill 很容易落地。",
        link: "https://github.com/hjuming/skills",
        featured: true
    },
    {
        id: "docx",
        name: "docx",
        icon: "DOC",
        category: "document",
        categoryName: "文件與簡報",
        level: "入門友善",
        persona: "需要產出 Word 文件的人",
        description: "Word 文件建立、編輯、修訂與格式處理，適合合約、提案、報告與正式文件。",
        examples: [
            "請用 docx 幫我把這份大綱整理成正式 Word 文件結構。",
            "請幫我檢查這份 docx 的章節、註解與格式一致性。"
        ],
        recommendationReason: "官方與社群最常見的 Skills 類型之一，能快速理解「指令 + 文件工具」的價值。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "xlsx",
        name: "xlsx",
        icon: "XLS",
        category: "document",
        categoryName: "文件與簡報",
        level: "入門友善",
        persona: "常整理表格與資料的人",
        description: "試算表建立、資料整理、公式、摘要與檢查，適合營運報表與資料清理。",
        examples: [
            "請用 xlsx 幫我整理這份表格，產出摘要與欄位檢查。",
            "請幫我設計一份可維護的 Excel 報表格式。"
        ],
        recommendationReason: "表格任務高度重複，是最適合用 Skills 標準化的場景之一。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "pptx",
        name: "pptx",
        icon: "PPT",
        category: "document",
        categoryName: "文件與簡報",
        level: "入門友善",
        persona: "需要做簡報的人",
        description: "簡報架構、投影片內容、版面與匯出流程，適合提案、教學、內部報告。",
        examples: [
            "請用 pptx 幫我把這份企劃整理成 10 頁簡報。",
            "請檢查這份簡報的資訊層級與每頁重點是否清楚。"
        ],
        recommendationReason: "讓 AI 從文字輸出進入真正可交付的簡報工作流。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "frontend-design",
        name: "frontend-design",
        icon: "UI",
        category: "coding",
        categoryName: "程式開發",
        level: "進階入門",
        persona: "想做出不罐頭介面的人",
        description: "協助設計與實作更有辨識度的前端介面，適合 landing page、dashboard、互動頁面。",
        examples: [
            "請用 frontend-design 幫我重構這個首頁，避免看起來像模板。",
            "請根據這個品牌方向設計一個可實作的前端版面。"
        ],
        recommendationReason: "很適合示範 Skills 如何把抽象品味轉成可執行的 UI 檢查規則。",
        link: "https://github.com/hjuming/skills",
        featured: true
    },
    {
        id: "web-design-guidelines",
        name: "web-design-guidelines",
        icon: "網",
        category: "coding",
        categoryName: "程式開發",
        level: "進階入門",
        persona: "需要檢查網頁品質的人",
        description: "用設計準則檢查網頁介面，包含閱讀性、層級、互動狀態、響應式與可用性。",
        examples: [
            "請用 web-design-guidelines review 這個頁面是否有 UI 問題。",
            "請依照 web-design-guidelines 列出這個 landing page 的前三個改善點。"
        ],
        recommendationReason: "讓 AI 不只會寫畫面，也能用一致標準審查畫面。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "typescript-expert",
        name: "typescript-expert",
        icon: "TS",
        category: "coding",
        categoryName: "程式開發",
        level: "進階入門",
        persona: "TypeScript 開發者",
        description: "協助 TypeScript 型別設計、嚴格模式、泛型與可維護程式碼檢查。",
        examples: [
            "請用 typescript-expert review 這段型別設計是否過度複雜。",
            "請幫我把這段 any 改成安全且可讀的 TypeScript 型別。"
        ],
        recommendationReason: "程式型 Skills 的好例子：明確領域、明確判準、容易驗證。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "nextjs-app-router-patterns",
        name: "nextjs-app-router-patterns",
        icon: "NX",
        category: "coding",
        categoryName: "程式開發",
        level: "進階入門",
        persona: "Next.js App Router 開發者",
        description: "整理 Next.js App Router、Server Components、資料讀取與路由架構的實作模式。",
        examples: [
            "請用 nextjs-app-router-patterns 檢查這個頁面的資料讀取方式。",
            "請幫我設計這個 Next.js 功能的 App Router 檔案結構。"
        ],
        recommendationReason: "框架知識很適合封裝成 Skill，避免每次重新講一次團隊慣例。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "systematic-debugging",
        name: "systematic-debugging",
        icon: "DBG",
        category: "automation",
        categoryName: "測試與自動化",
        level: "進階入門",
        persona: "常修 bug 的人",
        description: "用 root-cause tracing、最小重現、假設驗證與防回歸方式處理 bug。",
        examples: [
            "請用 systematic-debugging 幫我追這個測試失敗的根因。",
            "請不要直接猜修法，先幫我建立最小重現與驗證路徑。"
        ],
        recommendationReason: "最能讓初學者感受到 Skills 價值：把 AI 從亂猜答案拉回工程方法。",
        link: "https://github.com/hjuming/skills",
        featured: true
    },
    {
        id: "test-driven-development",
        name: "test-driven-development",
        icon: "TDD",
        category: "automation",
        categoryName: "測試與自動化",
        level: "進階入門",
        persona: "希望改動更穩的人",
        description: "用測試先行、紅綠重構與小步驗證方式完成功能或修 bug。",
        examples: [
            "請用 test-driven-development 幫我先設計這個功能的測試案例。",
            "請依 TDD 流程修改這個模組，不要一次改太大。"
        ],
        recommendationReason: "把品質習慣變成 AI 的預設工作方式，是 Skills 最實用的用法之一。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "github-workflow-automation",
        name: "github-workflow-automation",
        icon: "GH",
        category: "automation",
        categoryName: "測試與自動化",
        level: "進階",
        persona: "需要 PR、Issue、CI 工作流的人",
        description: "協助自動化 GitHub 工作流，包含 PR 檢查、CI 追蹤、review 回應與發布流程。",
        examples: [
            "請用 github-workflow-automation 幫我整理這次變更的 PR 描述。",
            "請檢查 CI 失敗原因，並提出最小修復計畫。"
        ],
        recommendationReason: "團隊協作類 Skill 的代表，能把重複的工程流程標準化。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "workflow-automation",
        name: "workflow-automation",
        icon: "流",
        category: "automation",
        categoryName: "測試與自動化",
        level: "進階",
        persona: "想把日常流程自動化的人",
        description: "協助設計可自動化的多步驟流程，包含觸發條件、輸入輸出、例外處理與驗證。",
        examples: [
            "請用 workflow-automation 幫我設計一個每週內容整理流程。",
            "請把這個手動 SOP 拆成可以交給 AI 執行的工作流。"
        ],
        recommendationReason: "當你開始做第二、第三個 Skill，這個能力會變成核心。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "mcp-builder",
        name: "mcp-builder",
        icon: "MCP",
        category: "ai",
        categoryName: "AI 工程",
        level: "進階",
        persona: "想把 AI 接到工具的人",
        description: "協助建立高品質 MCP 伺服器，讓 AI 能安全地連接外部服務、資料與工具。",
        examples: [
            "請用 mcp-builder 幫我規劃一個讀取內部資料庫的 MCP server。",
            "請檢查這個 MCP tool schema 是否清楚、安全、容易被 agent 使用。"
        ],
        recommendationReason: "MCP 是工具能力，Skills 是使用方法；兩者搭配才會變成可靠系統。",
        link: "https://github.com/hjuming/skills",
        featured: true
    },
    {
        id: "ai-engineer",
        name: "ai-engineer",
        icon: "AI",
        category: "ai",
        categoryName: "AI 工程",
        level: "進階",
        persona: "想做 LLM 產品的人",
        description: "協助建構 LLM 應用、RAG、Agent 架構、資料流與評估流程。",
        examples: [
            "請用 ai-engineer 幫我設計一個客服知識庫 RAG 架構。",
            "請檢查這個 Agent 系統有哪些資料流、工具權限與評估缺口。"
        ],
        recommendationReason: "適合從單一 Skill 走向完整 AI 應用架構的人。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "rag-engineer",
        name: "rag-engineer",
        icon: "RAG",
        category: "ai",
        categoryName: "AI 工程",
        level: "進階",
        persona: "需要知識庫與檢索的人",
        description: "協助設計 Retrieval-Augmented Generation 系統，包含 chunking、embedding、retrieval 與評估。",
        examples: [
            "請用 rag-engineer 幫我設計這批 PDF 的 RAG 切片與索引策略。",
            "請診斷這個 RAG 回答不準的可能原因。"
        ],
        recommendationReason: "當資料量變大，Skills 能把 RAG 的判斷流程穩定下來。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "langgraph",
        name: "langgraph",
        icon: "LG",
        category: "ai",
        categoryName: "AI 工程",
        level: "進階",
        persona: "需要多步驟 Agent 工作流的人",
        description: "協助設計 LangGraph 工作流，包含節點、狀態、路由、重試與人機協作節點。",
        examples: [
            "請用 langgraph 幫我把這個客服流程設計成 agent graph。",
            "請檢查這個 LangGraph 狀態設計是否容易維護。"
        ],
        recommendationReason: "把流程顯性化後，Skills 可以成為每個節點的作業規範。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "langfuse",
        name: "langfuse",
        icon: "OBS",
        category: "ai",
        categoryName: "AI 工程",
        level: "進階",
        persona: "需要觀測 LLM 品質的人",
        description: "協助導入 Langfuse 觀測、trace、prompt 版本與 LLM 評估流程。",
        examples: [
            "請用 langfuse 幫我規劃這個 AI 功能的 trace 與評估指標。",
            "請幫我設計 prompt 版本管理與失敗案例回收流程。"
        ],
        recommendationReason: "沒有觀測就沒有長期改善。這是 AI 產品從 demo 走向生產的分水嶺。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "agent-evaluation",
        name: "agent-evaluation",
        icon: "EVAL",
        category: "trust",
        categoryName: "安全與可信",
        level: "進階",
        persona: "需要評估 Agent 品質的人",
        description: "協助建立 Agent 評測、行為測試、基準與失敗案例分析，避免只憑感覺判斷好壞。",
        examples: [
            "請用 agent-evaluation 幫我設計這個 Agent 的評測集。",
            "請把這些失敗案例整理成可重跑的 eval checklist。"
        ],
        recommendationReason: "優質 Skills 不只教 AI 做事，也要教 AI 怎麼知道自己做得對不對。",
        link: "https://github.com/hjuming/skills",
        featured: true
    },
    {
        id: "agent-process-guard",
        name: "agent-process-guard",
        icon: "護",
        category: "ai",
        categoryName: "AI 工程",
        level: "進階",
        persona: "長時間對話後還會開大量本機服務的人",
        description: "AI coding 任務前置守門，先判斷命令是有限、長跑還是互動型，協助套用 timeout、背景執行、日誌與退出策略，避免 terminal 卡住與孤兒進程。",
        examples: [
            "請先用 agent-process-guard 盤點本次工作會用到的 npm / python / docker 常駐命令。",
            "請幫我改寫這段部署腳本，加入 agent-process-guard 的背景與清理流程。"
        ],
        recommendationReason: "當 AI 開始執行實際開發流程，process 管理常常是穩定性交付的第一道保險線。",
        link: "https://github.com/yanowo/agent-process-guard"
    },
    {
        id: "ai-citation-engineering",
        name: "ai-citation-engineering",
        icon: "引",
        category: "trust",
        categoryName: "安全與可信",
        level: "進階",
        persona: "重視來源與可信度的人",
        description: "協助建立 AI 輸出的引用、來源驗證、可追溯與可信呈現方式。",
        examples: [
            "請用 ai-citation-engineering 幫我設計這篇研究文章的引用規則。",
            "請檢查這份 AI 生成報告的來源可信度與引用格式。"
        ],
        recommendationReason: "當內容要被公開採信，引用與來源工程就不是加分，而是基本盤。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "api-security-best-practices",
        name: "api-security-best-practices",
        icon: "SEC",
        category: "trust",
        categoryName: "安全與可信",
        level: "進階",
        persona: "需要寫 API 或整合服務的人",
        description: "協助檢查 API 認證、授權、輸入驗證、速率限制、錯誤訊息與敏感資料保護。",
        examples: [
            "請用 api-security-best-practices review 這個 API 設計。",
            "請檢查這段程式是否有 token 外洩、過度授權或輸入驗證問題。"
        ],
        recommendationReason: "凡是會碰到資料與工具權限的 Agent，都需要安全工作流。",
        link: "https://github.com/hjuming/skills"
    },
    {
        id: "vulnerability-scanner",
        name: "vulnerability-scanner",
        icon: "掃",
        category: "trust",
        categoryName: "安全與可信",
        level: "進階",
        persona: "需要做安全檢查的人",
        description: "協助進行漏洞分析、風險分類與修補建議，適合部署前安全審查。",
        examples: [
            "請用 vulnerability-scanner 幫我檢查這個功能可能的安全風險。",
            "請把這些風險依嚴重性排序，並提出最小修補方案。"
        ],
        recommendationReason: "安裝第三方 Skills 前也該有安全審查意識，這是很好的補強能力。",
        link: "https://github.com/hjuming/skills"
    }
];
