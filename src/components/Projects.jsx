// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Project.css";

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
  const projects = [
    {
      id: 1,
      title: "Add To Cart",
      description: "A React-based E-commerce web application with shopping cart functionality, featuring add/remove items and state management.",
      image: "project1",
      technologies: [HTMLLogo, CSSLogo, JSLogo, ExpressLogo, NextJsLogo, TailwindLogo, NodeJsLogo, MongoDBLogo, VercelLogo],
      githubLink: "https://github.com/DishankM/AddToCard",
      liveLink: "",
      align: "left"
    },
    {
      id: 2,
      title: "MBBS ABROAD Page",
      description: "A responsive landing page for the 'Study MBBS Abroad' program, featuring country listings, program details, and lead generation forms.",
      image: "project2",
      technologies: [HTMLLogo, CSSLogo, JSLogo, NextJsLogo, TailwindLogo, ReduxLogo, VercelLogo],
      githubLink: "https://github.com/DishankM/study-mbbs-abroad",
      liveLink: "",
      align: "right"
    },
    {
      id: 3,
      title: "To-Do List Maker",
      description: "A sleek and responsive to-do list application built with React and Tailwind CSS, featuring task management and local storage.",
      image: "project3",
      technologies: [HTMLLogo, CSSLogo, JSLogo, ExpressLogo, NextJsLogo, VercelLogo],
      githubLink: "",
      liveLink: "",
      align: "left"
    }
  ];

  return (
    <section id="projects" className="projectSection">
      <div className="projectBackground">
        <div className="floatingElements">
          <div className="floatElement">🚀</div>
          <div className="floatElement">💻</div>
          <div className="floatElement">⚡</div>
        </div>
      </div>
      
      <div className="projectContainer">
        <div className="projectHeader">
          <h2 className="projectTitle">
            My <span className="accentText">Projects</span>
          </h2>
          <p className="projectSubtitle">
            Here are some of my recent works that showcase my skills and passion for development
          </p>
        </div>

        <div className="projectsGrid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`projectCard ${project.align}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="projectImage">
                <div className="imageWrapper">
                  <div className={`projectImageBg ${project.image}`}></div>
                  <div className="projectOverlay">
                    <div className="projectLinks">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="projectLink"
                        >
                          <i className="fab fa-github"></i>
                          Code
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="projectLink"
                        >
                          <i className="fas fa-external-link-alt"></i>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectContent">
                <div className="projectNumber">0{project.id}</div>
                <h3 className="projectName">{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
                
                <div className="projectTechnologies">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="techItem">
                      <img src={tech} alt="Tech" className="techIcon" />
                    </div>
                  ))}
                </div>

                <div className="projectActions">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="actionBtn githubBtn"
                    >
                      <i className="fab fa-github"></i>
                      View Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="actionBtn liveBtn"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projectCta">
          <p>Interested in seeing more of my work?</p>
          <a href="https://github.com/DishankM" className="ctaBtn">
            Visit My GitHub
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;