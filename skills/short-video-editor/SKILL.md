---
name: short-video-editor
description: "Edit user-supplied media into a vertical Reel, Short, TikTok, video diary, or evidence-backed short video with transcript, EDL, subtitles, preview, QA, and final export; includes the environment check and safe install gate for the editing toolchain (ffmpeg, Whisper 等). Use for 剪短影音、直式 Reels、影片轉字幕、口播剪輯、訪談精華、Shorts／TikTok 剪輯、剪輯環境檢查、安裝剪輯工具 or producing a verified 9:16 final. Do not use for generic Premiere Pro, DaVinci Resolve, or CapCut tutorials. AI 生成（不是剪既有素材）的旁白影片與 YouTube 上架維運走 wedo-ai-video-channel；用既有水下／旅遊影片加 AI 配音做 Shorts＋橫式宣傳短片走 wedo-video-studio."
license: MIT; adapted from Jaycheng1103/chatgpt-video-editing-skills
---

# Short Video Editor

Create a safe, verified vertical short from user-provided media. Start only when a source file or clear source location is available.

## Ownership

Use for:
- inspecting and transcribing supplied media
- developing a short-video strategy and edit decision list
- producing subtitles, preview, QA evidence, and an approved final

Do not use for:
- general editing-software tutorials without supplied media
- stock-footage sourcing, publishing, or unapproved creative additions

## Prerequisite and consent gate

1. Inspect every source with `ffprobe`. Never overwrite, move, rename, or delete original media. Put new artifacts in `<source-directory>/edit/`.
2. Verify the required toolchain. Do not silently install or repair anything; handle environment gaps with `references/video-editing-setup.md`.
3. Before a first ElevenLabs upload, identify the exact source file, purpose, provider, and possible quota/cost; wait for explicit consent. If cloud upload is declined, offer local Whisper as a lower-confidence fallback with extra boundary QA.
4. Read [workflow.md](references/workflow.md), [production-rules.md](references/production-rules.md), and [output-contract.md](references/output-contract.md).

## Workflow

Follow the eight stages in order:

1. 素材檢查
2. 逐字轉寫
3. 內容整理
4. 剪輯決策
5. 逐段粗剪
6. 轉色／圖卡／字幕
7. 混音與完整預覽
8. QA 與正式定稿

After stages 1–3, provide a plain-language 4–8 sentence strategy and wait for approval. Until approval, do not choose edit points or add B-roll, animation, music, effects, CTA, or publishing plans.

Use word-level timestamps, never cut inside a word, and retain short boundary padding. Build subtitles on the output timeline and apply them last. Render and inspect one complete 720p preview first. Make no more than three evidence-based self-fix passes. Only after explicit preview approval may you render and independently verify the 1080×1920 final.

## Output Contract

Report one formal final with:
- source and original-preservation evidence
- upload consent and transcript/cache state
- approved strategy and EDL state
- preview path and QA result
- final path, streams, duration, dimensions, decode and boundary checks
- self-fix count, retained artifacts, and unresolved issues

If the verified final does not exist, say so plainly. A command, transcript, source frame, or preview is not a completed final.

## Source

Adapted from `chatgpt-short-video-editor` in [Jaycheng1103/chatgpt-video-editing-skills](https://github.com/Jaycheng1103/chatgpt-video-editing-skills), MIT License, reviewed at commit `eda6881e78e41614caffdd392f1d4ee6d5b800dd` (2026-07-20). See `LICENSE.txt`.

## 併入的參考（2026-10-19）

原為獨立 Skill，SSOT 精簡時併入本 Skill；任務命中下列情境時再讀。

| 情境 | 讀這個檔 |
| --- | --- |
| 剪輯環境檢查、安裝安全 gate、setup runbook、security（MIT 授權檔在 references/video-editing-setup/） | `references/video-editing-setup.md` |
