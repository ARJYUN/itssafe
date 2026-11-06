import React, { useRef, useState, useEffect, useCallback } from 'react';

interface HeroSectionProps {
  onOpenWaitlist?: () => void;
}

interface ChapterData {
  id: number;
  title: string;
  description: string;
  fadeInAt: number;   // ratio when text begins gliding in
  fadeOutAt: number;  // ratio when text begins fading out
}

const CHAPTERS: ChapterData[] = [
  {
    id: 1,
    title: "Know your\nbody. Fully.",
    description: "A health band engineered in India, from the first trace on the board to the last line of code.",
    fadeInAt: 0.0,
    fadeOutAt: 0.17,
  },
  {
    id: 2,
    title: "Every trace.\nOurs.",
    description: "Designed, routed and assembled by our own team. Nothing off-the-shelf between you and your data.",
    fadeInAt: 0.23,
    fadeOutAt: 0.40,
  },
  {
    id: 3,
    title: "Made in\nIndia",
    description: "Embedded systems, board design and AI architecture, all protected by our own patents.",
    fadeInAt: 0.47,
    fadeOutAt: 0.65,
  },
  {
    id: 4,
    title: "It listens\nto your pulse.",
    description: "Medical-grade optical sensing feeds our proprietary AI, turning raw signal into recovery, strain and sleep insight.",
    fadeInAt: 0.73,
    fadeOutAt: 0.94,
  },
];

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [phase, setPhase] = useState<'visible' | 'exiting' | 'gone'>('visible');
  const phaseRef = useRef<'visible' | 'exiting' | 'gone'>('visible');
  phaseRef.current = phase;

  // Sync video time to manage sequential fade-out -> blank buffer -> fade-in
  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;
    const dur = videoRef.current.duration || 18.4;
    const current = videoRef.current.currentTime;
    const ratio = current / dur;

    // Check which chapter window we are in
    const activeIdx = CHAPTERS.findIndex(
      (c) => ratio >= c.fadeInAt && ratio < c.fadeOutAt
    );

    if (activeIdx !== -1) {
      // We are in an active visible window
      if (displayedIndex !== activeIdx || phaseRef.current !== 'visible') {
        setDisplayedIndex(activeIdx);
        setPhase('visible');
      }
    } else {
      // We are in a transition / blank buffer between chapters
      if (phaseRef.current === 'visible') {
        // Trigger smooth fade out
        setPhase('exiting');
        setTimeout(() => {
          setPhase('gone'); // Reposition invisibly below once completely gone
        }, 550);
      }
    }
  }, [displayedIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener('timeupdate', handleTimeUpdate);

    // Auto-play attempt
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [handleTimeUpdate]);

  const currentChapter = CHAPTERS[displayedIndex] || CHAPTERS[0];

  // Dynamic styles for the sequential two-phase animation
  let styleTransform = 'translateY(0px)';
  let styleOpacity = 1;
  let styleTransition = 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)';

  if (phase === 'exiting') {
    // Current text smoothly floats up and fades to 0
    styleTransform = 'translateY(-18px)';
    styleOpacity = 0;
    styleTransition = 'opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
  } else if (phase === 'gone') {
    // Completely gone: pre-position invisibly below with zero transition
    styleTransform = 'translateY(24px)';
    styleOpacity = 0;
    styleTransition = 'none';
  }

  return (
    <header id="hero" className="relative w-full min-h-screen h-screen overflow-hidden bg-black select-none">
      {/* Video Background with Mask */}
      <div className="hero-stage absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-700"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/warble-hero.mp4"
        />
      </div>

      {/* Fixed Bottom-Left Chapter Text Overlay */}
      <div className="absolute z-10 left-6 sm:left-12 lg:left-16 bottom-10 sm:bottom-14 max-w-2xl sm:max-w-3xl text-left pointer-events-none">
        <div
          style={{
            transform: styleTransform,
            opacity: styleOpacity,
            transition: styleTransition,
            willChange: 'transform, opacity',
          }}
          className="text-left"
        >
          <h1 className="font-disp font-extrabold uppercase leading-[0.88] tracking-[-0.01em] text-5xl sm:text-7xl md:text-8xl lg:text-[104px] text-white whitespace-pre-line drop-shadow-2xl">
            {currentChapter.title}
          </h1>

          <p className="mt-4 sm:mt-5 text-[#c9c9ce] text-base sm:text-lg md:text-xl font-body leading-relaxed max-w-xl text-left">
            {currentChapter.description}
          </p>
        </div>
      </div>

      {/* Fixed Bottom-Right Brand Text */}
      <div className="absolute z-10 right-6 sm:right-12 lg:right-16 bottom-10 sm:bottom-14 pointer-events-none text-right">
        <span className="font-disp font-extrabold uppercase tracking-[0.18em] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-2xl select-none">
          WARBLE AI
        </span>
      </div>
    </header>
  );
};
