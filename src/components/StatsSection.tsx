import React from 'react';
import { STATS } from '../data/warbleData';
import { ShieldCheck, BatteryCharging, Cpu, Heart } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section id="tech" className="relative py-28 px-6 md:px-12 border-t border-line bg-black scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="text-accent font-disp font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3">
              Telemetry &amp; Architecture
            </div>
            <h2 className="font-disp font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.9]">
              Engineered to know you.<br />
              <span className="text-white/40">Zero compromises.</span>
            </h2>
          </div>

          <p className="max-w-md text-mute text-sm sm:text-base leading-relaxed font-body">
            By rejecting off-the-shelf reference boards and foreign cloud dependencies, Warble AI achieves unmatched battery efficiency, clinical-grade pulse accuracy, and total data sovereignty.
          </p>
        </div>

        {/* 4 Big Stats Grid (Exact match to original aesthetic, but responsive and interactive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="group relative border-l-2 border-line hover:border-accent pl-6 py-2 transition-all duration-300 hover:translate-x-1"
            >
              <div className="font-disp font-extrabold text-6xl sm:text-7xl md:text-8xl text-white tracking-tighter leading-none flex items-baseline">
                {stat.value.replace('%', '').replace('/7', '').replace('.0', '')}
                {stat.value.includes('%') && <span className="text-accent font-normal">%</span>}
                {stat.value.includes('/7') && <span className="text-accent font-normal text-5xl">/7</span>}
                {stat.value.includes('.0') && <span className="text-accent font-normal text-6xl">.0</span>}
                {stat.value === 'IN' && <span className="text-accent tracking-normal">IN</span>}
              </div>

              <p className="mt-4 text-mute text-sm sm:text-base leading-snug font-body group-hover:text-white transition-colors">
                {stat.label}
              </p>

              <span className="mt-3 block text-xs text-mute/60 font-body">
                {stat.detail}
              </span>

              {/* Subtle hover glow backdrop */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-r-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Quick Spec Highlights Bar */}
        <div className="mt-20 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-disp font-bold text-white text-base tracking-wider uppercase">0 Subscription</div>
              <div className="text-xs text-mute font-body">Lifetime app &amp; ML access</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <div>
              <div className="font-disp font-bold text-white text-base tracking-wider uppercase">5 Days Battery</div>
              <div className="text-xs text-mute font-body">Fast 25-min snap charge</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="font-disp font-bold text-white text-base tracking-wider uppercase">On-Device NPU</div>
              <div className="text-xs text-mute font-body">Sub-mW neural inference</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="font-disp font-bold text-white text-base tracking-wider uppercase">Medical Grade</div>
              <div className="text-xs text-mute font-body">Quad-wavelength optical PPG</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

