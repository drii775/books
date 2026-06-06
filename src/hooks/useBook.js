import { useEffect, useState, useCallback } from "react";
import {
  fetchBooks,
  fetchBookDetail,
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
          setSelectedBook(data[0]);
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
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(() => {
    void loadBooks();
  }, [loadBooks]);

  return {
    books,
    selectedBook,
    setSelectedBook,
    error,
    loadBooks,
  };
}

export function useBookDetail(selectedBook) {
  const [detail, setDetail] = useState([]);
  const [monitoring, setMonitoring] = useState([]);
  const [insight, setInsight] = useState([]);
  const [activityResult, setActivityResult] = useState([]);

  useEffect(() => {
    if (!selectedBook) return;

    async function loadData() {
      const [detailResult, insightResult, monitoringResult, activityResult] =
        await Promise.all([
          fetchBookDetail(selectedBook.id),
          fetchBookInsight(selectedBook.id),
          fetchBookMonitoring(selectedBook.id),
          fetchActivityResult(),
        ]);

      // const errors = [
      //   detailResult.error,
      //   insightResult.error,
      //   monitoringResult.error,
      // ];

      // const firstError = errors.find(Boolean);

      // if (firstError) {
      //   throw new Error(firstError.message);
      // }

      setDetail(detailResult.data || []);
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

    // async function loadDetail() {
    //   const detailResult = await fetchBookDetail(selectedBook.id);

    //   if (detailResult.data) {
    //     setDetail(detailResult.data);
    //   }

    //   const insightResult = await fetchBookInsight(selectedBook.id);
    //   if (insightResult.data) {
    //     setInsight(insightResult.data);
    //   }

    //   const monitoringResult = await fetchBookMonitoring(selectedBook.id);
    //   if (monitoringResult.data) {
    //     setMonitoring(monitoringResult.data);
    //   }
    // }

    // loadDetail();

    // async function loadActivityResult() {
    //   const data = await fetchActivityResult();

    //   setActivityResult(data);
    // }
    // loadActivityResult();
  }, [selectedBook]);

  return {
    detail,
    monitoring,
    insight,
    activityResult,
  };
}
