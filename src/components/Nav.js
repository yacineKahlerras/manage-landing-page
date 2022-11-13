import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import closeSubmenu from "../images/icon-close.svg";
import SideMenu from "./Sidemenu";

export default function Nav() {
  const [activeSubmenu, setActiveSubmenu] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <img src={logo} alt="logo" />
        <NavLinks />
        <button className="get-started-btn">Get Started</button>
        <button
          className="submenu-btn"
          aria-label="submenu"
          onClick={() => setActiveSubmenu(!activeSubmenu)}
        >
          <img
            src={activeSubmenu ? closeSubmenu : hamburger}
            alt="submenu icon"
          />
        </button>
      </div>
      <SideMenu />
    </nav>
  );
}

function NavLinks() {
  const navLinksTexts = [
    "Pricing",
    "Product",
    "About Us",
    "Careers",
    "Community",
  ];

  const navElements = navLinksTexts.map((n, index) => (
    <li>
      <button>{n}</button>
    </li>
  ));

  return <ul className="nav-links">{navElements}</ul>;
}
