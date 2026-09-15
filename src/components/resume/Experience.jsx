import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Column 1 - Company Experience */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            11/2025 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="XA LỘ MEDIA (11/2025 – Present)"
            result="Ho Chi Minh City"
            des="At XA LỘ MEDIA, I work on web development projects for different business needs, mainly focusing on building and maintaining websites and web applications."
            highlights={[
              "Develop websites and landing pages using React.js, JavaScript, HTML5, and CSS3.",
              "Build reusable React components and responsive interfaces based on UI/UX designs.",
              "Integrate RESTful APIs to connect frontend applications with backend services.",
              "Work with Node.js and Express.js to develop and update web features.",
              "Use npm to manage project dependencies.",
              "Use Git/GitHub for source code management and team collaboration.",
              "Fix bugs, update features, and work with team members to complete project requirements.",
              "🌟 Highlights: Worked on 10+ websites & landing pages; Built & reused 20+ React components; Worked with 10+ RESTful APIs; Gained practical experience with a dev team & real client requirements."
            ]}
          />
        </div>
      </div>

      {/* Column 2 - Freelance & Business Experience */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Real-World Project
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Freelance Experience</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Freelance Web Developer"
            subTitle="Logistics Web Application"
            result="Freelance"
            des="Worked on a logistics web application as a freelance developer, focusing on building web features based on actual business requirements."
            highlights={[
              "Developed web features for managing logistics-related information and operations.",
              "Built responsive interfaces using React.js.",
              "Integrated backend APIs to display and manage application data.",
              "Worked with Node.js and Express.js for backend features where required.",
              "Used Git for source code management.",
              "Communicated directly with the client to understand requirements, discuss changes, and fix issues.",
              "💡 What I learned: Gained invaluable experience working with a real business workflow and adapting technical solutions to actual user requirements."
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
