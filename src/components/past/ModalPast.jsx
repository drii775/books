import { ModalForm } from "../ModalForm";

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
    id: "owner",
    label: "owner",
    type: "text",
  },
];

export default function ModalPast({ showForm, setShowForm }) {
  // const nodeRef = useRef(null);

  if (!showForm) return null;
  return (
    <ModalForm
      showForm={showForm}
      setShowForm={setShowForm}
      fields={fields}
      headForm="New read!"
    />
  );
}
