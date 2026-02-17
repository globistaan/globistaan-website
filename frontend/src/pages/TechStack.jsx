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
    <h3 className="text-center mb-8" style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text-primary)' }}>{title}</h3>
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
          <span style={{ fontSize: '0.8rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-primary)', fontWeight: 500 }}>
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
            Tools Our Developers Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.95)', maxWidth: '650px', margin: '0 auto', textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}
          >
            From cloud infrastructure to AI agents — the technology stack powering our intelligent products and services.
          </motion.p>
        </div>
      </section>

      {/* Logo Showcase Section - HD Circuit Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.circuitBlue} 
            alt="Circuit board" 
            className="w-full h-full object-cover"
            style={{ opacity: 0.15 }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.95)' }} />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Tools We Use
            </h2>
          </motion.div>
          
          <LogoGrid items={techStack.aiAgents} title="AI & Machine Learning" />
          <LogoGrid items={techStack.clouds} title="Cloud Infrastructure" />
          <LogoGrid items={techStack.frameworks.filter(f => f.category === 'Framework')} title="Development Frameworks" />
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

      {/* Category Overview - HD Green Valley */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.greenValley} 
            alt="Green valley" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.93)' }} />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Technology Overview
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Cloud Platforms', desc: 'Scalable infrastructure across AWS, Railway, Google Cloud, and Azure for reliable deployments.', accent: 'accent-blue', icon: Cloud, bgImg: images.serverBlue },
              { title: 'AI-Powered IDEs', desc: 'Cursor and Claude Code enable AI-assisted development, accelerating code quality.', accent: 'accent-purple', icon: Code2, bgImg: images.codeScreen },
              { title: 'AI Agents & Models', desc: 'Gemini, OpenAI GPT, Claude, and LangChain form our intelligent product capabilities.', accent: 'accent-orange', icon: Cpu, bgImg: images.robotOrange },
              { title: 'Frameworks & Databases', desc: 'React, FastAPI, Next.js paired with MongoDB, PostgreSQL, and Redis.', accent: 'accent-green', icon: Layers, bgImg: images.networkCables }
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
