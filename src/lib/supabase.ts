import { createClient } from '@supabase/supabase-js';

// Usa as variáveis de ambiente se existirem; caso contrário, usa valores genéricos de teste
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);