import React from "react";
import "./graphicDesign.css";
import theme_pattern from "../../../assets/theme_pattern.svg";
const GraphicDesign = () => {
  return (
    <div className="graphic-design-page">

      {/* HERO */}
      <section className="gd-hero">
        <h1>Graphic Design</h1>
        <img src={theme_pattern} alt="" />
        <p>
          I design clean, modern, and visually strong graphics that help brands
          stand out — from social media creatives to thumbnails and posters.
        </p>
      </section>

      {/* JOURNEY */}
      <section className="gd-section">
        <h2>My Design Journey</h2>
        <p>
          I started graphic design by creating thumbnails and posters for small
          creators. Over time, I refined my style focusing on clarity, contrast,
          and brand consistency.
        </p>
      </section>

      {/* TOOLS */}
      <section className="gd-section">
        <h2>Tools & Software</h2>
        <ul className="gd-tools">
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Figma</li>
          <li>Canva (Advanced)</li>
        </ul>
      </section>

      {/* WORK */}
      <section className="gd-section">
        <h2>Selected Work</h2>
        <div className="gd-work-grid">
          <div className="gd-work-card">
            <p>YouTube Thumbnail</p>
            <span>High CTR focused design</span>
          </div>
          <div className="gd-work-card">
            <p>Instagram Post</p>
            <span>Brand-aligned visuals</span>
          </div>
          <div className="gd-work-card">
            <p>Poster Design</p>
            <span>Event & promotion creatives</span>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="gd-section">
        <h2>Achievements</h2>
        <ul>
          <li>Designed 100+ thumbnails & creatives</li>
          <li>Worked with multiple small creators</li>
          <li>Improved audience engagement through visuals</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="gd-cta">
        <h2>Need Creative Designs?</h2>
        <p>
          Let’s create visuals that actually convert and represent your brand
          professionally.
        </p>
      </section>

      <br />
    </div>
  );
};

export default GraphicDesign;
