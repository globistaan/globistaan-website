import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
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
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(153, 153, 153, 0.15)' : '1px solid transparent'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-9 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--text-primary)' }}>
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Globistaan
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
                color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-muted)',
                background: location.pathname === link.path ? 'rgba(0,0,0,0.05)' : 'transparent',
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
            style={{ padding: '0.5rem 1.2rem', textDecoration: 'none' }}
          >
            Get in Touch
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-200"
            style={{
              background: 'transparent',
              borderColor: 'rgba(0,0,0,0.1)',
              color: 'var(--text-primary)',
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
              background: 'rgba(255, 249, 242, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(153, 153, 153, 0.15)'
            }}
          >
            <nav className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-3 text-sm font-medium rounded-lg no-underline transition-colors duration-200"
                  style={{
                    color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-muted)',
                    background: location.pathname === link.path ? 'rgba(0,0,0,0.04)' : 'transparent',
                    fontFamily: "'SF Mono', monospace",
                    fontSize: '0.85rem'
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary mt-3 text-center text-xs" style={{ textDecoration: 'none' }}>
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
