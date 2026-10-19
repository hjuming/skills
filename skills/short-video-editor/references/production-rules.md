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

## 9:16 platform safe area

- Check the target platform's current phone preview before finalizing a vertical layout. Keep the series label, upper-left title, subject, and other essential information clear of platform headers and controls.
- When the upper area is crowded, use available space below to move the title and main visual down and rebalance the composition. Place subtitles in the open band below the main visual and above the account, caption, and action-control overlays.
- As a general starting reference, place the title around y=8–24%, main visual around y=27–59%, and subtitles around y=61–68%. In the supplied Instagram Reels example, use title start around y=8%, main visual around y=22–56%, subtitles around y=59–66%, keep essential text left of the right-side action rail (about x=88% onward), and reserve roughly y=86% onward for account and caption UI. These are estimates from a screenshot, not platform specifications; adapt them to the target platform preview.
- Verify the complete frame in the target platform preview; a clean export frame alone does not prove that platform UI will not cover content.

## Preview and final QA

1. Render a complete 720p preview.
2. Inspect each cut in a ±1.5s window for jumps, flashes, pops, sync, subtitle visibility, and overlay alignment; inspect first, last, and representative middle frames.
3. Run a full decode and record duration, dimensions, video/audio streams, colour consistency, subtitle safe area, and mix.
4. Self-fix only from evidence, at most three passes; then stop and report unresolved issues.
5. After explicit preview approval, render and independently inspect the 1080×1920 final. Never reuse preview evidence as final-file evidence.
