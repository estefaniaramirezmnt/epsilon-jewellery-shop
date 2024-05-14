import React from "react";

export default function Navbar() {
  return (
    <div className="w-screen py-6 px-5 lg:px-64 bg-[#252525] flex justify-center text-neutral-300">
      <ul className="hidden md:flex justify-between w-1/2 text-center">
        <li>Home</li>
        <li>About</li>
        <li>Earrings</li>
        <li>Contact</li>
      </ul>
      
      <button className="space-y-1 group md:hidden">
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
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
  );
}
