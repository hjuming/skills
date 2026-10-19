# Credential and consent safety

- Never ask for an API key in chat, a command argument, a tracked file, commit, shell history, or log.
- Accept `ELEVENLABS_API_KEY` from the process environment, or a user-created local `.env` only after Git ignore status is verified.
- Before touching a local secret file, require a regular non-symlink file. Verify mode `600` using the platform-appropriate `stat` command without reading content.
- A safe readiness report may say only `environment variable present` or `protected local file present`; do not disclose value, length, prefix, or account details.
- Setup verification must not call transcription, inspect quota, or upload a sample.
- Before the first later upload, name the exact media file, identify ElevenLabs Scribe v2 as the destination and transcription purpose, mention possible quota/cost, and wait for explicit consent.
- If cloud upload is declined, offer local Whisper as a lower-confidence timing fallback with extra edit-boundary playback QA; never claim equivalent precision.
