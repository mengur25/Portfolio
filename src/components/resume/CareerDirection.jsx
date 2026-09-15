import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaGraduationCap } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";

const CareerDirection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full py-8 flex flex-col gap-10"
    >
      {/* Target Role & Vision Card */}
      <div className="w-full bg-gradient-to-r from-bodyColor to-[#202327] border border-gray-800 rounded-2xl p-6 lgl:p-10 shadow-shadowOne flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-6 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <span className="w-14 h-14 rounded-2xl bg-black/40 border border-designColor/30 text-designColor text-2xl flex items-center justify-center">
              <BiTargetLock />
            </span>
            <div>
              <p className="text-sm uppercase text-designColor tracking-widest font-semibold">
                Target Role
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Fresher Software Engineer / Web Developer
              </h2>
            </div>
          </div>
          <span className="px-4 py-2 bg-designColor/10 border border-designColor/30 text-designColor rounded-full text-sm font-medium self-start md:self-auto">
            Open for Opportunities
          </span>
        </div>

        <p className="text-base md:text-lg text-gray-300 leading-relaxed font-bodyFont">
          I am currently looking for a <span className="text-designColor font-semibold">Fresher Software Engineer / Web Developer</span> position where I can apply my current knowledge, gain more experience from real-world projects, and continue developing my skills in software engineering and full-stack web development.
        </p>
      </div>

      {/* 3 Pillars / Value Propositions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/25 border border-gray-800/80 rounded-xl p-6 shadow-shadowOne flex flex-col gap-4 hover:border-designColor duration-300">
          <span className="w-12 h-12 rounded-xl bg-bodyColor text-designColor text-xl flex items-center justify-center border border-gray-800">
            <FaLaptopCode />
          </span>
          <h3 className="text-xl font-bold text-white">Practical Experience</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Around 1 year of hands-on web development experience, working on 10+ websites, building 20+ reusable React components, and integrating 10+ RESTful APIs.
          </p>
        </div>

        <div className="bg-black/25 border border-gray-800/80 rounded-xl p-6 shadow-shadowOne flex flex-col gap-4 hover:border-designColor duration-300">
          <span className="w-12 h-12 rounded-xl bg-bodyColor text-designColor text-xl flex items-center justify-center border border-gray-800">
            <FaGraduationCap />
          </span>
          <h3 className="text-xl font-bold text-white">Solid Foundation</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Software Engineering student at Ton Duc Thang University with a cumulative GPA of 8.02/10. Strong background in OOP, MVC architecture, algorithms, and databases.
          </p>
        </div>

        <div className="bg-black/25 border border-gray-800/80 rounded-xl p-6 shadow-shadowOne flex flex-col gap-4 hover:border-designColor duration-300">
          <span className="w-12 h-12 rounded-xl bg-bodyColor text-designColor text-xl flex items-center justify-center border border-gray-800">
            <FaRocket />
          </span>
          <h3 className="text-xl font-bold text-white">Continuous Growth</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Passionate about learning new technologies, writing clean and maintainable code, communicating effectively with clients, and collaborating with development teams.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerDirection;
