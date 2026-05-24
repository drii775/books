import { useEffect, useState } from "react";
import { fetchBooks } from "../services/bookService";

export default function useBooks() {

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {

    async function loadBooks() {

      const { data } = await fetchBooks();

      if (data) {
        setBooks(data);

        // auto pilih buku pertama
        if (data.length > 0) {
          setSelectedBook(data[0]);
        }
      }
    }

    loadBooks();

  }, []);

  return {
    books,
    selectedBook,
    setSelectedBook
  };
}