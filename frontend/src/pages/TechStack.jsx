import React from 'react';
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

const mainStack = [
  'React', 'TypeScript', 'Vite', 'Astro', 'FastAPI', 'Supabase',
  'PostgreSQL', 'Redis', 'Cloudflare', 'Gemini', 'OpenAI', 'Pydantic AI', 'Kreuzberg'
];

const branchGroups = [
  {
    title: 'Frontend Experience',
    category: 'Frontend',
    summary: 'Application UI, static sites, maps, 3D, charts, forms, animation, and multilingual interfaces.',
    items: techStack.frontend
  },
  {
    title: 'Backend & Serverless',
    category: 'Backend',
    summary: 'Python APIs, backend platform services, authentication, and edge/serverless workflows.',
    items: techStack.backend
  },
  {
    title: 'Data & Infrastructure',
    category: 'Data / Infra',
    summary: 'Databases, queues, containers, deployment, observability, package management, and source control.',
    items: techStack.dataInfra
  },
  {
    title: 'Content & SEO',
    category: 'Content / SEO',
    summary: 'Static generation, search, CMS content, structured data, sitemap, and metadata tooling.',
    items: techStack.contentSeo
  },
  {
    title: 'AI & RAG',
    category: 'AI / RAG',
    summary: 'Chat, embeddings, typed agents, retrieval, reranking, and context compression.',
    items: techStack.aiRag
  },
  {
    title: 'Document / OCR',
    category: 'Document / OCR',
    summary: 'Focused extraction and OCR tooling.',
    items: techStack.documentOcr
  }
];

const BranchCard = ({ branch, index }) => {
  const Icon = categoryIcons[branch.category] || Wrench;
  const accent = categoryAccents[branch.category] || 'accent-grey';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`voice-card glow-card ${accent}`}
      style={{ padding: '1.75rem', minHeight: '100%' }}
    >
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,0,0,0.06)' }}>
          <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
        </div>
        <div>
          <p style={{ fontSize: '0.68rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
            {branch.category}
          </p>
          <h3 style={{ fontSize: '1.18rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
            {branch.title}
          </h3>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
            {branch.summary}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {branch.items.map((item) => (
          <span
            key={item.name}
            className="rounded-full px-3 py-1.5"
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(0,0,0,0.08)',
              color: 'var(--text-primary)',
              fontFamily: "'SF Mono', monospace",
              fontSize: '0.72rem',
              lineHeight: 1.2
            }}
          >
            {item.name}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default function TechStack() {
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

      {/* Main Stack + Branches */}
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
              Main Tool Stack
            </h2>
            <p className="mt-4 mx-auto" style={{ maxWidth: '700px', color: 'rgba(255,255,255,0.72)', fontSize: '0.98rem', lineHeight: 1.7 }}>
              A compact view of the primary stack, with supporting technologies grouped into branches below.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mx-auto mb-14"
            style={{
              maxWidth: '980px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '1.25rem',
              padding: '1.35rem',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div className="flex flex-wrap justify-center gap-2.5">
              {mainStack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full px-4 py-2"
                  style={{
                    background: 'rgba(255,255,255,0.92)',
                    color: '#101010',
                    fontFamily: "'SF Mono', monospace",
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    boxShadow: '0 8px 22px rgba(0,0,0,0.16)'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {branchGroups.map((branch, i) => (
              <BranchCard key={branch.title} branch={branch} index={i} />
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
