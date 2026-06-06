import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

import { ModalForm } from "../ModalForm";

const bookFields = [
  {
    id: "title",
    label: "title",
    type: "text",
  },
  {
    id: "author",
    label: "author",
    type: "text",
  },
  {
    id: "genre",
    label: "genre",
    type: "text",
  },
  {
    id: "price",
    label: "price",
    type: "number",
  },
  {
    id: "rfid_tag",
    label: "RFID Tag",
    type: "text",
  },
];

export function ModalBook({
  showBookForm,
  setShowBookForm,
  mode,
  selectedBook,
}) {
  const [formData, setFormData] = useState(
    mode === "edit" && selectedBook ? selectedBook : {},
  );

  useEffect(() => {
    if (mode === "edit" && selectedBook) {
      setFormData(selectedBook);
    } else {
      setFormData({});
    }
  }, [mode, selectedBook]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (mode === "edit") {
      await supabase.from("books").update(formData).eq("id", selectedBook.id);
    } else {
      await supabase.from("books").insert([formData]);
    }

    setShowBookForm(false);
  }

  if (!showBookForm) return null;

  return (
    <ModalForm
      mode={mode}
      showForm={showBookForm}
      setShowForm={setShowBookForm}
      fields={bookFields}
      headForm={mode === "edit" ? "Edit Book" : "New Book"}
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  );
}

const insightFields = [
  {
    id: "insight",
    label: "Insight",
    type: "text",
  },
];

export function ModalInsight({
  showInsightForm,
  setShowInsightForm,
  mode,
  selectedBook,
  selectedInsight,
}) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (mode === "edit" && selectedInsight) {
      setFormData(selectedInsight);
    } else {
      setFormData({});
    }
  }, [mode, selectedInsight]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!selectedBook) return;

    if (mode === "edit") {
      await supabase
        .from("book_insight")
        .update(formData)
        .eq("id", selectedInsight.id);
    } else {
      await supabase.from("book_insight").insert([
        {
          ...formData,
          book_id: selectedBook.id,
        },
      ]);
    }

    setShowInsightForm(false);
  }

  if (!showInsightForm) return null;

  return (
    <ModalForm
      mode={mode}
      showForm={showInsightForm}
      setShowForm={setShowInsightForm}
      fields={insightFields}
      headForm={mode === "edit" ? "Edit Insight" : "New Insight"}
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  );
}
