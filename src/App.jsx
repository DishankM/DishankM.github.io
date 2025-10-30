/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div id="wrapper">
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
