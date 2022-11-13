import React from "react";

const manageFeaturesContents = [
  {
    title: "Track company-wide progress",
    content: `
    See how your day-to-day tasks fit into the wider vision. Go from 
    tracking progress at the milestone level all the way done to the 
    smallest of details. Never lose sight of the bigger picture again.  
    `,
  },
  {
    title: "Advanced built-in reports",
    content: `
    Set internal delivery estimates and track progress toward company 
    goals. Our customisable dashboard helps you build out the reports 
    you need to keep key stakeholders informed.
    `,
  },
  {
    title: "Everything you need in one place",
    content: `
    Stop jumping from one service to another to communicate, store files, 
    track tasks and share documents. Manage offers an all-in-one team 
    productivity solution.
    `,
  },
];

export default function Functionality() {
  const elements = manageFeaturesContents.map((elm, index) => {
    return (
      <div className="feature">
        <div className="title">
          <span className="title-index">0{index + 1}</span>
          <h3>{elm.title}</h3>
        </div>
        <p>{elm.content}</p>
      </div>
    );
  });

  return (
    <div className="functionality">
      {/* left side */}
      <div className="text-side">
        <h2>What’s different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      {/* right side */}
      {elements}
    </div>
  );
}
