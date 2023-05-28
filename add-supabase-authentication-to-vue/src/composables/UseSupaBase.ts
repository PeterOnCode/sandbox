import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://wftwjzyqhdneelyshzke.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzc3NDM4MCwiZXhwIjoxOTQ5MzUwMzgwfQ.Z7FOfAT_jSUDPsVuWvr0hAA8Cp2ySb4_peni8r5pMjo'

// setup client
const supabase = createClient( supabaseUrl, supabaseKey )

// expose supabase client
export default function useSupabase () {
  return { supabase }
}
