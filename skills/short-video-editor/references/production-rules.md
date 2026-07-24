# Production rules

## Transcript and edit decisions

- Cache word-level verbatim timestamps per unchanged source.
- Snap every edit edge to a word boundary; retain roughly 30–200ms according to cadence.
- Store source, start, end, beat, quote, reason, and output offset in `edl.json`.
- Extract and verify kept segments independently before concatenation.
- Use about 30ms audio fades at segment edges to prevent clicks.

## Visuals, captions, and sound

- Grade or convert HLG to Rec.709 only when technically required or approved; inspect skin tones in the preview.
- Prefer Pillow for simple cards. HyperFrames is optional and requires an approved animation plan.
- Compute subtitles on the output timeline: `output_time = word.start - segment_start + segment_offset`.
- Apply subtitles after all overlays and cards; keep source speech intelligible.

## Preview and final QA

1. Render a complete 720p preview.
2. Inspect each cut in a ±1.5s window for jumps, flashes, pops, sync, subtitle visibility, and overlay alignment; inspect first, last, and representative middle frames.
3. Run a full decode and record duration, dimensions, video/audio streams, colour consistency, subtitle safe area, and mix.
4. Self-fix only from evidence, at most three passes; then stop and report unresolved issues.
5. After explicit preview approval, render and independently inspect the 1080×1920 final. Never reuse preview evidence as final-file evidence.
