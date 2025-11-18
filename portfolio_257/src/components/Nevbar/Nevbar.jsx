import React, { useState } from "react";
import Logo from "../../assets/rg-logo.svg";
import "./Nevbar.css";
import Underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nevbar = () => {
  const [menu, setMenu] = useState("home");

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

        <li><AnchorLink className="anchor" offset={50} href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" && <img src={Underline} alt="" />}</li>
        <li><AnchorLink className="anchor" offset={50} href="#about"><p onClick={() => setMenu("about")}>About me</p></AnchorLink>{menu === "about" && <img src={Underline} alt="" />}</li>
        <li><AnchorLink className="anchor" offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" && <img src={Underline} alt="" />}</li>
        <li><AnchorLink className="anchor" offset={50} href="#work"><p onClick={() => setMenu("work")}>My Work</p></AnchorLink>{menu === "work" && <img src={Underline} alt="" />}</li>
        <li><AnchorLink className="anchor" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" && <img src={Underline} alt="" />}</li>

      </ul>

      <div className="nev-connect"><AnchorLink className="anchor" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Nevbar;
