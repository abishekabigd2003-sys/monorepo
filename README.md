# Company Websites Monorepo

A modern Git monorepo containing two distinct, premium, responsive landing pages built with **React** and **Vite**:

```
company-websites/
│
├── apps/
│   │
│   ├── website-1/          # Luxury Corporate Landing Page (Black/White/Gold)
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   └── ...
│   │
│   └── website-2/          # Creative Technology Landing Page (Dark UI, Blue/Purple)
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── ...
│
├── package.json            # Root workspace scripts
├── .gitignore
├── README.md
└── .git/
```

---

## 🏛️ Website 1: Aethelgard & Co. — Corporate Luxury
- **Aesthetic**: Prestigious, high-touch private equity and global strategic advisory aesthetic.
- **Palette**: Obsidian black (`#0B0B0C`), brushed metallic gold (`#D4AF37`, `#F5E296`), and crisp marble white (`#F8F9FA`).
- **Typography**: Editorial serif (*Playfair Display*) paired with clean geometric modern sans (*Plus Jakarta Sans*).
- **Key Sections**:
  - Glassmorphic sticky navigation with responsive mobile menu
  - Prestigious Hero with live dynamic metrics counter ($4.8B+ Assets, 99.4% Client Retention, 32 Global Markets)
  - About Us narrative with strategic pillar cards
  - High-touch Services with interactive expandable capabilities
  - Filterable Curated Projects & M&A showcase
  - Executive Client Testimonials and Institutional Badges
  - Consultation Scheduling CTA & inquiry modal
  - Comprehensive multi-column Footer with regulatory credentials

---

## ⚡ Website 2: NexusSynth — Creative Technology
- **Aesthetic**: Futuristic, next-gen AI / Web3 / Autonomous compute platform.
- **Palette**: Deep cyber dark (`#08090E`), electric neon cyan (`#00F2FE`), and synth purple (`#4FACFE`, `#8A2BE2`).
- **Typography**: Space Grotesk paired with JetBrains Mono.
- **Key Sections**:
  - Cyber-dock floating navigation with live status pill and quick launch
  - Creative Hero with interactive code / neural visualizer telemetry card
  - Solutions matrix with interactive capability tabs
  - Featured Work showcase with live demo tags and tech chips
  - Platform Architecture, ecosystem telemetry (<1ms latency, 100k+ TPS)
  - Interactive "Deploy in 60s" terminal-style CTA
  - System status and developer ecosystem Footer

---

## 🚀 Quick Start

### Install Dependencies
You can install dependencies individually or run across apps:
```bash
# Website 1 (Corporate)
cd apps/website-1
npm install
npm run dev

# Website 2 (Creative Tech)
cd apps/website-2
npm install
npm run dev
```

Or from the `company-websites` root:
```bash
npm run dev:w1      # Runs Website 1 on http://localhost:5173
npm run dev:w2      # Runs Website 2 on http://localhost:5174
npm run build       # Builds both applications
```
