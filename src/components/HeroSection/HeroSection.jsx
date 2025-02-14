import React, { useState } from 'react'
import hero_title from "../../assets/hero_title.png"
import './HeroSection.css'
import { useNavigate } from 'react-router-dom'
export default function HeroSection() {
  const navigate =useNavigate();
  function handleClick(){
    navigate("/tvshows/66732");
  }
  return (
    <div className='hero_section'>
      {/* <img src={hero_banner} alt='' className='banner-image'/> */}
      <video
      src="https://occ-0-2483-3646.1.nflxso.net/so/soa4/935/1538075725687032321.mp4?v=1&amp;e=1737509641&amp;t=TQww8d4GZAqVKaxZQ9PXOa76dSg"
      muted
      loop
      preload="auto"
      style={{
        width: '100%',
        height: '110%',
        objectFit: 'cover',
        position: 'absolute',
        top: '-5%',
        left: '0',
      }}
      autoPlay
    />
      <div className='hero-title'>
        <img src={hero_title} alt='' className='banner-title'/>
        <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
        <div className='hero-btn'>
          <button style={{backgroundColor: 'rgba(255, 0, 0, 0.64)'}} onClick={handleClick}>Watch Now</button>
          <button style={{backgroundColor: 'rgba(184, 180, 180, 0.65)'}} onClick={handleClick}>More Info</button>
        </div>
      </div>
      
    </div>
  )
}
