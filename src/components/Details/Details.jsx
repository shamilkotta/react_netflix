/* eslint-disable react/prop-types */

import React from "react";
import "./Details.css";
import constants from "../../utils/constants";

function Details({ showModal, data }) {
  return (
    <div className="details">
      <div className="details-card">
        <img
          src={`${constants.imgUrl}${data.poster}`}
          alt="poster"
          className="details-poster"
        />
        <div className="details-data">
          <button
            type="button"
            className="details-close"
            onClick={() => showModal(false)}
          >
            X
          </button>
          <div>
            <h3>{data.title}</h3>
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
