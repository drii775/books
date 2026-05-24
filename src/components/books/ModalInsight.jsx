import { useEffect, useState } from "react";

import AddForm from "../components/modal/AddForm";

import { supabase } from "../../lib/supabase";

const fields = [
  {
    id: "insight",
    label: "Insight",
    type: "text",
  },
];

export default function ModalInsight({
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
    <AddForm
      mode={mode}
      showForm={showInsightForm}
      setShowForm={setShowInsightForm}
      fields={fields}
      headForm={mode === "edit" ? "Edit Insight" : "New Insight"}
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  );
}
