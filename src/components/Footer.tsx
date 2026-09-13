import { Github, MessageSquare, Mail, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-surface/50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-lg font-bold tracking-wider text-white">
          <div className="p-1.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
            <Code2 size={18} />
          </div>
          <span>RIEAZ.<span className="text-cyber-cyan">DEV</span></span>
        </div>

        <p className="text-slate-400 text-xs sm:text-sm text-center">
          © {new Date().getFullYear()} Rieaz • Computer Science & Technology, Jashore Govt. Polytechnic Institute. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com/zr-rieaz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-panel hover:text-cyber-cyan transition-colors"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://wa.me/+8801628403390"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-panel hover:text-cyber-cyan transition-colors"
            title="WhatsApp"
          >
            <MessageSquare size={18} />
          </a>
          <a
            href="mailto:rsrieaz4405@gmail.com"
            className="p-2 rounded-lg glass-panel hover:text-cyber-cyan transition-colors"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}