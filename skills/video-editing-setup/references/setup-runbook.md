# Setup runbook

Use only after inspection and explicit approval. Re-check upstream installation documentation at execution time.

## Required toolchain

- `git`, Python, `uv`, `ffmpeg`, and `ffprobe`
- complete official `video-use` checkout from `https://github.com/browser-use/video-use.git`
- an approved transcription path; ElevenLabs Scribe v2 is the documented word-level cloud path
- optional HyperFrames from `https://github.com/heygen-com/hyperframes.git` only for approved HTML/CSS/GSAP animation

## Repository preflight

For every existing checkout, use Git commands—not a `.git` directory test—so linked worktrees work. Record:

```sh
git -C "$repo" rev-parse --is-inside-work-tree
git -C "$repo" rev-parse --verify HEAD
git -C "$repo" branch --show-current
git -C "$repo" remote get-url origin
git -C "$repo" status --short
```

Accept only the exact official HTTPS origin and a clean status. An existing non-worktree path, missing or mismatched origin, invalid commit, or dirty status is a hard stop. Never rewrite the remote, pull, reset, reclone, install dependencies, or register a Skill around that stop.

## Mutation gate

Before action, show a concrete approval list covering any:

- repository clone or update
- package/runtime installation
- large or LFS download
- symlink or Skills registration
- credential-file creation or permission change

Repeat repository and runtime preflight immediately before each approved mutation because state may drift while waiting.

## Optional HyperFrames

Only inspect or install it when explicitly requested. Require Node.js 22+ and the current upstream package manager/lockfile. Do not bulk-install every upstream Skill without explicit approval; install only the documented core set. If unrequested, report `HyperFrames 未要求` rather than failed.

## No-cost verification

Verify repository identity and cleanliness, helper availability, runtime paths/versions, exact Skill registration target, and safe credential-source presence. Do not upload or transcribe media, call a paid endpoint, create `edit/`, or render video during setup.
