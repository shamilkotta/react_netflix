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
        <Collection />
        <Collection />
      </div>
    </div>
  );
}

export default Home;
