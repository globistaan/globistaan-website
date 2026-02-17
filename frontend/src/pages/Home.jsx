import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { companyInfo, projects, services, images } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const HeroSection = () => (
  <section className="img-bg-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="bg-image">
      <img src={images.snowyPeak} alt="" style={{ filter: 'brightness(0.7) saturate(1.3)' }} />
    </div>
    <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.5) 100%)' }} />
    {/* Floating Orbs */}
    <div className="floating-orb floating-orb-1" />
    <div className="floating-orb floating-orb-2" />
    <ParticlesBg />

    <div className="content-z max-w-[900px] mx-auto text-center px-5 py-32" style={{ position: 'relative', zIndex: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.2)',
          fontFamily: "'SF Mono', monospace",
          fontSize: '0.72rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'rgba(255,255,255,0.85)'
        }}
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#b8d1ba', boxShadow: '0 0 6px #b8d1ba' }} />
        AI-Powered Innovation from the Himalayas
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mb-5"
        style={{
          fontSize: 'clamp(2.4rem, 6vw, 4rem)',
          lineHeight: 1.05,
          fontWeight: 600,
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          textShadow: '0 2px 20px rgba(0,0,0,0.4), 0 1px 6px rgba(0,0,0,0.25)'
        }}
      >
        Building the Future with{' '}
        <span className="shimmer-text" style={{ WebkitTextFillColor: 'transparent' }}>
          Artificial Intelligence
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-10 mx-auto"
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '600px'
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
        <Link to="/projects" className="btn-primary" style={{ textDecoration: 'none', padding: '0.9rem 2.2rem', background: 'white', color: 'var(--text-primary)' }}>
          Explore Our Projects <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/investors" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.9rem 2.2rem', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
          Investor Deck <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-16 scroll-indicator"
      >
        <ChevronDown className="w-5 h-5 mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }} />
      </motion.div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="img-bg-section" style={{ padding: '6rem 0' }}>
    <div className="bg-image">
      <img src={images.circuitBoard} alt="" style={{ filter: 'brightness(0.15) saturate(0.8)' }} />
    </div>
    <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.85) 100%)' }} />
    <div className="floating-orb floating-orb-3" />

    <div className="content-z max-w-[1280px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
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
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`voice-card glow-card ${accents[i % accents.length]}`}
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
  <section className="img-bg-section" style={{ padding: '5rem 0' }}>
    <div className="bg-image">
      <img src={images.pineForest} alt="" style={{ filter: 'brightness(0.6) saturate(1.3)' }} />
    </div>
    <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 100%)' }} />

    <div className="content-z max-w-[1100px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.2 }}>
          Where Mountains Meet Machines
        </h2>
        <p className="mt-3 mx-auto" style={{ maxWidth: '500px', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          Innovation rooted in the serene landscapes of Himachal Pradesh.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { img: images.robot, title: 'AI-First Approach', desc: 'Every solution is powered by cutting-edge artificial intelligence.' },
          { img: images.workspace, title: 'Modern Engineering', desc: 'Built with the latest tools and AI-powered development environments.' },
          { img: images.neuralBrain, title: 'Intelligent Systems', desc: 'Neural networks and deep learning models for your business.' }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28, rotateX: 4 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong"
            style={{ padding: '1.5rem', borderRadius: '1rem' }}
          >
            <div className="img-zoom" style={{ height: '160px', marginBottom: '1rem' }}>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" style={{ borderRadius: '0.75rem' }} />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsPreview = () => (
  <section className="img-bg-section" style={{ padding: '6rem 0' }}>
    <div className="bg-image">
      <img src={images.aiBrain} alt="" style={{ filter: 'brightness(0.15) saturate(0.5)' }} />
    </div>
    <div className="bg-overlay" style={{ background: 'rgba(255,255,255,0.88)' }} />

    <div className="content-z max-w-[1280px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
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
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/projects" className="no-underline">
                <div className={`voice-card glow-card ${project.accentClass}`} style={{ padding: '2rem', height: '100%' }}>
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
  <section className="img-bg-section" style={{ padding: '6rem 0' }}>
    <div className="bg-image">
      <img src={images.mountainRange} alt="" style={{ filter: 'brightness(0.65) saturate(1.3)' }} />
    </div>
    <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 100%)' }} />
    <ParticlesBg />

    <div className="content-z max-w-[700px] mx-auto text-center px-5" style={{ position: 'relative', zIndex: 10 }}>
      <motion.div {...fadeInUp}>
        <h2 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15 }}>
          Ready to Build with AI?
        </h2>
        <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.65 }}>
          Whether you're looking for AI-powered solutions, investment opportunities, or a technology partnership — we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '0.9rem 2rem', background: 'white', color: 'var(--text-primary)' }}>
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/about" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.9rem 2rem', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
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
      <ServicesSection />
      <ImageShowcase />
      <ProjectsPreview />
      <CTASection />
    </main>
  );
}
