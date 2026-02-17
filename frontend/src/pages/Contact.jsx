import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Send, Clock, Globe } from 'lucide-react';
import { companyInfo, images } from '../data/mock';
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', inquiry: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    setSubmitted(true);
    toast.success('Your message has been sent successfully!');
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
            src={images.riverMountain} 
            alt="River valley with mountains" 
            className="w-full h-full object-cover"
            
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 100%)' }} />
        <ParticlesBg />
        
        <div className="relative z-10 max-w-[900px] mx-auto text-center px-5 pt-24">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-4 py-1.5 border-white/30 text-white/90" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.1)' }}>
              Contact Us
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-shadow-hero"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '1.25rem' }}
          >
            Let's Start a Conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-shadow-subtle"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.95)', maxWidth: '550px', margin: '0 auto' }}
          >
            Have a project in mind? Looking to invest? Or just want to say hello?
          </motion.p>
        </div>
      </section>

      {/* Form + Info - Blue Hills Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.blueHills} 
            alt="Blue layered mountains" 
            className="w-full h-full object-cover"
            
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'rgba(255,255,255,0.88)' }} />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-9">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeInUp} className="lg:col-span-2">
              <h2 className="mb-8" style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>Get in Touch</h2>
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
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,0,0,0.05)' }}>
                        <Icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.7rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{item.label}</p>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>{item.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Small Nature Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
              >
                <img 
                  src={images.pineForestMist} 
                  alt="Pine forest with lake" 
                  className="w-full h-40 object-cover"
                />
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
                      className="btn-primary self-start" 
                      style={{ padding: '0.9rem 2rem' }} 
                      data-testid="contact-submit-btn"
                    >
                      Send Message <Send className="w-4 h-4" />
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
