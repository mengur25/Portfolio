import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaCheckCircle } from "react-icons/fa";

const ProjectsCard = ({
  title,
  subTitle,
  des,
  techStack = [],
  features = [],
  myWork = [],
  src,
  githubLink = "#",
  liveLink = "#",
}) => {
  return (
    <div className="w-full p-6 xl:p-8 rounded-2xl shadow-shadowOne flex flex-col justify-between bg-gradient-to-r from-bodyColor to-[#202327] border border-gray-800/80 group hover:border-designColor/60 transition-all duration-300">
      <div>
        {/* Project Image */}
        {src && (
          <div className="w-full h-56 overflow-hidden rounded-xl mb-6 relative">
            <img
              className="w-full h-full object-cover group-hover:scale-105 duration-300 cursor-pointer"
              src={src}
              alt={title}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent duration-300"></div>
          </div>
        )}

        {/* Header: Title & Action Links */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            {subTitle && (
              <span className="text-xs uppercase font-semibold text-designColor tracking-wider">
                {subTitle}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-designColor duration-300 mt-1">
              {title}
            </h3>
          </div>
          <div className="flex gap-2 shrink-0">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="text-base w-9 h-9 rounded-full bg-black/50 inline-flex justify-center items-center text-gray-400 hover:text-designColor hover:bg-black duration-300"
              >
                <BsGithub />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                className="text-base w-9 h-9 rounded-full bg-black/50 inline-flex justify-center items-center text-gray-400 hover:text-designColor hover:bg-black duration-300"
              >
                <FaGlobe />
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Badges */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 my-3">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-black/40 text-designColor border border-designColor/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-300 mt-3 leading-relaxed">
          {des}
        </p>

        {/* Key Features */}
        {features && features.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-800/80">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Key Features
            </h4>
            <ul className="space-y-1 text-xs text-gray-300">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="text-designColor text-[10px] mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* My Work */}
        {myWork && myWork.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-800/80">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-designColor mb-2">
              My Responsibilities
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-400">
              {myWork.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;