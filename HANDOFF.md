# Portfolio Handoff Document

**Project:** Mehul Nikumbh — Cybersecurity GRC Portfolio  
**Stack:** React 18, Vite 6, Tailwind CSS 3.4, Framer Motion 11, Lucide React  
**Date:** May 26, 2026  

---

## What This Project Is

A static single-page portfolio targeting GRC Analyst, IT Risk Analyst, Security Compliance Analyst, IT Auditor, Security Control Assessor, and Information Security Analyst roles. All content is centralized in `src/data/portfolioData.js`. No backend. Deploys to Vercel or GitHub Pages.

---

## Design Direction

The site was completely redesigned from a dark glassmorphism/cyber aesthetic to an **Editorial Sanctuary** — a light-mode, magazine-style layout. Three design skills drove every decision:

1. **Emil Kowalski (emil-design-eng):** Animation philosophy — custom easing curves, sub-300ms UI transitions, `scale(0.97)` on `:active`, `ease-out-expo` on enter/exit, stagger delays 30–80ms, `prefers-reduced-motion` collapse.
2. **Impeccable (pbakaus/impeccable DESIGN.md):** Warm paper palette, single magenta accent on ≤10% of screen, flat surfaces at rest, sharp squared CTAs (`border-radius: 0`, uppercase, letter-tracked), italic serif display, hairline borders only, no glassmorphism.
3. **tasteskill (Leonxlnx/taste-skill):** Anti-default discipline — no AI purple gradients, no centered hero over dark mesh, no identical card grids, no `Inter` as default, ANTI-CENTER BIAS, COLOR CONSISTENCY LOCK, SHAPE CONSISTENCY LOCK.

### What was explicitly removed

- Dark background (`bg-slate-950`) and all cyan/violet/emerald glow accents
- Glassmorphism cards with `backdrop-blur`, ring glow, gradient borders
- `border-l-2` colored accent stripes on cards (Impeccable's most explicit ban)
- Gradient text (`background-clip: text`)
- `recharts` pie chart in the hero "control panel" (~150KB removed from bundle)
- Rounded-rectangle buttons with drop shadows
- Multiple accent colors (cyan, emerald, violet, amber, rose)
- Emoji in section titles

### What replaced it

| Token | Value |
|---|---|
| Page background | `#f5f1eb` (Warm Ash Cream) |
| Card surface | `#fbfaf7` (Crisp Paper White) |
| Border / divider | `#e6e1d8` (Paper Mist) |
| Primary text | `#171717` (Deep Graphite) |
| Secondary text | `#3f3f3f` (Soft Charcoal) |
| Metadata text | `#8c8c8c` (Mid Ash) |
| Accent (one only) | `#c53666` (Editorial Magenta) |
| Accent hover | `#9b1d4a` (Magenta Deep) |
| Display font | Cormorant Garamond — italic, weight 300–500 |
| Body font | Instrument Sans — weight 400–600 |
| Mono / labels | Space Grotesk — weight 400–500 |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) |
| UI transition | 200ms |
| Layout transition | 300ms |
| Button shape | `border-radius: 0`, uppercase, `letter-spacing: 0.08em` |

---

## All 10 Overhaul Plan Tasks — Status

| # | Task | Status |
|---|---|---|
| 1 | Codebase audit — deduplicate metrics, strip emoji, fix GlassCard guard, move chartColors to data | Done |
| 2 | Mobile responsiveness — animated mobile menu, GRCLab overflow, contact/artifact wrapping | Done |
| 3 | Editorial redesign — complete visual overhaul per three design skills | Done |
| 4 | Content accuracy — rename chartData labels, improve FAQ answers, update RecruiterSnapshot copy | Done |
| 5 | Expand caseStudies[] — Watchtower entry, full Bastion/Patchwork/AccessGuard with 7 sections each | Done |
| 6 | SEO — author meta, canonical, robots, theme-color, expanded JSON-LD knowsAbout | Done |
| 7 | Accessibility — aria-controls on accordions, aria-labels on risk matrix cells, ESC-to-close menus | Done |
| 8 | Performance — static riskMatrix literal, remove repaint-heavy transitions, no inline arrays | Done |
| 9 | Artifact cards — description/fileType fields in data, file-type badge, placeholder indicator | Done |
| 10 | Final QA — em-dash audit, build verified, vite base path confirmed, README updated | Done |

---

## File Map

### Changed or rewritten

| File | What changed |
|---|---|
| `tailwind.config.js` | Custom palette (paper, graphite, charcoal, ash, magenta), font families, easing tokens, shadow tokens |
| `index.html` | Added Google Fonts (Cormorant Garamond + Instrument Sans + Space Grotesk), `theme-color`, canonical, author meta, expanded JSON-LD |
| `src/index.css` | Full rewrite — CSS custom properties in `:root`, all component classes as plain CSS (not `@apply`) using `var(--color-*)`, `prefers-reduced-motion` collapse |
| `src/App.jsx` | Replaced dark shell with `bg-paper text-graphite`, added hairline rule between hero and first section |
| `src/data/portfolioData.js` | Removed `chartData`, `chartColors`, `riskStyles`, `controlPanelMetrics`. Removed `accent` field from frameworks. Static `riskMatrix` literal. No em-dashes. |
| `package.json` | Removed `recharts` dependency |
| `vite.config.js` | Removed `charts` manualChunk (recharts gone) |
| `README.md` | Updated stack description to reflect editorial redesign, removed Recharts mention |

### Components — rewritten

Every component was rewritten from zero. No glassmorphism, no dark tokens.

| Component | Layout pattern used |
|---|---|
| `Navbar.jsx` | Fixed 62px header, `border-paper-mist`, magenta active state, `AnimatePresence` mobile drawer, ESC handler |
| `Hero.jsx` | Asymmetric two-column split — display-1 italic headline left, editorial sidebar (definition list) right |
| `Footer.jsx` | Two-column colophon with icon links |
| `RecruiterSnapshot.jsx` | 4-panel `gap-px bg-paper-mist` grid |
| `About.jsx` | Two-column — prose left, pillar list right |
| `ProblemsSolved.jsx` | 3-column numbered list with border-t accents |
| `GRCWorkflow.jsx` | 6-panel step grid with large italic numeral as decorative element |
| `Skills.jsx` | `divide-y` rows — label left, chip cloud right |
| `Experience.jsx` | `divide-y` list |
| `ExperienceCard.jsx` | Two-column — meta left, content right; bullets with thin magenta dash |
| `Metrics.jsx` | 4-panel `gap-px` grid, animated counters |
| `Projects.jsx` | 2-column `gap-px` grid |
| `ProjectCard.jsx` | Editorial card with metric dl grid, bullet list, action buttons |
| `CaseStudies.jsx` | Accordion with `AnimatePresence` height animation, `+` → rotates 45° |
| `GRCLab.jsx` | 4-panel grid — risk matrix, evidence checklist, access tests, remediation table |
| `FrameworkMapping.jsx` | `divide-y` definition list — name left, work description right |
| `Artifacts.jsx` | 3-column `gap-px` grid with file-type chip and placeholder indicator |
| `Education.jsx` | Two-column header + focus area chips |
| `Learning.jsx` | 2-column `gap-px` numbered list |
| `FAQ.jsx` | Accordion with same `AnimatePresence` pattern as CaseStudies |
| `Contact.jsx` | Two-column — link list left, contact card right |
| `SectionHeading.jsx` | Eyebrow + display-2 italic heading + optional lead paragraph |
| `Badge.jsx` | Wraps `.chip` or `.chip-accent` |
| `GlassCard.jsx` | Wraps `.editorial-card`, uses `motion` with `whileInView` stagger |
| `MetricCard.jsx` | Eyebrow label + animated display-2 number, flat at rest |

---

## Known Gotcha — Tailwind @apply with Custom Tokens

Tailwind v3 cannot resolve custom theme token names (e.g. `text-ash`, `bg-paper-white`, `text-charcoal`) inside `@apply` inside `@layer components`. The build fails with "class does not exist."

**Rule for this project:** Never use `@apply` with a custom theme token name inside `@layer components`. Use the CSS custom property directly:

```css
/* Wrong — Tailwind can't resolve 'text-ash' here */
.eyebrow {
  @apply text-ash;
}

/* Correct */
.eyebrow {
  color: var(--color-ash);
}
```

Standard built-in Tailwind utilities (`@apply mx-auto max-w-6xl px-6`) are fine in `@apply`. Arbitrary values (`@apply text-[0.7rem] tracking-[0.16em]`) also work. Only custom theme extension names break.

---

## CSS Custom Properties (defined in `:root` in `src/index.css`)

```css
--color-paper:           #f5f1eb
--color-paper-mist:      #e6e1d8
--color-paper-white:     #fbfaf7
--color-graphite:        #171717
--color-charcoal:        #3f3f3f
--color-ash:             #8c8c8c
--color-magenta:         #c53666
--color-magenta-deep:    #9b1d4a
--color-magenta-whisper: rgba(197, 54, 102, 0.12)
--color-magenta-veil:    rgba(197, 54, 102, 0.22)
--ease-out-expo:         cubic-bezier(0.16, 1, 0.3, 1)
--ease-out-quint:        cubic-bezier(0.22, 1, 0.36, 1)
```

These are also mirrored in `tailwind.config.js` for use in JSX class strings. Both must stay in sync if palette changes.

---

## Component Class Reference

These classes are defined in `src/index.css` and used throughout JSX:

| Class | Purpose |
|---|---|
| `.section-shell` | Standard section wrapper — max-w-6xl, horizontal/vertical padding |
| `.eyebrow` | Small uppercase mono label above headings |
| `.display-1` | Hero headline — italic Cormorant, clamp(2.75rem → 5.25rem) |
| `.display-2` | Section headings — Cormorant, clamp(1.85rem → 2.75rem) |
| `.display-3` | Sub-headings / card titles — Cormorant, clamp(1.25rem → 1.6rem) |
| `.lead` | Lead paragraph — Instrument Sans, 1.0625rem, 1.65 line-height |
| `.btn-primary` | Graphite background, paper-white text, magenta on hover, sharp corners |
| `.btn-ghost` | Border-only button, magenta border/text on hover |
| `.icon-link` | Square icon button, magenta text on hover |
| `.chip` | Small monospaced tag — paper-white background |
| `.chip-accent` | Small monospaced tag — magenta-whisper background |
| `.editorial-card` | Flat card with paper-mist border, lifts on hover when `.editorial-card--hover` is also applied |
| `.rule` | 1px horizontal divider in paper-mist |

---

## Content Updates

All copy lives in `src/data/portfolioData.js`. Exported constants and their consumers:

| Export | Used by |
|---|---|
| `profile` | Navbar, Hero, Contact, Footer |
| `navLinks` | Navbar |
| `heroBadges` | Hero |
| `recruiterSnapshot` | RecruiterSnapshot |
| `aboutCards` | About |
| `problems` | ProblemsSolved |
| `workflowSteps` | GRCWorkflow |
| `skillGroups` | Skills |
| `experience` | Experience / ExperienceCard |
| `metrics` | Metrics / MetricCard |
| `projects` | Projects / ProjectCard |
| `caseStudies` | CaseStudies |
| `riskMatrix` | GRCLab |
| `evidenceChecklist` | GRCLab |
| `accessReviewTests` | GRCLab |
| `remediationColumns` | GRCLab |
| `sectionKickers` | GRCLab |
| `frameworks` | FrameworkMapping |
| `artifacts` | Artifacts |
| `education` | Education |
| `learningPriorities` | Learning |
| `faqs` | FAQ |
| `contactLinks` | Contact |

---

## Placeholder Files Still Needed in `public/`

Add these before going live. Artifact cards show "File coming soon" until the files exist.

```
Mehul_Nikumbh_Resume.pdf
Mehul_Nikumbh_GRC_Portfolio.pdf
AccessGuard_Project_Guide.pdf
Audit_Evidence_Tracker_Sample.xlsx
Risk_Register_Sample.xlsx
Vulnerability_Dashboard_Sample.xlsx
Access_Review_Workbook_Sample.xlsx
og-preview.png   ← replace SVG with PNG for reliable social sharing
```

---

## Build and Deploy

```bash
npm install       # install deps
npm run dev       # local dev at http://localhost:5173
npm run lint      # eslint (passes clean)
npm run build     # production build to dist/
npm run preview   # preview the dist build
```

**Vercel:** Import repo, framework = Vite, build command = `npm run build`, output = `dist`.

**GitHub Pages (user site at `https://mehulnikumbh19.github.io/`):** Current `vite.config.js` uses `base: "/"` which is correct. For a project subpath, set `base: "/repo-name/"`.

---

## Bundle Size (post-redesign)

| Chunk | Size (gzip) |
|---|---|
| `index.css` | 4.75 kB |
| `icons` (lucide-react) | 3.35 kB |
| `motion` (framer-motion) | 40.81 kB |
| `index.js` (app) | 58.38 kB |

Recharts was removed — that alone dropped ~150KB from the previous build.
