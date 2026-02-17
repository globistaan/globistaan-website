import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
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

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Nature Background - River Valley */}
    <div className="absolute inset-0 z-0">
      <img 
        src={images.riverValley} 
        alt="Himachal Pradesh river valley" 
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.95) saturate(1.1)' }}
      />
    </div>
    
    {/* Gradient Overlay for text readability */}
    <div className="absolute inset-0 z-1" style={{ 
      background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.35) 100%)'
    }} />
    
    {/* Tech accent overlay */}
    <div className="blend-overlay z-1" />
    
    <ParticlesBg />

    <div className="relative z-10 max-w-[1000px] mx-auto text-center px-5 py-32">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-card-dark"
        style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}
      >
        <span className="inline-block w-2 h-2 rounded-full" style={{ background: '#b8d1ba', boxShadow: '0 0 10px #b8d1ba' }} />
        AI Innovation from the Himalayas
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 text-shadow-hero"
        style={{
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          lineHeight: 1.05,
          fontWeight: 600,
          letterSpacing: '-0.03em',
          color: '#FFFFFF'
        }}
      >
        Where Mountains Meet{' '}
        <span className="shimmer-text" style={{ WebkitTextFillColor: 'transparent' }}>
          Machines
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-10 mx-auto text-shadow-subtle"
        style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '650px'
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
        <Link to="/projects" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', background: 'white', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
          Explore Our Projects <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/investors" className="btn-secondary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
          Investor Deck <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="mt-20 scroll-indicator">
        <ChevronDown className="w-6 h-6 mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }} />
      </motion.div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="relative py-24 overflow-hidden">
    {/* Tech Background - Circuit Board */}
    <div className="absolute inset-0 z-0">
      <img 
        src={images.circuitBlue} 
        alt="AI circuit technology" 
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.2) saturate(1.5)' }}
      />
    </div>
    <div className="absolute inset-0 z-1 gradient-mesh" style={{ opacity: 0.6 }} />
    <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.88)' }} />

    <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-9">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          What We Do
        </Badge>
        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>
          AI Services & Solutions
        </h2>
        <p className="mt-4 mx-auto" style={{ maxWidth: '600px', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`voice-card glow-card ${accents[i % accents.length]}`}
              style={{ padding: '2rem' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0,0,0,0.06)' }}>
                <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* Nature + Tech Blend Banner */
const MountainBanner = () => (
  <section className="relative min-h-[50vh] flex items-center overflow-hidden">
    {/* Misty Forest Background */}
    <div className="absolute inset-0 z-0">
      <img 
        src={images.mistyForest} 
        alt="Misty pine forests of Himachal" 
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.9) saturate(1.15)' }}
      />
    </div>
    <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 100%)' }} />
    <ParticlesBg />
    
    <div className="relative z-10 max-w-[800px] mx-auto text-center px-5 py-20">
      <motion.div {...fadeInUp}>
        <h2 className="text-shadow-hero" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15 }}>
          Serenity Meets Innovation
        </h2>
        <p className="mt-5 mx-auto text-shadow-subtle" style={{ maxWidth: '550px', color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: 1.7 }}>
          From the tranquil valleys of Himachal Pradesh to cutting-edge AI laboratories — we blend nature's wisdom with technological excellence.
        </p>
      </motion.div>
    </div>
  </section>
);

const ProjectsPreview = () => (
  <section className="relative py-24 overflow-hidden">
    {/* Pine Forest Background */}
    <div className="absolute inset-0 z-0">
      <img 
        src={images.blueHills} 
        alt="Blue layered Himalayan mountains" 
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.95) saturate(1.1)' }}
      />
    </div>
    <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.88)' }} />

    <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-9">
      <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
        <div>
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Current Projects
          </Badge>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>
            What We're Building
          </h2>
        </div>
        <Link to="/projects" className="btn-secondary text-xs" style={{ textDecoration: 'none' }}>
          View All Projects <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to="/projects" className="no-underline">
                <div className={`voice-card glow-card ${project.accentClass}`} style={{ padding: '2.25rem', height: '100%' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
                      <Icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <Badge variant="outline" className="rounded-full text-xs" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.65rem', textTransform: 'uppercase' }}>
                      {project.category}
                    </Badge>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{project.description}</p>
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
  <section className="relative min-h-[50vh] flex items-center overflow-hidden">
    {/* Snow Peak Background */}
    <div className="absolute inset-0 z-0">
      <img 
        src={images.dhauladharRange} 
        alt="Dhauladhar mountain range" 
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.85) saturate(1.2)' }}
      />
    </div>
    <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)' }} />
    <ParticlesBg />
    
    <div className="relative z-10 max-w-[750px] mx-auto text-center px-5 py-20">
      <motion.div {...fadeInUp}>
        <h2 className="mb-5 text-shadow-hero" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15 }}>
          Ready to Build with AI?
        </h2>
        <p className="mb-10 text-shadow-subtle" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Whether you're looking for AI-powered solutions, investment opportunities, or a technology partnership — we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', background: 'white', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/about" className="btn-secondary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
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
      <MountainBanner />
      <ProjectsPreview />
      <CTASection />
    </main>
  );
}
