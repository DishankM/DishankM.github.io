/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart, faRocket } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/dishank-mahajan-56a0a3262/",
      name: "LinkedIn",
      color: "#0077b5"
    },
    {
      icon: faGithub,
      url: "https://github.com/DishankM",
      name: "GitHub",
      color: "#f5f5f5"
    },
    {
      icon: faTwitter,
      url: "https://x.com/i/flow/login?mx=2",
      name: "Twitter",
      color: "#1da1f2"
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/dishank_mahajan/",
      name: "Instagram",
      color: "#e4405f"
    },
    {
      icon: faEnvelope,
      url: "mailto:dishankmahajan2004@gmail.com",
      name: "Email",
      color: "#ea4335"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contactMe" }
  ];

  return (
    <footer className="footer">
      <div className="footerBackground">
        <div className="footerOrbs">
          <div className="footerOrb orb-1"></div>
          <div className="footerOrb orb-2"></div>
          <div className="footerOrb orb-3"></div>
        </div>
      </div>

      <div className="footerContainer">
        <div className="footerContent">
          <div className="footerMain">
            <div className="footerBrand">
              <div className="brandLogo">
                <FontAwesomeIcon icon={faRocket} className="logoIcon" />
                <span className="brandName">Dishank</span>
              </div>
              <p className="brandTagline">
                Full Stack Developer & Creative Problem Solver
              </p>
              <p className="brandDescription">
                Passionate about creating digital experiences that make a difference. 
                Let's build something amazing together!
              </p>
            </div>

            <div className="footerLinks">
              <h3 className="linksTitle">Quick Links</h3>
              <ul className="linksList">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="footerLink"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footerConnect">
              <h3 className="connectTitle">Let&apos;s Connect</h3>
              <p className="connectText">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <div className="socialIcons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialIcon"
                    style={{ '--social-color': social.color }}
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="icon" />
                    <div className="socialTooltip">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footerBottom">
            <div className="copyright">
              <p>
                © {currentYear} Dishank Mahajan. Made with{" "}
                <FontAwesomeIcon icon={faHeart} className="heartIcon" />{" "}
                using React & Tailwind
              </p>
            </div>
            <div className="footerStats">
              <div className="stat">
                <span className="statNumber">10+</span>
                <span className="statLabel">Projects</span>
              </div>
              <div className="stat">
                <span className="statNumber">100%</span>
                <span className="statLabel">Passionate</span>
              </div>
              <div className="stat">
                <span className="statNumber">24/7</span>
                <span className="statLabel">Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerFadedText">Connect</div>
      <div className="footerWaves"></div>
      
      <div className="scrollToTop">
        <button 
          className="scrollBtn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faRocket} className="scrollIcon" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;