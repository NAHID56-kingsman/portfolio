import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import PublicationsSection from "./components/PublicationsSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumePDFView from "./components/ResumePDFView";
import { Menu, X, ArrowUpCircle, Sun, Moon, FileText } from "lucide-react";
import { personalInfo } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });

  // Sync theme to root element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Monitor scrolling to highlight the correct nav item
  useEffect(() => {
    const sections = ["about", "education", "skills", "projects", "publications"];
    
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const scrollPosition = window.scrollY + 200; // Offset for top triggers

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills & Tech" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
  ];

  return (
    <div className="min-h-screen bg-page text-text-main selection:bg-sky-500/30 selection:text-sky-300 flex flex-col lg:flex-row font-sans relative antialiased transition-colors duration-300">
      
      {/* Mobile Top Navigation Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-sidebar/95 backdrop-blur-md border-b border-border-main/80 px-4 py-3.5 flex items-center justify-between transition-colors duration-300 no-print">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-teal-500 flex items-center justify-center font-display font-bold text-sm text-slate-900 overflow-hidden shrink-0">
            {personalInfo.profileImage ? (
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              "NA"
            )}
          </div>
          <div>
            <h1 className="font-display font-bold text-text-main text-sm tracking-tight leading-none transition-colors duration-300">
              {personalInfo.name}
            </h1>
            <p className="text-sky-400 font-medium text-[10px] mt-0.5 font-display">
              {personalInfo.title}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1.5">
          {/* Resume PDF Button (Mobile) */}
          <button
            onClick={() => setShowResume((prev) => !prev)}
            className={`p-2 rounded-lg border transition-all duration-200 shrink-0 ${
              showResume 
                ? "bg-sky-500/20 text-sky-400 border-sky-500/40" 
                : "bg-card-bg text-text-muted hover:text-text-main border-border-main"
            }`}
            title="Toggle Resume PDF View"
          >
            <FileText className="w-4 h-4" />
          </button>

          {/* Theme Toggle Button (Mobile) */}
          <button
            onClick={toggleTheme}
            className="p-2 text-text-muted hover:text-text-main rounded-lg bg-card-bg border border-border-main transition-all duration-200 shrink-0"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-muted hover:text-text-main rounded-lg bg-card-bg border border-border-main transition-colors shrink-0"
            title="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm lg:hidden transition-all duration-300 no-print">
          <div className="absolute right-0 top-[57px] w-64 bg-sidebar h-[calc(100vh-57px)] border-l border-border-main p-6 flex flex-col space-y-6 transition-colors duration-300">
            <p className="text-[10px] font-bold text-text-dim tracking-widest uppercase font-mono">Sections</p>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMobileNavClick(item.id)}
                    className={`text-left px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                      isActive 
                        ? "bg-pill text-sky-400 font-semibold" 
                        : "text-text-muted hover:bg-pill hover:text-text-main"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <div className="pt-6 border-t border-border-main/80">
              <p className="text-text-dim text-[10px] font-mono">
                {personalInfo.email}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Left Sidebar */}
      <Sidebar activeSection={activeSection} />

      {/* Main Right Content Panel */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        
        {/* Sleek, Modern, Transparent Sticky Top Bar for Content Panel */}
        <div className="sticky top-0 z-30 bg-page/80 backdrop-blur-md border-b border-border-main/50 py-3.5 px-6 lg:px-16 flex items-center justify-between no-print transition-all duration-300">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-text-muted">CSE Undergrad & ML Dev</span>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* View Resume PDF Trigger */}
            <button
              onClick={() => {
                setShowResume((prev) => !prev);
                if (!showResume) {
                  // Scroll to top to see resume
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border font-medium text-xs transition-all duration-300 cursor-pointer ${
                showResume 
                  ? "bg-sky-500/10 text-sky-400 border-sky-500/30 shadow-inner" 
                  : "bg-card-bg hover:bg-pill text-text-secondary border-border-main hover:border-border-hover shadow-sm"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{showResume ? "Hide Resume" : "View Resume PDF"}</span>
            </button>

            {/* Light / Dark Mode Toggle Switch */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-card-bg hover:bg-pill text-text-muted hover:text-text-main border border-border-main hover:border-border-hover rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>
          </div>
        </div>

        {/* Content sections wrapper */}
        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-8 lg:px-16 lg:py-12 space-y-24">
          
          {/* Resume PDF Area (Dynamic Collapsible with soft animations) */}
          {showResume && (
            <div className="no-print">
              <ResumePDFView onClose={() => setShowResume(false)} />
              <hr className="border-border-main/55 mt-20" />
            </div>
          )}

          {/* Hidden Resume view container dedicated for printing regardless of showResume toggle */}
          <div className="hidden print:block">
            <ResumePDFView />
          </div>

          {/* About Section */}
          <div id="about" className="print:hidden">
            <AboutSection />
          </div>

          {/* Divider */}
          <hr className="border-border-main/55 print:hidden" />

          {/* Education Section */}
          <div id="education" className="print:hidden">
            <EducationSection />
          </div>

          {/* Divider */}
          <hr className="border-border-main/55 print:hidden" />

          {/* Skills Section */}
          <div id="skills" className="print:hidden">
            <SkillsSection />
          </div>

          {/* Divider */}
          <hr className="border-border-main/55 print:hidden" />

          {/* Projects Section */}
          <div id="projects" className="print:hidden">
            <ProjectsSection />
          </div>

          {/* Divider */}
          <hr className="border-border-main/55 print:hidden" />

          {/* Publications Section */}
          <div id="publications" className="print:hidden">
            <PublicationsSection />
          </div>

          {/* Subtle footer */}
          <footer className="text-center pt-8 border-t border-border-main/40 text-[11px] text-text-dim font-mono transition-colors duration-300 print:hidden">
            &copy; {new Date().getFullYear()} Nahid Asef. Built with React, Vite, and Tailwind CSS.
          </footer>
        </main>
      </div>

      {/* Scroll to Top floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-2.5 bg-sidebar hover:bg-pill text-text-muted hover:text-sky-400 border border-border-main hover:border-border-hover rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 no-print"
          title="Scroll to Top"
        >
          <ArrowUpCircle className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
