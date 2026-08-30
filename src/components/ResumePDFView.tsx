
import { Mail, Phone, Github, Linkedin, MapPin, Printer, FileText } from "lucide-react";

import { Mail, Phone, Github, MapPin, Printer, FileText } from "lucide-react";

import { personalInfo, education, projects, publications, skillsData } from "../data";

interface ResumePDFViewProps {
  onClose?: () => void;
}

export default function ResumePDFView({ onClose }: ResumePDFViewProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-card-bg rounded-2xl border border-border-main p-6 lg:p-8 space-y-6 shadow-xl relative transition-all duration-300">
      
      {/* Top action row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border-main/60 no-print">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-sky-500/10 text-sky-400 rounded-xl border border-sky-500/20">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-text-main text-base">Curriculum Vitae</h3>
            <p className="text-text-muted text-xs">Pristine, print-ready LaTeX-style resume of {personalInfo.name}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 self-stretch sm:self-auto">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-slate-950 font-semibold text-xs rounded-xl shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            title="Print or Save to PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Print & Save PDF</span>
          </button>
          
          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-2 bg-pill hover:bg-card-hover text-text-muted hover:text-text-main border border-border-main rounded-xl text-xs font-medium transition-colors"
            >
              Close Preview
            </button>
          )}
        </div>
      </div>

      {/* The LaTeX/Paper Layout Container */}
      {/* Designed to look like a clean A4/Letter page on screen, but scales perfectly and prints beautifully */}
      <div 
        id="resume-pdf-container" 
        className="bg-white text-slate-900 p-8 sm:p-12 md:p-16 rounded-xl shadow-lg border border-slate-200 max-w-[800px] mx-auto font-sans leading-relaxed text-[13px] print:shadow-none print:border-none print:p-0 print:m-0 print:text-black transition-all duration-300"
      >
        {/* Print Header */}
        <div className="text-center space-y-3 pb-6 border-b-2 border-slate-900">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 print:text-black font-sans uppercase">
            {personalInfo.name}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-slate-700 text-xs font-mono print:text-slate-800">
            <span className="flex items-center">
              <Phone className="w-3.5 h-3.5 mr-1 text-slate-600 print:text-black" />
              {personalInfo.phone}
            </span>
            <span className="text-slate-300 print:text-slate-400 font-sans">•</span>
            <span className="flex items-center">
              <Mail className="w-3.5 h-3.5 mr-1 text-slate-600 print:text-black" />
              {personalInfo.email}
            </span>
            <span className="text-slate-300 print:text-slate-400 font-sans">•</span>
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:text-sky-600 print:hover:text-black"
            >
              <Github className="w-3.5 h-3.5 mr-1 text-slate-600 print:text-black" />
              <span>GitHub: NAHID56-kingsman</span>
            </a>

            {personalInfo.socials.linkedin && (
              <>
                <span className="text-slate-300 print:text-slate-400 font-sans">•</span>
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-sky-600 print:hover:text-black"
                >
                  <Linkedin className="w-3.5 h-3.5 mr-1 text-slate-600 print:text-black" />
                  <span>LinkedIn: nahid-asef-5a2548253</span>
                </a>
              </>
            )}

            <span className="text-slate-300 print:text-slate-400 font-sans">•</span>
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-slate-600 print:text-black" />
              {personalInfo.location}
            </span>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-6 space-y-2">
          <h2 className="text-sm font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 font-sans">
            Summary
          </h2>
          <p className="text-slate-700 leading-relaxed font-sans text-justify">
            {personalInfo.aboutMe}
          </p>
        </div>

        {/* EDUCATION */}
        <div className="mt-6 space-y-3">
          <h2 className="text-sm font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 font-sans">
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-start">
                <span className="font-bold text-slate-900">{edu.institution}</span>
                <span className="text-xs font-mono text-slate-600">{edu.period}</span>
              </div>
              <div className="flex justify-between items-start text-xs text-slate-700">
                <span className="italic">{edu.degree}</span>
                <span className="text-slate-600">Dhaka, Bangladesh</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 pl-1 mt-1">
                <li><span className="font-semibold text-slate-900">CGPA: 3.24 / 4.00</span></li>
              </ul>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <div className="mt-6 space-y-2.5">
          <h2 className="text-sm font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 font-sans">
            Skills
          </h2>
          <div className="space-y-1.5 text-xs text-slate-700">
            {skillsData.map((skillGroup, idx) => (
              <div key={idx} className="grid grid-cols-[160px_1fr] gap-2">
                <span className="font-bold text-slate-900">{skillGroup.category}:</span>
                <span className="text-slate-700">{skillGroup.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </div>


        {/* PROJECTS */}
        <div className="mt-6 space-y-4">
          <h2 className="text-sm font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 font-sans">
            Projects
          </h2>
          {projects.map((proj, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-slate-900 text-[13px]">{proj.title}</span>
              </div>
              <div className="text-[11px] font-mono italic text-slate-600">
                • {proj.tags.slice(0, 7).join(", ")}
              </div>
              {proj.bullets && (
                <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-justify leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="mt-6 space-y-3">
          <h2 className="text-sm font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 font-sans">
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-start">
                <span className="font-bold text-slate-900">{edu.institution}</span>
                <span className="text-xs font-mono text-slate-600">{edu.period}</span>
              </div>
              <div className="flex justify-between items-start text-xs text-slate-700">
                <span className="italic">{edu.degree}</span>
                <span className="text-slate-600">Dhaka, Bangladesh</span>
              </div>
              {edu.gpa && (
                <ul className="list-disc list-inside text-xs text-slate-700 pl-1 mt-1">
                  <li><span className="font-semibold text-slate-900">CGPA: {edu.gpa}</span></li>
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <div className="mt-6 space-y-2.5">
          <h2 className="text-sm font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 font-sans">
            Skills
          </h2>
          <div className="space-y-1.5 text-xs text-slate-700">
            {skillsData.map((skillGroup, idx) => (
              <div key={idx} className="grid grid-cols-[160px_1fr] gap-2">
                <span className="font-bold text-slate-900">{skillGroup.category}:</span>
                <span className="text-slate-700">{skillGroup.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PUBLICATIONS */}
        <div className="mt-6 space-y-3">
          <h2 className="text-sm font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 font-sans">
            Publications
          </h2>
          {publications.map((pub, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-bold text-slate-900 leading-snug">
                {pub.title}
              </div>
              <div className="text-xs text-slate-700 italic">
                {pub.journal}, {pub.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
