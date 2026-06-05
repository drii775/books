// import { IoIosAddCircleOutline } from "react-icons/io";

import Table from "../components/table/Table";
import RowBook from "../components/table/RowBook";

export default function BookList({
  setShowBookForm,
  setMode,
  books,
  setSelectedBook,
}) {
  return (
    <Table
      setShowBookForm={setShowBookForm}
      setMode={setMode}
      headers={["Title", "Author", "Genre"]}
      data={books}
      renderRow={(book, index) => (
        <RowBook
          key={book.id}
          number={index + 1}
          values={[book.title, book.author, book.genre]}
          selectBook={() => setSelectedBook(book)}
        />
      )}
    />
  );
}

// function RowLibrary({ number, book }) {
//   return (
//     <tr className="border-b hover:bg-gray-500/50 cursor-pointer">
//       <td className="p-2 text-center">{number}</td>
//       <td className="px-5 wrap-break-word">{book.title}</td>
//       <td className="px-5 wrap-break-word">{book.author}</td>
//       <td className="px-3 wrap-break-word text-center">{book.genre}</td>
//     </tr>
//   );
// }
