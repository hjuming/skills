---
name: video-editing-setup
description: Set up, audit, repair, or verify a local AI short-video editing environment using video-use, FFmpeg, ffprobe, transcription credentials, and optional HyperFrames. Use for 影片剪輯環境、短影音工具安裝、FFmpeg／video-use 檢查、ElevenLabs 設定或剪輯環境修復. Do not use to edit media, transcribe a supplied video, or answer generic Premiere Pro or CapCut questions.
license: MIT; adapted from Jaycheng1103/chatgpt-video-editing-skills
---

# Video Editing Setup

Prepare the editing environment without starting creative work. The deliverable is an evidence-backed readiness report, never a transcript, preview, or rendered video.

## Ownership

Use for:
- inspecting or installing the local AI short-video toolchain
- repairing a known `video-use`, FFmpeg, ffprobe, credential, or optional HyperFrames gap
- proving readiness before `short-video-editor` begins

Do not use for:
- editing, transcription, subtitles, or export
- generic Premiere Pro, DaVinci Resolve, or CapCut操作教學
- silently uploading media, spending API quota, or changing repositories

## Workflow

1. Read [setup-runbook.md](references/setup-runbook.md) and [security.md](references/security.md).
2. Inspect before mutation: paths, exact Git origin, branch/commit, clean status, tool versions, and active Skills registration. Treat a non-repository path, wrong origin, dirty checkout, or unsupported runtime as a hard stop.
3. List every proposed mutation—clone, pull, dependency install, large download, symlink, credential storage—and obtain explicit approval.
4. After approval, repeat the preflight immediately before mutation. Install the complete `video-use` repository; do not copy only one Skill file. HyperFrames is optional and only relevant to an approved HTML/CSS/GSAP animation workflow.
5. Accept transcription credentials only through an environment variable or a verified ignored, regular, mode-600 local file. Never read or print secret values.
6. Verify locally without paid API calls or media uploads. Report checked paths, approved changes, evidence, gaps, and the next action.

## Output Contract

Return:
- readiness: `ready`, `partially ready`, or `blocked`
- observed repository origins, commits, and cleanliness
- required and optional tool versions or paths
- credential source presence only, never its value
- mutations performed and their approval basis
- skipped optional components
- remaining gaps and safe next step

## Hard boundaries

- Setup ends before the first media upload or edit artifact.
- A request to “set it up” does not authorize newly discovered mutations.
- Never reset, overwrite, rewrite a remote, or replace an existing Skill path.
- Before a later cloud transcription, the editing Skill must obtain file-specific consent again.

## Source

Adapted from `chatgpt-video-editing-setup` in [Jaycheng1103/chatgpt-video-editing-skills](https://github.com/Jaycheng1103/chatgpt-video-editing-skills), MIT License, reviewed at commit `eda6881e78e41614caffdd392f1d4ee6d5b800dd` (2026-07-20). See `LICENSE.txt`.
