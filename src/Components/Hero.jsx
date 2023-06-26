import React from 'react'
import "./Hero.css"
import Logo2 from "../assets/images/banner.png"
const Hero = () => {
  return (
    <div className='hero section-padding'>
            <div className='hero-header'>
                <h3>Fitness Club</h3>
                <h1>Sweat, Smile <br/> And Repeat</h1>
                <p>Check out the most effective exercices personalized to you</p>
                <button>Explore Exercices</button>
            </div>
            <div className='hero-logo'>
                <img src={Logo2}/>
            </div>

    </div>
  )
}

export default Hero