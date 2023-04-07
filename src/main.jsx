import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import Spinners from "./components/Spinners";
import SingleNews from "./components/SingleNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: async () => {
          const response = await fetch("https://www.alokitotetulia.com/api/get/all/latest/news");
          const data = await response.json();
          return data;
        },
      },
      {
        path: "post/:postId",
        element: <SingleNews />,
        loader: ({ params }) =>
        fetch(`https://www.alokitotetulia.com/api/update/blog/${params.postId}`),
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
