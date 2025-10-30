/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contactMe" className="contactSection">
      <div className="contactBackground">
        <div className="floatingContacts">
          <div className="contactOrb orb-1"></div>
          <div className="contactOrb orb-2"></div>
          <div className="contactOrb orb-3"></div>
        </div>
      </div>

      <div className="contactContainer">
        <div className="contactHeader">
          <h2 className="contactTitle">
            Get In <span className="accentText">Touch</span>
          </h2>
          <p className="contactSubtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="contactContent">
          <div className="contactInfo">
            <div className="infoCard">
              <div className="infoIcon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="infoContent">
                <h3>Email Me</h3>
                <p>dishankmahajan424@gmail.com</p>
                <a href="mailto:dishankmahajan2004@gmail.com" className="infoLink">
                  Send Email <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIcon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="infoContent">
                <h3>LinkedIn</h3>
                <p>Let's connect professionally</p>
                <a 
                  href="https://www.linkedin.com/in/dishank-mahajan-56a0a3262/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="infoLink"
                >
                  Connect <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIcon">
                <i className="fab fa-github"></i>
              </div>
              <div className="infoContent">
                <h3>GitHub</h3>
                <p>Check out my projects</p>
                <a 
                  href="https://github.com/DishankM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="infoLink"
                >
                  Visit GitHub <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="contactStats">
              <div className="statItem">
                <div className="statNumber">24+</div>
                <div className="statLabel">Hours Response Time</div>
              </div>
              <div className="statItem">
                <div className="statNumber">100%</div>
                <div className="statLabel">Project Reply Rate</div>
              </div>
            </div>
          </div>

          <div className="contactFormContainer">
            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="formGroup">
                <div className="inputContainer">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="formInput"
                    required
                  />
                  <label className="formLabel">Your Name</label>
                  <div className="inputUnderline"></div>
                </div>
              </div>

              <div className="formGroup">
                <div className="inputContainer">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="formInput"
                    required
                  />
                  <label className="formLabel">Email Address</label>
                  <div className="inputUnderline"></div>
                </div>
              </div>

              <div className="formGroup">
                <div className="inputContainer">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="formInput textarea"
                    rows="5"
                    required
                  ></textarea>
                  <label className="formLabel">Your Message</label>
                  <div className="inputUnderline"></div>
                </div>
              </div>

              <button type="submit" className="submitBtn">
                <span className="btnText">Send Message</span>
                <div className="btnIcon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <div className="btnGlow"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;