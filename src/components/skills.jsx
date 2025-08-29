import HTML from '../images/html.png';
import CSS from '../images/css.png';
import JS from '../images/js.png';
import TypeScript from '../images/typescript.png';
import ReactJS from '../images/React.png';
import NodeJS from '../images/node.png';
import Mongodb from '../images/mongodb.png';
import PostgreSQL from '../images/PostgreSQL.png';
import SqlServer from '../images/sql-server.png';
import Tailwind from '../images/Tailwind.png'
const Skills = () => {
  const skillIcons = [
    { name: "HTML", src: HTML },
    { name: "CSS", src: CSS },
    { name: "JavaScript", src: JS},
    { name: "Typescript", src: TypeScript},
    { name: "React.js", src: ReactJS },
    { name: "Node.js", src:NodeJS },
    { name: "MongoDB", src: Mongodb},
    { name: "PostgreSQL", src:PostgreSQL},
    { name: "SQL Server", src: SqlServer },
    { name: "Tailwind CSS", src:Tailwind },
  ];
  return (
    <div id="skills" className="bg-gray-950 py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillIcons.map((skill, index) => (
            <div key={index} className="p-6 bg-gray-900 rounded-xl shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <img src={skill.src} alt={`${skill.name} icon`} className="w-14 h-14 mb-2" />
              <span className="text-sm font-semibold text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;