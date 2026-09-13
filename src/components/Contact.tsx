"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, Mail, CheckCircle, Copy } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API form dispatch success
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("rsrieaz4405@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Get in <span className="text-cyber-cyan">Touch</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Have an academic inquiry, project collaboration idea, or professional contract opportunity? Let us connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="glass-panel p-6 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400">Direct Email</h3>
                <p className="text-white font-mono text-sm sm:text-base">rsrieaz4405@gmail.com</p>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="p-2.5 rounded-lg bg-surface border border-slate-800 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all"
              title="Copy Email"
            >
              {copied ? <CheckCircle size={18} className="text-green-400" /> : <Copy size={18} />}
            </button>
          </div>

          <div className="glass-panel p-6 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-cyber-violet/10 text-cyber-violet border border-cyber-violet/30">
                <MessageSquare size={22} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400">WhatsApp Chat</h3>
                <p className="text-white font-mono text-sm sm:text-base">+8801628403390</p>
              </div>
            </div>
            <a
              href="https://wa.me/+8801628403390"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyber-violet/20 border border-cyber-violet/40 text-cyber-violet rounded-lg text-xs font-semibold hover:bg-cyber-violet hover:text-white transition-all"
            >
              Chat Now
            </a>
          </div>

          <div className="glass-panel p-6 rounded-xl bg-gradient-to-br from-cyber-cyan/5 via-surface to-cyber-violet/5 border-cyber-cyan/20">
            <h4 className="text-white font-semibold mb-2">Institution Details</h4>
            <p className="text-slate-300 text-sm font-light">
              Jashore Govt. Polytechnic Institute<br />
              Department of Computer Science and Technology (CST)<br />
              Jashore, Bangladesh
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-cyber-cyan/20"
        >
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-cyber-cyan mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto">
                Thank you for reaching out. Rieaz will review your message and get back to you shortly.
              </p>
            </div>
          ) : (
            <form 
               action="https://formspree.io/f/mrpgwkde"
               method="POST"
               onSubmit={handleSubmit} 
               className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-slate-300 mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-slate-300 mb-2">
                  Message Content
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your project proposal or question here..."
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-cyber-cyan text-black font-semibold text-sm hover:bg-cyber-cyan/95 shadow-glow flex items-center justify-center gap-2 transition-all"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}