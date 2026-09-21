import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import FeaturedWork from './components/FeaturedWork';
import AboutEcosystem from './components/AboutEcosystem';
import InteractiveCTA from './components/InteractiveCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-tech-grid">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <FeaturedWork />
        <AboutEcosystem />
        <InteractiveCTA />
      </main>
      <Footer />
    </div>
  );
}
