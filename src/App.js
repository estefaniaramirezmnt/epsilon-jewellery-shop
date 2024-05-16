import React from "react";
import "./App.css";
import Header from "./components/Header";
import RightNav from "./components/RightNav";

function App() {
  return (
    <div className="bg-[#181818] w-screen h-screen overflow-hidden">
      <Header />
      <RightNav />
    </div>
  );
}

export default App;
