import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import Review from "../Review/Review";
import Login from "../UserAuthentication/Login/Login";
import SignUp from "../UserAuthentication/Signup/Signup";
import Faq from "../Review/Faq";
import Dashboard from "../Dashboard/Dashboard";
import WelHome from "../Dashboard/Home/WelHome";
import Add_list from "../Dashboard/Home/Add_list";
import My_list from "../Dashboard/Home/My_list/My_list";
import Update from "../Dashboard/Home/My_list/Update";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/review',
        element: <Review />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/faq',
        element: <Faq />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'home',
        element: <WelHome />
      },
      {
        path: 'list',
        element: <Add_list />
      },
      {
        path: 'mylist',
        element:<PrivateRoute> <My_list /></PrivateRoute>
      },
      {
        path: 'update/:id',
        element: <Update />,
        loader: ({ params }) => fetch(`http://localhost:5000/task/${params.id}`).then(res => res.json())
      },
    ],
  },
]);
