"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Expanded skills data with categories from resume
const skillsData = {
  programming: [
    { name: "C++", logo: "/c.svg", level: 90 },
    { name: "JavaScript", logo: "/javascript.svg", level: 95 },
    { name: "TypeScript", logo: "/typescript.svg", level: 85 },
    { name: "Python", logo: "/python.svg", level: 80 },
    { name: "Java", logo: "/java.svg", level: 75 },
    { name: "C", logo: "/c.svg", level: 85 },
  ],
  frontend: [
    { name: "React", logo: "/react.svg", level: 90 },
    { name: "HTML/CSS", logo: "/html.svg", level: 95 },
  ],
  backend: [
    { name: "Node.js", logo: "/node2.svg", level: 88 },
    { name: "Express.js", logo: "/express.svg", level: 85 },
    { name: "NEST", logo: "/nest.svg", level: 80 },
    { name: "Django", logo: "/django.svg", level: 75 },
    { name: "Flask", logo: "/flask.svg", level: 70 },
    { name: "Spring Boot", logo: "/spring.svg", level: 75 },
  ],
  databases: [
    { name: "MongoDB", logo: "/mongodb.svg", level: 85 },
    { name: "MySQL", logo: "/mysql.svg", level: 90 },
    { name: "PostgreSQL", logo: "/postgres.svg", level: 80 },
    { name: "Redis", logo: "/redis.svg", level: 75 },
  ],
  tools: [
    { name: "Git", logo: "/git.svg", level: 90 },
    { name: "VS Code", logo: "/vscode.svg", level: 95 },
    { name: "IntelliJ", logo: "/intellij.svg", level: 85 },
    { name: "Postman", logo: "/postman.svg", level: 88 },
    { name: "Kafka", logo: "/kafka.svg", level: 75 },
  ],
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to render skill progress bar
  const SkillBar = ({
    name,
    logo,
    level,
  }: {
    name: any;
    logo: any;
    level: any;
  }) => (
    <motion.div
      className="bg-[#1F2937]/80 rounded-lg p-4 flex flex-col"
      variants={itemVariants}
    >
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 relative mr-3">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${name} logo`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="font-medium text-white">{name}</h3>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ fontFamily: "Star Jedi" }} className="star-wars-title">
            Experience and Certification Matrix
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Professional Summary */}
          <motion.div
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <div className="bg-[#1F2937]/80 rounded-lg p-6 border-l-2 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Professional Summary
              </h3>
              <p className="text-lg">
                Full-stack developer with expertise in building scalable
                applications and healthcare systems. Experienced in e-commerce
                platforms, news aggregation systems, and medical software.
                Strong background in both frontend and backend technologies with
                a focus on secure, enterprise-grade solutions.
              </p>
            </div>
          </motion.div>

          {/* Experience Highlights */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Experience Highlights
            </h3>
            <div className="space-y-4">
              <div className="bg-[#1F2937]/80 rounded-lg p-5 border-r-2 border-blue-500">
                <h4 className="font-semibold text-xl mb-2">
                  LifeLinkr | Backend Developer
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  Delhi | Sep 2024 - Feb 2025
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    Engineered healthcare systems including IVF/ICSI CRM and
                    Medical Software
                  </li>
                  <li>
                    Implemented enterprise-grade security for sensitive medical
                    data
                  </li>
                </ul>
              </div>
              <div className="bg-[#1F2937]/80 rounded-lg p-5 border-r-2 border-blue-500">
                <h4 className="font-semibold text-xl mb-2">
                  Cantilever | Fullstack Developer
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  Remote | Jun 2024 - Aug 2024
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Developed e-commerce platform with real-time tracking</li>
                  <li>
                    Implemented news aggregation system for user engagement
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Project Showcase */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Project Showcase
            </h3>
            <div className="space-y-4">
              <div className="bg-[#1F2937]/80 rounded-lg p-5 border-l-2 border-blue-500">
                <h4 className="font-semibold text-xl mb-2">
                  8-Bit Custom Compiler
                </h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 px-2 py-1 rounded-md text-xs">
                    C++
                  </span>
                  <span className="bg-blue-900 px-2 py-1 rounded-md text-xs">
                    Python
                  </span>
                  <span className="bg-blue-900 px-2 py-1 rounded-md text-xs">
                    Verilog
                  </span>
                </div>
                <p className="text-sm">
                  Designed an 8-bit CPU using Verilog with a custom compiler in
                  C++
                </p>
              </div>
              <div className="bg-[#1F2937]/80 rounded-lg p-5 border-l-2 border-blue-500">
                <h4 className="font-semibold text-xl mb-2">ChronoSync</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 px-2 py-1 rounded-md text-xs">
                    TypeScript
                  </span>
                  <span className="bg-blue-900 px-2 py-1 rounded-md text-xs">
                    NESTjs
                  </span>
                  <span className="bg-blue-900 px-2 py-1 rounded-md text-xs">
                    React
                  </span>
                </div>
                <p className="text-sm">
                  Advanced schedule management system with email notifications
                  and secure authentication
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Advanced Software Engineering Virtual Experience - Walmart Forage",
                "J.P. Morgan Software Engineering Virtual Experience",
                "Prompt Design in Vertex AI Skill Badge - Google",
                "Generative AI - LinkedIn",
                "IAspire Gold Achievement Award - Accenture",
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#1F2937]/80 rounded-lg p-4 border-b-2 border-blue-500 flex items-center"
                >
                  <span className="text-blue-500 mr-2">🏆</span>
                  <p className="text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
