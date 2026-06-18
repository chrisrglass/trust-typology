import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

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

  const { error } = await supabase.from('responses').insert({
    session_id: sessionId,
    responses,
    completed_at: new Date().toISOString(),
  })

  return { error }
}
