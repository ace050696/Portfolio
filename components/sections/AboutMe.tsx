"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode, FaPizzaSlice, FaHiking, FaPuzzlePiece, FaChalkboardTeacher } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 Hello there! I am a Senior Full-Stack Software Developer with 8+ years of experience creating fast, reliable, and easy-to-use web and mobile applications. I have worked in industries like SaaS, fintech, e-commerce, and healthcare, using tools such as React, Next.js, Vue.js, Node.js, Express, Python/Django, and Java/Spring Boot.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 
              I design and build systems that are scalable (can grow easily), secure, and efficient. I work with databases like PostgreSQL, MySQL, MongoDB, and Redis, and I use AWS, Azure, and Google Cloud to run applications on the cloud. I follow modern ways of working like Agile/Scrum, and I set up DevOps pipelines with Docker, Kubernetes, CI/CD automation, and testing tools like Jest and Cypress to deliver high-quality code quickly.
            </p>
            <p>
              In the future, I aim to use new technologies such as AI and machine learning to build smarter applications, help teams work better, and create software that makes a real difference for users and businesses.
            </p>  
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[250px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
