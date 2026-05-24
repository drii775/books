import { supabase } from "../lib/supabase";

export async function fetchBookReturns() {

  const { data, error } = await supabase
    .from("book_returns")
    .select("*")
    .order("id", { ascending: false });

  return { data, error };
}