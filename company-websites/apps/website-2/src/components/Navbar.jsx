import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Terminal, ArrowRight, Activity } from 'lucide-react';
import { techNavLinks } from '../data/techData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 1rem'
      }}
    >
      <div
        className="tech-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: isScrolled ? 'rgba(8, 9, 14, 0.92)' : 'rgba(14, 17, 26, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-cyan-glow)',
          borderRadius: '16px',
          padding: '0.75rem 1.5rem',
          boxShadow: isScrolled ? '0 10px 35px rgba(0, 242, 254, 0.15)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: '#fff'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--gradient-cyber)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.6)'
            }}
          >
            <Cpu size={20} color="#08090e" strokeWidth={2.5} />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: '1.15rem',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              NEXUS<span style={{ color: 'var(--color-cyan-neon)' }}>.SYNTH</span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--color-purple-300)',
                letterSpacing: '0.15em'
              }}
            >
              NEURAL COMPUTE
            </div>
          </div>
        </a>

        {/* Live Status Pill (Desktop) */}
        <div
          className="desktop-status"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            background: 'rgba(0, 245, 160, 0.08)',
            border: '1px solid rgba(0, 245, 160, 0.25)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#00f5a0'
          }}
        >
          <div className="pulse-dot" />
          <span>v2.8 MAINNET ONLINE</span>
        </div>

        {/* Desktop Nav Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem'
          }}
        >
          {techNavLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                color: 'var(--tech-text-secondary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-space)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00f2fe';
                e.currentTarget.style.textShadow = '0 0 10px rgba(0,242,254,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--tech-text-secondary)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Menu Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <a
            href="#cta"
            className="btn-cyber-primary desktop-cta"
            style={{ display: 'none', padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
          >
            <span>Launch Engine</span>
            <Terminal size={15} />
          </a>

          <button
            id="w2-mobile-menu-toggle"
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid var(--border-cyan-glow)',
              borderRadius: '8px',
              color: '#00f2fe',
              padding: '0.5rem',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="w2-mobile-drawer"
          style={{
            margin: '0.75rem auto 0 auto',
            maxWidth: '1240px',
            background: 'rgba(10, 12, 20, 0.98)',
            border: '1px solid var(--border-cyan-glow)',
            borderRadius: '14px',
            padding: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00f5a0', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
            <div className="pulse-dot" />
            <span>MAINNET v2.8 OPERATIONAL</span>
          </div>

          {techNavLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-cyber-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <span>Launch Engine</span>
            <Terminal size={16} />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-status { display: inline-flex !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
