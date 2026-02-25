import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronRight, ChevronDown, CheckCircle2, Brain, Sparkles, Zap } from 'lucide-react';
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
    {/* Stunning HD Background - Himachal Pradesh Green Mountains with Pine Forests */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop" 
        alt="Lush green mountains of Himachal Pradesh with pine forests and waterfalls" 
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center center' }}
      />
    </div>
    
    {/* Subtle gradient overlay for depth */}
    <div className="absolute inset-0 z-1" style={{ 
      background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.35) 100%)'
    }} />
    
    <ParticlesBg />

    <div className="relative z-10 max-w-[1100px] mx-auto text-center px-5 py-32">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
        style={{ 
          fontSize: '0.75rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.08em', 
          background: 'rgba(255,255,255,0.15)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white' 
        }}
      >
        <span className="inline-block w-2 h-2 rounded-full" style={{ background: '#b8d1ba', boxShadow: '0 0 10px #b8d1ba' }} />
        AI Innovation from the Himalayas
      </motion.div>

      {/* Frosted Glass Title with Modern Typography */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 inline-block"
        style={{
          background: 'rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '24px',
          padding: '2rem 3rem',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            margin: 0
          }}
        >
          <span style={{ color: '#FFFFFF' }}>Where </span>
          <span style={{ color: '#E8F4F8' }}>Mountains</span>
          <br />
          <span style={{ color: '#FFFFFF' }}>Meet </span>
          <span style={{ color: '#D0E8F5' }}>Machines</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-10 mx-auto mt-8"
        style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.95)',
          maxWidth: '650px',
          textShadow: '0 1px 10px rgba(0,0,0,0.4)'
        }}
      >
        {companyInfo.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link to="/projects" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', background: 'white', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
          Explore Our Projects <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/investors" className="btn-secondary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.15)' }}>
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
    {/* HD Background - Server Room */}
    <div className="absolute inset-0 z-0">
      <img 
        src={images.serverGreen} 
        alt="Server room technology" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.95)' }} />

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
          const bgImages = [images.circuitBlue, images.serverBlue, images.robotOrange, images.aiBrain, images.networkCables, images.motherboard];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`voice-card glow-card ${accents[i % accents.length]} relative overflow-hidden`}
              style={{ padding: '2rem' }}
            >
              {/* Card background image */}
              <div className="absolute inset-0 z-0 opacity-10">
                <img src={bgImages[i]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0,0,0,0.06)' }}>
                  <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{service.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* Nature + Tech Banner with AI Theme */
const MountainBanner = () => (
  <section className="relative min-h-[70vh] flex items-center overflow-hidden">
    {/* AI-Themed Background - Futuristic Neural Network */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2400&auto=format&fit=crop" 
        alt="AI neural network technology background" 
        className="w-full h-full object-cover"
        style={{ opacity: 0.85 }}
      />
    </div>
    <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(10,25,47,0.75) 0%, rgba(10,25,47,0.85) 100%)' }} />
    <ParticlesBg />
    
    <div className="relative z-10 max-w-[1100px] mx-auto px-5 py-20">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15, textShadow: '0 2px 15px rgba(0,0,0,0.4)' }}>
          Serenity Meets Innovation
        </h2>
        <p className="mt-5 mx-auto" style={{ maxWidth: '700px', color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: 1.7, textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
          From the tranquil valleys of Himachal Pradesh to cutting-edge AI laboratories — we blend nature's wisdom with technological excellence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Card 1 - Machine Learning */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '2rem'
          }}
        >
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
            <Brain className="w-7 h-7" style={{ color: '#60A5FA' }} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#FFFFFF' }}>
            Machine Learning
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
            Advanced neural networks and deep learning models that adapt and evolve with your business needs.
          </p>
        </motion.div>

        {/* AI Card 2 - Natural Language Processing */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '2rem'
          }}
        >
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(168, 85, 247, 0.2)' }}>
            <Sparkles className="w-7 h-7" style={{ color: '#C084FC' }} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#FFFFFF' }}>
            AI Automation
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
            Intelligent automation systems that streamline workflows and boost productivity across your organization.
          </p>
        </motion.div>

        {/* AI Card 3 - Predictive Analytics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '2rem'
          }}
        >
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(34, 197, 94, 0.2)' }}>
            <Zap className="w-7 h-7" style={{ color: '#4ADE80' }} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#FFFFFF' }}>
            Predictive Analytics
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
            Data-driven insights and forecasting powered by AI to make smarter business decisions.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProjectsPreview = () => (
  <section className="relative py-24 overflow-hidden">
    {/* HD Background - Blue Hills */}
    <div className="absolute inset-0 z-0">
      <img 
        src={images.blueHills} 
        alt="Blue Himalayan mountains" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.92)' }} />

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
          const projectImages = [images.robotYellow, images.serverBlue, images.robotOrange, images.networkCables];
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
                  <div className="relative z-10">
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
  <section className="relative min-h-[55vh] flex items-center overflow-hidden">
    {/* HD Background - Dhauladhar Range */}
    <div className="absolute inset-0 z-0">
      <img 
        src={images.dhauladharRange} 
        alt="Dhauladhar mountain range" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)' }} />
    <ParticlesBg />
    
    <div className="relative z-10 max-w-[850px] mx-auto px-5 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg h-24"
        >
          <img src={images.mistyForest} alt="Forest" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-xl overflow-hidden shadow-lg h-24"
        >
          <img src={images.robotCat} alt="Robot" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-lg h-24"
        >
          <img src={images.manaliRange} alt="Mountains" className="w-full h-full object-cover" />
        </motion.div>
      </div>
      
      <motion.div {...fadeInUp} className="text-center">
        <h2 className="mb-5" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15, textShadow: '0 2px 15px rgba(0,0,0,0.4)' }}>
          Ready to Build with AI?
        </h2>
        <p className="mb-10" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', lineHeight: 1.7, textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
          Whether you're looking for AI-powered solutions, investment opportunities, or a technology partnership — we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', background: 'white', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/about" className="btn-secondary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.15)' }}>
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
