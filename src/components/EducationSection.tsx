import { motion } from "motion/react";
import { education } from "../data";
import { GraduationCap, Calendar } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-12 lg:scroll-mt-24 space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-5 h-5 text-sky-400" />
          <h2 className="text-2xl lg:text-3xl font-bold font-display text-text-main transition-colors duration-300">Education</h2>
        </div>
        <p className="text-text-muted text-sm max-w-xl transition-colors duration-300">
          Academic qualifications and current scholastic activities.
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-6 bg-card-bg hover:bg-card-hover rounded-2xl border border-border-main hover:border-border-hover transition-all duration-300 flex flex-col md:flex-row justify-between gap-6 shadow-lg shadow-black/5"
            >
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-text-main text-base lg:text-lg transition-colors duration-300">
                    {edu.institution}
                  </h3>
                  <p className="text-sky-400 font-medium text-xs lg:text-sm font-sans">
                    {edu.degree}
                  </p>
                </div>
                {edu.info && (
                  <p className="text-text-secondary text-xs lg:text-sm leading-relaxed max-w-2xl transition-colors duration-300">
                    {edu.info}
                  </p>
                )}
              </div>

              <div className="flex md:flex-col items-center md:items-end justify-between shrink-0 font-mono text-xs text-text-muted">
                <div className="inline-flex items-center text-text-secondary bg-pill px-3 py-1.5 rounded-xl border border-border-main transition-all duration-300">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-text-dim transition-colors duration-300" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
