import React from "react";
import './indexs.css'

const ContactMe = () => {
  return (
    <section id="contactMe" className="contactMeSection">
      <div className="container">
        <h2>Contact Me</h2>
        <h3>Questions, Thoughts, Or Just Want To Say Hello?</h3>
        <div className="contactUsForm">
          <form>
            <div className="formFieldContainer">
              <input className="formField" type="text" placeholder="Enter your name" />
            </div>
            <div className="formFieldContainer">
              <input className="formField" type="email" placeholder="Enter your email address" />
            </div>
            <div className="formFieldContainer">
              <textarea className="formField" cols="30" rows="10" placeholder="Enter your message"></textarea>
            </div>
            <div className="formBtn">
              <button type="submit" className="btn">
                Send Message<i className="submit-icon fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;