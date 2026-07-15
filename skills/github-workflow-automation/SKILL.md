---
name: github-workflow-automation
description: "Automate GitHub workflows with AI assistance. Includes PR reviews, issue triage, CI/CD integration, and Git operations. Use when automating GitHub workflows, setting up PR review automation, creating GitHub Actions, or triaging issues."
---

# GitHub Workflow Automation

Use this skill for GitHub Actions, PR review automation, issue triage, CI/CD glue, branch maintenance, release checks, and AI-assisted repo workflows.

## Load Policy

Default to this compact workflow. Load `references/full-guide.md` only when you need complete YAML examples for PR review, issue triage, smart test selection, deployment validation, rollback, auto-rebase, branch cleanup, or mention bots.

## First Questions To Answer Internally

1. Is this a repo policy, CI workflow, PR automation, issue automation, release/deploy workflow, or local git task?
2. What event should trigger it: `pull_request`, `push`, `workflow_dispatch`, `schedule`, `issues`, `issue_comment`, or external webhook?
3. What permissions are actually needed?
4. What secrets are required, and can the task run without exposing them to forks?
5. What failure mode should block merge or only report?

## Design Rules

- Use least-privilege `permissions`.
- Pin third-party actions by SHA when risk is high; at minimum use trusted major versions.
- Avoid running privileged secrets on untrusted fork PR code.
- Keep generated comments concise and idempotent; update existing bot comments when possible.
- Separate detection from mutation: analyze first, write labels/comments/deploy only after clear conditions.
- Make workflows manually runnable with `workflow_dispatch` when useful.
- Prefer small composable jobs over one giant workflow.

## Common Workflows

### PR Review Automation

- Trigger on `pull_request`.
- Check diff size and changed file types.
- Run tests/lint/typecheck before AI review if possible.
- Ask AI for actionable findings only; avoid generic praise.
- Never paste secrets, logs with tokens, or private customer data into AI prompts.

### Issue Triage

- Trigger on `issues.opened` or scheduled backlog pass.
- Classify type, priority, owner, reproduction quality, and missing information.
- Apply labels conservatively.
- Comment only when the next user action is clear.

### CI/CD

- Keep test selection explainable.
- Upload artifacts for diagnostics.
- Deployment jobs need environment protection and rollback path.
- Production deploys should verify health checks after release.

### Git Operations

- For rebase, cherry-pick, cleanup, and release branches, prefer non-interactive commands.
- Before mutating remote state, show the branch, commit range, and risk.
- Do not force-push unless explicitly requested and verified.

## Output Requirements

- Provide `.github/workflows/<name>.yml` content or a focused patch.
- Include required GitHub secrets and permissions, using placeholder names only.
- Include validation steps: `gh workflow run`, `gh run list`, `gh run view`, or local action linting if available.
- If using AI in workflow, document prompt scope, data exposure limits, and failure behavior.
