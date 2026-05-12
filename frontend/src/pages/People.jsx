import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Crown, Code2, User } from 'lucide-react';
import { directors, developers, clients, images } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const CircularAvatar = ({ avatar, icon: Icon, size = 'lg', name, objectPosition = 'center' }) => {
  const sizeClass = size === 'lg' ? 'w-28 h-28' : 'w-20 h-20';
  const iconSize = size === 'lg' ? 'w-10 h-10' : 'w-7 h-7';

  return (
    <div
      className={`${sizeClass} people-avatar rounded-full mx-auto overflow-hidden flex-shrink-0 float-slow`}
    >
      {avatar ? (
        <img src={avatar} alt={name} className="w-full h-full object-cover" style={{ objectPosition }} />
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
      whileHover={{ y: -10, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2, transition: { duration: 0.22 } }}
      className={`voice-card glow-card people-card people-profile-card ${accents[index % accents.length]}`}
      style={{ padding: '2.75rem', textAlign: 'center' }}
    >
      <CircularAvatar avatar={member.avatar} icon={Crown} size="lg" name={member.name} objectPosition={member.avatarPosition} />
      <div className="mt-6">
        <h4 className="people-card-title">
          {member.name}
        </h4>
        <p className="people-card-kicker">
          {member.role}
        </p>
        <p className="people-card-copy">
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
      whileHover={{ y: -10, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2, transition: { duration: 0.22 } }}
      className={`voice-card glow-card people-card people-profile-card ${accents[index % accents.length]}`}
      style={{ padding: '2.25rem', textAlign: 'center' }}
    >
      <CircularAvatar avatar={member.avatar} icon={Code2} size="lg" name={member.name} />
      <div className="mt-6">
        <h4 className="people-card-title">
          {member.name}
        </h4>
        <p className="people-card-kicker">
          {member.role}
        </p>
        <p className="people-card-copy">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
};

const ClientCard = ({ client, index }) => {
  const accents = ['accent-pink', 'accent-orange', 'accent-green', 'accent-blue'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, rotateX: 1.5, rotateY: index % 2 === 0 ? -1.5 : 1.5, transition: { duration: 0.22 } }}
      className={`voice-card glow-card people-card people-client-card ${accents[index % accents.length]}`}
      style={{ padding: '1.5rem' }}
    >
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex flex-col items-center sm:w-32 flex-shrink-0">
          <CircularAvatar avatar={client.image} icon={User} size="lg" name={client.contact} objectPosition={client.imagePosition} />
          <p className="mt-4 text-center people-avatar-name">
            {client.contact}
          </p>
          {client.location && (
            <p className="mt-1 text-center people-location">
              {client.location}
            </p>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
            <div>
              <h4 className="people-card-title">
                {client.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="rounded-full" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {client.relationship}
                </Badge>
                <Badge variant="outline" className="rounded-full" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {client.industry}
                </Badge>
              </div>
            </div>
            {client.website && (
              <a
                href={client.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs no-underline people-visit-link"
              >
                Visit site <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <p className="people-card-copy">
            {client.testimonial}
          </p>
          {client.highlights && (
            <div className="flex flex-wrap gap-2 mt-4">
              {client.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full px-3 py-1 text-xs people-chip"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
