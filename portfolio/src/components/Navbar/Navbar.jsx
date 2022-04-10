import React from "react";
import { NavLink } from "react-router-dom";
import Navstyles from "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
      <NavLink to="/" exact activeclassname="active">Home</NavLink>
      <NavLink to="/about" exact activeclassname="active">About</NavLink>
      <NavLink to="/portfolio" exact activeClassName="active">Projects</NavLink>
      <NavLink to="/contact" exact activeclassname="active">Contact</NavLink>
      </div>
    </nav>
  );
}
