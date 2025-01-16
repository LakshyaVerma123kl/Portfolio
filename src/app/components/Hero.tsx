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
          className="mb-8 relative max-sm:pl-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/star-wars.svg"
            alt="Lakshya"
            loading="lazy"
            width={200}
            height={200}
            className="rounded-full border-4 border-[#f4ee42] hover:bg-[#f4ee42] transition duration-300 ease-in-out star-wars force-float"
          />
          <div className="absolute inset-0 rounded-full hologram"></div>
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
          className="text-4xl text-yellow-300 max-sm:text-xl md:text-2xl mb-8"
          style={{ fontFamily: "Star Jedi" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Jedi Master of Software Development
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
      <div className="absolute w-full h-full flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-lg text-center text-blue-400 crawl-text">
          <h2 className="text-2xl mb-4">Episode IV</h2>
          <h3 className="text-4xl mb-8">A NEW DEVELOPER</h3>
          <p>
            It is a period of technological revolution. Rebel developers,
            striking from hidden bases, have won their first victories against
            the evil Galactic Empire of outdated websites.
          </p>
          <p className="mt-4">
            During the battle, rebel spies managed to steal secret plans to the
            Empire's ultimate weapon, the DEATH STAR, an armored space station
            with enough power to destroy an entire planet's online presence.
          </p>
          <p className="mt-4">
            Pursued by the Empire's sinister agents, Your Name races home aboard
            their starship, custodian of the stolen plans that can save the
            people and restore freedom to the internet...
          </p>
        </div>
      </div>
    </motion.section>
  );
}
