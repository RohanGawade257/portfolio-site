import React from "react";
import { useNavigate } from "react-router-dom";
import "./work.css";

const Work = () => {
  const navigate = useNavigate();

  return (
    <div className="work-page">
      <h1>Explore My Work</h1>

      <div className="work-categories">

        <div 
          className="work-card"
          onClick={() => navigate("/work/video-editing")}
        >
          <h2>Video Editing</h2>
          <p>Reels, Cinematics, YouTube Projects</p>
        </div>

        <div 
          className="work-card"
          onClick={() => navigate("/work/graphic-design")}
        >
          <h2>Graphic Design</h2>
          <p>Posters, Thumbnails, Branding</p>
        </div>

        <div 
          className="work-card"
          onClick={() => navigate("/work/web-design")}
        >
          <h2>Web Design</h2>
          <p>Modern & Responsive Websites</p>
        </div>

      </div>
    </div>
  );
};

export default Work;