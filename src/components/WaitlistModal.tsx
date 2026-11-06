import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Check, Sparkles, ShieldCheck, Copy, ArrowRight } from 'lucide-react';
import { CITIES_INDIA } from '../data/warbleData';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnrollSuccess: (num: number) => void;
  savedWaitlistNum?: number | null;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  onEnrollSuccess,
  savedWaitlistNum,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(savedWaitlistNum ? 3 : 1);
  const [selectedFinish, setSelectedFinish] = useState<'obsidian' | 'titanium' | 'ember'>('obsidian');
  const [selectedSize, setSelectedSize] = useState<'sm' | 'lxl'>('sm');
  const [selectedStrap, setSelectedStrap] = useState<'knit' | 'hydro'>('knit');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Bengaluru');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const [waitlistNumber, setWaitlistNumber] = useState<number>(savedWaitlistNum || 1482);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (savedWaitlistNum) {
      setWaitlistNumber(savedWaitlistNum);
      setStep(3);
    }
  }, [savedWaitlistNum]);

  if (!isOpen) return null;

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e8562a', '#ffffff', '#ff8b60'],
      });
    } catch {
      // fallback if canvas not available
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};

    if (!fullName.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!email.trim() || !email.includes('@')) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const assignedNum = Math.floor(1200 + Math.random() * 800);
    setWaitlistNumber(assignedNum);
    onEnrollSuccess(assignedNum);
    setStep(3);
    triggerCelebration();
  };

  const copyReferral = () => {
    navigator.clipboard.writeText(`https://warble.ai/vip?ref=WARBLE-${waitlistNumber}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-mute hover:text-white transition-colors"
          aria-label="Close waitlist modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-accent font-disp font-bold text-xs uppercase tracking-[0.25em] mb-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Batch 01 Early Access</span>
          </div>
          <h3 className="font-disp font-extrabold uppercase text-3xl sm:text-4xl text-white tracking-wide">
            {step === 3 ? 'Reservation Confirmed' : 'Reserve Your Warble Band'}
          </h3>
          <p className="text-mute text-xs sm:text-sm font-body mt-1">
            {step === 3
              ? 'Your spot in Batch 01 is secured. Keep your VIP token safe.'
              : 'Zero deposit required today. Priority dispatch & lifetime subscription waiver.'}
          </p>
        </div>

        {/* STEP 1: Customize Hardware */}
        {step === 1 && (
          <div className="space-y-6">
            {/* Finish Selection */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-disp text-mute mb-3 font-semibold">
                1. Select Titanium Finish
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'obsidian', label: 'Stealth Obsidian', hex: '#18181b' },
                  { id: 'titanium', label: 'Raw Titanium', hex: '#71717a' },
                  { id: 'ember', label: 'Warble Ember', hex: '#e8562a' },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSelectedFinish(f.id as any)}
                    className={`p-3.5 rounded-2xl border text-left flex flex-col items-start justify-between gap-3 transition-all ${
                      selectedFinish === f.id
                        ? 'border-accent bg-accent/10 shadow-lg shadow-accent/10'
                        : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: f.hex }}
                    ></span>
                    <span className="text-xs font-disp uppercase font-bold text-white tracking-wider">
                      {f.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size & Strap Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest font-disp text-mute mb-2 font-semibold">
                  2. Wrist Fit
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSize('sm')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      selectedSize === 'sm'
                        ? 'border-accent bg-accent/15 text-white font-medium'
                        : 'border-white/10 bg-black text-mute hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-white uppercase font-disp text-sm">S / M</div>
                    <div className="text-[11px] text-mute">135 – 180 mm</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSize('lxl')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      selectedSize === 'lxl'
                        ? 'border-accent bg-accent/15 text-white font-medium'
                        : 'border-white/10 bg-black text-mute hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-white uppercase font-disp text-sm">L / XL</div>
                    <div className="text-[11px] text-mute">175 – 225 mm</div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-disp text-mute mb-2 font-semibold">
                  3. Default Strap
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedStrap('knit')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      selectedStrap === 'knit'
                        ? 'border-accent bg-accent/15 text-white font-medium'
                        : 'border-white/10 bg-black text-mute hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-white uppercase font-disp text-sm">SuperKnit</div>
                    <div className="text-[11px] text-mute">Breathable Weave</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedStrap('hydro')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      selectedStrap === 'hydro'
                        ? 'border-accent bg-accent/15 text-white font-medium'
                        : 'border-white/10 bg-black text-mute hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-white uppercase font-disp text-sm">HydroSport</div>
                    <div className="text-[11px] text-mute">Fluoroelastomer</div>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="btn-primary w-full py-4 text-center justify-center text-sm tracking-widest mt-6"
            >
              <span>Continue to Contact Info</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}

        {/* STEP 2: Contact Info Form */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest font-disp text-mute mb-1.5 font-semibold">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Arjun Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-black/60 border border-white/15 focus:border-accent rounded-xl px-4 py-3 text-white placeholder-mute/50 outline-none text-sm font-body transition-colors"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-disp text-mute mb-1.5 font-semibold">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="arjun@company.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/60 border border-white/15 focus:border-accent rounded-xl px-4 py-3 text-white placeholder-mute/50 outline-none text-sm font-body transition-colors"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-disp text-mute mb-1.5 font-semibold">
                Primary City in India
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {CITIES_INDIA.slice(0, 6).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCity(c)}
                    className={`px-3 py-1 rounded-full text-xs font-body transition-colors ${
                      city === c
                        ? 'bg-accent text-white font-medium'
                        : 'bg-white/5 text-mute hover:text-white border border-white/10'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Or type city name"
                className="w-full bg-black/60 border border-white/15 focus:border-accent rounded-xl px-4 py-2.5 text-white placeholder-mute/50 outline-none text-xs font-body"
              />
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-ghost py-3.5 px-6 text-xs tracking-wider"
              >
                Back
              </button>
              <button
                type="submit"
                className="btn-primary flex-1 py-3.5 text-center justify-center text-sm tracking-widest"
              >
                <span>Confirm VIP Waitlist Spot</span>
              </button>
            </div>

            <p className="text-[11px] text-mute text-center font-body pt-2">
              🔒 We never spam. Stored in Indian data centers under the DPDP Act 2023.
            </p>
          </form>
        )}

        {/* STEP 3: Success VIP Card */}
        {step === 3 && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center mx-auto text-accent shadow-xl shadow-accent/20">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase font-disp tracking-[0.3em] text-accent font-bold">
                Priority Allocation
              </span>
              <div className="font-disp font-extrabold text-6xl sm:text-7xl text-white tracking-tight my-2">
                #{waitlistNumber}
              </div>
              <p className="text-white font-body text-sm">
                Congratulations! You are queued in Batch 01 Production.
              </p>
            </div>

            {/* VIP Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-body">
              <div className="flex items-center gap-2 text-white">
                <Check className="w-4 h-4 text-accent shrink-0" />
                <span>Lifetime ₹0 Subscription Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Check className="w-4 h-4 text-accent shrink-0" />
                <span>Complimentary Titanium Weave Strap</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Check className="w-4 h-4 text-accent shrink-0" />
                <span>48h Early Dispatch Access</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Check className="w-4 h-4 text-accent shrink-0" />
                <span>Direct Access to Founder Engineering Q&amp;A</span>
              </div>
            </div>

            {/* Referral sharing */}
            <div className="p-4 rounded-xl bg-black border border-white/10 flex items-center justify-between gap-3 text-xs">
              <span className="text-mute truncate font-mono text-[11px]">
                https://warble.ai/vip?ref=WARBLE-{waitlistNumber}
              </span>
              <button
                onClick={copyReferral}
                className="px-3 py-1.5 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent font-medium flex items-center gap-1.5 transition-colors shrink-0"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="btn-ghost w-full py-3 text-center justify-center text-xs tracking-wider uppercase font-disp"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
