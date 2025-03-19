"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "8-Bit Custom Compiler and CPU Simulation",
    description:
      "Designed an 8-bit CPU in Verilog and a C++ compiler with a full compilation pipeline.",
    image:
      "https://opengraph.githubassets.com/1/Lakshya-249/8-bit-toolchain-compiler_and_assembler",
    technologies: ["C++", "Verilog", "Python", "CMake"],
    link: "https://github.com/Lakshya-249/8-bit-toolchain-compiler_and_assembler",
  },
  {
    title: "ChronoSync",
    description:
      "Built a schedule manager with recurring events, email alerts, and JWT auth.",
    image: "https://opengraph.githubassets.com/1/Lakshya-249/Scheduler_Service",
    technologies: ["TypeScript", "Nest.js", "React", "Node.js"],
    link: "https://github.com/Lakshya-249/Scheduler_Service",
  },
  {
    title: "E-commerce Service",
    description:
      "Created an e-commerce platform with live tracking and payments.",
    image: "https://opengraph.githubassets.com/1/Lakshya-249/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    link: "https://github.com/Lakshya-249/ecommerce",
  },
  {
    id: 2,
    title: "Recipe Book",
    description:
      "A recipe book site to share and see recipes with authenticated users and features like reviewing recipe adding it's photos etc",
    image:
      "https://opengraph.githubassets.com/1/Lakshya-249/recipe_book_frontend",
    technologies: [
      "PostgreSQL",
      "Python",
      "React",
      "Typescript",
      "Django Rest Framework",
    ],
    link: "https://github.com/Lakshya-249/social_media_app_backend",
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
  return (
    <section id="projects" className="py-16 text-white">
      <h2
        className="text-4xl font-extrabold star-wars-title mb-10 text-center"
        style={{ fontFamily: "Star Jedi" }}
      >
        Project Archives
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-[#1F2937]/80 rounded-lg border border-[#3B82F6]/40 shadow-lg shadow-[#3B82F6]/20 hover:shadow-[#3B82F6]/50 transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                layout="fill"
                // objectFit="cover"
                className="hover:scale-105 object-fill transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 transition-all duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#3B82F6]/20 text-[#3B82F6] text-xs px-2 py-1 rounded-full border border-[#3B82F6]/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="relative px-6 py-2 text-white font-medium bg-[#3B82F6]/20 border border-[#3B82F6]/50 rounded-full hover:bg-[#3B82F6]/40 transition-all duration-300 shadow-md shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 overflow-hidden group"
              >
                <span className="relative z-10">View Project</span>
                <div className="absolute inset-0 bg-[#3B82F6] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
