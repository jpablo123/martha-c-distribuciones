---
name: taste-skill
description: Premium frontend UI/UX design system for Next.js. Generates modern, high-end interfaces. Bans generic AI aesthetics (purple gradients, centered heroes, Inter everywhere).
command: /taste
---

# TASTE SKILL — Premium Frontend Design System

## Activation
- Command: `/taste`
- Phrases: "make it premium", "high-end design", "modern UI", "no generic design"

## Core Config (override per request)
- DESIGN_VARIANCE: 8 — asymmetric, experimental layouts
- MOTION_INTENSITY: 6 — sophisticated animations
- VISUAL_DENSITY: 4 — breathing room, not cluttered

## Mandatory Rules

### Before any component
1. Check `package.json` before importing ANY 3rd party library
2. Default to Server Components — isolate interactivity in `'use client'` leaf nodes
3. Tailwind CSS covers 90% of styling (check v3 vs v4 before touching config)

### Typography
- Serif fonts: BANNED for Dashboard/App UIs
- Inter/Roboto everywhere: BANNED — use Geist, Outfit, Cabinet Grotesk, Satoshi
- Only Regular + Bold: ADD Medium (500) and SemiBold (600)
- Orphaned words: fix with `text-wrap: balance`

### Colors
- AI Purple/Blue gradient aesthetic: STRICTLY BANNED
- Pure #000000 background: use #0a0a0a or #121212
- Oversaturated accents: keep saturation < 80%
- More than one accent color: pick one, remove the rest
- Mixing warm/cool grays: stick to one gray family

### Layout
- Centered Hero/H1 when DESIGN_VARIANCE > 4: BANNED
- Three equal card columns as feature row: BANNED — use 2-col zig-zag, asymmetric grid, or horizontal scroll
- `height: 100vh`: replace with `min-height: 100dvh`
- Complex flexbox % math: replace with CSS Grid
- Dashboard always has left sidebar: try top nav, floating command menu, or collapsible panel

### Content
- Generic names (John Doe, Jane Smith): BANNED
- Fake round numbers (99.99%, $100.00): use organic messy data
- AI copywriting clichés: NEVER use "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Delve", "Tapestry"
- Lorem Ipsum: write real draft copy
- Title Case On Every Header: use sentence case

### Iconography
- Lucide/Feather icons exclusively: BANNED — use Phosphor, Heroicons, or custom set
- Inconsistent stroke widths: standardize to one weight

## Animation Patterns (Framer Motion)
- Spring physics: `stiffness: 100, damping: 20`
- Bento micro-interactions: perpetual, memoized components
- Animate ONLY `transform` and `opacity` — never layout-triggering props
- Patterns: magnetic buttons, glassmorphism with inner refraction, `layoutId` transitions, staggered list reveals

## Component Patterns
- Generic card (border + shadow + white bg): remove border OR use only bg color OR only spacing — not all three
- Pill-shaped badges: try square badges, flags, or plain text labels
- Accordion FAQ: use side-by-side list or searchable help
- 3-card carousel testimonials: replace with masonry wall
- Modals for everything: use inline editing, slide-overs, or expandable sections

## Code Quality
- Div soup: use semantic HTML (`nav`, `main`, `article`, `aside`, `section`)
- Arbitrary z-index (9999): establish a clean z-index scale
- Missing alt text: never leave `alt=""` on meaningful images
- Commented-out dead code: delete it
- Inline styles mixed with classes: move all to styling system
