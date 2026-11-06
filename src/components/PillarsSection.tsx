import React, { useState } from 'react';
import { PILLARS } from '../data/warbleData';
import { Layers, Cpu, Brain, CheckCircle2 } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-6 h-6 text-accent" />;
      case 1:
        return <Cpu className="w-6 h-6 text-accent" />;
      case 2:
        return <Brain className="w-6 h-6 text-accent" />;
      default:
        return <Layers className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <section id="pillars" className="py-28 px-6 md:px-12 border-t border-line bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="text-accent font-disp font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3">
            Vertical Integration
          </div>
          <h2 className="font-disp font-extrabold uppercase text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.88] max-w-2xl">
            Built from the<br />board up.
          </h2>
        </div>

        {/* 3 Pillars Grid with interactive highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {PILLARS.map((pillar, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <div
                key={pillar.number}
                onClick={() => setSelectedPillar(idx)}
                className={`bg-black p-8 sm:p-10 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected ? 'bg-white/[0.04] ring-1 ring-accent/50' : 'hover:bg-white/[0.02]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-disp font-bold text-accent text-lg tracking-widest">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-accent/40 transition-colors">
                      {getPillarIcon(idx)}
                    </div>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-mute font-body font-semibold block mb-2">
                    {pillar.tagline}
                  </span>

                  <h3 className="font-disp font-bold text-3xl sm:text-4xl text-white tracking-wide uppercase mb-4 group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-mute text-sm sm:text-base leading-relaxed font-body">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5">
                  {pillar.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs text-white/80 font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Feature Banner for the Selected Pillar */}
        <div className="mt-10 p-6 md:p-8 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/10 via-black to-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center font-disp font-extrabold text-xl shrink-0">
              {PILLARS[selectedPillar].number}
            </div>
            <div>
              <div className="text-xs font-disp uppercase tracking-widest text-accent font-bold">
                Active Architecture Focus
              </div>
              <h4 className="text-lg sm:text-xl font-disp font-bold uppercase text-white tracking-wider">
                {PILLARS[selectedPillar].title}: {PILLARS[selectedPillar].tagline}
              </h4>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-mute font-body max-w-md">
            All code, schematic layouts, and models are created by our Bengaluru &amp; Hyderabad engineering squads. Zero telemetry is shared with external vendors.
          </div>
        </div>

      </div>
    </section>
  );
};
