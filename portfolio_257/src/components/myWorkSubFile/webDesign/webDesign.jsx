import React from "react";
import "./webDesign.css";
import theme_pattern from "../../../assets/theme_pattern.svg";
import { useNavigate } from "react-router-dom";

import web6 from "../../../assets/web6.png";
import web9 from "../../../assets/web9.png";
import web7 from "../../../assets/web7.png";

const websites = [
  {
    title: "Smart College Website, Renewed the Don basco panjim collage Website",
    type: "React / Ai Assistant",
    link: "https://smart-college-website-ai.vercel.app/",
    image: web6
  },
  {
    title: "Bakery Shop Website",
    type: "React / Responsive",
    link: "https://mama-bakery-wunt.vercel.app/",
    image: web9
  },
  {
    title: "Community For Gamers With AI Bot Support",
    type: "React / Socket.io / Ai Assistant",
    link: "https://gamer-hub-ai.vercel.app/login",
    image: web7
  }
];

const WebDesign = () => {

  const navigate = useNavigate(); // ✅ required

  return (
    <div className="web-design-page">

      {/* HERO */}
      <section className="wd-hero">
        <h1>Web Design</h1>
        <img src={theme_pattern} alt="" />
        <p>
          I create responsive, user friendly websites that are optimized for
          both desktop and mobile, helping brands have a professional online presence.
        </p>
      </section>

      {/* JOURNEY */}
      <section className="wd-section">
        <h2>My Web Design Journey</h2>
        <p>
          I started designing websites to bring ideas to life online. Over time, I’ve
          learned how to combine clean design, usability, and responsiveness
          to create functional and visually appealing sites.
        </p>
      </section>

      {/* TOOLS */}
      <section className="wd-section">
        <h2>Tools & Software</h2>
        <ul className="wd-tools">
          <li>HTML / CSS / JavaScript</li>
          <li>React.js</li>
          <li>Figma</li>
          <li>MongoDB</li>
        </ul>
      </section>

      {/* WORK */}
      <section className="wd-section">
        <h2>My Work</h2>

        <div className="wd-work-grid">
          {websites.map((site, index) => (
            <a
              key={index}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="wd-work-card"
            >
              <img src={site.image} alt={site.title} className="wd-work-image" />

              <div className="wd-work-content">
                <p>{site.title}</p>
                <span>{site.type}</span>
              </div>
            </a>
          ))}
        </div>

        {/* SHOW MORE BUTTON */}
        <div
          className="myWork-show-more"
          onClick={() => navigate("/work/web-design")}
        >
          Show More
        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section className="wd-section">
        <h2>Achievements</h2>
        <ul>
          <li>Designed multiple responsive websites</li>
          <li>Experience with both React and Jawascript</li>
          <li>Improved client engagement through clean UI/UX</li>
          <li>Customized AI Chat Assistant Implimentation</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="wd-cta">
        <h2>Want a Professional Website?</h2>
        <p>
          Let’s design and build a site that represents your brand perfectly.
        </p>
      </section>

      <br />
    </div>
  );
};

export default WebDesign;
