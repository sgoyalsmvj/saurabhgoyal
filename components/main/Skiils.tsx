import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import SkillText from "../sub/SkillText";
const Skiils = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-50 py-20"
      id="skills"
      style={{ transform: "scale(0.9)" }}
    >
      {/* <a href="#about-me" className="text-white">hello</a> */}
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-7 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            width={image.width}
            height={image.height}
            key={index}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-7 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            width={image.width}
            height={image.height}
            key={index}
            index={index}
          />
        ))}
      </div>
      

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-7 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            width={image.width}
            height={image.height}
            key={index}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Skiils;
