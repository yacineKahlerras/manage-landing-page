import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Functionality from "./components/Functionality";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import "./styles/style.scss";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Functionality />
      </main>
      <Reviews />
      <Footer />
    </>
  );
}
