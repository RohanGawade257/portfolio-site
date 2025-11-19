import React, { useState , useRef } from "react";
import Logo from "../../assets/rg-logo.svg";
import "./Nevbar.css";
import Underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Menu_open from "../../assets/menu_open.svg" 
import Menu_close from "../../assets/menu_close.svg" 

const Nevbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const OpenMenu = () => {
    menuRef.current.style.right="0";
  }

  const CloseMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="nevbar">
      <img
        src={Logo}
        alt="Logo"
        style={{
          width: "90px",
          height: "auto",
          display: "block",
        }}
      />

      <img src={Menu_open} onClick={OpenMenu} alt="" className="nev-mod-open" />

      <ul ref={menuRef} className="nev-menu">
         <li className="nev-close-wrapper">
          <img
            src={Menu_close}
            onClick={CloseMenu}
            alt="close menu"
            className="nev-mod-close"
          />
        </li>
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
