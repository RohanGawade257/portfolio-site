import React from "react";
import { useNavigate } from "react-router-dom";
import "./work.css";

// 🔥 Import Your Generated Thumbnails
import videoThumb from "../assets/video-category-thumb.jpg";
import graphicThumb from "../assets/graphic-category-thumb.jpg";
import webThumb from "../assets/web-category-thumb.jpg";


const Work = () => {
  const navigate = useNavigate();

  return (
    <div className="work-page">
      <h1 className="work-heading">Explore My Work</h1>

      <div className="work-categories">

        {/* VIDEO EDITING */}
        <div 
          className="work-card"
          onClick={() => navigate("/work/video-editing")}
        >
          <div className="work-image">
            <img src={videoThumb} alt="Video Editing" />
          </div>
          <div className="work-content">
            <h2>Video Editing</h2>
            <p>Reels, Cinematics, YouTube Projects</p>
          </div>
        </div>

        {/* GRAPHIC DESIGN */}
        <div 
          className="work-card"
          onClick={() => navigate("/work/graphic-design")}
        >
          <div className="work-image">
            <img src={graphicThumb} alt="Graphic Design" />
          </div>
          <div className="work-content">
            <h2>Graphic Design</h2>
            <p>Posters, Thumbnails, Branding</p>
          </div>
        </div>

        {/* WEB DESIGN */}
        <div 
          className="work-card"
          onClick={() => navigate("/work/web-design")}
        >
          <div className="work-image">
            <img src={webThumb} alt="Web Design" />
          </div>
          <div className="work-content">
            <h2>Web Design</h2>
            <p>Modern & Responsive Websites</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
