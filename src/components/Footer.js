import React from "react";
import logo from "../images/logo.svg";
import fbIcon from "../images/icon-facebook.svg";
import ytbIcon from "../images/icon-youtube.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instaIcon from "../images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer>
      <TopSection />
      <BottomSection />
    </footer>
  );
}

function TopSection() {
  return (
    <div className="footer-top-section">
      <div className="footer-top-section-center">
        <h2>Simplify how your team works today. Get Started</h2>
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
}

function BottomSection() {
  return (
    <div className="footer-bottom-section">
      <div className="footer-bottom-section-center">
        {/* logo and socials */}
        <div className="logo-socials">
          <img src={logo} alt="logo" />
          <ul className="socials-container">
            <li>
              <img src={fbIcon} alt="facebook icon" />
            </li>
            <li>
              <img src={ytbIcon} alt="youtube icon" />
            </li>
            <li>
              <img src={twitterIcon} alt="twitter icon" />
            </li>
            <li>
              <img src={pinterestIcon} alt="pinterest icon" />
            </li>
            <li>
              <img src={instaIcon} alt="instagram icon" />
            </li>
          </ul>
        </div>

        {/* footer links */}
        <div className="footer-links-container">
          <ul className="left-side">
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
          <ul className="right-side">
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* email form */}
        <form>
          <input type="email" placeholder="Updates in your inbox…"></input>
          <button>Go</button>
        </form>

        {/* copyright */}
        <p>Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  );
}
