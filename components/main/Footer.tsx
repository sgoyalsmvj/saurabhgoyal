"use client";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import Email from "../sub/Email";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center h-full w-full text-gray-200 z-[20] pb-[40px]  "
      id="contact-me"
    >
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5 mx-[60px]">
        Contact Me
      </h1>

      <div className="flex  items-center justify-center ">
        <Email />
        <div className="flex flex-col items-center justify-center mt-[60px]">
          <motion.p
             initial="hidden"
             animate="visible"
             variants={slideInFromRight(0.9)}
            className="text-md text-gray-300 ml-[60px]  max-w-[400px] "
          >
            I will read all emails. Send me any message you want and i'll get
            back to you. I need your Name and Email Address, I'll reply as
            quickly as possible.
          </motion.p>
          <div className="flex m-10 ">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">Community</div>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaYoutube />
                <a className="text-[15px] ml-[6px]">Youtube</a>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <a
                  href="https://github.com/sgoyalsmvj"
                  className="text-[15px] ml-[6px]"
                >
                  Github
                </a>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <a
                  href="https://www.discordapp.com/users/788196386504048660"
                  className="text-[15px] ml-[6px]"
                >
                  Discord
                </a>
              </p>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">Social Media</div>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxInstagramLogo />
                <a
                  href="https://www.instagram.com/__saurabhgoyal/"
                  className="text-[15px] ml-[6px]"
                >
                  Instagram
                </a>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxTwitterLogo />
                <a
                  href="https://twitter.com/SgxZoro"
                  className="text-[15px] ml-[6px]"
                >
                  Twitter
                </a>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <a
                  href="https://www.linkedin.com/in/saurabhgoyal12/"
                  className="text-[15px] ml-[6px]"
                >
                  Linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
