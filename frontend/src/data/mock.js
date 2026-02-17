import { Bot, FileText, Languages, ShoppingCart, Cloud, Code2, Cpu, Sparkles, Users, TrendingUp, Shield, Globe, Zap, Layers, Database, Server, Brain, Workflow, Target, Award, Building2, BookOpen, HeartPulse, Mic } from 'lucide-react';

export const images = {
  // Himachal Pradesh Mountains - Large, clearly visible
  snowPeakHP: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=85",
  kasol: "https://images.unsplash.com/photo-3Tv7zYEWz0c?w=1920&q=85",
  sissuValley: "https://images.unsplash.com/photo-1645495702782-38b8a6c8d74c?w=1920&q=85",
  mountainValley: "https://images.unsplash.com/photo-1647939701920-e6063dfda2d8?w=1920&q=85",
  mountainFog: "https://images.unsplash.com/photo-1731934650867-45354be20c81?w=1920&q=85",
  mountainTerrace: "https://images.unsplash.com/photo-1761376397940-e4d7422a102e?w=1920&q=85",
  snowyPeak: "https://images.unsplash.com/photo-1750166302383-2cc4cba437de?w=1920&q=85",
  pineForest: "https://images.unsplash.com/photo-1552919916-fcee0069bd62?w=1920&q=85",
  greenValley: "https://images.unsplash.com/photo-1614095431374-c5e71970d70c?w=1920&q=85",
  mountainRange: "https://images.unsplash.com/photo-1710705293492-38813d6dbe27?w=1920&q=85",
  snowyPeak2: "https://images.unsplash.com/photo-1709907153050-a668b4473c47?w=1920&q=85",
  himalayanSnow: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=85",
  dharamsala: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1920&q=85",
  manaliValley: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=85",
  spiti: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=85",
  // AI & Technology
  robot: "https://images.unsplash.com/photo-1507162728832-5b8fdb5f99fa?w=1200&q=80",
  workspace: "https://images.unsplash.com/photo-1646596504587-c3771cf62e81?w=1200&q=80",
  neuralBrain: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=1200&q=80",
  serverRoom: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85",
  circuitBoard: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=1920&q=85",
  aiBrain: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=85",
  codeScreen: "https://images.unsplash.com/photo-1653387319597-84bde7e5368e?w=1920&q=85"
};

export const companyInfo = {
  name: "Globistaan",
  fullName: "Globistaan Technologies and Exports Private Limited",
  tagline: "AI-Powered Solutions for the Global Enterprise",
  subtitle: "We transform businesses with cutting-edge artificial intelligence and scalable SaaS platforms — built from the mountains of Himachal Pradesh, India, for the world.",
  founded: "2023",
  location: "Himachal Pradesh, India",
  founderExperience: "13+ years",
  email: "ceo@globistaan.com",
  phone: "+91 8291486041",
  website: "www.globistaan.com"
};

export const heroStats = [
  { label: "AI Models Deployed", value: "15+" },
  { label: "Enterprise Clients", value: "50+" },
  { label: "Countries Served", value: "12+" },
  { label: "Uptime Guarantee", value: "99.9%" }
];

export const registrations = [
  { title: "Private Limited Company", description: "Government registered, MCA approved company", icon: Building2 },
  { title: "GST Compliant", description: "Registered with Goods and Services Tax from inception", icon: Shield },
  { title: "Registered MSME", description: "Recognized Micro, Small and Medium Enterprise on Udyam portal", icon: Award },
  { title: "DGFT Compliant", description: "Registered on Directorate General of Foreign Trade with IEC code", icon: Globe },
  { title: "DPIIT Registered", description: "Registered with Department for Promotion of Industry and Internal Trade", icon: Target }
];

export const projects = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot Platform",
    description: "Next-generation conversational AI platform that understands context, sentiment, and intent. Built for enterprise customer support, sales automation, and internal operations.",
    features: ["Multi-language support", "Context-aware responses", "Custom training pipelines", "Analytics dashboard", "API integrations"],
    status: "In Development",
    accentClass: "accent-purple",
    icon: Bot,
    category: "AI as a Service",
    partnership: "Built in partnership with industry experts",
    placeholder: "[Product screenshot placeholder]"
  },
  {
    id: "ai-pharma",
    title: "AI Pharma Document Generation",
    description: "Intelligent document generation system for pharmaceutical companies. Automates regulatory submissions, clinical trial reports, and compliance documentation with AI precision.",
    features: ["Regulatory compliance", "Template management", "AI-powered drafting", "Version control", "Audit trails"],
    status: "In Development",
    accentClass: "accent-blue",
    icon: FileText,
    category: "AI as a Service",
    partnership: "Built in partnership with pharma industry experts",
    placeholder: "[Product screenshot placeholder]"
  },
  {
    id: "ai-language",
    title: "AI Language Learning App",
    description: "Personalized language learning powered by AI. Adaptive curriculum, real-time pronunciation feedback, and immersive conversation practice with AI tutors.",
    features: ["Adaptive learning paths", "Speech recognition", "AI conversation partner", "Progress tracking", "Gamification"],
    status: "In Development",
    accentClass: "accent-orange",
    icon: Languages,
    category: "AI as a Service",
    partnership: "Built in partnership with education industry experts",
    placeholder: "[Product screenshot placeholder]"
  },
  {
    id: "saas-ecommerce",
    title: "SaaS E-Commerce Platform",
    description: "Full-featured e-commerce platform with AI-driven product recommendations, inventory management, and automated marketing. Scalable from small shops to enterprise retail.",
    features: ["AI recommendations", "Inventory automation", "Payment gateway", "Analytics & insights", "Multi-vendor support"],
    status: "In Development",
    accentClass: "accent-pink",
    icon: ShoppingCart,
    category: "SaaS Platform",
    partnership: "Built in partnership with e-commerce experts",
    placeholder: "[Product screenshot placeholder]"
  }
];

export const services = [
  {
    title: "AI Model Development",
    description: "Custom AI/ML model training and deployment tailored to your business needs.",
    icon: Brain
  },
  {
    title: "SaaS Platform Engineering",
    description: "Scalable, multi-tenant SaaS platforms built with modern cloud-native architecture.",
    icon: Layers
  },
  {
    title: "Intelligent Automation",
    description: "Automate complex business workflows with AI-driven decision-making systems.",
    icon: Workflow
  },
  {
    title: "Data Engineering & Analytics",
    description: "End-to-end data pipelines, warehousing, and AI-powered analytics dashboards.",
    icon: Database
  },
  {
    title: "Cloud Infrastructure",
    description: "Cloud-native deployments on AWS, Railway, and hybrid architectures for optimal performance.",
    icon: Cloud
  },
  {
    title: "Enterprise Integration",
    description: "Seamless integration of AI capabilities into existing enterprise systems and workflows.",
    icon: Zap
  }
];

export const techStack = {
  clouds: [
    { name: "AWS", description: "Primary cloud infrastructure provider", category: "Cloud" },
    { name: "Railway", description: "Rapid deployment and scaling platform", category: "Cloud" },
    { name: "Google Cloud", description: "AI/ML services and compute", category: "Cloud" },
    { name: "Azure", description: "Enterprise cloud solutions", category: "Cloud" }
  ],
  ides: [
    { name: "Cursor", description: "AI-powered code editor", category: "IDE" },
    { name: "VS Code", description: "Primary development environment", category: "IDE" },
    { name: "Claude Code", description: "AI-assisted coding", category: "IDE" },
    { name: "JetBrains", description: "Enterprise IDE suite", category: "IDE" }
  ],
  aiAgents: [
    { name: "Gemini", description: "Google's multimodal AI model", category: "AI" },
    { name: "OpenAI", description: "GPT models for NLP and generation", category: "AI" },
    { name: "Claude", description: "Anthropic's advanced reasoning AI", category: "AI" },
    { name: "LangChain", description: "AI orchestration framework", category: "AI" }
  ],
  frameworks: [
    { name: "React", description: "Frontend framework", category: "Framework" },
    { name: "FastAPI", description: "High-performance Python backend", category: "Framework" },
    { name: "Next.js", description: "Full-stack React framework", category: "Framework" },
    { name: "TensorFlow", description: "ML model training", category: "Framework" },
    { name: "PyTorch", description: "Deep learning framework", category: "Framework" },
    { name: "MongoDB", description: "NoSQL database", category: "Database" },
    { name: "PostgreSQL", description: "Relational database", category: "Database" },
    { name: "Redis", description: "In-memory caching", category: "Database" }
  ]
};

export const directors = [
  {
    name: "[Director Name]",
    role: "Founder & CEO",
    bio: "13+ years in IT industry developing web applications for global banks. Passionate about leveraging AI to solve real-world challenges.",
    avatar: null
  },
  {
    name: "[Director Name]",
    role: "Co-Founder & COO",
    bio: "[Bio placeholder - Add director details here]",
    avatar: null
  }
];

export const developers = [
  {
    name: "[Developer Name]",
    role: "Freelance Full Stack Developer",
    bio: "[Bio placeholder - Add developer details here]",
    avatar: null
  },
  {
    name: "[Developer Name]",
    role: "Freelance ML Engineer",
    bio: "[Bio placeholder - Add developer details here]",
    avatar: null
  }
];

export const clients = [
  {
    name: "[Client Company 1]",
    industry: "Banking & Finance",
    contact: "[Client Contact Name]",
    testimonial: "[Testimonial placeholder - Add client feedback here]",
    avatar: null
  },
  {
    name: "[Client Company 2]",
    industry: "Healthcare / Pharma",
    contact: "[Client Contact Name]",
    testimonial: "[Testimonial placeholder - Add client feedback here]",
    avatar: null
  },
  {
    name: "[Client Company 3]",
    industry: "E-Commerce",
    contact: "[Client Contact Name]",
    testimonial: "[Testimonial placeholder - Add client feedback here]",
    avatar: null
  }
];

export const investmentHighlights = [
  {
    title: "Growing AI Market",
    description: "The global AI market is projected to reach $1.8 trillion by 2030. Globistaan is positioned at the intersection of AI services and SaaS platforms.",
    metric: "$1.8T",
    metricLabel: "AI Market by 2030",
    icon: TrendingUp
  },
  {
    title: "Cost Advantage",
    description: "Based in Himachal Pradesh, India, we offer world-class AI engineering at highly competitive rates compared to Western markets.",
    metric: "60%",
    metricLabel: "Cost Savings",
    icon: Target
  },
  {
    title: "Diversified Portfolio",
    description: "Four distinct product lines across healthcare, education, commerce, and enterprise AI — reducing single-market dependency.",
    metric: "4",
    metricLabel: "Product Lines",
    icon: Layers
  },
  {
    title: "Regulatory Compliance",
    description: "Fully registered with MCA, GST, MSME, DGFT, and DPIIT — providing investor confidence and operational transparency.",
    metric: "5+",
    metricLabel: "Registrations",
    icon: Shield
  }
];

export const investmentTiers = [
  {
    tier: "Seed",
    range: "[Amount placeholder]",
    equity: "[Equity % placeholder]",
    benefits: ["Board observer seat", "Quarterly reports", "Product early access"],
    highlighted: false
  },
  {
    tier: "Series A",
    range: "[Amount placeholder]",
    equity: "[Equity % placeholder]",
    benefits: ["Board seat", "Monthly reports", "Strategic input", "Co-development rights"],
    highlighted: true
  },
  {
    tier: "Strategic Partner",
    range: "[Amount placeholder]",
    equity: "[Equity % placeholder]",
    benefits: ["Board seat", "Weekly syncs", "Joint ventures", "White-label rights", "Revenue sharing"],
    highlighted: false
  }
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "People", path: "/people" },
  { label: "Tech Stack", path: "/tech-stack" },
  { label: "Investors", path: "/investors" },
  { label: "Contact", path: "/contact" }
];
