import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-black text-gray-300 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Portfolio Logo" 
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Navigation (même style que navbar) */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-green-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-green-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-green-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
        </ul>

        {/* Socials */}
        <div className="flex space-x-6 text-xl">
          <a 
            href="https://github.com/CHERRAQI-web" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-green-400 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/aziza-cherraqi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-green-400 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="mailto:aziza.cherraqi@gmail.com" 
            className="hover:text-green-400 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Ligne & Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Aziza Cherraqi • Full-Stack Developer
      </div>
    </footer>
  );
};

export default Footer;
