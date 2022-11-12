import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Functionality from "./components/Functionality";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Functionality />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
