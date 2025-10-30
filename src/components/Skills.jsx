/* eslint-disable no-unused-vars */
import React from "react";
import "./Skills.css";

// Import skill logos
import HTMLLogo from "../assets/stack/HTML.png";
import CSSLogo from "../assets/stack/CSS.png";
import JSLogo from "../assets/stack/Javascript.svg";
import ReactLogo from "../assets/stack/React.png";
import NodeJsLogo from "../assets/stack/NodeJs.svg";
import MongoDBLogo from "../assets/stack/MongoDB.svg";
import ExpressLogo from "../assets/stack/Express.png";
import TailwindLogo from "../assets/stack/Tailwind.png";
import NextJsLogo from "../assets/stack/NextJsCircle.png";
import Boostrap from "../assets/stack/Bootstrap.svg";
import GitLogo from "../assets/stack/Git.svg";

const Skills = () => {
  const skills = [
    { name: "HTML5", logo: HTMLLogo, level: 95 },
    { name: "CSS3", logo: CSSLogo, level: 90 },
    { name: "JavaScript", logo: JSLogo, level: 85 },
    { name: "React", logo: ReactLogo, level: 80 },
    { name: "Node.js", logo: NodeJsLogo, level: 75 },
    { name: "MongoDB", logo: MongoDBLogo, level: 70 },
    { name: "Express", logo: ExpressLogo, level: 75 },
    { name: "Tailwind", logo: TailwindLogo, level: 85 },
    { name: "Next.js", logo: NextJsLogo, level: 70 },
    { name: "Bootstrap", logo: Boostrap, level: 80 },
    { name: "Git", logo: GitLogo, level: 85 },
  ];

  return (
    <section id="skills" className="skillsSection">
      <div className="skillsContainer">
        <div className="skillsHeader">
          <h2 className="skillsTitle">
            My <span className="accentText">Skills</span>
          </h2>
          <p className="skillsSubtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="skillsGrid">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skillCard"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skillLogo">
                <img src={skill.logo} alt={skill.name} />
                <div className="skillGlow"></div>
              </div>
              <div className="skillInfo">
                <h3 className="skillName">{skill.name}</h3>
                <div className="skillBar">
                  <div 
                    className="skillProgress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skillLevel">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skillsCategories">
          <div className="categoryCard">
            <h3>Frontend</h3>
            <p>React, Next.js, Tailwind, JavaScript</p>
          </div>
          <div className="categoryCard">
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB, Python</p>
          </div>
          <div className="categoryCard">
            <h3>Tools</h3>
            <p>Git, VS Code, Postman, Figma</p>
          </div>
        </div>
      </div>
      
      <div className="skillsBackground">
        <div className="floatingTech">
          <div className="techIcon">⚡</div>
          <div className="techIcon">🚀</div>
          <div className="techIcon">💻</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;