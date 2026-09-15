import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience";
import CareerDirection from "./CareerDirection";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ YEAR OF PRACTICAL EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-0">
          <li
            onClick={() => setActiveTab("education")}
            className={`${
              activeTab === "education"
                ? "border-designColor rounded-lg text-designColor"
                : "border-transparent text-gray-400"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => setActiveTab("skills")}
            className={`${
              activeTab === "skills"
                ? "border-designColor rounded-lg text-designColor"
                : "border-transparent text-gray-400"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => setActiveTab("experience")}
            className={`${
              activeTab === "experience"
                ? "border-designColor rounded-lg text-designColor"
                : "border-transparent text-gray-400"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() => setActiveTab("career")}
            className={`${
              activeTab === "career"
                ? "border-designColor rounded-lg text-designColor"
                : "border-transparent text-gray-400"
            } resumeLi`}
          >
            Career Direction
          </li>
        </ul>
      </div>
      <div className="mt-8">
        {activeTab === "education" && <Education />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "career" && <CareerDirection />}
      </div>
    </section>
  );
};

export default Resume;