import React from 'react'
import './myWork.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import { useNavigate } from "react-router-dom";

// 🎨 Graphics
import render1 from "../../assets/PORSCHE.jpg";
import render2 from "../../assets/taj.png";

// 🌐 Website Screenshots
import expenseTrackerSS from "../../assets/web6.png";
import codeCraftsSS from "../../assets/web7.png";

const Services = () => {

  const navigate = useNavigate();

  return (
    <div id='work' className='myWork'>

      <div className="myWork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="category-container">

        {/* 🎨 GRAPHIC DESIGN */}
        <div className="category-column">
          <h2 className="category-title">Graphic Design</h2>

          <div className="portfolio-card dark-card">
            <img src={render1} alt="Porsche Poster" />
            <div className="card-content">
              <h3>Porsche Poster</h3>
              <p>Automotive Design</p>
            </div>
          </div>

          <div className="portfolio-card dark-card">
            <img src={render2} alt="Taj Poster" />
            <div className="card-content">
              <h3>Taj Mahal Artwork</h3>
              <p>Creative Poster Design</p>
            </div>
          </div>
        </div>


        {/* 🎬 VIDEO EDITING */}
        <div className="category-column">
          <h2 className="category-title">Video Editing</h2>

          <a
          href="https://youtu.be/KgY4x8D3El0"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-card dark-card"
        >
          <img
            src="https://img.youtube.com/vi/KgY4x8D3El0/hqdefault.jpg"
            alt="Video 1"
          />
          <div className="card-content">
            <h3>BMW Cinematic Edit</h3>
            <p>Color Grading / Transitions</p>
          </div>
        </a>

        <a
          href="https://youtu.be/EatYikn2Ink"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-card dark-card"
        >
          <img
            src="https://img.youtube.com/vi/EatYikn2Ink/hqdefault.jpg"
            alt="Video 2"
          />
          <div className="card-content">
            <h3>Creative Cooking Edit</h3>
            <p>Commercial Style</p>
          </div>
        </a>
        </div>


        {/* 🌐 WEB DEVELOPMENT */}
        <div className="category-column">
          <h2 className="category-title">Web Development</h2>

          <a
            href="https://smart-college-website-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card dark-card"
          >
            <img src={expenseTrackerSS} alt="Smart Collage" />
            <div className="card-content">
              <h3>Smart Collage Website</h3>
              <p>React / Ai Chat Support</p>
            </div>
          </a>

          <a
            href="https://gamer-hub-ai.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card dark-card"
          >
            <img src={codeCraftsSS} alt="Gamer Hub" />
            <div className="card-content">
              <h3>Gamer Hub Site</h3>
              <p>React / Socket.io / Ai Support</p>
            </div>
          </a>
        </div>

      </div>

      <div
        className="myWork-show-more"
        onClick={() => navigate("/work")}
      >
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>

    </div>
  )
}

export default Services
