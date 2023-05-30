import 'dotenv/config'

export default {
  supabaseUrl : import.meta.env.VITE_SUPABASE_URL as string || '',
  supabaseKey : import.meta.env.VITE_SUPABASE_ANON_KEY as string || ''
}
