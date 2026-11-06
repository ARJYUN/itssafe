import React, { useState } from 'react';
import { HARDWARE_FEATURES } from '../data/warbleData';
import { Cpu, ShieldCheck, Battery, Eye, CheckCircle2 } from 'lucide-react';

export const HardwareExplorer: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'sensor':
        return <Eye className="w-5 h-5 text-accent" />;
      case 'silicon':
        return <Cpu className="w-5 h-5 text-accent" />;
      case 'unibody':
        return <ShieldCheck className="w-5 h-5 text-accent" />;
      case 'battery':
        return <Battery className="w-5 h-5 text-accent" />;
      default:
        return <Cpu className="w-5 h-5 text-accent" />;
    }
  };

  const current = HARDWARE_FEATURES[activeFeature];

  return (
    <section id="hardware" className="py-28 px-6 md:px-12 border-t border-line bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-accent font-disp font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3">
              Hardware Architecture
            </div>
            <h2 className="font-disp font-extrabold uppercase text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.88]">
              Every trace.<br />Ours.
            </h2>
          </div>

          <p className="max-w-md text-mute text-sm sm:text-base font-body leading-relaxed">
            By eliminating generic white-label boards, our 8-layer rigid-flex substrate fits double the sensor capacity into a whisper-thin 8.9mm profile.
          </p>
        </div>

        {/* Interactive Hardware Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Feature Selector Tabs (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {HARDWARE_FEATURES.map((feat, idx) => {
              const isSelected = activeFeature === idx;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'border-accent bg-accent/10 shadow-lg shadow-accent/10 translate-x-1'
                      : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className={`p-3 rounded-xl border ${isSelected ? 'border-accent bg-accent/20' : 'border-white/10 bg-black'}`}>
                    {getFeatureIcon(feat.id)}
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-disp font-bold tracking-widest uppercase text-mute block mb-1">
                      {feat.category}
                    </span>
                    <h3 className="font-disp font-bold text-xl uppercase tracking-wider text-white">
                      {feat.name}
                    </h3>
                    <span className="text-xs text-accent font-body mt-1 block">
                      {feat.spec}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Schematic / Architecture View (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-950 to-black p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            
            {/* Visual Schematic Diagram Box */}
            <div className="relative w-full aspect-video sm:aspect-[16/9] rounded-2xl border border-dashed border-white/20 bg-black/60 p-6 flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Grid Lines Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

              {/* Glowing schematic center */}
              <div className="relative z-10 w-32 h-32 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center mb-4 shadow-2xl shadow-accent/30 animate-pulse">
                <div className="w-20 h-20 rounded-full border border-accent flex items-center justify-center bg-black">
                  {getFeatureIcon(current.id)}
                </div>
              </div>

              <span className="text-xs font-mono text-accent tracking-widest uppercase">
                Schematic: {current.id.toUpperCase()}-IN-2026-PAT
              </span>
              <span className="text-xs text-mute mt-1 font-body">
                Bengaluru Micro-Assembly CAD Revision 3.2
              </span>
            </div>

            {/* Hardware Detail Content */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-xs font-disp font-bold uppercase tracking-widest text-accent">
                  Component Blueprint
                </span>
                <span className="text-xs text-mute font-mono">
                  Made in India
                </span>
              </div>

              <h4 className="font-disp font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wider mb-3">
                {current.name}
              </h4>

              <p className="text-mute font-body text-sm sm:text-base leading-relaxed">
                {current.detail}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-body text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>ISO 13485 Medical Device Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>100% Traceable SMT Production</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
