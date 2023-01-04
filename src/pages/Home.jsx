/* eslint-disable react/no-array-index-key */

import React, { useState } from "react";
import Collection from "../components/Collection/Collection";
import Details from "../components/Details/Details";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import "./Home.css";
import collection from "../utils/collection";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  return (
    <div style={{ backgroundColor: "black" }}>
      {showModal && (
        <Details
          showModal={(res) => {
            setShowModal(res);
          }}
          data={modalData}
        />
      )}
      <Navbar />
      <Hero />
      <div className="movies-collection">
        {collection.map((ele, index) => (
          <Collection
            key={index}
            collection={ele.collection}
            url={ele.url}
            showModal={(res) => {
              setShowModal(res);
            }}
            setModalData={(res) => {
              setModalData(res);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
