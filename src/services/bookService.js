import { supabase } from "../lib/supabase";

// Fetch all books
export async function fetchBooks() {
  const { data, error } = await supabase
    .from("books")
    .select("*")
    .order("id", { ascending: true });

  return { data, error };
}

// export async function fetchSingleBookTitle() {
//   const { data, error } = await supabase
//     .from("books")
//     .select("title")
//     .order("id", { ascending: true })
//     .limit(1)
//     .single();
//   return { data, error };
// }

// // Fetch detail information book
// export async function fetchBookDetail(bookId) {
//   const { data, error } = await supabase
//     .from("books")
//     .select("*")
//     .order("id", { ascending: true })
//     .eq("id", bookId);

//   return { data, error };
// }

// Fetch insight by book
export async function fetchBookInsight(bookId) {
  const { data, error } = await supabase
    .from("book_insight")
    .select("*")
    .order("created_at", { ascending: true })
    .eq("book_id", bookId);

  return { data, error };
}

// Fetch monitoring/history by book
export async function fetchBookMonitoring(bookId) {
  const { data, error } = await supabase
    .from("book_monitoring")
    .select("*")
    .eq("book_id", bookId)
    .order("created_at", {
      ascending: false,
    });

  return { data, error };
}

export async function fetchActivityResult() {
  const { data, error } = await supabase.from("activity_result").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function fetchBookReturns() {
  const { data, error } = await supabase
    .from("book_returns")
    .select("*")
    .order("id", { ascending: false });

  return { data, error };
}

// export async function fetchDeleteBook(id) {
//   const { error } = await supabase.from("books").delete().eq("id", id);
//   return { error };
// }
