import {createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);