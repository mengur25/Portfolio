import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Column 1 - Formal University Education */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2027</p>
          <h2 className="text-3xl md:text-4xl font-bold">University Degree</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Software Engineering"
            subTitle="Ton Duc Thang University (2023 - Present)"
            result="GPA: 8.02 / 10"
            des="Pursuing a Bachelor's degree in Software Engineering with an expected graduation date in 04/2027. Consistently maintaining a high academic performance with a cumulative GPA of 8.02/10."
            highlights={[
              "Major: Software Engineering (Expected Graduation: 04/2027)",
              "Cumulative GPA: 8.02/10",
              "Core Courses: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Systems, Web Programming, Software Architecture",
              "Practical Coursework: Designed and implemented full-stack web applications with React.js, Node.js, Express.js, MongoDB, and MySQL"
            ]}
          />
          <ResumeCard
            title="Continuous Technical Learning"
            subTitle="Modern Web Technologies & Best Practices"
            result="Self-Driven"
            des="Proactively mastering modern frontend and backend ecosystems, clean coding principles, and responsive web design."
            highlights={[
              "Mastering React.js ecosystem, TypeScript, Tailwind CSS, and MUI",
              "Developing RESTful APIs with Node.js and Express.js",
              "Working with both SQL (MySQL, SQLite) and NoSQL (MongoDB) databases",
              "Practicing Git workflows, branching strategies, and team collaboration"
            ]}
          />
        </div>
      </div>

      {/* Column 2 - Academic Excellence & Key Course Projects */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Academic Focus & Foundation</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineering Fundamentals"
            subTitle="Ton Duc Thang University"
            result="Core Strengths"
            des="Gained solid foundations in software design patterns, MVC architecture, OOP principles, and clean system design."
            highlights={[
              "Applied MVC architecture and OOP patterns across Java, C#, and JavaScript/TypeScript projects",
              "Requirement analysis, system modeling with UML, and database normalization",
              "API design and integration between client-side interfaces and backend services",
              "Responsive web development following modern UI/UX standards"
            ]}
          />

          <ResumeCard
            title="Teamwork & Collaboration"
            subTitle="Academic & Club Projects"
            result="Practical Experience"
            des="Collaborated in agile university sprint teams and peer projects to build complete web solutions."
            highlights={[
              "Code reviews and collaborative version control using GitHub",
              "Effective communication to align system requirements with team deliverables",
              "Problem-solving, debugging, and maintaining cross-browser compatibility"
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
