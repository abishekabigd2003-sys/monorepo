import React, { useState } from 'react';
import { Terminal, Copy, Check, ArrowRight, Zap, KeyRound } from 'lucide-react';

export default function InteractiveCTA() {
  const [copied, setCopied] = useState(false);
  const [keyGenerated, setKeyGenerated] = useState(false);
  const [email, setEmail] = useState('');

  const installCommand = 'curl -sSL https://nexus.synth/install.sh | bash';

  const copyCommand = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateKey = (e) => {
    e.preventDefault();
    if (email) setKeyGenerated(true);
  };

  return (
    <section id="cta" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="tech-container">
        <div
          className="cyber-card"
          style={{
            padding: 'clamp(2.5rem, 5vw, 4.5rem)',
            background: 'radial-gradient(ellipse at 80% 20%, rgba(121, 40, 202, 0.25) 0%, rgba(14, 17, 26, 0.95) 75%)',
            border: '1px solid var(--border-cyan-glow)',
            boxShadow: '0 0 50px rgba(0, 242, 254, 0.2)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column */}
          <div>
            <div className="cyber-tag">
              <Zap size={14} color="var(--color-cyan-neon)" />
              <span>INSTANT ACCESS TIER</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                color: '#ffffff'
              }}
            >
              Ready to Accelerate Your{' '}
              <span className="text-cyber-gradient">Compute Horizon</span>?
            </h2>

            <p style={{ color: 'var(--tech-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Join over 42,000 engineers building real-time generative applications, autonomous agent swarms, and high-performance WebGPU worlds.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                <div className="pulse-dot" />
                <span>$200 Free Distributed Compute Credits on Signup</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                <div className="pulse-dot" />
                <span>Zero Credit Card Required to Initialize Node</span>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Install & Key Generator */}
          <div
            style={{
              background: '#040508',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem'
            }}
          >
            {/* Terminal CLI Command */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--tech-text-muted)' }}>
                  CLI FAST INSTALL
                </span>
                <button
                  onClick={copyCommand}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: copied ? '#00f5a0' : '#ffffff',
                    padding: '0.3rem 0.65rem',
                    fontSize: '0.75rem',
                    cursor: 'pointer'
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy'}</span>
                </button>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  borderRadius: '6px',
                  padding: '0.85rem 1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--color-cyan-neon)',
                  overflowX: 'auto'
                }}
              >
                {installCommand}
              </div>
            </div>

            {/* Instant Key Generation Form */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--tech-text-muted)', marginBottom: '0.75rem' }}>
                PROVISION TESTNET API KEY
              </div>

              {keyGenerated ? (
                <div
                  style={{
                    background: 'rgba(0, 245, 160, 0.08)',
                    border: '1px solid rgba(0, 245, 160, 0.3)',
                    borderRadius: '6px',
                    padding: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem'
                  }}
                >
                  <div style={{ color: '#00f5a0', fontWeight: 600, marginBottom: '0.35rem' }}>
                    ✔ API Key Provisioned & Dispatched
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.78rem' }}>
                    Check {email} for your bearer token and deployment credentials.
                  </div>
                  <button
                    onClick={() => setKeyGenerated(false)}
                    style={{
                      marginTop: '0.75rem',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--color-cyan-neon)',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    Generate another key
                  </button>
                </div>
              ) : (
                <form onSubmit={handleGenerateKey} style={{ display: 'flex', gap: '0.65rem' }}>
                  <input
                    type="email"
                    required
                    placeholder="developer@studio.io"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.8rem 1rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontFamily: 'var(--font-space)'
                    }}
                  />
                  <button type="submit" className="btn-cyber-primary" style={{ padding: '0.8rem 1.4rem', fontSize: '0.9rem' }}>
                    <KeyRound size={16} />
                    <span>Get Key</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
