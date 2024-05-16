import React from "react";

export default function Navbar() {
  return (
    <div className="w-screen flex justify-center navbar-menu">
      <ul className="hidden md:flex navbar-list">
        <li>Home</li>
        <li>About</li>
        <li>Earrings</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
