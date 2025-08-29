import React, { useState, useEffect } from "react";
import Html from '../images/html.png';
import CSS from '../images/css.png';
import JS from '../images/js.png';
import Typescript from '../images/Typescript.png';
import Reactjs from '../images/React.png';
import Node from '../images/Node.png';
import Mongodb from '../images/mongodb.png';
import Sql from '../images/sql-server.png';
import PostgreSQL from '../images/PostgreSQL.png';
import Tailwind from '../images/Tailwind.png';
import Bureau from '../images/Bureau.png';
import Weblearn from '../images/WebLearn.png';
import Me from '../images/mee.png';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-green-900 to-black shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="JobLink Logo" 
              className="h-10 w-auto object-contain filter brightness-0 invert"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800"
              >
                Accueil
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800"
              >
                À propos
              </a>
              <a 
                href="#skills" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800"
              >
                Skills
              </a>
            
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800"
              >
                Project
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="bg-green-600 hover:bg-green-700 text-white block px-3 py-2 rounded-md text-base font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const Home = () => {
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

    // State for the contact form
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [emailLink, setEmailLink] = useState('');

    useEffect(() => {
        const recipient = 'aziza.cherraqi@gmail.com'; // REMPLACEZ PAR VOTRE ADRESSE E-MAIL
        const subject = encodeURIComponent(`Nouveau message de contact de ${formData.name}`);
        const body = encodeURIComponent(`Nom: ${formData.name}\n\nE-mail: ${formData.email}\n\nMessage:\n${formData.message}`);
        setEmailLink(`mailto:${recipient}?subject=${subject}&body=${body}`);
    }, [formData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isFormValid = formData.name && formData.email && formData.message;

    return (
        <div className="bg-gray-950 text-white font-sans">
            <Navbar />
            {/* Hero Section */}
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
                            <a href="/path/to/your/cv.pdf" download className="flex items-center gap-2 bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-to-line-icon">
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

            {/* About Me Section */}
            <div id="about" className="bg-gray-900 py-16 px-4 md:py-24">
                <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center md:justify-start order-2 md:order-1">
                        <div className="relative w-80 h-80 rounded-2xl shadow-2xl transition-transform duration-500 transform hover:scale-105 overflow-hidden">
                            <img
                                src={Me}
                                alt="Aziza Cherraqi"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                    <div className="text-center md:text-left p-4 order-1 md:order-2">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                            About me
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-300">
                            I build modern and user-friendly web applications from the ground up. As a Full-Stack developer, I thrive on crafting seamless digital experiences, from designing responsive front-end interfaces with React.js and Tailwind CSS to developing robust back-end systems using Node.js. I approach every challenge with a problem-solving mindset, a commitment to clean code, and a continuous drive to learn and grow. I'm excited to collaborate with others to create something truly valuable.
                        </p>
                    </div>
                </div>
            </div>

            {/* My Skills Section */}
            <div id="skills" className="bg-gray-950 py-16 px-4 md:py-24">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">My Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {/* Skills Card (repeated) */}
                        <div className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <img src={Html} alt="HTML icon" className="w-14 h-14 mb-2" />
                            <span className="text-sm font-semibold text-gray-300">HTML</span>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <img src={CSS} alt="CSS icon" className="w-14 h-14 mb-2" />
                            <span className="text-sm font-semibold text-gray-300">CSS</span>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <img src={JS} alt="JavaScript icon" className="w-14 h-14 mb-2" />
                            <span className="text-sm font-semibold text-gray-300">JavaScript</span>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <img src={Typescript} alt="TypeScript icon" className="w-14 h-14 mb-2" />
                            <span className="text-sm font-semibold text-gray-300">Typescript</span>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <img src={Reactjs} alt="React.js icon" className="w-14 h-14 mb-2" />
                            <span className="text-sm font-semibold text-gray-300">React.js</span>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <img src={Node} alt="Node.js icon" className="w-14 h-14 mb-2" />
                            <span className="text-sm font-semibold text-gray-300">Node.js</span>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <img src={Mongodb} alt="MongoDB icon" className="w-14 h-14 mb-2" />
                            <span className="text-sm font-semibold text-gray-300">MongoDB</span>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <img src={PostgreSQL} alt="PostgreSQL icon" className="w-14 h-14 mb-2" />
                            <span className="text-sm font-semibold text-gray-300">PostgreSQL</span>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <img src={Sql} alt="SQL Server icon" className="w-14 h-14 mb-2" />
                            <span className="text-sm font-semibold text-gray-300">SQL Server</span>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <img src={Tailwind} alt="Tailwind icon" className="w-14 h-14 mb-2" />
                            <span className="text-sm font-semibold text-gray-300">Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Projects Section */}
            <div id="projects" className="bg-gray-900 py-16 px-4 md:py-24">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img src={Bureau} alt="Recruitment Platform" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">JOB LINK</h3>
                                <p className="text-sm font-semibold text-gray-400 mb-4">Technologies: React.js, Node.js, Express.js, MongoDB</p>
                                <p className="text-gray-300 leading-relaxed">
                                    Conception et développement d'une plateforme de recrutement complète. Création d'un front-end dynamique avec React.js et d'un back-end avec Node.js/Express.js. Utilisation de MongoDB pour le stockage des données. Le projet inclut un back-office sécurisé et des fonctionnalités comme la recherche d'offres et le tableau de bord.
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 mt-6 bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:bg-green-700 group">
                                    View more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right transition-transform group-hover:translate-x-1">
                                        <path d="M18 8L22 12L18 16"/>
                                        <path d="M2 12H22"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img src={Weblearn} alt="Learning Platform" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">WEB LEARN</h3>
                                <p className="text-sm font-semibold text-gray-400 mb-4">Technologies: WordPress</p>
                                <p className="text-gray-300 leading-relaxed">
                                    Developed a learning platform where users can read and explore web development courses. The platform provides an intuitive interface to navigate through lessons, enhancing the learning experience for beginners. Key features include organized course modules, easy navigation, and responsive design for all devices.
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 mt-6 bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:bg-green-700 group">
                                    View more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right transition-transform group-hover:translate-x-1">
                                        <path d="M18 8L22 12L18 16"/>
                                        <path d="M2 12H22"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="bg-gray-950 py-20 px-4">
                <div className="container mx-auto max-w-2xl">
                    <div className="bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-800">
                        <h2 className="text-4xl font-extrabold text-center text-white mb-4">Contact Me</h2>
                        <p className="text-center text-lg text-gray-400 mb-8">
                            I am currently looking for new opportunities. Feel free to send me a message!
                        </p>
                        <form className="space-y-6">
                            <div>
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your Name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Your Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <textarea 
                                    name="message"
                                    placeholder="Your Message" 
                                    rows="6" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <a
                                    href={emailLink}
                                    onClick={(e) => {
                                        if (!isFormValid) {
                                            e.preventDefault();
                                            alert('Veuillez remplir tous les champs du formulaire.');
                                        }
                                    }}
                                    className={`inline-block text-white font-bold py-3 px-10 rounded-full shadow-lg transition-colors ${isFormValid ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 cursor-not-allowed'}`}
                                >
                                    Send Message
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
