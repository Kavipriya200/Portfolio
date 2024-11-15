import React from "react";

const About = () => {
  return (
    <section id="about" className="py-10 bg-pink-500 text-gray-800">
      <div className="text-center mt-8">
        <h3 className="text-6xl font-bold text-white mb-4">
          About <span className="text-cyan-600">Me</span>
        </h3>
        

        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 max-w-6xl mx-auto gap-10">
          {/* Introduction Section */}
          <div className="bg-pink-700 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 w-full md:w-1/2">
            <h2 className="text-4xl font-semibold text-cyan-400 mb-4">
              Introduction
            </h2>
            <p className="text-white leading-7 text-lg">
              Hello! I'm Kavipriya, a passionate Front-End Developer with a
              strong foundation in web technologies. I specialize in crafting
              responsive and visually appealing user interfaces using HTML,
              CSS, and JavaScript. My journey in coding has also equipped me
              with Python skills, which I utilize to enhance interactivity and
              functionality in my projects. I am dedicated to creating seamless
              user experiences and continuously learning new technologies to
              stay ahead in this ever-evolving field.
            </p>
          </div>

          {/* Education Section */}
          <div className="bg-pink-700 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 w-full md:w-1/3">
            <h2 className="text-4xl font-semibold text-cyan-400 mb-3">
              Education
            </h2>
            <p className="text-white text-base mb-1">
              HSC - Pethal Achi Girls Higher Secondary School [2019-2021]
            </p>
            <p className="text-white text-base">
              Currently pursuing Bachelor of Engineering in Electronics and
              Communication Engineering at University College of Pattukottai
              [2021-Present].
            </p>
          </div>

          {/* Hobbies Section */}
          <div className="bg-pink-700 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 w-full md:w-1/3">
            <h2 className="text-4xl font-semibold text-cyan-400 mb-3">Hobbies</h2>
            <p className="text-white text-base">Reading Books</p>
            <p className="text-white text-base">Drawing</p>
            <p className="text-white text-base">Playing Games</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;










