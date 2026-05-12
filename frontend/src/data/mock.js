import { Bot, FileText, Languages, ShoppingCart, Cloud, Code2, Cpu, Users, TrendingUp, Shield, Globe, Zap, Layers, Database, Server, Brain, Workflow, Target, Award, Building2, BookOpen, HeartPulse, Mic } from 'lucide-react';

// ============================================
// HIMACHAL PRADESH NATURE IMAGES (Page Backgrounds)
// ============================================
export const natureImages = {
  // SNOW-CAPPED MOUNTAINS
  manaliSnow: "https://images.unsplash.com/photo-1711943729014-396f093d0fb5?w=1920&q=90",
  manaliRange: "https://images.unsplash.com/photo-1711943728995-f8cbcd6ebb69?w=1920&q=90",
  dhauladharRange: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=90&w=1920&auto=format&fit=crop",
  dhauladharGreen: "https://images.unsplash.com/photo-1627625335607-60187d590493?w=1920&q=90",
  himalayanSnow: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=90",
  kulluValley: "https://images.unsplash.com/photo-1615552714321-dca9935c0981?w=1920&q=90",
  blueHills: "https://images.unsplash.com/photo-1621505697693-9784907b50c9?w=1920&q=90",
  // CINEMATIC GOLDEN HOUR - Primary hero background
  cinematicHimalaya: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=90&w=2400&auto=format&fit=crop",
  goldenHourPeaks: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=90&w=2400&auto=format&fit=crop",
  snowPeaksSunset: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=90&w=2400&auto=format&fit=crop",
  
  // BUILDINGS & ARCHITECTURE
  shimlaMunicipal: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=90",
  shimlaLandscape: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=1920&q=90",
  dharamshalaValley: "https://images.unsplash.com/photo-1626808642895-77d0ee7f9421?w=1920&q=90",
  natureLandscape: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90",
  
  // RIVERS
  riverRocks: "https://images.unsplash.com/photo-1655470062301-e813948e9874?w=1920&q=90",
  riverForest: "https://images.unsplash.com/photo-1611523658822-385aa008324c?w=1920&q=90",
  riverMountain: "https://images.unsplash.com/photo-1715236041029-b1ae4aff390d?w=1920&q=90",
  riverValley: "https://images.unsplash.com/photo-1624697561550-982f5d50f97d?w=1920&q=90",
  
  // FORESTS
  deodarForest: "https://images.unsplash.com/photo-1633138922511-4276f61b5a61?w=1920&q=90",
  pineForest: "https://images.unsplash.com/photo-1598979348399-d9812608afc0?w=1920&q=90",
  cedarForest: "https://images.unsplash.com/photo-1720680720969-59abdf3b8483?w=1920&q=90",
  mistyForest: "https://images.unsplash.com/photo-1595995518298-5df716362207?w=1920&q=90",
  greenValley: "https://images.unsplash.com/photo-1614095431374-c5e71970d70c?w=1920&q=90"
};

// ============================================
// AI/TECH IMAGES (Small Card Accents Only)
// ============================================
export const techImages = {
  robotYellow: "https://images.unsplash.com/photo-1767955006100-cf73d990599f?w=400&q=85",
  robotOrange: "https://images.unsplash.com/photo-1768400730810-5c4398d58ae7?w=400&q=85",
  robotTwins: "https://images.unsplash.com/photo-1768400730812-039f5971185d?w=400&q=85",
  serverGreen: "https://images.unsplash.com/photo-1680992046626-418f7e910589?w=400&q=85",
  circuitBlue: "https://images.unsplash.com/photo-1731400800900-1bce57414c09?w=400&q=85",
  aiBrain: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=85",
  codeScreen: "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=400&q=85"
};

// Combined for backward compatibility
export const images = { ...natureImages, ...techImages };

// Tech Stack with actual logo URLs
export const techStack = {
  frontend: [
    { name: "React 18", description: "Main frontend application framework", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", description: "Typed frontend development", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Vite", description: "Fast frontend build tooling", category: "Frontend", logo: "https://vitejs.dev/logo.svg" },
    { name: "React Router", description: "Client-side routing with react-router-dom", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg" },
    { name: "Radix UI", description: "Accessible UI component primitives", category: "Frontend", logo: "https://avatars.githubusercontent.com/u/75042455?s=200&v=4" },
    { name: "Tailwind CSS", description: "Utility-first styling system", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Recharts", description: "Charts and data visualization", category: "Frontend", logo: "" },
    { name: "React Hook Form", description: "Form state management", category: "Frontend", logo: "" },
    { name: "Zod", description: "Schema validation for forms and data", category: "Frontend", logo: "" },
    { name: "xlsx", description: "Spreadsheet export support", category: "Frontend", logo: "" }
  ],
  backend: [
    { name: "FastAPI", description: "Python microservice API framework", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Uvicorn", description: "ASGI server for Python services", category: "Backend", logo: "" }
  ],
  dataInfra: [
    { name: "PostgreSQL", description: "Primary relational database", category: "Data / Infra", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "SQLAlchemy", description: "Python database ORM and query layer", category: "Data / Infra", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" },
    { name: "asyncpg / psycopg2", description: "PostgreSQL drivers for async and sync workloads", category: "Data / Infra", logo: "" },
    { name: "Redis", description: "Queues, pub/sub, cache, and session state", category: "Data / Infra", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Docker", description: "Containerized service deployment", category: "Data / Infra", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Railway", description: "Deployment configuration and hosting workflow", category: "Data / Infra", logo: "https://railway.app/brand/logo-light.svg" },
    { name: "OpenTelemetry", description: "Distributed tracing and observability", category: "Data / Infra", logo: "https://opentelemetry.io/img/logos/opentelemetry-logo-nav.png" },
    { name: "structlog", description: "Structured Python application logging", category: "Data / Infra", logo: "" }
  ],
  aiRag: [
    { name: "Google Gemini", description: "Chat model via google-genai", category: "AI / RAG", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
    { name: "Pydantic AI", description: "Agent framework for typed AI workflows", category: "AI / RAG", logo: "https://avatars.githubusercontent.com/u/110818415?s=200&v=4" },
    { name: "OpenAI Embeddings", description: "Embeddings for retrieval workflows", category: "AI / RAG", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "pgvector-style Search", description: "Vector retrieval with hybrid search", category: "AI / RAG", logo: "" },
    { name: "FlashRank", description: "Reranking for retrieval quality", category: "AI / RAG", logo: "" },
    { name: "LLMLingua", description: "Context compression for RAG prompts", category: "AI / RAG", logo: "" }
  ],
  documentOcr: [
    { name: "Kreuzberg", description: "Document and OCR extraction toolkit", category: "Document / OCR", logo: "" }
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
    status: "Demo",
    website: "https://dailogue.globistaan.com/",
    accentClass: "accent-purple",
    icon: Bot,
    category: "AI as a Service",
    partnership: "Built in partnership with industry experts"
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
    partnership: "Built in partnership with pharma industry experts"
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
    partnership: "Built in partnership with education industry experts"
  },
  {
    id: "saas-ecommerce",
    title: "SaaS E-Commerce Platform",
    description: "A focused e-commerce app platform for individual shopkeepers and business owners, with product catalog management, inventory operations, order workflows, and analytics for each standalone online store.",
    features: ["Single-store setup", "Product catalog management", "Inventory operations", "Order workflows", "Analytics & insights"],
    status: "Live",
    website: "https://shop.balajiprintmedia.com/",
    accentClass: "accent-pink",
    icon: ShoppingCart,
    category: "SaaS Platform",
    partnership: "Built in partnership with e-commerce experts"
  },
  {
    id: "dr-nisharg-gastro",
    title: "Gastroenterologist Website",
    description: "A live healthcare website for a Surat-based gastroenterologist and liver specialist, built with Astro 6 and Codex and hosted by Globistaan.",
    features: ["Astro 6 build", "Codex-assisted development", "Healthcare content structure", "Responsive website", "Hosting support"],
    status: "Live",
    website: "https://drnishargpatelgastro.com/",
    accentClass: "accent-green",
    icon: HeartPulse,
    category: "SaaS Platform",
    partnership: "Web design and SEO by Dr Nisharg Patel's design team; web development and hosting by Globistaan"
  }
];

export const services = [
  { title: "AI-Enabled App Development", description: "Business applications with useful AI-assisted workflows, automation, and integrations.", icon: Brain },
  { title: "SaaS Platform Engineering", description: "Scalable SaaS platforms and standalone business apps built with modern cloud-native architecture.", icon: Layers },
  { title: "Intelligent Automation", description: "Automate complex business workflows with AI-driven decision-making systems.", icon: Workflow },
  { title: "Data Engineering & Analytics", description: "End-to-end data pipelines, warehousing, and AI-powered analytics dashboards.", icon: Database },
  { title: "Cloud Infrastructure", description: "Cloud-native deployments on AWS, Railway, and hybrid architectures for optimal performance.", icon: Cloud },
  { title: "Enterprise Integration", description: "Seamless integration of AI capabilities into existing enterprise systems and workflows.", icon: Zap }
];

export const directors = [
  { name: "Bejoy Pramanick", role: "Founder CEO", bio: "Experienced Java developer and team lead with international exposure in the US and project management experience across international banking technology programs.", avatar: "/images/founders/bejoy-pramanick.jpg", avatarPosition: "42% center" },
  { name: "Yoginder Singh", role: "Co-Founder", bio: "Retired CRPF professional with experience across multiple Indian states and hands-on team management experience in the hospitality sector in Baijnath, Himachal Pradesh.", avatar: "/images/founders/yoginder-singh.png", avatarPosition: "center 35%" }
];

export const developers = [
  { name: "Sahil", role: "Full Stack Developer", bio: "Freelance full stack developer working on AI Pharma Document Generation and AI Language Learning App, with support across frontend, backend, and integrations.", avatar: "/images/freelancer-sahil.png" },
  { name: "Shagun", role: "Website Designer", bio: "Freelance website designer for the Globistaan Technologies and Exports Private Limited website, focused on clean, responsive, and brand-aligned web experiences.", avatar: "/images/freelancer-shagun.png" }
];

export const logoDesigners = [
  {
    name: "Jai Dogra",
    role: "Freelance Logo Designer",
    bio: "Designed the Globistaan company logo, giving the brand a distinct and memorable visual identity.",
    avatar: "/images/designers/jay-kumar.jpg",
    portfolio: "https://www.behance.net/jaikumar35"
  }
];

export const clients = [
  {
    name: "Aytan AI",
    industry: "Healthcare / Pharma",
    contact: "Mr. Punit Panjwani",
    location: "Rhode Island, USA",
    relationship: "Product Owner",
    website: "https://aytanai.com/",
    image: "/images/clients/punit.png",
    imagePosition: "center 28%",
    testimonial: "PharmaGen AI is an AI-assisted platform for pharmaceutical document drafting, review, and workflow coordination.",
    highlights: ["PharmaGen AI", "Document drafting", "Review workflows"],
    avatar: null
  },
  {
    name: "dAIlogue",
    industry: "AI Conversation Assistant",
    contact: "Mr. Vivek Pramanick",
    location: "Stockholm, Sweden",
    relationship: "Product Partner",
    website: "https://dailogue.globistaan.com/",
    image: "/images/clients/vivek.png",
    imagePosition: "center 24%",
    testimonial: "dAIlogue is an AI-powered conversation assistant that supports chatbot automation with human agent handoff.",
    highlights: ["AI chatbot", "Human agent support", "Conversation workflows"],
    avatar: null
  },
  {
    name: "Gastroenterologist Website",
    industry: "Gastroenterologist Website",
    contact: "Dr Nisharg Patel",
    location: "Surat, India",
    relationship: "SaaS Client",
    website: "https://drnishargpatelgastro.com/",
    image: "/images/clients/nisharg.png",
    imagePosition: "center 18%",
    testimonial: "A gastroenterologist website for Dr Nisharg Patel, a senior and respected gastro and liver specialist in Surat. Built using Astro 6 and Codex; web design and SEO are provided by Dr Nisharg Patel's design team, while web development and hosting are done by Globistaan.",
    highlights: ["Astro 6", "Codex", "Development & hosting"],
    avatar: null
  },
  {
    name: "Balaji Print Media",
    industry: "E-Commerce / Print Media",
    contact: "Mr. Rakesh Garg",
    location: "Chandigarh, India",
    relationship: "SaaS Client",
    website: "https://shop.balajiprintmedia.com/",
    image: "/images/clients/balaji.png",
    testimonial: "An e-commerce storefront for Balaji Print Media, focused on premium quality products and a simple online shopping experience.",
    highlights: ["Online storefront", "Product catalog", "Print media commerce"],
    avatar: null
  }
];

export const investmentHighlights = [
  { title: "Growing AI Market", description: "The global AI market is projected to reach $1.8 trillion by 2030. Globistaan is positioned at the intersection of AI services and SaaS platforms.", metric: "$1.8T", metricLabel: "AI Market by 2030", icon: TrendingUp },
  { title: "Cost Advantage", description: "Based in Himachal Pradesh, India, we offer world-class AI engineering at highly competitive rates compared to Western markets.", metric: "60%", metricLabel: "Cost Savings", icon: Target },
  { title: "Diversified Portfolio", description: "Four distinct product lines across healthcare, education, commerce, and enterprise AI — reducing single-market dependency.", metric: "4", metricLabel: "Product Lines", icon: Layers },
  { title: "Regulatory Compliance", description: "Fully registered with MCA, GST, MSME, DGFT, and DPIIT — providing investor confidence and operational transparency.", metric: "5+", metricLabel: "Registrations", icon: Shield }
];

export const investmentTiers = [
  { tier: "Seed", range: "Open to discussion", equity: "Case-by-case", benefits: ["Board observer seat", "Quarterly reports", "Product early access"], highlighted: false },
  { tier: "Growth Partnership", range: "Custom proposal", equity: "Negotiable", benefits: ["Monthly reports", "Strategic input", "Co-development rights"], highlighted: true },
  { tier: "Strategic Partner", range: "Partnership-led", equity: "Flexible structure", benefits: ["Strategic syncs", "Joint ventures", "White-label rights", "Revenue sharing"], highlighted: false }
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
