// Skills WEDO - public learning platform interactions

const CATEGORY_CONFIG = {
    featured: { label: "推薦入門", order: 0 },
    all: { label: "全部推薦", order: 1 },
    basics: { label: "基礎工作流", order: 2 },
    content: { label: "內容與溝通", order: 3 },
    document: { label: "文件與簡報", order: 4 },
    coding: { label: "程式開發", order: 5 },
    automation: { label: "測試與自動化", order: 6 },
    ai: { label: "AI 工程", order: 7 },
    trust: { label: "安全與可信", order: 8 }
};

let currentFilter = "featured";
let searchQuery = "";

const skillsGrid = document.getElementById("skillsGrid");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

function init() {
    if (typeof skillsData === "undefined") {
        handleInitError(new Error("Skills data not found."));
        return;
    }

    hydrateSearchFromUrl();
    populateCategorySelect();
    updateDynamicStats();
    renderSkills();
    setupEventListeners();
    setupCopyButtons();
    setupMobileMenu();
}

function hydrateSearchFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");

    if (!query) return;

    searchQuery = query.trim().toLowerCase();
    if (searchInput) searchInput.value = query.trim();
}

function updateDynamicStats() {
    const count = skillsData.length;
    const categories = new Set(skillsData.map(skill => skill.category));
    const featured = skillsData.filter(skill => skill.featured).length;

    setText("stat-skill-count", count);
    setText("stat-category-count", categories.size);
    setText("stat-featured-count", featured);
    setText("recommended-count", count);
    setText("footer-count", count);
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value);
}

function populateCategorySelect() {
    if (!categorySelect) return;

    const categoryCounts = {};
    skillsData.forEach(skill => {
        categoryCounts[skill.category] = (categoryCounts[skill.category] || 0) + 1;
    });

    const options = [
        {
            value: "featured",
            label: CATEGORY_CONFIG.featured.label,
            count: skillsData.filter(skill => skill.featured).length
        },
        {
            value: "all",
            label: CATEGORY_CONFIG.all.label,
            count: skillsData.length
        },
        ...Object.entries(CATEGORY_CONFIG)
            .filter(([key]) => !["featured", "all"].includes(key))
            .filter(([key]) => categoryCounts[key] > 0)
            .sort((a, b) => a[1].order - b[1].order)
            .map(([key, config]) => ({
                value: key,
                label: config.label,
                count: categoryCounts[key]
            }))
    ];

    categorySelect.innerHTML = options
        .map(option => `<option value="${option.value}">${option.label} (${option.count})</option>`)
        .join("");
}

function renderSkills() {
    if (!skillsGrid) return;

    const q = searchQuery.trim().toLowerCase();
    const filteredSkills = skillsData.filter(skill => {
        const matchesCategory =
            currentFilter === "all" ||
            skill.category === currentFilter ||
            (currentFilter === "featured" && skill.featured);

        const searchable = [
            skill.id,
            skill.name,
            skill.categoryName,
            skill.level,
            skill.persona,
            skill.description,
            skill.recommendationReason,
            ...skill.examples
        ].join(" ").toLowerCase();

        return matchesCategory && (!q || searchable.includes(q));
    });

    if (filteredSkills.length === 0) {
        skillsGrid.innerHTML = `
            <div class="empty-state">
                <p>找不到符合「${escapeHtml(searchQuery)}」的推薦 Skill。</p>
                <button class="btn btn-secondary" type="button" data-reset-search>清除搜尋</button>
            </div>
        `;
        const resetButton = skillsGrid.querySelector("[data-reset-search]");
        resetButton?.addEventListener("click", () => {
            searchQuery = "";
            searchInput.value = "";
            renderSkills();
        });
        return;
    }

    skillsGrid.innerHTML = filteredSkills.map((skill, index) => `
        <article class="skill-card" style="animation-delay: ${Math.min(index * 0.035, 0.35)}s">
            <div class="skill-card-topline">
                <span class="skill-icon" aria-hidden="true">${escapeHtml(skill.icon)}</span>
                <div>
                    <p class="skill-category">${escapeHtml(skill.categoryName)} · ${escapeHtml(skill.level)}</p>
                    <h3 class="skill-title">${escapeHtml(skill.name)}</h3>
                </div>
            </div>
            <p class="skill-persona">${escapeHtml(skill.persona)}</p>
            <p class="skill-description">${escapeHtml(skill.description)}</p>
            <div class="recommendation-reason">
                <span>推薦理由</span>
                <p>${escapeHtml(skill.recommendationReason)}</p>
            </div>
            <div class="skill-example">
                <label for="example-${escapeHtml(skill.id)}">可直接貼到 AI 對話</label>
                <textarea id="example-${escapeHtml(skill.id)}" spellcheck="false" readonly>${escapeHtml(skill.examples[0])}</textarea>
                <button class="copy-btn" type="button">複製範例</button>
            </div>
            <a class="skill-source-link" href="${escapeHtml(skill.link)}" target="_blank" rel="noopener noreferrer">
                查看公開 GitHub
            </a>
        </article>
    `).join("");

    setupCopyButtons();
}

function setupEventListeners() {
    searchInput?.addEventListener("input", event => {
        searchQuery = event.target.value;
        renderSkills();
    });

    categorySelect?.addEventListener("change", event => {
        currentFilter = event.target.value;
        renderSkills();
        announceToScreenReader(`已切換分類：${event.target.options[event.target.selectedIndex].text}`);
    });

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", event => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            closeMobileMenu();
        });
    });

    window.addEventListener("scroll", () => {
        document.querySelector(".header")?.classList.toggle("scrolled", window.scrollY > 24);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMobileMenu();
    });
}

function setupCopyButtons() {
    document.querySelectorAll(".copy-btn").forEach(button => {
        if (button.dataset.bound === "true") return;
        button.dataset.bound = "true";

        button.addEventListener("click", event => {
            event.preventDefault();
            const explicitText = button.dataset.copy;
            const exampleItem = button.closest(".skill-example, .template-card, .beginner-install-panel, .copy-row, .quick-command");
            const textarea = exampleItem?.querySelector("textarea");
            const code = exampleItem?.querySelector("code");
            const textToCopy = explicitText || textarea?.value || code?.textContent || "";
            copyToClipboard(textToCopy, button);
        });
    });
}

function copyToClipboard(text, triggerButton) {
    if (!text) return;

    const done = () => {
        showToast("已複製到剪貼簿");
        const original = triggerButton?.textContent;
        if (triggerButton && original) {
            triggerButton.textContent = "已複製";
            triggerButton.classList.add("copied");
            setTimeout(() => {
                triggerButton.textContent = original;
                triggerButton.classList.remove("copied");
            }, 1400);
        }
    };

    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
        fallbackCopy(text, done);
    }
}

function fallbackCopy(text, onDone) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand("copy");
        onDone();
    } catch {
        showToast("複製失敗，請手動複製");
    } finally {
        document.body.removeChild(textarea);
    }
}

function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
}

function announceToScreenReader(message) {
    const announcement = document.createElement("div");
    announcement.className = "visually-hidden";
    announcement.setAttribute("role", "status");
    announcement.setAttribute("aria-live", "polite");
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
}

function setupMobileMenu() {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".mobile-menu-overlay");

    menuToggle?.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        if (isOpen) closeMobileMenu();
        else {
            menuToggle.setAttribute("aria-expanded", "true");
            mobileMenu?.classList.add("active");
            overlay?.classList.add("active");
            document.body.classList.add("menu-open");
        }
    });

    overlay?.addEventListener("click", closeMobileMenu);
}

function closeMobileMenu() {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".mobile-menu-overlay");

    menuToggle?.setAttribute("aria-expanded", "false");
    mobileMenu?.classList.remove("active");
    overlay?.classList.remove("active");
    document.body.classList.remove("menu-open");
}

function handleInitError(error) {
    console.error(error);
    if (skillsGrid) {
        skillsGrid.innerHTML = `
            <div class="empty-state">
                <p>無法載入推薦清單，請重新整理頁面。</p>
            </div>
        `;
    }
}

function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = String(value ?? "");
    return div.innerHTML;
}

init();
