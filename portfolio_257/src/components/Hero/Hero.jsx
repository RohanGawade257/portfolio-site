import React, { useState } from "react";
import profile_img from "../../assets/my_image.jpg";
import resumeImg from "../../assets/CV.png";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {

  const [showResume, setShowResume] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Rohan Gawade Resume",
        text: "Check out my resume",
        url: window.location.href + "#resume"
      });
    } else {
      navigator.clipboard.writeText(window.location.href + "#resume");
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      <div id="home" className={`hero ${showResume ? "blur-bg" : ""}`}>

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

        <p>
          Hello, I am a student from Goa pursuing BCA in Don Bosco College Panjim, Goa.
          I have 2-3 years of Video Editing, Thumbnail Making, and Logo Making experience
          with a YouTube channel having 30K+ subscribers. This is my first React project.
        </p>

        <div className="Hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor" offset={50} href="#contact">
              Connect with me
            </AnchorLink>
          </div>

          <div
            className="hero-resume"
            onClick={() => setShowResume(true)}
          >
            My Resume
          </div>
        </div>
      </div>

      {/* RESUME MODAL */}
      {showResume && (
        <div className="resume-overlay">
          <div className="resume-modal">

            <img src={resumeImg} alt="Resume" className="resume-image" />

            <div className="resume-actions">
              <button onClick={handleShare}>Share Resume</button>
              <button onClick={() => setShowResume(false)}>Close</button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
