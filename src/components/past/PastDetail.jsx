import { FiEdit3 } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";

export default function PastDetail() {
  return (
    <div className="flex flex-col gap-5 border p-5 rounded-md shadow-lg">
      <div className="flex justify-end">
        <button className="flex justify-center transparent w-16 rounded-full py-2 cursor-pointer text-5xl hover:bg-gray-500/50">
          <CiEdit />
        </button>
      </div>
      <div className="border p-5 rounded-md">
        <h1 className="font-bold text-xl pb-2">information detail</h1>
        <p>Title: Bumi</p>
        <p>Author: Tere Liye</p>
        <p>Genre: Fantacy</p>
        <p>Owner: Grace</p>
        <div className="flex">
          <button className="flex justify-center transparent w-11.5 rounded-full py-2 mt-3 cursor-pointer text-3xl hover:bg-gray-500/50">
            <FiEdit3 />
          </button>
        </div>
      </div>
      <div className="border p-5 rounded-md">
        <h1 className="font-bold text-xl pb-2">insight</h1>
        <p>omg so cool, never read serial book like this</p>
        <div className="flex">
          <button className="flex justify-center transparent w-11.5 rounded-full py-2 mt-3 cursor-pointer text-3xl hover:bg-gray-500/50">
            <FiEdit3 />
          </button>
        </div>
      </div>
    </div>
  );
}
