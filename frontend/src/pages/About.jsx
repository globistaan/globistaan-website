import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { companyInfo, registrations, images } from '../data/mock';
import { ParticlesBg, NeuralGrid } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function About() {
  return (
    <main>
      {/* Hero with mountain background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={images.mountainTerrace} alt="Himachal Pradesh mountains" className="w-full h-full object-cover" style={{ filter: 'brightness(0.35)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center px-5">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Story
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.25rem' }}
          >
            About Globistaan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}
          >
            An IT services startup from the mountains of Himachal Pradesh, building AI solutions for the global enterprise.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Story */}
      <section className="py-24" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-[1000px] mx-auto px-5 md:px-9">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <motion.div {...fadeInUp} className="lg:col-span-3">
              <h2 className="mb-6" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                From the Mountains to the World
              </h2>
              <div className="flex flex-col gap-5" style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
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

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="voice-card accent-orange" style={{ padding: '2rem' }}>
                <Quote className="w-6 h-6 mb-4" style={{ color: 'var(--accent-orange-400)' }} />
                <p className="italic mb-5" style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-primary)' }}>
                  "As a startup founder who has spent close to 13 years in the IT industry developing web applications for global banks, I understand the need for security and trust in the people who support proprietary code."
                </p>
                <div>
                  <p style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-primary)' }}>[Founder Name]</p>
                  <p style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission & Vision */}
      <section className="py-24" style={{ background: 'var(--bg-section)' }}>
        <div className="max-w-[1000px] mx-auto px-5 md:px-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeInUp} className="voice-card accent-purple" style={{ padding: '2.5rem' }}>
              <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mission</Badge>
              <h3 className="mb-3" style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                Democratize AI for Every Enterprise
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                To make cutting-edge artificial intelligence accessible to businesses of all sizes, enabling them to automate, innovate, and scale with intelligent technology solutions built on trust and transparency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="voice-card accent-blue" style={{ padding: '2.5rem' }}
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

      <div className="section-divider" />

      {/* Registrations */}
      <section className="py-24" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-[1000px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Trust & Compliance
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Government Registered & Compliant
            </h2>
            <p className="mt-3 mx-auto" style={{ maxWidth: '520px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We maintain the highest standards of regulatory compliance, providing confidence to clients and investors worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {registrations.map((reg, i) => {
              const Icon = reg.icon;
              const accents = ['accent-green', 'accent-orange', 'accent-blue', 'accent-purple', 'accent-pink'];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`voice-card ${accents[i]}`}
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

      <div className="section-divider" />

      {/* CTA */}
      <section className="ai-bg relative py-20" style={{ background: 'var(--gradient-hero-subtle)' }}>
        <ParticlesBg />
        <div className="relative z-10 max-w-[600px] mx-auto text-center px-5">
          <motion.div {...fadeInUp}>
            <h2 className="mb-4" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Let's Build Together
            </h2>
            <p className="mb-8" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Explore our projects, meet our team, or start a conversation about how AI can transform your business.
            </p>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '0.85rem 2rem' }}>
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
