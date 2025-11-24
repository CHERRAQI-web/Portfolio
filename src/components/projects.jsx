import webLearn from "../images/webLearn.PNG";
import Bureau from "../images/Bureau.PNG";
import visiocraft from "../images/visio.PNG";
import sharein from "../images/ShareIn.PNG";

const Projects = () => {
  const projects = [
    {
      title: "JOB LINK",
      tech: "React.js, Node.js, Express.js, MongoDB,Tailwind CSS,JWT, bcrypt",
      description:
      "Design and development of a complete recruitment platform. Creation of a dynamic front-end with React.js and a back-end with Node.js/Express.js. Use of MongoDB for data storage. The project includes a secure back-office and features such as job offer search and a dashboard.",

      image: Bureau,
      link: "https://github.com/CHERRAQI-web/Bureau-recrutement.git",
    },
    {
      title: "WEB LEARN",
      tech: "WordPress",
      description:
        "Developed a learning platform where users can read and explore web development courses. The platform provides an intuitive interface to navigate through lessons, enhancing the learning experience for beginners. Key features include organized course modules, easy navigation, and responsive design for all devices.",
      image: webLearn,
      link: "https://github.com/CHERRAQI-web/WEBLEARN",
    },
    {
      title: "visiocraft",
      tech: "React.js, Tailwind CSS,Node.js, Python,MongoDB,Google Drive API,JWT, bcrypt",
      description:
        "Full-stack development of an innovative web platform integrating AI features to automate project management. The platform connects clients and freelancers, with advanced functionalities such as automatic extraction of required skills for each project and the automatic creation of folders in Google Drive. I implemented a secure authentication system with multiple roles and a fully optimized workflow powered by AI.",
              image: visiocraft,
      link: "https://github.com/CHERRAQI-web/visiocraft.git",
    },

    {
      title: "share in ",
      tech: " Python, Flask, Développement d'API RESTful, OpenCV, Tesseract , Tailwind CSS,Node.js, MongoDB,JWT, bcrypt",
      description:
        "Built an AI-powered information extraction system for Moroccan administrative documents (ID Cards, Driver's Licenses, Vehicle Registration). The project leverages advanced Computer Vision and OCR techniques (OpenCV, Tesseract) to automate data reading and structuring with high accuracy.",
      image: sharein,
      link: "https://github.com/CHERRAQI-web/ShareIn.git",
    },
  ];

  return (
    <div id="projects" className="bg-gray-900 py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-gray-400 mb-4">
                  Technologies: {project.tech}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 mt-6 bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:bg-green-700 group"
                >
                  View more
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
                    className="lucide lucide-move-right-icon lucide-move-right transition-transform group-hover:translate-x-1"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
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
export default Projects;
