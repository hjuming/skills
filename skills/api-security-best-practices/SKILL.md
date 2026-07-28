---
name: api-security-best-practices
description: "Implement secure API design patterns including authentication, authorization, input validation, rate limiting, and protection against common API vulnerabilities. Use at design time, when deciding the security contract of an endpoint or service. For writing or reviewing the actual server code use backend-security-coder; for client-side code use frontend-security-coder; for auditing an existing system or its dependencies use vulnerability-scanner."
---

# API Security Best Practices

Use this skill when designing, implementing, reviewing, or hardening APIs across REST, GraphQL, WebSocket, serverless functions, and webhook endpoints.

## Load Policy

Default to this compact workflow. Load `references/full-guide.md` only when you need full code examples for JWT auth, SQL injection prevention, Express rate limiting, Helmet headers, or the long OWASP checklist.

## Security Workflow

1. Identify the API boundary: public, authenticated, internal, webhook, admin, batch, or machine-to-machine.
2. Map data sensitivity: public content, user data, customer data, payment data, medical data, secrets.
3. Verify authentication: token/session validity, issuer, audience, expiry, rotation, replay resistance.
4. Verify authorization: object ownership, role/permission checks, tenant boundary, admin-only actions.
5. Validate input with schemas or typed parsers; reject unknown or malformed fields.
6. Protect availability with rate limits, timeouts, pagination limits, body-size limits, and idempotency.
7. Protect output: avoid secret leakage, verbose errors, stack traces, sensitive fields, cache mistakes.
8. Add logging and monitoring without recording secrets or raw sensitive payloads.

## Must-Have Checks

- Authentication cannot be bypassed by missing headers, malformed tokens, preview routes, or fallback code paths.
- Authorization is enforced server-side for every object read/write.
- Webhooks verify signatures before parsing trust-critical fields.
- SQL uses parameterized queries or safe query builders.
- CORS is explicit; do not use broad wildcard credentials.
- Secrets stay in environment variables or secret managers, never client bundles or docs.
- Error responses are useful but not revealing.
- Rate limit keys are chosen carefully: user ID when authenticated, IP/device when anonymous, webhook source when applicable.

## Common High-Risk Patterns

- Trusting `userId`, `role`, `price`, `tenantId`, or `isAdmin` from the client.
- Service-role keys used in browser code.
- Admin API routes protected only by hidden UI.
- Missing object-level authorization on `GET /:id`, `PATCH /:id`, `DELETE /:id`.
- Webhook handlers that accept unsigned callbacks.
- Logging full request bodies containing tokens, addresses, payment data, or health data.

## Implementation Guidance

- Prefer centralized auth helpers, but verify each route has explicit authorization intent.
- Put validation near the boundary and keep business logic typed after validation.
- For mutations, use idempotency keys or unique constraints where retries can duplicate work.
- For file uploads, validate type, size, destination, and access policy.
- For payment and card workflows, also apply `pci-compliance`.

## Output Format

For reviews, lead with findings ordered by severity:

```text
[Severity] File/route: issue
Impact:
Fix:
Verification:
```

For implementation tasks, provide the smallest secure patch and the verification command or manual test.
