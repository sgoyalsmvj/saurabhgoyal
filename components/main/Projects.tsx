"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 pb-60 z-[20]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/thehomavoyage.png"
          title="The Home Voyage - Booking App"
          githubLink="https://github.com/sgoyalsmvj/TheHomeVoyage"
          link="https://the-home-voyage.vercel.app/"
        />
        <ProjectCard
          src="/gpt3.png"
          title="GPT3 - A Modern Landing Page"
          link="https://master--idyllic-bavarois-ebecac.netlify.app/"
          githubLink="https://github.com/sgoyalsmvj/GPT3_static_page"
        />
        <ProjectCard
          src="/taijutsu.png"
          title="The Taijutsu - A Fighting Game"
          githubLink="https://github.com/sgoyalsmvj/Taijutsu"
          link="https://taijutsu-production.up.railway.app/"
        />
      </div>
      <motion.a
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(1)}
        className="py-[7px] button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-[20px] m-[20px]"
        href="https://github.com/sgoyalsmvj?tab=repositories"
      >
        More Projects!
      </motion.a>
    </div>
  );
};

export default Projects;
