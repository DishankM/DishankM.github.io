import React from "react";
import './Skills.css'
import vector from '../assets/Images/userAsset/blob vector.png'

import reactP from '../assets/stack/React.png'

import boostrap from '../assets/stack/Bootstrap.svg'
import express from '../assets/stack/Express.png'
import css from '../assets/stack/CSS.png'
import html from '../assets/stack/HTML.png'
import javascript from '../assets/stack/Javascript.svg'
import github from '../assets/stack/Github.svg'
import git from '../assets/stack/Git.svg'
import MongoDB from '../assets/stack/MongoDB.svg'
import nodejs from '../assets/stack/NodeJs.svg'
import Tailwind from '../assets/stack/Tailwind.png'
import typescript from '../assets/stack/Typescript.svg'
import vercel from '../assets/stack/Vercel.svg'



const Skills = () => {
  return (
    <section id="skills" className="skillContainer">
      <div className="skillFadedText absolute">Skills</div>
      <div className="leftSkillContainer">
        <h2 className="skillHeading">
          <span>M</span>e and <br />My Tech Stack
        </h2>
        <div className="skillSubHeading">
          <p> I am a third-year B.Tech CSE student passionate about web development and AI.
          My expertise includes building web applications using React, Tailwind, and backend databases.
          I love crafting user-centric designs and solving real-world problems through technology.</p>
        </div>
      </div>
      <div className="rightSkillContainer">
        <img src={vector} className="blobStyle" alt="" />

        <img src={reactP} className="skillsLogo" alt="" />
        <img src={boostrap} className="skillsLogo" alt="" />
        <img src={express} className="skillsLogo" alt="" />
        <img src={css} className="skillsLogo" alt="" />
        <img src={html} className="skillsLogo" alt="" />
        <img src={javascript} className="skillsLogo" alt="" />
        <img src={github} className="skillsLogo" alt="" />
        <img src={git} className="skillsLogo" alt="" />
        <img src={MongoDB} className="skillsLogo" alt="" />
        <img src={nodejs} className="skillsLogo" alt="" />
        <img src={Tailwind} className="skillsLogo" alt="" />
        <img src={typescript} className="skillsLogo" alt="" />
        <img src={vercel} className="skillsLogo" alt="" />
      </div>
    </section>
  );
};

export default Skills;
