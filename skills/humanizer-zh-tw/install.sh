#!/bin/bash

# Humanizer-zh-TW 安裝腳本
# 用途: 將 Humanizer 的 Cursor 規則安裝到指定專案

set -e

SKILL_DIR="/Users/MING/Sites/skills/skills/humanizer-zh-tw"
TARGET_PROJECT="$1"

if [ -z "$TARGET_PROJECT" ]; then
    echo "❌ 請提供目標專案路徑"
    echo "用法: bash install.sh /path/to/project"
    exit 1
fi

if [ ! -d "$TARGET_PROJECT" ]; then
    echo "❌ 目標專案不存在: $TARGET_PROJECT"
    exit 1
fi

CURSOR_RULES="$TARGET_PROJECT/.cursorrules"

echo "🔧 正在安裝 Humanizer-zh-TW 到 $TARGET_PROJECT..."

# 檢查是否已有 .cursorrules
if [ -f "$CURSOR_RULES" ]; then
    echo "⚠️  檢測到現有 .cursorrules"
    
    # 檢查是否已經安裝過 (簡單檢查)
    if grep -q "Humanizer-zh-TW" "$CURSOR_RULES"; then
        echo "✅ Humanizer-zh-TW 似乎已存在於 .cursorrules 中。"
        exit 0
    fi
    
    echo "➕ 追加規則到現有檔案..."
    echo "" >> "$CURSOR_RULES"
    echo "" >> "$CURSOR_RULES"
    echo "# ==========================================" >> "$CURSOR_RULES"
    cat "$SKILL_DIR/.cursorrules" >> "$CURSOR_RULES"
else
    echo "📄 建立新的 .cursorrules..."
    cat "$SKILL_DIR/.cursorrules" > "$CURSOR_RULES"
fi

echo "✅ 安裝完成! 現在你可以在 Cursor 中要求 AI '去除這段文字的 AI 味'。"
