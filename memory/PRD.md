# Globistaan Technologies and Exports Private Limited - Website

## Original Problem Statement
Build a modern and professional AI-as-a-Service + SaaS website for "Globistaan Technologies and Exports Private Limited" - an IT services company from Himachal Pradesh, India. The website should be appealing to investors and clients, with a serene combination of Himachal Pradesh scenery and AI/technology imagery.

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
- Tech Stack (Cloud, IDE, AI, Frameworks, Databases with actual logos)
- Investors (Investment Highlights, Tiers, Portfolio)
- Contact Us (Form + Contact Info)

### Design Requirements
- ✅ Full-page Himachal Pradesh scenery backgrounds (rivers, mountains, valleys, forests, clouds)
- ✅ Strategic blend of nature + AI/technology imagery (robots, code, circuits)
- ✅ Clear text visibility - NO blurred backgrounds
- ✅ Actual tech logos on Tech Stack page
- ✅ Image backgrounds for cards where appropriate
- ✅ Smooth animations with Framer Motion
- ✅ Circular avatar placeholders for people

## What's Been Implemented

### Dec 17, 2024 - Major Redesign Complete
- **Full-page scenic backgrounds** covering entire pages
- **Strategic nature + tech blend**:
  - Split hero sections (code on left, mountains on right)
  - River valleys, forests, blue hills, snow peaks
  - Circuit boards, robots, code screens as tech elements
- **Clear visibility** - removed all blur effects
- **Actual tech logos** on Tech Stack page (AWS, Google Cloud, OpenAI, Gemini, Claude, React, etc.)
- **"Tools We Use"** instead of "Technology Partners"
- **Fixed runtime error** in TechStack page

### Image Strategy
- **Rivers & Valleys**: Home hero, Contact backgrounds
- **Mountains & Snow Peaks**: CTA sections, hero sections
- **Forests & Mist**: About story, Projects cards section
- **Circuit Boards & Code**: Services section, Tech Stack backgrounds
- **Robots**: People page hero (split with forest)

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
    │   │   ├── Home.jsx - River valley hero, circuit services, forest banner
    │   │   ├── About.jsx - River hero, circuit story, forest quote
    │   │   ├── Projects.jsx - AI brain + mountains split hero
    │   │   ├── People.jsx - Robots + forest split hero
    │   │   ├── TechStack.jsx - Code + mountains split, actual logos
    │   │   ├── Investors.jsx - Snow peaks hero, circuit highlights
    │   │   └── Contact.jsx - River hero, blue hills form section
    │   ├── components/
    │   │   ├── ui/ (Shadcn components)
    │   │   └── layout/ (Header, Footer, ParticlesBg)
    │   ├── data/
    │   │   └── mock.js - Strategic images + tech logos
    │   ├── App.js
    │   └── App.css - Clear glass cards, no blur
    ├── package.json
    └── .env
```

## Prioritized Backlog

### P0 - Completed
- [x] Full-page scenic backgrounds
- [x] Nature + tech blend imagery
- [x] Clear visibility (no blur)
- [x] Actual tech logos
- [x] Fixed TechStack runtime error
- [x] Company name: Globistaan Technologies and Exports Private Limited

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

## Contact Information
- Email: ceo@globistaan.com
- Phone: +91 8291486041
- Location: Himachal Pradesh, India
- Website: www.globistaan.com
