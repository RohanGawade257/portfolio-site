import React from "react";
import "./photoEditing.css";
import theme_pattern from "../../../assets/theme_pattern.svg";
const PhotoEditing = () => {
  return (
    <div className="photo-editing-page">

      {/* HERO */}
      <section className="pe-hero">
        <h1>Photo Editing</h1>
        <img src={theme_pattern} alt="" />
        <p>
          I retouch and enhance photos, adjusting colors, lighting, and details
          to make images sharp, clean, and professional.
        </p>
      </section>

      {/* JOURNEY */}
      <section className="pe-section">
        <h2>My Photo Editing Journey</h2>
        <p>
          I started editing photos to improve visual storytelling. I now specialize
          in retouching, color correction, and enhancing images for professional
          or personal use.
        </p>
      </section>

      {/* TOOLS */}
      <section className="pe-section">
        <h2>Tools & Software</h2>
        <ul className="pe-tools">
          <li>Adobe Photoshop</li>
          <li>Adobe Lightroom</li>
          <li>Affinity Photo</li>
        </ul>
      </section>

      {/* WORK */}
      <section className="pe-section">
        <h2>Selected Work</h2>
        <div className="pe-work-grid">
          <div className="pe-work-card">
            <p>Portrait Retouch</p>
            <span>Color / Lighting / Cleanup</span>
          </div>
          <div className="pe-work-card">
            <p>Product Photography</p>
            <span>Editing / Background Removal</span>
          </div>
          <div className="pe-work-card">
            <p>Event Photos</p>
            <span>Enhancement / Color Grading</span>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="pe-section">
        <h2>Achievements</h2>
        <ul>
          <li>Edited dozens of portraits and product images</li>
          <li>Color correction and enhancement expert</li>
          <li>Delivered high-quality visuals for clients</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="pe-cta">
        <h2>Need Photo Editing?</h2>
        <p>
          Let’s make your images look polished and professional.
        </p>
      </section>

      <br />
    </div>
  );
};

export default PhotoEditing;
