import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import ErrorPage from "./components/ErrorPages/ErrorPage";
import Home from "./Routes/Home";
import Pricing from "./Routes/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Pricing",
        element: <Pricing />,
      },
    ],
  },
]);
