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
        I completed my <span className="font-semibold">Diploma from Government Polytechnic, Amravati</span> and am <span className="font-semibold">currently</span> pursuing my <span className="font-semibold">Bachelor's</span> from <span className="font-semibold">Pune Institute of Computer Technology.</span> My passion for web development drives me to explore and adapt to new technologies continuously. I have developed various projects using <span className="font-semibold">web technologies such as ReactJS, NextJS, CodeIgniter, Django, and TailwindCSS.</span> Additionally, I have worked on several freelancing projects, gaining diverse experience in the field.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching movies and playing cricket. I also have a strong passion for <span className="font-medium">learning new things.</span>
      </p>

    </motion.section>
  );
}
