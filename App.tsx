
import React from 'react';
import Header from './components/Header';
import UtilityRibbon from './components/UtilityRibbon';
import Hero from './components/Hero';
import Overview from './components/Overview';
import QuickFacts from './components/QuickFacts';
import Quotes from './components/Quotes';
import Timeline from './components/Timeline';
import Documents from './components/Documents';
import MediaAssets from './components/MediaAssets';
import LiveUpdates from './components/LiveUpdates';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0B0B0B] text-gray-200 font-sans leading-relaxed">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 bg-blue-500 text-white p-2 rounded">
        Skip to content
      </a>
      
      <UtilityRibbon />
      <Header />

      <main id="main-content">
        <Hero />
        <Overview />
        <QuickFacts />
        <Quotes />
        <Timeline />
        <Documents />
        <MediaAssets />
        <LiveUpdates />
        <Contact />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;
