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

The instrument lives in `src/data/instrument.js`. It encodes all 47 items from `08-instrument-fielding-ready.md`:

- **Clustering battery** (40 items): D1–D6, G, R, FA — used in LCA
- **Covariates** (7 items): EX-A through EX-G — characterize groups after formation

Item types: `forced_choice`, `scale_4`, `scale_4_plus`, `options_3`, `options_4`, `yes_no`, `yes_no_depends`, `multiselect`, `single_select`, `matrix`

To add or edit items, edit `ITEMS` in `src/data/instrument.js`. The `section` field must match a `SECTIONS` entry's `id`.
