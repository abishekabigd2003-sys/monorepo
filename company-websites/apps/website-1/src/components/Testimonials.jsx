import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { testimonialsData, partnerBadges } from '../data/corporateData';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, rgba(11, 12, 16, 0.9) 0%, rgba(18, 20, 26, 0.95) 100%)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="section-tag">
            <span>Institutional Credibility</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              lineHeight: 1.2,
              marginBottom: '1rem',
              color: '#ffffff'
            }}
          >
            Trusted by Sovereign Funds &{' '}
            <span className="text-gold-gradient">Global Boardrooms</span>.
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem' }}>
            Our reputation is fortified by nearly two decades of non-conflicted advice and billions in successfully closed mandates.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '4.5rem'
          }}
        >
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              className="luxury-card"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: '#f8f9fa',
                    lineHeight: 1.7,
                    marginBottom: '1.75rem'
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>{t.author}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gold-300)' }}>{t.role}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>{t.region}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Partner Banner */}
        <div
          style={{
            padding: '2.5rem 1.5rem',
            borderRadius: '12px',
            background: 'rgba(11, 12, 16, 0.8)',
            border: '1px solid var(--color-border-subtle)',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}
          >
            Regulatory Compliance & Global Standards
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem'
            }}
          >
            {partnerBadges.map((badge, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '0.82rem',
                  color: 'var(--color-gold-200)',
                  letterSpacing: '0.1em',
                  opacity: 0.85
                }}
              >
                <ShieldCheck size={18} color="var(--color-gold-400)" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
