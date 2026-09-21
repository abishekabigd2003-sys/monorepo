export const techNavLinks = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Featured Work', href: '#work' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Ecosystem', href: '#ecosystem' },
  { name: 'Deploy', href: '#cta' }
];

export const heroTelemetry = [
  { label: 'Global Inference Speed', value: '0.82 ms', status: 'Sub-millisecond' },
  { label: 'Throughput Capacity', value: '142,000 TPS', status: 'Dynamic Scale' },
  { label: 'Fault-Tolerant Uptime', value: '99.999%', status: 'Active-Active' },
  { label: 'Active Edge Nodes', value: '3,840+', status: 'Worldwide' }
];

export const solutionsData = [
  {
    id: 'neural-inference',
    tag: 'CORE ENGINE',
    title: 'Autonomous Neural Inference',
    description: 'Hardware-accelerated tensor execution distributed across edge clusters with self-optimizing KV caches and sub-millisecond dispatch.',
    features: [
      'Speculative multi-token decoding',
      'Dynamic quantization (FP8 / INT4)',
      'Sub-millisecond cold start latency'
    ],
    codeSnippet: 'nexus.infer({ model: "synapse-70b-v2", stream: true, latency: "ultra-low" })'
  },
  {
    id: 'spatial-webgpu',
    tag: 'SPATIAL & GRAPHICS',
    title: 'Real-Time Spatial Synthesis',
    description: 'Compute shaders and WebGPU pipelines delivering photorealistic gaussian splatting, 3D world generation, and physical simulations.',
    features: [
      'Zero-copy WebGPU buffer streaming',
      'Volumetric video neural compression',
      'Dynamic physics tensor coprocessor'
    ],
    codeSnippet: 'nexus.spatial.render({ viewport: "holographic", fps: 120, rayTracing: true })'
  },
  {
    id: 'agentic-mesh',
    tag: 'MULTI-AGENT ARCHITECTURE',
    title: 'Decentralized Agent Mesh',
    description: 'Autonomous multi-agent orchestration framework with verified consensus protocols and deterministic state rollback.',
    features: [
      'Byzantine fault-tolerant agent quorum',
      'Self-healing vector routing',
      'Automated smart contract dispatch'
    ],
    codeSnippet: 'await agentMesh.dispatch({ swarm: "arbitrage-alpha", consensus: "pBFT" })'
  },
  {
    id: 'quantum-crypto',
    tag: 'SECURITY & CRYPTOGRAPHY',
    title: 'Post-Quantum Edge Security',
    description: 'Lattice-based encryption and zero-knowledge validity proofs safeguarding real-time inference payloads against cryptographic threats.',
    features: [
      'Kyber-1024 post-quantum key exchange',
      'zk-SNARK state attestations',
      'Hardware secure enclave enclave integration'
    ],
    codeSnippet: 'crypto.verifyProof({ proof: zkProof, scheme: "Kyber1024-ZK" })'
  }
];

export const featuredProjects = [
  {
    id: 'krypton-metaverse',
    badge: 'SPATIAL XR',
    title: 'Krypton Real-Time Spatial Engine',
    client: 'HyperReality Labs',
    description: 'Sub-millisecond photorealistic neural rendering engine streaming 4K interactive 3D worlds directly to web browsers without local GPU install.',
    techStack: ['WebGPU', 'Rust / WASM', 'Gaussian Splatting', 'Edge Mesh'],
    impact: '120 FPS at 4K resolution'
  },
  {
    id: 'synapse-ai',
    badge: 'AUTONOMOUS GENAI',
    title: 'Synapse Multi-Modal Intelligence Matrix',
    client: 'Aetheria Robotics',
    description: 'Edge-native multimodal inference powering autonomous robotics, continuous visual reasoning, and sub-10ms sensorimotor feedback loops.',
    techStack: ['FP8 PyTorch', 'TensorRT-LLM', 'CUDA', 'QUIC Protocol'],
    impact: '8.4x Lower Latency'
  },
  {
    id: 'cybermesh-grid',
    badge: 'DECENTRALIZED COMPUTE',
    title: 'Axiom Decentralized Vector Cloud',
    client: 'Global FinTech Consortium',
    description: 'Worldwide P2P computing network pooling dormant datacenter GPUs for hyper-parallel institutional financial modeling and stress simulations.',
    techStack: ['Go', 'Solana L2', 'Zero-Knowledge', 'Docker Enclaves'],
    impact: '70% Cloud Cost Reduction'
  },
  {
    id: 'helix-bio-synthesis',
    badge: 'DEEP TECH',
    title: 'Helix Molecular Diffusion Synthesis',
    client: 'DeepBio Innovations',
    description: 'Equivariant diffusion models predicting complex macromolecular interactions and therapeutic candidates in real time.',
    techStack: ['Geometric Deep Learning', 'JAX', 'Ray Distributed', 'gRPC'],
    impact: '100M+ Molecules Screened/Day'
  }
];

export const ecosystemSpecs = [
  { title: 'Global PoP Locations', value: '48+', detail: 'Tier-4 edge datacenters' },
  { title: 'Deterministic Latency', value: '< 1.2ms', detail: 'To 90% of global internet users' },
  { title: 'Neural Model Serving', value: '1.8B+', detail: 'Daily parameter calls handled' },
  { title: 'Energy Efficiency', value: '100%', detail: 'Renewable-matched computing' }
];
