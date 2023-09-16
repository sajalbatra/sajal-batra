import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you plan to use it for routing
import './footer.css';
import { twitter, linkedin, mail, medium, hashnode, youtube, github, gfg, leetcode } from './socialssvg/index';

const Footer = () => {
  // Create a new Date object
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
console.log(currentYear);
  return (
    <div className='Footer-main-div'>
      <h1>Contact Me</h1>
      <div className='Footer-main-div-socials'>
        <a href="https://twitter.com/your-twitter-url-here" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt='' />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-url-here" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='' />
        </a>
        <a href="mailto:youremail@example.com">
          <img src={mail} alt='' />
        </a>
        <a href="https://medium.com/your-medium-url-here" target="_blank" rel="noopener noreferrer">
          <img src={medium} alt='' />
        </a>
        <a href="https://hashnode.com/@your-hashnode-username-here" target="_blank" rel="noopener noreferrer">
          <img src={hashnode} alt='' />
        </a>
        <a href="https://github.com/your-github-username-here" target="_blank" rel="noopener noreferrer">
          <img src={github} alt='' />
        </a>
        <a href="https://www.youtube.com/c/your-youtube-channel-here" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt='' />
        </a>
        <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
          <img src={gfg} alt='' />
        </a>
        <a href="https://leetcode.com/your-leetcode-username-here" target="_blank" rel="noopener noreferrer">
          <img src={leetcode} alt='' />
        </a>
      </div>
      
      <p>@{currentYear}</p>
      <p  id='Developedwithlove'>Developed & Designed with <span>♥ </span>by Sajal</p>
    </div>
  );
}

export default Footer;
