import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          1st International Conference <br />
          On{" "}
        </h1>
        <h2>
          Sustainable Development in <br />
          Management, Engineering, and Life Sciences <br />
          (SDMEL-2025) <br />
          June 7, 2025
        </h2>
        <p className="hero-description">
          Join this conference on HARIDWAR UNIVERSITY
          <br />
          5th Km, Roorkee-Haridwar Canal Road Roorkee,
        </p>
        <div className="hero-buttons">
          <button className="pre-register-btn">Call for Papers</button>
          <button className="schedule-btn">Schedule</button>
        </div>
      </div>

      <div className="hero-background">
        <img
          src="/path-to-your-background-image.png"
          alt="Background"
          className="background-image"
        />
      </div>
    </div>
  );
}
