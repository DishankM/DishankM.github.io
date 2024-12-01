import React from "react";
import './indexs.css'
import d from '../assets/Images/userAsset/D logo.png'
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={d} alt="Logo" />

        <h2 className="logoText">Dishank Mahajan</h2>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contactMe">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
