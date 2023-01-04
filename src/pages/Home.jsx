import React, { useState } from "react";
import Collection from "../components/Collection/Collection";
import Details from "../components/Details/Details";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import "./Home.css";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{ backgroundColor: "black" }}>
      {showModal && (
        <Details
          showModal={(res) => {
            setShowModal(res);
          }}
        />
      )}
      <Navbar />
      <Hero />
      <div className="movies-collection">
        <Collection
          collection="New Realess"
          showModal={(res) => {
            setShowModal(res);
          }}
        />
        <Collection
          collection="Trending"
          showModal={(res) => {
            setShowModal(res);
          }}
        />
      </div>
    </div>
  );
}

export default Home;
