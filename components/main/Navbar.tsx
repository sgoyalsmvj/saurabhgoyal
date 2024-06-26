import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between px-8 sm:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/my.png"
            alt="logo"
            width={50}
            height={50}
            priority
            className="cursor-pointer hover:animate-slowspin  rounded-full  mx-5"
          />
          <span className="font-bold ml-[1opx] hidden md:block text-gray-300">
            Saurabh Goyal
          </span>
        </a>
        <div className="w-[500px] h-full items-center justify-between md:mr-20 hidden sm:flex flex-row  ">
          <div className="flex itms-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact-me" className="cursor-pointer">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 ">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target={social.target}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
