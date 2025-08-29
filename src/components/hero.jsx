import { useState,useEffect } from "react";
import Me from '../images/mee.png'
import CV from '../../public/CV.pdf'
const Hero = () => {
  // Logic for the typing effect
  const text = "<Full-Stack Web Developer/>";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 80 : 120;
    const timeout = setTimeout(() => {
      if (!deleting && index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else if (deleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (index === text.length) {
        setTimeout(() => setDeleting(true), 800);
      } else if (index === 0 && deleting) {
        setDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, deleting, text]);

  return (
    <div id="home" className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-100">
            Hi, I'm Aziza CHERRAQI
          </h1>
          <h3 className="text-2xl md:text-3xl font-mono text-green-500 mb-6">
            {displayedText}
            <span className="border-r-2 border-green-500 animate-pulse ml-1"></span>
          </h3>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Passionate about building seamless, modern web applications from start to finish. I specialize in the MERN stack and clean, efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition-colors">
              Explore My Projects
            </a>
            <a 
  href="/cv.pdf" target="_blank" download
  rel="noopener noreferrer" 
   
  className="flex items-center gap-2 bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-arrow-down-to-line-icon"
  >
    <path d="M12 17V3" />
    <path d="m6 11 6 6 6-6" />
    <path d="M19 21H5" />
  </svg>
  Download CV
</a>


          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-green-500">
            <img src={Me} alt="Aziza Cherraqi" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;