import React, { useState } from "react";
import RightNav from "./RightNav";

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
      <RightNav open={open} />
    </div>
  );
}

export default BurgerNav;
