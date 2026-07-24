# Output contract

Keep all artifacts under the source-adjacent `edit/` directory:

```text
edit/
├── project.md
├── transcripts/<source>.json
├── corrected-transcript.md
├── edl.json
├── master.srt
├── clips/
├── animations/slot_<id>/
├── qa/
├── preview.mp4
└── final.mp4
```

`project.md` records source identifiers, the approved strategy, decisions, questions, and render/QA passes. `edl.json` is the machine-readable edit record. Keep the cached verbatim transcript distinct from human corrections.

QA evidence must cover every cut boundary, representative frames, subtitle safety, streams, and full decode. Preview QA precedes preview approval. Final-file QA occurs only after `final.mp4` exists.

Outwardly present one formal final. If the final is absent or unverified, report the actual state and next required evidence instead of substituting a plan or preview.
