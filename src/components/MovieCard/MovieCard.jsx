import React from "react";
import brbd from "./brba.jpeg";
import playImg from "./play.png";
import "./MovieCard.css";

function MovieCard() {
  return (
    <div className="movie-card" style={{ backgroundImage: `url(${brbd})` }}>
      <img src={playImg} alt="play" width="50px" />
    </div>
  );
}

export default MovieCard;
