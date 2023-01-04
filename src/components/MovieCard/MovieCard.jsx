/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import constants from "../../utils/constants";
import playImg from "./play.png";
import "./MovieCard.css";

function MovieCard({ img, title, ele, showModal, setModalData }) {
  return (
    <div
      className="movie-card"
      style={{ backgroundImage: `url(${constants.imgUrl}${img})` }}
      onClick={() => {
        setModalData(ele);
        showModal(true);
      }}
    >
      <img src={playImg} alt="play" width="50px" />
      <h3>{title}</h3>
    </div>
  );
}

export default MovieCard;
