import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Home from "./Routes/Home";

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
    ],
  },
]);
