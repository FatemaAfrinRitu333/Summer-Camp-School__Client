import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const user = true;
  const list = (
    <>
      <li>
        <Link>Item 1</Link>
      </li>
      <li>
        <Link>Parent</Link>
      </li>
      <li>
        <Link>Item 3</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 drop-shadow-lg rounded-md">
      <div className="navbar-start">
        <Link className="flex items-center" to='/'>
          <span>
            <img src={logo} className="w-14" alt="" />
          </span>
          <span className="text-lg md:text-2xl font-bold text-primary">Chorus Camp</span>
        </Link>
      </div>
      <div className="navbar-end">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
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
              className="menu menu-compact dropdown-content mt-3 px-6 py-3 space-y-3 shadow bg-success rounded-box w-max uppercase"
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
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm badge-secondary indicator-item">
                  {/* {cart?.length || 0} */}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-max px-4 bg-neutral shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {/* {cart?.length || 0} Items */}
                </span>
                <span className="text-white">Subtotal: $</span>
                <div className="card-actions">
                  <Link to="/dashboard/my-cart">
                    <button className="btn btn-primary btn-outline btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-[30px] rounded-full">
                <img src={user ? user.photoURL : ""} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-max  px-4"
            >
              {user ? (
                <>
                  {/* <li>{user.displayName}</li> */}
                  <button
                    // onClick={handleLogOut}
                    className="btn btn-ghost hover:btn-error"
                  >
                    <Link className="p-0">LogOut</Link>
                  </button>
                </>
              ) : (
                <button>
                  <Link className="p-0" to="/login">
                    Login
                  </Link>
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
