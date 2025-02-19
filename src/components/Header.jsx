import React, { useState } from "react";
import './Header.css';
import d from '../assets/Images/userAsset/nameLOGO.png';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src={d} alt="Logo" />
        
      </div>
      
      <nav>
        <ul className={isMenuActive ? "active" : ""}>
          <li><a href="#projects" onClick={() => setIsMenuActive(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsMenuActive(false)}>Skills</a></li>
          <li><a href="#contactMe" onClick={() => setIsMenuActive(false)}>Contact Me</a></li>
        </ul>
      </nav>
      
      <div 
        className="mobile-menu" 
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        ☰
      </div>
    </header>
  );
};

export default Header;