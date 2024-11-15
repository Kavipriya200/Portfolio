import React from "react";

const Skills = () => {
  const technicalSkills = [
    {
      name: "Python",
      level: "Intermediate",
      percentage: 60,
    },
    {
      name: "CSS",
      level: "Intermediate",
      percentage: 60,
    },
    {
      name: "HTML",
      level: "Intermediate",
      percentage: 60,
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      percentage: 60,
    },
    {
      name: "MS Office",
      level: "Beginner",
      percentage: 40,
    },
  ];

  const softSkills = [
    {
      name: "Responsibility",
    },
    {
      name: "Hardwork",
    },
    {
      name: "Honesty",
    },
  ];

  return (
    <section id="skills" className="py-10 bg-pink-500 relative">
      <div className="mt-8 text-white text-center">
        <h3 className="text-5xl font-bold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-200 mt-3 text-lg">My knowledge</p>

        {/* Technical Skills Section */}
        <h4 className="text-3xl font-semibold mt-8">Technical Skills</h4>
        <div className="mt-6 space-y-6">
          {technicalSkills.map((skill, i) => (
            <div key={i} className="bg-pink-700 p-6 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl">{skill.name}</span>
                <span className="text-sm text-gray-300">{skill.level}</span>
              </div>
              <div className="w-full bg-pink-800 h-2 rounded-full">
                <div
                  className="bg-cyan-600 h-2 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <h4 className="text-3xl font-semibold mt-12">Soft Skills</h4>
        <div className="flex items-center justify-center mt-6 gap-10 flex-wrap">
          {softSkills.map((skill, i) => (
            <div
              key={i}
              className="bg-pink-700 p-6 rounded-xl border-2 border-cyan-600 shadow-lg min-w-[10rem] max-w-[16rem]"
            >
              <p className="text-xl text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



