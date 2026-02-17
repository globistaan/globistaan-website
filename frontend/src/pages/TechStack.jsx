import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Code2, Cpu, Layers, Database, Wrench } from 'lucide-react';
import { techStack, images } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const categoryIcons = { 'Cloud': Cloud, 'IDE': Code2, 'AI': Cpu, 'Framework': Layers, 'Database': Database };
const categoryAccents = { 'Cloud': 'accent-blue', 'IDE': 'accent-purple', 'AI': 'accent-orange', 'Framework': 'accent-green', 'Database': 'accent-pink' };

const TechCard = ({ item, index }) => {
  const Icon = categoryIcons[item.category] || Wrench;
  const accent = categoryAccents[item.category] || 'accent-grey';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`voice-card glow-card ${accent}`}
      style={{ padding: '1.5rem' }}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,0,0,0.06)' }}>
          <Icon className="w-4.5 h-4.5" style={{ color: 'var(--text-primary)' }} />
        </div>
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
            {item.name}
          </h4>
          <p style={{ fontSize: '0.8rem', lineHeight: 1.4, color: 'var(--text-secondary)' }}>
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');
  const allTools = [...techStack.clouds, ...techStack.ides, ...techStack.aiAgents, ...techStack.frameworks];
  const categories = [
    { id: 'all', label: 'All Tools' },
    { id: 'Cloud', label: 'Cloud Platforms' },
    { id: 'IDE', label: 'IDEs & Editors' },
    { id: 'AI', label: 'AI Agents' },
    { id: 'Framework', label: 'Frameworks' },
    { id: 'Database', label: 'Databases' }
  ];
  const filtered = activeCategory === 'all' ? allTools : allTools.filter(t => t.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="img-bg-section" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="bg-image">
          <img src={images.serverRoom} alt="" style={{ filter: 'brightness(0.5) saturate(1.2)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.4) 100%)' }} />
        <div className="floating-orb floating-orb-2" />
        <ParticlesBg />
        <div className="content-z max-w-[800px] mx-auto text-center px-5" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-3 py-1 border-white/30 text-white/80" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Tech Stack
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem' }}
          >
            Tools Our Developers Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.65, color: 'rgba(255,255,255,0.7)', maxWidth: '580px', margin: '0 auto' }}
          >
            From cloud infrastructure to AI agents — the technology stack powering our AI products and services.
          </motion.p>
        </div>
      </section>

      {/* Tech Images Strip */}
      <section className="img-bg-section" style={{ padding: '2.5rem 0' }}>
        <div className="bg-image">
          <img src={images.codeScreen} alt="" style={{ filter: 'brightness(0.4) saturate(1.1)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'rgba(0,0,0,0.2)' }} />
        <div className="content-z max-w-[1100px] mx-auto px-5" style={{ position: 'relative', zIndex: 5 }}>
          <div className="grid grid-cols-4 gap-3">
            {[images.workspace, images.circuitBoard, images.neuralBlue, images.aiBrain].map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="img-zoom" style={{ height: '100px', borderRadius: '0.5rem' }}>
                <img src={img} alt="" className="w-full h-full object-cover" style={{ borderRadius: '0.5rem' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="img-bg-section" style={{ padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.mountainFog} alt="" style={{ filter: 'brightness(0.45) saturate(1.2)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'rgba(255,255,255,0.82)' }} />
        <div className="content-z max-w-[1100px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp} className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`btn-tag ${activeCategory === cat.id ? 'active' : ''}`}>
                {cat.label}
              </button>
            ))}
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((tool, i) => (
              <TechCard key={`${tool.name}-${tool.category}`} item={tool} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="img-bg-section" style={{ padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.neuralBrain} alt="" style={{ filter: 'brightness(0.1)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'rgba(255,255,255,0.92)' }} />
        <div className="content-z max-w-[1100px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Technology Overview
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Cloud Platforms', desc: 'Scalable infrastructure across AWS, Railway, Google Cloud, and Azure for reliable deployments.', accent: 'accent-blue', icon: Cloud },
              { title: 'AI-Powered IDEs', desc: 'Cursor and Claude Code enable AI-assisted development, accelerating code quality.', accent: 'accent-purple', icon: Code2 },
              { title: 'AI Agents & Models', desc: 'Gemini, OpenAI GPT, Claude, and LangChain form our intelligent product capabilities.', accent: 'accent-orange', icon: Cpu },
              { title: 'Frameworks & Databases', desc: 'React, FastAPI, Next.js paired with MongoDB, PostgreSQL, and Redis.', accent: 'accent-green', icon: Layers }
            ].map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`voice-card glow-card ${cat.accent}`} style={{ padding: '2rem' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(0,0,0,0.06)' }}>
                    <Icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{cat.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{cat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="img-bg-section" style={{ padding: '6rem 0' }}>
        <div className="bg-image">
          <img src={images.snowyPeak} alt="" style={{ filter: 'brightness(0.28)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'rgba(0,0,0,0.4)' }} />
        <ParticlesBg />
        <div className="content-z max-w-[600px] mx-auto text-center px-5" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h2 className="mb-4" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.2 }}>
              Want to Work With Our Stack?
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Whether you're a developer or a client who wants to leverage these tools — let's talk.
            </p>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '0.85rem 2rem', background: 'white', color: 'var(--text-primary)' }}>
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
