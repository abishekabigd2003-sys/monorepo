import React, { useState } from 'react';
import { Building2, ArrowUpRight, X, MapPin, DollarSign, BarChart2 } from 'lucide-react';
import { projectsData } from '../data/corporateData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Infrastructure', 'Energy', 'Private Equity', 'Advisory'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <div className="section-tag">
            <span>Landmark Transactions</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              lineHeight: 1.2,
              marginBottom: '1rem',
              color: '#ffffff',
              maxWidth: '750px'
            }}
          >
            Capital Deployed into Generational Assets with{' '}
            <span className="text-gold-gradient">Asymmetric Return</span>.
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
            A representative selection of sovereign syndications, private equity buyouts, and strategic advisory mandates.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '2rem'
            }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    background: isActive ? 'var(--gold-gradient)' : 'rgba(255,255,255,0.04)',
                    color: isActive ? '#0b0c10' : 'var(--color-text-secondary)',
                    border: isActive ? '1px solid #ffffff' : '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="luxury-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
              onClick={() => setActiveProject(project)}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px',
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid var(--color-border-subtle)',
                      color: 'var(--color-gold-300)',
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}
                  >
                    {project.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                    <MapPin size={14} color="var(--color-gold-400)" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3
                  }}
                >
                  {project.title}
                </h3>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.85rem 1rem',
                    background: 'rgba(11, 12, 16, 0.6)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Deal Value</div>
                    <div style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--color-gold-300)', fontWeight: 700, fontSize: '1.1rem' }}>
                      {project.value}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Performance</div>
                    <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                      {project.stat}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--color-gold-300)',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  <span>Review Syndicate Dossier</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Dossier View */}
        {activeProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              backgroundColor: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setActiveProject(null)}
          >
            <div
              className="luxury-card"
              style={{
                maxWidth: '600px',
                width: '100%',
                padding: '2.5rem',
                position: 'relative',
                background: '#12141a',
                border: '1px solid var(--color-border-bright)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close Modal"
                onClick={() => setActiveProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer'
                }}
              >
                <X size={22} />
              </button>

              <div className="section-tag" style={{ marginBottom: '1rem' }}>
                <span>{activeProject.category} Dossier</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem' }}>
                {activeProject.title}
              </h3>

              <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-gold-300)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={16} /> {activeProject.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <DollarSign size={16} /> {activeProject.value}
                </span>
              </div>

              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {activeProject.description} The transaction executed through private sovereign carve-outs adhering to Swiss and UK fiduciary compliance with 100% institutional syndication.
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#contact" onClick={() => setActiveProject(null)} className="btn-gold-primary" style={{ flex: 1 }}>
                  <span>Request Full Teaser & Audit</span>
                </a>
                <button onClick={() => setActiveProject(null)} className="btn-gold-outline">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
