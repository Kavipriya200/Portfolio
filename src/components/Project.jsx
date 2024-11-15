import React from "react";
import swiggy from "../assets/images/swiggy.png";

const Project = () => {
  const project = {
    name: "Swiggy Clone",
    description:
      "A fully responsive food delivery web application inspired by Swiggy. It allows users to browse restaurants, view menus, and place orders online.",
    technologies: ["HTML", "JavaScript", "CSS", "ReactJS"],
  };

  return (
    <section id="projects" className="py-10 px-5 bg-pink-500 text-gray-800">
      <div className="text-center">
        <h3 className="text-6xl font-bold text-white mb-4">
          My <span className="text-cyan-600">Project</span>
        </h3>
        <p className="text-gray-300 font-semibold my-3 text-lg">
          Highlighted Work
        </p>
      </div>
      <div className="flex flex-col md:flex-row max-w-6xl gap-8 mx-auto items-center mt-12">
        {/* Project Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={swiggy}
            alt="Swiggy Clone"
            className="w-full h-auto rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105 duration-300"
          />
        </div>

        {/* Project Details */}
        <div className="md:w-1/2 w-full bg-pink-700 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
          <h3 className="text-3xl font-bold text-white mb-4">{project.name}</h3>
          <p className="text-gray-300 text-lg mb-6">{project.description}</p>

          <h4 className="text-xl font-semibold text-white">Technologies Used:</h4>
          <ul className="text-gray-200 mt-3">
            {project.technologies.map((tech, i) => (
              <li key={i} className="text-base">
                • {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project;


