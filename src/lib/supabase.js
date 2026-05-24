import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wvhlomlttruqpwudesvz.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2aGxvbWx0dHJ1cXB3dWRlc3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NjA0NjEsImV4cCI6MjA5NTEzNjQ2MX0.eEWKzx03T_Tt5fqLNan-QqnmgYM9SwIOsAog1PeTqh0";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);