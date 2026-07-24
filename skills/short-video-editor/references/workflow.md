# Eight-stage workflow

All work belongs in `<source-directory>/edit/`; the supplied media stays unchanged. Read any existing `project.md` first.

## 1. 素材檢查

Use `ffprobe` to record streams, duration, dimensions, frame rate, audio, and decode status. Confirm the intended source and vertical target before creating the workspace.

## 2. 逐字轉寫

Cache a word-level verbatim transcript keyed to the unchanged source. Obtain file-specific consent before cloud upload. If the user explicitly chooses local Whisper, label timing lower-confidence and perform extra playback checks at every EDL boundary.

## 3. 內容整理

Create a readable transcript and identify the hook, story, strongest moments, repetition, slips, likely target length, and ambiguities needing visual inspection. This is analysis, not an approved cut list.

## 4. 剪輯決策

Give a 4–8 sentence strategy covering audience outcome, narrative shape, chosen material, pacing, estimated duration, visual direction, and subtitle approach. Wait for approval. B-roll, animation, music, effects, CTA, and publishing are opt-in.

## 5. 逐段粗剪

Build `edl.json` from word-aligned kept ranges. Extract and process each segment independently, add short audio fades, then concatenate. Inspect ambiguous source cuts before committing them.

## 6. 轉色／圖卡／字幕

Apply colour correction only when technically necessary or approved. Prefer static Pillow cards; use HyperFrames only for an approved HTML/CSS/GSAP animation. Generate subtitles from output-timeline offsets and burn them last.

## 7. 混音與完整預覽

Render one complete 720p preview with all approved audio and visuals. Inspect every cut and the full duration before presenting it for review.

## 8. QA 與正式定稿

Record preview evidence, make at most three evidence-led corrections, and request explicit approval. Then render one 1080×1920 final, inspect that actual file, run full decode, and deliver only if final checks pass.
