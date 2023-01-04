import React from "react";
import Collection from "../components/Collection/Collection";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <Hero />
      <div className="movies-collection">
        <Collection collection="New Realess" />
        <Collection collection="Trending" />
      </div>
    </div>
  );
}

export default Home;
