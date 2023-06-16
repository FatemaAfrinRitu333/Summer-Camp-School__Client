import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/logo.png";
import { HiOutlineUserPlus } from "react-icons/hi2";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  // const [cart] = useCart();
  // console.log(cart);
  // const total = cart?.reduce((sum, item)=>item.cost+sum, 0);
  // console.log(typeof total);
  // console.log(user);
  const list = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {user && (
        <li>
          <Link to={isAdmin? '/dashboard/'}>Dashboard</Link>
        </li>
      )}
    </>
  );

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        localStorage.removeItem('access-token')
        Swal.fire("Success!", "You are logged out!!", "success");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  return (
    <div className="navbar bg-gradient-to-r from-base-100/50 to-warning/30 drop-shadow-lg rounded-m">
      <div className="navbar-start">
        <Link className="flex items-center gap-1" to="/">
          <span>
            <img src={logo} className="w-10" alt="" />
          </span>
          <span className="text-lg md:text-2xl font-bold text-green-800">
            Chorus Camp
          </span>
        </Link>
      </div>
      <div className="navbar-end">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 px-6 py-3 space-y-3 shadow bg-success rounded-box uppercase"
            >
              {list}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{list}</ul>
        </div>
        <div className="flex">
          <div className="dropdown dropdown-end">
            {user ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ms-4">
                <div className="w-[30px] rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline px-6 text-green-800 ms-4">Login</button>
              </Link>
            )}

            {user && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-max px-4"
              >
                <>
                  <li>{user?.displayName}</li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-ghost hover:btn-error"
                  >
                    <Link className="p-0">LogOut</Link>
                  </button>
                </>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
