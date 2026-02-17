import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Crown, Code2, User } from 'lucide-react';
import { directors, developers, clients, images } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const CircularAvatar = ({ avatar, icon: Icon, size = 'lg', name }) => {
  const sizeClass = size === 'lg' ? 'w-28 h-28' : 'w-20 h-20';
  const iconSize = size === 'lg' ? 'w-10 h-10' : 'w-7 h-7';

  return (
    <div
      className={`${sizeClass} rounded-full mx-auto overflow-hidden flex-shrink-0`}
      style={{
        background: avatar ? 'transparent' : 'linear-gradient(135deg, rgba(252,202,199,0.5), rgba(228,237,248,0.5))',
        border: '3px solid rgba(0,0,0,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {avatar ? (
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      ) : (
        <Icon className={iconSize} style={{ color: 'var(--text-muted)' }} />
      )}
    </div>
  );
};

const DirectorCard = ({ member, index }) => {
  const accents = ['accent-orange', 'accent-purple'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`voice-card ${accents[index % accents.length]}`}
      style={{ padding: '2.5rem', textAlign: 'center' }}
    >
      <CircularAvatar avatar={member.avatar} icon={Crown} size="lg" name={member.name} />
      <div className="mt-5">
        <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
          {member.name}
        </h4>
        <p style={{ fontSize: '0.7rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          {member.role}
        </p>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
};

const DeveloperCard = ({ member, index }) => {
  const accents = ['accent-blue', 'accent-green'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`voice-card ${accents[index % accents.length]}`}
      style={{ padding: '2rem', textAlign: 'center' }}
    >
      <CircularAvatar avatar={member.avatar} icon={Code2} size="lg" name={member.name} />
      <div className="mt-5">
        <h4 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
          {member.name}
        </h4>
        <p style={{ fontSize: '0.7rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          {member.role}
        </p>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
};

const ClientCard = ({ client, index }) => {
  const accents = ['accent-pink', 'accent-orange', 'accent-green'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`voice-card ${accents[index % accents.length]}`}
      style={{ padding: '2rem' }}
    >
      <div className="flex items-start gap-4">
        <CircularAvatar avatar={client.avatar} icon={User} size="sm" name={client.contact} />
        <div className="flex-1">
          <h4 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
            {client.name}
          </h4>
          <Badge variant="outline" className="mb-3 rounded-full" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {client.industry}
          </Badge>
          <p className="mb-2" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)' }}>
            Contact: {client.contact}
          </p>
          <div className="mt-3">
            <Quote className="w-4 h-4 mb-2" style={{ color: 'var(--text-muted)' }} />
            <p className="italic" style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
              {client.testimonial}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function People() {
  return (
    <main>
      {/* Hero - Dhauladhar Mountain backdrop */}
      <section className="img-bg-section" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-image">
          <img src={images.dhauladharGreen} alt="Dhauladhar mountains with green meadows" style={{ filter: 'brightness(0.9) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)' }} />
        <ParticlesBg />
        <div className="content-z max-w-[800px] mx-auto text-center px-5 pt-24" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-3 py-1 border-white/30 text-white/90" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.1)' }}>
              Our People
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem', textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
          >
            Directors, Developers & Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto', textShadow: '0 1px 12px rgba(0,0,0,0.3)' }}
          >
            Built from the mountains of Himachal Pradesh — meet the leaders, engineers, and partners driving our AI vision.
          </motion.p>
        </div>
      </section>

      {/* Directors Section - Mountain backdrop */}
      <section className="img-bg-section" style={{ minHeight: '55vh', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.dhauladharRange} alt="Dhauladhar mountain range" style={{ filter: 'brightness(0.92) saturate(1.1)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.9) 100%)' }} />
        
        <div className="content-z max-w-[900px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Leadership
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Directors
            </h2>
            <p className="mt-3 mx-auto" style={{ maxWidth: '480px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Visionary leaders with deep industry experience steering Globistaan's AI journey.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {directors.map((member, i) => (
              <DirectorCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Developers Section - Snow Peak backdrop */}
      <section className="img-bg-section" style={{ minHeight: '55vh', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.snowPeakMist} alt="Misty snow-capped peaks" style={{ filter: 'brightness(0.9) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.88) 100%)' }} />
        
        <div className="content-z max-w-[900px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Engineering
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Freelance Developers
            </h2>
            <p className="mt-3 mx-auto" style={{ maxWidth: '480px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Talented engineers building the next generation of AI-powered products.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {developers.map((member, i) => (
              <DeveloperCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Green Valley backdrop */}
      <section className="img-bg-section" style={{ minHeight: '60vh', padding: '5rem 0' }}>
        <div className="bg-image">
          <img src={images.greenValley} alt="Lush green valley of Himachal" style={{ filter: 'brightness(0.88) saturate(1.15)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.88) 100%)' }} />
        
        <div className="content-z max-w-[900px] mx-auto px-5 md:px-9" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Badge variant="outline" className="mb-4 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Partnerships
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Our Clients
            </h2>
            <p className="mt-3 mx-auto" style={{ maxWidth: '480px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              From startups to enterprises — clients who trust us with their technology.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-5">
            {clients.map((client, i) => (
              <ClientCard key={i} client={client} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Mountain CTA */}
      <section className="img-bg-section" style={{ minHeight: '45vh', display: 'flex', alignItems: 'center' }}>
        <div className="bg-image">
          <img src={images.mountainRange} alt="Himalayan mountain range panorama" style={{ filter: 'brightness(0.8) saturate(1.2)' }} />
        </div>
        <div className="bg-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)' }} />
        <ParticlesBg />
        <div className="content-z max-w-[600px] mx-auto text-center px-5 py-16" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h2 className="mb-4" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.2, textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
              Join Our Team or Become a Client
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.6, textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}>
              We're always looking for talented engineers and ambitious clients who want to build with AI.
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
