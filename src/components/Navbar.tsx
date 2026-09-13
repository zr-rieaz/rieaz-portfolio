"use client";
import { useState, useEffect } from "react";
import { Menu, X, Terminal, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Terminal", href: "#terminal" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-wider text-white group">
          <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan group-hover:shadow-glow transition-all">
            <Code2 size={20} />
          </div>
          <span>RI<span className="text-cyber-cyan">EAZ</span>.DEV</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyber-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/zr-rieaz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-cyber-cyan rounded-md hover:bg-cyber-cyan/95 hover:shadow-glow transition-all"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-cyber-cyan focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel border-t border-cyber-cyan/20 px-4 pt-4 pb-6 mt-3 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-cyber-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/zr-rieaz"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full py-2 text-sm font-semibold text-black bg-cyber-cyan rounded-md shadow-glow"
          >
            GitHub Profile
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}