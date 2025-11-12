import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/my_image.jpg";

const About = () => {
  return (
    <div className="about">
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
              width: "200px",        // slightly bigger than Hero
              height: "200px",
              borderRadius: "50%",   // circular
              objectFit: "cover"     // keeps correct proportions
            }}
          />
        </div>

        <div className="about-right">
          <div className="about-para">
            {/* You can add your about text here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
