# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A React + Vite survey site for the Trust Project — a research instrument mapping distinct forms of trust in American higher education. Deployed to GitHub Pages at `https://chrisrglass.github.io/trust-typology/`.

Responses are stored in Supabase for LCA (latent class analysis) to derive a trust typology modeled on Pew's 2026 Political Typology.

## Development

```bash
npm install           # install dependencies
npm run dev           # local dev server at http://localhost:5173/trust-typology/
npm run build         # production build to dist/
```

## Architecture

```
src/
  data/instrument.js  — All 47 survey items (single source of truth; edits here flow through)
  lib/supabase.js     — Supabase client + submitResponse() helper
  components/
    Landing.jsx       — Landing page with project description and consent
    Quiz.jsx          — Quiz controller: pagination, progress, navigation
    Question.jsx      — Renders any item type (forced_choice, matrix, multiselect, etc.)
    Results.jsx       — Thank-you page; shows loading/error states
  App.jsx             — Stage machine: landing → quiz → results
  App.css             — All styles (no CSS modules)
```

## Environment Variables

Copy `.env.example` → `.env.local` and fill in Supabase credentials before running locally.

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Both vars are required in GitHub repository secrets (Settings → Secrets → Actions) for the deploy workflow to inject them at build time.

## Supabase Setup

Create a table in your Supabase project:

```sql
create table responses (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  responses jsonb not null,
  completed_at timestamptz not null,
  created_at timestamptz default now()
);

-- Read-only for anon; inserts only
alter table responses enable row level security;
create policy "anon insert" on responses for insert to anon with check (true);
```

## GitHub Pages Setup

1. Go to repo Settings → Pages → Source: GitHub Actions
2. Add secrets: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
3. Push to `main` — the deploy workflow triggers automatically

## Survey Instrument

The full 47-item instrument lives in `src/data/instrument.js`, sourced from `08-instrument-fielding-ready.md`. The quiz site shows all items; the **analysis battery** (which items enter LCA) is a subset.

Item types: `forced_choice`, `scale_4`, `scale_4_plus`, `options_3`, `options_4`, `yes_no`, `yes_no_depends`, `multiselect`, `single_select`, `matrix`

To add or edit items, edit `ITEMS` in `src/data/instrument.js`. The `section` field must match a `SECTIONS` entry's `id`.

## Analysis Battery (Finalized — v3, 2026-06-18)

**16 clustering items** drive the LCA and typology assignment. These were validated across three simulation pilots (see `pilot/`).

| # | Item | Type | Dimension |
|---|---|---|---|
| 1 | D2-F | 3-option | Purpose of HE: civic / moral-spiritual / career |
| 2 | D5-B | Binary | Mobility skepticism |
| 3 | D1-E | 4-option | Behavioral advice to a young person about college |
| 4 | D6-A | Binary | Local embeddedness |
| 5 | D6-B | Binary | Research reach |
| 6 | D6-C | Binary | Prestige investment |
| 7 | D2-C | Binary | Intellectual formation |
| 8 | D4-A | Binary | Religious inclusion |
| 9 | G1 | Binary | Mission scope: global vs. domestic-first |
| 10 | G2 | 4-option | International enrollment stance |
| 11 | G3 | 4-option | Foreign government involvement |
| 12 | R-A1 | Binary | Self-reform capacity |
| 13 | R-B | 3-option | Reform / replace / varies widely |
| 14 | R-A2 | 4-option | Reform pathway |
| 15 | FA-A-faculty | Scale 1–4 | Faculty confidence |
| 16 | FA-A-administrators | Scale 1–4 | Administrator confidence |

Plus 6 demographic items and 4 EX covariates = **26 total questions** for the typology quiz.

Full specification, item rationale, and dropped-item log: `pilot/quiz-battery-spec.md`

## Provisional Typology (pre-LCA)

Six classes from simulation pilots. Names and profiles are provisional pending LCA on live fielded data (target N=400–600).

| Class | ~% | Core Signature |
|---|---|---|
| Credential Pragmatist | 42% | Career purpose + domestic mission + market disruption |
| Institutional Trustee | 20% | Civic purpose + global mission + reformable |
| Mission-Aligned Abolitionist | 14% | Civic purpose + wants replacement |
| Critical Reformer | 10% | Civic purpose + cannot self-reform + external accountability |
| Outcomes-Focused | 8% | Career purpose + global mission |
| Faith Formation | 6% | Moral-spiritual purpose + domestic mission + replacement |

Classification logic: D2-F (purpose) → G1 (mission) → R-A1 + R-B (reform stance).
