import {
    createBrowserRouter,
    
  } from "react-router-dom";
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


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',  // No need for a specific path here
          element:<Home></Home> 
        },
        {
            path:'/review',
            element:<Review></Review>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/faq',
            element:<Faq></Faq>
        }
    ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
             path:'home',
             element:<WelHome></WelHome>
            },
            {
                path:'list',
                element:<Add_list></Add_list>
            },
            {
                path:'mylist',
                element:<My_list></My_list>
            }
        ],
    },
  ]);