"use client";

import { useEffect, useState, useCallback, MouseEvent } from "react";
import { motion } from "framer-motion";

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  stars: number;
  forks: number;
  featured?: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const getFallbackProjects = useCallback((): Project[] => [
    {
      title: "FitnessAI",
      description:
        "AI-powered personal trainer & diet planner with a multi-LLM fallback system, auto-progression engine, calendar export, and personalized notifications.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Gemini API"],
      link: "https://github.com/LakshyaVerma123kl",
      stars: 0,
      forks: 0,
      featured: true,
    },
    {
      title: "Chatscope",
      description:
        "Analysis tool processing sentiment, response times, and dynamics across 50k+ messages with custom algorithms and flow graph visualizations.",
      technologies: ["Python", "Flask", "React"],
      link: "https://github.com/LakshyaVerma123kl/chatscope-frontend",
      stars: 0,
      forks: 0,
      featured: true,
    },
    {
      title: "GiftLink",
      description:
        "Platform for giving household items with secure backend and RESTful APIs.",
      technologies: ["React", "Express", "MongoDB"],
      link: "https://github.com/LakshyaVerma123kl/fullstack-capstone-project",
      stars: 0,
      forks: 0,
    },
    {
      title: "Zen Men",
      description:
        "Habit tracker featuring secure JWT authentication and Docker CI/CD.",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      link: "https://github.com/LakshyaVerma123kl/ZenMen",
      stars: 0,
      forks: 0,
    },
    {
      title: "RecallIQ",
      description:
        "Flashcard application with SM-2 spaced repetition engine for adaptive learning.",
      technologies: ["Next.js", "TypeScript", "Vercel"],
      link: "https://github.com/LakshyaVerma123kl",
      stars: 0,
      forks: 0,
    },
    {
      title: "Ecommerce Platform",
      description:
        "E-commerce solution built with real-time tracking and payment integration.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/LakshyaVerma123kl/Cantilever-Ecommerce",
      stars: 0,
      forks: 0,
    },
  ], []);

  const fetchGitHubProjects = useCallback(async () => {
    try {
      setLoading(true);
      let response = await fetch("/api");
      if (!response.ok) {
        response = await fetch(
          `https://api.github.com/users/LakshyaVerma123kl/repos?sort=updated&per_page=6`
        );
      }
      if (!response.ok) throw new Error("Failed");
      const repos: GitHubRepo[] = await response.json();
      const originals = repos.filter((r) => !r.name.includes("fork"));
      const formatted: Project[] = originals.slice(0, 6).map((repo) => ({
        title: repo.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        description: repo.description || "No description available.",
        technologies: [
          repo.language,
          ...(repo.language === "JavaScript" ? ["React"] : []),
          ...(repo.language === "Python" ? ["Flask"] : []),
          ...(repo.language === "TypeScript" ? ["Next.js"] : []),
        ].filter(Boolean).slice(0, 4),
        link: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
      }));
      setProjects(formatted.length > 0 ? formatted : getFallbackProjects());
    } catch {
      setProjects(getFallbackProjects());
    } finally {
      setLoading(false);
    }
  }, [getFallbackProjects]);

  useEffect(() => {
    fetchGitHubProjects();
  }, [fetchGitHubProjects]);

  // Vercel-style Mouse Spotlight Effect
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll(".spotlight-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <section id="projects" className="py-12 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
      >
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-50 mb-2">Projects.</h2>
          <p className="text-zinc-500 font-mono text-sm">Selected work & experiments</p>
        </div>
        <a
          href="https://github.com/LakshyaVerma123kl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-50 transition-colors"
        >
          View GitHub →
        </a>
      </motion.div>

      {loading ? (
        <div className="py-20 text-zinc-500 font-mono text-sm">Loading projects...</div>
      ) : (
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onMouseMove={handleMouseMove}
        >
          {projects.map((project, i) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`spotlight-card group relative bg-[#0c0c0e] border border-white/5 rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Spotlight Overlay */}
              <div 
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(129, 140, 248, 0.1), transparent 40%)`
                }}
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-zinc-50 font-medium group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <svg
                    className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, ti) => (
                      <span key={ti} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-zinc-500 text-xs font-mono">
                    {project.stars > 0 && <span>★ {project.stars}</span>}
                    {project.forks > 0 && <span>⑂ {project.forks}</span>}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
