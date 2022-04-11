import React, { useState } from "react";
import MobileNavStyles from "./MobileNav.css";
import { NavLink } from "react-router-dom";
import Burger from "../assets/hamburger.svg";
import Cross from "../assets/cross.svg"

export default function MobileNav() {

  




  return (
    <nav className="mobileNavContainer">
      <nav className="TopBar">
        <div className="mobile-logo-container">
          <NavLink to="/">A</NavLink>
        </div>
        <div className="mobile-burger-container">
          <img src={Burger} alt="" />
        </div>
      </nav>
      <div className="mobileNavMenu">
        <div className="mobile-nav-link-holder">
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
          <NavLink to="/portfolio" activeclassname="active">
            Projects
          </NavLink>
          <NavLink className="mobileContact" to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
