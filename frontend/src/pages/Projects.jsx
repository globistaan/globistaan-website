import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { projects, images } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className={`voice-card glow-card ${project.accentClass}`}
      style={{ padding: '2.5rem' }}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
            <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
          </div>
          <div>
            <Badge variant="outline" className="rounded-full mb-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {project.category}
            </Badge>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '0.7rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                {project.status}
              </span>
              <span className="inline-block w-2 h-2 rounded-full float-animation" style={{ background: '#b8d1ba', boxShadow: '0 0 6px #b8d1ba' }} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.2 }}>
            {project.title}
          </h3>
          <p className="mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
            {project.description}
          </p>
          <p className="mb-5" style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--text-muted)', fontStyle: 'italic' }}>
            {project.partnership}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
          {project.features.map((f, i) => (
            <span key={i} className="flex items-center gap-1.5" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: "'SF Mono', monospace" }}>
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} /> {f}
            </span>
          ))}
        </div>

        <button className="btn-primary text-xs self-start" style={{ padding: '0.7rem 1.4rem' }}>
          Learn More <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category.toLowerCase().includes(filter));

  return (
    <main>
      {/* Hero - AI Brain + Mountains Blend */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Split background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)' }}>
            <img 
              src={images.aiBrain} 
              alt="AI and machine learning" 
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.35) saturate(1.3)' }}
            />
          </div>
          <div className="absolute inset-0" style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)' }}>
            <img 
              src={images.dhauladharGreen} 
              alt="Himachal mountain scenery" 
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.85) saturate(1.15)' }}
            />
          </div>
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%)' }} />
        <ParticlesBg />

        <div className="relative z-10 max-w-[900px] mx-auto text-center px-5 pt-24">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-4 py-1.5 border-white/30 text-white/90" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.1)' }}>
              Our Projects
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-shadow-hero"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem' }}
          >
            Building Intelligent Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-shadow-subtle"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', maxWidth: '650px', margin: '0 auto' }}
          >
            In partnership with industry experts, we're building AI-powered products across healthcare, education, commerce, and enterprise.
          </motion.p>
        </div>
      </section>

      {/* Filter + Project Cards - Misty Forest */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.mistyForest} 
            alt="Misty mountain forest" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.92) saturate(1.1)' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.85)' }} />

        <div className="relative z-10 max-w-[1100px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {['all', 'ai', 'saas'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`btn-tag ${filter === f ? 'active' : ''}`}
                style={{ padding: '0.6rem 1.25rem' }}
              >
                {f === 'all' ? 'All Projects' : f === 'ai' ? 'AI as a Service' : 'SaaS Platforms'}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA - River Valley */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.riverValley} 
            alt="River valley mountains" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.85) saturate(1.15)' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[650px] mx-auto text-center px-5 py-20">
          <motion.div {...fadeInUp}>
            <h2 className="mb-5 text-shadow-hero" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15 }}>
              Interested in Our Projects?
            </h2>
            <p className="mb-10 text-shadow-subtle" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Explore partnership, investment, or early access opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/investors" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', background: 'white', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                Investment Opportunities <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
