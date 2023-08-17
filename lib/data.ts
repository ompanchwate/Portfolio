import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import sociochain from "@/public/sociochain.png";
import todo from "@/public/todo.png";
import githubapi from "@/public/githubapi.png";
import htf from "@/public/htf.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma in Computer Science",
    location: "Government Polytechnic, Amravati",
    description:
      "Learned intermediate programming and gain experience in Web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
  {
    title: "Bachelors in Computer Science",
    location: "Pune Institute of Computer Technology, Pune ",
    description:
      "Learned a lot of new technologies of Web development and did Freelancing Projects",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Coming Soon",
    location: "Pune",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Tailwind, Prisma and MongoDB also some frameworks like Django, CodeIgniter. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    url: "https://todo-list-by-ompanchwate.vercel.app/",
    title: "Todo Application",
    description:
      "It is a Todo application for managing your daily todos. and used to maintain a good habit of managing and writting down the task.",
    tags: ["Reactjs", "TailwindCSS"],
    imageUrl: todo,
  },
  {
    url: "#",
    title: "Socio-Chain",
    description:
      "Developed a Decentralized social media platform just like X (Former Twitter)",
    tags: ["Next.js", "Tailwind", "Blockchain", "Metamask", "Nodejs", "Prisma"],
    imageUrl: sociochain,
  },
  {
    url: "https://github-by-l1usvkwd2-ompanchwate.vercel.app/",
    title: "Github User data",
    description:
      "You can search any github user using this application and see all his repositories and statistics",
    tags: ["React", "Next.js", "API", "Tailwind", "Github API"],
    imageUrl: githubapi
  },
  {
    url: "https://hope-trust-foundation.netlify.app/",
    title: "Hope Trust Foundation",
    description:
      "Website for my friend's Foundation",
    tags: ["HTML", "CSS"],
    imageUrl: htf
  },
] as const;





export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "MySQL",
  "MongoDB",
  "Python",
  "Django",
  "PHP",
  "CodeIgniter",
  'Firebase',

] as const;
