// import { CiEdit } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function BookDetail({
  selectedBook,
  monitoring,
  insight,
  setShowInsightForm,
  setMode,
  activityResult,
}) {
  return (
    <div className="flex flex-col gap-5 border p-5 rounded-md shadow-lg">
      {/* <div className="flex justify-end">
        <button className="flex justify-center w-16 rounded-full py-2 cursor-pointer text-5xl hover:bg-gray-500/50">
          <CiEdit />
        </button>
      </div> */}
      <div className="border p-5 rounded-md">
        <h1 className="font-bold text-xl pb-2">information detail</h1>
        <p>Title: {selectedBook?.title}</p>
        <p>Author: {selectedBook?.author}</p>
        <p>Genre: {selectedBook?.genre}</p>
        <p>
          Price:{" "}
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(selectedBook?.price || 0)}
        </p>
      </div>
      <div className="border p-5 rounded-md">
        <h1 className="font-bold text-xl pb-2">insight</h1>
        <p>{insight[0]?.insight || "No insight available"}</p>
        <div className="flex">
          <button
            onClick={() => {
              setMode("add");
              setShowInsightForm(true);
            }}
            className="flex justify-center transparent w-16 rounded-full py-2 cursor-pointer text-5xl hover:bg-gray-500/50"
          >
            <IoIosAddCircleOutline />
          </button>
          <button
            onClick={() => {
              setMode("edit");
              setShowInsightForm(true);
            }}
            className="flex justify-center w-11.5 rounded-full py-2 mt-3 cursor-pointer text-3xl hover:bg-gray-500/50"
          >
            <FiEdit3 />
          </button>
        </div>
      </div>
      <div className="border p-5 rounded-md">
        <h1 className="font-bold text-xl pb-2">Condition</h1>
        <p>{activityResult[0]?.activity_label}</p>
        <p className="italic text-gray-800/30"></p>
      </div>
    </div>
  );
}
