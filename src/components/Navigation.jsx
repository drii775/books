import { useNavigate } from "react-router-dom";
export default function Navigation() {
  const navigate = useNavigate();
  return (
    <nav className="relative flex justify-start gap-5 py-5">
      <div>
        <h1 className="text-4xl">
          <button className="cursor-pointer" onClick={() => navigate("/")}>
            MYBOOK
          </button>
        </h1>
      </div>
      <div className="flex gap-5">
        <button
          onClick={() => navigate("/pastread")}
          className="w-20 rounded-lg transparent cursor-pointer hover:bg-red-500/50"
        >
          Past Read
        </button>
        <button
          onClick={() => navigate("/books")}
          className="w-20 rounded-lg transparent cursor-pointer hover:bg-red-500/50"
        >
          Books
        </button>
        {/* <button
          onClick={() => navigate("/lendout")}
          className="border w-20 rounded-lg transparent cursor-pointer"
        >
          Lent Out
        </button>
        <button
          onClick={() => navigate("/borrowed")}
          className="border w-20 rounded-lg transparent cursor-pointer"
        >
          Borrowed
        </button> */}
      </div>
    </nav>
  );
}
