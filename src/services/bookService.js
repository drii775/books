import { supabase } from "../lib/supabase";

// Fetch all books
export async function fetchBooks() {

  const { data, error } = await supabase
    .from("books")
    .select("*")
    .order("id", { ascending: true });

  return { data, error };
}

// Fetch monitoring/history by book
export async function fetchBookMonitoring(bookId) {

  const { data, error } = await supabase
    .from("book_monitoring")
    .select("*")
    .eq("book_id", bookId)
    .order("created_at", {
      ascending: false
    });

  return { data, error };
}

// Fetch insight by book
export async function fetchBookInsight(bookId) {

  const { data, error } = await supabase
    .from("book_insight")
    .select("*")
    .eq("book_id", bookId);

  return { data, error };
}

export async function fetchActivityResult() {
  const { data, error } = await supabase
    .from("activity_result")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}