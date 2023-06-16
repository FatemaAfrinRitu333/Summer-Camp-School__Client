import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/User/Registration/Registration";
import Login from "../Pages/User/Login/Login";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";

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
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      errorElement: <Error/>,
      children: [
        // student routes
        {
          path: 'my-selected-class',
          element: <MySelectedClass/>
        },
        {
          path: 'my-enrolled-class',
          element: <MyEnrolledClass/>
        },
        {
          path: 'payment',
          element: <Payment/>
        },
        {
          path: 'payment-history',
          element: <PaymentHistory/>
        },
        // Instructor route
        {
          path: 'add-aClass',
          element: <AddAClass/>,
        },
        {
          path: 'my-classes',
          element: <MyClasses/>,
        },
        // admin route
        {
          path: 'manage-classes',
          element: <ManageClasses/>,
        },
        {
          path: 'manage-users',
          element: <ManageUsers/>
        },
      ]
    },
  ]);

  export default router;