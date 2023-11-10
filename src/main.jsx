import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Hero from "./Components/Hero/Hero.jsx";
import Auth from "./Auth/Auth.jsx";
import ErrorPage from "./Components/Error/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Hero>
        <Auth />
      </Hero>
    ),
    children: [],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
