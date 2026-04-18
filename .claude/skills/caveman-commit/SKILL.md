# CAVEMAN-COMMIT SKILL

## Purpose
Terse conventional commit messages. Reason over description.

## Activation
"write a commit", "commit message", "generate commit", `/commit`, `/caveman-commit`

## Format
`<type>(<scope>): <summary>`

Types: feat, fix, refactor, perf, docs, test, chore, build, ci, style, revert

## Rules
- Imperative mood: "add", "fix", "remove"
- ≤50 chars target, 72 max
- No trailing period
- No "This commit does", no first-person, no emoji, no "generated with Claude"

## Body
Only for: breaking changes, security fixes, data migrations, issue refs. Otherwise omit.

## Philosophy
Diff shows WHAT. Commit explains WHY.

## Output
Code block ready to paste. No git commands executed.
