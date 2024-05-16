import React, { useState } from "react";

function BurgerNav() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`burger ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      {" "}
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BurgerNav;
