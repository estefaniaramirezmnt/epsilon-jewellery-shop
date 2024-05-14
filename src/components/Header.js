import React, { useEffect, useState } from "react";
import logo from "../img/epsilon-logo-black.png";

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 600);
  }, []);

  return (
    <div className="header">
      <img
        src={logo}
        alt="Epsilon Logo"
        className={`header-logo ${isLoaded ? "loaded" : ""}`}
      />

      <div className="w-screen flex justify-center navbar-menu">
        <ul className="hidden md:flex navbar-list">
          <li>Home</li>
          <li>About</li>
          <li>Earrings</li>
          <li>Contact</li>
        </ul>
        <button className="space-y-1 group md:hidden">
          <div className="w-6 h-1 bg-[#252525]"></div>
          <div className="w-6 h-1 bg-[#252525]"></div>
          <div className="w-6 h-1 bg-[#252525]"></div>
          <ul className="bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
            <button className="px-10 py-8 relative ml-auto">
              <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
            </button>
            <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
              Home
            </li>
            <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
              Contact
            </li>
            <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
              Earrings
            </li>
            <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
              Contact
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
}
