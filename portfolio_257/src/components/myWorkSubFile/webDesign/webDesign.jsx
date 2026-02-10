import React from "react";
import "./webDesign.css";
import theme_pattern from "../../../assets/theme_pattern.svg";

const websites = [
  {
    title: "Real-time Collaborative App",
    type: "React / Socket.io / Canvas",
    link: "https://code-crafts-real-time-collaborative.vercel.app"
  },
  {
    title: "Portfolio Website",
    type: "React / Responsive",
    link: "https://portfolio-site-nine-mu-51.vercel.app/"
  },
  {
    title: "Expense Tracker",
    type: "React / State Management",
    link: "https://expense-tracker-chi-five-64.vercel.app/"
  }
];

const WebDesign = () => {
  return (
    <div className="web-design-page">

      {/* HERO */}
      <section className="wd-hero">
        <h1>Web Design</h1>
        <img src={theme_pattern} alt="" />
        <p>
          I create responsive, user-friendly websites that are optimized for
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
          <li>WordPress / Webflow</li>
        </ul>
      </section>

      {/* WORK (CONNECTED LIKE VIDEO EDITING) */}
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
              <p>{site.title}</p>
              <span>{site.type}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="wd-section">
        <h2>Achievements</h2>
        <ul>
          <li>Designed multiple responsive websites</li>
          <li>Experience with both React and WordPress</li>
          <li>Improved client engagement through clean UI/UX</li>
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
