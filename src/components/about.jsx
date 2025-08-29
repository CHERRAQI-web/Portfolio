import Me from '../images/mee.png'

const About = () => {
  return (
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
  );
};
export default About;