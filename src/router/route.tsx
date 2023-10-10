import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../pages/BookDetails";
import AddNewBook from "../pages/AddNewBook";
import EditBook from "../pages/EditBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/addNew-book",
        element: <AddNewBook></AddNewBook>,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook></EditBook>,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);
