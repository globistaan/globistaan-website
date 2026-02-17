import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { companyInfo, projects, services, images } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const HeroSection = () => (
  <section className="ai-bg relative min-h-[92vh] flex items-center justify-center" style={{ background: 'var(--gradient-hero-warm)' }}>
    <ParticlesBg />
    <div className="relative z-10 max-w-[900px] mx-auto text-center px-5 py-32">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
        style={{
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.5)',
          fontFamily: "'SF Mono', monospace",
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: 'var(--text-secondary)'
        }}
      >
        <Sparkles className="w-3.5 h-3.5" />
        AI-Powered Innovation
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mb-5"
        style={{
          fontSize: 'clamp(2.2rem, 5.5vw, 3.5rem)',
          lineHeight: 1.08,
          fontWeight: 600,
          letterSpacing: '-0.025em',
          color: 'var(--text-primary)'
        }}
      >
        Building the Future with{' '}
        <span style={{ position: 'relative' }}>
          Artificial Intelligence
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              position: 'absolute',
              bottom: '2px',
              left: 0,
              height: '8px',
              background: 'rgba(252, 202, 199, 0.6)',
              borderRadius: '4px',
              zIndex: -1
            }}
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-8 mx-auto"
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: 1.65,
          color: 'var(--text-secondary)',
          maxWidth: '620px'
        }}
      >
        {companyInfo.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link to="/projects" className="btn-primary" style={{ textDecoration: 'none', padding: '0.85rem 2rem' }}>
          Explore Our Projects <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/investors" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.85rem 2rem' }}>
          Investor Deck <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>

    </div>
  </section>
);

const ServicesSection = () => (
  <section className="relative py-24" style={{ background: 'var(--bg-page)' }}>
    <div className="max-w-[1280px] mx-auto px-5 md:px-9">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          What We Do
        </Badge>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>
          AI Services & Solutions
        </h2>
        <p className="mt-4 mx-auto" style={{ maxWidth: '560px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
          From custom AI models to enterprise SaaS platforms, we deliver end-to-end technology solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          const accents = ['accent-purple', 'accent-blue', 'accent-orange', 'accent-pink', 'accent-green', 'accent-grey'];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`voice-card ${accents[i % accents.length]}`}
              style={{ padding: '1.75rem' }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(0,0,0,0.06)' }}>
                <Icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const ImageShowcase = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={images.mountainTerrace} alt="Himachal Pradesh" className="w-full h-full object-cover" style={{ filter: 'brightness(0.35)' }} />
    </div>
    <div className="relative z-10 max-w-[1100px] mx-auto px-5 md:px-9">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong"
          style={{ padding: '2rem', borderRadius: '1rem' }}
        >
          <div className="rounded-xl overflow-hidden mb-4" style={{ height: '160px' }}>
            <img src={images.robot} alt="AI Robot" className="w-full h-full object-cover" />
          </div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
            AI-First Approach
          </h3>
          <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
            Every solution we build is powered by cutting-edge artificial intelligence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong"
          style={{ padding: '2rem', borderRadius: '1rem' }}
        >
          <div className="rounded-xl overflow-hidden mb-4" style={{ height: '160px' }}>
            <img src={images.workspace} alt="Developer workspace" className="w-full h-full object-cover" />
          </div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
            Modern Engineering
          </h3>
          <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
            Built with the latest tools, frameworks, and AI-powered development environments.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-strong"
          style={{ padding: '2rem', borderRadius: '1rem' }}
        >
          <div className="rounded-xl overflow-hidden mb-4" style={{ height: '160px' }}>
            <img src={images.neuralBrain} alt="Neural network" className="w-full h-full object-cover" />
          </div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
            Intelligent Systems
          </h3>
          <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
            Neural networks and deep learning models tailored for your business needs.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProjectsPreview = () => (
  <section className="relative py-24" style={{ background: 'var(--bg-section)' }}>
    <div className="max-w-[1280px] mx-auto px-5 md:px-9">
      <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
        <div>
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Current Projects
          </Badge>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>
            What We're Building
          </h2>
        </div>
        <Link to="/projects" className="btn-secondary text-xs" style={{ textDecoration: 'none' }}>
          View All Projects <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/projects`} className="no-underline">
                <div className={`voice-card ${project.accentClass}`} style={{ padding: '2rem', height: '100%' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
                      <Icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <Badge variant="outline" className="rounded-full text-xs" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.65rem', textTransform: 'uppercase' }}>
                      {project.category}
                    </Badge>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.55, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((f, fi) => (
                      <span key={fi} className="flex items-center gap-1" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: "'SF Mono', monospace" }}>
                        <CheckCircle2 className="w-3 h-3" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="ai-bg relative py-24" style={{ background: 'var(--gradient-hero-subtle)' }}>
    <ParticlesBg />
    <div className="relative z-10 max-w-[700px] mx-auto text-center px-5">
      <motion.div {...fadeInUp}>
        <h2 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>
          Ready to Build with AI?
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
          Whether you're looking for AI-powered solutions, investment opportunities, or a technology partnership — we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '0.85rem 2rem' }}>
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/about" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.85rem 2rem' }}>
            Learn About Us
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <ProjectsPreview />
      <div className="section-divider" />
      <CTASection />
    </main>
  );
}
