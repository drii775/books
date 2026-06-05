import { useState } from "react";

import PastBookList from "../components/past/PastBookList";
import PastDetail from "../components/past/PastDetail";
import ModalPast from "../components/past/ModalPast";

export default function Detail() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] justify-around gap-10 py-5">
      <PastBookList setShowForm={setShowForm} />
      <PastDetail />
      <ModalPast showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
}
