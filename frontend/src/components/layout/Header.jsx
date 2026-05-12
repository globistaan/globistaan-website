import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/mock';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300"
      style={{
        height: '72px',
        background: scrolled ? 'rgba(0, 0, 0, 0.96)' : 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.14)' : '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="w-full px-4 md:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src="/icons/globistaan-live-logo.png"
            alt="Globistaan logo"
            className="h-9 w-auto object-contain"
          />
          <span className="flex flex-col leading-none" style={{ fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', monospace" }}>
            <span className="text-xl font-semibold" style={{ color: '#ffffff', lineHeight: 1, letterSpacing: '0.02em' }}>
              Globistaan
            </span>
            <span
              className="mt-1 text-[0.62rem] font-medium uppercase"
              style={{
                color: 'rgba(255,255,255,0.72)',
                letterSpacing: '0.05em',
                lineHeight: 1.15
              }}
            >
              Technologies and Exports Pvt Ltd
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-2 text-sm font-medium rounded-full no-underline transition-colors duration-200"
              style={{
                color: location.pathname === link.path ? '#ffffff' : 'rgba(255,255,255,0.68)',
                background: location.pathname === link.path ? 'rgba(255,255,255,0.16)' : 'transparent',
                fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', monospace",
                fontSize: '0.8rem',
                letterSpacing: '0.02em'
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex btn-primary text-xs"
            style={{
              padding: '0.5rem 1.2rem',
              textDecoration: 'none',
              background: '#ffffff',
              color: '#111111',
              borderColor: '#ffffff'
            }}
          >
            Get in Touch
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-200"
            style={{
              background: 'transparent',
              borderColor: 'rgba(255,255,255,0.24)',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'rgba(0, 0, 0, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.14)'
            }}
          >
            <nav className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-3 text-sm font-medium rounded-lg no-underline transition-colors duration-200"
                  style={{
                    color: location.pathname === link.path ? '#ffffff' : 'rgba(255,255,255,0.68)',
                    background: location.pathname === link.path ? 'rgba(255,255,255,0.14)' : 'transparent',
                    fontFamily: "'SF Mono', monospace",
                    fontSize: '0.85rem'
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary mt-3 text-center text-xs"
                style={{
                  textDecoration: 'none',
                  background: '#ffffff',
                  color: '#111111',
                  borderColor: '#ffffff'
                }}
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
