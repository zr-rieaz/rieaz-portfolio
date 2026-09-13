"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Code } from "lucide-react";
import { Project, CategoryType } from "@/types";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGitHubRepos() {
      try {
        const res = await fetch("https://api.github.com/users/zr-rieaz/repos?sort=updated&per_page=12");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubRepos();
  }, []);

  // Filter categorization handler based on repo names, topics, or language
  const filterProjects = (proj: Project) => {
    if (selectedCategory === "All") return true;
    const name = proj.name.toLowerCase();
    const desc = (proj.description || "").toLowerCase();
    const lang = (proj.language || "").toLowerCase();
    const topics = proj.topics || [];

    if (selectedCategory === "Web Development") {
      return lang.includes("javascript") || lang.includes("typescript") || lang.includes("html") || topics.includes("web") || name.includes("web") || name.includes("site");
    }
    if (selectedCategory === "Android") {
      return name.includes("android") || topics.includes("android") || desc.includes("android");
    }
    if (selectedCategory === "Python") {
      return lang.includes("python") || topics.includes("python") || name.includes("py");
    }
    if (selectedCategory === "Java") {
      return lang.includes("java") || topics.includes("java");
    }
    if (selectedCategory === "Automation") {
      return name.includes("automation") || name.includes("script") || topics.includes("automation") || topics.includes("termux") || lang.includes("shell") || lang.includes("bash");
    }
    return true;
  };

  const categories: CategoryType[] = ["All", "Web Development", "Android", "Python", "Java", "Automation"];
  const filteredProjects = projects.filter(filterProjects);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Dynamic <span className="text-cyber-cyan">Projects Showcase</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Live repositories fetched directly from GitHub via REST API (<code className="text-cyber-cyan font-mono">zr-rieaz</code>).
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-cyber-cyan text-black shadow-glow font-semibold"
                  : "glass-panel text-slate-300 hover:text-cyber-cyan"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="glass-panel h-64 rounded-xl animate-pulse flex flex-col justify-between p-6">
              <div className="space-y-3">
                <div className="h-5 bg-slate-800 rounded w-1/2" />
                <div className="h-4 bg-slate-800 rounded w-full" />
                <div className="h-4 bg-slate-800 rounded w-3/4" />
              </div>
              <div className="h-8 bg-slate-800 rounded w-1/3" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center glass-panel p-8 rounded-xl max-w-md mx-auto">
          <p className="text-red-400 mb-4">Unable to fetch live GitHub repositories.</p>
          <a
            href="https://github.com/zr-rieaz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-cyber-cyan text-black font-semibold rounded text-sm"
          >
            Visit GitHub Directly
          </a>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center glass-panel p-12 rounded-xl max-w-md mx-auto">
          <p className="text-slate-400">No repositories found matching this filter category.</p>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={project.id}
              className="glass-panel p-6 rounded-xl flex flex-col justify-between group hover:shadow-glow transition-all duration-300 border border-cyber-cyan/10 hover:border-cyber-cyan/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-cyber-cyan font-mono text-sm font-semibold truncate">
                    <Code size={18} />
                    <span className="truncate">{project.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-xs">
                    <span className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400" /> {project.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} /> {project.forks_count}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-6 line-clamp-3 font-light">
                  {project.description || "No description provided for this public repository."}
                </p>
              </div>

              <div>
                {/* Tech Lang & Topics */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.language && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20">
                      {project.language}
                    </span>
                  )}
                  {project.topics?.slice(0, 2).map((topic) => (
                    <span key={topic} className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyber-violet/10 text-cyber-violet border border-cyber-violet/20">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Actions Links */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyber-cyan transition-colors"
                  >
                    <Github size={16} /> Code Repo
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-cyber-cyan hover:underline font-medium"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}