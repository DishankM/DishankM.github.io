import React from "react";
import './Footer.css'
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
    <div class="footerContent">
        <p>© 2025 Dishenk Mahajan. All rights reserved.</p>
        <div class="socialIcons">
            <a href="https://www.linkedin.com/in/dishank-mahajan-56a0a3262/">
            <FontAwesomeIcon icon={faLinkedin} className="icon" /></a>

            <a href="https://github.com/DishankM">
            <FontAwesomeIcon icon={faGithub} className="icon" /></a>

            <a href="https://x.com/i/flow/login?mx=2">
            <FontAwesomeIcon icon={faTwitter} className="icon" /></a>

            <a href="https://www.instagram.com/dishank_mahajan/">
            <FontAwesomeIcon icon={faInstagram} className="icon" /></a>
        </div>
    </div>
    <div class="footerFadedText">Connect</div>
    <div class="footerWaves"></div>
</footer>
  );
};

export default Footer;
