import React from 'react';
import { COMPARISONS } from '../data/warbleData';
import { Check, Shield, Sparkles } from 'lucide-react';

export const SpecsComparison: React.FC = () => {
  return (
    <section id="specs" className="py-28 px-6 md:px-12 border-t border-line bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-disp font-bold text-xs uppercase tracking-[0.25em] mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Market Benchmark</span>
          </div>

          <h2 className="font-disp font-extrabold uppercase text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.88] mb-6">
            Compare The Truth.
          </h2>

          <p className="text-mute text-base sm:text-lg font-body leading-relaxed">
            No mandatory recurring subscriptions. No foreign server routing. Just clinical-grade engineering built for you.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.01] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-6 text-sm font-disp uppercase tracking-widest text-mute w-2/5">
                    Specification / Metric
                  </th>
                  <th className="p-6 text-base font-disp uppercase tracking-widest text-accent font-bold w-1/4 bg-accent/[0.08] border-x border-accent/30">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span>Warble AI 3.0</span>
                    </div>
                  </th>
                  <th className="p-6 text-sm font-disp uppercase tracking-widest text-mute w-1/6">
                    Imported Bands (e.g. Whoop)
                  </th>
                  <th className="p-6 text-sm font-disp uppercase tracking-widest text-mute w-1/6">
                    Smartwatches (e.g. Apple)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-body text-sm">
                {COMPARISONS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-6 font-medium text-white flex items-center gap-3">
                      <span>{row.feature}</span>
                    </td>
                    <td className="p-6 font-semibold text-white bg-accent/[0.04] border-x border-accent/20">
                      <div className="flex items-center gap-2 text-accent">
                        <Check className="w-4 h-4 shrink-0" />
                        <span className="text-white font-medium">{row.warble}</span>
                      </div>
                    </td>
                    <td className="p-6 text-mute">
                      {row.whoop}
                    </td>
                    <td className="p-6 text-mute">
                      {row.apple}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Postscript summary */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-mute font-body gap-4 px-2">
          <span>* Pricing estimates based on current public US dollar conversions as of 2026.</span>
          <span className="text-white font-disp uppercase tracking-wider">
            Warble AI: 100% Indian IP &amp; Patents
          </span>
        </div>

      </div>
    </section>
  );
};
