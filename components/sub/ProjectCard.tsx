"use client";
import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

interface Props {
  src: string;
  title: string;
  githubLink: string;
  link: string;
}
const ProjectCard = ({ src, title, link, githubLink }: Props) => {
  return (
    <motion.div className="relative overflow-hidden rounded-lg shadow-lg  md:w-auto border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4 flex flex-col">
        <h1 className="text-2xl font-semibold text-white text-center">
          {title}
        </h1>
        {/* <p className="mt-2 text-gray-300">{description}</p> */}
        <div className="flex items-center justify-start px-4">
          <motion.a
            className="text-gray-200 flex items-center mr-2 text-xs Welcome-text"
            href={link}
          >
            <SlGlobe className="m-2" />
            Site
          </motion.a>
          <motion.a
            className="text-gray-200 flex items-center text-xs Welcome-text"
            href={githubLink}
          >
            <FaGithub className="m-2" />
            Github
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
