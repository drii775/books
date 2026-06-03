import { useEffect, useState } from "react";

import {
  fetchBookMonitoring,
  fetchBookInsight,
  fetchActivityResult,
} from "../services/bookService";

export default function useBookDetail(selectedBook) {
  const [monitoring, setMonitoring] = useState([]);

  const [insight, setInsight] = useState([]);

  const [activityResult, setActivityResult] = useState([]);

  useEffect(() => {
    if (!selectedBook) return;

    async function loadDetail() {
      const monitoringResult = await fetchBookMonitoring(selectedBook.id);

      const insightResult = await fetchBookInsight(selectedBook.id);

      if (monitoringResult.data) {
        setMonitoring(monitoringResult.data);
      }

      if (insightResult.data) {
        setInsight(insightResult.data);
      }
    }

    loadDetail();

    async function loadActivityResult() {
      const data = await fetchActivityResult();

      setActivityResult(data);
    }
    loadActivityResult();
  }, [selectedBook]);

  return {
    monitoring,
    insight,
    activityResult,
  };
}
