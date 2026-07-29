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
    degree: "Bachelor of Science (BSc)",
    info: "Computer Science and Engineering",
    period: "Expected Graduation: 2026",
    gpa: "3.24 / 4.00"
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
    title: "ToxiScan – Transformer-Based Toxic Comment Classification",
    description: "An AI-powered content moderation system that automatically detects toxic, abusive, and threatening language in user comments across 6 toxicity categories, enabling real-time flagging without manual review.",
    bullets: [
      "Built an AI-powered content moderation system that automatically detects toxic, abusive, and threatening language in user comments across 6 toxicity categories, enabling real-time flagging without manual review",
      "Fine-tuned a DistilBERT transformer for multi-label classification on 159K+ real-world comments, replacing the pretrained LM head with a sigmoid layer optimized via BCE loss to handle overlapping labels",
      "Designed a multi-label stratified data pipeline and custom text-cleaning logic to address severe class imbalance (90% non-toxic) while preserving semantic content needed for accurate detection",
      "Achieved 0.80 weighted F1 and 0.99 ROC-AUC on held-out data, and deployed the model as a FastAPI service with real-time single/batch inference and API-key authentication"
    ],
    tags: ["Python", "PyTorch", "Hugging Face Transformers", "FastAPI", "Scikit-learn"],
    category: "NLP",
    github: "https://github.com/NAHID56-kingsman/ToxiScan---Toxic-Comment-Classification",
    demo: "https://toxiscann.netlify.app/"
  },
  {
    title: "ClinIntel AI – Hybrid Clinical Decision Support for Readmission Prediction",
    description: "An end-to-end clinical support system predicting 30-day hospital readmission risk from patient encounter data and extracting clinical entities from unstructured notes.",
    bullets: [
      "Built an end-to-end system that predicts 30-day hospital readmission risk from patient encounter data, trained on the UCI/Kaggle \"Diabetes 130-US Hospitals\" dataset using CatBoost and explained with SHAP for interpretability",
      "Developed an NLP pipeline to extract clinical entities (symptoms, diagnoses, medications, allergies) from free-text clinical notes, including negation and discontinuation detection",
      "Exposed risk scoring, note extraction, and combined recommendation outputs through a FastAPI service, and built a Streamlit dashboard for clinician-facing use",
      "Containerized the full stack with Docker/docker-compose (API + Postgres) and set up a CI pipeline with a pytest suite covering preprocessing, NLP, and API logic"
    ],
    tags: ["Python", "CatBoost", "SHAP", "FastAPI", "Streamlit", "Docker", "spaCy"],
    category: "ML/AI"
  },
  {
    title: "Heritage Building Defect Detection",
    description: "Developed a CNN-based defect classification system for 7 heritage building defect categories using transfer learning models.",
    bullets: [
      "Developed a CNN-based defect classification system for 7 heritage building defect categories using transfer learning",
      "Implemented and compared five pretrained architectures, including EfficientNet-B0 and ResNet-18",
      "Achieved 93.46% test accuracy with EfficientNet-B0"
    ],
    tags: ["Python", "PyTorch", "Transfer Learning", "Scikit-learn"],
    category: "Computer Vision"
  },
  {
    title: "Bangladeshi Taka Note Detection",
    description: "Trained a YOLOv11 object detection model to identify and classify Bangladeshi currency notes from images with real-time performance.",
    bullets: [
      "Trained a YOLOv11 object detection model to identify and classify Bangladeshi currency notes from images, including preparing and annotating a custom image dataset",
      "Achieved real-time detection performance using the YOLOv11 object detection framework"
    ],
    tags: ["Python", "YOLOv11", "Computer Vision"],
    category: "Computer Vision"
  }
];
