# Update Plan

Draft — captures what we discuss before work begins. Nothing is implemented until the user explicitly says "start work."

---

## Direction (confirmed)

- **Homepage**: Polished listicle at `/` (the listicle IS the homepage)
- **Canonical URL**: `/` only — `/best-automatic-rolling-machines` slug is dropped entirely
- **Site name**: "Joint Roller Reviews" (final)
- **Deploy target**: Not decided — default static build, host-agnostic
- **Last updated date**: Not displayed on the site
- **Content sourcing**: Hybrid — Claude drafts with research/citations, user verifies before locking
- **Visual direction**: Refine current style (charcoal/white/green, system-ui, data-first, no imagery)
- **Design tooling**: Use the `frontend-design` skill (frontend-design plugin) for all design/UI work — components, layouts, refinements. Constrained to the existing visual direction (no creative reimagining of the palette or aesthetic; the skill is used for execution quality, not direction).
- **Scope**: Just what's in SPEC.md — no about page, newsletter, or glossary

---

## 1. Homepage Refinements

Keep `/` as the canonical listicle. Improve fit and finish without changing the structure.

**Hero**
- Tighten the editorial intro to 3–4 sentences (currently close, will tighten further per SPEC voice)
- Larger headline, refined lead paragraph treatment
- No "last updated" timestamp (per confirmed direction)

**Quick comparison table**
- Add subtle row separators, better column widths
- Sticky header on scroll
- Mobile: keep horizontal scroll, but pin the machine-name column

**Machine cards (ranked writeups)**
- Expand each to ~400–600 words per SPEC (currently shorter)
- Bigger score number, cleaner rank treatment
- Add weighted-score reasoning callout (one sentence: *why* this score)
- Tighter pros/cons typography

**Buyer's guide summary** *(currently missing — SPEC calls for ~500 words inline)*
- Add a full summary section before the CTA, not just a teaser card
- Links to the full buyer's guide page

**Footer**
- More useful: methodology link, disclosure statement, update cadence

---

## 2. Cleanup

Delete the 8 example/placeholder machine `.md` files:
- `rollpros-blackbird.md`
- `stm-canna-rocketbox-pro.md`
- `greenbroz-holy-roller.md`
- `hefestus-aurax.md`
- `preroll-er-200.md`
- `stm-canna-rocketbox-2.md`
- `futurola-knockbox-300.md`
- `stm-canna-rollcraft-mrb.md`

Keep the schema (`src/content.config.ts`) and directory structure. Files will be re-created with real, researched content.

---

## 3. Complete the Site

### Pages to build

| Page | URL | Source | Length |
|------|-----|--------|--------|
| Homepage / Listicle | `/` | Built from collection + inline copy | ~6,000 words total |
| Buyer's Guide | `/how-to-choose-a-pre-roll-machine` | New page content | ~2,000–3,000 words |
| Methodology | `/methodology` | New page content | ~1,000–1,500 words |
| RollPros Blackbird review | `/reviews/rollpros-blackbird` | Deep-dive (top 5) | ~1,500–2,500 words |
| STM RocketBox Pro review | `/reviews/stm-canna-rocketbox-pro` | Deep-dive (top 5) | ~1,500–2,500 words |
| GreenBroz Holy Roller review | `/reviews/greenbroz-holy-roller` | Deep-dive (top 5) | ~1,500–2,500 words |
| Hefestus AuraX review | `/reviews/hefestus-aurax` | Deep-dive (top 5) | ~1,500–2,500 words |
| PreRoll-Er 200 review | `/reviews/preroll-er-200` | Deep-dive (top 5) | ~1,500–2,500 words |

Lower-tier 3 machines (RocketBox 2.0, Knockbox 300, RollCraft MRB) covered in the listicle only — no dedicated review page per SPEC.

### Content research workflow (hybrid)

For each of the 8 machines:

1. **Phase 1 — Manufacturer specs** (Claude fetches)
   - Official site for each manufacturer: specs, pricing, marketing claims
   - Flag claims that can't be independently verified

2. **Phase 2 — Industry publications** (Claude fetches)
   - MJBizDaily, mg Magazine, Cannabis & Tech Today
   - Third-party throughput claims, operator case studies, market context

3. **Phase 3 — Community forums** (Claude fetches)
   - Future4200 (CannaBusiness), THCFarmer, Reddit r/weedbiz + r/cannabusiness
   - Operator pain points, reliability reports

4. **Phase 4 — outreach** — skipped per SPEC

### Editorial workflow (per AGENTS.md)

For each machine, I'll surface:
- Research findings with sources
- Proposed scores per criterion (with reasoning per metric)
- Proposed overall ranking
- Proposed category badge

User reviews/approves before any score, ranking, or badge is locked into the content.

### Design System Specification

**Aesthetic direction: Editorial Industrial.** Bloomberg Businessweek meets Consumer Reports buying guide, calibrated for cannabis B2B procurement. Authoritative, dense with data, but designed for sustained reading. Tables and numbers should feel like trustworthy specifications, not marketing claims. The reader is making a $20K–$300K capital decision — every element reinforces credibility through restraint.

Reference points: The Information (editorial restraint, B2B trust), Bloomberg Businessweek (data density + polish), Wirecutter (procurement UX), Marker/Stratechery (thoughtful editorial structure).

---

#### Type system

Font stacks — all system fonts, no custom web fonts loaded:

```css
--font-display: 'Iowan Old Style', 'Palatino Linotype', Palatino,
                'Book Antiqua', Georgia, ui-serif, serif;
--font-body:    system-ui, -apple-system, BlinkMacSystemFont,
                'Segoe UI', Helvetica, Arial, sans-serif;
--font-mono:    ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
```

The dual-font system (system serif for display, system sans for body/UI) is the single biggest editorial signal. No custom fonts loaded over the network — Iowan, Palatino, Georgia, and `ui-serif` all ship with the OS.

Type scale (modular 1.25 ratio, base 16px):

| Token | Size | Use |
|-------|------|-----|
| `--text-xs` | 0.75rem / 12px | Eyebrows, labels, metadata, badges |
| `--text-sm` | 0.875rem / 14px | Table cells, captions, footer |
| `--text-base` | 1rem / 16px | Body, UI text |
| `--text-lg` | 1.125rem / 18px | Lead paragraphs, callouts |
| `--text-xl` | 1.5rem / 24px | h3 |
| `--text-2xl` | 1.875rem / 30px | h2, section heads |
| `--text-3xl` | 2.5rem / 40px | h1 (review pages), overall-score number |
| `--text-4xl` | 3.25rem / 52px | Hero headline |

Line heights: display 1.1 · headings 1.25 · body 1.65 · tables 1.4.
Tracking: display −0.02em · body 0 · eyebrows uppercase +0.08em.

Numerals everywhere data appears use `font-variant-numeric: tabular-nums; font-feature-settings: "tnum", "lnum"`. This is the most important "polish" detail in the system — every table, score, price, and throughput figure aligns vertically.

---

#### Color tokens

Neutrals (charcoal scale):

```
--ink-900: #0a0f1e   (deepest text, page-title ink)
--ink-800: #0f172a   (primary dark surface — hero, footer)
--ink-700: #1e293b   (secondary dark surface)
--ink-600: #334155   (deemphasized text on dark)
--ink-500: #64748b   (meta text on light)
--ink-400: #94a3b8   (placeholder, big quiet numbers)
--ink-300: #cbd5e1   (subtle dividers on dark)
--ink-200: #e2e8f0   (dividers, borders on light)
--ink-100: #f1f5f9   (subtle surfaces, score-bar tracks)
--ink-50:  #f8fafc   (table headers, footer light surface)
--paper:   #ffffff   (primary background)
```

Accent (used semantically, never decoratively):

```
--accent-700: #14532d   (hover/active states)
--accent-600: #166534   (links, scores, primary actions)
--accent-500: #16a34a   (score-bar fills, success markers)
--accent-100: #dcfce7   (best-fit callout, quality badges)
--accent-50:  #f0fdf4   (best-fit background)
```

Functional:

```
--warn-700: #9a3412   --warn-100: #ffedd5   (caveats, entry-level badge)
--neg-700:  #b91c1c   --neg-100:  #fee2e2   (cons, negative metrics)
```

Category badge palette (formalized from existing):

```
volume:  bg #dbeafe / fg #1e40af
quality: bg #dcfce7 / fg #166534
value:   bg #fef9c3 / fg #854d0e
flex:    bg #f3e8ff / fg #6b21a8
entry:   bg #ffedd5 / fg #9a3412
craft:   bg #fce7f3 / fg #9d174d
```

---

#### Spacing scale (8px base grid)

```
--space-1:  0.25rem  (4px)
--space-2:  0.5rem   (8px)
--space-3:  0.75rem  (12px)
--space-4:  1rem     (16px)
--space-5:  1.5rem   (24px)
--space-6:  2rem     (32px)
--space-7:  3rem     (48px)
--space-8:  4rem     (64px)
--space-9:  6rem     (96px)
--space-10: 8rem     (128px)
```

Rhythm: major sections separated by `--space-8` desktop / `--space-7` mobile · subsections `--space-6` · component internal padding `--space-5` · tight stacks `--space-3`.

---

#### Layout

Containers:

```
--container-text:    720px   (review prose, buyer's guide, methodology)
--container-default: 1100px  (listicle, comparison tables)
--container-wide:    1280px  (only for full-bleed tables if needed)
```

Page gutters: `--space-5` (24px) mobile, `--space-7` (48px) desktop.

Grid: single-column flow throughout. Listicle uses stacked machine cards in `--container-default`. Reviews use `--container-text` for prose, allow tables/breakdowns to break out wider. No multi-column body text — this is a long-form editorial site, not a dashboard.

Vertical rhythm enforced via section spacing tokens, not arbitrary margins.

---

#### Component direction

**Hero (homepage)**
- Surface: `--ink-800`, full-bleed
- Eyebrow above headline: "INDEPENDENT EDITORIAL · 8 MACHINES EVALUATED" — `--text-xs`, uppercase, `--accent-500`, tracking +0.08em, semibold
- Headline: `--font-display`, `--text-4xl`, white, line-height 1.1, tracking −0.02em
- Lead: `--text-lg`, `--ink-300`, max-width 60ch, line-height 1.55
- Vertical padding: `--space-9` top / `--space-8` bottom
- Bottom edge: 2px `--accent-600` hairline — gives a "published edition" demarcation
- Remove the current "8 machines · 7 criteria · Updated May 2026" meta row — redundant with eyebrow, and "Updated" is dropped per direction

**Quick comparison table**
- Header: `--ink-50` bg, `--text-xs` uppercase, tracking +0.08em, `--ink-500`, semibold
- Rows: `--space-3` vertical padding, `--text-sm` body
- Machine name column: `--font-display`, `--text-base`, `--ink-900` (the name reads like a document title)
- Numeric columns: tabular-nums, right-aligned
- Score column: `--font-display`, `--text-base`, semibold, `--ink-900`
- Rank column: `--font-display`, `--text-base`, `--ink-400`, tabular
- Hover: `--ink-50` row background, no other effect
- Horizontal hairlines only (`--ink-200`), no vertical rules
- Mobile: sticky first column (machine name), horizontal scroll for the rest

**Machine card (listicle entry)**
- Surface: white, 1px `--ink-200` border, 8px radius (subtle — not pillowy)
- Internal padding `--space-5`
- Rank: `--font-display`, `--text-3xl`, `--ink-300` (large but quiet — reads like a page number, not a trophy)
- Title: `--font-display`, `--text-xl`, `--ink-900`, tracking −0.01em
- Score block right-aligned: `--font-display`, `--text-3xl`, `--accent-600`, tabular-nums; "/10" denomination in `--ink-400` `--text-base`
- Differentiator paragraph: italic, `--font-display`, `--text-lg`, `--ink-700`, line-height 1.5 — treated like a pull quote, gives the card editorial weight
- Pros/cons: two columns, `--text-sm`, custom +/− glyphs (existing), tighter typography
- "Best for" footer: separated by 1px `--ink-200` hairline, `--ink-50` background extension, `--text-sm`
- Hover: border `--ink-200` → `--ink-400` transition, 150ms. No lift, no shadow.

**Score breakdown**
- Header bar: `--ink-800` surface
- Overall score: `--font-display`, `--text-4xl`, white, tabular-nums; "/10" in `--ink-400`
- Per-criterion bars: 6px tall, `--ink-100` track, `--accent-500` fill (no gradient — flat green)
- New element: weighted-contribution label per criterion — `"Consistency · 25% × 9.0 = 2.25 of 10.0"` — `--text-xs`, `--ink-500`, monospace numerals. Making the math visible IS the design choice; it builds trust.
- Bars fill on initial render with 600ms ease-out + staggered animation-delay (50ms per criterion)

**Category badge**
- Pill, no shadow, no border
- Padding `--space-1` × `--space-3`
- `--text-xs`, uppercase, tracking +0.06em, semibold
- Color pairs from token table above

**Best-fit callout (review pages)**
- Surface `--accent-50`, 1px border `--accent-100`, 8px radius
- Heading: eyebrow style — `--text-xs`, uppercase, tracking +0.07em, `--accent-700`, semibold
- Body: `--text-base`, `--ink-800`

**Competitor callout (review pages)**
- Same structure as best-fit but `--ink-50` surface and `--ink-200` border

**Navigation header**
- Sticky, `--ink-800`, 56px height
- Site name: `--font-display`, `--text-base`, white — adds editorial weight to the brand
- Nav links: `--text-sm`, `--ink-400`, hover → white
- Subtle 1px `--ink-700` bottom border (creates depth against hero)

**Footer**
- Surface: `--ink-800` (bookends the hero — same dark frame top and bottom)
- Top edge: 1px `--accent-600` hairline
- Three-column desktop layout: editorial info / methodology link / disclosure statement
- `--text-sm`, `--ink-400`
- Links: `--ink-200` → white on hover

---

#### Motion philosophy

Restraint, not absence. The audience is B2B procurement, not entertainment.

**Allowed:**
- Color transitions on hover (150ms ease)
- Score-bar fills on initial render (600ms ease-out, staggered delays)
- Smooth-scroll on anchor links

**Not allowed:**
- Scroll-triggered animations, parallax, fade-in-on-scroll
- Scale/lift hover effects on cards
- Card flip/expand animations
- Loading skeletons (static site, no async UI)
- Cursor effects, hero animations, decorative motion

---

#### Distinguishing details (the "polish tells")

These are the small choices that separate a refined editorial site from a generic SaaS landing:

1. **Tabular numerals everywhere data appears** — the single biggest tell. Numbers in tables, scores, prices, throughput figures all align vertically column-to-column and row-to-row.
2. **Display serif for headlines and big score numbers** — the dual-font system signals editorial seriousness. Score numbers in serif feel like a verdict, not a stat.
3. **Eyebrow tags** above the hero and major sections — accent green, uppercase, tracking — magazine/journal voice.
4. **Accent hairlines at semantic boundaries** — 1–2px `--accent-600` under hero and atop footer. Never wider.
5. **No box shadows** — flat borders only. Shadows would feel SaaS, not editorial.
6. **Pull-quote treatment** for the differentiator sentence in machine cards — italic serif, calls out the machine's defining claim like a magazine block quote.
7. **Weighted-contribution math** visible in score breakdowns — exposing the calculation is the trust signal.
8. **Bookended dark sections** — hero and footer both `--ink-800` create a "framed publication" feel. Content lives in the white middle.

---

#### Explicit anti-patterns

What we are NOT doing:

- No drop shadows on cards or buttons
- No gradient backgrounds (single colors only; the one exception is the existing score-bar gradient, which gets flattened to a solid accent)
- No imagery, photography, or icons in content
- No custom web fonts loaded over the network
- No purple-on-white, no gradient mesh, no glassmorphism, no neumorphism
- No animated scroll entrances, parallax, or hero motion
- No hover scale/lift on cards
- No dark-mode toggle (the design uses dark surfaces atmospherically, not as a theme switch)
- No emoji or icon system in body content
- No "as seen on" / press logo strips
- No social-proof testimonials with stock-photo avatars

---

#### Implementation tactics

- Tokens live in a single `:root` block in `BaseLayout.astro`'s `<style is:global>` — single source of truth
- Component styles consume tokens via `var(--token-name)` — no hard-coded values in components
- Responsive: mobile-first, with `@media (min-width: 768px)` for desktop adjustments
- Test typography at 320px (small mobile), 768px (tablet), 1100px (container width), 1440px (large desktop)
- All custom layout/spacing decisions documented inline only where non-obvious

---

#### Out of scope (deferred to a later iteration if ever needed)

- Print stylesheet
- RTL language support
- Internationalization
- Animation refinements beyond the basics above
- Custom illustrations or data visualization
- Logo/wordmark design (typeset wordmark in `--font-display` is sufficient)

---

## Build sequence (proposed)

1. Delete example `.md` files
2. Design refinements pass on existing components/layouts — **via `frontend-design` skill**, constrained to current visual direction
3. Phase 1 research for all 8 machines → propose scores → **user approves**
4. Write listicle content (homepage) with approved data
5. Write the 5 deep-dive review pages
6. Write buyer's guide
7. Write methodology
8. Final pass: internal linking, last-updated dates, polish

---

## SPEC.md updates needed

The SPEC currently lists `/best-automatic-rolling-machines` as the homepage slug. Since `/` is now canonical, that line in SPEC.md should be updated (will happen during implementation).

---

*Add discussion items here as we plan. Implementation begins only when user explicitly says "start work."*
