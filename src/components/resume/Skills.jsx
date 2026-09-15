import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools, FaCogs, FaCheck } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-designColor text-xl" />,
    description: "Core languages used for frontend, backend, and object-oriented development.",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
      "Python",
      "C#",
    ],
  },
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-designColor text-xl" />,
    description: "Modern frameworks and styling tools for building responsive user interfaces.",
    skills: [
      "React.js",
      "Vite",
      "HTML5",
      "CSS3",
      "SCSS / SASS",
      "Tailwind CSS",
      "MUI (Material UI)",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-designColor text-xl" />,
    description: "Server-side runtime, frameworks, and API development.",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API",
      "JSON",
    ],
  },
  {
    title: "Database & Storage",
    icon: <FaDatabase className="text-designColor text-xl" />,
    description: "Relational and document databases for data modeling and persistence.",
    skills: [
      "MongoDB",
      "MySQL",
      "SQLite",
    ],
  },
  {
    title: "Tools & Environment",
    icon: <FaTools className="text-designColor text-xl" />,
    description: "Productivity, version control, testing, and development tools.",
    skills: [
      "Git",
      "GitHub",
      "npm",
      "Postman",
      "VS Code",
    ],
  },
  {
    title: "Core Concepts & Architecture",
    icon: <FaCogs className="text-designColor text-xl" />,
    description: "Foundational software design patterns and architectural best practices.",
    skills: [
      "Object-Oriented Programming (OOP)",
      "MVC Architecture",
      "API Integration",
      "Responsive Web Design",
    ],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full py-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {skillCategories.map((category, catIdx) => (
          <div
            key={catIdx}
            className="w-full bg-black bg-opacity-25 rounded-2xl p-6 md:p-8 shadow-shadowOne border border-gray-800 hover:border-designColor/60 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-gray-800 mb-4">
                <span className="w-12 h-12 rounded-xl bg-bodyColor border border-gray-800 flex items-center justify-center group-hover:border-designColor/40 transition-colors">
                  {category.icon}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-designColor transition-colors">
                    {category.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center gap-3 text-sm text-gray-300 group/item hover:text-white transition-colors"
                  >
                    <span className="w-5 h-5 rounded-full bg-designColor/10 border border-designColor/30 flex items-center justify-center text-designColor text-xs shrink-0">
                      <FaCheck className="text-[9px]" />
                    </span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div className="mt-8 pt-4 border-t border-gray-800/80 flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs bg-bodyColor px-3 py-1 rounded-lg text-gray-300 border border-gray-800 hover:text-designColor hover:border-designColor/50 duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;