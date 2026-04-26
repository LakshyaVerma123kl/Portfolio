"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 relative max-w-4xl mx-auto">
      <motion.div 
        className="flex flex-col md:flex-row items-start md:items-center gap-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Text Content */}
        <div className="flex-1">
          <motion.div variants={item} className="mb-8">
            <span className="availability-badge">
              <span className="dot" />
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1 variants={item} className="section-heading mb-6 leading-tight">
            <span className="gradient-text">Lakshya Verma.</span> <br />
            <span className="text-zinc-500 font-medium">Full Stack Engineer</span>
          </motion.h1>

          <motion.p variants={item} className="text-zinc-400 text-lg max-w-lg mb-10 leading-relaxed font-mono text-sm tracking-tight">
            Building scalable web applications with React, Node.js, and modern cloud infrastructure. 
            Prioritizing strict type safety, clean architecture, and uncompromised performance.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </motion.div>
        </div>

        {/* Profile Image - Refined Minimalist with Color */}
        <motion.div variants={item} className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0 group">
          {/* Subtle Indigo Glow */}
          <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
          <Image
            src="/lakshya_pic.jpeg"
            alt="Lakshya Verma"
            fill
            sizes="(max-width: 768px) 128px, 192px"
            priority
            className="object-cover rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
