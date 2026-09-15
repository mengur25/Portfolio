import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { avaImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover object-top rounded-lg mb-2"
        src={avaImg}
        alt="Duong Ngoc Khoi Nguyen"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">
          Duong Ngoc Khoi Nguyen
        </h3>
        <p className="text-lg font-normal text-designColor">
          Software Engineer / Web Developer
        </p>
        <p className="text-sm text-gray-400 tracking-wide leading-relaxed">
          Around 1 year of practical web development experience. Open to Fresher Software Engineer & Web Developer opportunities.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+84 947188794</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">nguyenduong939705@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/ngur.nd/" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/mengur__/#" className="bannerIcon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/nguyen-duong-41205-mengur/" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
