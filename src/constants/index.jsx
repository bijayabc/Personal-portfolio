import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { SiFlask } from "react-icons/si";       
import { SiExpress } from "react-icons/si";      
import { FaHtml5 } from "react-icons/fa";        
import { FaCss3Alt } from "react-icons/fa";      
import { SiJavascript } from "react-icons/si";   
import { SiC } from "react-icons/si";        
import { SiTailwindcss } from "react-icons/si";
import { SiPython } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "BIJAYA BC",
  greet: "Hello there! 👋🏻",
  description:
    "I am a rising junior majoring in computer science at Caldwell University. I am a first generation student with a knack for understanding and solving complex problems. My mission is to build a ground up understanding of how these incredible machines work and then to use that knowledge to work on cool and useful products.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/bijayabc/Personal-portfolio",
    demoLink: "https://bijay.vercel.app",
  },
  {
    id: 2,
    name: "CS50 Finance",
    description:
      "A web application built using Flask in Python that allows users to manage a virtual portfolio of stocks. Uses SQLite for the database, HTML/CSS/JavaScript for the frontend and Yahoo Stock API.",
    image: projectImage2,
    githubLink: "https://github.com/bijayabc/link/to/a blog that explains why there is no repo.",
    demoLink: "https://finance.cs50.net/login",
  },
  {
    id: 3,
    name: "Personal Blog Site",
    description:
      "A web application built using Node.js and Express. Allows users to create, read, and delete blogs. Uses MongoDB for database, EJS for templating, and HTML, CSS, JavaScript for the frontend.",
    image: projectImage3,
    githubLink: "https://github.com/bijayabc/Blogs",
    demoLink: "https://bijayblogs.onrender.com",
  },
  {
    id: 4,
    name: "Dumb Charades",
    description:
      "A web app for Dumb Charades built with HTML5, CSS3, Vanilla JavaScript where users choose categories and receive random titles to act out. Web3Forms for form handling",
    image: projectImage4,
    githubLink: "https://github.com/bijayabc/Dumb-Charades",
    demoLink: "https://bijayabc.github.io/Dumb-Charades/",
  },
  {
    id: 5,
    name: "MarkNote",
    description:
      "A web application built using React and Vite that allows users to create, edit, and manage notes. Utilizes Firebase for real-time data synchronization and Markdown formatting.",
    image: projectImage5,
    githubLink: "https://github.com/bijayabc/MarkNote",
    demoLink: "https://bijayabc.github.io/MarkNote/",
  },
];

export const BIO = [
  "I completed my secondary education from Nepal Police School in 2018. I went to the same school for my higher seconday education and studied physical Science. I graduated high school in 2021 and it was around this time when I realized my passion towards computers and decided to make a career in this field.",
  "After graduating from NPS, I made the decision to pursue my further education in the United States. My experience in the States so far has been both exciting and challenging, but nothing short of incredible.",
  "As of now, my goal in life is to do my best and learn something new everyday. At Caldwell University, I've focused on honing my programming skills and exploring different areas of computer science, from Software Development, Data Science, Web Development to Artificial Intelligence. My immediate goal is to secure as internship for summer 2025 so that I can gain real-world experience and advance in my career.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ year",
  },
  {
    icon: <SiExpress className="text-4xl text-gray-700 lg:text-5xl" />,
    name: "Express",
    experience: "1+ year",
  },
  {
    icon: <SiPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    experience: "2+ year",
  },
  {
    icon: <DiSqllite className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "SQLite",
    experience: "1+ year",
  },
  {
    icon: <SiFlask className="text-4xl text-white lg:text-5xl" />,
    name: "Flask",
    experience: "1+ year",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
    experience: "3+ year",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS",
    experience: "2+ year",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-teal-500 lg:text-5xl" />,
    name: "Tailwind",
    experience: "1+ year",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "Javascript",
    experience: "2+ year",
  },
  {
    icon: <SiC className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "C",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Teaching Assistant: Computer Programming II",
    company: "Caldwell University",
    duration: "Aug 2024 - Present",
    description:
      "As the Teaching Assistant, I attended lectures to stay aligned with the course material and helped prepare resources like assignments and exams. I led discussion sections, provided office hours support, and assisted with grading. I facilitated communication between students and the professor, and helped create supplemental materials to enhance learning.",
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Caldwell University",
    duration: "August 2022 - Present",
    description:
      "Minor in Data Analytics. Dean's list. Recipient of the Presidential Scholarship. Participation in various projects involving web development, algorithms, data structures and database management. Actively participating in university activities and seeking practical experience through internships and research opportunities.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Nepal Police School",
    duration: "April 2019 - June 2021",
    description:
      "Science stream with an emphasis in physical science.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/bijaya.bc.129",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/bijay.bc/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/bijayabc",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/bijayabc/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
