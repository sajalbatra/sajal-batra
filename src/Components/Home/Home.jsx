import React from 'react'
import "./home.css"
import imgsmilesajalbgno from "../../Styles/portfoliohome.jpg"
const Home = () => {
  return (
    <div className='home-main-div' id='home'>
        <div className='home-left-div'>
            <p className='home-left-div-hello'>Hello! <span>👋</span></p>
            <p className='home-left-div-name'>I'm <span>Sajal</span></p>
            <p className='home-left-div-bio'>UI/UX Designer, Full stack Developer </p>
        </div>
        <div className='home-right-div'>
        <img src={imgsmilesajalbgno} alt='sajal1'/>
        </div>
        <div  className='home-buttons'>
          <a href='https://www.sajalbatra.design'>
        <div className='Download_CV'><p>Download CV</p>
        </div>
        </a>
        <a href='https://www.linkedin.com/in/sajal-batra-95314a25b/'>
        <div className='Get_in_touch'><p>Get in touch</p></div>
        </a>
        </div>
    </div>
  )
}

export default Home