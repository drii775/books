import { MdDownloadDone } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { PiConfetti } from "react-icons/pi";

import InputField from "./InputField";

import { useRef } from "react";
import Draggable from "react-draggable";

export default function AddForm({
  showForm,
  setShowForm,
  fields,
  headForm,
  formData,
  setFormData,
  handleSubmit,
}) {
  const nodeRef = useRef(null);

  if (!showForm) return null;
  return (
    <Draggable bounds="body" nodeRef={nodeRef} handle=".handle">
      <div
        ref={nodeRef}
        className="fixed top-20 left-20 w-100 bg-red-200 p-5 rounded-md shadow-md"
      >
        <div className="flex justify-between items-center handle cursor-grab mb-3">
          <div className="flex items-center gap-2 text-xl">
            <PiConfetti />
            {headForm}
          </div>
          <button
            onClick={() => setShowForm(false)}
            className="text-2xl rounded-full p-1 hover:bg-red-500/50 cursor-pointer"
          >
            <IoIosClose />
          </button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              value={formData[field.id] || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [field.id]: e.target.value,
                })
              }
            />
          ))}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex justify-center w-9 rounded-full py-2 mt-2 text-xl hover:bg-gray-500/50"
            >
              <MdDownloadDone />
            </button>
          </div>
        </form>
      </div>
    </Draggable>
  );
}
