import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/style.scss";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
