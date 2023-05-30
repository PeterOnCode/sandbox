import { createClient } from '@supabase/supabase-js'
import constants from './constants'

const { supabaseUrl, supabaseKey } = constants

// setup client
const supabase = createClient( supabaseUrl, supabaseKey )

// expose supabase client
export default function useSupabase () {
  return { supabase }
}
