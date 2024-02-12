import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    infoBook();
  }, []);

  const infoBook = async () => {
    try {
      const response = await axios.get("http://localhost:3000");
      //console.log(response);
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handelDelete = async(id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/delete/${id}`)
      console.log(response)
      window.location.reload()
    } catch (error) {
      console.log(error)      
    }
  }

  return (
    <>
      <div className="flex justify-center mt-20">
        <Link
          to="/create"
          className="bg-transparent hover:bg-green-500 text-gray-600 hover:text-white py-1 px-2 border border-gray-600 hover:border-transparent rounded text-md font-bold"
        >
          Create Book
        </Link>
      </div>
      <table className="border-collapse w-4/5 mx-auto mt-20">
        <thead>
          <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Publisher
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Book Name
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Date
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr
              key={book.id}
              className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
            >
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  PUBLISHER
                </span>
                {book.publisher}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Book Name
                </span>
                {book.name}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  DATE
                </span>
                {book.date}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Actions
                </span>
                <div className="space-x-2">
                  <Link to={`/update/${book.id}`}  className="bg-transparent hover:bg-yellow-500 text-gray-600  hover:text-white py-1 px-2 border border-gray-600 hover:border-transparent rounded text-xs font-bold">
                    Update
                  </Link>
                  <button className="bg-transparent hover:bg-red-500 text-gray-600  hover:text-white py-1 px-2 border border-gray-600 hover:border-transparent rounded text-xs font-bold"
                  onClick={()=>{handelDelete(book.id)}}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
