import { useEffect, useState } from "react";
import { fetchBookReturns } from "../services/supabaseService";

export default function useBookReturns() {
  const [bookReturns, setBookReturns] = useState([]);

  async function loadData() {
    const { data } = await fetchBookReturns();

    if (data) {
      setBookReturns(data);
    }
  }

  useEffect(() => {
    async function init() {
      const { data } = await fetchBookReturns();

      if (data) {
        setBookReturns(data);
      }
    }

    init();
  }, []);

  return {
    bookReturns,
    loadData,
  };
}
