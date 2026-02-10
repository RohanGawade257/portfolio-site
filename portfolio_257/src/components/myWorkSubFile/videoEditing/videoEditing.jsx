import React from 'react'
import './videoEditing.css'
import theme_pattern from "../../../assets/theme_pattern.svg";

const videos = [
  {
    title: "Project One",
    type: "Short-form / Reel / YouTube",
    youtubeId: "EatYikn2Ink"
  },
  {
    title: "Project Two",
    type: "Cinematic / Montage",
    youtubeId: "Kc3Ca5B2DgQ"
  },
  {
    title: "Project Three",
    type: "Client / Personal Project",
    youtubeId: "KgY4x8D3El0"
  }
];

function VideoEditing() {
  return (
    <div className="video-editing-page">

      {/* HERO */}
      <div className="ve-hero">
        <h1>Video Editing</h1>
        <img src={theme_pattern} alt="" />
        <p>
          I help creators and brands turn raw footage into engaging,
          high-quality videos that hold attention and tell a clear story.
        </p>
      </div>

      {/* JOURNEY */}
      <section className="ve-section">
        <h2>My Editing Journey</h2>
        <p>
          I started video editing out of curiosity and slowly turned it into
          a serious skill, focusing on pacing, storytelling, and clean visuals.
        </p>
      </section>

      {/* TOOLS */}
      <section className="ve-section">
        <h2>Software & Tools</h2>
        <ul className="ve-tools">
          <li>Adobe Premiere Pro</li>
          <li>Adobe After Effects</li>
          <li>DaVinci Resolve</li>
          <li>CapCut</li>
          <li>Photoshop</li>
        </ul>
      </section>

      {/* WORK */}
      <section className="ve-section">
        <h2>My Work</h2>

        <div className="ve-work-grid">
          {videos.map((video, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ve-work-card"
            >
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
              />
              <p>{video.title}</p>
              <span>{video.type}</span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ve-cta">
        <h2>Want to work together?</h2>
        <p>
          If you’re looking for clean, engaging, and purposeful video edits,
          let’s connect.
        </p>
      </section>
      
      <br />
    </div>
  )
}


export default VideoEditing
