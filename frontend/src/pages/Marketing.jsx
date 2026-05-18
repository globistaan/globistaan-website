import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';
import { images } from '../data/mock';

const arcadeVideoUrl = 'https://demo.arcade.software/video/80m4zsJCGTY3Ahh6Pshz?embed&autoplay=true&muted=true&mute=true&playsinline=true';
const englishArcadeVideoUrl = 'https://demo.arcade.software/video/yirMaAWGRtXzB8Sb7rzA?embed&autoplay=true&muted=true&mute=true&playsinline=true';
const marketingPageUrl = 'https://www.globistaan.com/marketing';
const marketingContact = '+91 8291486041';
const marketingEmail = 'ceo@globistaan.com';
const marketingQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=16&data=${encodeURIComponent(marketingPageUrl)}`;

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function Marketing() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={images.cinematicHimalaya}
            alt="Himalayan mountains at golden hour"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.82) 100%)' }} />
        <ParticlesBg />

        <div className="relative z-10 w-full max-w-[1180px] mx-auto px-5 md:px-9 pt-28 pb-16">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <Badge
              variant="outline"
              className="mb-5 rounded-full px-4 py-1.5"
              style={{
                fontFamily: "'SF Mono', monospace",
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                background: 'rgba(255,255,255,0.12)',
                borderColor: 'rgba(255,255,255,0.28)',
                color: 'white'
              }}
            >
              Marketing Video
            </Badge>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: '1.25rem' }}>
              Globistaan for Businesses and Talent
            </h1>
            <p className="mx-auto" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '760px' }}>
              A quick walkthrough of how Globistaan connects practical technology delivery with business needs and skilled contributors.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="mb-6 text-center">
            <Badge
              variant="outline"
              className="mb-4 rounded-full px-4 py-1.5"
              style={{
                fontFamily: "'SF Mono', monospace",
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                background: 'rgba(255,255,255,0.12)',
                borderColor: 'rgba(255,255,255,0.28)',
                color: 'white'
              }}
            >
              हिंदी में देखें
            </Badge>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.55rem, 3.2vw, 2.35rem)', fontWeight: 700, lineHeight: 1.12, marginBottom: '0.75rem' }}>
              हिंदी परिचय
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
            style={{
              borderRadius: '1.25rem',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.06)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
              aspectRatio: '16 / 9'
            }}
          >
            <iframe
              src={arcadeVideoUrl}
              title="Globistaan marketing video"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; fullscreen; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="eager"
            />
          </motion.div>

          <motion.div {...fadeInUp} className="mt-14 mb-6 text-center">
            <Badge
              variant="outline"
              className="mb-4 rounded-full px-4 py-1.5"
              style={{
                fontFamily: "'SF Mono', monospace",
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                background: 'rgba(255,255,255,0.12)',
                borderColor: 'rgba(255,255,255,0.28)',
                color: 'white'
              }}
            >
              Watch in English
            </Badge>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.55rem, 3.2vw, 2.35rem)', fontWeight: 700, lineHeight: 1.12, marginBottom: '0.75rem' }}>
              English Overview
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
            style={{
              borderRadius: '1.25rem',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.06)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
              aspectRatio: '16 / 9'
            }}
          >
            <iframe
              src={englishArcadeVideoUrl}
              title="Globistaan marketing video in English"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; fullscreen; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="eager"
            />
          </motion.div>

          <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary text-xs" style={{ textDecoration: 'none', padding: '0.75rem 1.5rem', background: '#ffffff', color: '#111111' }}>
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center"
            style={{
              maxWidth: '760px',
              padding: '1.25rem',
              borderRadius: '1rem',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.16)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <a
              href={marketingPageUrl}
              target="_blank"
              rel="noreferrer"
              className="block mx-auto"
              aria-label="Open Globistaan marketing page QR code link"
            >
              <img
                src={marketingQrUrl}
                alt="QR code for Globistaan marketing page"
                className="w-40 h-40 rounded-xl"
                style={{ background: '#ffffff', padding: '0.5rem' }}
              />
            </a>
            <div className="text-center md:text-left">
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Scan to open this marketing page
              </p>
              <a
                href={marketingPageUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block no-underline"
                style={{ color: 'rgba(255,255,255,0.82)', fontFamily: "'SF Mono', monospace", fontSize: '0.9rem', wordBreak: 'break-all' }}
              >
                {marketingPageUrl}
              </a>
              <p style={{ color: 'rgba(255,255,255,0.86)', fontFamily: "'SF Mono', monospace", fontSize: '0.88rem', marginTop: '0.65rem', marginBottom: 0 }}>
                Contact: {marketingContact}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.86)', fontFamily: "'SF Mono', monospace", fontSize: '0.88rem', marginTop: '0.35rem', marginBottom: 0 }}>
                Email: {marketingEmail}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
