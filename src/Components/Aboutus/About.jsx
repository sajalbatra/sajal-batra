import React from 'react'
import "./about.css"
import sajalabout from "../../Styles/sajalheadshot.jpg"

const About = () => {
  return (
    <div className='about-us-page-heading' id='about'>
    <h1>About Me</h1>
    <div className='about-us-page'>
      <div className='about-us-page-left'>
      <img src={sajalabout} alt='sajal-about'/>
      </div>
      <div className='about-us-page-right'>
      <h1>Bit about me</h1>
      <p>
      I'm Sajal Batra, a dedicated full-stack developer and UI/UX enthusiast currently pursuing a B.Tech in Computer Science at SRM University. I'm passionate about innovation, workshops, and sharing tech insights on my YouTube channel. Join me in the world of software development and technology advancement.
      </p>
      </div>
    </div>
    </div>
  )
}

export default About