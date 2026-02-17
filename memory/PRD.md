# Globistaan - AI-as-a-Service & SaaS Website

## Original Problem Statement
Build a modern and professional AI-as-a-Service + SaaS website for "Globistaan" - an IT services company from Himachal Pradesh, India. The website should be appealing to investors and clients, showcasing the company's AI projects and services.

## Core Requirements

### Company Projects to Showcase
1. AI Chatbot Platform
2. AI Pharma Document Generation System
3. AI-based Language Learning App
4. SaaS-based E-commerce Platform

### Required Pages
- Home (Hero + Services + Projects Preview + CTA)
- About Us (Story, Mission, Vision, Registrations)
- Projects (Project Cards with Features)
- People (Directors, Developers, Clients with circular avatars)
- Tech Stack (Cloud, IDE, AI, Frameworks, Databases)
- Investors (Investment Highlights, Tiers, Portfolio)
- Contact Us (Form + Contact Info)

### Design Requirements
- ✅ Snow-capped Himachal Pradesh mountains (Dhauladhar range) as prominent backgrounds
- ✅ Text-only overlays on mountain backgrounds (no images layered on images)
- ✅ Light backgrounds for content readability
- ✅ AI-themed particles animation
- ✅ Smooth animations with Framer Motion
- ✅ Circular avatar placeholders for people
- ✅ Placeholder text for content to be added later

## What's Been Implemented

### Dec 17, 2024 - Visual Redesign Complete
- **Complete site-wide redesign** with large, prominent Himachal Pradesh mountain backgrounds
- **Pages updated:**
  - Home.jsx - Dhauladhar mountain range hero, green meadows banner, snow peak CTA
  - About.jsx - Green meadows hero, mountain range story section, snow peak quote
  - Projects.jsx - Dhauladhar range hero, green meadows project cards section
  - People.jsx - Green meadows hero, mountain range directors, snow peak developers
  - TechStack.jsx - Dhauladhar clouds hero, green meadows tools grid
  - Investors.jsx - Dhauladhar range hero, green meadows highlights, green valley tiers
  - Contact.jsx - Dhauladhar range hero, green meadows form section
- **Image updates in mock data** - Added new Dhauladhar-specific images from Unsplash
- **Text-only overlays** - All mountain backgrounds have only text content overlaid

### Previous Implementation
- Multi-page React application with React Router
- Framer Motion animations
- Custom warm-AI design system (CSS variables, voice cards, glass morphism)
- ParticlesBg component for AI-themed floating particles
- Mock data structure for projects, people, tech stack, registrations
- Contact form with localStorage persistence
- Responsive design with Tailwind CSS

## Tech Stack
- **Frontend:** React 18, React Router DOM, Framer Motion, Tailwind CSS
- **UI Components:** Shadcn/UI (Badge, Input, Textarea, Select, etc.)
- **Backend:** FastAPI (template setup, not yet integrated)
- **Database:** MongoDB (template setup, not yet integrated)

## Current Architecture
```
/app
├── backend/
│   ├── server.py (FastAPI template)
│   ├── requirements.txt
│   └── .env
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── About.jsx
    │   │   ├── Projects.jsx
    │   │   ├── People.jsx
    │   │   ├── TechStack.jsx
    │   │   ├── Investors.jsx
    │   │   └── Contact.jsx
    │   ├── components/
    │   │   ├── ui/ (Shadcn components)
    │   │   └── layout/ (Header, Footer, ParticlesBg)
    │   ├── data/
    │   │   └── mock.js
    │   ├── App.js
    │   └── App.css
    ├── package.json
    └── .env
```

## Prioritized Backlog

### P0 - Completed
- [x] Visual redesign with prominent Himachal Pradesh mountain backgrounds
- [x] Text-only overlays on all mountain background sections
- [x] All pages updated with consistent design pattern

### P1 - Next Steps
- [ ] Backend Integration
  - [ ] Create contracts.md for API definitions
  - [ ] MongoDB models for projects, team, clients
  - [ ] CRUD API endpoints
  - [ ] Connect frontend to live APIs
- [ ] Functional Contact Form (email integration)

### P2 - Future Enhancements
- [ ] Admin panel for content management
- [ ] SEO optimization
- [ ] Blog/News section
- [ ] Project detail pages
- [ ] Team member detail pages
- [ ] Animation performance optimization

## Key Image URLs (from mock.js)
- dhauladharGreen: Green trees with snow peaks background
- dhauladharRange: Mountain range panorama (main hero images)
- snowPeakMist: Misty snow-capped peaks
- dhauladharClouds: Mountains with dramatic clouds
- greenValley: Lush green valley of Himachal
- mountainRange: Wide Himalayan panorama

## Contact Information
- Email: ceo@globistaan.com
- Phone: +91 8291486041
- Location: Himachal Pradesh, India
- Website: www.globistaan.com
