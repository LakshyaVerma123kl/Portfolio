"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "React", logo: "/react.svg", color: "#61DAFB" },
  { name: "JavaScript", logo: "/javascript.svg", color: "#F7DF1E" },
  { name: "TypeScript", logo: "/typescript.svg", color: "#3178C6" },
  { name: "Node.js", logo: "/node2.svg", color: "#339933" },
  { name: "Nest.js", logo: "/node2.svg", color: "#339933" },
  { name: "Python", logo: "/python.svg", color: "#3776AB" },
  { name: "C++", logo: "/c.svg", color: "#61DAFB" },
  { name: "Expressjs", logo: "/express.svg", color: "#F7DF1E" },
  { name: "Git", logo: "/git.svg", color: "#F05032" },
  { name: "Java", logo: "/java.svg", color: "#FFA500" },
  { name: "Flask", logo: "/flask.svg", color: "#add8e6" },
  { name: "Spring Boot", logo: "/spring.svg", color: "#90EE90" },
  { name: "PostgreSql", logo: "/postgres.svg", color: "#add8e6" },
  { name: "MongoDb", logo: "/mongodb.svg", color: "#4ae562" },
  { name: "Nestjs", logo: "/nest.svg", color: "#FFB6C1" },
  { name: "MySql", logo: "/mysql.svg", color: "#ff8c00" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center star-wars-title">
        My Jedi Powers
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="w-20 h-20 relative mb-2"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={skill.logo || "/placeholder.svg"}
                alt={`${skill.name} logo`}
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
            <p
              className="text-center font-light"
              style={{ color: skill.color, fontFamily: "Star Jedi" }}
            >
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
