"use client";
import { motion } from "framer-motion";
import { GraduationCap, Terminal, Code, Cpu } from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "2023 - Present",
      title: "Diploma in Computer Science & Technology (CST)",
      institution: "Jashore Govt. Polytechnic Institute",
      description: "Focusing on core computing, data structures, algorithms, object-oriented programming, and low-level Linux environments."
    },
    {
      year: "Ongoing Development",
      title: "Full-Stack Web & Automation Engineer",
      institution: "Independent / Self-Taught",
      description: "Building production-grade web apps using Next.js & React, writing robust automation scripts in Python/Bash, and exploring Android system optimization."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          About <span className="text-cyber-cyan">Me & Journey</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Dedicated CST student with an obsession for clean code, terminal interfaces, and high-performance system tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/5 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Terminal className="text-cyber-cyan" size={22} />
            <span>Developer Profile</span>
          </h3>
          <p className="text-slate-300 leading-relaxed mb-6 font-light text-sm sm:text-base">
            I am Rieaz, currently studying Computer Science and Technology at <strong className="text-white font-medium">Jashore Govt. Polytechnic Institute</strong>. My workflow centers around Linux terminal environments, Git version control, and building scalable full-stack applications.
          </p>
          <p className="text-slate-300 leading-relaxed font-light text-sm sm:text-base mb-6">
            Beyond standard web development, I have deep exposure to writing custom automation scripts, Python utilities, Java backend routines, and handling Android customization setups.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div>
              <span className="block text-cyber-cyan font-mono text-2xl font-bold">10+</span>
              <span className="text-slate-400 text-xs uppercase tracking-wider">GitHub Repositories</span>
            </div>
            <div>
              <span className="block text-cyber-violet font-mono text-2xl font-bold">CST</span>
              <span className="text-slate-400 text-xs uppercase tracking-wider">Specialization</span>
            </div>
          </div>
        </motion.div>

        {/* Academic Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 space-y-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="text-cyber-violet" size={24} />
            <span>Academic & Career Milestone</span>
          </h3>

          {timeline.map((item, index) => (
            <div key={index} className="glass-panel p-6 rounded-xl relative border-l-4 border-l-cyber-cyan">
              <span className="inline-block px-2.5 py-1 rounded bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono mb-2">
                {item.year}
              </span>
              <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
              <h5 className="text-sm font-medium text-cyber-violet mb-3">{item.institution}</h5>
              <p className="text-slate-300 text-sm font-light">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}