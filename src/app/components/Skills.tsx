"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  level: number;
}

interface SkillsData {
  programming: Skill[];
  frontend: Skill[];
  backend: Skill[];
  databases: Skill[];
  tools: Skill[];
}

const skillsData: SkillsData = {
  programming: [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "Java", level: 75 },
    { name: "C++", level: 70 },
  ],
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Chart.js", level: 75 },
    { name: "Redux", level: 70 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Django", level: 75 },
    { name: "Flask", level: 70 },
    { name: "FastAPI", level: 70 },
    { name: "Spring Boot", level: 65 },
  ],
  databases: [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Firebase", level: 70 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 70 },
    { name: "Netlify", level: 75 },
    { name: "Vercel", level: 75 },
    { name: "Heroku", level: 70 },
  ],
};

const iconFileMap: { [key: string]: string } = {
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg",
  Python: "python.svg",
  Java: "java.svg",
  "C++": "cpp.svg",
  React: "react.svg",
  "Next.js": "nextdotjs.svg",
  "Tailwind CSS": "tailwindcss.svg",
  "Chart.js": "chartdotjs.svg",
  Redux: "redux.svg",
  "Node.js": "node2.svg",
  "Express.js": "express.svg",
  Django: "django.svg",
  Flask: "flask.svg",
  FastAPI: "fastapi.svg",
  "Spring Boot": "spring.svg",
  MongoDB: "mongodb.svg",
  PostgreSQL: "postgresql.svg",
  MySQL: "mysql.svg",
  Firebase: "firebase.svg",
  Git: "git.svg",
  Docker: "docker.svg",
  AWS: "aws.svg",
  Netlify: "netlify.svg",
  Vercel: "vercel.svg",
  Heroku: "heroku.svg",
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const SkillBar = ({ name, level }: Skill) => {
    const iconFilename = iconFileMap[name] || "fallback.svg";
    const iconPath = `/${iconFilename}`;

    return (
      <motion.div
        className="relative bg-[#1F2937]/80 rounded-lg p-3 flex items-center h-20 border border-blue-500/20 shadow-md shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 force-float"
        variants={itemVariants}
        whileHover={{ scale: 1.03 }}
      >
        <div className="w-6 h-6 relative mr-2 flex-shrink-0">
          <Image
            src={iconPath}
            alt={`${name} icon`}
            width={24}
            height={24}
            style={{ width: "auto", height: "auto" }}
            className="object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-white text-sm truncate">{name}</h3>
          <div className="w-full bg-gray-800/50 rounded-full h-1.5 mt-1">
            <motion.div
              className="bg-blue-400 h-1.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-16 px-4 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center star-wars-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 star-wars-title">
              Programming Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.programming.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 star-wars-title">Frontend</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.frontend.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 star-wars-title">Backend</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.backend.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 star-wars-title">
              Databases
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.databases.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 star-wars-title">
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
