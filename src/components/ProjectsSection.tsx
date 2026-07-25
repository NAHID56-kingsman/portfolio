import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { Sparkles, Cpu, Eye, Layers, Github, ExternalLink, MessageSquare } from "lucide-react";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "ML/AI" | "NLP" | "Computer Vision">("All");

  const categories: ("All" | "ML/AI" | "NLP" | "Computer Vision")[] = [
    "All",
    "ML/AI",
    "NLP",
    "Computer Vision"
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "ML/AI":
        return Cpu;
      case "NLP":
        return MessageSquare;
      case "Computer Vision":
        return Eye;
      default:
        return Layers;
    }
  };

  return (
    <section id="projects" className="scroll-mt-12 lg:scroll-mt-24 space-y-8">
      {/* Section Header */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-sky-400" />
              <h2 className="text-2xl lg:text-3xl font-bold font-display text-text-main transition-colors duration-300">Engineering Projects</h2>
            </div>
            <p className="text-text-muted text-sm max-w-xl transition-colors duration-300">
              Highly technical, end-to-end full-stack AI, NLP, and Computer Vision pipelines.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-card-bg rounded-xl border border-border-main max-w-max transition-colors duration-300">
          {categories.map((cat) => {
            const Icon = getCategoryIcon(cat);
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium font-sans transition-all duration-200 ${
                  isSelected
                    ? "bg-pill text-sky-400 shadow-md shadow-black/10"
                    : "text-text-muted hover:text-text-main hover:bg-pill/20"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* List / Grid of Projects with Layout Animations */}
      <motion.div 
        layout 
        className="space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj) => {
            const Icon = getCategoryIcon(proj.category);
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                key={proj.title}
                className="bg-card-bg p-6 rounded-2xl border border-border-main hover:border-border-hover hover:bg-card-hover transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg shadow-black/5"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    {/* Category Pill */}
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase font-mono bg-pill text-text-secondary border border-border-main transition-colors duration-300">
                      <Icon className="w-3 h-3 text-sky-400" />
                      <span>{proj.category}</span>
                    </span>

                    {/* Links */}
                    <div className="flex items-center space-x-2">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-pill hover:bg-card-hover text-text-muted hover:text-sky-400 border border-border-main hover:border-sky-500/30 transition-all duration-200"
                          title="View Repository on GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 transition-all duration-200"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-text-main text-base lg:text-lg leading-snug transition-colors duration-300">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-xs lg:text-sm leading-relaxed transition-colors duration-300">
                    {proj.description}
                  </p>

                  {/* Bullets List */}
                  {proj.bullets && proj.bullets.length > 0 && (
                    <ul className="space-y-2 pt-2 border-t border-border-main/60 transition-colors duration-300">
                      {proj.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-xs text-text-muted leading-relaxed transition-colors duration-300">
                          <span className="text-sky-500 mr-2 shrink-0 select-none">&#8226;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-text-secondary bg-pill px-2.5 py-1 rounded-lg border border-border-main/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
