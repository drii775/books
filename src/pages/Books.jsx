import { useState } from "react";

import { BookList, BookDetail } from "../components/books/BookList";
import { ModalBook, ModalInsight } from "../components/books/ModalBook";
import { useBook, useBookDetail } from "../hooks/useBook";
import { useLoading } from "../hooks/useLoading";
import Loader from "../components/Loader";
import { ErrorMessage, EmptyMessage } from "../components/ErrorMessage";

export default function Books() {
  const [showBookForm, setShowBookForm] = useState(false);
  const [showInsightForm, setShowInsightForm] = useState(false);
  const [mode, setMode] = useState("add");
  const { books, selectedBook, setSelectedBook, error, loadBooks } = useBook();
  const { monitoring, insight, activityResult } = useBookDetail(selectedBook);
  const { isLoading } = useLoading();
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage message={error} onRetry={loadBooks} />;
  }
  if (!isLoading && !error && books.length === 0) {
    return <EmptyMessage message="No books available" />;
  }
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] justify-around gap-10 py-5">
        <BookList
          setShowBookForm={setShowBookForm}
          setMode={setMode}
          books={books}
          setSelectedBook={setSelectedBook}
        />
        <BookDetail
          showBookForm={showBookForm}
          setShowBookForm={setShowBookForm}
          showInsightForm={showInsightForm}
          setShowInsightForm={setShowInsightForm}
          setMode={setMode}
          selectedBook={selectedBook}
          monitoring={monitoring}
          insight={insight}
          activityResult={activityResult}
        />
      </div>
      <ModalBook
        showBookForm={showBookForm}
        setShowBookForm={setShowBookForm}
        mode={mode}
        selectedBook={selectedBook}
      />
      <ModalInsight
        showInsightForm={showInsightForm}
        setShowInsightForm={setShowInsightForm}
        mode={mode}
        selectedBook={selectedBook}
        selectedInsight={insight[0]}
      />
    </>
  );
}
