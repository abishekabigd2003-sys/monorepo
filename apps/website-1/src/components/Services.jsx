import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { servicesData } from '../data/corporateData';

export default function Services() {
  const [expandedId, setExpandedId] = useState(servicesData[0].id);

  return (
    <section
      id="services"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, rgba(11, 12, 16, 0.5) 0%, rgba(18, 20, 26, 0.8) 50%, rgba(11, 12, 16, 0.5) 100%)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <div className="section-tag">
            <span>Specialized Capabilities</span>
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
            Institutional Mandates Structured for{' '}
            <span className="text-gold-gradient">Sovereign Outcomes</span>.
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem' }}>
            From high-value enterprise buyouts to family governance architecture, we execute with discretion, precision, and sovereign syndication power.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="luxury-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderColor: isExpanded ? 'var(--color-border-gold)' : 'var(--color-border-subtle)',
                  background: isExpanded ? 'rgba(26, 29, 38, 0.95)' : 'var(--color-bg-surface)',
                  cursor: 'pointer'
                }}
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-cinzel)',
                        fontSize: '1.75rem',
                        fontWeight: 800,
                        color: 'var(--color-gold-400)',
                        opacity: 0.8
                      }}
                    >
                      {service.number}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid var(--color-border-subtle)',
                        color: 'var(--color-gold-300)',
                        fontWeight: 600
                      }}
                    >
                      {service.highlight}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      color: '#ffffff',
                      marginBottom: '1rem',
                      lineHeight: 1.3
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Expandable Capabilities Checklist */}
                  <div
                    style={{
                      maxHeight: isExpanded ? '300px' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      opacity: isExpanded ? 1 : 0
                    }}
                  >
                    <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--color-gold-400)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          fontWeight: 600,
                          marginBottom: '0.75rem'
                        }}
                      >
                        Core Competencies:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {service.capabilities.map((cap, i) => (
                          <li
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.6rem',
                              fontSize: '0.88rem',
                              color: '#ffffff'
                            }}
                          >
                            <CheckCircle2 size={15} color="var(--color-gold-300)" style={{ flexShrink: 0 }} />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer toggle button */}
                <div
                  style={{
                    marginTop: '2rem',
                    paddingTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: isExpanded ? 'var(--color-gold-300)' : 'var(--color-text-muted)',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  <span>{isExpanded ? 'Collapse Analysis' : 'Expand Mandate Details'}</span>
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
