import React from 'react';
import { Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenWaitlist: () => void;
  isEnrolled: boolean;
  waitlistNumber?: number | null;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWaitlist, isEnrolled, waitlistNumber }) => {
  return (
    <footer id="join" className="py-24 px-6 md:px-12 border-t border-line bg-black text-center relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Made in India Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs text-mute font-body mb-8">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#FF9933]"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
          </span>
          <span className="font-disp tracking-widest uppercase font-semibold text-white">
            Designed, Patented &amp; Assembled in India
          </span>
        </div>

        {/* Big Climax Header matching original */}
        <h2 className="font-disp font-extrabold uppercase text-5xl sm:text-7xl md:text-9xl text-white tracking-tight leading-[0.85] mb-8">
          Wear what<br />knows you.
        </h2>

        <p className="text-mute text-base sm:text-lg font-body max-w-xl mx-auto mb-10 leading-relaxed">
          Step into third-generation biometric sensing. Zero recurring subscriptions, 100% on-device privacy, and hardware crafted without compromise.
        </p>

        {/* Pre-order / Waitlist Action */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          {isEnrolled ? (
            <button
              onClick={onOpenWaitlist}
              className="btn-primary text-base px-8 py-4 shadow-xl"
            >
              <span>View Your Spot #{waitlistNumber}</span>
              <Sparkles className="w-4 h-4 text-accent" />
            </button>
          ) : (
            <button
              onClick={onOpenWaitlist}
              className="btn-primary text-base px-8 py-4 shadow-xl"
            >
              <span>Join The Waitlist</span>
              <Sparkles className="w-4 h-4 text-accent" />
            </button>
          )}

          <a
            href="#tech"
            className="btn-ghost text-base px-8 py-4"
          >
            Review Specs
          </a>
        </div>

        {/* Links & Navigation */}
        <div className="w-full pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-mute font-body">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent accent-glow"></div>
            <span className="font-disp uppercase text-sm font-bold text-white tracking-widest">
              Warble AI 3.0
            </span>
            <span className="text-mute/60 hidden sm:inline">| Bengaluru · Hyderabad R&amp;D</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="#hero" className="hover:text-white transition-colors">Overview</a>
            <a href="#tech" className="hover:text-white transition-colors">Technology</a>
            <a href="#pillars" className="hover:text-white transition-colors">Architecture</a>
            <a href="#biometrics" className="hover:text-white transition-colors">Biometrics</a>
            <a href="#specs" className="hover:text-white transition-colors">Compare</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>

        {/* Legal & Patents */}
        <div className="mt-8 text-center text-xs text-mute/60 font-body space-y-2">
          <p>© 2026 WARBLE AI · DESIGNED &amp; MADE IN INDIA · ALL RIGHTS RESERVED.</p>
          <p className="text-[11px]">
            Compliant with DPDP Act 2023. Indian Patent Application Nos. 20264109822 &amp; 20264109823.
          </p>
        </div>

      </div>
    </footer>
  );
};
