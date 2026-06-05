import { useState } from "react";

import BookList from "../components/books/BookList";
import BookDetail from "../components/books/BookDetail";
import ModalBook from "../components/books/ModalBook";
import ModalInsight from "../components/books/ModalInsight";
import useBook from "../hooks/useBook";
import useBookDetail from "../hooks/useBookDetail";

export default function Books() {
  const [showBookForm, setShowBookForm] = useState(false);
  const [showInsightForm, setShowInsightForm] = useState(false);
  const [mode, setMode] = useState("add");
  const { books, selectedBook, setSelectedBook } = useBook();
  const { monitoring, insight, activityResult } = useBookDetail(selectedBook);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-around gap-10 py-5">
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
    </div>
  );
}
