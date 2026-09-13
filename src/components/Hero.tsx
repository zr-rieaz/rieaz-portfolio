"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, MessageSquare, Mail, ArrowRight, Terminal as TerminalIcon } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "Android Customization Expert",
  "Automation Specialist",
  "Java & Python Programmer"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-cyber-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyber-violet/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-cyber-cyan text-xs sm:text-sm font-medium mb-6 shadow-glow"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
          <span>Jashore Govt. Polytechnic Institute • CST</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Building Software, Automation & <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-violet">
            Scalable Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light"
        >
          Hi, I am <strong className="text-white font-semibold">Rieaz</strong>, a passionate Computer Science & Technology student turning complex challenges into optimized digital code.
        </motion.p>

        {/* Dynamic Typewriter Role Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-10 flex items-center justify-center text-cyber-cyan font-mono text-base sm:text-xl mb-10"
        >
          <TerminalIcon className="w-5 h-5 mr-2 text-cyber-violet" />
          <span>&gt; {currentText}</span>
          <span className="animate-pulse ml-1 w-2.5 h-5 bg-cyber-cyan inline-block" />
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-lg bg-cyber-cyan text-black font-semibold text-sm hover:bg-cyber-cyan/90 shadow-glow flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            Explore Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-lg glass-panel text-white font-semibold text-sm hover:border-cyber-cyan/60 transition-all transform hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Quick Social Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-6 text-slate-400"
        >
          <a
            href="https://github.com/zr-rieaz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyber-cyan transition-colors"
          >
            <Github size={20} /> <span className="text-xs sm:text-sm">GitHub</span>
          </a>
          <a
            href="https://wa.me/+8801628403390"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyber-cyan transition-colors"
          >
            <MessageSquare size={20} /> <span className="text-xs sm:text-sm">WhatsApp</span>
          </a>
          <a
            href="mailto:rsrieaz4405@gmail.com"
            className="flex items-center gap-2 hover:text-cyber-cyan transition-colors"
          >
            <Mail size={20} /> <span className="text-xs sm:text-sm">Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}