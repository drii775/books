// import { CiEdit } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";

import Loader from "../Loader";
import { useLoading } from "../../hooks/useLoading";

export default function BookDetail({
  selectedBook,
  insight,
  setShowInsightForm,
  setMode,
  activityResult,
}) {
  const { isLoading } = useLoading();
  return (
    <div className="flex flex-col gap-5 border p-5 rounded-md shadow-lg">
      {/* <div className="flex justify-end">
        <button className="flex justify-center w-16 rounded-full py-2 cursor-pointer text-5xl hover:bg-gray-500/50">
          <CiEdit />
        </button>
      </div> */}
      <div className="border p-5 rounded-md">
        <h1 className="font-bold text-xl pb-2">information detail</h1>
        {isLoading.detail ? (
          <Loader />
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className="border pt-5 pb-1 px-5 rounded-md">
        <h1 className="font-bold text-xl pb-2">insight</h1>
        {isLoading.insight ? (
          <Loader />
        ) : (
          <p>
            {!insight.length === 0 ? (
              "No insight available"
            ) : (
              <ul>
                {insight.map((item) => (
                  <li className="flex justify-between" key={item.id}>
                    {item.insight}
                    <span className="text-sm text-gray-500/50">
                      <i>created at: {item.created_at}</i>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </p>
        )}
        <div className="flex justify-end">
          <button
            onClick={() => {
              setMode("add");
              setShowInsightForm(true);
            }}
            className="flex justify-center rounded-full py-2  w-10 cursor-pointer text-2xl hover:bg-gray-500/50"
          >
            <IoIosAddCircleOutline />
          </button>
          {/* <button
            onClick={() => {
              setMode("edit");
              setShowInsightForm(true);
            }}
            className="flex justify-center rounded-full py-2 w-11.5 cursor-pointer text-2xl hover:bg-gray-500/50"
          >
            <FiEdit3 />
          </button> */}
        </div>
      </div>
      <div className="border p-5 rounded-md">
        <h1 className="font-bold text-xl pb-2">Condition</h1>
        {isLoading.condition ? (
          <Loader />
        ) : (
          <p>{activityResult[0]?.activity_label}</p>
        )}
        <p className="italic text-gray-800/30"></p>
      </div>
    </div>
  );
}
