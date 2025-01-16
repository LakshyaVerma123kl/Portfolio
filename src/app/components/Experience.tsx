"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Backend Developer Intern",
    company: "LifeLinkr",
    period: "Sep 2024 - Jan 2025",
    description:
      "Developed robust backend solutions for CRM systems in IVF/IUI clinics and hospitals.\nImplemented secure data handling protocols for sensitive medical information.\nArchitected scalable backend systems using Node.js, Express, and EJS.\nDesigned efficient data management solutions with MySQL and MongoDB.\nEnhanced user interfaces and improved interactivity using jQuery and JavaScript.\nCollaborated with healthcare professionals to optimize patient management workflows",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Cantilever",
    period: "July 2024 - Aug 2024",
    description:
      "Engineered full-featured e-commerce platform with live tracking and secure payments.\nDeveloped customizable news aggregation website to enhance user engagement.\nImplemented full-stack solutions including database management and API integration.\nTechnical skills: Frontend/backend development, responsive design, payment processing",
  },
  {
    title: "Advanced Software Engineering Virtual Experience Program",
    company: "Walmart Forage",
    period: "Jul 2024",
    description:
      "Advanced	Data	Structures,\nSoftware	Architecture,\nRelational	Database Design,\nData	Munging",
  },
  {
    title: "J.P. Morgan Software Engineering Virtual Experience",
    company: "J.P. Morgan Forage",
    period: "Jul 2024",
    description:
      " Interface	with a	stock	price	data feed, Use JPMorgan	Chase	&	Co.	frameworks and tools, Display data visually	for	traders, Bonus task: Open	source contribution",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold mb-8 text-center star-wars-title">
        Galactic Service Record
      </h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-bold star-wars-title">{exp.title}</h3>
            <p className="text-xl text-blue-400">{exp.company}</p>
            <p className="text-gray-400 mb-2">{exp.period}</p>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
