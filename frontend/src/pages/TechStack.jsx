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
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`voice-card glow-card ${accent}`}
      style={{ padding: '1.75rem' }}
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="tech-logo-container flex-shrink-0">
          {item.logo ? (
            <img 
              src={item.logo} 
              alt={`${item.name} logo`} 
              className="tech-logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="w-12 h-12 rounded-lg items-center justify-center" style={{ display: item.logo ? 'none' : 'flex', background: 'rgba(0,0,0,0.06)' }}>
            <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
          </div>
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

// Logo Showcase Component
const LogoShowcase = ({ items, title }) => (
  <div className="mb-12">
    <h3 className="text-center mb-8" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)' }}>{title}</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          className="flex flex-col items-center gap-2"
        >
          <div className="tech-logo-container" style={{ width: '80px', height: '80px' }}>
            {item.logo && (
              <img 
                src={item.logo} 
                alt={`${item.name} logo`}
                className="w-12 h-12 object-contain"
              />
            )}
          </div>
          <span style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

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
      {/* Hero - Code + Mountains Blend */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Layered background: Code on left, Mountains on right */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)' }}>
            <img 
              src={images.codeScreen} 
              alt="Code and programming" 
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.4) saturate(1.2)' }}
            />
          </div>
          <div className="absolute inset-0" style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)' }}>
            <img 
              src={images.blueHills} 
              alt="Blue Himalayan mountains" 
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.85) saturate(1.15)' }}
            />
          </div>
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[900px] mx-auto text-center px-5 pt-24">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-4 py-1.5 border-white/30 text-white/90" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.1)' }}>
              Tech Stack
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-shadow-hero"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem' }}
          >
            Tools Our Developers Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-shadow-subtle"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', maxWidth: '650px', margin: '0 auto' }}
          >
            From cloud infrastructure to AI agents — the technology stack powering our intelligent products and services.
          </motion.p>
        </div>
      </section>

      {/* Logo Showcase Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.motherboard} 
            alt="Technology hardware" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.15) saturate(1.3)' }}
          />
        </div>
        <div className="absolute inset-0 z-1 gradient-mesh" style={{ opacity: 0.4 }} />
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.92)' }} />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Our Technology Partners
            </h2>
          </motion.div>
          
          <LogoShowcase items={techStack.aiAgents} title="AI & Machine Learning" />
          <LogoShowcase items={techStack.clouds} title="Cloud Infrastructure" />
          <LogoShowcase items={techStack.frameworks.filter(f => f.category === 'Framework')} title="Development Frameworks" />
        </div>
      </section>

      {/* Filter + Grid - Mountain backdrop */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.mistyForest} 
            alt="Misty mountain forest" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.9) saturate(1.1)' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.85)' }} />
        
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

      {/* Category Overview - Code Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.neonCode} 
            alt="Neon code effect" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3) saturate(1.5)' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.88)' }} />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
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
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 24 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.1 }} 
                  className={`voice-card glow-card ${cat.accent}`} 
                  style={{ padding: '2.25rem' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(0,0,0,0.06)' }}>
                    <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{cat.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{cat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - Mountain Range */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.dhauladharRange} 
            alt="Dhauladhar mountain range" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.8) saturate(1.2)' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[650px] mx-auto text-center px-5 py-16">
          <motion.div {...fadeInUp}>
            <h2 className="mb-5 text-shadow-hero" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15 }}>
              Want to Work With Our Stack?
            </h2>
            <p className="mb-10 text-shadow-subtle" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.65 }}>
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
