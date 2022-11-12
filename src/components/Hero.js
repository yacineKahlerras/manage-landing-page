import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <TextSide />
    </div>
  );
}

function TextSide() {
  return (
    <div className="text-side">
      <h1>Bring everyone together to build better products.</h1>
      <p>
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
}
