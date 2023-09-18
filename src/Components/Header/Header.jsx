import { FaBars } from 'react-icons/fa';
import './header.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// import { Home, About, Technames, DomainName, Footer } from '../index';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`header-desktop${showMobileMenu ? ' open' : ''}`}>
      <div className='header-desktop-left'>
        <p>Sajal Batra</p>
      </div>
      <div className='header-desktop-right'>
        {isMobile && (
          <>
            <FaBars onClick={toggleMobileMenu} className='mobile-toggle' />
            {showMobileMenu && (
              <div className='mobile-menu'>
                <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
                  <p>Home</p>
                </Link>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
                  <p>About</p>
                </Link>
                <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
                  <p>Skills</p>
                </Link>
                <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                  <p>Projects</p>
                </Link>
                <Link to="resume" spy={true} smooth={true} offset={-50} duration={500}>
                  <p>Resume</p>
                </Link>
                <Link to="footer" spy={true} smooth={true} offset={50} duration={1000}>
                  <p>Contact Me</p>
                </Link>
              </div>
            )}
          </>
        )}
        {!isMobile && (
          <>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              <p>Home</p>
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
              <p>About</p>
            </Link>
            <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
              <p>Skills</p>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
              <p>Projects</p>
            </Link>
            <Link to="resume" spy={true} smooth={true} offset={-50} duration={500}>
              <p>Resume</p>
            </Link>
            <Link to="footer" spy={true} smooth={true} offset={150} duration={500}>
              <p>Contact Me</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
