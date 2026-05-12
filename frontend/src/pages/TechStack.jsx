import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Cpu, Database, Wrench, Server, FileText, Search } from 'lucide-react';
import { techStack, images } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const categoryIcons = {
  'Frontend': Code2,
  'Backend': Server,
  'Data / Infra': Database,
  'Content / SEO': Search,
  'AI / RAG': Cpu,
  'Document / OCR': FileText
};
const categoryAccents = {
  'Frontend': 'accent-purple',
  'Backend': 'accent-blue',
  'Data / Infra': 'accent-green',
  'Content / SEO': 'accent-blue',
  'AI / RAG': 'accent-orange',
  'Document / OCR': 'accent-pink'
};

const TechCard = ({ item, index }) => {
  const Icon = categoryIcons[item.category] || Wrench;
  const accent = categoryAccents[item.category] || 'accent-grey';
  const [imgError, setImgError] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`voice-card glow-card ${accent}`}
      style={{ padding: '1.75rem' }}
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.95)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          {item.logo && !imgError ? (
            <img 
              src={item.logo} 
              alt={`${item.name} logo`} 
              className="w-9 h-9 object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
          )}
        </div>
        
        <div className="flex-1">
          <h4 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
            {item.name}
          </h4>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
            {item.description}
          </p>
          <Badge variant="outline" className="mt-3 rounded-full" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {item.category}
          </Badge>
        </div>
      </div>
    </motion.div>
  );
};

const LogoGrid = ({ items, title }) => (
  <div className="mb-14">
    <h3 className="text-center mb-8" style={{ fontSize: '1.15rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>{title}</h3>
    <div className="flex flex-wrap justify-center gap-8">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.95)', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
            {item.logo ? (
              <img 
                src={item.logo} 
                alt={`${item.name} logo`}
                className="w-12 h-12 object-contain"
              />
            ) : (
              <Cpu className="w-8 h-8" style={{ color: 'var(--text-primary)' }} />
            )}
          </div>
          <span style={{ fontSize: '0.8rem', fontFamily: "'SF Mono', monospace", color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');
  const allTools = Object.values(techStack).flat();
  const categories = [
    { id: 'all', label: 'All Tools' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'Backend', label: 'Backend' },
    { id: 'Data / Infra', label: 'Data / Infra' },
    { id: 'Content / SEO', label: 'Content / SEO' },
    { id: 'AI / RAG', label: 'AI / RAG' },
    { id: 'Document / OCR', label: 'Document / OCR' }
  ];
  const filtered = activeCategory === 'all' ? allTools : allTools.filter(t => t.category === activeCategory);

  return (
    <main>
      {/* Hero - Split: Code on left, Mountains on right - HD NO FILTER */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)' }}>
            <img 
              src={images.serverGreen} 
              alt="Server room" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0" style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)' }}>
            <img 
              src={images.manaliSnow} 
              alt="Manali snow mountains" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.25) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[900px] mx-auto text-center px-5 pt-24">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-4 py-1.5 border-white/40 text-white" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(0,0,0,0.4)' }}>
              Tech Stack
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            Technology Stack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.95)', maxWidth: '650px', margin: '0 auto', textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}
          >
            React, TypeScript, Vite, Astro, Tailwind, Radix UI, Supabase, Cloudflare, PostgreSQL, Redis, WordPress REST API, Pagefind, Gemini, OpenAI embeddings, Pydantic AI, and Kreuzberg across the application stack.
          </motion.p>
        </div>
      </section>

      {/* Logo Showcase Section - Subtle Dark AI Neural Network Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1230 40%, #120a2e 70%, #0a0f1e 100%)'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2400&auto=format&fit=crop"
            alt="Subtle AI neural network background" 
            className="w-full h-full object-cover mix-blend-luminosity"
            style={{ opacity: 0.07 }}
          />
        </div>
        {/* Faint circuit pattern + glowing nodes */}
        <div className="absolute inset-0 z-1" style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(59,130,246,0.08) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.07) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 60%)'
        }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#ffffff', lineHeight: 1.2 }}>
              Tools We Use
            </h2>
          </motion.div>
          
          <LogoGrid items={techStack.frontend} title="Frontend" />
          <LogoGrid items={techStack.backend} title="Backend" />
          <LogoGrid items={techStack.dataInfra} title="Data / Infrastructure" />
          <LogoGrid items={techStack.contentSeo} title="Content / SEO" />
          <LogoGrid items={techStack.aiRag} title="AI / RAG Stack" />
          <LogoGrid items={techStack.documentOcr} title="Document / OCR Processing" />
        </div>
      </section>

      {/* Filter + Grid - HD Forest Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.mistyForest} 
            alt="Himalayan forest" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.93)' }} />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button 
                key={cat.id} 
                onClick={() => setActiveCategory(cat.id)} 
                className={`btn-tag ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tool, i) => (
              <TechCard key={`${tool.name}-${tool.category}`} item={tool} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Overview - AI Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2400&auto=format&fit=crop"
            alt="AI technology abstract background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ 
          background: 'linear-gradient(135deg, rgba(10,15,40,0.88) 0%, rgba(20,10,50,0.85) 50%, rgba(10,15,40,0.88) 100%)'
        }} />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#ffffff', lineHeight: 1.2 }}>
              Technology Overview
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'React / TypeScript / Vite / Astro Frontend', desc: 'Frontend work uses React 18, TypeScript, Vite, Astro 6, Astro components, CSS, Astro Assets, react-router-dom, Radix UI, Tailwind CSS, Zustand, TanStack React Query, Recharts, forms, validation, animation, maps, 3D, export, QR/barcode, toast, and i18n tooling.', accent: 'accent-purple', icon: Code2, bgImg: images.codeScreen },
              { title: 'FastAPI / Supabase Backend', desc: 'Backend work uses FastAPI, Uvicorn, Supabase, Supabase Auth, and Supabase Edge Functions for API and serverless workflows.', accent: 'accent-blue', icon: Server, bgImg: images.serverGreen },
              { title: 'PostgreSQL / Redis / Cloud Deployment', desc: 'Data and infrastructure use PostgreSQL with SQLAlchemy, asyncpg, psycopg2, Redis queues and cache, Docker, Railway, Cloudflare Pages, Cloudflare Workers, Wrangler, Node.js, npm, GitHub, OpenTelemetry, and structlog.', accent: 'accent-green', icon: Database, bgImg: images.circuitBlue },
              { title: 'WordPress / Pagefind / SEO', desc: 'Content and SEO workflows use WordPress REST API, WordPress CMS, Pagefind search, JSON-LD schema, @astrojs/sitemap, and meta tags.', accent: 'accent-blue', icon: Search, bgImg: images.serverGreen },
              { title: 'Gemini / OpenAI / Pydantic AI RAG', desc: 'The AI stack uses Gemini via google-genai for chat, OpenAI embeddings, Pydantic AI agents, pgvector-style hybrid retrieval, FlashRank reranking, and LLMLingua compression.', accent: 'accent-orange', icon: Cpu, bgImg: images.robotOrange },
              { title: 'Kreuzberg Document / OCR Processing', desc: 'Kreuzberg powers document and OCR extraction in the application stack.', accent: 'accent-pink', icon: FileText, bgImg: images.aiBrain }
            ].map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 24 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.1 }} 
                  className={`voice-card glow-card ${cat.accent} relative overflow-hidden`} 
                  style={{ padding: '2.25rem' }}
                >
                  <div className="absolute inset-0 z-0 opacity-10">
                    <img src={cat.bgImg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(0,0,0,0.06)' }}>
                      <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{cat.title}</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{cat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - HD Dhauladhar Range */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.dhauladharRange} 
            alt="Dhauladhar mountain range" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[650px] mx-auto text-center px-5 py-16">
          <motion.div {...fadeInUp}>
            <h2 className="mb-5" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15, textShadow: '0 2px 15px rgba(0,0,0,0.4)' }}>
              Want to Work With Our Stack?
            </h2>
            <p className="mb-10" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.05rem', lineHeight: 1.65, textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
              Whether you're a developer or a client who wants to leverage these tools — let's talk.
            </p>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', background: 'white', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
