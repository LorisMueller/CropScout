import React from "react";
import "./navbarLight.css";
import DroneIcon from "../../images/drone_icon.png";

function NavbarLight() {
    return (
      <nav className="lightNav">
        <div className="lightLogo">
          <img src={DroneIcon} alt="Drone Icon" />
          <h1>CropScout</h1>
        </div>
        <div className="lightLinks">
          <a href="/">Home</a>
          <a href="/gallery">Photo-Gallery</a>
          <a href="/about">About us</a>
        </div>
        <div className="lightContact">
          <div className="lightContactBox">
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>
    )
  }

export default NavbarLight;