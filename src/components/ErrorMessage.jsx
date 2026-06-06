import { MdErrorOutline } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";

export function ErrorMessage({ message, onRetry }) {
  return (
    <div className="grid grid-cols-1 gap-3 py-5">
      <div className="flex justify-center gap-3">
        <span className="text-2xl">
          <MdErrorOutline />
        </span>
        {message}
      </div>
      <button
        onClick={onRetry}
        className="flex justify-center gap-3 cursor-pointer"
      >
        <span>
          <FaArrowsRotate />
        </span>
        Try Again
      </button>
    </div>
  );
}

export function EmptyMessage({ message }) {
  return (
    <div className="flex justify-center gap-3">
      <span className="text-2xl">
        <CgUnavailable />
      </span>
      {message}
    </div>
  );
}
