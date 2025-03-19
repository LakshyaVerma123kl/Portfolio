"use client";

import { motion } from "framer-motion";

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold mb-12 star-wars-title tracking-wider text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ABOUT ME
        </motion.h2>

        <motion.div
          className="space-y-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-lg leading-relaxed"
            variants={sectionVariants}
          >
            <p className="mb-6">
              I'm a third-year engineering student with a flair for solving
              complex problems and a deep love for technology. Specializing in
              web development, I continuously explore new technologies,
              frameworks, and methodologies to build impactful digital
              solutions.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <h3 className="text-3xl text-blue-400 font-bold mb-6 tracking-wide">
              SKILLS
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#1F2937]/80 p-5 rounded-lg border-l-2 border-blue-500">
                <h4 className="font-bold mb-2 flex items-center">
                  <span className="mr-2">🛠️</span> Frontend
                </h4>
                <p>HTML | CSS | JavaScript | React | Tailwind</p>
              </div>
              <div className="bg-[#1F2937]/80 p-5 rounded-lg border-l-2 border-blue-500">
                <h4 className="font-bold mb-2 flex items-center">
                  <span className="mr-2">⚙️</span> Backend
                </h4>
                <p>Node.js | Express.js | Spring Boot | Django | PHP</p>
              </div>
              <div className="bg-[#1F2937]/80 p-5 rounded-lg border-l-2 border-blue-500">
                <h4 className="font-bold mb-2 flex items-center">
                  <span className="mr-2">🔐</span> Database
                </h4>
                <p>MongoDB | MySQL | PostgreSQL</p>
              </div>
              <div className="bg-[#1F2937]/80 p-5 rounded-lg border-l-2 border-blue-500">
                <h4 className="font-bold mb-2 flex items-center">
                  <span className="mr-2">🔍</span> Others
                </h4>
                <p>C/C++ | Java | Python | Data Structures and Algorithms</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <h3 className="text-3xl text-blue-400 font-bold mb-6 tracking-wide">
              MY PLAYGROUND
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#1F2937]/80 flex items-start">
                <span className="text-2xl mr-3">🎨</span>
                <p>Crafting intuitive user interfaces</p>
              </div>
              <div className="p-4 rounded-lg bg-[#1F2937]/80 flex items-start">
                <span className="text-2xl mr-3">⚙️</span>
                <p>Developing robust backend systems</p>
              </div>
              <div className="p-4 rounded-lg bg-[#1F2937]/80 flex items-start">
                <span className="text-2xl mr-3">📊</span>
                <p>Designing efficient databases</p>
              </div>
              <div className="p-4 rounded-lg bg-[#1F2937]/80 flex items-start">
                <span className="text-2xl mr-3">📦</span>
                <p>Transforming ideas into functional products through code</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <h3 className="text-3xl text-blue-400 font-bold mb-6 tracking-wide">
              PROJECTS & PORTFOLIO
            </h3>
            <div className="bg-[#1F2937]/80 p-6 rounded-lg border-b-2 border-blue-500">
              <p className="text-lg mb-4">
                Curious about my work? Explore my projects and experiments on{" "}
                <a
                  href="https://github.com/Lakshya-249?tab=repositories"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
              <p>
                From dynamic web applications to scalable APIs, my projects
                reflect a strong commitment to quality and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <h3
              className="text-3xl text-blue-400 font-bold
              mb-6 tracking-wide"
            >
              Let's Connect!
            </h3>
            <div className="bg-[#1F2937]/80 p-6 rounded-lg border-t-2 border-blue-500">
              <p className="text-lg mb-4">
                I'm always open to new opportunities, collaborations, and
                learning experiences. Whether you want to discuss technology,
                brainstorm ideas, or explore potential collaborations, feel free
                to reach out.
              </p>
              <p className="text-xl font-semibold mt-6 text-blue-400">
                Let's create and innovate together! 🌟
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
