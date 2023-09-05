import React from 'react'
import "./home.css"
import sajalimg1 from "../../Styles/sajalimg1.png"
const Home = () => {
  return (
    <div className='home-main-div'>
        <div className='home-left-div'>
            <p className='home-left-div-hello'>Hello! <span>👋</span></p>
            <p className='home-left-div-name'>I'm <span>Sajal</span></p>
            <p className='home-left-div-bio'>UI/UX Designer, Full stack Developer </p>
        </div>
        <div className='home-right-div'>
        <img src={sajalimg1} alt='sajal1'/>
        </div>
        <div  className='home-buttons'>
        <div className='Download_CV'><p>Download CV</p></div>
        <div className='Get_in_touch'><p>Get in touch</p></div>
        </div>
    </div>
  )
}

export default Home