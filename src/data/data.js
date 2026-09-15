import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaServer, FaDatabase, FaCode, FaGitAlt, FaLayerGroup } from "react-icons/fa";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Frontend Development",
    des: "Build responsive, high-performance web interfaces and landing pages using React.js, Vite, JavaScript, TypeScript, Tailwind CSS, and MUI with reusable component architecture.",
  },
  {
    id: 2,
    icon: <FaServer />,
    title: "Backend & RESTful APIs",
    des: "Develop and maintain robust backend services using Node.js and Express.js. Design clean RESTful APIs, handle authentication, and implement business logic.",
  },
  {
    id: 3,
    icon: <FaDatabase />,
    title: "Database Management",
    des: "Work with both NoSQL (MongoDB) and Relational databases (MySQL, SQLite) to model schemas, optimize queries, and ensure reliable data persistence.",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "Full-Stack Web Apps",
    des: "End-to-end web application development for healthcare (Telehealth), e-commerce (YNBuy), hotel booking (YNHotel), and logistics workflows.",
  },
  {
    id: 5,
    icon: <FaGitAlt />,
    title: "Git & Team Collaboration",
    des: "Manage source code with Git/GitHub, maintain branching strategies, review pull requests, and collaborate smoothly across development sprints.",
  },
  {
    id: 6,
    icon: <FaLayerGroup />,
    title: "Software Architecture & OOP",
    des: "Apply Object-Oriented Programming (OOP), MVC architectural patterns, and API integration best practices for clean, scalable, and maintainable software.",
  },
];