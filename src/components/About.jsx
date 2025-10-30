/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: "💻", description: "React, JavaScript, HTML5, CSS3" },
    { name: "Backend Development", icon: "⚙️", description: "Node.js, Express, MongoDB" },
    { name: "UI/UX Design", icon: "🎨", description: "Responsive Design, User Experience" },
    { name: "Problem Solving", icon: "🔍", description: "Algorithms, Data Structures" }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Years Learning" },
    { number: "5+", label: "Technologies" },
    { number: "100%", label: "Passionate" }
  ];

  return (
    <section id="about" className="aboutSection">
      <div className="aboutBackground">
        <div className="floatingShapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="aboutContainer">
        <div className="aboutHeader">
          <h2 className="aboutTitle">
            About <span className="accentText">Me</span>
          </h2>
          <p className="aboutSubtitle">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        <div className="aboutContent">
          <div className="aboutText">
            <div className="introSection">
              <h3 className="introHeading">
                Hello! I&lsquo;m <span className="highlight">Dishank Mahajan</span>
              </h3>
              <div className="description">
                <p>
                  I'm a passionate <span className="highlight">Fourth-Year B.Tech CSE Student</span> with a deep love for 
                  <span className="highlight"> web development</span> and 
                  <span className="highlight"> artificial intelligence</span>. 
                  My journey in tech is driven by curiosity and the desire to create 
                  meaningful digital experiences that make a difference.
                </p>
                <p>
                  I specialize in building modern web applications using cutting-edge 
                  technologies like <span className="tech">React</span>, 
                  <span className="tech"> Next.js</span>, 
                  <span className="tech"> Tailwind CSS</span>, and various backend 
                  databases. I believe in writing clean, efficient code and creating 
                  user-centric designs that solve real-world problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or learning about the latest 
                  advancements in AI and machine learning.
                </p>
              </div>
            </div>

            <div className="statsGrid">
              {stats.map((stat, index) => (
                <div key={index} className="statItem" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="statNumber">{stat.number}</div>
                  <div className="statLabel">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="skillsGrid">
              <h3 className="skillsHeading">What I Do</h3>
              <div className="skillsList">
                {skills.map((skill, index) => (
                  <div key={index} className="skillItem" data-aos="fade-up" data-aos-delay={index * 150}>
                    <div className="skillIcon">{skill.icon}</div>
                    <div className="skillContent">
                      <h4 className="skillName">{skill.name}</h4>
                      <p className="skillDescription">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="aboutVisual">
            <div className="visualCard">
              <div className="cardContent">
                <div className="cardHeader">
                  <div className="cardIcon">🚀</div>
                  <h3>My Journey</h3>
                </div>
                <div className="cardBody">
                  <div className="timeline">
                    <div className="timelineItem">
                      <div className="timelineDot"></div>
                      <div className="timelineContent">
                        <h4>Started Programming</h4>
                        <p>Began my coding journey with C++ and basic web technologies</p>
                      </div>
                    </div>
                    <div className="timelineItem">
                      <div className="timelineDot"></div>
                      <div className="timelineContent">
                        <h4>Web Development</h4>
                        <p>Discovered passion for building interactive web applications</p>
                      </div>
                    </div>
                    <div className="timelineItem">
                      <div className="timelineDot"></div>
                      <div className="timelineContent">
                        <h4>Full Stack</h4>
                        <p>Expanded skills to include backend development and databases</p>
                      </div>
                    </div>
                    <div className="timelineItem">
                      <div className="timelineDot"></div>
                      <div className="timelineContent">
                        <h4>Continuous Learning</h4>
                        <p>Always exploring new technologies and best practices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ctaCard">
              <h3>Let's Build Something Amazing</h3>
              <p>I'm always open to discussing new opportunities and interesting projects</p>
              <div className="ctaButtons">
                <a href="#contactMe" className="ctaBtn primary">
                  Get In Touch
                </a>
                <a href="#projects" className="ctaBtn secondary">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;