import React from "react";
import BurgerNav from "./BurgerNav";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-menu">
      <nav className="navbar-list">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/earrings">Earrings</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <BurgerNav />
    </div>
  );
}
