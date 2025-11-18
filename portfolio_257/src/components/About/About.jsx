import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/my_image.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img
            src={profile_image}
            alt=""
            style={{
              width: "250px",        
              height: "400px",
              objectFit: "cover"     
            }}
          />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I’m a first-year BCA student and a passionate creator who loves turning ideas into visuals and experiences — whether through design, video, or code. My creative journey began back in 8th grade during the lockdown, when I started designing thumbnails, logos, and editing videos for my YouTube channel, which grew to over 32k followers and featured more than 200+ videos. That experience shaped my eye for design, storytelling, and consistency.</p>
            <p>Since then, I’ve expanded my skills into video editing, graphic design, and full-stack development. I work with tools like Canva, Affinity, DaVinci Resolve, CapCut, and VS Code, and I’m currently learning Adobe After Effects, Premiere Pro, Photoshop, and Figma to refine my craft further. A fast learner, disciplined worker, and perfectionist at heart — I strive to combine technical precision with creativity in every project I take on.</p>
          </div>
          <div className="about-skills">
            <div className="about-skills">
               <div className="about-skill"><p>Video Editing</p><hr /></div>
               <div className="about-skill"><p>Logo Designing</p><hr /></div>
               <div className="about-skill"><p>Banner Designing</p><hr /></div>
               <div className="about-skill"><p>Other Graphic Designs</p><hr /></div>
               <div className="about-skill"><p>C Language</p><hr /></div>
               <div className="about-skill"><p>HTML & CSS</p><hr /></div>
               <div className="about-skill"><p>Java Script</p><hr /></div>
               <div className="about-skill"><p>React JS</p><hr /></div>
               <div className="about-skill"><p>Photography</p><hr /></div>
            </div>

          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>3+</h1>
          <p>Years of Experiance in editing,designing </p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>Interned</h1>
          <p>As Graphic designer at Inamingos foundation </p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>1st prize</h1>
          <p>In inter collage Book Cover desgn</p> 
        </div>
        <hr />
         <div className="about-achivement">
          <h1>32,000+</h1>
          <p>Subscriber on Youtube</p>
          <hr />
         
        </div>
        
      </div>
    </div>
  );
};

export default About;
