// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import './Header.css';
import d from '../assets/Images/userAsset/nameLOGO.png';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={d} alt="Logo" className="logo-img" />
        <div className="logo-glow"></div>
      </div>
      
      <nav>
        <ul className={isMenuActive ? "active" : ""}>
          <li>
            <a href="#projects" onClick={() => setIsMenuActive(false)}>
              <span className="nav-icon">💼</span>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsMenuActive(false)}>
              <span className="nav-icon">⚡</span>
              Skills
            </a>
          </li>
          <li>
            <a href="#contactMe" onClick={() => setIsMenuActive(false)}>
              <span className="nav-icon">📱</span>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      
      <div 
        className={`mobile-menu ${isMenuActive ? 'active' : ''}`}
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="header-particles"></div>
    </header>
  );
};

export default Header;