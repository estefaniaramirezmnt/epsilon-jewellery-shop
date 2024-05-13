import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./css/style.css";

function App() {
  return (
    <div className="bg-[#181818] w-screen h-screen overflow-hidden">
    <Header />
    <div className="w-screen py-6 px-5 lg:px-64 bg-[#252525] flex justify-center text-neutral-300">
      <ul className="flex justify-between w-1/2 text-center">
        <li>About</li>
        <li>Contact</li>
        <li>Service</li>
        <li>Help</li>
      </ul>
    </div>
  </div>
);
}

export default App;
