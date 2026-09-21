import React from 'react';
import { Network, Globe2, Shield, Cpu, ArrowUpRight } from 'lucide-react';
import { ecosystemSpecs } from '../data/techData';

export default function AboutEcosystem() {
  return (
    <section
      id="architecture"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, rgba(8, 9, 14, 0.7) 0%, rgba(14, 17, 26, 0.9) 50%, rgba(8, 9, 14, 0.7) 100%)',
        position: 'relative'
      }}
    >
      <div className="tech-container">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <div className="cyber-tag">
            <span>⚡ NETWORK TOPOLOGY</span>
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
            A Planetary Mesh for <span className="text-cyber-gradient">Autonomous Intelligence</span>.
          </h2>
          <p style={{ color: 'var(--tech-text-secondary)', fontSize: '1.05rem' }}>
            Traditional clouds were engineered for static database queries. Nexus.Synth is fundamentally engineered for high-concurrency neural inference and streaming WebGPU pipelines.
          </p>
        </div>

        {/* Global Architecture Infographic Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem'
          }}
        >
          {ecosystemSpecs.map((spec, idx) => (
            <div
              key={idx}
              className="cyber-card"
              style={{
                padding: '2rem 1.75rem',
                borderTop: '2px solid var(--color-cyan-neon)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.4rem',
                  lineHeight: 1.1
                }}
              >
                {spec.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-space)',
                  fontWeight: 700,
                  color: 'var(--color-cyan-300)',
                  fontSize: '0.95rem',
                  marginBottom: '0.35rem'
                }}
              >
                {spec.title}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--tech-text-muted)' }}>
                {spec.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Flow Banner */}
        <div
          id="ecosystem"
          className="cyber-card"
          style={{
            padding: '3rem 2rem',
            border: '1px solid var(--border-cyan-glow)',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 242, 254, 0.1) 0%, rgba(14, 17, 26, 0.95) 75%)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <div className="cyber-tag" style={{ marginBottom: '1rem' }}>
                <span>ZERO-OVERHEAD COMPUTE</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem' }}>
                Deploy Everywhere in Seconds.
              </h3>
              <p style={{ color: 'var(--tech-text-secondary)', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                No cold starts. No Kubernetes cluster hell. Write your inference loop or spatial shader in TypeScript, Rust, or Python and let our Byzantine consensus compiler distribute it worldwide.
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a href="#cta" className="btn-cyber-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}>
                  <span>Deploy First Worker</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Simulated Live Consensus Grid */}
            <div
              style={{
                background: '#05070c',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--tech-text-muted)', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.5rem' }}>
                <span>ACTIVE SHARDS</span>
                <span style={{ color: '#00f5a0' }}>● ALL HEALTHY</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}>
                  <span>tokyo-shinjuku-01</span>
                  <span style={{ color: '#00f2fe' }}>0.41ms // 99.99%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}>
                  <span>frankfurt-eu-central</span>
                  <span style={{ color: '#00f2fe' }}>0.78ms // 100.0%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}>
                  <span>ashburn-us-east-04</span>
                  <span style={{ color: '#00f2fe' }}>0.54ms // 99.98%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}>
                  <span>sao-paulo-south-01</span>
                  <span style={{ color: '#00f2fe' }}>1.12ms // 99.96%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
