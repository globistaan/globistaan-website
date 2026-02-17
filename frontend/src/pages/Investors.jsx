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
      {/* Hero - Mountains + Tech Circuits Blend */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.himalayanSnow} 
            alt="Snow-capped Himalayas" 
            className="w-full h-full object-cover"
            
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.3) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[950px] mx-auto text-center px-5 pt-24">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-4 py-1.5 border-white/30 text-white/90" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.1)' }}>
              Investment Opportunities
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-shadow-hero"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem' }}
          >
            Invest in the AI Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 text-shadow-subtle"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.95)', maxWidth: '700px', margin: '0 auto 2.5rem' }}
          >
            Globistaan is building a portfolio of AI-powered products across healthcare, education, and commerce — from the serene mountains of Himachal Pradesh.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', background: 'white', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Request Investor Deck <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#tiers" className="btn-secondary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
              View Tiers <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights - Circuit Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.circuitBlue} 
            alt="Technology circuits" 
            className="w-full h-full object-cover"
            
          />
        </div>
        <div className="absolute inset-0 z-1 gradient-mesh" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.9)' }} />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Why Invest
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Investment Highlights
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentHighlights.map((item, i) => {
              const Icon = item.icon;
              const accents = ['accent-orange', 'accent-green', 'accent-purple', 'accent-blue'];
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 24 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`voice-card glow-card ${accents[i]}`} 
                  style={{ padding: '2.25rem' }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,0,0,0.06)' }}>
                      <Icon className="w-7 h-7" style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-3">
                        <span style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>{item.metric}</span>
                        <span style={{ fontSize: '0.65rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.metricLabel}</span>
                      </div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Portfolio - Misty Forest */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.mistyForest} 
            alt="Misty mountain forest" 
            className="w-full h-full object-cover"
            
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.85)' }} />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Portfolio
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Product Portfolio
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div 
                  key={project.id} 
                  initial={{ opacity: 0, y: 24 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`voice-card glow-card ${project.accentClass}`} 
                  style={{ padding: '2rem' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
                      <Icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <Badge variant="outline" className="rounded-full" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase' }}>{project.category}</Badge>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{project.title}</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{project.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Tiers - River Valley */}
      <section id="tiers" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.riverValley} 
            alt="River valley" 
            className="w-full h-full object-cover"
            
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.85)' }} />
        
        <div className="relative z-10 max-w-[1100px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Investment Tiers
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Partnership Opportunities
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {investmentTiers.map((tier, i) => {
              const accents = ['accent-blue', 'accent-orange', 'accent-purple'];
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 24 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className={`voice-card glow-card ${accents[i]}`} 
                  style={{ 
                    padding: '2.5rem', 
                    border: tier.highlighted ? '2px solid var(--text-primary)' : 'none', 
                    position: 'relative' 
                  }}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full" style={{ background: 'var(--text-primary)', color: 'white', fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Recommended
                    </div>
                  )}
                  <h3 className="mb-1" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)' }}>{tier.tier}</h3>
                  <p className="mb-1" style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text-primary)' }}>{tier.range}</p>
                  <p className="mb-6" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase' }}>Equity: {tier.equity}</p>
                  <div className="flex flex-col gap-3">
                    {tier.benefits.map((b, bi) => (
                      <span key={bi} className="flex items-center gap-2.5" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />{b}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/contact" 
                    className={tier.highlighted ? 'btn-primary' : 'btn-secondary'} 
                    style={{ textDecoration: 'none', width: '100%', marginTop: '2rem', padding: '0.8rem 1.5rem', fontSize: '0.85rem' }}
                  >
                    Inquire Now
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financials Placeholder - Code Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.neonCode} 
            alt="Neon code" 
            className="w-full h-full object-cover"
            
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.9)' }} />
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp}>
            <div className="voice-card content-glass" style={{ textAlign: 'center' }}>
              <BarChart3 className="w-12 h-12 mx-auto mb-5" style={{ color: 'var(--text-muted)' }} />
              <h3 className="mb-3" style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)' }}>Financial Data Coming Soon</h3>
              <p className="mx-auto mb-6" style={{ maxWidth: '420px', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                [Placeholder for financial projections, revenue models, burn rate, and growth metrics. Contact us for the complete investor deck.]
              </p>
              <Link to="/contact" className="btn-primary text-xs" style={{ textDecoration: 'none', padding: '0.75rem 1.5rem' }}>
                Request Full Deck <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Dhauladhar Range */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.dhauladharRange} 
            alt="Dhauladhar mountain range" 
            className="w-full h-full object-cover"
            
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[700px] mx-auto text-center px-5 py-20">
          <motion.div {...fadeInUp}>
            <h2 className="mb-5 text-shadow-hero" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15 }}>
              Ready to Partner with Us?
            </h2>
            <p className="mb-10 text-shadow-subtle" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: 1.65 }}>
              Schedule a call with our founding team to discuss investment opportunities.
            </p>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', background: 'white', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              Schedule a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
