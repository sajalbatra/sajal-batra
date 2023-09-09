import { FaBars } from 'react-icons/fa';
import "./header.css";
import { useState, useEffect } from 'react';

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
    <div className='header-desktop'>
      <div className='header-desktop-left'>
        <p>Sajal Batra</p>
      </div>
      <div className='header-desktop-right'>
        {isMobile && (
          <>
            <FaBars onClick={toggleMobileMenu} className='mobile-toggle' />
            {showMobileMenu && (
              <div className='mobile-menu'>
                <p>Home</p>
                <p>About</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Resume</p>
                <p className="mobile-menu-last-element">Contact Me</p>
              </div>
            )}
          </>
        )}
        {!isMobile && (
          <>
          
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Resume</p>
            <p className="header-desktop-right-last-element">Contact Me</p>
          
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
