---
name: redesign-skill
description: Audits and upgrades existing websites/apps to premium quality. Identifies generic AI patterns, applies high-end design standards without breaking functionality. Works with existing stack.
command: /redesign
---

# REDESIGN SKILL — Upgrade Existing Projects

## Activation
- Command: `/redesign`
- Phrases: "upgrade this design", "audit this component", "make this look better", "fix the UI"

## Workflow (always in this order)
1. **Scan** — Read the code. Identify framework, styling method (Tailwind/CSS/etc.), current patterns
2. **Diagnose** — Run the audit below. List every generic pattern and weak point
3. **Fix** — Apply targeted upgrades with existing stack. Do NOT rewrite from scratch

## Rules
- Work with existing tech stack — do NOT migrate frameworks or styling libraries
- Before importing any new library, check `package.json` first
- If Tailwind: check v3 vs v4 before touching config
- Keep changes focused and reviewable — targeted improvements over big rewrites
- Test after every change

## Fix Priority (max visual impact, min risk)
1. Font swap — biggest instant improvement, lowest risk
2. Color palette cleanup — remove clashing/oversaturated colors
3. Hover and active states — makes interface feel alive
4. Layout and spacing — proper grid, max-width, consistent padding
5. Replace generic components — swap cliché patterns for modern alternatives
6. Add loading, empty, error states — makes it feel finished
7. Polish typography scale — the premium final touch

## Common Diagnoses

### Typography Problems
- Browser default fonts or Inter everywhere → replace with Geist, Outfit, Cabinet Grotesk, or Satoshi
- Headlines lack presence → increase size, tighten letter-spacing, reduce line-height
- Body text too wide → limit paragraph to ~65 chars, increase line-height
- Only Regular + Bold → introduce Medium (500) and SemiBold (600)
- Orphaned words → fix with `text-wrap: balance` or `text-wrap: pretty`

### Color Problems
- Oversaturated accents → keep saturation < 80%
- Purple/blue AI gradient → replace with neutral base + single considered accent
- Generic box-shadow → tint shadows to match background hue
- Flat design zero texture → add subtle noise/grain to backgrounds

### Layout Problems
- Everything centered and symmetrical → break with offset margins, left-aligned headers
- Three equal card columns → replace with 2-col zig-zag, asymmetric grid, or masonry
- `height: 100vh` → replace with `min-height: 100dvh`
- No max-width container → add constraint (~1200-1440px)
- Missing whitespace → double the spacing, let it breathe

### Interactivity Missing
- No hover states on buttons → add bg shift, slight scale, or translate
- No active/pressed feedback → `scale(0.98)` or `translateY(1px)`
- Instant transitions → add 200-300ms smooth transitions
- No loading states → skeleton loaders, not spinners
- No empty states → design "getting started" view
- Animations using top/left/width/height → switch to `transform` and `opacity`

### Content Problems
- Generic names (John Doe) → diverse, realistic names
- AI copywriting clichés → "Elevate", "Seamless", "Unleash", "Next-Gen" are BANNED
- Lorem Ipsum → real draft copy
- Title Case On Every Header → sentence case

### Strategic Omissions (AI typically forgets)
- No legal links → add privacy policy and terms of service
- No "back" navigation → every page needs a way back
- No custom 404 page → design helpful branded experience
- No form validation → add client-side validation
- No `skip to content` link → add hidden skip-link
- Missing meta tags → title, description, og:image, social sharing
