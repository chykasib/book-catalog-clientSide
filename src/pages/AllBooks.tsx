/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import BookCard from "../components/BookCard";
import { useGetBookQuery } from "../redux/api/bookApiSlice";
import { IBook } from "../interface/Ibook";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";

export default function AllBooks() {
  const [value, setValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetBookQuery(undefined);

  const handleChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSelect = (event: any) => {
    setValue(event.target.value);
  };

  let BooksData = [];

  if (data) {
    if (value !== "") {
      BooksData = data.data.filter(
        (book: IBook) => book.genre === value || book.publicationDate === value
      );
    } else {
      BooksData = data.data;
    }
  }

  if (searchQuery !== "") {
    BooksData = data.data.filter((book: IBook) => {
      return (
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }

  if (isLoading) {
    <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div className="flex m-10">
      <div className="w-3/12 border p-2 h-screen shadow">
        <p className="mb-16 mt-5 ms-4 text-3xl text-center">Filtering With</p>
        <div className="mb-4 ">
          <label className="label-text mx-12">Genre</label>
          <select
            onChange={(e) => handleSelect(e)}
            value={value}
            className="select select-primary w-3/6 max-w-xs"
          >
            {data &&
              data.data.map((book: IBook) => (
                <option key={book._id}>{book.genre}</option>
              ))}
          </select>
        </div>
        <div>
          <label className="label-text mx-4">Publication year</label>
          <select
            onChange={(e) => handleSelect(e)}
            value={value}
            className="select select-primary w-3/6 max-w-xs"
          >
            {data &&
              data.data.map((book: IBook) => (
                <option key={book._id}>{book.publicationDate}</option>
              ))}
          </select>
        </div>
      </div>
      <div className="w-3/5 mx-auto">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Search for title, author or genre"
          className="input text-center mb-4 input-bordered w-full"
        />
        <div className="grid grid-cols-4 gap-3">
          {BooksData.map((book: IBook) => (
            <Link to={`/book/${book._id}`}>
              {" "}
              <BookCard key={book._id} book={book}></BookCard>{" "}
            </Link>
          ))}
          {user.email && (
            <Link
              to="/addNew-book"
              className="border flex justify-center items-center text-4xl"
            >
              <span className="hover:rotate-90 transition delay-150">+</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
