import React from "react";
import './Nevbar.css'
import Logo from '../../assets/logo.svg'
const Nevbar = () => {
  return (
    <div className="Nevbar">
        <img src={Logo} alt="" />
        <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Contact</li>
        </ul>
        <div className="nev-connect"> Connect With Me </div>
    </div>
  )
}

export default Nevbar