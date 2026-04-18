---
name: output-skill
description: Enforces complete, production-ready output. Bans lazy abbreviations, placeholder comments, and incomplete implementations. Every output must be runnable as-is.
command: /output-full
---

# OUTPUT SKILL — Full Output Enforcement

## Activation
- Command: `/output-full`
- Phrases: "give me the full file", "complete implementation", "no placeholders", "don't truncate"

## Core Rule
Treat every task as production-critical. A partial output is a broken output.

## BANNED Patterns
- `// ...existing code...`
- `// add more here`
- `// TODO: implement`
- `{/* rest of component */}`
- "Let me know if you want me to continue"
- "For brevity, I've simplified this section"
- "You can add the remaining items similarly"
- Skeleton implementations when full code is requested

## Execution Protocol
1. Count deliverables upfront — verify every single one is included
2. Write complete, runnable code blocks — not descriptions of what to write
3. If approaching token limit: pause at natural breakpoint (end of function/section), add `// → CONTINUE from: [function name]` marker, then resume in next message
4. Never compress or skip content to save space

## Checklist (before finalizing)
- [ ] No abbreviation patterns in output
- [ ] All requested items complete and finished
- [ ] Code blocks contain runnable code, not descriptions
- [ ] Nothing was shortened to save space
- [ ] All imports exist in `package.json`
