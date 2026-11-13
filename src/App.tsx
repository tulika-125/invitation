import React, { useState } from 'react';
import { RoyalOpeningCurtain } from './components/RoyalOpeningCurtain';
import { PetalShower } from './components/PetalShower';
import { AudioPlayer } from './components/AudioPlayer';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { EventsSection } from './components/EventsSection';
import { HostsSection } from './components/HostsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [musicStarted, setMusicStarted] = useState(false);

  const handleCurtainOpen = () => {
    setMusicStarted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF5EE] text-[#2C2117] selection:bg-[#6e1122] selection:text-[#fbf5b7]">
      {/* Cinematic Curtains & Royal Wax Seal Reveal */}
      <RoyalOpeningCurtain onOpen={handleCurtainOpen} />

      {/* Floating Rose Petals & Golden Bokeh Canvas */}
      <PetalShower />

      {/* Floating Audio Controller */}
      <AudioPlayer autoStarted={musicStarted} />

      {/* Sticky Royal Navigation Bar */}
      <Navbar />

      <main>
        {/* Hero Section with Live Countdown */}
        <HeroSection />

        {/* The Couple & Family Heritage */}
        <CoupleSection />

        {/* Wedding Events & Itinerary */}
        <EventsSection />

        {/* Unified Hosts, Family & Well Wishes */}
        <HostsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
