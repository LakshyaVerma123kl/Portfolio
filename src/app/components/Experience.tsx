"use client";

const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Quazar",
    period: "Sep 2025 — Jan 2026",
    location: "Remote",
    tech: "React.js, Node.js",
    description: [
      "Designed and developed new features for interactive learning platforms.",
      "Collaborated in brainstorming and technical discussions to shape product direction.",
      "Worked closely with the team on end-to-end feature delivery and code reviews.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Cantilever",
    period: "Sep 2024 — Oct 2024",
    location: "Remote",
    tech: "React, Node.js, MongoDB",
    description: [
      "Built and optimized e-commerce and news websites with responsive React UIs.",
      "Developed RESTful APIs for seamless frontend-backend communication.",
      "Created efficient database schemas with MongoDB for optimized performance.",
      "Implemented end-to-end features from design to deployment.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-xl font-bold tracking-tight text-zinc-50 mb-2">Experience.</h2>
        <p className="text-zinc-500 font-mono text-sm">Career history</p>
      </div>

      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8 group">
            {/* Timeline Meta */}
            <div className="text-sm">
              <p className="text-zinc-50 font-medium mb-1">{exp.period}</p>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-wider">{exp.company}</p>
              <p className="text-zinc-600 font-mono text-xs mt-1">{exp.location}</p>
            </div>

            {/* Content */}
            <div className="pb-12 border-b border-white/5 group-last:border-none group-last:pb-0">
              <h3 className="text-lg font-medium text-zinc-50 mb-4">{exp.role}</h3>
              
              <ul className="space-y-3 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-zinc-700 mt-1.5 flex-shrink-0 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.split(", ").map((t) => (
                  <span key={t} className="tech-pill text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
