import { createHashRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import ErrorPage from "./components/ErrorPages/ErrorPage";
import Home from "./Routes/Home";
import Pricing from "./Routes/Pricing";
import Product from "./Routes/Product";
import AboutUs from "./Routes/AboutUs";
import Community from "./Routes/Community";
import Careers from "./Routes/Careers";
import PrivacyPolicy from "./Routes/PrivacyPolicy";

export const router = createHashRouter([
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
      {
        path: "Product",
        element: <Product />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "Careers",
        element: <Careers />,
      },
      {
        path: "Community",
        element: <Community />,
      },
      {
        path: "PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);
