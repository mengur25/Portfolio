import React from 'react';
import { avaImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="w-[300px] h-[340px] sm:w-[350px] sm:h-[400px] lgl:w-[440px] lgl:h-[500px] z-10 rounded-2xl overflow-hidden shadow-shadowOne border border-gray-800 bg-[#1e2024]">
        <img
          className="w-full h-full object-cover object-top hover:scale-105 duration-500 cursor-pointer"
          src={avaImg}
          alt="Nguyen Duong Avatar"
        />
      </div>
      <div className="absolute bottom-0 w-[320px] h-[320px] sm:w-[370px] sm:h-[380px] lgl:w-[460px] lgl:h-[480px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-2xl -z-0"></div>
    </div>
  );
};

export default RightBanner;