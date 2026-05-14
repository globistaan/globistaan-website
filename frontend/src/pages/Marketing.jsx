import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';
import { images } from '../data/mock';

const arcadeVideoUrl = 'https://demo.arcade.software/video/80m4zsJCGTY3Ahh6Pshz?embed&autoplay=true';

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

          <motion.div {...fadeInUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.72)', fontFamily: "'SF Mono', monospace", fontSize: '0.78rem' }}>
              <Play className="w-4 h-4" /> Plays inline on this page
            </span>
            <Link to="/contact" className="btn-primary text-xs" style={{ textDecoration: 'none', padding: '0.75rem 1.5rem', background: '#ffffff', color: '#111111' }}>
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
