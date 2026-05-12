import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Send, Clock, Globe, ExternalLink } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const mapLocation = encodeURIComponent(`${companyInfo.fullName}, ${companyInfo.location}`);
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapLocation}`;
const openStreetMapEmbedUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=75.450%2C30.250%2C78.950%2C32.650&layer=mapnik&marker=31.1048%2C77.1734';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', inquiry: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const buildEmail = () => {
    const inquiry = formData.inquiry || 'general';
    const subject = `Globistaan contact: ${inquiry} inquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company || 'Not provided'}`,
      `Inquiry Type: ${inquiry}`,
      '',
      'Message:',
      formData.message,
      '',
      `Submitted At: ${new Date().toLocaleString()}`
    ].join('\n');

    return { subject, body };
  };

  const openMailFallback = ({ subject, body }) => {
    const mailto = `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const { subject, body } = buildEmail();
    const payload = new FormData();
    payload.append('_subject', subject);
    payload.append('_template', 'box');
    payload.append('_captcha', 'false');
    payload.append('_replyto', formData.email);
    payload.append('Name', formData.name);
    payload.append('Email', formData.email);
    payload.append('Company', formData.company || 'Not provided');
    payload.append('Inquiry Type', formData.inquiry || 'General');
    payload.append('Message', formData.message);
    payload.append('Submitted At', new Date().toISOString());
    payload.append('Email Body', body);

    setSending(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${companyInfo.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload
      });

      if (!response.ok) {
        throw new Error('Email service unavailable');
      }

      setSubmitted(true);
      toast.success('Your message has been emailed to Globistaan.');
    } catch (error) {
      openMailFallback({ subject, body });
      toast.info('Opening your email app with the message ready to send.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main>
      {/* Hero - River + Mountains Full Page */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=90&w=2400&auto=format&fit=crop"
            alt="Clean white desk with flowers, phone and pen — contact us" 
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.7) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[900px] mx-auto text-center px-5 pt-24">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-4 py-1.5" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Contact Us
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem' }}
          >
            Let's Start a Conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', maxWidth: '550px', margin: '0 auto' }}
          >
            Have a project in mind? Looking to invest? Or just want to say hello?
          </motion.p>
        </div>
      </section>

      {/* Form + Info - Blue Hills Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact-bg.jpg" 
            alt="Contact background" 
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(0,0,0,0.72)' }} />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeInUp} className="lg:col-span-2">
              <h2 className="mb-8" style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em', color: '#ffffff' }}>Get in Touch</h2>
              <div className="flex flex-col gap-6">
                {[
                  { icon: MapPin, label: 'Location', value: companyInfo.location },
                  { icon: Mail, label: 'Email', value: companyInfo.email },
                  { icon: Phone, label: 'Phone', value: companyInfo.phone },
                  { icon: Globe, label: 'Website', value: companyInfo.website },
                  { icon: Clock, label: 'Business Hours', value: 'Mon - Fri, 9:00 AM - 6:00 PM IST' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={i} 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                        <Icon className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.8)' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.7rem', fontFamily: "'SF Mono', monospace", color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{item.label}</p>
                        <p style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 500 }}>{item.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Open map preview */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 18px 50px rgba(0,0,0,0.24)', border: '1px solid rgba(255,255,255,0.16)' }}
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Globistaan location in Google Maps"
                  className="relative block no-underline group"
                  style={{ height: '210px', background: '#e8ecef' }}
                >
                  <iframe
                    title="Globistaan location map"
                    src={openStreetMapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ pointerEvents: 'none', filter: 'saturate(0.92) contrast(1.02)' }}
                  />
                  <span
                    className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition-transform duration-200 group-hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(0,0,0,0.76)',
                      color: '#ffffff',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                  >
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <MapPin className="w-4 h-4" />
                      {companyInfo.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ fontFamily: "'SF Mono', monospace", color: 'rgba(255,255,255,0.72)' }}>
                      Open Map <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, y: 28 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.7, delay: 0.15 }} 
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="voice-card accent-green content-glass" style={{ textAlign: 'center' }}>
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center float-animation" style={{ background: 'rgba(184,209,186,0.3)' }}>
                    <Send className="w-7 h-7" style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <h3 className="mb-4" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)' }}>Message Sent!</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto' }}>
                    Thank you for reaching out. We'll get back to you within 24-48 business hours.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', inquiry: '', message: '' }); }} 
                    className="btn-secondary mt-8"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="voice-card glow-card content-glass">
                  <h3 className="mb-8" style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)' }}>Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="mb-2 block" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Name *</Label>
                        <Input 
                          id="name" 
                          value={formData.name} 
                          onChange={(e) => handleChange('name', e.target.value)} 
                          placeholder="Your name" 
                          className="rounded-xl" 
                          style={{ borderColor: 'var(--border-input)', background: 'white', padding: '0.9rem 1rem' }} 
                          data-testid="contact-name-input" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="mb-2 block" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={(e) => handleChange('email', e.target.value)} 
                          placeholder="your@email.com" 
                          className="rounded-xl" 
                          style={{ borderColor: 'var(--border-input)', background: 'white', padding: '0.9rem 1rem' }} 
                          data-testid="contact-email-input" 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="mb-2 block" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Company</Label>
                        <Input 
                          id="company" 
                          value={formData.company} 
                          onChange={(e) => handleChange('company', e.target.value)} 
                          placeholder="Your company" 
                          className="rounded-xl" 
                          style={{ borderColor: 'var(--border-input)', background: 'white', padding: '0.9rem 1rem' }} 
                          data-testid="contact-company-input" 
                        />
                      </div>
                      <div>
                        <Label className="mb-2 block" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Inquiry Type</Label>
                        <Select onValueChange={(val) => handleChange('inquiry', val)}>
                          <SelectTrigger className="rounded-xl" style={{ borderColor: 'var(--border-input)', background: 'white', padding: '0.9rem 1rem', height: 'auto' }} data-testid="contact-inquiry-select">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="project">New Project</SelectItem>
                            <SelectItem value="investment">Investment</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="mb-2 block" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Message *</Label>
                      <Textarea 
                        id="message" 
                        value={formData.message} 
                        onChange={(e) => handleChange('message', e.target.value)} 
                        placeholder="Tell us about your project or inquiry..." 
                        rows={5} 
                        className="rounded-xl" 
                        style={{ borderColor: 'var(--border-input)', background: 'white', padding: '0.9rem 1rem', resize: 'vertical' }} 
                        data-testid="contact-message-input" 
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={sending}
                      className="btn-primary self-start" 
                      style={{ padding: '0.9rem 2rem', opacity: sending ? 0.7 : 1, cursor: sending ? 'not-allowed' : 'pointer' }} 
                      data-testid="contact-submit-btn"
                    >
                      {sending ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
