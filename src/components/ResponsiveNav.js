import React from "react";
import { Link } from "react-router-dom";

function ResponsiveNav({ open }) {
  return (
    <div className={`navbar-menu-responsive ${open ? "open" : ""}`}>
      <nav className="navbar-list-responsive">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/earrings">Earrings</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default ResponsiveNav;
