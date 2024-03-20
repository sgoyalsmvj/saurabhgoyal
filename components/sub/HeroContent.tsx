"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Email from "./Email";
import my from "@/public/my.png";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col sm:flex-row items-center mx-[12px] mt-52 text-center px-10 sm:px-20 justify-center sm:mt-20 w-full z-[20]"
    >
      <div className="w-full h-full justify-center items-center mt-4 mb-6 sm:hidden ">
        <Image
          src={my}
          alt="work icons"
          height={650}
          width={650}
          priority
          className="rounded-full"
        />
      </div>
      <div className="h-full w-full flex flex-col gap-3 justify-center m-auto text-start ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[17px] border border-[#7042f88b] opacity-[0.9] "
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Full Stack Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-7xl  text-white max-w-[600px] w-auto h-auto "
        >
          <span>
            <span className="text-transparent bg-clip-text  font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-cool">
              {" "}
              SAURABH GOYAL
            </span>
            <br />
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-300 my-5 max-w-[600px] "
            >
              A passionate and innovative Full Stack Developer based from India.
              With a background in Computer Science and Engineering, I&apos;ve
              specialized in the MERN (MongoDB, Express.js, React, Node.js)
              stack.
              <br />
              My journey in the world of technology has been an exciting
              adventure, and I&apos;m thrilled to share my experiences and
              creations with you.
            </motion.p>
          </span>
        </motion.div>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-[7px] button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="#about-me"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center hidden sm:flex"
      >
        <Image
          src="./mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          priority
        />
      </motion.div>
      {/* <Email/> */}
    </motion.div>
  );
};

export default HeroContent;
