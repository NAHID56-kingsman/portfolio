import React from "react";

interface TechLogoProps {
  name: string;
}

export default function TechLogo({ name }: TechLogoProps) {
  const normalized = name.toLowerCase().trim();

  // Python logo
  if (normalized.includes("python")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-sky-400 group-hover:text-yellow-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" />
        <path d="M12 6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H9" />
        <path d="M14 18a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-1a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
      </svg>
    );
  }

  // C++ logo
  if (normalized.includes("c++")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }

  // Java logo
  if (normalized.includes("java") && !normalized.includes("javascript")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <path d="M6 1v3" />
        <path d="M10 1v3" />
        <path d="M14 1v3" />
      </svg>
    );
  }

  // PyTorch
  if (normalized.includes("pytorch")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 1.5 2 2.5 3.5 3C18 7 19 8.5 19 10.5a5.5 5.5 0 0 1-5.5 5.5" />
        <path d="M11.5 14.5a2.5 2.5 0 0 0 2.5-2.5c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6" />
        <path d="M9 18h6" />
      </svg>
    );
  }

  // TensorFlow
  if (normalized.includes("tensorflow")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12L4 8m8 4l8-4M4 8l8-4 8 4M4 8v8l8 4 8-4V8" />
      </svg>
    );
  }

  // PostgreSQL / SQL / MySQL
  if (normalized.includes("postgresql") || normalized.includes("sql") || normalized.includes("mysql")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }

  // React
  if (normalized.includes("react")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-cyan-400 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    );
  }

  // FastAPI
  if (normalized.includes("fastapi")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="6" y1="21" x2="6" y2="17" />
        <line x1="18" y1="21" x2="18" y2="17" />
        <line x1="10" y1="21" x2="10" y2="17" />
        <line x1="14" y1="21" x2="14" y2="17" />
      </svg>
    );
  }

  // Git / GitHub
  if (normalized.includes("git")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 15V9a4 4 0 0 0-4-4H9" />
        <line x1="6" y1="9" x2="6" y2="15" />
      </svg>
    );
  }

  // OpenCV / Computer Vision / YOLOv11 / CNN / Transfer Learning
  if (
    normalized.includes("opencv") || 
    normalized.includes("vision") || 
    normalized.includes("yolo") || 
    normalized.includes("cnn") ||
    normalized.includes("transfer")
  ) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M3 12c5.185-6 12.815-6 18 0-5.185 6-12.815 6-18 0z" />
      </svg>
    );
  }

  // NLP / Scikit-learn / CatBoost
  if (
    normalized.includes("nlp") || 
    normalized.includes("learn") || 
    normalized.includes("catboost") ||
    normalized.includes("pandas") ||
    normalized.includes("numpy")
  ) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    );
  }

  // HTML / CSS / Web
  if (normalized.includes("html") || normalized.includes("css") || normalized.includes("web") || normalized.includes("asp.net")) {
    return (
      <svg className="w-4 h-4 mr-1.5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  // VS Code / Tools / Environments
  return (
    <svg className="w-4 h-4 mr-1.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
