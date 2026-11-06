import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { PillarsSection } from './components/PillarsSection';
import { BiometricsLiveDemo } from './components/BiometricsLiveDemo';
import { HardwareExplorer } from './components/HardwareExplorer';
import { SpecsComparison } from './components/SpecsComparison';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';

export const App: React.FC = () => {
  // Temporary visibility toggle: set to true whenever you want to revert and show all sections
  const SHOW_EXTENDED_SECTIONS = false;

  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('warble_waitlist_spot');
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed)) {
        setWaitlistNumber(parsed);
      }
    }
  }, []);

  const handleEnrollSuccess = (num: number) => {
    setWaitlistNumber(num);
    localStorage.setItem('warble_waitlist_spot', num.toString());
  };

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col font-body selection:bg-accent selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
        isEnrolled={!!waitlistNumber}
        waitlistNumber={waitlistNumber}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenWaitlist={() => setIsWaitlistOpen(true)} />

        {/* Temporarily Hidden Sections: flip SHOW_EXTENDED_SECTIONS to true to revert */}
        {SHOW_EXTENDED_SECTIONS && (
          <>
            {/* Core Stats & Metrics */}
            <StatsSection />

            {/* 3 Pillars: Embedded, Custom PCB, Proprietary AI */}
            <PillarsSection />

            {/* Live Interactive Biometrics Engine */}
            <BiometricsLiveDemo />

            {/* Custom Silicon & Hardware Teardown */}
            <HardwareExplorer />

            {/* Truthful Specs & Competitor Comparison */}
            <SpecsComparison />

            {/* Interactive FAQ */}
            <FAQSection />
          </>
        )}
      </main>

      {/* Footer (Temporarily hidden with other sections) */}
      {SHOW_EXTENDED_SECTIONS && (
        <Footer
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          isEnrolled={!!waitlistNumber}
          waitlistNumber={waitlistNumber}
        />
      )}

      {/* Pre-order / Waitlist Multi-Step Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        onEnrollSuccess={handleEnrollSuccess}
        savedWaitlistNum={waitlistNumber}
      />
    </div>
  );
};

export default App;

