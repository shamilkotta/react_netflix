import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
