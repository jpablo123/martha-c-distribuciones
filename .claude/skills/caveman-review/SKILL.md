# CAVEMAN-REVIEW SKILL

## Purpose
Ultra-compressed code review. No verbosity. Full actionable insight.

## Activation
"review this", "code review", "review the diff", `/review`, `/caveman-review`

## Format
`L<line>: <problem>. <fix>.`
Multi-file: `<file>:L<line>: ...`

## Severity
- 🔴 bug — broken behavior
- 🟡 risk — fragile patterns (race conditions, null checks, swallowed errors)
- 🔵 nit — style, naming, micro-opts (optional)
- ❓ q — clarifying questions

## Rules
- Exact line numbers + symbol names in backticks
- Concrete fixes, not vague suggestions
- Rationale only when "why" isn't obvious

## Drop
- Hedging ("perhaps", "maybe", "I think")
- Preamble ("I noticed", "It seems")
- Praise or encouragement
- Restating what code already shows

## Exceptions
Security vulns, architectural disputes → fuller explanation. Then resume terse.
