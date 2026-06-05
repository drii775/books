import { IoIosAddCircleOutline } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";

import Loader from "../../Loader";
import { useLoading } from "../../../hooks/useLoading";

export default function Table({
  setShowBookForm,
  setMode,
  headers,
  data,
  renderRow,
}) {
  const { isLoading } = useLoading();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end ">
        <button
          onClick={() => {
            setMode("add");
            setShowBookForm(true);
          }}
          className="flex justify-center transparent w-16 rounded-full py-2 cursor-pointer text-5xl hover:bg-gray-500/50"
        >
          <IoIosAddCircleOutline />
        </button>
        <button
          onClick={() => {
            setMode("edit");
            setShowBookForm(true);
          }}
          className="flex justify-center w-11.5 rounded-full py-2 mt-3 cursor-pointer text-3xl hover:bg-gray-500/50"
        >
          <FiEdit3 />
        </button>
      </div>

      <div className="flex-1 rounded-lg border p-5 shadow-md">
        <table className="table-fixed w-full border-0">
          <thead>
            <tr className="border-b-2 ">
              <th className="p-2 w-10">No</th>
              {headers.map((header) => (
                <th key={header} className="p-2 w-50">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading.table ? (
              <tr>
                <td colSpan={headers.length + 1} className="py-10">
                  <div className="flex justify-center">
                    <Loader />
                  </div>
                </td>
              </tr>
            ) : (
              data.map((item, index) => renderRow(item, index))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
