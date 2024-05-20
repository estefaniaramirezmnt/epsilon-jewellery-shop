// Navbar.js
import React from "react";
import BurgerNav from "./BurgerNav";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-menu">
      <nav className="navbar-list">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/earrings" className={({ isActive }) => (isActive ? 'active' : '')}>Earrings</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </nav>
      <BurgerNav />
    </div>
  );
}
