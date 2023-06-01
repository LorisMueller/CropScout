import React from "react";
import "./navbar.css";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <h1>CropScout</h1>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/gallery">Photo-Gallery</a>
        </div>
        <div className="contact">
          <div className="contactBox">
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>
    )
  }

export default Navbar;