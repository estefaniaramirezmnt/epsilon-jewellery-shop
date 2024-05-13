import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./css/style.css";

function App() {
  return (
    <div className="bg-[#181818] w-screen h-screen overflow-hidden">
      <Header />
      <Navbar />      
    </div>
  );
}

export default App;
