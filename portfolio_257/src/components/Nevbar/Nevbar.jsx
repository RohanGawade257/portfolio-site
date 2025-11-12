
import React from "react";
import Logo from "../../assets/rg-logo.svg";
import "./Nevbar.css";

const Nevbar = () => {
  return (
    <div className="Nevbar">
      <img 
        src={Logo} 
        alt="Logo" 
        style={{
          width: "90px",   
          height: "auto",  
          display: "block", 
        }} 
      />

      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <div className="nev-connect">Connect With Me</div>
    </div>
  );
};

export default Nevbar;
