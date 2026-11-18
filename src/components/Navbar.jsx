import React from "react";
import { useState, useRef } from "react";
import "../css/Navbar.css";

function Navbar() {
    const [countApp, setCountApp] = useState(0);

    return (
    <nav id="navbar">
      <span id="logo">ApplyTrack Lite</span>
      <span>{countApp} application{countApp > 0 && "s" }</span>
    </nav>
  );
}

export default Navbar;
