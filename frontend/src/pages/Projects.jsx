import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { projects } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`voice-card ${project.accentClass}`}
      style={{ padding: '2.5rem' }}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Info */}
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
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#b8d1ba' }} />
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

        {/* Screenshot Placeholder */}
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
      <section className="ai-bg relative pt-32 pb-20" style={{ background: 'var(--gradient-hero-warm)' }}>
        <ParticlesBg />
        <div className="relative z-10 max-w-[800px] mx-auto text-center px-5">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Projects
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.25rem' }}
          >
            Building Intelligent Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto' }}
          >
            In partnership with industry experts, we're building AI-powered products across healthcare, education, commerce, and enterprise.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Filter + Project Cards */}
      <section className="py-20" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-[1000px] mx-auto px-5 md:px-9">
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

      <div className="section-divider" />

      {/* CTA */}
      <section className="ai-bg relative py-20" style={{ background: 'var(--gradient-hero-subtle)' }}>
        <ParticlesBg />
        <div className="relative z-10 max-w-[600px] mx-auto text-center px-5">
          <motion.div {...fadeInUp}>
            <h2 className="mb-4" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Interested in Our Projects?
            </h2>
            <p className="mb-8" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Explore partnership, investment, or early access opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/investors" className="btn-primary" style={{ textDecoration: 'none', padding: '0.85rem 2rem' }}>
                Investment Opportunities <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.85rem 2rem' }}>
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
