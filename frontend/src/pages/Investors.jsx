import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, BarChart3 } from 'lucide-react';
import { investmentHighlights, investmentTiers, projects, images } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function Investors() {
  return (
    <main>
      {/* Hero - Dhauladhar Mountain Range */}
      <section className="img-bg-section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-image">
          <img src={images.dhauladharRange} alt="Dhauladhar mountain range panorama" style={{ filter: 'brightness(0.88) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)' }} />
        <ParticlesBg />
        <div className="content-z max-w-[850px] mx-auto text-center px-5 pt-24" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-3 py-1 border-white/30 text-white/90" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.1)' }}>
              Investment Opportunities
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem', textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
          >
            Invest in the AI Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 2rem', textShadow: '0 1px 12px rgba(0,0,0,0.3)' }}
          >
            Globistaan is building a portfolio of AI-powered products across healthcare, education, and commerce.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '0.9rem 2rem', background: 'white', color: 'var(--text-primary)' }}>
              Request Investor Deck <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#tiers" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.9rem 2rem', color: 'white', borderColor: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)' }}>
              View Tiers <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights - Green Meadows */}
      <section className="img-bg-section" style={{ minHeight: '60vh', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.dhauladharGreen} alt="Green meadows with snow-capped peaks" style={{ filter: 'brightness(0.92) saturate(1.1)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.9) 100%)' }} />
        <div className="content-z max-w-[1100px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Why Invest</Badge>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>Investment Highlights</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {investmentHighlights.map((item, i) => {
              const Icon = item.icon;
              const accents = ['accent-orange', 'accent-green', 'accent-purple', 'accent-blue'];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`voice-card glow-card ${accents[i]}`} style={{ padding: '2rem' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,0,0,0.06)' }}>
                      <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>{item.metric}</span>
                        <span style={{ fontSize: '0.65rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.metricLabel}</span>
                      </div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Portfolio - Snow Peak */}
      <section className="img-bg-section" style={{ minHeight: '55vh', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.snowPeakMist} alt="Misty snow-capped peaks" style={{ filter: 'brightness(0.9) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.88) 100%)' }} />
        <div className="content-z max-w-[1100px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio</Badge>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>Product Portfolio</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div key={project.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className={`voice-card glow-card ${project.accentClass}`} style={{ padding: '1.75rem' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
                      <Icon className="w-4.5 h-4.5" style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <Badge variant="outline" className="rounded-full" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase' }}>{project.category}</Badge>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{project.title}</h4>
                  <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{project.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Tiers - Green Valley */}
      <section id="tiers" className="img-bg-section" style={{ minHeight: '60vh', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.greenValley} alt="Lush green valley of Himachal" style={{ filter: 'brightness(0.88) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.9) 100%)' }} />
        <div className="content-z max-w-[1000px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Investment Tiers</Badge>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>Partnership Opportunities</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {investmentTiers.map((tier, i) => {
              const accents = ['accent-blue', 'accent-orange', 'accent-purple'];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`voice-card glow-card ${accents[i]}`} style={{ padding: '2rem', border: tier.highlighted ? '2px solid var(--text-primary)' : 'none', position: 'relative' }}>
                  {tier.highlighted && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full" style={{ background: 'var(--text-primary)', color: 'white', fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recommended</div>}
                  <h3 className="mb-1" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>{tier.tier}</h3>
                  <p className="mb-1" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)' }}>{tier.range}</p>
                  <p className="mb-5" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase' }}>Equity: {tier.equity}</p>
                  <div className="flex flex-col gap-2.5">
                    {tier.benefits.map((b, bi) => (
                      <span key={bi} className="flex items-center gap-2" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />{b}
                      </span>
                    ))}
                  </div>
                  <Link to="/contact" className={tier.highlighted ? 'btn-primary' : 'btn-secondary'} style={{ textDecoration: 'none', width: '100%', marginTop: '1.5rem', padding: '0.7rem 1.2rem', fontSize: '0.8rem' }}>Inquire Now</Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financials - Dhauladhar Clouds */}
      <section className="img-bg-section" style={{ minHeight: '45vh', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.dhauladharClouds} alt="Dhauladhar peaks with clouds" style={{ filter: 'brightness(0.88) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.88) 100%)' }} />
        <div className="content-z max-w-[1000px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp}>
            <div className="voice-card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--bg-card)' }}>
              <BarChart3 className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
              <h3 className="mb-2" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)' }}>Financial Data Coming Soon</h3>
              <p className="mx-auto" style={{ maxWidth: '400px', fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
                [Placeholder for financial projections, revenue models, burn rate, and growth metrics. Contact us for the complete investor deck.]
              </p>
              <Link to="/contact" className="btn-primary mt-6 text-xs" style={{ textDecoration: 'none', padding: '0.65rem 1.2rem' }}>Request Full Deck <ArrowRight className="w-3.5 h-3.5" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Mountain Range */}
      <section className="img-bg-section" style={{ minHeight: '45vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-image">
          <img src={images.mountainRange} alt="Himalayan mountain range panorama" style={{ filter: 'brightness(0.8) saturate(1.2)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)' }} />
        <ParticlesBg />
        <div className="content-z max-w-[650px] mx-auto text-center px-5 py-16" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h2 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15, textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>Ready to Partner with Us?</h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.6, textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}>Schedule a call with our founding team to discuss investment opportunities.</p>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '0.9rem 2rem', background: 'white', color: 'var(--text-primary)' }}>Schedule a Call <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
