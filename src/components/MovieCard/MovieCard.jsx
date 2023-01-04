/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import brbd from "./brba.jpeg";
import playImg from "./play.png";
import "./MovieCard.css";

function MovieCard({ showModal }) {
  return (
    <div
      className="movie-card"
      style={{ backgroundImage: `url(${brbd})` }}
      onClick={() => {
        showModal(true);
      }}
    >
      <img src={playImg} alt="play" width="50px" />
    </div>
  );
}

export default MovieCard;
