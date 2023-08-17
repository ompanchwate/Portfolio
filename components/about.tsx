"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify md:text-center">
        I completed my <span className="font-semibold">Diploma from Government Polytechnic, Amravati</span> and  <span className="font-semibold">currently</span> pursuing my <span className="font-semibold">Bachelor's </span><span className="font-semibold"> from  Pune Institute of Computer Technology. </span>  I have a great interest in Web Development. I love to explore new Tehnologies and adapt to it. I have developed various projects using various <span className="font-semibold"> web technlogies such as ReactJS, NextJS, CodeIgniter, Django, TailwindCSS. </span> I have also done Freelancing projects.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies and playing Cricket and also play Tabla. I also enjoy{" "}
        <span className="font-medium">learning new things.</span>
      </p>
    </motion.section>
  );
}
