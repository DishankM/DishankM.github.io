/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import './HeroSection.css';
import Dishank from '../assets/Images/userAsset/Dishank.jpg';

const HeroSection = () => {
  const typedRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Data Analytics",
        "Coder",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      backDelay: 1500,
      smartBackspace: true,
    });

    // Parallax effect
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      typed.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="heroSection" ref={sectionRef}>
      <div className="heroBackground">
        <div className="floatingOrbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>
      
      <div className="contentWrapper">
        <div className="infoContainer">
          <div className="greetingText">Hello, I&lsquo;m</div>
          <h1 className="heading">
            Dishank <span className="gradientText">Mahajan</span>
          </h1>
          <div className="subHeading">
            I am a <span ref={typedRef} className="role"></span>
          </div>
          <p className="desc">
            Passionate about creating digital experiences that blend innovation with functionality. 
            I specialize in modern web technologies and love bringing ideas to life through code.
          </p>
          <div className="ctaButtons">
            <button className="btn primaryBtn">
              <a href="https://drive.google.com/file/d/1jb6pXWJrgIu6qNWSEnGozoAq3JuVPgzk/view?usp=drivesdk">
                📄 View Resume
              </a>
            </button>
            <button className="btn secondaryBtn">
              <a href="#projects">🚀 View Projects</a>
            </button>
          </div>
          <div className="socialQuick">
            <a href="https://github.com/DishankM" className="socialLink">🐙 GitHub</a>
            <a href="https://www.linkedin.com/in/dishank-mahajan-56a0a3262/" className="socialLink">💼 LinkedIn</a>
          </div>
        </div>
        
        <div className="imgContainer">
          <div className="imageWrapper">
            <img src={Dishank} alt="Dishank Mahajan" className="userImage" />
            <div className="imageGlow"></div>
            <div className="floatingElements">
              <div className="floatElement fe-1">⚡</div>
              <div className="floatElement fe-2">🚀</div>
              <div className="floatElement fe-3">💻</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scrollIndicator">
        <div className="scrollArrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;