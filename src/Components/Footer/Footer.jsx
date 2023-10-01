import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you plan to use it for routing
import './footer.css';
import { twitter, linkedin, mail, medium, hashnode, youtube, github, gfg, leetcode } from './socialssvg/index';

const Footer = () => {
  // Create a new Date object
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
// console.log(currentYear);
  return (
    <div className='Footer-main-div' id='footer'>
      <h1>Contact Me</h1>
      <div className='Footer-main-div-socials'>
        <a href="https://twitter.com/sajal_batra" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt='' />
        </a>
        <a href="https://www.linkedin.com/in/sajal-batra" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='' />
        </a>
        <a href="mailto:sajalbatra7l@example.com">
          <img src={mail} alt='' />
        </a>
        <a href="https://sajalbatra.medium.com/" target="_blank" rel="noopener noreferrer">
          <img src={medium} alt='' />
        </a>
        <a href="https://sajalbatra.hashnode.dev/" target="_blank" rel="noopener noreferrer">
          <img src={hashnode} alt='' />
        </a>
        <a href="https://github.com/sajalbatra" target="_blank" rel="noopener noreferrer">
          <img src={github} alt='' />
        </a>
        <a href="https://www.youtube.com/@sajalbatra" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt='' />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/batrasmgwk/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank" rel="noopener noreferrer">
          <img src={gfg} alt='' />
        </a>
        <a href="https://leetcode.com/sajal7/" target="_blank" rel="noopener noreferrer">
          <img src={leetcode} alt='' />
        </a>
      </div>
      
      <p>@{currentYear}</p>
      <p  id='Developedwithlove'>Developed & Designed with <span>♥ </span>by Sajal</p>
    </div>
  );
}

export default Footer;
