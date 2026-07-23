-- Trust Project v2: tag each submission with its instrument version.
-- Pre-v2 rows (seven-community pilot, if any) have NULL; the five-class
-- v22 instrument submits 'v22.1' from the client.

alter table responses
  add column if not exists instrument_version text;

-- Analysis queries filter by instrument version
create index if not exists responses_instrument_version_idx
  on responses (instrument_version);
