/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Collection.css";

function Collection({ collection, showModal }) {
  const ref = useRef(null);
  const [width, setWidth] = useState();
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    ref.current.addEventListener("scroll", () => {
      setScrollPos(ref.current.scrollLeft);
    });
    return () => {
      ref.current.removeEventListener("scroll", () => {
        setScrollPos(ref.current.scrollLeft);
      });
    };
  }, []);

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
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
        <MovieCard showModal={showModal} />
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
