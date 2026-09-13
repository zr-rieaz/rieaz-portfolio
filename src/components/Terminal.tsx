"use client";
import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Minimize2, Maximize2, RefreshCw } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function TerminalComponent() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyber-cyan">Welcome to Rieaz Interactive Terminal v1.0.0</p>
          <p>Type <span className="text-cyber-violet font-semibold">help</span> to view all available commands.</p>
        </div>
      ),
    },
  ]);
  const [isMinimized, setIsMinimized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-300 font-mono">
            <div><span className="text-cyber-cyan">about</span> - Brief developer summary</div>
            <div><span className="text-cyber-cyan">skills</span> - List core technical stack</div>
            <div><span className="text-cyber-cyan">projects</span> - View primary repositories</div>
            <div><span className="text-cyber-cyan">contact</span> - Get communication handles</div>
            <div><span className="text-cyber-cyan">github</span> - Open GitHub profile</div>
            <div><span className="text-cyber-cyan">clear</span> - Clear terminal history</div>
          </div>
        );
        break;
      case "about":
        outputNode = (
          <p className="text-slate-300 text-xs sm:text-sm font-mono">
            Rieaz is a Computer Science & Technology (CST) student at Jashore Govt. Polytechnic Institute, focusing on full-stack web applications, automation scripts, and systems engineering.
          </p>
        );
        break;
      case "skills":
        outputNode = (
          <p className="text-slate-300 text-xs sm:text-sm font-mono">
            Languages: Java, Python, C, JavaScript, TypeScript<br />
            Frameworks: Next.js, React, Tailwind CSS<br />
            Specialties: Android Customization, Termux Automation, Linux Shells
          </p>
        );
        break;
      case "projects":
        outputNode = (
          <p className="text-slate-300 text-xs sm:text-sm font-mono">
            Explore live public projects at: <a href="https://github.com/zr-rieaz" target="_blank" rel="noreferrer" className="text-cyber-cyan underline">github.com/zr-rieaz</a>
          </p>
        );
        break;
      case "contact":
        outputNode = (
          <p className="text-slate-300 text-xs sm:text-sm font-mono">
            Email: rsrieaz4405@gmail.com<br />
            WhatsApp: +8801628403390
          </p>
        );
        break;
      case "github":
        window.open("https://github.com/zr-rieaz", "_blank");
        outputNode = <p className="text-cyber-cyan text-xs font-mono">Opening GitHub profile in a new tab...</p>;
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        outputNode = (
          <p className="text-red-400 text-xs font-mono">
            command not found: {cmd}. Type &apos;help&apos; for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output: outputNode }]);
    setInput("");
  };

  return (
    <section id="terminal" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Interactive Linux <span className="text-cyber-cyan">Terminal</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Test out commands below to quickly query background data.
        </p>
      </div>

      <div className="glass-panel rounded-xl overflow-hidden shadow-2xl border border-cyber-cyan/30">
        {/* Terminal Header Bar */}
        <div className="bg-surface/90 px-4 py-3 flex items-center justify-between border-b border-cyber-cyan/20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
              <TerminalIcon size={12} className="text-cyber-cyan" /> rieaz@portfolio-cli:~
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <button onClick={() => setHistory([])} title="Reset Terminal">
              <RefreshCw size={14} className="hover:text-cyber-cyan transition-colors" />
            </button>
            <button onClick={() => setIsMinimized(!isMinimized)} title={isMinimized ? "Maximize" : "Minimize"}>
              {isMinimized ? <Maximize2 size={14} className="hover:text-cyber-cyan transition-colors" /> : <Minimize2 size={14} className="hover:text-cyber-cyan transition-colors" />}
            </button>
          </div>
        </div>

        {!isMinimized && (
          <div className="p-4 sm:p-6 bg-[#03060b] min-h-[300px] max-h-[450px] overflow-y-auto font-mono text-sm">
            {history.map((item, idx) => (
              <div key={idx} className="mb-4 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-cyber-cyan">rieaz@portfolio</span>
                  <span className="text-slate-600">:</span>
                  <span className="text-cyber-violet">~</span>
                  <span className="text-slate-200">$ {item.command}</span>
                </div>
                <div className="pl-4 border-l-2 border-cyber-cyan/30">{item.output}</div>
              </div>
            ))}

            {/* Input Prompt */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
              <span className="text-cyber-cyan">rieaz@portfolio</span>
              <span className="text-slate-600">:</span>
              <span className="text-cyber-violet">~</span>
              <span className="text-slate-200">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help' or 'about'..."
                className="bg-transparent flex-1 text-slate-100 focus:outline-none font-mono text-sm caret-cyber-cyan"
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>
        )}
      </div>
    </section>
  );
}