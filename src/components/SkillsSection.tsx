import { motion } from "motion/react";
import { skillsData } from "../data";
import { Layers, CheckCircle2 } from "lucide-react";
import TechLogo from "./TechLogo";

export default function SkillsSection() {
  const workflows = [
    "Development and evaluation of advanced ML & Deep Learning systems",
    "NLP entity extraction and custom text annotation pipelines",
    "Statistical data analysis, modeling, and interactive visualization",
    "Containerization & deployment of APIs and services with Docker"
  ];

  return (
    <section id="skills" className="scroll-mt-12 lg:scroll-mt-24 space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Layers className="w-5 h-5 text-sky-400" />
          <h2 className="text-2xl lg:text-3xl font-bold font-display text-text-main transition-colors duration-300">Skills & Tech Stack</h2>
        </div>
        <p className="text-text-muted text-sm max-w-xl transition-colors duration-300">
          Core technical domains, programming environments, deep learning libraries, and infrastructure platforms.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((cat, catIdx) => {
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.05, duration: 0.4 }}
              className="p-5 bg-card-bg rounded-2xl border border-border-main hover:border-border-hover transition-all duration-300 flex flex-col space-y-4 shadow-md shadow-black/5 group"
            >
              <h3 className="font-display font-bold text-text-secondary text-sm border-b border-border-main/80 pb-2 group-hover:text-sky-400 transition-colors duration-300">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className="group/skill inline-flex items-center text-text-secondary hover:text-sky-400 text-xs font-mono bg-pill hover:bg-card-hover px-3 py-2 rounded-xl border border-border-main/50 hover:border-sky-500/30 transition-all duration-200 cursor-default shadow-sm hover:shadow-sky-500/5 hover:-translate-y-0.5"
                  >
                    <TechLogo name={skillName} />
                    <span>{skillName}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Workflow Section */}
      <div className="p-6 bg-gradient-to-r from-sky-950/5 via-card-bg to-teal-950/5 rounded-2xl border border-border-main/50 space-y-4 transition-colors duration-300">
        <h3 className="font-display font-semibold text-text-secondary text-sm transition-colors duration-300">Engineered Workflows</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workflows.map((wf, idx) => (
            <div key={idx} className="flex items-start text-text-secondary text-xs lg:text-sm transition-colors duration-300">
              <CheckCircle2 className="w-4 h-4 text-sky-400 mr-2 mt-0.5 shrink-0 transition-colors duration-300" />
              <span>{wf}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
