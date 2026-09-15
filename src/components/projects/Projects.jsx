import React, { useState } from 'react';
import Title from '../layouts/Title';
import { YNHotel, telehealth, YNBUY, xalo, pkup } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const projectsList = [
  {
    id: 1,
    category: "Academic",
    title: "Telehealth — Healthcare Platform",
    subTitle: "Course Project",
    des: "A comprehensive course project for an online healthcare platform connecting doctors and patients seamlessly.",
    techStack: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Doctor and patient management",
      "Appointment scheduling and management",
      "Healthcare-related information & records",
      "Secure user authentication",
      "Frontend & backend communication via RESTful APIs",
    ],
    myWork: [
      "Developed web interfaces using React.js and TypeScript.",
      "Built and integrated RESTful APIs using Node.js and Express.js.",
      "Worked with MongoDB to store and manage application data.",
      "Collaborated with team members to implement features and fix issues.",
    ],
    src: telehealth,
  },
  {
    id: 2,
    category: "Academic",
    title: "YNBuy — E-commerce Platform",
    subTitle: "Course Project",
    des: "A feature-rich course project for an online shopping platform with intuitive catalog and checkout experiences.",
    techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "MUI"],
    features: [
      "Product listing and detailed product pages",
      "Interactive shopping cart with real-time updates",
      "Seamless checkout workflow",
      "Order management and tracking",
      "User authentication and profile management",
    ],
    myWork: [
      "Developed product, cart, checkout, and order-related features.",
      "Built RESTful APIs using Node.js and Express.js.",
      "Connected the React.js frontend with backend APIs and MongoDB.",
      "Built reusable UI components using React.js and MUI.",
      "Used Git for source code management and team collaboration.",
    ],
    src: YNBUY,
  },
  {
    id: 3,
    category: "Academic",
    title: "YNHotel — Hotel Booking Platform",
    subTitle: "Course Project",
    des: "A course project for a hotel booking platform designed for searching, viewing, and reserving hotel rooms.",
    techStack: ["React.js", "JavaScript", "Node.js", "Express.js", "MySQL"],
    features: [
      "Hotel and room search with filtering",
      "Detailed room information and pricing",
      "Online hotel booking workflow",
      "User account and booking management",
    ],
    myWork: [
      "Developed responsive interfaces using React.js.",
      "Built hotel, room, and booking-related features.",
      "Integrated RESTful APIs between the frontend and backend.",
      "Worked with MySQL to store and manage hotel and booking data.",
    ],
    src: YNHotel,
  },
  {
    id: 4,
    category: "Real-World",
    title: "Logistics Web Application",
    subTitle: "Freelance Project",
    des: "Freelance web application focusing on building core operational features based on actual client business requirements.",
    techStack: ["React.js", "Node.js", "Express.js", "RESTful API", "Git"],
    features: [
      "Logistics-related information and operations management",
      "Dynamic data dashboard and tracking views",
      "Backend RESTful API integration for data flow",
    ],
    myWork: [
      "Developed web features for managing logistics-related information and operations.",
      "Built responsive interfaces using React.js.",
      "Integrated backend APIs to display and manage application data.",
      "Worked with Node.js and Express.js for backend features where required.",
      "Communicated directly with the client to understand requirements, discuss changes, and fix issues.",
    ],
    src: pkup,
  },
  {
    id: 5,
    category: "Real-World",
    title: "Business Websites & Landing Pages",
    subTitle: "XA LỘ MEDIA (10+ Websites)",
    des: "Commercial web development projects for multiple business needs, focusing on high-performing websites and reusable components.",
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "RESTful APIs", "npm", "Git"],
    features: [
      "10+ production websites and landing pages built and maintained",
      "20+ reusable, accessible React components",
      "10+ RESTful API integrations",
      "Cross-browser and multi-device responsive design",
    ],
    myWork: [
      "Developed websites and landing pages using React.js, JavaScript, HTML5, and CSS3.",
      "Built reusable React components and responsive interfaces based on UI/UX designs.",
      "Integrated RESTful APIs to connect frontend applications with backend services.",
      "Fixed bugs, updated features, and collaborated with team members to deliver client requirements.",
    ],
    src: xalo,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsList
      : projectsList.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <Title
          title="ACADEMIC & REAL-WORLD PORTFOLIO"
          des="Featured Projects"
        />
        {/* Category Filter Pills */}
        <div className="flex items-center gap-3 -mt-6 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              filter === "all"
                ? "bg-designColor text-black shadow-lg shadow-designColor/20"
                : "bg-black/40 text-gray-400 hover:text-white border border-gray-800"
            }`}
          >
            All Projects ({projectsList.length})
          </button>
          <button
            onClick={() => setFilter("academic")}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              filter === "academic"
                ? "bg-designColor text-black shadow-lg shadow-designColor/20"
                : "bg-black/40 text-gray-400 hover:text-white border border-gray-800"
            }`}
          >
            Academic Projects (3)
          </button>
          <button
            onClick={() => setFilter("real-world")}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              filter === "real-world"
                ? "bg-designColor text-black shadow-lg shadow-designColor/20"
                : "bg-black/40 text-gray-400 hover:text-white border border-gray-800"
            }`}
          >
            Real-World Experience (2)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            subTitle={project.subTitle}
            des={project.des}
            techStack={project.techStack}
            features={project.features}
            myWork={project.myWork}
            src={project.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;