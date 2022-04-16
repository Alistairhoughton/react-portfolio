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
        <div className={ toggle ? "mobileNavMenu-open" : "mobileNavMenu-closed"}>
          <div id="mob-Nav" className={ toggle ? "mobile-nav-link-holder-open" : "mobile-nav-link-holder-closed"}>
            <NavLink to="/react-portfolio"  onClick={menuHandler}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={menuHandler}>
              About
            </NavLink>
            <NavLink to="/portfolio"  onClick={menuHandler}>
              Projects
            </NavLink>
            <NavLink
              className="mobileContact"
              to="/contact"
              activeclassname="active" onClick={menuHandler}
            >
              Contact
            </NavLink>
          </div>
        </div>
    </nav>
  );
}
