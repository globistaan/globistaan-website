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
      {/* Hero - Full-width Dhauladhar mountain background */}
      <section className="img-bg-section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-image">
          <img src={images.dhauladharGreen} alt="Dhauladhar mountains with green meadows" style={{ filter: 'brightness(0.9) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)' }} />
        <ParticlesBg />
        <div className="content-z max-w-[800px] mx-auto text-center px-5 pt-24" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-3 py-1 border-white/30 text-white/90" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.1)' }}>
              Our Story
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem', textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
          >
            About Globistaan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto', textShadow: '0 1px 12px rgba(0,0,0,0.3)' }}
          >
            An IT services startup from the mountains of Himachal Pradesh, building AI solutions for the global enterprise.
          </motion.p>
        </div>
      </section>

      {/* Story Section - Mountain backdrop */}
      <section className="img-bg-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.dhauladharRange} alt="Dhauladhar mountain range panorama" style={{ filter: 'brightness(0.92) saturate(1.1)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.85) 100%)' }} />

        <div className="content-z max-w-[900px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp}>
            <h2 className="mb-6 text-center" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              From the Mountains to the World
            </h2>
            <div className="flex flex-col gap-5 max-w-[700px] mx-auto" style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
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

      {/* Founder Quote - Snow Peak Background */}
      <section className="img-bg-section" style={{ minHeight: '45vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-image">
          <img src={images.snowPeakMist} alt="Snow-capped Himalayan peaks" style={{ filter: 'brightness(0.85) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 100%)' }} />
        <div className="content-z max-w-[700px] mx-auto text-center px-5 py-16" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <Quote className="w-10 h-10 mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.7)' }} />
            <p className="italic mb-6" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', lineHeight: 1.7, color: '#FFFFFF', textShadow: '0 1px 15px rgba(0,0,0,0.4)' }}>
              "As a startup founder who has spent close to 13 years in the IT industry developing web applications for global banks, I understand the need for security and trust in the people who support proprietary code."
            </p>
            <div>
              <p style={{ fontWeight: 500, fontSize: '1rem', color: '#FFFFFF' }}>[Founder Name]</p>
              <p style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Mountain backdrop */}
      <section className="img-bg-section" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.dhauladharClouds} alt="Dhauladhar peaks with clouds" style={{ filter: 'brightness(0.9) saturate(1.1)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.88) 100%)' }} />

        <div className="content-z max-w-[1000px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeInUp} className="voice-card accent-purple glow-card" style={{ padding: '2.5rem' }}>
              <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mission</Badge>
              <h3 className="mb-3" style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                Democratize AI for Every Enterprise
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                To make cutting-edge artificial intelligence accessible to businesses of all sizes, enabling them to automate, innovate, and scale with intelligent technology solutions built on trust and transparency.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="voice-card accent-blue glow-card" style={{ padding: '2.5rem' }}
            >
              <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vision</Badge>
              <h3 className="mb-3" style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                Global AI Innovation Hub
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                To become a globally recognized AI services company from India, known for building intelligent products that transform industries — from healthcare and education to commerce and enterprise operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registrations - Green Valley Background */}
      <section className="img-bg-section" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.greenValley} alt="Lush green valley of Himachal Pradesh" style={{ filter: 'brightness(0.85) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.85) 100%)' }} />

        <div className="content-z max-w-[1000px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Trust & Compliance
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Government Registered & Compliant
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  style={{ padding: '1.5rem' }}
                >
                  <Icon className="w-5 h-5 mb-3" style={{ color: 'var(--text-primary)' }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    {reg.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', lineHeight: 1.45, color: 'var(--text-secondary)' }}>
                    {reg.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - Majestic Snow Peak */}
      <section className="img-bg-section" style={{ minHeight: '45vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-image">
          <img src={images.mountainRange} alt="Himalayan mountain range panorama" style={{ filter: 'brightness(0.8) saturate(1.2)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)' }} />
        <ParticlesBg />
        <div className="content-z max-w-[600px] mx-auto text-center px-5 py-16" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h2 className="mb-4" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.2, textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
              Let's Build Together
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.6, textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}>
              Explore our projects, meet our team, or start a conversation about how AI can transform your business.
            </p>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '0.9rem 2rem', background: 'white', color: 'var(--text-primary)' }}>
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
