/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import BookCard from "./BookCard";
import { useGetBookQuery } from "../redux/api/bookApiSlice";
import { IBook } from "../interface/Ibook";
import { Link } from "react-router-dom";

export default function AllBookSection() {
  const { data, isLoading } = useGetBookQuery(undefined);

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  return (
    <div className="grid justify-center">
      <h1 className="text-center text-5xl pt-12">
        Begin Your Unique Literary Journey.
      </h1>
      <div className="grid grid-cols-5 gap-5 pb-10 p-14">
        {data &&
          data.data.slice(0, 5).map((book: IBook) => (
            <Link to={`/book/${book._id}`}>
              {" "}
              <BookCard key={book._id} book={book}></BookCard>
            </Link>
          ))}
      </div>
      <div className="grid justify-center w-full mb-6">
        <Link
          to="/allbooks"
          className="text-center hover:scale-105 transition-transform  btn-primary px-5 py-3"
        >
          See More Books
        </Link>
      </div>
    </div>
  );
}
