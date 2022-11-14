import React from "react";

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
        <li onClick={exitMenu}>Pricing</li>
        <li onClick={exitMenu}>Product</li>
        <li onClick={exitMenu}>About us</li>
        <li onClick={exitMenu}>Careers</li>
        <li onClick={exitMenu}>Community</li>
      </ul>
    </aside>
  );
}
