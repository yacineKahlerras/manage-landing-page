import React from "react";
import Hero from "../components/Hero";
import Functionality from "../components/Functionality";
import Reviews from "../components/Reviews";

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
