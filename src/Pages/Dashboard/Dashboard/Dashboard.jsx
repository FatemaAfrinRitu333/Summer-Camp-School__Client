import { Link, Outlet } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { TiTick } from "react-icons/ti";
import { FcPaid } from "react-icons/fc";
import { TbFileLike } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsers, FaEye, FaHome } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiChalkboard } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";

const Dashboard = () => {
  const isAdmin = false;
  const isInstructor = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden ms-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu px-4 pb-12 w-80 h-min lg:h-full bg-base-200 text-base-content">
          <Link className="flex items-center gap-1 justify-center mt-6 mb-12" to="/">
            <span>
              <img src={logo} className="w-10" alt="" />
            </span>
            <span className="text-lg md:text-2xl font-bold text-green-800">
              Chorus Camp
            </span>
          </Link>
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li><Link to='/dashboard/manage-classes'><SiGoogleclassroom className="text-amber-600 text-2xl me-1" /> Manage Classes</Link></li>
              <li><Link to='/dashboard/manage-users'><FaUsers className="text-red-700 text-2xl me-1" /> Manage Users</Link></li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <Link to='/dashboard/add-aClass'><AiOutlineAppstoreAdd className="text-green-700 text-2xl me-1" />Add A Class</Link>
              </li>
              <li>
                <Link to='/dashboard/my-classes'><FaEye className="text-teal-800 text-2xl me-1" />My Classes</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="flex text-xl"
                  to="/dashboard/my-selected-class"
                >
                  <TbFileLike className="text-cyan-700 text-2xl me-1" /> My
                  Selected Classes
                </Link>
              </li>
              <li>
                <Link
                  className="flex text-xl"
                  to="/dashboard/my-enrolled-class"
                >
                  <TiTick className="text-green-700 text-2xl me-1" /> My
                  Enrolled Classes
                </Link>
              </li>
              <li>
                <Link className="flex text-xl" to="/dashboard/payment-history">
                  <FcPaid className="text-2xl me-1" /> Payment History
                </Link>
              </li>
            </>
          )}
          <li className="border-b-1 my-4"></li>
          <li>
            <Link className="flex text-xl text-neutral" to="/"><FaHome className="text-2xl me-1" /> Home</Link>
          </li>
          <li>
            <Link className="flex text-xl text-neutral" to="/classes"><BiChalkboard className="text-2xl me-1" /> Classes</Link>
          </li>
          <li>
            <Link className="flex text-xl text-neutral" to="/instructors"><GiTeacher className="text-2xl me-1" /> Instructors</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
