import React from "react";
import "./graphicDesign.css";
import theme_pattern from "../../../assets/theme_pattern.svg";

import design1 from "../../../assets/design1.png";
import design2 from "../../../assets/design2.png";
import design3 from "../../../assets/design3.png";

const designs = [
  {
    title: "Poster Design",
    type: "Client Work",
    image: design1
  },
  {
    title: "Invite card design",
    type: "Client Work",
    image: design2
  },
  {
    title: "Book Cover Design",
    type: "Made During A Compitition",
    image: design3
  }
];

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

      {/* SELECTED WORK */}
      <section className="gd-section">
        <h2>My Work</h2>

        <div className="gd-work-grid">
          {designs.map((design, index) => (
            <div key={index} className="gd-work-card">

              <div className="gd-image-wrapper">
                <img
                  src={design.image}
                  alt={design.title}
                  className="gd-work-image"
                />
              </div>

              <div className="gd-work-content">
                <p>{design.title}</p>
                <span>{design.type}</span>
              </div>

            </div>
          ))}
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