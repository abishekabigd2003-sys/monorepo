import React from 'react';
import { ArrowUpRight, ShieldCheck, TrendingUp, Award } from 'lucide-react';
import { heroStats } from '../data/corporateData';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '7.5rem',
        paddingBottom: '4rem',
        background: 'radial-gradient(ellipse 80% 60% at 50% 10%, rgba(212, 175, 55, 0.12) 0%, transparent 80%)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Grid Accent */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.6,
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          {/* Badge */}
          <div className="section-tag" style={{ margin: '0 auto 1.5rem auto' }}>
            <Award size={14} color="var(--color-gold-300)" />
            <span>Institutional Asset Stewardship • Zurich & London</span>
          </div>

          {/* Hero Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              color: '#ffffff'
            }}
          >
            Where Generational Legacy Meets{' '}
            <span className="text-gold-gradient">Institutional Precision</span>.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto 2.5rem auto',
              fontWeight: 300
            }}
          >
            Aethelgard & Co. stewards sovereign wealth, multi-generational dynasties, and global enterprises through high-stake M&A advisory, private equity syndication, and sovereign infrastructure.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
              marginBottom: '4rem'
            }}
          >
            <a href="#contact" className="btn-gold-primary">
              <span>Initiate Confidential Consultation</span>
              <ArrowUpRight size={18} />
            </a>
            <a href="#services" className="btn-gold-outline">
              <span>Explore Strategic Mandates</span>
            </a>
          </div>
        </div>

        {/* Hero KPI Stats Bar */}
        <div
          className="luxury-card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            padding: '2rem 2.5rem',
            background: 'rgba(18, 20, 26, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--color-border-subtle)'
          }}
        >
          {heroStats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'left',
                borderRight: index < heroStats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                paddingRight: '1rem'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                  fontWeight: 800,
                  color: 'var(--color-gold-300)',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem'
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.2rem'
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-gold-500)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
