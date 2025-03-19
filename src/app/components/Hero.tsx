"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center max-sm:justify-start max-sm:pt-14 items-center text-center relative overflow-hidden"
    >
      <div className="z-10 max-sm:space-y-10">
        <motion.div
          className="mb-10 relative group"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-[220px] h-[220px] mx-auto">
            <Image
              src="/Lakshya-photo.jpg"
              alt="Lakshya Kumar Singh"
              loading="lazy"
              fill
              className="rounded-full object-cover shadow-lg shadow-[#42f4ee]/50 group-hover:shadow-[#42f4ee]/80 transition-all duration-300 star-wars force-float"
            />
            <div className="absolute inset-0 rounded-full hologram pointer-events-none group-hover:bg-[#42f4ee]/10 transition-all duration-300" />
            <div className="absolute inset-0 rounded-full bg-[#42f4ee]/5 opacity-50 animate-pulse" />
          </div>
        </motion.div>
        <motion.h1
          className="text-5xl max-sm:text-4xl md:text-7xl font-bold mb-4 star-wars-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          LAKSHYA KUMAR SINGH
        </motion.h1>
        <motion.p
          className="text-4xl text-blue-400 max-sm:text-xl md:text-2xl mb-8"
          style={{ fontFamily: "Star Jedi" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Galactic Architect of Software Solutions
        </motion.p>
        <motion.div
          className="flex max-sm:space-x-6 space-x-10 justify-center flex-wrap"
          style={{ fontFamily: "Star Jedi" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="bg-gray-800 hover:bg-gray-700 star-wars text-white font-light py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 lightsaber-btn blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="https://github.com/Lakshya-249"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-700 star-wars text-white font-light py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 lightsaber-btn blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lakshya-kumar-singh-b52839263/"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-700 star-wars max-sm:mt-6 text-white font-light py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 lightsaber-btn blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
