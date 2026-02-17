import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Send, Clock, Globe } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { ParticlesBg } from '../components/layout/ParticlesBg';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    // Mock submission - store in localStorage
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
      {/* Hero */}
      <section className="ai-bg relative pt-32 pb-20" style={{ background: 'var(--gradient-hero-warm)' }}>
        <ParticlesBg />
        <div className="relative z-10 max-w-[800px] mx-auto text-center px-5">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-5 rounded-full px-3 py-1" style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contact Us
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.25rem' }}
          >
            Let's Start a Conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto' }}
          >
            Have a project in mind? Looking to invest? Or just want to say hello? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Form + Info */}
      <section className="py-20" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-[1100px] mx-auto px-5 md:px-9">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeInUp} className="lg:col-span-2">
              <h2 className="mb-6" style={{ fontSize: '1.4rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                Get in Touch
              </h2>

              <div className="flex flex-col gap-5">
                {[
                  { icon: MapPin, label: 'Location', value: companyInfo.location },
                  { icon: Mail, label: 'Email', value: companyInfo.email },
                  { icon: Phone, label: 'Phone', value: companyInfo.phone },
                  { icon: Globe, label: 'Website', value: companyInfo.website },
                  { icon: Clock, label: 'Business Hours', value: 'Mon - Fri, 9:00 AM - 6:00 PM IST' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,0,0,0.04)' }}>
                        <Icon className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.7rem', fontFamily: "'SF Mono', monospace", color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>
                          {item.label}
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 placeholder-img" style={{ minHeight: '180px' }}>
                [Map placeholder]
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="voice-card accent-green" style={{ padding: '3rem', textAlign: 'center' }}>
                  <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
                    <Send className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '380px', margin: '0 auto' }}>
                    Thank you for reaching out. We'll get back to you within 24-48 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', inquiry: '', message: '' }); }}
                    className="btn-secondary mt-6 text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="voice-card" style={{ padding: '2.5rem', background: 'var(--bg-card)' }}>
                  <h3 className="mb-6" style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="mb-1.5 block" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
                          Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your name"
                          className="rounded-lg"
                          style={{ borderColor: 'var(--border-input)', background: 'var(--bg-page)' }}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="mb-1.5 block" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your@email.com"
                          className="rounded-lg"
                          style={{ borderColor: 'var(--border-input)', background: 'var(--bg-page)' }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="company" className="mb-1.5 block" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
                          Company
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          placeholder="Your company"
                          className="rounded-lg"
                          style={{ borderColor: 'var(--border-input)', background: 'var(--bg-page)' }}
                        />
                      </div>
                      <div>
                        <Label className="mb-1.5 block" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
                          Inquiry Type
                        </Label>
                        <Select onValueChange={(val) => handleChange('inquiry', val)}>
                          <SelectTrigger className="rounded-lg" style={{ borderColor: 'var(--border-input)', background: 'var(--bg-page)' }}>
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
                      <Label htmlFor="message" className="mb-1.5 block" style={{ fontSize: '0.75rem', fontFamily: "'SF Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                        className="rounded-lg"
                        style={{ borderColor: 'var(--border-input)', background: 'var(--bg-page)', resize: 'vertical' }}
                      />
                    </div>

                    <button type="submit" className="btn-primary self-start" style={{ padding: '0.75rem 1.5rem' }}>
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
