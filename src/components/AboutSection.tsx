import { motion } from "motion/react";
import { personalInfo } from "../data";
import { Brain, Zap, Cpu } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: "Core AI & DL Interest",
      desc: "Deeply interested in computer vision systems, Deep Learning models, and NLP pipeline engineering.",
      color: "from-sky-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Full-Stack AI Integrations",
      desc: "Building and packaging clean, production-ready full-stack architectures using Python, FastAPI, Streamlit, and Docker.",
      color: "from-teal-500 to-emerald-600"
    },
    {
      icon: Cpu,
      title: "Data Analysis Focus",
      desc: "Strong foundational passion for end-to-end data processing, exploratory data analysis, and predictive workflows.",
      color: "from-indigo-500 to-violet-600"
    }
  ];

  return (
    <section id="about" className="scroll-mt-12 lg:scroll-mt-24 space-y-8">
      {/* Introduction */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
          <span className="text-[11px] font-bold text-sky-400 tracking-wider uppercase font-mono">CSE Undergraduate & Builder</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold font-display text-text-main tracking-tight leading-none transition-colors duration-300">
          Hi, I am {personalInfo.name}
        </h2>
        <p className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-3xl font-sans transition-colors duration-300">
          {personalInfo.aboutMe}
        </p>
      </div>

      {/* Grid Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {highlights.map((h, index) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-5 bg-card-bg rounded-2xl border border-border-main hover:border-border-hover hover:bg-card-hover transition-all duration-300 flex flex-col space-y-3 shadow-md shadow-black/5"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${h.color} p-2 flex items-center justify-center shrink-0 shadow-lg shadow-black/20`}>
                <Icon className="w-5 h-5 text-slate-100" />
              </div>
              <h3 className="font-display font-semibold text-text-main text-sm transition-colors duration-300">{h.title}</h3>
              <p className="text-text-muted text-xs leading-relaxed transition-colors duration-300">{h.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
