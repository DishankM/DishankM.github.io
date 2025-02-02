import React, { useEffect } from "react";
import Typed from "typed.js";
import './HeroSection.css'
import dots from '../assets/Images/userAsset/dots.png'
import cube from '../assets/Images/userAsset/cube.png'
import circle from '../assets/Images/userAsset/circle.png'
import zigzags from '../assets/Images/userAsset/zigzags.png'
import plus from '../assets/Images/userAsset/plus.png'
import Dishank from '../assets/Images/userAsset/Dishank.jpg'

const HeroSection = () => {
  useEffect(() => {
    const typed = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Data Analytics",
        "Coder",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
      backDelay: 1000,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="heroSection">
      <h3 className="fadedText absolute">Dishank Mahajan</h3>
      <div className="infoContainer">
        <div className="heading">Hi! My Name is Dishank Mahajan</div>
        <div className="heading subHeading">
          I am a <span className="role"></span>
        </div>
        <p className="desc">
          I’m a software developer and here is my portfolio website. Here
          you’ll learn about my journey as a software developer.
        </p>
        <div className="btn">Hire Me</div>
      </div>
      {/* Add your icons and images */}

      <div className="imgContainer">
      <div className="absolute icons iconDots">
        <img src={dots} alt="" />
      </div>
      <div className="absolute icons icon-cube">
        <img src={cube} alt="" />
      </div>
      <div className="absolute icons icon-circle">
        <img src={circle} alt="" />
      </div>
      <div className="absolute icons iconZigZag">
        <img src={zigzags} alt="" />
      </div>
      <div className="absolute icons icon-plus">
        <img src={plus} alt="" />
      </div>
      
      <div className="">
        <div className="userImage">
          {/* <img src={Dishank} width="345px" height="390px" alt="" /> */}
          <img src={Dishank} alt="" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
