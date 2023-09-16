import { FaBars } from 'react-icons/fa';
import './header.css';
import { useState, useEffect } from 'react';

const Header = ({ scrollTo }) => {
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

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setShowMobileMenu(false); // Close mobile menu after clicking a link
    }
  };

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
                <p onClick={() => scrollToSection('home')}>Home</p>
                <p onClick={() => scrollToSection('about')}>About</p>
                <p onClick={() => scrollToSection('skills')}>Skills</p>
                <p onClick={() => scrollToSection('projects')}>Projects</p>
                <p onClick={() => scrollToSection('resume')}>Resume</p>
                <p onClick={() => scrollToSection('contact')}>Contact Me</p>
              </div>
            )}
          </>
        )}
        {!isMobile && (
          <>
            <p onClick={() => scrollToSection('home')}>Home</p>
            <p onClick={() => scrollToSection('about')}>About</p>
            <p onClick={() => scrollToSection('skills')}>Skills</p>
            <p onClick={() => scrollToSection('projects')}>Projects</p>
            <p onClick={() => scrollToSection('resume')}>Resume</p>
            <p onClick={() => scrollToSection('contact')}>Contact Me</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
