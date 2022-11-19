import React from "react";
import pricingImg from "../images/routes/product.svg";

export default function Product() {
  return (
    <div className="route-page">
      <h1>Product</h1>
      <img src={pricingImg} alt="pricing img" />
    </div>
  );
}
