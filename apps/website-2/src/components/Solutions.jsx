import React, { useState } from 'react';
import { Cpu, Box, Share2, ShieldAlert, CheckCircle2, Copy, Check } from 'lucide-react';
import { solutionsData } from '../data/techData';

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(solutionsData[0].id);
  const [copiedId, setCopiedId] = useState(null);

  const activeSolution = solutionsData.find((s) => s.id === selectedSolution) || solutionsData[0];

  const handleCopy = (snippet, id) => {
    navigator.clipboard.writeText(snippet);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIcon = (id) => {
    switch (id) {
      case 'neural-inference':
        return <Cpu size={22} color="#00f2fe" />;
      case 'spatial-webgpu':
        return <Box size={22} color="#c084fc" />;
      case 'agentic-mesh':
        return <Share2 size={22} color="#00f5a0" />;
      default:
        return <ShieldAlert size={22} color="#ff0080" />;
    }
  };

  return (
    <section id="solutions" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="tech-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <div className="cyber-tag">
            <span>⚡ CORE CAPABILITIES</span>
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
            Compute Primitives for the{' '}
            <span className="text-cyber-gradient">Autonomous Age</span>.
          </h2>
          <p style={{ color: 'var(--tech-text-secondary)', fontSize: '1.05rem' }}>
            Built from bare metal up to replace bloated cloud hierarchies with distributed WebGPU, zero-knowledge verification, and hardware tensor mesh.
          </p>
        </div>

        {/* Interactive Layout: Selector Cards + Deep Dive View */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
          {/* Solution Selector Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {solutionsData.map((item) => {
              const isSelected = item.id === selectedSolution;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedSolution(item.id)}
                  className="cyber-card"
                  style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    borderColor: isSelected ? 'var(--color-cyan-neon)' : 'rgba(255, 255, 255, 0.08)',
                    background: isSelected ? 'rgba(0, 242, 254, 0.06)' : 'var(--tech-bg-card)',
                    transform: isSelected ? 'translateX(6px)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {getIcon(item.id)}
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--tech-text-muted)', letterSpacing: '0.08em' }}>
                        {item.tag}
                      </span>
                    </div>

                    {isSelected && (
                      <span style={{ fontSize: '0.75rem', color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--tech-text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Deep Dive Interactive Showcase */}
          <div
            className="cyber-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid var(--border-purple-glow)',
              background: 'linear-gradient(180deg, rgba(14, 17, 26, 0.95) 0%, rgba(8, 9, 14, 0.98) 100%)'
            }}
          >
            <div>
              <div className="cyber-tag" style={{ marginBottom: '1.25rem' }}>
                <span>SPECIFICATION DOSSIER // {activeSolution.tag}</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem' }}>
                {activeSolution.title}
              </h3>

              <p style={{ color: 'var(--tech-text-secondary)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                {activeSolution.description}
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-cyan-neon)', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                  Hardware & Network Capabilities:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {activeSolution.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="#00f5a0" style={{ flexShrink: 0 }} />
                      <span style={{ color: '#ffffff', fontSize: '0.92rem' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Interactive Code Preview */}
            <div
              style={{
                borderRadius: '8px',
                background: '#040508',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '1.25rem',
                fontFamily: 'var(--font-mono)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--tech-text-muted)' }}>TYPESCRIPT SDK // v2.8</span>
                <button
                  onClick={() => handleCopy(activeSolution.codeSnippet, activeSolution.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: copiedId === activeSolution.id ? '#00f5a0' : '#ffffff',
                    padding: '0.3rem 0.6rem',
                    fontSize: '0.72rem',
                    cursor: 'pointer'
                  }}
                >
                  {copiedId === activeSolution.id ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedId === activeSolution.id ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <code style={{ fontSize: '0.85rem', color: 'var(--color-cyan-300)', display: 'block', wordBreak: 'break-all' }}>
                {activeSolution.codeSnippet}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
