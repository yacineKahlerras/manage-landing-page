import React from "react";
import { Link } from "react-router-dom";

export default function SideMenu({ activeSubmenu, setActiveSubmenu }) {
  // exists the submenu
  function exitMenu() {
    setActiveSubmenu(false);
  }

  // when we click the dark background we exit sidemenu
  function backgroundClickExit(event) {
    if (!event.target.classList.contains("sidemenu")) return;
    exitMenu();
  }

  return (
    <aside
      onClick={backgroundClickExit}
      className={`sidemenu ${activeSubmenu ? "sidemenu-active" : ""}`}
    >
      <ul className="sidemenu-center">
        <li onClick={exitMenu}>
          <Link to={"Pricing"}>Pricing</Link>
        </li>
        <li onClick={exitMenu}>
          <Link to={"Product"}>Product</Link>
        </li>
        <li onClick={exitMenu}>
          <Link to={"AboutUs"}>AboutUs</Link>
        </li>
        <li onClick={exitMenu}>
          <Link to={"Careers"}>Careers</Link>
        </li>
        <li onClick={exitMenu}>
          <Link to={"Community"}>Community</Link>
        </li>
      </ul>
    </aside>
  );
}
