import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Mail, Phone, AtSign } from 'lucide-react';
import { companyInfo, navLinks } from '../../data/mock';

export const Footer = () => {
  return (
    <footer style={{ background: 'var(--text-primary)', color: 'rgba(255,255,255,0.85)' }}>
      <div className="w-full px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 no-underline mb-5">
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
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '280px' }}>
              {companyInfo.subtitle}
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.4)' }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'SF Mono', monospace" }}>
                  {companyInfo.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.4)' }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'SF Mono', monospace" }}>
                  {companyInfo.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.4)' }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'SF Mono', monospace" }}>
                  {companyInfo.phone}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <AtSign className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.4)' }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'SF Mono', monospace" }}>
                  {companyInfo.xHandle}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'SF Mono', monospace" }}>
                  {companyInfo.incorporationDateShort}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'SF Mono', monospace" }}>
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm no-underline transition-colors duration-200 flex items-center gap-1 group"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'SF Mono', monospace" }}>
              Services
            </h4>
            <nav className="flex flex-col gap-2.5">
              {['AI-Enabled Apps', 'SaaS Platforms', 'Data Engineering', 'Business Automation', 'Consulting'].map((s) => (
                <span key={s} className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {s}
                </span>
              ))}
            </nav>
          </div>

          {/* Company Registrations */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'SF Mono', monospace" }}>
              Company Registrations
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                'Private Limited (MCA) CIN - U62099HP2023PTC010408',
                'GST Registered GSTIN - 02AAKCG7487J1Z6',
                'DGFT Registered IEC - AAKCG7487J',
                'MSME Registered MSME - UDYAM-HP-04-0023734',
                'DPIIT Startup - CERTIFICATE NO: DIPP155874'
              ].map((s) => (
                <span key={s} className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {s}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'SF Mono', monospace" }}>
              &copy; {new Date().getFullYear()} {companyInfo.fullName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Terms of Service', path: '/terms-of-service' },
                { label: 'Cookie Policy', path: '/cookie-policy' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-xs cursor-pointer transition-colors duration-200 no-underline"
                  style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'SF Mono', monospace" }}
                  onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.35)'}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
