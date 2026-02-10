import React from "react";
import "./dataEntry.css";
import theme_pattern from "../../../assets/theme_pattern.svg";
const DataEntry = () => {
  return (
    <div className="data-entry-page">

      {/* HERO */}
      <section className="de-hero">
        <h1>Data Entry</h1>
        <img src={theme_pattern} alt="" />
        <p>
          I provide accurate and organized data entry services, ensuring
          your spreadsheets and documents are clean, structured, and easy to use.
        </p>
      </section>

      {/* JOURNEY */}
      <section className="de-section">
        <h2>My Data Entry Journey</h2>
        <p>
          I began data entry to help small businesses manage information. Over time,
          I’ve optimized speed, accuracy, and attention to detail to deliver high-quality work.
        </p>
      </section>

      {/* TOOLS */}
      <section className="de-section">
        <h2>Tools & Software</h2>
        <ul className="de-tools">
          <li>Microsoft Excel</li>
          <li>Google Sheets</li>
          <li>MS Word / Docs</li>
          <li>Google Forms</li>
        </ul>
      </section>

      {/* WORK */}
      <section className="de-section">
        <h2>Sample Work</h2>
        <div className="de-work-grid">
          <div className="de-work-card">
            <p>Spreadsheet Organization</p>
            <span>Large datasets / Clean formatting</span>
          </div>
          <div className="de-work-card">
            <p>Data Cleansing</p>
            <span>Duplicate removal / Consistency checks</span>
          </div>
          <div className="de-work-card">
            <p>Database Entry</p>
            <span>CRM / ERP input</span>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="de-section">
        <h2>Achievements</h2>
        <ul>
          <li>High accuracy in data entry tasks</li>
          <li>Managed large volumes of data efficiently</li>
          <li>Delivered clean, structured spreadsheets for clients</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="de-cta">
        <h2>Need Data Entry Services?</h2>
        <p>
          Let’s organize your data efficiently and accurately.
        </p>
      </section>

      <br />
    </div>
  );
};

export default DataEntry;
