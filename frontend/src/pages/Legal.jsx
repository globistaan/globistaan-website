import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { companyInfo } from '../data/mock';

const lastUpdated = 'May 12, 2026';

const sections = {
  'privacy-policy': {
    title: 'Privacy Policy',
    intro: `${companyInfo.fullName} ("Globistaan", "we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, retain, and protect information when you use this website, contact us, or interact with our project, partnership, client, investor, or service pages.`,
    blocks: [
      {
        heading: 'Information We Collect',
        body: [
          'Information you provide directly, including your name, email address, company name, inquiry type, message content, and any other details you choose to submit through the contact form or email.',
          'Business inquiry information related to projects, investments, partnerships, careers, service requests, support requests, or collaboration discussions.',
          'Technical and usage information, such as pages visited, device/browser information, approximate location derived from technical data, referral information, and interaction events collected through analytics tools.',
          'Public or business contact information when you interact with us as a client, product partner, vendor, collaborator, designer, developer, investor, or representative of an organization.'
        ]
      },
      {
        heading: 'How We Use Information',
        body: [
          'To respond to inquiries, evaluate project or partnership opportunities, schedule discussions, provide information about our services, and maintain business communications.',
          'To operate, improve, secure, debug, and measure this website and our communications.',
          'To maintain business records, comply with legal obligations, protect our rights, prevent misuse, and enforce applicable terms.',
          'To present portfolio, client, product, and partnership information where we have a legitimate business reason or permission to do so.'
        ]
      },
      {
        heading: 'Contact Forms and Email Delivery',
        body: [
          `Contact form submissions are intended to be emailed to ${companyInfo.email}. We may use third-party form/email delivery providers, including FormSubmit, to transmit submitted messages. Those providers process information only as needed to deliver, secure, and operate the form submission service.`,
          'Please do not submit passwords, payment credentials, sensitive personal information, confidential trade secrets, protected health information, or regulated data through the public contact form unless we have first agreed in writing to receive it through an appropriate secure channel.'
        ]
      },
      {
        heading: 'No Payment Processing on This Website',
        body: [
          'This public website does not process payments or collect payment card details. If any paid engagement, subscription, hosting, support, or commercial service is discussed, payment terms and approved channels will be handled separately under the applicable written agreement or invoice process.'
        ]
      },
      {
        heading: 'Analytics and Cookies',
        body: [
          'We may use analytics tools, including PostHog, to understand website usage, diagnose performance issues, improve content, and protect the website. Analytics may use cookies or similar technologies.',
          'You can control cookies through your browser settings. Blocking some cookies may affect analytics or some website features, but the public content should generally remain accessible.'
        ]
      },
      {
        heading: 'Sharing and Disclosure',
        body: [
          'We do not sell personal information. We may share information with service providers who help us host, operate, analyze, secure, or communicate through the website.',
          'We may disclose information when required by law, regulation, court order, government request, or to protect our rights, users, employees, partners, systems, and business.',
          'If Globistaan is involved in a business transaction, restructuring, investment, merger, acquisition, or asset transfer, relevant business records may be reviewed or transferred subject to appropriate safeguards.'
        ]
      },
      {
        heading: 'International Processing',
        body: [
          'Our website, analytics, email delivery, hosting, and collaboration tools may process data in India or other countries. By using this website or contacting us, you understand that information may be processed outside your location, subject to applicable law.'
        ]
      },
      {
        heading: 'Retention and Security',
        body: [
          'We retain information for as long as reasonably necessary for the purposes described in this Policy, including responding to inquiries, maintaining business records, resolving disputes, complying with law, and protecting legal rights.',
          'We use reasonable administrative, technical, and organizational safeguards. No website, email, or internet transmission is completely secure, and we cannot guarantee absolute security.'
        ]
      },
      {
        heading: 'Your Rights',
        body: [
          "Subject to applicable law, including India's Digital Personal Data Protection Act, 2023 where applicable, you may request access, correction, deletion, withdrawal of consent, or grievance redressal regarding your personal data.",
          `To make a privacy request, contact us at ${companyInfo.email}. We may need to verify your identity and the nature of your request before acting on it.`
        ]
      },
      {
        heading: 'Children',
        body: [
          'This website is intended for business and general informational use. It is not directed to children, and we do not knowingly collect personal information from children through this website.'
        ]
      },
      {
        heading: 'Changes',
        body: [
          'We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised date. Continued use of the website after updates means you acknowledge the updated Policy.'
        ]
      }
    ]
  },
  'terms-of-service': {
    title: 'Terms of Service',
    intro: `These Terms of Service ("Terms") govern your use of the Globistaan website operated by ${companyInfo.fullName}. By accessing or using this website, you agree to these Terms. If you do not agree, please do not use the website.`,
    blocks: [
      {
        heading: 'Website Purpose',
        body: [
          'This website provides general information about Globistaan, our services, projects, people, clients, product partners, technologies, and partnership opportunities. It is not a binding offer, guarantee, professional advice, investment solicitation, or final statement of service scope.',
          'Any engagement, development project, hosting arrangement, consulting service, investment discussion, product partnership, or commercial transaction will be governed by a separate written agreement signed or otherwise accepted by the relevant parties.'
        ]
      },
      {
        heading: 'No Client Relationship from Website Use',
        body: [
          'Viewing this website, sending an inquiry, receiving a response, or discussing a possible project does not by itself create a client, vendor, investor, employment, agency, partnership, fiduciary, or professional advisory relationship with Globistaan. Such relationships arise only under a separate written agreement accepted by the parties.'
        ]
      },
      {
        heading: 'No Professional, Medical, Legal, Financial, or Investment Advice',
        body: [
          'Content on this website is for informational and business communication purposes only. It does not constitute legal, medical, financial, tax, investment, regulatory, or professional advice.',
          'References to AI, healthcare, pharma, education, e-commerce, investors, partnerships, or client work are descriptive. You should obtain independent professional advice before relying on any information for regulated, clinical, financial, legal, or investment decisions.'
        ]
      },
      {
        heading: 'Project and Portfolio Information',
        body: [
          'Project statuses, descriptions, technology stacks, websites, client references, and portfolio examples may change over time. We try to keep information accurate, but we do not warrant that all content is complete, current, or error-free.',
          'Mentions of clients, product partners, designers, developers, vendors, or external websites are for identification and portfolio context only and do not imply endorsement unless expressly stated.'
        ]
      },
      {
        heading: 'AI and Software Disclaimers',
        body: [
          'AI-enabled systems, demos, prototypes, and software tools may produce incomplete, incorrect, or unexpected outputs. Any AI-assisted output should be reviewed by qualified humans before business, regulatory, medical, legal, financial, or operational use.',
          'Unless agreed in a separate contract, demo access, early-stage products, and portfolio descriptions are provided "as is" and "as available" without warranties of uninterrupted availability, accuracy, fitness for a particular purpose, or regulatory compliance.'
        ]
      },
      {
        heading: 'Payments and Commercial Terms',
        body: [
          'This website does not operate a payment gateway or complete commercial transactions directly. Pricing, payment schedules, refunds, support levels, hosting responsibilities, deliverables, intellectual property ownership, service levels, and other commercial terms must be agreed separately in writing.'
        ]
      },
      {
        heading: 'Acceptable Use',
        body: [
          'You agree not to misuse the website, attempt unauthorized access, interfere with security, scrape content at scale, submit malicious code, impersonate others, violate applicable laws, or use the website to transmit unlawful, defamatory, abusive, confidential, or harmful material.',
          'You must not use the contact form to send spam, sensitive credentials, regulated data, or material you do not have the right to share.'
        ]
      },
      {
        heading: 'Intellectual Property',
        body: [
          'All website content, including text, layout, code, design, graphics, brand elements, logos, images, and project descriptions, is owned by Globistaan or used with permission, unless otherwise indicated.',
          'You may view the website for informational purposes. You may not copy, reproduce, modify, distribute, reverse engineer, exploit, or create derivative works from the website content without prior written permission, except as permitted by law.'
        ]
      },
      {
        heading: 'External Links',
        body: [
          'The website may link to third-party websites, portfolios, client sites, product demos, cloud services, analytics providers, or form submission providers. We are not responsible for third-party content, security, uptime, privacy practices, or terms.'
        ]
      },
      {
        heading: 'Confidentiality',
        body: [
          'Information submitted through this public website or email is not automatically treated as confidential. Do not send confidential information unless a written confidentiality agreement or secure submission process is in place.'
        ]
      },
      {
        heading: 'Limitation of Liability',
        body: [
          'To the maximum extent permitted by applicable law, Globistaan and its directors, employees, contractors, partners, and affiliates will not be liable for indirect, incidental, consequential, special, exemplary, punitive, or loss-of-profit damages arising from use of the website.',
          'Nothing in these Terms excludes liability that cannot be excluded under applicable law.'
        ]
      },
      {
        heading: 'Indemnity',
        body: [
          'You agree to indemnify and hold Globistaan harmless from claims, damages, losses, liabilities, costs, and expenses arising from your misuse of the website, violation of these Terms, violation of law, or infringement of third-party rights.'
        ]
      },
      {
        heading: 'Governing Law and Jurisdiction',
        body: [
          "These Terms are governed by the laws of India. Subject to applicable law, courts having jurisdiction over Globistaan's registered office in Himachal Pradesh, India will have jurisdiction over disputes arising from this website or these Terms."
        ]
      },
      {
        heading: 'Contact',
        body: [
          `For questions about these Terms, contact ${companyInfo.email}.`
        ]
      }
    ]
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    intro: 'This Cookie Policy explains how Globistaan may use cookies, local storage, pixels, scripts, and similar technologies on this website.',
    blocks: [
      {
        heading: 'What Cookies Are',
        body: [
          'Cookies are small files stored on your device by a website. Similar technologies may store or access information in your browser to help websites function, remember preferences, measure usage, or improve performance.'
        ]
      },
      {
        heading: 'How We Use Cookies and Similar Technologies',
        body: [
          'Essential technologies may be used for core website operation, routing, security, form behavior, and basic functionality.',
          'Analytics technologies may be used to understand page visits, interactions, performance, browser/device information, referrers, and usage patterns so we can improve the website.',
          'Third-party technologies may be used by service providers such as PostHog for analytics, FormSubmit for contact form delivery, hosting providers, fonts, embedded assets, or linked websites.'
        ]
      },
      {
        heading: 'Types of Cookies',
        body: [
          'Strictly necessary cookies: needed for website operation, security, routing, or submitted form behavior.',
          'Analytics cookies: help us understand how visitors use the website and improve content, layout, and performance.',
          'Preference or functional storage: may remember non-sensitive choices or improve user experience if such functionality is introduced.',
          'Third-party cookies: may be set by external services used by or linked from the website. These services are governed by their own policies.'
        ]
      },
      {
        heading: 'Your Choices',
        body: [
          "Most browsers allow you to block, delete, or restrict cookies. Browser settings vary, so review your browser's help documentation for details.",
          'Blocking cookies may limit analytics or some functionality, but the general informational content of the website should remain available.'
        ]
      },
      {
        heading: 'No Sale of Personal Information',
        body: [
          'We do not sell personal information collected through cookies. Analytics data is used to operate, secure, and improve the website.'
        ]
      },
      {
        heading: 'Updates',
        body: [
          'We may update this Cookie Policy as our website, tools, or legal obligations change. The updated version will be posted on this page.'
        ]
      },
      {
        heading: 'Contact',
        body: [
          `Questions about cookies can be sent to ${companyInfo.email}.`
        ]
      }
    ]
  }
};

export default function Legal() {
  const { slug } = useParams();
  const page = sections[slug];

  if (!page) {
    return <Navigate to="/privacy-policy" replace />;
  }

  return (
    <main>
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #101010 0%, #232323 100%)' }}>
        <div className="max-w-[920px] mx-auto px-5 md:px-9">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-sm no-underline" style={{ color: 'rgba(255,255,255,0.72)', fontFamily: "'SF Mono', monospace" }}>
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="mb-4" style={{ color: 'rgba(255,255,255,0.58)', fontFamily: "'SF Mono', monospace", fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Last updated: {lastUpdated}
          </p>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: '1.25rem' }}>
            {page.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '780px' }}>
            {page.intro}
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-[920px] mx-auto px-5 md:px-9">
          <div className="flex flex-col gap-10">
            {page.blocks.map((block) => (
              <article key={block.heading}>
                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '1rem' }}>
                  {block.heading}
                </h2>
                <div className="flex flex-col gap-3">
                  {block.body.map((paragraph) => (
                    <p key={paragraph} style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.78 }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
