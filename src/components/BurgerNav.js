import React, { useState } from "react";
import ResponsiveNav from "./ResponsiveNav";

function BurgerNav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ResponsiveNav open={open} />
    </div>
  );
}

export default BurgerNav;
