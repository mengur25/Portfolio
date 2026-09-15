import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Frontend Developer (React.js).",
      "Full Stack Web Developer.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-14">
      <div className="flex flex-col gap-5">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-designColor animate-pulse"></span>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-designColor">
            WELCOME TO MY PORTFOLIO
          </h4>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lgl:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Nguyen Duong</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl lgl:text-4xl font-bold text-white h-12">
          a <span className="text-gray-200">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#01e1ff"
          />
        </h2>
        
        <p className="text-base font-bodyFont text-gray-300 leading-7 tracking-wide mt-2">
          I am a <strong>Software Engineering student at Ton Duc Thang University</strong> with around <strong>1 year of practical experience</strong> in web development.
        </p>
        <p className="text-sm font-bodyFont text-gray-400 leading-6 tracking-wide">
          I have experience working with <strong>React.js, JavaScript, TypeScript, Node.js, and Express.js</strong> to build websites and web applications. I have worked on both real-world and academic projects, including business websites, e-commerce, telehealth, hotel booking, and logistics applications.
        </p>
      </div>

      {/* Media & Skills */}
      <Media />
    </div>
  );
};

export default LeftBanner;