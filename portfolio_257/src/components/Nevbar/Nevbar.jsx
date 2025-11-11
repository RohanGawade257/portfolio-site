
import React from "react";
import Logo from "../../assets/rg-logo.svg";
import "./Nevbar.css";

const Nevbar = () => {
  return (
    <div className="Nevbar">
      {/* 👇 added inline style to control logo size */}
      <img 
        src={Logo} 
        alt="Logo" 
        style={{
          width: "60px",   // controls how tiny the logo is
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
