import React, { useState, useEffect } from "react";
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from './components/footer'

const App = () => {
  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
