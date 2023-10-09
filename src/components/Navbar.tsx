import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/api/userSlice";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  function handleLogOut() {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  }
  console.log(user.email);

  //   const user = false;

  return (
    <div className="navbar bg-neutral text-white border-b-2 py-5 px-14">
      <div className="flex-1">
        <Link to="/" className="normal-case text-3xl">
          BOOKS
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <button>
            <Link to="/allbooks" className="btn btn-active btn-ghost">
              All Books
            </Link>
          </button>
          {!user.email && (
            <>
              <button>
                <Link to="/signin" className="btn btn-active btn-ghost">
                  Sign In
                </Link>
              </button>
              <button>
                <Link to="/signup" className="btn btn-active btn-ghost">
                  Sign Up
                </Link>
              </button>
            </>
          )}
          {user.email && (
            <button className="btn btn-active btn-ghost" onClick={handleLogOut}>
              Log Out
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}
