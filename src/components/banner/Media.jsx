import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-gray-300">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/ngur.nd/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/mengur__/#"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/nguyen-duong-41205-mengur/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-gray-300">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon" title="React.js">
            <FaReact />
          </span>
          <span className="bannerIcon" title="TypeScript">
            <SiTypescript />
          </span>
          <span className="bannerIcon" title="Node.js">
            <FaNodeJs />
          </span>
          <span className="bannerIcon" title="MongoDB">
            <SiMongodb />
          </span>
          <span className="bannerIcon" title="Tailwind CSS">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
