import React, { useState } from 'react';
import { FAQS } from '../data/warbleData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-28 px-6 md:px-12 border-t border-line bg-black relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-disp font-bold text-xs uppercase tracking-[0.25em] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers &amp; Clarity</span>
          </div>

          <h2 className="font-disp font-extrabold uppercase text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.88] mb-6">
            Frequently Asked.
          </h2>

          <p className="text-mute text-base font-body leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our hardware, proprietary algorithms, data privacy, and pre-order timeline.
          </p>

          {/* Quick Filter Search */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-mute absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search topics (e.g. subscription, battery, privacy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 focus:border-accent rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder-mute outline-none transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-mute text-sm font-body">
              No matching questions found for "{searchQuery}".
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.01] hover:border-white/20 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-disp font-bold text-xl sm:text-2xl text-white uppercase tracking-wide">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-full bg-white/5 text-mute transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-accent bg-accent/15' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-mute font-body text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};

