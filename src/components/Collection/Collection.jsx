import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Collection.css";

function Collection() {
  return (
    <div className="collection-container">
      <h3 className="collection-head">New Releases</h3>
      <div className="collection">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default Collection;
