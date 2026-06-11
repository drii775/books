// import { IoIosAddCircleOutline } from "react-icons/io";

import { Table, RowBook } from "../Table";

const pastRead = [
  {
    title: "BUMI",
    author: "Tere liye",
    owner: "anggrek",
  },
  {
    title: "BULAN",
    author: "Tere liye",
    owner: "mawar",
  },
  {
    title: "BUMI MANUSIA",
    author:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    owner: "melati",
  },
  {
    title: "LAUT",
    author: "Tere liye",
    owner: "melati",
  },
  {
    title: "TANAH",
    author: "Tere liye",
    owner:
      "loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum",
  },
  {
    title: "BATU",
    author: "Tere liye",
    owner: "unknown",
  },
];

export default function PastBookList({ setShowForm }) {
  return (
    // <div className="flex flex-col gap-5">
    //   <div className="flex justify-end">
    //     <button className="flex justify-center transparent w-16 rounded-full py-2 cursor-pointer text-5xl hover:bg-gray-500/50">
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
    //           <th className="p-2 w-30">Owner</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((book, index) => (
    //           <RowBook key={book.id} book={book} number={index + 1} />
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <Table
      setShowForm={setShowForm}
      headers={["Title", "Author", "Owner", "Action"]}
      data={pastRead}
      renderRow={(pastRead, index) => (
        <RowBook
          key={pastRead.id}
          number={index + 1}
          values={[pastRead.title, pastRead.author, pastRead.owner]}
        />
      )}
    />
  );
}

// function RowBook({ book, number }) {
//   return (
//     <tr className="border-b hover:bg-gray-500/50 cursor-pointer">
//       <td className="p-2 text-center">{number}</td>
//       <td className="p-2 wrap-break-word">{book.title}</td>
//       <td className="p-2 wrap-break-word">{book.author}</td>
//       <td className="p-2 wrap-break-word text-center">{book.owner}</td>
//     </tr>
//   );
// }
