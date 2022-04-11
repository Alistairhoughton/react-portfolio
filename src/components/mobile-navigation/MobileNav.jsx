import React, { useState } from "react";
import MobileNavStyles from "./MobileNav.css";
import { NavLink } from "react-router-dom";
import Burger from "../assets/hamburger.svg";
import Cross from "../assets/cross.svg";

export default function MobileNav() {
  const [toggle, setToggle] = useState(false);

  const menuHandler = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="mobileNavContainer">
      <nav className="TopBar">
        <div className="mobile-logo-container">
          <NavLink to="/react-portfolio">A</NavLink>
        </div>
        <div onClick={menuHandler} className="mobile-burger-container">
          {toggle ? <img className="cross-styles" src={Cross} alt="" /> : <img className="burger-styles" src={Burger} alt="" />}
        </div>
      </nav>
      {toggle ? (
        <div className="mobileNavMenu open">
          <div className="mobile-nav-link-holder">
            <NavLink to="/react-portfolio" activeclassname="active">
              Home
            </NavLink>
            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
            <NavLink to="/portfolio" activeclassname="active">
              Projects
            </NavLink>
            <NavLink
              className="mobileContact"
              to="/contact"
              activeclassname="active"
            >
              Contact
            </NavLink>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
}
