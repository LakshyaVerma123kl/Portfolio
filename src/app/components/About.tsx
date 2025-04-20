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
          ABoUT ME
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
              I’m a third-year engineering student with a passion for building
              beautiful, emotional, and immersive digital experiences. My work
              blends frontend creativity with deep storytelling — all through
              the lens of React, Tailwind CSS, and modern animations.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <h3 className="text-3xl text-blue-400 font-bold mb-6 tracking-wide">
              Education
            </h3>
            <div className="bg-[#1F2937]/80 rounded-lg p-5 border-r-2 border-blue-500">
              <h4 className="font-semibold text-xl mb-2">
                Bachelor of Technology | Information Technology
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                Dr. Akhilesh Das Gupta Institute Of Professional Studies | Delhi
                | Nov 2022 - July 2026
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  Relevant Coursework: Web Development, UI/UX Design, Data
                  Structures, Algorithms, Database Systems
                </li>
                <li>
                  Extra-curriculars: Led teams in hackathons, explored creative
                  product ideas
                </li>
                <li>
                  Internship: Full Stack Developer Intern at Cantilever — built
                  scalable, responsive websites using React, Node.js, and
                  MongoDB
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <h3 className="text-3xl text-blue-400 font-bold mb-6 tracking-wide">
              MY PLAYGRoUND
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#1F2937]/80 flex items-start">
                <span className="text-2xl mr-3">🌌</span>
                <p>Designing emotionally resonant digital experiences</p>
              </div>
              <div className="p-4 rounded-lg bg-[#1F2937]/80 flex items-start">
                <span className="text-2xl mr-3">🖌️</span>
                <p>Crafting magical and smooth frontend interfaces</p>
              </div>
              <div className="p-4 rounded-lg bg-[#1F2937]/80 flex items-start">
                <span className="text-2xl mr-3">💡</span>
                <p>Transforming abstract ideas into stunning realities</p>
              </div>
              <div className="p-4 rounded-lg bg-[#1F2937]/80 flex items-start">
                <span className="text-2xl mr-3">🧠</span>
                <p>
                  Building tools that support mindfulness, care, and creativity
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <h3 className="text-3xl text-blue-400 font-bold mb-6 tracking-wide">
              PRoJECT PoRTFoLio
            </h3>
            <div className="bg-[#1F2937]/80 p-6 rounded-lg border-b-2 border-blue-500">
              <p className="text-lg mb-4">
                Curious about my work? Explore my projects and experiments on{" "}
                <a
                  href="https://github.com/LakshyaVerma123kl"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
              <p className="mb-2">
                ✨ <strong>GiftLink</strong> — a full-stack web app for gifting
                and recycling household items. Built with React, Node.js,
                MongoDB & Docker.
              </p>
              <p className="mb-2">
                📊 <strong>Chatscope</strong> — chat analytics platform using
                Python, Flask, and React to analyze emoji usage, timing, and
                sentiment across 50k+ messages.
              </p>
              <p>
                🌿 <strong>Zen Men</strong> — wellness tracker and community hub
                focused on mens mental health. Full-stack, privacy-focused, and
                deeply human.
              </p>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <h3 className="text-3xl text-blue-400 font-bold mb-6 tracking-wide">
              Lets Connect!
            </h3>
            <div className="bg-[#1F2937]/80 p-6 rounded-lg border-t-2 border-blue-500">
              <p className="text-lg mb-4">
                Im always excited to collaborate, learn, or simply connect over
                ideas that matter. Whether youre a creative, a founder, or just
                someone who believes in magic through code — lets talk.
              </p>
              <p className="text-xl font-semibold mt-6 text-blue-400">
                Lets build something beautiful together ✨
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
