"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-4xl font-bold mb-8 star-wars-title text-center">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-l">
        <p className="text-lg mb-6">
          I'm a third-year engineering student with a flair for solving complex
          problems and a deep love for technology. Specializing in web
          development, I continuously explore new technologies, frameworks, and
          methodologies to build impactful digital solutions.
        </p>

        <h2
          style={{ fontFamily: "Star Jedi" }}
          className="text-3xl text-yellow-300 font-light mb-4"
        >
          Skills
        </h2>
        <ul className="list-disc pl-5 mb-6">
          <li>
            🛠️ <strong>Frontend:</strong> HTML | CSS | JavaScript | React |
            Tailwind
          </li>
          <li>
            ⚙️ <strong>Backend:</strong> Node.js | Express.js | Spring Boot |
            Django | PHP
          </li>
          <li>
            🔐 <strong>Database:</strong> MongoDB | MySQL | PostgreSQL
          </li>
          <li>
            📡 <strong>APIs:</strong> RESTful API Development
          </li>
          <li>
            🔍 <strong>Others:</strong> C/C++ | Java | Python | Data Structures
            and Algorithms
          </li>
        </ul>

        <h2
          style={{ fontFamily: "Star Jedi" }}
          className="text-3xl text-yellow-300 font-light mb-4"
        >
          My Playground
        </h2>
        <ul className="list-disc pl-5 mb-6">
          <li>🎨 Crafting intuitive user interfaces</li>
          <li>⚙️ Developing robust backend systems</li>
          <li>📊 Designing efficient databases</li>
          <li>📦 Transforming ideas into functional products through code</li>
        </ul>

        <h2
          style={{ fontFamily: "Star Jedi" }}
          className="text-3xl text-yellow-300 font-light mb-4"
        >
          Projects & Portfolio
        </h2>
        <p className="text-lg mb-6">
          Curious about my work? Explore my projects and experiments on{" "}
          <a
            href="https://github.com/Lakshya-249?tab=repositories"
            className="text-blue-400 underline"
          >
            GitHub
          </a>
          . From dynamic web applications to scalable APIs, my projects reflect
          a strong commitment to quality and innovation.
        </p>

        <h2
          style={{ fontFamily: "Star Jedi" }}
          className="text-3xl text-yellow-300 font-light mb-4"
        >
          Let's Connect!
        </h2>
        <p className="text-lg">
          I'm always open to new opportunities, collaborations, and learning
          experiences. Whether you want to discuss technology, brainstorm ideas,
          or explore potential collaborations, feel free to reach out.
        </p>

        <p className="text-lg font-semibold mt-6">
          Let's create and innovate together! 🌟
        </p>
      </div>
    </motion.section>
  );
}
