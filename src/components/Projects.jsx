import React from "react";
import "./indexs.css";

// Import project and skill images
import HTMLLogo from "../assets/stack/HTML.png";
import CSSLogo from "../assets/stack/CSS.png";
import JSLogo from "../assets/stack/Javascript.svg";
import ExpressLogo from "../assets/stack/Express.png";
import NextJsLogo from "../assets/stack/NextJsCircle.png";
import TailwindLogo from "../assets/stack/Tailwind.png";
import NodeJsLogo from "../assets/stack/NodeJs.svg";
import MongoDBLogo from "../assets/stack/MongoDB.svg";
import ReduxLogo from "../assets/stack/Redux.svg";
import VercelLogo from "../assets/stack/Vercel.svg";

const Projects = () => {
  return (
    <section id="projects" className="projectSection">
      <h2 className="projectTitle">Projects</h2>
      <div className="projectContainer">
        {/* Project 1 */}
        <div className="projectCard" id="project1">
          <div className="projectNumber rightNumber">01</div>
          <div className="projectContent leftProjectContent">
            <div className="projectSkillsContainer">
              <img className="projectSkill" src={HTMLLogo} alt="HTML" />
              <img className="projectSkill" src={CSSLogo} alt="CSS" />
              <img className="projectSkill" src={JSLogo} alt="Javascript" />
              <img className="projectSkill" src={ExpressLogo} alt="Express" />
              <img className="projectSkill" src={NextJsLogo} alt="Next.js" />
              <img className="projectSkill" src={TailwindLogo} alt="Tailwind" />
              <img className="projectSkill" src={NodeJsLogo} alt="Node.js" />
              <img className="projectSkill" src={MongoDBLogo} alt="MongoDB" />
              <img className="projectSkill" src={ReduxLogo} alt="Redux" />
              <img className="projectSkill" src={VercelLogo} alt="Vercel" />
            </div>
            <h2 className="projectHeading">Add To Card</h2>
            <p className="projectSubHeading">
            this is a React-based e-commerce web application, typically called an "Add to Cart" project. which is use to Add to Cart" or "Remove Item."
            </p>
            <div className="btnGroup">
              <button className="btn btnProject">Read More</button>
              <a href="">
                <i title="GitHubLink" className="fa-brands fa-github icon"></i>
              </a>
              <a href="">
                <i title="Live Link" className="fa-solid fa-link icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="projectCard" id="project2">
          <div className="projectNumber leftNumber">02</div>
          <div className="projectContent rightProjectContent">
            <div className="projectSkillsContainer">
              <img className="projectSkill" src={HTMLLogo} alt="HTML" />
              <img className="projectSkill" src={CSSLogo} alt="CSS" />
              <img className="projectSkill" src={JSLogo} alt="Javascript" />
              <img className="projectSkill" src={NextJsLogo} alt="Next.js" />
              <img className="projectSkill" src={TailwindLogo} alt="Tailwind" />
              <img className="projectSkill" src={ReduxLogo} alt="Redux" />
              <img className="projectSkill" src={VercelLogo} alt="Vercel" />
            </div>
            <h2 className="projectHeading">Password Generator</h2>
            <p className="projectSubHeading">
              A Web application which generate random password.
            </p>
            <div className="btnGroup">
              <button className="btn btnProject">Read More</button>
              <a href="">
                <i title="GitHubLink" className="fa-brands fa-github icon"></i>
              </a>
              <a href="">
                <i title="Live Link" className="fa-solid fa-link icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="projectCard" id="project3">
          <div className="projectNumber rightNumber">03</div>
          <div className="projectContent leftProjectContent">
            <div className="projectSkillsContainer">
              <img className="projectSkill" src={HTMLLogo} alt="HTML" />
              <img className="projectSkill" src={CSSLogo} alt="CSS" />
              <img className="projectSkill" src={JSLogo} alt="Javascript" />
              <img className="projectSkill" src={ExpressLogo} alt="Express" />
              <img className="projectSkill" src={NextJsLogo} alt="Next.js" />
              <img className="projectSkill" src={VercelLogo} alt="Vercel" />
            </div>
            <h2 className="projectHeading">To-Do List Maker</h2>
            <p className="projectSubHeading">
            A sleek and responsive to-do list application built using React and Tailwind CSS. The app allows users to effortlessly add, edit, and delete tasks, with a clean UI for managing daily tasks efficiently.
            </p>
            <div className="btnGroup">
              <button className="btn btnProject">Read More</button>
              <a href="">
                <i title="GitHubLink" className="fa-brands fa-github icon"></i>
              </a>
              <a href="">
                <i title="Live Link" className="fa-solid fa-link icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;