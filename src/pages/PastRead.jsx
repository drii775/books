import { useState } from "react";

import PastBook from "../components/past/PastBook";
import PastDetail from "../components/past/PastDetail";
import AddPast from "../components/past/AddPast";

export default function Detail() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-around gap-10 py-5">
      <PastBook setShowForm={setShowForm} />
      <PastDetail />
      <AddPast showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
}
