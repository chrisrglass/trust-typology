import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Canonical table name — matches supabase/migrations (lowercase).
// The pre-v2 bundle inserted into 'Responses' (capitalized), which never
// matched the migration-defined table; verify against the live project
// after it is restored.
const TABLE = 'responses'

// Instrument version tag stored with every submission (v22 rule set,
// v22.1 form: G01 external, opening frame + C07).
export const INSTRUMENT_VERSION = 'v22.1'

// Supabase client — null if env vars not set (graceful degradation in dev)
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export async function submitResponse(sessionId, responses) {
  if (!supabase) {
    console.warn('Supabase not configured — response not saved.')
    return { error: null }
  }

  const { error } = await supabase.from(TABLE).insert({
    session_id: sessionId,
    responses,
    instrument_version: INSTRUMENT_VERSION,
    completed_at: new Date().toISOString(),
  })

  return { error }
}
