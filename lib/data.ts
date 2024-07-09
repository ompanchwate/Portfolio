import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chatify from "@/public/chatify.png";
import inc from "@/public/inc.jpg";
import estate from "@/public/estate.jpg";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    company: "Bit Solve Technologies Pvt. Ltd",
    location: "Pune",
    description:
      " Designed and developed an event management system using ReactJS for frontend. Utilized SQL procedures to enhance streamline database operations, ensuring efficient data retrieval",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - April 2024",
  },

  {
    title: "Android Developer",
    company: "Eco - Cosmo",
    location: "Pune",
    description:
      "• Assisted in enhancing and updating existing Android applications, ensuring improved functionality and user experience. Also, Collaborated with teams to diagnose and fix app issues. • Gained hands-on experience with Android SDK, Bluetooth APIs, and real-time data communication protocols",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Feb 2024",
  },

] as const;

export const education = [
  {
    title: "Bachelor's in Computer Science",
    location: "Pune Institute of Computer Technology, Pune",
    description:
      "Acquired in-depth knowledge of web development technologies and completed various freelancing projects.",
    icon: React.createElement(LuGraduationCap),
    date: " 2022 - 2025",
  },
  {
    title: "Diploma in Computer Science",
    location: "Government Polytechnic, Amravati",
    description:
      "Gained a solid foundation in programming and web development.",
    icon: React.createElement(LuGraduationCap),
    date: " 2019 - 2022",
  },
] as const;


export const projectsData = [
  {
    url: "https://github.com/ompanchwate/Chatify",
    title: "Chatify - ChatApp",
    description:
      "Developed a chat application using Next.js, Shadcn, and Convex, allowing users to seamlessly sign up, initiate conversations, and share texts, videos, and images",
    tags: ["NextJS", "TailwindCSS", "ShadCN", "Convex"],
    imageUrl: chatify,
  },
  {
    url: "https://github.com/ompanchwate/inc_23_website",
    title: "InC - Event Management System",
    description:
      "Integrating features such as event registration, project allocation to judges, Marks entry and result calculation.",
    tags: ["ReactJS", "NodeJS", "CSS", "SQL"],
    imageUrl: inc
  },
  {
    url: "https://estate-finder.vercel.app/",
    title: "Estate Finder",
    description:
      "User can find estate all around the world. They can add their own property and can also book a visit to see any property",
    tags: ["ReactJS", "MongoDB", "CSS"],
    imageUrl: estate
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
  "Convex",
  "Git",
  "TailwindCSS",
  "ShadCN",
  "MySQL",
  "MongoDB",
  "Python",
  "Django",
  "PHP",
  "CodeIgniter",
  'Firebase',

] as const;
