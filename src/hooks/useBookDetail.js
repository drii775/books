import { useEffect, useState } from "react";
import { useLoading } from "../hooks/useLoading";

import {
  fetchBookDetail,
  fetchBookInsight,
  fetchBookMonitoring,
  fetchActivityResult,
} from "../services/bookService";

export default function useBookDetail(selectedBook) {
  const [detail, setDetail] = useState([]);
  const [monitoring, setMonitoring] = useState([]);
  const [insight, setInsight] = useState([]);
  const [activityResult, setActivityResult] = useState([]);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (!selectedBook) return;

    async function loadDetail() {
      setIsLoading((prev) => ({ ...prev, detail: true }));
      setIsLoading((prev) => ({ ...prev, insight: true }));
      setIsLoading((prev) => ({ ...prev, condition: true }));

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

      setIsLoading((prev) => ({
        ...prev,
        detail: false,
      }));

      setIsLoading((prev) => ({
        ...prev,
        insight: false,
      }));

      setIsLoading((prev) => ({
        ...prev,
        condition: false,
      }));
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
