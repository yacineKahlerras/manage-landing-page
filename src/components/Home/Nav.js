import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import closeSubmenu from "../../images/icon-close.svg";
import SideMenu from "./Sidemenu";
import { Link } from "react-router-dom";

export default function Nav() {
  const [activeSubmenu, setActiveSubmenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = activeSubmenu ? "hidden" : "auto";
  }, [activeSubmenu]);

  return (
    <nav>
      <div className="nav-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
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
      <SideMenu
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
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
    <li key={index}>
      <Link to={`${n === "About Us" ? "AboutUs" : n}`}>
        <button>{n}</button>
      </Link>
    </li>
  ));

  return <ul className="nav-links">{navElements}</ul>;
}
