// import AddForm from "../components/modal/AddForm";

// const fields = [
//   {
//     id: "title",
//     label: "title",
//     type: "text",
//   },
//   {
//     id: "author",
//     label: "author",
//     type: "text",
//   },
//   {
//     id: "genre",
//     label: "genre",
//     type: "text",
//   },
//   {
//     id: "price",
//     label: "price",
//     type: "text",
//   },
// ];

// export default function ModalBook({ showForm, setShowForm }) {
//   if (!showForm) return null;
//   return (
//     <AddForm
//       mode="add"
//       showForm={showForm}
//       setShowForm={setShowForm}
//       fields={fields}
//       headForm="New book!"
//     />
//   );
// }

import { useState, useEffect } from "react";

import AddForm from "../components/modal/AddForm";

import { supabase } from "../../lib/supabase";

const fields = [
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

export default function ModalBook({
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
    <AddForm
      mode={mode}
      showForm={showBookForm}
      setShowForm={setShowBookForm}
      fields={fields}
      headForm={mode === "edit" ? "Edit Book" : "New Book"}
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  );
}
