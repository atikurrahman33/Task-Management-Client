import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import Review from "../Review/Review";

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
        }
    ]
    },
  ]);