import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/User/Registration/Registration";
import Login from "../Pages/User/Login/Login";
import Instructors from "../Pages/AllInstructors/AllInstructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";

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
          element: <Instructors />,
        },
        {
          path: '/classes',
          element: <Classes />,
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