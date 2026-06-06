import { IoIosAddCircleOutline } from "react-icons/io";

import Table from "../components/table/Table";
import RowBook from "../components/table/RowBook";
// import Loader from "../Loader";
// import { useLoading } from "../../hooks/useLoading";
import "../../index.css";

export function BookList({ setShowBookForm, setMode, books, setSelectedBook }) {
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

export function BookDetail({
  selectedBook,
  insight,
  setShowInsightForm,
  setMode,
  activityResult,
}) {
  return (
    <div className="h-180 flex flex-col gap-5 border p-5 rounded-md shadow-lg">
      {/* <div className="flex justify-end">
        <button className="flex justify-center w-16 rounded-full py-2 cursor-pointer text-5xl hover:bg-gray-500/50">
          <CiEdit />
        </button>
      </div> */}
      <div>
        <h1 className="font-bold text-xl pb-0.5">information detail</h1>
        <div className="border p-5 rounded-md h-52">
          <p>Title: {selectedBook?.title}</p>
          <p>Author: {selectedBook?.author}</p>
          <p>Genre: {selectedBook?.genre}</p>
          <p>
            Price:{" "}
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(selectedBook?.price || 0)}
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl pb-0.5">insight</h1>
        <div className="border p-5 rounded-md h-52 custom-scroll overflow-y-auto">
          {insight.length === 0 ? (
            <p>No insight available</p>
          ) : (
            <ul>
              {insight.map((item) => (
                <li className="grid" key={item.id}>
                  <p>{item.insight}</p>
                  <p className="flex justify-end text-xs text-gray-800/30">
                    <i>
                      created at:
                      {new Date(item.created_at).toLocaleString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </i>
                  </p>
                  <hr className="my-2 text-gray-800/20" />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              setMode("add");
              setShowInsightForm(true);
            }}
            className="flex justify-center rounded-full py-2 mt-1  w-10 cursor-pointer text-2xl hover:bg-gray-500/50"
          >
            <IoIosAddCircleOutline />
          </button>
          {/* <button
            onClick={() => {
              setMode("edit");
              setShowInsightForm(true);
            }}
            className="flex justify-center rounded-full py-2 w-11.5 cursor-pointer text-2xl hover:bg-gray-500/50"
          >
            <FiEdit3 />
          </button> */}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl pb-0.5">Condition</h1>
        <div className="border p-5 rounded-md h-20">
          {activityResult ? (
            <div>
              <p>{activityResult[0]?.activity_label}</p>
              <p className="italic text-gray-800/30"></p>
            </div>
          ) : (
            <p>No condition information</p>
          )}
        </div>
      </div>
    </div>
  );
}
