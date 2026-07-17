import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { publications } from "../data";
import { BookOpen, Search, ExternalLink, Calendar, ChevronDown, ChevronUp } from "lucide-react";

export default function PublicationsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredPublications = publications.filter((pub) => {
    const query = searchQuery.toLowerCase();
    return (
      pub.title.toLowerCase().includes(query) ||
      pub.journal.toLowerCase().includes(query) ||
      (pub.abstract && pub.abstract.toLowerCase().includes(query))
    );
  });

  const toggleAbstract = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="publications" className="scroll-mt-12 lg:scroll-mt-24 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-sky-400" />
            <h2 className="text-2xl lg:text-3xl font-bold font-display text-text-main transition-colors duration-300">Publications</h2>
          </div>
          <p className="text-text-muted text-sm max-w-xl transition-colors duration-300">
            Academic research papers published in prestigious international conferences and journals.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim transition-colors duration-300" />
          <input
            type="text"
            placeholder="Search papers or venue..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-bg-input text-text-main text-xs py-2 pl-9 pr-4 rounded-xl border border-border-input focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-350 font-sans"
          />
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((pub, idx) => {
            const isExpanded = expandedIndex === idx;
            // Find the original index in standard list to associate unique states
            const originalIdx = publications.findIndex(p => p.title === pub.title);
            const hasAbstract = !!pub.abstract;

            return (
              <motion.div
                key={pub.title}
                layout="position"
                className="bg-card-bg rounded-2xl border border-border-main hover:border-border-hover hover:bg-card-hover transition-all duration-300 overflow-hidden shadow-lg shadow-black/5"
              >
                {/* Paper Header Card Row */}
                <div 
                  onClick={() => hasAbstract && toggleAbstract(originalIdx)}
                  className={`p-5 flex gap-4 items-start justify-between ${hasAbstract ? 'cursor-pointer select-none' : ''}`}
                >
                  <div className="space-y-2.5 flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="font-display font-bold text-text-main text-sm lg:text-base leading-snug transition-colors duration-300">
                      {pub.title}
                    </h3>
                    
                    {/* Venue & Metadata */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      <span className="font-semibold text-sky-400">
                        {pub.journal}
                      </span>
                      <span className="text-text-dim hidden md:inline">•</span>
                      <span className="flex items-center text-text-muted font-mono transition-colors duration-300">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {pub.year}
                      </span>
                    </div>
                  </div>

                  {/* Actions / Toggles */}
                  <div className="flex items-center space-x-2 shrink-0 self-center">
                    {pub.link && (
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Prevent expansion when opening link
                        className="p-1.5 bg-pill hover:bg-sky-950/20 text-text-muted hover:text-sky-400 border border-border-main hover:border-sky-800/40 rounded-lg transition-colors"
                        title="Open publication in new tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {hasAbstract && (
                      <button 
                        className="p-1.5 bg-pill text-text-muted rounded-lg border border-border-main hover:text-text-main transition-colors"
                        title={isExpanded ? "Hide Abstract" : "Show Abstract"}
                      >
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>
                </div>

                {/* Paper Abstract Slide-down */}
                {hasAbstract && (
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-border-main/60 bg-pill/30">
                          <div className="space-y-2">
                            <p className="text-[10px] font-bold text-text-dim font-mono tracking-widest uppercase transition-colors duration-300">Abstract Summary</p>
                            <p className="text-text-secondary text-xs lg:text-sm leading-relaxed font-sans transition-colors duration-300">
                              {pub.abstract}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            );
          })
        ) : (
          <div className="py-12 text-center text-text-muted font-mono text-xs border border-dashed border-border-main rounded-2xl transition-colors duration-300">
            No publications found matching "{searchQuery}"
          </div>
        )}
      </div>
    </section>
  );
}
