import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./styles/style.scss";

export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
