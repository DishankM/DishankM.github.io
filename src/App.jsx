import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div id="wrapper">
      <Header />
      <HeroSection />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
