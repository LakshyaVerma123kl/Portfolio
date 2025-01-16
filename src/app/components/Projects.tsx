"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Ecommerce Service",
    description:
      "A secure ecommerce service with authentication and authorization and live tracking feature with payment gateway integration",
    image: "https://opengraph.githubassets.com/1/Lakshya-249/ecommerce",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "JWT",
      "Express",
    ],
    link: "https://github.com/Lakshya-249/ecommerce",
  },
  {
    id: 2,
    title: "Recipe Book",
    description:
      "A recipe book site to share and see recipes with authenticated users and additional features like reviewing recipe adding it's photos etc",
    image:
      "https://opengraph.githubassets.com/1/Lakshya-249/recipe_book_frontend",
    technologies: [
      "PostgreSQL",
      "Python",
      "Django Rest Framework",
      "React",
      "Typescript",
    ],
    link: "https://github.com/Lakshya-249/social_media_app_backend",
  },
  {
    id: 3,
    title: "Scheduler Service",
    description:
      "An automated servie for everyday schedules and tasks with features like setting recurring tasks at ones, set dates as important and automatic notification feature.",
    image:
      "https://opengraph.githubassets.com/1/Lakshya-249/Schedular_Service_frontend",
    technologies: ["React", "Nestjs", "Typescript", "PostgreSQL", "NodeMailer"],
    link: "https://github.com/Lakshya-249/Schedular_Service_frontend",
  },
  {
    id: 4,
    title: "She Share Travels",
    description:
      "Facilitates room sharing and rental exclusively for women across India.Secure and Trustworthy and community reviews for safe accommodation.",
    image: "https://opengraph.githubassets.com/1/Lakshya-249/SheShareproject",
    technologies: [
      "React",
      "Nodejs",
      "Express",
      "Typescript",
      "Mongodb",
      "Clerk",
    ],
    link: "https://github.com/Lakshya-249/Schedular_Service_frontend",
  },
  {
    id: 5,
    title: "Web Bloacker Extension",
    description:
      "An chrome extension to block websites and pause it on demand used for blocking toddlers from visiting wrong websites and also for self to block web pages,",
    image: "https://opengraph.githubassets.com/1/Lakshya-249/Web_Blocker",
    technologies: ["React", "JavaScript", "Chrome Storage Api", "Manifestjs"],
    link: "https://github.com/Lakshya-249/Web_Blocker",
  },
  {
    id: 6,
    title: "Pdf & Websites GPT API",
    description:
      "Created a pdf and website gpt api tool where you can talk to your pdf or webistes by providing your pdf and website link you want to talk about",
    image: "https://opengraph.githubassets.com/1/Lakshya-249/pdf_website_gpt",
    technologies: ["Python", "GenAI", "Langchain", "Gemni API", "Flask"],
    link: "https://github.com/Lakshya-249/pdf_website_gpt",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center star-wars-title">
        Galactic Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-48">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                layout="fill"
                loading="lazy"
                objectFit="cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-black py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 lightsaber-btn"
                >
                  View Project
                </a>
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 star-wars-title">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-yellow-200 text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
