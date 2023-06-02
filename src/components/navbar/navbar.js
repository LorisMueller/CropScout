import React from "react";
import "./navbar.css";
import DroneIcon from "../../images/drone_icon.png";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={DroneIcon} alt="Drone Icon" />
          <h1>CropScout</h1>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/gallery">Photo-Gallery</a>
          <a href="/about">About us</a>
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