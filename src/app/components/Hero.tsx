"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center max-sm:justify-start max-sm:pt-16 items-center text-center relative overflow-hidden"
    >
      <div className="z-10 max-sm:space-y-8">
        <motion.div
          className="mb-8 relative group"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-[250px] h-[250px] max-sm:w-[200px] max-sm:h-[200px] mx-auto">
            <Image
              src="/lakshya_pic.jpeg"
              alt="Lakshya Verma"
              decoding="async"
              fill
              sizes="(max-width: 640px) 200px, 250px"
              priority
              className="rounded-full object-cover shadow-lg shadow-[#60a5fa]/50 group-hover:shadow-[#60a5fa]/80 transition-all duration-300 force-float"
              onError={() => console.error("Failed to load /lakshya_pic.jpeg")}
            />
            <div className="absolute inset-0 rounded-full bg-[#60a5fa]/10 opacity-50" />
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute inset-0 -top-4 -z-10 bg-[#60a5fa]/10 filter blur-[60px] animate-hum" />
          <h1 className="text-5xl max-sm:text-4xl md:text-7xl font-bold mb-4 star-wars-title">
            LAKSHYA VERMA
          </h1>
        </motion.div>
        <motion.p
          className="text-xl max-sm:text-lg md:text-2xl mb-8 text-[#60a5fa]"
          style={{ fontFamily: "Star Jedi" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Galactic Architect of Software Solutions
        </motion.p>
        <motion.div
          className="flex max-sm:space-x-4 space-x-8 justify-center flex-wrap"
          style={{ fontFamily: "Star Jedi" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="px-6 py-2.5 text-white font-medium bg-black/20 border border-[#3B82F6]/50 rounded-full lightsaber-btn shadow-lg shadow-[#3B82F6]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="https://github.com/LakshyaVerma123kl"
            target="_blank"
            className="px-6 py-2.5 text-white font-medium bg-black/20 border border-[#3B82F6]/50 rounded-full lightsaber-btn shadow-lg shadow-[#3B82F6]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lakshya-verma-123kl"
            target="_blank"
            className="px-6 py-2.5 text-white font-medium bg-black/20 border max-sm:mt-4 border-[#3B82F6]/50 rounded-full lightsaber-btn shadow-lg shadow-[#3B82F6]/30"
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
