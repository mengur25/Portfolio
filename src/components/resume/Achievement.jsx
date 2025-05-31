import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-20"
    >
      {/* Column 1 - BA Skills */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-4xl font-bold">BA & Documentation Skills</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Requirement Documentation"
            subTitle="Mock Projects – (2023 - Present)"
            result="Self Study"
            des="Created clear and structured documentation including user stories, acceptance criteria, and software requirement specifications (SRS) for university and personal projects."
          />
          <ResumeCard
            title="Flowcharts & Use Case Diagrams"
            subTitle="Lucidchart, Draw.io – (2023 - Present)"
            result="Diagram Tools"
            des="Designed visual artifacts such as flowcharts, user flows, ER diagrams, and use case diagrams to communicate logic and system design effectively."
          />
          <ResumeCard
            title="Communication & Analysis"
            subTitle="BA Role Practice – (2023 - Present)"
            result="Ongoing"
            des="Practiced user-focused thinking and cross-functional communication in mock team setups, bridging the gap between 'client needs' and 'developer work'."
          />
        </div>
      </div>

      {/* Column 2 - Project & Club Activities */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-4xl font-bold">Freelance & Club Activities</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Freelance Front-end Developer"
            subTitle="Personal & Group Projects – (2023 - Present)"
            result="Remote"
            des="Developed small-scale web apps using React, Tailwind, and APIs. Focused on UI/UX, deployment, and clean code. Shared feedback with teammates to improve delivery."
          />
          <ResumeCard
            title="Active Member – IT-Zone Club"
            subTitle="Ton Duc Thang University – (2023 - Present)"
            result="Ho Chi Minh City"
            des="Joined workshops and internal development projects. Gained hands-on practice with real coding scenarios, project planning, and peer mentoring."
          />
          <ResumeCard
            title="Private Tutor – English & Coding"
            subTitle="Self-employed – (2023 - 2024)"
            result="Freelance"
            des="Tutored students in English and programming fundamentals (C++, HTML, JS). Enhanced personal communication, patience, and problem explanation skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
