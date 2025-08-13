// data/workExperience.ts
import { FaBriefcase, FaPython, FaDatabase, FaChartBar, FaAws, FaReact, FaChalkboardTeacher, FaHtml5, FaJava, FaCss3, FaAngular, } from 'react-icons/fa';
import { SiPowerbi } from 'react-icons/si';
import { PiMathOperationsFill } from "react-icons/pi";
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
{
    company: "Sugerendo",
    position: "Senior Full-Stack Developer",
    duration: "12/2021 - Present ",
    year: 2025,
    description: [
      "Spearheaded the development of a feature-rich analytics platform, integrating HTML5, CSS3, and React, boosting customer insights by 35%",
      "Orchestrated a seamless migration of key applications to AWS, resulting in a 25% reduction in hosting costs and a 15% improvement in application availability",
      "Collaborated closely with cross-functional teams to re-engineer a legacy system using Java and Spring Boot, improving system efficiency by 40%",
      "Championed CI/CD processes using Jenkins and Docker, reducing deployment times by 50% and facilitating consistent, daily production updates",
    ],
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "React", icon: FaReact },
      { name: "Java", icon: FaJava },
      { name: "Angular", icon: FaAngular },
      { name: "Python", icon: FaPython },
      { name: "AWS", icon: FaAws }
    ],
    logo: "/logos/concordia-university.png" // Add the path to the Concordia University logo
  },
  {
    company: "Sisteplant",
    position: "Software Engineer II",
    duration: "11/2020 - 12/2021          ",
    year: 2021,
    description: [
      "Developed an e-commerce web application using React and TypeScript that handled over 10,000 transactions monthly",
      "Enhanced user authentication and security by implementing OAuth and JWT, securing user data across platforms",
      "Optimized SQL and NoSQL database queries, reducing load times by 20% and enhancing user experience",
      "Actively participated in bi-weekly agile sprint planning, contributing to a 15% increase in team velocity",
      "Mentored three junior developers in test-driven development and pair programming practices, improving team productivity by 10%"
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: FaDatabase }
    ],
    logo: "/logos/ia-flow.png"
  },
  {
    company: "Baldarian",
    position: "Junior Software Developer",
    duration: "09/2020 - 11/2020 ",
    year: 2020,
    description: [
      "Implemented new features for a cloud-based SaaS product, benefiting over 1,000 enterprise clients",
      "Reduced application load time by 25% by re-factoring inefficient code and optimizing front-end assets",
      "Initiated a corporate-wide code review practice, which improved code qualityby 30%",
      "Contributed to the creation of a customer support chatbot using AI technologies, enhancing customer service response times by 40%"
    ],
    skills: [
      { name: "Technical Documentation", icon: FaChartBar },
      { name: "Client Communication", icon: FaBriefcase }
    ],
    logo: "/logos/junior.png"
  }
];
