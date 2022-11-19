import React from "react";
import Hero from "../components/Home/Hero";
import Functionality from "../components/Home/Functionality";
import Reviews from "../components/Home/Reviews";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Functionality />
      </main>
      <Reviews />
    </>
  );
}
