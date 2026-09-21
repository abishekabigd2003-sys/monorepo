import React, { useState, useEffect } from 'react';
import { Terminal, Zap, ArrowRight, Activity, Play, Code2, Layers } from 'lucide-react';
import { heroTelemetry } from '../data/techData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('stream');
  const [ticker, setTicker] = useState(142080);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicker((prev) => prev + Math.floor(Math.random() * 40) - 15);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
      className="bg-tech-grid bg-radial-lights"
    >
      <div className="tech-container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          {/* Left Column: Headline & Action */}
          <div>
            <div className="cyber-tag">
              <Zap size={14} color="var(--color-cyan-neon)" />
              <span>NEXT-GEN NEURAL RUNTIME v2.8</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
                color: '#ffffff'
              }}
            >
              Programmable <span className="text-cyber-gradient">Intelligence</span> at the Edge of Compute.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                color: 'var(--tech-text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '560px'
              }}
            >
              Deploy distributed AI models, real-time spatial WebGPU shaders, and autonomous multi-agent swarms with zero configuration and sub-millisecond execution.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <a href="#cta" className="btn-cyber-primary">
                <span>Initialize Cluster</span>
                <ArrowRight size={18} />
              </a>
              <a href="#solutions" className="btn-cyber-outline">
                <span>View Architecture</span>
                <Layers size={18} />
              </a>
            </div>

            {/* Micro Badge Proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--tech-text-muted)', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#00f2fe', fontWeight: 700 }}>100%</span> Open Standards
              </div>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#c084fc', fontWeight: 700 }}>Zero-Copy</span> WASM/WebGPU
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Neural Console Visualizer */}
          <div
            className="cyber-card"
            style={{
              border: '1px solid var(--border-cyan-glow)',
              boxShadow: '0 20px 50px rgba(0, 242, 254, 0.15)',
              overflow: 'hidden'
            }}
          >
            {/* Terminal Top Bar */}
            <div
              style={{
                background: 'rgba(10, 12, 20, 0.9)',
                padding: '0.85rem 1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--tech-text-muted)', marginLeft: '0.5rem' }}>
                  nexus-node-us-east // live-telemetry
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setActiveTab('stream')}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    background: activeTab === 'stream' ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
                    border: '1px solid ' + (activeTab === 'stream' ? 'var(--color-cyan-neon)' : 'transparent'),
                    color: activeTab === 'stream' ? '#00f2fe' : 'var(--tech-text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  Stream
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    background: activeTab === 'specs' ? 'rgba(147, 51, 234, 0.2)' : 'transparent',
                    border: '1px solid ' + (activeTab === 'specs' ? '#c084fc' : 'transparent'),
                    color: activeTab === 'specs' ? '#c084fc' : 'var(--tech-text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  Tensors
                </button>
              </div>
            </div>

            {/* Interactive Terminal Body */}
            <div
              style={{
                padding: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                background: 'rgba(8, 9, 14, 0.95)',
                minHeight: '260px'
              }}
            >
              {activeTab === 'stream' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ color: '#00f5a0' }}>$ nexus cluster:connect --region global-mesh</div>
                  <div style={{ color: 'var(--tech-text-muted)' }}>[INFO] 3,840 Edge GPUs discovered via Byzantine Consensus</div>
                  <div style={{ color: '#00f2fe' }}>[OK] Active Shard Throughput: {ticker.toLocaleString()} TPS</div>
                  <div style={{ color: '#c084fc' }}>[GPU] Pipelined FP8 Tensor Execution: 0.82ms latency</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f8fafc', marginTop: '0.5rem' }}>
                    <div className="pulse-dot" />
                    <span>Awaiting WebSocket inference streams...</span>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ color: 'var(--color-cyan-neon)' }}>{"{"}</div>
                  <div style={{ paddingLeft: '1.25rem', color: 'var(--tech-text-secondary)' }}>
                    "engine": "Synapse-LLM-70B-FP8",<br />
                    "quantization": "INT4_Weight_FP8_Act",<br />
                    "acceleration": "WebGPU_Vulkan_CUDA",<br />
                    "kvCachePool": "32.0 GB Distributed",<br />
                    "verifiedZkProof": "0x89f...c21"
                  </div>
                  <div style={{ color: 'var(--color-cyan-neon)' }}>{"}"}</div>
                </div>
              )}
            </div>

            {/* Telemetry Metric Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(14, 17, 26, 0.9)'
              }}
            >
              <div style={{ padding: '1rem', borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--tech-text-muted)', fontFamily: 'var(--font-mono)' }}>LATENCY</div>
                <div style={{ fontFamily: 'var(--font-mono)', color: '#00f2fe', fontWeight: 700, fontSize: '1.1rem' }}>0.82 ms</div>
              </div>
              <div style={{ padding: '1rem' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--tech-text-muted)', fontFamily: 'var(--font-mono)' }}>ACCURACY</div>
                <div style={{ fontFamily: 'var(--font-mono)', color: '#c084fc', fontWeight: 700, fontSize: '1.1rem' }}>99.98%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Stats Grid */}
        <div
          style={{
            marginTop: '4.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {heroTelemetry.map((item, idx) => (
            <div
              key={idx}
              className="cyber-card"
              style={{
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--tech-text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                {item.label}
              </div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: '0.35rem' }}>
                {item.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#00f5a0', fontFamily: 'var(--font-mono)' }}>
                ● {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
