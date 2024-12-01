import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container footerContainer">
        <div className="footerFadedText">Dishank Mahajan</div>
        <div className="linkContainer">
          <div>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#skills">Skills</a>
          </div>
          <div>
            <a href="#contactMe">Contact Me</a>
          </div>
        </div>
        <div className="iconContainer">
          <a href="https://www.linkedin.com/in/dishank-mahajan-56a0a3262/?originalSubdomain=in" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://github.com/DishankM?tab=repositories" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="dishankmahajan424@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
