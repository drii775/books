import { useEffect, useState } from "react";
import { fetchBooks } from "../services/bookService";
import { useLoading } from "../hooks/useLoading";

export default function useBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    async function loadBooks() {
      setIsLoading((prev) => ({
        ...prev,
        table: true,
      }));
      const { data } = await fetchBooks();

      if (data) {
        setBooks(data);

        // auto pilih buku pertama
        if (data.length > 0) {
          setSelectedBook(data[0]);
        }
      }
      setIsLoading((prev) => ({
        ...prev,
        table: false,
      }));
    }

    loadBooks();
  }, [setIsLoading]);

  return {
    books,
    selectedBook,
    setSelectedBook,
  };
}
