import { useState } from "react";
import { 
  Github, 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  GraduationCap, 
  BookOpen, 
  User,
  Layers,
  Sparkles,
  Phone
} from "lucide-react";
import { personalInfo } from "../data";

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills & Tech", icon: Layers },
    { id: "projects", label: "Projects", icon: Sparkles },
    { id: "publications", label: "Publications", icon: BookOpen },
  ];

  return (
    <aside id="sideNav" className="w-full lg:w-80 lg:h-screen lg:sticky lg:top-0 bg-sidebar border-b lg:border-b-0 lg:border-r border-border-main flex flex-col justify-between p-6 lg:p-8 shrink-0 transition-all duration-300">
      <div className="flex flex-col space-y-8">
        
        {/* Profile / Avatar Group */}
        <div className="flex items-center lg:items-start lg:flex-col space-x-4 lg:space-x-0 lg:space-y-5">
          <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-[22px] bg-gradient-to-tr from-sky-500 via-teal-500 to-indigo-600 p-0.5 shadow-xl shadow-sky-950/20 shrink-0 transition-transform duration-300 hover:scale-[1.03] overflow-hidden">
            {personalInfo.profileImage ? (
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[20px]"
              />
            ) : (
              <div className="w-full h-full bg-[#0b0f19] rounded-[20px] flex items-center justify-center font-display font-bold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-teal-400">
                NA
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-display font-bold text-xl lg:text-2xl text-text-main tracking-tight leading-none transition-colors duration-300">
              {personalInfo.name}
            </h1>
            <p className="text-sky-400 font-medium text-sm lg:text-base mt-2 font-display">
              {personalInfo.title}
            </p>
            <p className="text-text-muted text-xs mt-1 transition-colors duration-300">
              {personalInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Info badges */}
        <div className="space-y-3 pt-4 border-t border-border-main/60 transition-colors duration-300">
          <div className="flex items-center text-text-secondary text-xs font-mono transition-colors duration-300">
            <MapPin className="w-3.5 h-3.5 text-text-dim mr-2 shrink-0 transition-colors duration-300" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center text-text-secondary text-xs font-mono transition-colors duration-300">
            <Phone className="w-3.5 h-3.5 text-text-dim mr-2 shrink-0 transition-colors duration-300" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center justify-between group text-xs font-mono bg-card-bg hover:bg-card-hover py-1.5 px-2.5 rounded-lg border border-border-main transition-all duration-300">
            <div className="flex items-center text-text-secondary truncate mr-2 transition-colors duration-300">
              <Mail className="w-3.5 h-3.5 text-text-dim mr-2 shrink-0 transition-colors duration-300" />
              <span className="truncate">{personalInfo.email}</span>
            </div>
            <button 
              onClick={copyEmail}
              className="p-1 hover:text-sky-400 text-text-dim rounded transition-colors shrink-0"
              title="Copy email to clipboard"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation - Hidden on mobile, visible on large screens */}
        <nav className="hidden lg:block space-y-1.5 pt-4">
          <p className="text-[10px] font-bold text-text-dim tracking-widest uppercase mb-3 transition-colors duration-300">Navigation</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive 
                    ? "bg-pill text-sky-400 border-l-2 border-sky-500 shadow-sm pl-4" 
                    : "text-text-muted hover:bg-pill hover:text-text-main"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-sky-400" : "text-text-dim"}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Social / Contact Icons & Theme Toggle */}
      <div className="flex flex-col space-y-4 pt-6 border-t border-border-main/60 lg:pt-6 mt-6 lg:mt-0 transition-colors duration-300">
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <a 
            href={personalInfo.socials.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 px-3 py-2 bg-card-bg hover:bg-pill hover:text-text-main border border-border-main hover:border-border-hover rounded-xl text-text-muted transition-all duration-300 shadow-sm"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4 shrink-0" />
            <span className="text-xs font-mono">NAHID56-kingsman</span>
          </a>
        </div>
        <p className="text-[10px] text-text-dim text-center lg:text-left font-mono transition-colors duration-300">
          &copy; {new Date().getFullYear()} Nahid Asef
        </p>
      </div>
    </aside>
  );
}
