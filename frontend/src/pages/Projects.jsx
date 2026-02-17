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
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
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

          <h3 className="mb-3" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.2 }}>
            {project.title}
          </h3>
          <p className="mb-5" style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
            {project.description}
          </p>
          <p className="mb-5" style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--text-muted)', fontStyle: 'italic' }}>
            {project.partnership}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
            {project.features.map((f, i) => (
              <span key={i} className="flex items-center gap-1.5" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: "'SF Mono', monospace" }}>
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} /> {f}
              </span>
            ))}
          </div>

          <button className="btn-primary text-xs" style={{ padding: '0.6rem 1.2rem' }}>
            Learn More <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="lg:w-[340px] flex-shrink-0">
          <div className="placeholder-img" style={{ minHeight: '240px', borderRadius: '0.75rem' }}>
            {project.placeholder}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category.toLowerCase().includes(filter));

  return (
    <main>
      {/* Hero */}
      <section className="img-bg-section" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="bg-image">
          <img src={images.aiInterface} alt="" style={{ filter: 'brightness(0.55) saturate(1.2)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.4) 100%)' }} />
        <div className="floating-orb floating-orb-1" />
        <ParticlesBg />

        <div className="content-z max-w-[800px] mx-auto text-center px-5" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-3 py-1 border-white/30 text-white/80" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Projects
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem' }}
          >
            Building Intelligent Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.65, color: 'rgba(255,255,255,0.7)', maxWidth: '580px', margin: '0 auto' }}
          >
            In partnership with industry experts, we're building AI-powered products across healthcare, education, commerce, and enterprise.
          </motion.p>
        </div>
      </section>

      {/* AI Tech Images Strip */}
      <section className="img-bg-section" style={{ padding: '3rem 0' }}>
        <div className="bg-image">
          <img src={images.codeScreen} alt="" style={{ filter: 'brightness(0.12)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'rgba(0,0,0,0.5)' }} />
        <div className="content-z max-w-[1000px] mx-auto px-5" style={{ position: 'relative', zIndex: 5 }}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[images.robot, images.workspace, images.neuralBrain, images.serverRoom, images.aiBrain, images.circuitBoard].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="img-zoom"
                style={{ height: '90px', borderRadius: '0.5rem' }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" style={{ borderRadius: '0.5rem' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Project Cards */}
      <section className="img-bg-section" style={{ padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.pineForest} alt="" style={{ filter: 'brightness(0.1)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'rgba(255,255,255,0.94)' }} />

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

          <div className="flex flex-col gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="img-bg-section" style={{ padding: '6rem 0' }}>
        <div className="bg-image">
          <img src={images.mountainTerrace} alt="" style={{ filter: 'brightness(0.28) saturate(1.2)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'rgba(0,0,0,0.4)' }} />
        <ParticlesBg />
        <div className="content-z max-w-[600px] mx-auto text-center px-5" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h2 className="mb-4" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.2 }}>
              Interested in Our Projects?
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Explore partnership, investment, or early access opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/investors" className="btn-primary" style={{ textDecoration: 'none', padding: '0.85rem 2rem', background: 'white', color: 'var(--text-primary)' }}>
                Investment Opportunities <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.85rem 2rem', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
