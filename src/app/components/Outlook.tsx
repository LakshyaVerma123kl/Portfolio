"use client";

import { motion } from "framer-motion";

export default function Outlook() {
  const aspirations = [
    "Mastering the ways of the Backend Force",
    "Exploring new frontiers in software development",
    "Contributing to open-source projects across the galaxy",
    "Learning from the next generation of Padawan developers",
    "Attending intergalactic tech conferences",
  ];

  return (
    <section id="outlook" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center star-wars-title">
        Future outlook
      </h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1F2937]/80 p-8 rounded-lg shadow-lg border-l-2 border-blue-500"
        >
          <h3
            style={{ fontFamily: "Star Jedi" }}
            className="text-2xl font-semibold mb-6 text-center text-blue-400"
          >
            My Jedi Path
          </h3>
          <ul className="space-y-4">
            {aspirations.map((aspiration, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center"
              >
                <span className="text-yellow-400 mr-4">⭐</span>
                <span>{aspiration}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
