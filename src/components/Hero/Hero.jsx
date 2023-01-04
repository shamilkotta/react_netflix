import React from "react";
import heroContent from "./trailer.mp4";
import playImage from "./play.png";
import netflixImage from "./netflix.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <video className="heroContent" autoPlay muted loop>
        <source src={heroContent} type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content" style={{ height: "100%" }}>
        <p>
          {" "}
          <img
            height="22px"
            width="25px"
            src={netflixImage}
            alt="netflix"
          />{" "}
          SERIES
        </p>
        <h2>WEDNESDAY</h2>
        <div>
          <button type="button">
            <img src={playImage} width="12px" alt="play" />
            Play
          </button>
          <button type="button">
            {" "}
            <span>i</span> More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
