import { useEffect, useState, useCallback } from "react";
import {
  fetchBooks,
  // fetchBookDetail,
  // fetchSingleBookTitle,
  fetchBookInsight,
  fetchBookMonitoring,
  fetchActivityResult,
} from "../services/bookService";
import { useLoading } from "../hooks/useLoading";

export function useBook() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const { setIsLoading } = useLoading();
  const [error, setError] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  const loadBooks = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, error } = await fetchBooks();

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        setBooks(data);

        // auto pilih buku pertama
        if (data.length > 0) {
          setSelectedBook(null);
        }
      }
      setError("");
    } catch (err) {
      setBooks([]);
      setSelectedBook(null);
      if (err.message.includes("Failed to fetch")) {
        setError(
          "Unable to connect to server. Please check your internet connection.",
        );
      }
    } finally {
      setHasLoaded(true);
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(() => {
    void loadBooks();
  }, [loadBooks]);

  useEffect(() => {
    if (selectedBook) {
      document.title = `MyBook | ${selectedBook?.title}`;
    }
  }, [selectedBook]);

  return {
    books,
    error,
    loadBooks,
    hasLoaded,
    setBooks,
    selectedBook,
    setSelectedBook,
  };
}

export function useBookDetail(selectedBook) {
  // const [detail, setDetail] = useState([]);
  const [insight, setInsight] = useState([]);
  const [monitoring, setMonitoring] = useState([]);
  const [activityResult, setActivityResult] = useState([]);

  useEffect(() => {
    if (!selectedBook) return;

    async function loadData() {
      const [
        // detailResult,
        insightResult,
        monitoringResult,
        activityResult,
      ] = await Promise.all([
        // fetchBookDetail(selectedBook.id),
        fetchBookInsight(selectedBook.id),
        fetchBookMonitoring(selectedBook.id),
        fetchActivityResult(),
      ]);

      // setDetail(detailResult.data || []);
      setInsight(insightResult.data || []);
      setMonitoring(monitoringResult.data || []);
      setActivityResult(activityResult || []);
      // } catch (err) {
      //   setError(err.message);
      // } finally {
      //   setIsLoading(false);
      // }
    }

    loadData();
  }, [selectedBook]);

  return {
    // detail,
    insight,
    monitoring,
    activityResult,
  };
}
