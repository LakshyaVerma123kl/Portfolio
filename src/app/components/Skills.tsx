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
    name: string;
    logo: string;
    level: number;
  }) => (
    <motion.div
      className="bg-[#1F2937]/80 rounded-lg p-4 flex flex-col border border-[#3B82F6]/40 shadow-lg shadow-[#3B82F6]/20 hover:shadow-[#3B82F6]/50 transition-all duration-300 transform hover:-translate-y-1"
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
          className="bg-blue-500/60 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ fontFamily: "Star Jedi" }} className="star-wars-title">
            Skill Matrix
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Programming Languages */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Programming Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.programming.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Frontend & Backend */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Frontend & Backend
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...skillsData.frontend, ...skillsData.backend.slice(0, 4)].map(
                (skill) => (
                  <SkillBar key={skill.name} {...skill} />
                )
              )}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Databases</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.databases.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.tools.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
