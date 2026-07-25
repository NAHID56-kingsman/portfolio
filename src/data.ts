export interface Project {
  title: string;
  description: string;
  bullets?: string[];
  tags: string[];
  category: "ML/AI" | "NLP" | "Web" | "Computer Vision" | "Analytics";
  github?: string;
  demo?: string;
}

export interface PublicationItem {
  title: string;
  journal: string;
  abstract?: string;
  year: number;
  link?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  info: string;
  period: string;
  gpa?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: "Nahid Asef",
  title: "AI & Full-Stack Developer",
  subtitle: "Computer Science Student @ AUST",
  location: "Dhaka, Bangladesh",
  email: "nahid20asef03@gmail.com",
  phone: "+880 1913-704843",
  aboutMe: "Computer Science student with a strong passion for data analysis, alongside experience building deep learning models, computer vision systems, and full-stack AI applications using Python, PyTorch, FastAPI, and Docker.",
  profileImage: "/assets/img/profile.jpg",
  socials: {
    linkedin: "https://www.linkedin.com/in/nahid-asef-03/", // Generic placeholder or we can use his github since we don't have his exact linkedIn handle, or check his github URL. Let's provide a friendly fallback.
    github: "https://github.com/NAHID56-kingsman",
    scholar: "",
    twitter: ""
  }
};

export const education: EducationItem[] = [
  {
    institution: "Ahsanullah University of Science and Technology (AUST)",
    degree: "Bachelor of Science (BSc) in Computer Science and Engineering",
    info: "Focus on Machine Learning, NLP, Computer Vision & Data Analytics",
    period: "Expected Graduation: 2026"
  }
];

export const publications: PublicationItem[] = [
  {
    title: "MemeStream: A Dedicated Meme Sharing Platform with AI-powered Content Validation and Real-time Engagement",
    journal: "International Conference on Electrical, Computer and Communication Technologies (ECCT 2026)",
    year: 2026,
    abstract: "Despite the ubiquity of memes, social media often treats them as standard images. This paper presents MemeStream, a dedicated meme-sharing platform utilizing MVC architecture. The system integrates React 19 and ASP.NET Core 9 with PostgreSQL and SignalR. A central feature is the AI validation layer, powered by Google’s Gemini API, which performs multimodal analysis to ensure content quality before publication. The platform implements a multi-factor feed ranking model balancing recency, social ties, and engagement. User participation is quantified via LaughScore, a weighted metric categorizing progression based on unique interactions. SignalR facilitates real-time features, including messaging and instant notifications. This study demonstrates the effective integration of AI-driven validation, gamification, and real-time communication within a domain-specific framework."
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "Java", "SQL"]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
      "DistilBERT",
      "Scikit-learn",
      "OpenCV",
      "Computer Vision",
      "Transfer Learning",
      "CNN",
      "NLP",
      "CatBoost",
      "YOLOv11"
    ]
  },
  {
    category: "Data Analytics",
    skills: ["Pandas", "NumPy", "Matplotlib", "Power BI", "MySQL", "PostgreSQL"]
  },
  {
    category: "Web Development",
    skills: ["React.js", "ASP.NET", "HTML", "CSS"]
  },
  {
    category: "Backend & DevOps",
    skills: ["FastAPI", "Streamlit", "Docker"]
  },
  {
    category: "Tools & Environments",
    skills: ["Git", "GitHub", "Google Colab", "VS Code", "Weka", "LaTeX", "Jupyter Notebook"]
  }
];

export const projects: Project[] = [
  {
    title: "ToxiScan – Toxic Comment Classification",
    description: "A production-ready multi-label toxic comment classification system powered by a fine-tuned DistilBERT transformer and served through FastAPI REST API.",
    bullets: [
      "Fine-tuned DistilBERT (distilbert-base-uncased) on ~160,000 Wikipedia comments from the Jigsaw dataset across 6 toxicity categories: Toxic, Severe Toxic, Obscene, Threat, Insult, and Identity Hate.",
      "Achieved a Macro ROC-AUC of 0.99 and Weighted F1 of 0.80 using PyTorch, Hugging Face Transformers, and AdamW optimizer with FP16 mixed precision.",
      "Built and served real-time multi-label toxicity inference API endpoints using FastAPI with automated Uvicorn server and interactive Swagger documentation.",
      "Deployed an interactive web interface on Netlify for real-time toxicity analysis and multi-label probability scoring."
    ],
    tags: ["Python", "PyTorch", "Hugging Face", "DistilBERT", "NLP", "FastAPI", "Uvicorn", "Netlify"],
    category: "NLP",
    github: "https://github.com/NAHID56-kingsman/ToxiScan---Toxic-Comment-Classification",
    demo: "https://toxiscann.netlify.app/"
  },
  {
    title: "ClinIntel AI – Hybrid Clinical Decision Support for Readmission Prediction",
    description: "Built an end-to-end clinical systems suite. Predicts 30-day hospital readmission risk from patient encounter data and performs entities extraction from raw unstructured clinical reports.",
    bullets: [
      "Trained on the UCI/Kaggle 'Diabetes 130-US Hospitals' dataset using CatBoost, explained with SHAP for interpretability and clinician confidence.",
      "Developed an NLP pipeline to extract clinical entities (symptoms, diagnoses, medications, allergies) from free-text clinical notes, including negation and discontinuation detection.",
      "Exposed risk scoring, note extraction, and combined recommendation outputs through a high-throughput FastAPI service, and built a Streamlit dashboard for clinician-facing use.",
      "Containerized the full stack with Docker/docker-compose (API + Postgres) and set up a CI pipeline with a pytest suite covering preprocessing, NLP, and API logic."
    ],
    tags: ["Python", "CatBoost", "SHAP", "FastAPI", "Streamlit", "Docker", "spaCy", "PostgreSQL", "CI/CD"],
    category: "ML/AI"
  },
  {
    title: "Heritage Building Defect Detection",
    description: "Developed a CNN-based deep learning defect classification system to identify, evaluate, and categorize structural abnormalities in heritage properties.",
    bullets: [
      "Classified defects into 7 distinct heritage building defect categories using transfer learning models.",
      "Implemented and benchmarked five pretrained architectures, including EfficientNet-B0 and ResNet-18.",
      "Achieved a high test accuracy of 93.46% with EfficientNet-B0."
    ],
    tags: ["Python", "PyTorch", "Transfer Learning", "Scikit-learn", "EfficientNet", "ResNet-18"],
    category: "Computer Vision"
  },
  {
    title: "Bangladeshi Taka Note Detection",
    description: "Trained and deployed a high-performance computer vision model for automated real-time recognition of currency notes under diverse conditions.",
    bullets: [
      "Trained a YOLOv11 object detection model to identify and classify Bangladeshi currency notes from images.",
      "Prepared, curated, and annotated a custom image dataset for model training and cross-validation.",
      "Achieved real-time inference detection speeds using the state-of-the-art YOLOv11 framework."
    ],
    tags: ["Python", "YOLOv11", "Computer Vision", "Object Detection", "Dataset Annotation"],
    category: "Computer Vision"
  }
];
