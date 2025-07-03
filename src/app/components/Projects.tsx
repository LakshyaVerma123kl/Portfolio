"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  stars: number;
  forks: number;
  language: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Your GitHub username
  const GITHUB_USERNAME = "LakshyaVerma123kl";

  // Fallback projects (your current projects)
  const fallbackProjects: Project[] = [
    {
      title: "GiftLink",
      description: "A platform for giving and receiving household items, featuring a responsive front-end, secure back-end, and RESTful APIs for listings and user interactions.",
      image: "/github-placeholder.jpeg",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Docker"],
      link: "https://github.com/LakshyaVerma123kl/fullstack-capstone-project",
      stars: 0,
      forks: 0,
      language: "JavaScript"
    },
    {
      title: "Chatscope",
      description: "A conversation analysis tool that processes sentiment, response times, and emojis, with a React front-end and Flask back-end hosted on Replit and Render.",
      image: "/github-placeholder.jpeg",
      technologies: ["Python", "Flask", "React", "REST APIs", "Replit", "Render"],
      link: "https://github.com/LakshyaVerma123kl/chatscope-frontend",
      stars: 0,
      forks: 0,
      language: "Python"
    },
    {
      title: "Zen Men",
      description: "A wellness and habit tracker for men, featuring mood tracking, secure JWT login, and Docker-based CI/CD deployment.",
      image: "/github-placeholder.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "JWT"],
      link: "https://github.com/LakshyaVerma123kl/ZenMen",
      stars: 0,
      forks: 0,
      language: "JavaScript"
    },
    {
      title: "Cantilever Ecommerce",
      description: "An e-commerce platform developed during an internship, featuring real-time tracking and payment integration for seamless user experiences.",
      image: "/github-placeholder.jpeg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/LakshyaVerma123kl/Cantilever-Ecommerce",
      stars: 0,
      forks: 0,
      language: "JavaScript"
    },
    {
      title: "Cantilever News Website",
      description: "A news aggregation website built during an internship, designed with responsive interfaces and optimized content delivery.",
      image: "/github-placeholder.jpeg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/LakshyaVerma123kl/Cantilever-News-Website",
      stars: 0,
      forks: 0,
      language: "JavaScript"
    },
    {
      title: "Dribble",
      description: "A dynamic platform showcasing full-stack development capabilities with modern technologies, designed to enhance user engagement.",
      image: "/github-placeholder.jpeg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/LakshyaVerma123kl/Dribble",
      stars: 0,
      forks: 0,
      language: "JavaScript"
    }
  ];

  // Function to fetch README content
  const fetchReadmeContent = async (repoName: string): Promise<string> => {
    try {
      // Try different README file names
      const readmeFiles = ['README.md', 'readme.md', 'Readme.md', 'README.txt'];
      
      for (const fileName of readmeFiles) {
        try {
          const response = await fetch(
            `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/main/${fileName}`
          );
          
          if (response.ok) {
            const content = await response.text();
            return extractDescriptionFromReadme(content);
          }
        } catch (error) {
          // Try 'master' branch if 'main' doesn't work
          try {
            const response = await fetch(
              `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/master/${fileName}`
            );
            
            if (response.ok) {
              const content = await response.text();
              return extractDescriptionFromReadme(content);
            }
          } catch (masterError) {
            continue;
          }
        }
      }
      
      return "";
    } catch (error) {
      console.error(`Error fetching README for ${repoName}:`, error);
      return "";
    }
  };

  // Function to extract description from README content
  const extractDescriptionFromReadme = (content: string): string => {
    // Remove markdown syntax and get meaningful content
    const lines = content.split('\n').filter(line => line.trim());
    
    // Skip title lines (usually starting with #)
    const contentLines = lines.filter(line => !line.startsWith('#') && line.trim().length > 0);
    
    // Look for description patterns
    for (const line of contentLines) {
      // Skip lines that are just links, badges, or short phrases
      if (line.length > 50 && 
          !line.includes('[![') && 
          !line.startsWith('http') && 
          !line.includes('## ') &&
          !line.includes('### ')) {
        // Clean up the line
        return line
          .replace(/\*\*/g, '') // Remove bold markdown
          .replace(/\*/g, '') // Remove italic markdown
          .replace(/`/g, '') // Remove code markdown
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with text
          .trim()
          .substring(0, 200); // Limit length
      }
    }
    
    // If no good description found, try to get the first substantial paragraph
    const firstParagraph = contentLines.find(line => line.length > 30);
    if (firstParagraph) {
      return firstParagraph
        .replace(/\*\*/g, '')
        .replace(/\*/g, '')
        .replace(/`/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .trim()
        .substring(0, 200);
    }
    
    return "";
  };

  // Function to extract technologies from README
  const extractTechnologiesFromReadme = (content: string, repoLanguage: string): string[] => {
    const technologies = new Set<string>();
    
    // Add the main language
    if (repoLanguage) {
      technologies.add(repoLanguage);
    }
    
    // Common technology patterns in README
    const techPatterns = [
      /react/gi, /vue/gi, /angular/gi, /svelte/gi,
      /node\.?js/gi, /express/gi, /fastify/gi, /nestjs/gi,
      /mongodb/gi, /postgresql/gi, /mysql/gi, /sqlite/gi,
      /tailwind/gi, /bootstrap/gi, /sass/gi, /css/gi,
      /typescript/gi, /javascript/gi, /python/gi, /java/gi,
      /docker/gi, /kubernetes/gi, /aws/gi, /azure/gi,
      /firebase/gi, /vercel/gi, /netlify/gi, /heroku/gi,
      /redux/gi, /zustand/gi, /context/gi, /mobx/gi,
      /next\.?js/gi, /nuxt/gi, /gatsby/gi, /vite/gi,
      /flask/gi, /django/gi, /spring/gi, /laravel/gi,
      /jwt/gi, /auth0/gi, /passport/gi, /oauth/gi
    ];
    
    // Search for technologies in content
    const lowerContent = content.toLowerCase();
    techPatterns.forEach(pattern => {
      const matches = lowerContent.match(pattern);
      if (matches) {
        // Normalize the technology name
        const tech = matches[0].toLowerCase()
          .replace(/\.?js/g, '.js')
          .replace(/^(.)/, (match) => match.toUpperCase());
        technologies.add(tech);
      }
    });
    
    // Convert to array and limit to 6 items
    return Array.from(technologies).slice(0, 6);
  };

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        
        // Try to fetch from your API route first
        let response = await fetch('/api/github-repos');
        
        // If API route fails, fallback to direct GitHub API
        if (!response.ok) {
          response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
          );
        }
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const repos: GitHubRepo[] = await response.json();
        
        // Filter out forked repos and get only your original work
        const originalRepos = repos.filter(repo => !repo.name.includes('fork'));
        
        // Fetch README content for each repo
        const formattedProjects: Project[] = await Promise.all(
          originalRepos.slice(0, 6).map(async (repo) => {
            const readmeDescription = await fetchReadmeContent(repo.name);
            const readmeTechnologies = extractTechnologiesFromReadme(
              readmeDescription, 
              repo.language
            );
            
            return {
              title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              description: readmeDescription || repo.description || "No description available",
              image: "/github-placeholder.jpeg",
              technologies: readmeTechnologies.length > 0 ? readmeTechnologies : [
                repo.language,
                // Add common tech stack based on language as fallback
                ...(repo.language === 'JavaScript' ? ['React', 'Node.js'] : []),
                ...(repo.language === 'Python' ? ['Flask', 'Django'] : []),
                ...(repo.language === 'TypeScript' ? ['React', 'Next.js'] : []),
              ].filter(Boolean).slice(0, 5),
              link: repo.html_url,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              language: repo.language || "Unknown"
            };
          })
        );
        
        setProjects(formattedProjects.length > 0 ? formattedProjects : fallbackProjects);
        setError(null);
        
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError('Using cached projects');
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (loading) {
    return (
      <section id="projects" className="py-16 px-4 bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center star-wars-title">
            Projects
          </h2>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <span className="ml-4 text-gray-300">Loading projects and README files...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 px-4 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex items-center justify-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center star-wars-title">
            Projects
          </h2>
          {error && (
            <span className="ml-4 text-yellow-400 text-sm bg-yellow-900/20 px-2 py-1 rounded">
              ⚠️ {error}
            </span>
          )}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="relative bg-[#1F2937]/80 rounded-lg p-5 border border-blue-500/20 shadow-md shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 force-float"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  onError={() =>
                    console.error(`Failed to load ${project.image}`)
                  }
                />
                <div className="absolute inset-0 bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300" />
                
                {/* GitHub stats overlay */}
                <div className="absolute top-2 right-2 flex gap-2">
                  {project.stars > 0 && (
                    <span className="bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      ⭐ {project.stars}
                    </span>
                  )}
                  {project.forks > 0 && (
                    <span className="bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      🔀 {project.forks}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                {project.language && (
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                    {project.language}
                  </span>
                )}
              </div>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={`${tech}-${techIndex}`}
                    className="px-2 py-1 text-xs text-[#60a5fa] bg-[#1F2937]/50 rounded-full border border-blue-500/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-white font-medium bg-black/20 border border-[#3B82F6]/50 rounded-full lightsaber-btn shadow-lg shadow-[#3B82F6]/30 hover:bg-[#3B82F6]/10 transition-all duration-300"
                >
                  View Project →
                </a>
                <a
                  href={`${project.link}#readme`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-gray-300 font-medium bg-gray-800/20 border border-gray-500/50 rounded-full hover:bg-gray-700/20 transition-all duration-300 text-sm"
                >
                  README
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
