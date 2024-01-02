import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full z-[20] " id="about-me">
      <video
        autoPlay
        loop
        muted
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="./blackhole.webm" type="video/webm" />
      </video>
      <HeroContent/>
    </div>

  );
};

export default Hero;
