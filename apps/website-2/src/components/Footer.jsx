import React from 'react';
import { Cpu, Terminal, Shield, Code, Globe, MessageSquare } from 'lucide-react';
import { techNavLinks } from '../data/techData';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#040508',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '5rem 0 2.5rem 0',
        color: 'var(--tech-text-secondary)',
        fontSize: '0.9rem'
      }}
    >
      <div className="tech-container">
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--gradient-cyber)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Cpu size={18} color="#08090e" strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '-0.02em',
                  color: '#ffffff'
                }}
              >
                NEXUS<span style={{ color: 'var(--color-cyan-neon)' }}>.SYNTH</span>
              </span>
            </div>

            <p style={{ color: 'var(--tech-text-muted)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Autonomous neural compute primitives, real-time spatial WebGPU rendering, and decentralized agent meshes for hyper-scale creators.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                background: 'rgba(0, 245, 160, 0.08)',
                border: '1px solid rgba(0, 245, 160, 0.2)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: '#00f5a0'
              }}
            >
              <div className="pulse-dot" />
              <span>ALL 48 CLUSTERS 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Developer Navigation */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem'
              }}
            >
              DEVELOPER SUITE
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#solutions" style={{ color: 'var(--tech-text-secondary)', textDecoration: 'none' }}>
                  Rust & WASM SDK
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ color: 'var(--tech-text-secondary)', textDecoration: 'none' }}>
                  WebGPU Shaders Library
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ color: 'var(--tech-text-secondary)', textDecoration: 'none' }}>
                  Multi-Agent Swarm Orchestrator
                </a>
              </li>
              <li>
                <a href="#architecture" style={{ color: 'var(--tech-text-secondary)', textDecoration: 'none' }}>
                  Byzantine Consensus Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Protocols & Specs */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem'
              }}
            >
              PROTOCOLS & ECOSYSTEM
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#work" style={{ color: 'var(--tech-text-secondary)', textDecoration: 'none' }}>
                  Benchmark Telemetry
                </a>
              </li>
              <li>
                <a href="#architecture" style={{ color: 'var(--tech-text-secondary)', textDecoration: 'none' }}>
                  Post-Quantum Kyber-1024
                </a>
              </li>
              <li>
                <a href="#work" style={{ color: 'var(--tech-text-secondary)', textDecoration: 'none' }}>
                  Case Studies & Whitepapers
                </a>
              </li>
              <li>
                <a href="#cta" style={{ color: 'var(--tech-text-secondary)', textDecoration: 'none' }}>
                  Node Operator Staking
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Social */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem'
              }}
            >
              CONNECT & NETWORK
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                title="Code Repository"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <Code size={18} />
              </div>
              <div
                title="Global Network"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <Globe size={18} />
              </div>
              <div
                title="Discord Community"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <MessageSquare size={18} />
              </div>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--tech-text-muted)', fontFamily: 'var(--font-mono)' }}>
              Built for high-concurrency neural compute.
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--tech-text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} NexusSynth Foundation. MIT Licensed Core & Sovereign Cloud Protocol.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Compute</span>
            <span>Security Bounty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
