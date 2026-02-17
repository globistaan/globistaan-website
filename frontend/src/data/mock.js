import { Bot, FileText, Languages, ShoppingCart, Cloud, Code2, Cpu, Sparkles, Users, TrendingUp, Shield, Globe, Zap, Layers, Database, Server, Brain, Workflow, Target, Award, Building2, BookOpen, HeartPulse, Mic } from 'lucide-react';

// Strategic image collection: Nature + Technology blend
export const images = {
  // === HIMACHAL PRADESH NATURE ===
  // Rivers & Valleys
  riverValley: "https://images.unsplash.com/photo-1624697561550-982f5d50f97d?w=1920&q=85", // Green mountains with river
  riverMountain: "https://images.unsplash.com/photo-1737475236760-070d39c5f833?w=1920&q=85", // Mountain range with river
  
  // Snow-Capped Mountains
  dhauladharRange: "https://images.unsplash.com/photo-1637896175022-7165f16fb523?w=1920&q=85", // Panoramic mountain range
  dhauladharGreen: "https://images.unsplash.com/photo-1627625335607-60187d590493?w=1920&q=85", // Green trees with snow peaks
  snowPeakMist: "https://images.unsplash.com/photo-1615101999240-9d1f4da5841f?w=1920&q=85", // Misty snow peaks
  
  // Forests & Mist
  mistyForest: "https://images.unsplash.com/photo-1595995518298-5df716362207?w=1920&q=85", // Foggy forest mountains
  pineForestMist: "https://images.unsplash.com/photo-1656490359541-4574fc234394?w=1920&q=85", // Pine forest with lake
  pineSilhouette: "https://images.unsplash.com/photo-1771177323692-4cd0132cedd5?w=1920&q=85", // Silhouette pine trees
  blueHills: "https://images.unsplash.com/photo-1621505697693-9784907b50c9?w=1920&q=85", // Blue layered mountains
  
  // Clouds & Sky
  mountainClouds: "https://images.unsplash.com/photo-1641892046220-d8faa2ed612f?w=1920&q=85", // Mountains with dramatic clouds
  himalayanSnow: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=85", // Snow-capped Himalayas
  greenValley: "https://images.unsplash.com/photo-1614095431374-c5e71970d70c?w=1920&q=85", // Lush green valley
  
  // === AI & TECHNOLOGY ===
  // Circuits & Hardware
  circuitBlue: "https://images.unsplash.com/photo-1731400800900-1bce57414c09?w=1920&q=85", // Blue circuit board macro
  circuitComponents: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?w=1920&q=85", // Circuit with components
  motherboard: "https://images.unsplash.com/photo-1608869768763-9085a739c5fc?w=1920&q=85", // Blue motherboard
  
  // Robots & AI
  robotBlue: "https://images.unsplash.com/photo-1769839272014-089cd3bbc274?w=1920&q=85", // Blue robots
  
  // Code & Development
  codeScreen: "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=1920&q=85", // Code on screen
  codeMultiple: "https://images.unsplash.com/photo-1754039984985-ef607d80113a?w=1920&q=85", // Multiple code screens
  neonCode: "https://images.unsplash.com/photo-1710957987034-cea509422852?w=1920&q=85", // Neon light code effect
  
  // Server & Data
  serverRoom: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85",
  aiBrain: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=85"
};

// Tech Stack with actual logo URLs
export const techStack = {
  clouds: [
    { 
      name: "AWS", 
      description: "Primary cloud infrastructure provider", 
      category: "Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
    { 
      name: "Railway", 
      description: "Rapid deployment and scaling platform", 
      category: "Cloud",
      logo: "https://railway.app/brand/logo-light.svg"
    },
    { 
      name: "Google Cloud", 
      description: "AI/ML services and compute", 
      category: "Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
    },
    { 
      name: "Azure", 
      description: "Enterprise cloud solutions", 
      category: "Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
    }
  ],
  ides: [
    { 
      name: "Cursor", 
      description: "AI-powered code editor", 
      category: "IDE",
      logo: "https://www.cursor.com/favicon.ico"
    },
    { 
      name: "VS Code", 
      description: "Primary development environment", 
      category: "IDE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    { 
      name: "Claude Code", 
      description: "AI-assisted coding", 
      category: "IDE",
      logo: "https://cdn.worldvectorlogo.com/logos/claude-ai-icon.svg"
    },
    { 
      name: "JetBrains", 
      description: "Enterprise IDE suite", 
      category: "IDE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"
    }
  ],
  aiAgents: [
    { 
      name: "Gemini", 
      description: "Google's multimodal AI model", 
      category: "AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg"
    },
    { 
      name: "OpenAI", 
      description: "GPT models for NLP and generation", 
      category: "AI",
      logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg"
    },
    { 
      name: "Claude", 
      description: "Anthropic's advanced reasoning AI", 
      category: "AI",
      logo: "https://cdn.worldvectorlogo.com/logos/claude-ai-icon.svg"
    },
    { 
      name: "LangChain", 
      description: "AI orchestration framework", 
      category: "AI",
      logo: "https://api.nuget.org/v3-flatcontainer/langchain/0.15.1/icon"
    }
  ],
  frameworks: [
    { 
      name: "React", 
      description: "Frontend framework", 
      category: "Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    { 
      name: "FastAPI", 
      description: "High-performance Python backend", 
      category: "Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
    },
    { 
      name: "Next.js", 
      description: "Full-stack React framework", 
      category: "Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    { 
      name: "TensorFlow", 
      description: "ML model training", 
      category: "Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
    },
    { 
      name: "PyTorch", 
      description: "Deep learning framework", 
      category: "Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
    },
    { 
      name: "MongoDB", 
      description: "NoSQL database", 
      category: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    { 
      name: "PostgreSQL", 
      description: "Relational database", 
      category: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    { 
      name: "Redis", 
      description: "In-memory caching", 
      category: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
    }
  ]
};

export const companyInfo = {
  name: "Globistaan",
  fullName: "Globistaan Technologies and Exports Private Limited",
  tagline: "AI-Powered Solutions from the Himalayas",
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
