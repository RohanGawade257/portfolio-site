import React from "react";
import profile_img from "../../assets/my_image.jpg"
import "./Hero.css"
const Hero = () => {
    return (
        <div className="hero">
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
            <h1>I'm Rohan Gawade , BCA student from Goa.</h1>
            <p>Hello, I am a BCA student from Goa persuring BCA in Don Basco Collage Panjim goa, I have 2-3 yr of Video Editing, Thumbnail Making, Logo Making experience with a youtube channel having 30K+ subscriber, Aiming to be a succesfull version of myself in comming few years.  </p>
           
            <div className="Hero-action">

                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero 