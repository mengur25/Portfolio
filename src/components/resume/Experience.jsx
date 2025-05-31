import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-20"
    >
      {/* Job Experience */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Private Tutor - English"
            subTitle="Self-employed - (2023 - 2024)"
            result="Ho Chi Minh City"
            des="Provided one-on-one tutoring sessions for students. Helped them improve English grades and confidence through interactive learning and tailored study plans."
          />

          <ResumeCard
            title="Freelance Web Projects"
            subTitle="Personal & Team Projects - (2023 - Present)"
            result="Self Study"
            des="Built and deployed small-scale web applications such as portfolios, blogs, and CRUD-based task managers. Practiced Git workflows, responsive UI design, and integrated REST APIs. Collaborated with peers for feedback and improvements."
          />
          <ResumeCard
            title="Business Analyst Skills"
            subTitle="Project & Team Experience - (2023 - Present)"
            result="Self Study + Practice"
            des="Practiced writing clear and structured software documentation including user stories, use case diagrams, and requirement specs. Created flowcharts, user flows, and ERDs using tools like Draw.io and Lucidchart for university projects and personal work."
          />
        </div>
      </div>

      {/* Learning & Club Activities */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Learning & Community
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Member - IT-Zone Club"
            subTitle="Ton Duc Thang University - (2023 - Present)"
            result="Ho Chi Minh City"
            des="Actively participated in technology workshops, coding competitions, and group projects. Collaborated on internal club tools using web technologies like React and Firebase. Supported junior members in technical discussions."
          />

          <ResumeCard
            title="Online Learning - Web Development"
            subTitle="FreeCodeCamp, YouTube, Coursera - (2023 - Present)"
            result="Self Study"
            des="Completed self-paced courses covering HTML, CSS, JavaScript, React, Tailwind, and Git. Built multiple mini-projects during the learning journey to strengthen concepts through hands-on experience."
          />

          <ResumeCard
            title="Soft Skills & Communication"
            subTitle="Tutoring & Team Collaboration - (2023 - Present)"
            result="Ongoing"
            des="Improved communication and problem-solving skills through tutoring sessions, team-based university projects, and open discussions in club activities."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
