"use client";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core & Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Chart.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "Spring Boot"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    title: "Infrastructure & Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "Netlify", "Heroku", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-xl font-bold tracking-tight text-zinc-50 mb-2">Skills.</h2>
        <p className="text-zinc-500 font-mono text-sm">Technologies I work with</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-zinc-50 text-sm font-medium mb-4 pb-2 border-b border-white/5">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
