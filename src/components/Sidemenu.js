import React from "react";

export default function SideMenu({ activeSubmenu, setActiveSubmenu }) {
  return (
    <aside className={`sidemenu ${activeSubmenu ? "sidemenu-active" : ""}`}>
      <ul className="sidemenu-center">
        <li>Pricing</li>
        <li>Product</li>
        <li>About us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>
    </aside>
  );
}
