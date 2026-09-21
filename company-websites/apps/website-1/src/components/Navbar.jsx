import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { navLinks } from '../data/corporateData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(11, 12, 16, 0.92)' : 'rgba(11, 12, 16, 0.65)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
        padding: isScrolled ? '0.85rem 0' : '1.25rem 0'
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: '#fff'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #f5e296 0%, #d4af37 50%, #8c6a15 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.35)'
            }}
          >
            <span style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 800, fontSize: '1.2rem', color: '#0b0c10' }}>
              Æ
            </span>
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-cinzel)',
                letterSpacing: '0.18em',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#f8f9fa',
                display: 'block',
                lineHeight: 1.1
              }}
            >
              AETHELGARD
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                letterSpacing: '0.25em',
                color: 'var(--color-gold-300)',
                textTransform: 'uppercase',
                display: 'block'
              }}
            >
              Strategic Capital
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.2rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-300)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#contact"
            className="btn-gold-primary desktop-cta"
            style={{ display: 'none', padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
          >
            <span>Consult Fiduciary</span>
            <ArrowUpRight size={16} />
          </a>

          <button
            id="w1-mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: '1px solid var(--color-border-gold)',
              borderRadius: '6px',
              color: 'var(--color-gold-300)',
              padding: '0.5rem',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="w1-mobile-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(11, 12, 16, 0.98)',
            borderBottom: '1px solid var(--color-border-gold)',
            padding: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: '#f8f9fa',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: 500,
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-gold-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <span>Inquire Now</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      {/* Style for responsive classes */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
