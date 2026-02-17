import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { companyInfo, registrations, images } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function About() {
  return (
    <main>
      {/* Hero - River Valley Full Page */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.riverMountain} 
            alt="Himachal Pradesh river valley" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.9) saturate(1.15)' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[900px] mx-auto text-center px-5 pt-24">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-4 py-1.5 border-white/30 text-white/90" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.1)' }}>
              Our Story
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-shadow-hero"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem' }}
          >
            About Globistaan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-shadow-subtle"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.95)', maxWidth: '650px', margin: '0 auto' }}
          >
            An IT services startup born in the serene mountains of Himachal Pradesh, building AI solutions for the global enterprise.
          </motion.p>
        </div>
      </section>

      {/* Story Section - Circuit + Mountains Blend */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.circuitComponents} 
            alt="Technology circuits" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.15) saturate(1.3)' }}
          />
        </div>
        <div className="absolute inset-0 z-1 gradient-mesh" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.9)' }} />

        <div className="relative z-10 max-w-[1000px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="content-glass max-w-[800px] mx-auto">
            <h2 className="mb-8 text-center" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              From the Mountains to the World
            </h2>
            <div className="flex flex-col gap-6" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              <p>
                The idea of Globistaan came into existence as we want to be a valuable part of the global community and see tremendous scope in the technology sector as a software development services company. This venture is a humble attempt in solving challenges and exploring new avenues in the field of technology.
              </p>
              <p>
                We are a small and lean IT company, open to clients of all sizes and needs, and we are easy to adapt. Whether you are a startup or a large bank that needs talented programmers to build and support your applications — we onboard resources based on client requirement, and we are very fast and careful to match your needs.
              </p>
              <p>
                Today, we're evolving beyond traditional IT services into the AI frontier — building intelligent products that leverage the latest in machine learning, natural language processing, and generative AI to solve real-world problems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Quote - Misty Forest */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.pineForestMist} 
            alt="Pine forest with lake" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.85) saturate(1.15)' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 100%)' }} />
        
        <div className="relative z-10 max-w-[750px] mx-auto text-center px-5 py-20">
          <motion.div {...fadeInUp}>
            <Quote className="w-12 h-12 mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.7)' }} />
            <p className="italic mb-8 text-shadow-hero" style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', lineHeight: 1.75, color: '#FFFFFF' }}>
              "As a startup founder who has spent close to 13 years in the IT industry developing web applications for global banks, I understand the need for security and trust in the people who support proprietary code."
            </p>
            <div>
              <p style={{ fontWeight: 500, fontSize: '1.1rem', color: '#FFFFFF' }}>[Founder Name]</p>
              <p style={{ fontSize: '0.8rem', fontFamily: "'SF Mono', monospace", color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Blue Hills */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.blueHills} 
            alt="Blue layered mountains" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.95) saturate(1.1)' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.82)' }} />

        <div className="relative z-10 max-w-[1100px] mx-auto px-5 md:px-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeInUp} className="voice-card accent-purple glow-card" style={{ padding: '2.75rem' }}>
              <Badge variant="outline" className="mb-5 rounded-full px-4 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mission</Badge>
              <h3 className="mb-4" style={{ fontSize: '1.3rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                Democratize AI for Every Enterprise
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                To make cutting-edge artificial intelligence accessible to businesses of all sizes, enabling them to automate, innovate, and scale with intelligent technology solutions built on trust and transparency.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="voice-card accent-blue glow-card" style={{ padding: '2.75rem' }}
            >
              <Badge variant="outline" className="mb-5 rounded-full px-4 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vision</Badge>
              <h3 className="mb-4" style={{ fontSize: '1.3rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                Global AI Innovation Hub
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                To become a globally recognized AI services company from India, known for building intelligent products that transform industries — from healthcare and education to commerce and enterprise operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registrations - Green Valley */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.greenValley} 
            alt="Lush green valley" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.88) saturate(1.15)' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.82)' }} />

        <div className="relative z-10 max-w-[1100px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Trust & Compliance
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Government Registered & Compliant
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {registrations.map((reg, i) => {
              const Icon = reg.icon;
              const accents = ['accent-green', 'accent-orange', 'accent-blue', 'accent-purple', 'accent-pink'];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className={`voice-card glow-card ${accents[i]}`}
                  style={{ padding: '1.75rem' }}
                >
                  <Icon className="w-6 h-6 mb-4" style={{ color: 'var(--text-primary)' }} />
                  <h4 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    {reg.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                    {reg.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - Dhauladhar Range */}
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
        
        <div className="relative z-10 max-w-[650px] mx-auto text-center px-5 py-20">
          <motion.div {...fadeInUp}>
            <h2 className="mb-5 text-shadow-hero" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15 }}>
              Let's Build Together
            </h2>
            <p className="mb-10 text-shadow-subtle" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Explore our projects, meet our team, or start a conversation about how AI can transform your business.
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
