"use client";
import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-cyber-cyan" size={22} />,
      skills: ["Java", "Python", "C", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-cyber-blue" size={22} />,
      skills: ["React.js", "Next.js", "HTML5 / CSS3", "Tailwind CSS", "REST APIs"]
    },
    {
      title: "Mobile & Scripting",
      icon: <Smartphone className="text-cyber-violet" size={22} />,
      skills: ["Android Apps", "Android Customization", "Bash / Shell", "Termux Automation"]
    },
    {
      title: "Tools & Ecosystem",
      icon: <Wrench className="text-cyber-pink" size={22} />,
      skills: ["Git & GitHub", "Linux Shells", "VS Code", "Vercel Deployment"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Tech Stack & <span className="text-cyber-cyan">Skills Matrix</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Core tools, languages, and technical environments I work with daily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-xl relative group hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-surface border border-cyber-cyan/20 group-hover:border-cyber-cyan transition-colors">
                {category.icon}
              </div>
              <h3 className="text-base font-bold text-white">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md text-xs font-mono bg-surface text-slate-300 border border-slate-800 group-hover:border-cyber-cyan/30 transition-all hover:text-cyber-cyan hover:shadow-glow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}