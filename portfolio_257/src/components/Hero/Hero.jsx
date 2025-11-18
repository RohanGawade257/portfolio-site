import React from "react";
import profile_img from "../../assets/my_image.jpg"
import "./Hero.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
    return (
        <div id="home" className="hero">
            <img
        src={profile_img}
        alt=""
        style={{
          width: "300px",       
          height: "300px",
          borderRadius: "50%",  
          objectFit: "cover"   
        }}
      />
            <h1><span>I'm Rohan Gawade</span>, BCA student from Goa.</h1>
            <p>Hello, I am a student from Goa persuring BCA in Don Basco Collage Panjim goa, I have 2-3 yr of Video Editing, Thumbnail Making, Logo Making experience with a youtube channel having 30K+ subscriber. This is my first React project. </p>
           
            <div className="Hero-action">

                <div className="hero-connect"><AnchorLink className="anchor" offset={50} href="#contact">Connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero 