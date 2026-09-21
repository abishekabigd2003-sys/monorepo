import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';
import { navLinks } from '../data/corporateData';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer
      style={{
        backgroundColor: '#07080a',
        borderTop: '1px solid var(--color-border-subtle)',
        padding: '5rem 0 2.5rem 0',
        color: 'var(--color-text-secondary)',
        fontSize: '0.9rem'
      }}
    >
      <div className="container-custom">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Col 1: Brand & Identity */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #f5e296 0%, #d4af37 50%, #8c6a15 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 800, fontSize: '1rem', color: '#0b0c10' }}>
                  Æ
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-cinzel)',
                  letterSpacing: '0.15em',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff'
                }}
              >
                AETHELGARD & CO.
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Independent sovereign advisory, cross-border M&A stewardship, and private equity syndication engineered for multi-generational permanence.
            </p>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-gold-400)' }}>
              Zurich • London • New York • Singapore • Riyadh
            </div>
          </div>

          {/* Col 2: Institutional Navigation */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-cinzel)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              Institutional Mandates
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-300)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Regulatory & Governance */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-cinzel)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              Governance & Compliance
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#about" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                  Fiduciary Code of Conduct
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                  FINMA Regulatory Disclosures
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                  ESG Sovereign Charter
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                  Anti-Money Laundering Protocols
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Sovereign Dispatch Newsletter */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-cinzel)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              The Sovereign Briefing
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
              A quarterly dispatch analyzing cross-border geopolitical capital flows and sovereign allocations.
            </p>

            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-300)', fontSize: '0.85rem' }}>
                <CheckCircle2 size={16} />
                <span>Subscription Confirmed</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  required
                  placeholder="executive@institution.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: '0.65rem 0.85rem',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    flex: 1,
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '0.65rem 1rem',
                    background: 'var(--gold-gradient)',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#0b0c10',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'var(--color-text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Aethelgard & Co. Global Capital AG. All rights reserved. Registered in Zurich (CHE-291.482.019).
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Confidentiality Agreement</span>
            <span>Legal Notice</span>
            <span>Sovereign Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
