"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";

const stats = [
  { number: "70+", label: "GitHub Repos" },
  { number: "3+", label: "Years Coding" },
  { number: "2", label: "Internships" },
  { number: "2", label: "Certifications" },
];

function StatCard({ stat }: { stat: { number: string; label: string } }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  function handleMouse(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="bg-[#09090b] p-5 flex flex-col justify-center items-center text-center cursor-default hover:bg-[#0c0c0e] transition-colors relative group"
    >
      <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors duration-500 pointer-events-none" />
      <motion.div 
        className="text-2xl font-bold text-zinc-50 mb-1 tracking-tighter"
        style={{ transform: "translateZ(30px)" }}
      >
        {stat.number}
      </motion.div>
      <motion.div 
        className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest"
        style={{ transform: "translateZ(15px)" }}
      >
        {stat.label}
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-12 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <h2 className="text-xl font-bold tracking-tight text-zinc-50 mb-2">About.</h2>
        <p className="text-zinc-500 font-mono text-sm">Background & Education</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Left: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 space-y-6 text-zinc-400 text-sm leading-relaxed"
        >
          <p>
            I&apos;m a <span className="text-zinc-50 font-medium">final-year B.Tech student</span> based
            in <span className="text-zinc-50 font-medium">Delhi, India</span>. I specialize in building and deploying scalable web applications using React.js, Node.js, MongoDB, and Docker.
          </p>
          <p>
            I&apos;ve interned at <span className="text-zinc-50 font-medium">Quazar</span> and <span className="text-zinc-50 font-medium">Cantilever</span>,
            where I designed interactive learning features, built e-commerce platforms, and developed RESTful APIs. I prioritize <span className="text-zinc-50 font-medium">clean code</span> and optimized performance over flashy aesthetics.
          </p>
          <p>
            When I&apos;m not shipping features, I&apos;m leading hackathon teams, exploring AI integrations,
            or building side projects that solve real problems — like <span className="text-zinc-50 font-medium">FitnessAI</span>,
            an AI-powered platform with a custom multi-LLM fallback architecture.
          </p>

          {/* Education Block */}
          <div className="mt-12 border-t border-white/5 pt-8">
            <h3 className="text-zinc-50 font-medium mb-1">Bachelor of Technology — Information Technology</h3>
            <p className="text-zinc-500 font-mono text-xs mb-4">
              Dr. Akhilesh Das Gupta Institute of Professional Studies • Nov 2022 – Jul 2026
            </p>
            <div className="flex flex-wrap gap-2">
              {["Web Development", "UI/UX Design", "Data Structures", "Algorithms", "Database Systems"].map((course) => (
                <span key={course} className="tech-pill">{course}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Stats & Offerings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h4 className="text-zinc-50 text-sm font-medium">Focus Areas</h4>
            <ul className="space-y-3">
              {[
                "RESTful APIs & Auth",
                "Scalable Architecture",
                "Docker & CI/CD",
                "System Design",
              ].map((item) => (
                <li key={item} className="text-zinc-400 text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-indigo-400 transition-colors" />
                  <span className="group-hover:text-zinc-200 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
