# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A React + Vite survey site for the Trust Project — a research instrument mapping seven distinct forms of trust in American higher education. Deployed to GitHub Pages at `https://chrisrglass.github.io/trust-typology/` (canonical domain: `trusttypology.com`).

Responses are stored in Supabase for LCA (latent class analysis). Target N=400–600 for live analysis; all prevalence and demographic data currently marked **ILLUSTRATIVE**.

## Commands

```bash
npm run dev      # Vite dev server at http://localhost:5173/trust-typology/
npm run build    # Production build to dist/
npm run lint     # ESLint

# Deploy to GitHub Pages (always build first)
npm run build && npx gh-pages -d dist

# Push source separately
git push origin main
```

No test suite. Two branches matter: `main` (source) and `gh-pages` (built dist — managed by gh-pages package, never edit directly).

## Architecture

**Routing** is hash-based with no React Router. `App.jsx` parses `window.location.hash` via `parseHash()` and listens to `hashchange`.

| Hash | Component |
|------|-----------|
| `#/` (default) | Quiz flow: Landing → Quiz → Results |
| `#/profiles` | ProfileIndex |
| `#/profiles/:id` | ProfilePage |
| `#/typology` | TypologyLanding |
| `#/dimensions` | DimensionsPage |
| `#/demographics` | DemographicsPage |

**Quiz state** lives in `App.jsx`: `stage` ('landing' | 'quiz' | 'results') and `classResult`. Navigating away via hash links does not reset state — the results screen reappears when hash returns to `#/`.

**Data flow:**
1. User completes quiz → `handleComplete(responses)` in `App.jsx`
2. `classifyResponses(responses)` in `src/lib/classify.js` runs a 6-item decision tree → returns a class object
3. `submitResponse(SESSION_ID, responses)` fires async to Supabase (fire-and-forget; errors are logged, not surfaced)
4. `classResult` is passed to `Results.jsx`

## Survey Instrument

`src/data/instrument.js` is the single source of truth for all 35 items. Edit here; everything else flows automatically.

**Structure:**
- Part A (indices 0–22): 23 forced-choice LCA items (`section: 'PART1'`)
- Part B (indices 23–29): 7 demographic items (`section: 'DM'`) — includes DM-G (Fed SHED economic security) and DM-H (general AI worry), external-benchmark covariates documented in the writing workspace at `writing/substack/trust-typology/quiz/29-edelman-module.md`
- Part C (indices 30–34): 5 representativeness items (`section: 'REP'`)

**Item types supported:** `forced_choice`, `scale_4`, `scale_4_plus`, `options_3`, `options_4`, `yes_no`, `yes_no_depends`, `multiselect`, `single_select`, `matrix`, `text_input`

Auto-advance (300ms delay): forced_choice, yes_no, options, scales. Manual "Next" button: multiselect, matrix, text_input.

## Classification Logic

`src/lib/classify.js` exports `classifyResponses(responses)`. Uses exactly **6 items** from the LCA battery as a decision tree:

| Item ID | What it measures |
|---------|-----------------|
| `D5-D` | Degree as reliable ladder (A) vs. reinforces class divisions (B) |
| `D3-G` | Research as public good (A) vs. too little accountability (B) |
| `D1-I` | Underemployment as temporary (A) vs. structural outcome (B) |
| `D2-C` | College as genuine formation (A) vs. credential only (B) |
| `R-G` | Government oversight as legitimate (A) vs. political control (B) |
| `D2-H` | AI as ideologically neutral (A) vs. excludes non-secular traditions (B) |

Only these 6 items determine the type. All 23 Part A items are stored to Supabase but only 6 drive classification.

## Seven Trust Types

Defined in `src/data/classes.js`. `getClass(id)` returns a class by ID.

| ID | Name | Icon | Color | ~% |
|----|------|------|-------|----|
| `critical-reformers` | Critical Reformers | Eye | `#6E3B6E` | 9% |
| `populist-insurgents` | Populist Insurgents | Megaphone | `#C46A2D` | 11% |
| `institutional-skeptics` | Institutional Skeptics | CircleDashed | `#7A7068` | 16% |
| `market-oriented-pragmatists` | Market-Oriented Pragmatists | Users | `#1F6B4F` | 20% |
| `faith-and-freedom-families` | Faith & Freedom Families | BookOpen | `#B78A2A` | 13% |
| `university-defenders` | University Defenders | Shield | `#2457A6` | 11% |
| `economically-betrayed` | Economically Betrayed | TrendingDown | `#A3171C` | 20% |

These are the canonical seven communities (they supersede an earlier naming scheme — Institutional Faithful, Critical Believers, Economically Dispossessed, Community Meritocrats, Indifferent Skeptics, Faith-Rooted Skeptics, Populist Antagonists — that survives only in historical documents like `pilot/`). `src/data/classes.js` is the source of truth; if this table and that file disagree, the file wins.

All prevalence figures are illustrative pending live LCA.

## Icons

Icons are referenced as **string names** in all data files (e.g., `"Shield"`) and resolved to lucide components in `src/components/TypeIcon.jsx` via `ICON_MAP`. Add new icon imports to `ICON_MAP` before using them in data files. Dimension icons were added to `TypeIcon.jsx` alongside type icons.

## Trust Project Logo

Two overlapping circles: `viewBox="0 0 48 32"`, `<circle cx="17" cy="16" r="13"/>` and `<circle cx="31" cy="16" r="13"/>`. Used in `Landing.jsx` and as `#tp-logo` symbol in `social-cards/index.html`. Do not use the triangular 3-circle variant.

## CSS Design System

All styles in `src/App.css` (single file, no CSS modules). Use these custom properties — do not invent new names:

```css
--bg-page, --bg-card, --bg-raised          /* backgrounds */
--text-primary, --text-secondary, --text-muted
--border-default, --border-strong
--font-display, --font-body, --font-ui, --font-data
--color-border, --color-text-secondary, --color-accent
```

**Variables that do NOT exist** (will silently fail): `--color-surface-alt` (use `--bg-raised`), `--color-text-primary` (use `--text-primary`), `--font-serif` (use `--font-body`).

Fonts: Playfair Display (`--font-display`), Source Serif 4 (`--font-body`), Inter (`--font-ui`).

## Data Files

| File | Contents |
|------|----------|
| `src/data/classes.js` | 7 CLASSES array + `getClass(id)` |
| `src/data/dimensionsData.js` | 9 trust dimensions with `typeViews` keyed by all 7 class IDs. `discriminantPower` retained in data but not shown in UI |
| `src/data/demographicsData.js` | `DEMOGRAPHIC_VARIABLES` + `CLASS_DEMOGRAPHICS` conditional probabilities; DemographicsPage inverts via Bayes' theorem |
| `src/data/profileData.js` | `NATIONAL_AVERAGES`, `ITEM_OPTIONS`, `ITEM_LABELS`, expanded per-type content for ProfilePage |
| `src/data/stateData.js` | US state → type assignments (ILLUSTRATIVE; not from live data) |

## Social Cards

`social-cards/index.html` is a standalone HTML file, not part of the Vite build. Preview locally at `file:///Users/chrisglass/trust-typology/social-cards/index.html`. Contains 15 cards at 1080×1080 rendered in 480px containers via `transform:scale(0.444444)`. SVG icons and the trust project logo are defined as `<symbol>` elements in a hidden `<defs>` block at top of `<body>`, referenced with `<use href="#symbol-id"/>`. All links use `trusttypology.com`. No `@chrisrglass` handle. Type color appears as a 20px left border strip on spotlight cards.

## Environment

Copy `.env.example` → `.env.local` and add Supabase credentials. Required secrets for GitHub Actions: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`. App degrades gracefully if not configured (logs warning, skips submit).

## Supabase Schema

```sql
create table responses (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  responses jsonb not null,
  completed_at timestamptz not null,
  created_at timestamptz default now()
);
alter table responses enable row level security;
create policy "anon insert" on responses for insert to anon with check (true);
```
