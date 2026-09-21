import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, ExternalLink, Terminal } from 'lucide-react';
import { featuredProjects } from '../data/techData';

export default function FeaturedWork() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="work" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="tech-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <div className="cyber-tag">
            <span>⚡ PRODUCTION DEPLOYMENTS</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              lineHeight: 1.2,
              marginBottom: '1rem',
              color: '#ffffff'
            }}
          >
            Powering Next-Gen <span className="text-purple-gradient">Decentralized Intelligence</span>.
          </h2>
          <p style={{ color: 'var(--tech-text-secondary)', fontSize: '1.05rem' }}>
            From browser-native 4K spatial rendering to hyper-scale biotechnology diffusion, discover what leading engineering teams build with Nexus.Synth.
          </p>
        </div>

        {/* 2x2 Grid of Featured Work Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              className="cyber-card"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setActiveCard(proj.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(0, 242, 254, 0.1)',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      color: '#00f2fe'
                    }}
                  >
                    {proj.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--tech-text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {proj.client}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '1.45rem',
                    color: '#ffffff',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3
                  }}
                >
                  {proj.title}
                </h3>

                <p style={{ color: 'var(--tech-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {proj.description}
                </p>

                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Metric & Link */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--tech-text-muted)', fontFamily: 'var(--font-mono)' }}>VERIFIED BENCHMARK</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: '#00f5a0', fontWeight: 700, fontSize: '0.95rem' }}>
                    {proj.impact}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: activeCard === proj.id ? '#00f2fe' : 'var(--tech-text-muted)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    transition: 'color 0.2s ease'
                  }}
                >
                  <span>Explore Stack</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
