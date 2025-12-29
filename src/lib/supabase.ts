import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Bu uyarı, env değişkenleri tanımlanmadığında build sırasında fark edilmesi için.
  console.warn("Supabase env değerleri (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) eksik.");
}

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);

