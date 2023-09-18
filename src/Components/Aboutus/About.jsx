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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
      </div>
    </div>
    </div>
  )
}

export default About