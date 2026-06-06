import { useEffect, useState } from "react";
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
    setSelectedBook,
  };
}

export function useBookDetail(selectedBook) {
  const [detail, setDetail] = useState([]);
  const [monitoring, setMonitoring] = useState([]);
  const [insight, setInsight] = useState([]);
  const [activityResult, setActivityResult] = useState([]);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (!selectedBook) return;

    async function loadData() {
      try {
        setIsLoading(true);

        const [detailResult, insightResult, monitoringResult, activityResult] =
          await Promise.all([
            fetchBookDetail(selectedBook.id),
            fetchBookInsight(selectedBook.id),
            fetchBookMonitoring(selectedBook.id),
            fetchActivityResult(),
          ]);

        setDetail(detailResult.data || []);
        setInsight(insightResult.data || []);
        setMonitoring(monitoringResult.data || []);
        setActivityResult(activityResult || []);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();

    async function loadDetail() {
      const detailResult = await fetchBookDetail(selectedBook.id);
      if (detailResult.data) {
        setDetail(detailResult.data);
      }

      const insightResult = await fetchBookInsight(selectedBook.id);
      if (insightResult.data) {
        setInsight(insightResult.data);
      }

      const monitoringResult = await fetchBookMonitoring(selectedBook.id);
      if (monitoringResult.data) {
        setMonitoring(monitoringResult.data);
      }
    }

    loadDetail();

    async function loadActivityResult() {
      const data = await fetchActivityResult();

      setActivityResult(data);
    }
    loadActivityResult();
  }, [selectedBook, setIsLoading]);

  return {
    detail,
    monitoring,
    insight,
    activityResult,
  };
}
