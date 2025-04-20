"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Debug logs

  try {
    return (
      <section
        id="experience"
        className="py-16 px-4 bg-transparent relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center star-wars-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience and Certification Matrix
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Professional Summary */}
            <motion.div
              className="col-span-1 md:col-span-2"
              variants={itemVariants}
            >
              <div className="bg-[#1F2937]/80 rounded-lg p-6 border border-blue-500/20 shadow-md shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 force-float">
                <h3 className="text-2xl font-bold mb-4 star-wars-title">
                  Professional Summary
                </h3>
                <p className="text-gray-300 text-base">
                  Hardworking and motivated college student proficient in
                  JavaScript, TypeScript, Java, C++, MongoDB, PostgreSQL, and
                  ReactJS. Skilled in user interface design, testing, and
                  debugging processes. Experienced in building responsive
                  e-commerce and wellness applications with a focus on secure,
                  scalable solutions. Adept at leveraging Docker, Git, and cloud
                  platforms (Netlify/Vercel) to enhance development efficiency.
                </p>
              </div>
            </motion.div>

            {/* Experience Highlights */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 star-wars-title">
                Experience Highlights
              </h3>
              <div className="space-y-6">
                <div className="bg-[#1F2937]/80 rounded-lg p-5 border border-blue-500/20 shadow-md shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 force-float">
                  <h4 className="font-semibold text-xl mb-2 text-white">
                    Cantilever | Full Stack Intern
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Remote | Sep 2024 - Oct 2024
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Built and optimized e-commerce and news websites</li>
                    <li>Developed responsive user interfaces with React</li>
                    <li>Created RESTful APIs using Node.js and MongoDB</li>
                    <li>Implemented efficient database management</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="col-span-1 md:col-span-2"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 star-wars-title">
                Certifications & Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "IBM Certification For Full Stack Development",
                  "VIHAAN 007 Hackathon - IEEE Delhi Technical University",
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="bg-[#1F2937]/80 rounded-lg p-4 border border-blue-500/20 shadow-md shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 force-float"
                  >
                    <p className="text-sm text-gray-300">{cert}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error rendering Experience component:", error);
    return <div>Error loading Experience section</div>;
  }
}
