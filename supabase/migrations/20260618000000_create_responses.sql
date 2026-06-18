-- Trust Project: response collection table
-- Each row is one completed survey submission

create table if not exists responses (
  id            uuid primary key default gen_random_uuid(),
  session_id    uuid not null,
  responses     jsonb not null,
  completed_at  timestamptz not null,
  created_at    timestamptz default now()
);

-- Index for analysis queries by completion date
create index if not exists responses_completed_at_idx on responses (completed_at);

-- Row-level security: anonymous users can insert but not read
alter table responses enable row level security;

create policy "anon_insert" on responses
  for insert to anon
  with check (true);

-- Service role (used for analysis exports) can read all rows
create policy "service_read" on responses
  for select to service_role
  using (true);
