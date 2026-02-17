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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`voice-card glow-card ${project.accentClass}`}
      style={{ padding: '2.5rem' }}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
            <Icon className="w-5.5 h-5.5" style={{ color: 'var(--text-primary)' }} />
          </div>
          <div>
            <Badge variant="outline" className="rounded-full mb-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {project.category}
            </Badge>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '0.7rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                {project.status}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#b8d1ba', boxShadow: '0 0 4px #b8d1ba' }} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.2 }}>
            {project.title}
          </h3>
          <p className="mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
            {project.description}
          </p>
          <p className="mb-5" style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--text-muted)', fontStyle: 'italic' }}>
            {project.partnership}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
          {project.features.map((f, i) => (
            <span key={i} className="flex items-center gap-1.5" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: "'SF Mono', monospace" }}>
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} /> {f}
            </span>
          ))}
        </div>

        <button className="btn-primary text-xs self-start" style={{ padding: '0.6rem 1.2rem' }}>
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
      {/* Hero - Dhauladhar Mountains */}
      <section className="img-bg-section" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-image">
          <img src={images.dhauladharRange} alt="Dhauladhar mountain range panorama" style={{ filter: 'brightness(0.88) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)' }} />
        <ParticlesBg />

        <div className="content-z max-w-[800px] mx-auto text-center px-5 pt-24" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-3 py-1 border-white/30 text-white/90" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.1)' }}>
              Our Projects
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem', textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
          >
            Building Intelligent Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto', textShadow: '0 1px 12px rgba(0,0,0,0.3)' }}
          >
            In partnership with industry experts, we're building AI-powered products across healthcare, education, commerce, and enterprise.
          </motion.p>
        </div>
      </section>

      {/* Filter + Project Cards - Mountain backdrop */}
      <section className="img-bg-section" style={{ minHeight: '70vh', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.dhauladharGreen} alt="Green meadows with snow-capped peaks" style={{ filter: 'brightness(0.92) saturate(1.1)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.9) 100%)' }} />

        <div className="content-z max-w-[1000px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp} className="flex flex-wrap items-center gap-2 mb-10">
            {['all', 'ai', 'saas'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`btn-tag ${filter === f ? 'active' : ''}`}
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

      {/* CTA - Snow Peak */}
      <section className="img-bg-section" style={{ minHeight: '45vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-image">
          <img src={images.snowPeakMist} alt="Misty snow-capped Himalayan peaks" style={{ filter: 'brightness(0.85) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)' }} />
        <ParticlesBg />
        <div className="content-z max-w-[600px] mx-auto text-center px-5 py-16" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h2 className="mb-4" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.2, textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
              Interested in Our Projects?
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.6, textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}>
              Explore partnership, investment, or early access opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/investors" className="btn-primary" style={{ textDecoration: 'none', padding: '0.9rem 2rem', background: 'white', color: 'var(--text-primary)' }}>
                Investment Opportunities <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.9rem 2rem', color: 'white', borderColor: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)' }}>
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
