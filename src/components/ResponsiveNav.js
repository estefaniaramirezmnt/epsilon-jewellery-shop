import React from "react";
import { NavLink } from "react-router-dom";

function ResponsiveNav({ open }) {
  return (
    <div className={`navbar-menu-responsive ${open ? "open" : ""}`}>
      <nav className="navbar-list-responsive">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/earrings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Earrings
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default ResponsiveNav;
