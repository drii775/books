import { IoIosAddCircleOutline } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";

export default function Table({
  setShowBookForm,
  setMode,
  headers,
  data,
  renderRow,
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end ">
        <button
          onClick={() => {
            setMode("add");
            setShowBookForm(true);
          }}
          className="flex justify-center transparent w-16 rounded-full py-2 cursor-pointer text-5xl hover:bg-[#fed8d8]"
        >
          <IoIosAddCircleOutline />
        </button>
        <button
          onClick={() => {
            setMode("edit");
            setShowBookForm(true);
          }}
          className="flex justify-center w-12 rounded-full py-2 mt-3 cursor-pointer text-3xl hover:bg-[#fed8d8]"
        >
          <FiEdit3 />
        </button>
      </div>

      <div className="flex-1 rounded-lg border border-[#cf455cb1] p-5 shadow-md">
        <table className="w-full border-0">
          <thead>
            <tr className="border-b-2 border-[#cf455cb1] ">
              <th className="p-2 w-10">No</th>
              {headers.map((header) => (
                <th key={header} className="p-2 w-50">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex justify-center"></div>
              </td>
            </tr>
            {data.map((item, index) => renderRow(item, index))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
