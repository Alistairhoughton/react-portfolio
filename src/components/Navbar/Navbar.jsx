import React from "react";
import { NavLink } from "react-router-dom";
import Navstyles from "./Navbar.css";


export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
      <NavLink to="/">A</NavLink>
      </div>
      <div className="nav-container">
      <NavLink to="/"  activeclassname="active">Home</NavLink>
      <NavLink to="/about"  activeclassname="active">About</NavLink>
      <NavLink to="/portfolio" activeclassname="active">Projects</NavLink>
      <NavLink to="/contact" activeclassname="active">Contact</NavLink>
      </div>
    </nav>
  );
}
