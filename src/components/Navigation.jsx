import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navigation() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`sticky top-0 z-50 transition-all flex justify-start gap-5 py-2 ${scrolled ? "bg-[#fce3e3] py-3" : "bg-transparent"}`}
    >
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
          className="w-20 rounded-md transparent cursor-pointer hover:bg-[#fed8d8]"
        >
          Past Read
        </button>
        <button
          onClick={() => navigate("/books")}
          className="w-20 rounded-md transparent cursor-pointer hover:bg-[#fed8d8]"
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
