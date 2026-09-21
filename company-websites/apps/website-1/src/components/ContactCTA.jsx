import React, { useState } from 'react';
import { Mail, Phone, MapPin, Lock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    mandate: 'M&A Advisory ($100M+)',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom">
        <div
          className="luxury-card"
          style={{
            padding: 'clamp(2rem, 5vw, 4rem)',
            background: 'radial-gradient(circle at 100% 0%, rgba(212, 175, 55, 0.12) 0%, rgba(18, 20, 26, 0.95) 70%)',
            border: '1px solid var(--color-border-gold)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem'
          }}
        >
          {/* Left Column: Direct Coordinates */}
          <div>
            <div className="section-tag">
              <Lock size={13} color="var(--color-gold-300)" />
              <span>Strict Fiduciary Discretion</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
                color: '#ffffff'
              }}
            >
              Initiate a Private{' '}
              <span className="text-gold-gradient">Sovereign Consultation</span>.
            </h2>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Engagements are conducted under non-disclosure agreements with direct partner oversight. We respond to verified institutional inquiries within 12 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid var(--color-border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={18} color="var(--color-gold-300)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Zurich Global Headquarters</div>
                  <div style={{ color: '#ffffff', fontWeight: 600 }}>Bahnhofstrasse 45, 8001 Zürich, Switzerland</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid var(--color-border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={18} color="var(--color-gold-300)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>London Guildhall Bureau</div>
                  <div style={{ color: '#ffffff', fontWeight: 600 }}>1 King’s Arms Yard, London EC2R 7AF, UK</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid var(--color-border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mail size={18} color="var(--color-gold-300)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Encrypted Private Dispatch</div>
                  <div style={{ color: '#ffffff', fontWeight: 600 }}>advisory@aethelgard-capital.ch</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div
            style={{
              background: 'rgba(11, 12, 16, 0.7)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: '12px',
              padding: '2.5rem'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid var(--color-gold-400)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}
                >
                  <CheckCircle2 size={32} color="var(--color-gold-300)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                  Inquiry Encrypted & Received
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  A Senior Managing Partner will review your institutional credentials and initiate confidential liaison within 12 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-gold-outline"
                  style={{ fontSize: '0.85rem' }}
                >
                  Submit Additional Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Full Legal Name & Title
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Lord Charles Montgomery, Managing Trustee"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Institutional Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="c.montgomery@trust.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Institution / Family Office
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Montgomery Trust Ltd."
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Mandate Focus
                  </label>
                  <select
                    value={formData.mandate}
                    onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      background: '#12141a',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  >
                    <option value="M&A Advisory ($100M+)">Sovereign & M&A Advisory ($100M+)</option>
                    <option value="Private Equity Syndication">Private Equity Syndication</option>
                    <option value="Infrastructure & Clean Energy">Infrastructure & Clean Energy</option>
                    <option value="Family Office & Governance">Multi-Family Office & Governance</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Executive Summary / Mandate Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide overview of transaction scope, timing, and jurisdiction..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn-gold-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <span>Transmit Confidential Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
