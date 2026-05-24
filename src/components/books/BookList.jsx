// import { IoIosAddCircleOutline } from "react-icons/io";

import Table from "../components/table/Table";
import RowBook from "../components/table/RowBook";

// const books = [
//   {
//     title: "BUMI",
//     author: "Tere liye",
//     genre: "fantacy",
//   },
//   {
//     title: "BULAN",
//     author: "Tere liye",
//     genre: "fantacy",
//   },
//   {
//     title: "BUMI MANUSIA",
//     author:
//       "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
//     genre: "history",
//   },
//   {
//     title: "LAUT",
//     author: "Tere liye",
//     genre: "history",
//   },
//   {
//     title: "UDARA",
//     author: "Tere liye",
//     genre: "--",
//   },
//   {
//     title: "TANAH",
//     author: "Tere liye",
//     genre:
//       "loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum",
//   },
// ];

export default function BookList({
  setShowBookForm,
  setMode,
  books,
  setSelectedBook,
}) {
  return (
    // <div className="flex flex-col gap-5">
    //   <div className="flex justify-end">
    //     <button
    //       onClick={() => setShowForm(true)}
    //       className="flex justify-center transparent w-16 rounded-full py-2 cursor-pointer text-5xl hover:bg-gray-500/50"
    //     >
    //       <IoIosAddCircleOutline />
    //     </button>
    //   </div>
    //   <div className="felx-1 rounded-lg border p-5 shadow-md">
    //     <table className="table-fixed w-full border-0">
    //       <thead>
    //         <tr className="border-b-2 ">
    //           <th className="p-2 w-10">No</th>
    //           <th className="p-2 w-50">Title</th>
    //           <th className="p-2 w-40">Author</th>
    //           <th className="p-2 w-30">Genre</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((book, index) => (
    //           <RowLibrary key={book.id} book={book} number={index + 1} />
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

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
