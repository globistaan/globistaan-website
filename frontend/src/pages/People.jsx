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
      className={`${sizeClass} rounded-full mx-auto overflow-hidden flex-shrink-0 float-slow`}
      style={{
        background: avatar ? 'transparent' : 'linear-gradient(135deg, rgba(252,202,199,0.5), rgba(228,237,248,0.5))',
        border: '4px solid rgba(255,255,255,0.8)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
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
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`voice-card glow-card ${accents[index % accents.length]}`}
      style={{ padding: '2.75rem', textAlign: 'center' }}
    >
      <CircularAvatar avatar={member.avatar} icon={Crown} size="lg" name={member.name} />
      <div className="mt-6">
        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
          {member.name}
        </h4>
        <p style={{ fontSize: '0.7rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
          {member.role}
        </p>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
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
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`voice-card glow-card ${accents[index % accents.length]}`}
      style={{ padding: '2.25rem', textAlign: 'center' }}
    >
      <CircularAvatar avatar={member.avatar} icon={Code2} size="lg" name={member.name} />
      <div className="mt-6">
        <h4 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
          {member.name}
        </h4>
        <p style={{ fontSize: '0.7rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
          {member.role}
        </p>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`voice-card glow-card ${accents[index % accents.length]}`}
      style={{ padding: '2.25rem' }}
    >
      <div className="flex items-start gap-5">
        <CircularAvatar avatar={client.avatar} icon={User} size="sm" name={client.contact} />
        <div className="flex-1">
          <h4 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
            {client.name}
          </h4>
          <Badge variant="outline" className="mb-4 rounded-full" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {client.industry}
          </Badge>
          <p className="mb-3" style={{ fontSize: '0.8rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)' }}>
            Contact: {client.contact}
          </p>
          <div className="mt-4">
            <Quote className="w-5 h-5 mb-2" style={{ color: 'var(--text-muted)' }} />
            <p className="italic" style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
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
      {/* Hero - Robot + Forest Blend */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}>
            <img 
              src={images.circuitBlue} 
              alt="Technology circuits" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
            <img 
              src={images.deodarForest} 
              alt="Deodar forest Himachal" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.25) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[900px] mx-auto text-center px-5 pt-24">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-4 py-1.5 border-white/30 text-white/90" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.1)' }}>
              Our People
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-shadow-hero"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem' }}
          >
            Developers, Clients & Directors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-shadow-subtle"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', maxWidth: '650px', margin: '0 auto' }}
          >
            Built from the mountains of Himachal Pradesh — meet the engineers, partners, and leaders driving our AI vision.
          </motion.p>
        </div>
      </section>

      {/* Developers Section - Circuit Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.riverForest} 
            alt="River through forest" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.9)' }} />
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Engineering
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Freelance Developers
            </h2>
            <p className="mt-4 mx-auto" style={{ maxWidth: '500px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65 }}>
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

      {/* Clients Section - Green Valley */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.greenValley} 
            alt="Lush green valley" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.82)' }} />
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Partnerships
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Our Clients
            </h2>
            <p className="mt-4 mx-auto" style={{ maxWidth: '500px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65 }}>
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

      {/* Directors Section - Blue Hills */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.blueHills} 
            alt="Blue layered mountains" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.85)' }} />
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-5 md:px-9">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Leadership
            </Badge>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Directors
            </h2>
            <p className="mt-4 mx-auto" style={{ maxWidth: '500px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65 }}>
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

      {/* Mountain CTA */}
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
        
        <div className="relative z-10 max-w-[650px] mx-auto text-center px-5 py-20">
          <motion.div {...fadeInUp}>
            <h2 className="mb-5 text-shadow-hero" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15 }}>
              Join Our Team or Become a Client
            </h2>
            <p className="mb-10 text-shadow-subtle" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.65 }}>
              We're always looking for talented engineers and ambitious clients who want to build with AI.
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
