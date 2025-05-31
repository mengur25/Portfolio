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
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Third-year Student in Software Engineer"
            subTitle="Ton Duc Thang University"
            result="3.1/4"
            des="Studying core areas of software engineering including algorithms, databases, front-end & back-end development, and UI/UX design. Gaining hands-on experience through university projects and teamwork."
          />
          <ResumeCard
            title="Google UX Design"
            subTitle="2025"
            result="Success"
            des="Completed a comprehensive course on user-centered design, usability testing, wireframing, and prototyping. Developed real-world UI solutions with tools like Figma and Google Design frameworks."
          />
          <ResumeCard
            title="High School Education"
            subTitle="Xuan Loc High School (2020 - 2023)"
            result="4.2/5"
            des="Graduated with a strong academic foundation, especially in mathematics and computer science. Participated in extracurricular activities and tech clubs that fostered early interest in programming."
          />
        </div>
      </div>
      {/* part Two */}

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
            des="Provided one-on-one tutoring sessions for student. Helped students improve grades and build foundational skills."
          />

          <ResumeCard
            title="Member - IT-Zone Club"
            subTitle="Ton Duc Thang University - (2023 - Present)"
            result="Ho Chi Minh City"
            des="Actively participated in technology workshops, coding competitions, and group projects. Collaborated on internal club tools using web technologies like React and Firebase. Supported junior members in technical discussions."
          />

          <ResumeCard
            title="Freelance Web Projects"
            subTitle="Personal & Team Projects - (2023 - Present)"
            result="Seft Study"
            des="Built and deployed small-scale web applications such as portfolios, blogs, and CRUD-based task managers. Practiced Git workflows, responsive UI design, and integrated REST APIs. Collaborated with peers for feedback and improvements."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
