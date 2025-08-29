import webLearn from '../images/webLearn.PNG';
import Bureau from '../images/Bureau.webp'

const Projects = () => {
  const projects = [
    {
      title: "JOB LINK",
      tech: "React.js, Node.js, Express.js, MongoDB",
      description: "Conception et développement d'une plateforme de recrutement complète. Création d'un front-end dynamique avec React.js et d'un back-end avec Node.js/Express.js. Utilisation de MongoDB pour le stockage des données. Le projet inclut un back-office sécurisé et des fonctionnalités comme la recherche d'offres et le tableau de bord.",
      image:Bureau,
      link: "https://github.com/CHERRAQI-web/Bureau-recrutement.git",
    },
    {
      title: "WEB LEARN",
      tech: "WordPress",
      description: "Developed a learning platform where users can read and explore web development courses. The platform provides an intuitive interface to navigate through lessons, enhancing the learning experience for beginners. Key features include organized course modules, easy navigation, and responsive design for all devices.",
      image: webLearn,
      link: "https://github.com/CHERRAQI-web/WEBLEARN",
    },
  ];

  return (
    <div id="projects" className="bg-gray-900 py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm font-semibold text-gray-400 mb-4">Technologies: {project.tech}</p>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                <a href={project.link} className="inline-flex items-center gap-2 mt-6 bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:bg-green-700 group">
                  View more
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right transition-transform group-hover:translate-x-1">
                    <path d="M18 8L22 12L18 16"/>
                    <path d="M2 12H22"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects