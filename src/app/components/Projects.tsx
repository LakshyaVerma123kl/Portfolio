"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "GiftLink",
    description:
      "A platform for giving and receiving household items, featuring a responsive front-end, secure back-end, and RESTful APIs for listings and user interactions.",
    image: "/github-placeholder.jpeg",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
    ],
    link: "https://github.com/LakshyaVerma123kl/fullstack-capstone-project",
  },
  {
    title: "Chatscope",
    description:
      "A conversation analysis tool that processes sentiment, response times, and emojis, with a React front-end and Flask back-end hosted on Replit and Render.",
    image: "/github-placeholder.jpeg",
    technologies: ["Python", "Flask", "React", "REST APIs", "Replit", "Render"],
    link: "https://github.com/LakshyaVerma123kl/chatscope-frontend",
  },
  {
    title: "Zen Men",
    description:
      "A wellness and habit tracker for men, featuring mood tracking, secure JWT login, and Docker-based CI/CD deployment.",
    image: "/github-placeholder.jpeg",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "JWT"],
    link: "https://github.com/LakshyaVerma123kl/ZenMen",
  },
  {
    title: "Cantilever Ecommerce",
    description:
      "An e-commerce platform developed during an internship, featuring real-time tracking and payment integration for seamless user experiences.",
    image: "/github-placeholder.jpeg",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/LakshyaVerma123kl/Cantilever-Ecommerce",
  },
  {
    title: "Cantilever News Website",
    description:
      "A news aggregation website built during an internship, designed with responsive interfaces and optimized content delivery.",
    image: "/github-placeholder.jpeg",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/LakshyaVerma123kl/Cantilever-News-Website",
  },
  {
    title: "Dribble",
    description:
      "A dynamic platform showcasing full-stack development capabilities with modern technologies, designed to enhance user engagement.",
    image: "/github-placeholder.jpeg",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/LakshyaVerma123kl/Dribble",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-16 px-4 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center star-wars-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="relative bg-[#1F2937]/80 rounded-lg p-5 border border-blue-500/20 shadow-md shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 force-float"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  onError={() =>
                    console.error(`Failed to load ${project.image}`)
                  }
                />
                <div className="absolute inset-0 bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-[#60a5fa] bg-[#1F2937]/50 rounded-full border border-blue-500/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-white font-medium bg-black/20 border border-[#3B82F6]/50 rounded-full lightsaber-btn shadow-lg shadow-[#3B82F6]/30"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
