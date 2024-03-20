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
import ContactMe from "./ContactMe";

const Footer = () => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center h-full w-full text-gray-200 z-[20] pb-[40px]  "
      id="contact-me"
    >
      <h1 className="text-[40px] sm:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5 mx-[60px]">
        Contact Me
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center ">
        <Email />
       <ContactMe/>
      </div>
    </motion.div>
  );
};

export default Footer;
