import React from "react";
import "./App.css";
import Header from "./components/Header";
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Earrings from "./components/pages/Earrings";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="bg-[#181818] w-screen h-screen overflow-hidden">
      <Header />        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
