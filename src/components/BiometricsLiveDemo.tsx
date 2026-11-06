import React, { useState } from 'react';
import { BIOMETRIC_MODES } from '../data/warbleData';
import { Activity, Heart, Moon, Utensils, Zap, Sparkles, TrendingUp } from 'lucide-react';

export const BiometricsLiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [simulationScenario, setSimulationScenario] = useState<'normal' | 'workout' | 'dinner'>('normal');

  const activeMode = BIOMETRIC_MODES[activeTab];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'recovery':
        return <Activity className="w-4 h-4" />;
      case 'strain':
        return <Zap className="w-4 h-4" />;
      case 'sleep':
        return <Moon className="w-4 h-4" />;
      case 'indian-ai':
        return <Utensils className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  // Adjust values based on simulation
  const getSimulatedScore = () => {
    if (activeMode.id === 'recovery') {
      if (simulationScenario === 'workout') return '58%';
      if (simulationScenario === 'dinner') return '76%';
      return '89%';
    }
    if (activeMode.id === 'strain') {
      if (simulationScenario === 'workout') return '18.2';
      if (simulationScenario === 'dinner') return '11.4';
      return '14.8';
    }
    if (activeMode.id === 'sleep') {
      if (simulationScenario === 'workout') return '95%';
      if (simulationScenario === 'dinner') return '84%';
      return '93%';
    }
    if (activeMode.id === 'indian-ai') {
      if (simulationScenario === 'dinner') return '99%';
      return '98%';
    }
    return activeMode.score;
  };

  return (
    <section id="biometrics" className="py-28 px-6 md:px-12 border-t border-line bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-disp font-bold text-xs uppercase tracking-[0.25em] mb-4">
            <Heart className="w-3.5 h-3.5 animate-pulse text-accent" />
            <span>Interactive Biometric Engine</span>
          </div>

          <h2 className="font-disp font-extrabold uppercase text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.88] mb-6">
            Raw Signal.<br />Total Clarity.
          </h2>

          <p className="text-mute text-base sm:text-lg font-body leading-relaxed">
            Test the on-device Warble AI engine live. See how your heart rate variability, recovery strain, and cultural lifestyle markers are translated in real-time.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          
          {/* Top Controls: Mode Tabs + Scenario Quick Switch */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {BIOMETRIC_MODES.map((mode, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-disp text-sm uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-accent text-white shadow-lg shadow-accent/30'
                        : 'bg-white/5 text-mute hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {getTabIcon(mode.id)}
                    <span>{mode.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Scenario Toggles */}
            <div className="flex items-center gap-2 text-xs font-body">
              <span className="text-mute mr-1 uppercase font-disp tracking-wider text-xs hidden sm:inline">Scenario:</span>
              {(['normal', 'workout', 'dinner'] as const).map((scen) => (
                <button
                  key={scen}
                  onClick={() => setSimulationScenario(scen)}
                  className={`px-3 py-1.5 rounded-lg border text-xs capitalize transition-all ${
                    simulationScenario === scen
                      ? 'border-white text-white bg-white/10 font-medium'
                      : 'border-white/10 text-mute hover:text-white hover:border-white/20'
                  }`}
                >
                  {scen === 'normal' && 'Baseline Day'}
                  {scen === 'workout' && '⚡ High Exertion'}
                  {scen === 'dinner' && '🍛 Late Dinner (9:30 PM)'}
                </button>
              ))}
            </div>
          </div>

          {/* Active Mode Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left Column: Big Score Dial & Live Waveform (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-disp tracking-widest text-mute">
                    {activeMode.title} Score
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent/20 text-accent font-body font-medium">
                    {activeMode.status}
                  </span>
                </div>

                <div className="flex items-baseline gap-4 my-4">
                  <span className="font-disp font-extrabold text-7xl sm:text-8xl text-white tracking-tighter">
                    {getSimulatedScore()}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-accent font-disp font-bold text-lg uppercase tracking-wider">
                      Realtime
                    </span>
                    <span className="text-xs text-mute font-body">
                      Sampled 100x / sec
                    </span>
                  </div>
                </div>

                <p className="text-mute text-sm font-body leading-relaxed mt-2">
                  {activeMode.description}
                </p>
              </div>

              {/* Simulated Pulse PPG Waveform */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-mute mb-2 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span>Live PPG Waveform (Green 525nm)</span>
                  </span>
                  <span className="text-white">52 bpm</span>
                </div>

                {/* SVG Pulsing ECG Wave */}
                <div className="h-14 w-full bg-black/60 rounded-lg p-2 overflow-hidden relative border border-white/5 flex items-center">
                  <svg className="w-[200%] h-full animate-ecg" viewBox="0 0 800 60" preserveAspectRatio="none">
                    <path
                      d="M0 30 L80 30 L95 10 L105 50 L120 20 L130 35 L140 30 L280 30 L295 10 L305 50 L320 20 L330 35 L340 30 L480 30 L495 10 L505 50 L520 20 L530 35 L540 30 L680 30 L695 10 L705 50 L720 20 L730 35 L740 30 L800 30"
                      fill="none"
                      stroke="#e8562a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Sub-Metrics & AI Recommendation (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              
              {/* 4 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeMode.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="text-xs text-mute uppercase font-disp tracking-wider mb-2">
                      {metric.label}
                    </div>
                    <div className="text-2xl sm:text-3xl font-disp font-extrabold text-white tracking-wide">
                      {metric.value}
                    </div>
                    <div className="text-xs text-accent font-body mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Insight Box */}
              <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30 relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-accent text-white shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-disp font-bold text-accent uppercase tracking-widest text-xs mb-1">
                      Warble AI On-Device Insight
                    </div>
                    <p className="text-white font-body text-sm sm:text-base leading-relaxed">
                      "{activeMode.insight}"
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
