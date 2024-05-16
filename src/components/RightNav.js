import React from "react";

function RightNav({ open }) {
  return (
    <div className={`navbar-menu-responsive ${open ? "open" : ""}`}>
      <ul className="navbar-list-responsive">
        <li>Home</li>
        <li>About</li>
        <li>Earrings</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default RightNav;
