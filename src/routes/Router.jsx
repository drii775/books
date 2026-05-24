import { Routes, Route } from "react-router-dom";
import PastRead from "../pages/PastRead";
import Books from "../pages/Books";
import Home from "../pages/Home";
// import LendOut from "../pages/LendOut";
// import Borrowed from "../pages/Borrowed";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pastread" element={<PastRead />} />
      <Route path="/books" element={<Books />} />
      {/* <Route path="/lendout" element={<LendOut />} />
      <Route path="/borrowed" element={<Borrowed />} /> */}
    </Routes>
  );
}
