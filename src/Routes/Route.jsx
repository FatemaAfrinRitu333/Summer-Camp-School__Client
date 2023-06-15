import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/User/Registration/Registration";
import Login from "../Pages/User/Login/Login";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Registration />,
        },
        {
          path: '/instructors',
          element: <AllInstructors />,
        },
        {
          path: '/classes',
          element: <AllClasses />,
        },
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard/>,
      errorElement: <Error/>
    },
  ]);

  export default router;