import React from "react";
import RightNav from "./RightNav";
import BurgerNav from "./BurgerNav";
// import "../App.css";

export default function Navbar() {
  return (
    <div className="navbar-menu">
      <ul className="navbar-list">
        <li>Home</li>
        <li>About</li>
        <li>Earrings</li>
        <li>Contact</li>
      </ul>
      <BurgerNav />
    </div>
  );
}
