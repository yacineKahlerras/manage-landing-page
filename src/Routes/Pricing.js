import React from "react";
import pricingImg from "../images/routes/pricing.svg";

export default function Pricing() {
  return (
    <div className="route-page">
      <h1>Pricing</h1>
      <img src={pricingImg} alt="pricing img" />
    </div>
  );
}
