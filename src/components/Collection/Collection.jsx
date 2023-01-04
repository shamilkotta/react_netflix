/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Collection.css";
import axios from "../../config/api";

function Collection({ collection, url, showModal, setModalData }) {
  const ref = useRef(null);
  const [width, setWidth] = useState();
  const [scrollPos, setScrollPos] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  useEffect(() => {
    ref.current.addEventListener("scroll", () => {
      setScrollPos(ref.current.scrollLeft);
    });
    return () => {
      ref.current.removeEventListener("scroll", () => {
        setScrollPos(ref.current.scrollLeft);
      });
    };
  }, [scrollPos]);

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const scrollElement = (amount) => {
    ref.current.scrollLeft += amount;
  };

  return (
    <div className="collection-container">
      <h3 className="collection-head">{collection}</h3>
      {scrollPos > 0 && (
        <button
          className="collection-left-arrow"
          type="button"
          onClick={() => {
            scrollElement(-100);
          }}
        >
          {" "}
          <span>&#8249;</span>{" "}
        </button>
      )}
      <div className="collection" ref={ref}>
        {movies.length ? (
          movies.map((ele) => (
            <MovieCard
              img={ele.backdrop_path}
              title={ele.original_title || ele.original_name}
              ele={{
                title: ele.original_title || ele.original_name,
                overview: ele.overview,
                poster: ele.poster_path,
              }}
              showModal={showModal}
              setModalData={setModalData}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {scrollPos + width < 4500 && (
        <button
          className="collection-right-arrow"
          type="button"
          onClick={() => {
            scrollElement(100);
          }}
        >
          {" "}
          <span>&rsaquo;</span>{" "}
        </button>
      )}
    </div>
  );
}

export default Collection;
