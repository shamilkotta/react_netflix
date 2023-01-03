import React from 'react'
import heroImage from "./wednesday.jpg"
import playImage from "./play.png"
import netflixImage from "./netflix.png"
import "./Hero.css"

function Hero() {


  return (
    <div className='hero' style={{ backgroundImage:`url(${heroImage})` }}>
      <div className='hero-content' style={{height: "100%"}}>
        <p> <img height="22px" width="25px" src={netflixImage} alt="netflix" /> SERIES</p>
        <h2>WEDNESDAY</h2>
        <div>
          <button type='button'><img src={playImage} width="12px" alt="play" />Play</button>
          <button type='button'> <span>i</span> More Info</button>
        </div>
      </div>
      
    </div>
  )
}

export default Hero