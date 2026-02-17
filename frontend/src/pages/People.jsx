import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Briefcase, User } from 'lucide-react';
import { teamMembers, clients } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const TeamCard = ({ member, index }) => {
  const accents = ['accent-purple', 'accent-blue', 'accent-orange', 'accent-pink', 'accent-green', 'accent-grey'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`voice-card ${accents[index % accents.length]}`}
      style={{ padding: '1.75rem', textAlign: 'center' }}
    >
      {/* Avatar Placeholder */}
      <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
        <User className="w-8 h-8" style={{ color: 'var(--text-muted)' }} />
      </div>
      <h4 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
        {member.name}
      </h4>
      <p style={{ fontSize: '0.7rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>
        {member.role}
      </p>
      <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
        {member.bio}
      </p>
    </motion.div>
  );
};

const ClientCard = ({ client, index }) => {
  const accents = ['accent-orange', 'accent-green', 'accent-blue', 'accent-pink'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`voice-card ${accents[index % accents.length]}`}
      style={{ padding: '2rem' }}
    >
      {/* Logo Placeholder */}
      <div className="w-16 h-16 rounded-lg mb-5 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
        <Briefcase className="w-6 h-6" style={{ color: 'var(--text-muted)' }} />
      </div>
      <h4 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
        {client.name}
      </h4>
      <Badge variant="outline" className="mb-4 rounded-full" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        {client.industry}
      </Badge>
      <div className="mt-3">
        <Quote className="w-4 h-4 mb-2" style={{ color: 'var(--text-muted)' }} />
        <p className="italic" style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
          {client.testimonial}
        </p>
      </div>
    </motion.div>
  );
};

export default function People() {
  return (
    <main>
      {/* Hero */}
      <section className="ai-bg relative pt-32 pb-20" style={{ background: 'var(--gradient-hero-warm)' }}>
        <ParticlesBg />
        <div className="relative z-10 max-w-[800px] mx-auto text-center px-5">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our People
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.25rem' }}
          >
            Developers & Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto' }}
          >
            Meet the talented engineers building AI products and the clients who trust us with their vision.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Tabs: Developers & Clients */}
      <section className="py-20" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-[1100px] mx-auto px-5 md:px-9">
          <Tabs defaultValue="developers" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="rounded-full p-1" style={{ background: 'rgba(0,0,0,0.04)' }}>
                <TabsTrigger value="developers" className="rounded-full px-6 py-2" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Our Developers
                </TabsTrigger>
                <TabsTrigger value="clients" className="rounded-full px-6 py-2" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Our Clients
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="developers">
              <motion.div {...fadeInUp} className="text-center mb-10">
                <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  Meet Our Team
                </h2>
                <p className="mt-3 mx-auto" style={{ maxWidth: '520px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Passionate engineers and designers building the next generation of AI products.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {teamMembers.map((member, i) => (
                  <TeamCard key={i} member={member} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="clients">
              <motion.div {...fadeInUp} className="text-center mb-10">
                <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  Trusted By
                </h2>
                <p className="mt-3 mx-auto" style={{ maxWidth: '520px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  From startups to global banks — clients who trust us with their technology.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {clients.map((client, i) => (
                  <ClientCard key={i} client={client} index={i} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="ai-bg relative py-20" style={{ background: 'var(--gradient-hero-subtle)' }}>
        <ParticlesBg />
        <div className="relative z-10 max-w-[600px] mx-auto text-center px-5">
          <motion.div {...fadeInUp}>
            <h2 className="mb-4" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Join Our Team or Become a Client
            </h2>
            <p className="mb-8" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We're always looking for talented engineers and ambitious clients who want to build with AI.
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
