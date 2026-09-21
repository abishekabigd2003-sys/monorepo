import React from 'react';
import { Shield, Globe, TrendingUp, CheckCircle2 } from 'lucide-react';
import { aboutPillars } from '../data/corporateData';

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '4rem' }}>
          <div className="section-tag">
            <span>Institutional Heritage</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
              color: '#ffffff'
            }}
          >
            Guiding sovereign capital through cycles of transformation with{' '}
            <span className="text-gold-gradient">unwavering governance</span>.
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Founded in Zurich and expanded into London, New York, and Singapore, Aethelgard & Co. bridges institutional capital with proprietary deal flow. We do not participate in market noise; we structure bespoke, sovereign-grade transactions that define industry standards for decades.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {aboutPillars.map((pillar, idx) => {
            const icons = [
              <Shield size={24} color="var(--color-gold-300)" />,
              <Globe size={24} color="var(--color-gold-300)" />,
              <TrendingUp size={24} color="var(--color-gold-300)" />
            ];

            return (
              <div
                key={idx}
                className="luxury-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '2px solid rgba(212, 175, 55, 0.4)'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid var(--color-border-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {icons[idx]}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      color: '#ffffff',
                      marginBottom: '0.85rem'
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                    {pillar.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '2rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Standard
                  </span>
                  <span style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--color-gold-300)', fontWeight: 700, fontSize: '0.9rem' }}>
                    {pillar.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Quote Card */}
        <div
          className="luxury-card"
          style={{
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(18, 20, 26, 0.95) 0%, rgba(26, 29, 38, 0.8) 100%)',
            border: '1px solid var(--color-border-gold)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <div style={{ color: 'var(--color-gold-300)', fontSize: '2.5rem', lineHeight: 1, fontFamily: 'var(--font-serif)' }}>
            “
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
              fontStyle: 'italic',
              color: '#ffffff',
              lineHeight: 1.6
            }}
          >
            Capital in its purest form is not merely a tool for quarterly return—it is an instrument of sovereignty, resilience, and civilizational advancement. Our mandate is to safeguard that purpose across generations.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f5e296, #8c6a15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0b0c10',
                fontWeight: 700,
                fontFamily: 'var(--font-cinzel)'
              }}
            >
              VR
            </div>
            <div>
              <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>Valentin von Rosenberg</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-400)' }}>Senior Managing Partner • Executive Governance Board</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
