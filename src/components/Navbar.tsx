import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Cpu, 
  Layers, 
  Activity, 
  Box, 
  SlidersHorizontal, 
  MessageSquare 
} from 'lucide-react';

interface NavbarProps {
  onOpenWaitlist?: () => void;
  isEnrolled?: boolean;
  waitlistNumber?: number | null;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems: NavItem[] = [
    {
      id: 'hero',
      label: 'Home',
      href: '#hero',
      icon: <Home className="w-[18px] h-[18px]" />,
    },
    {
      id: 'tech',
      label: 'Technology',
      href: '#tech',
      icon: <Cpu className="w-[18px] h-[18px]" />,
    },
    {
      id: 'pillars',
      label: 'Platform',
      href: '#pillars',
      icon: <Layers className="w-[18px] h-[18px]" />,
    },
    {
      id: 'biometrics',
      label: 'Biometrics',
      href: '#biometrics',
      icon: <Activity className="w-[18px] h-[18px]" />,
    },
    {
      id: 'hardware',
      label: 'Hardware',
      href: '#hardware',
      icon: <Box className="w-[18px] h-[18px]" />,
    },
    {
      id: 'specs',
      label: 'Compare',
      href: '#specs',
      icon: <SlidersHorizontal className="w-[18px] h-[18px]" />,
    },
    {
      id: 'faq',
      label: 'FAQ',
      href: '#faq',
      icon: <MessageSquare className="w-[18px] h-[18px]" />,
    },
  ];

  // Track scroll position to update active dock item automatically
  useEffect(() => {
    const sectionIds = ['hero', 'tech', 'pillars', 'biometrics', 'hardware', 'specs', 'faq'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Top of page is always hero
      if (scrollY < windowHeight * 0.35) {
        setActiveSection('hero');
        return;
      }

      // Check which section is in central view
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.45 && rect.bottom >= windowHeight * 0.2) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    setActiveSection(item.id);
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = navItems.findIndex((item) => item.id === activeSection);

  // Authentic Apple Dock Parabolic Magnification Curve
  const getDockStyle = (index: number) => {
    const isActive = activeIndex === index;

    if (hoveredIndex === null) {
      if (isActive) {
        return {
          transform: 'scale(1.24) translateY(-3px)',
          background: 'rgba(255, 255, 255, 0.22)',
          borderColor: 'rgba(255, 255, 255, 0.32)',
          color: '#ffffff',
          boxShadow: '0 10px 25px -4px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.35)',
          zIndex: 30,
        };
      }
      return {
        transform: 'scale(1) translateY(0px)',
        background: 'rgba(255, 255, 255, 0.06)',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        color: 'rgba(255, 255, 255, 0.72)',
        boxShadow: 'none',
        zIndex: 10,
      };
    }

    const distance = Math.abs(hoveredIndex - index);

    if (distance === 0) {
      // Direct hovered item
      return {
        transform: 'scale(1.36) translateY(-6px)',
        background: 'rgba(255, 255, 255, 0.28)',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        color: '#ffffff',
        boxShadow: '0 14px 30px -4px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.45)',
        zIndex: 40,
      };
    } else if (distance === 1) {
      // Immediate neighbor
      return {
        transform: 'scale(1.15) translateY(-3px)',
        background: 'rgba(255, 255, 255, 0.14)',
        borderColor: 'rgba(255, 255, 255, 0.18)',
        color: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 8px 18px -4px rgba(0, 0, 0, 0.45)',
        zIndex: 20,
      };
    } else {
      // Distant items
      return {
        transform: 'scale(1) translateY(0px)',
        background: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.06)',
        color: 'rgba(255, 255, 255, 0.55)',
        boxShadow: 'none',
        zIndex: 10,
      };
    }
  };

  return (
    <>
      {/* Brand Logo (Pinned to top left, raw image without any frame) */}
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById('hero');
          el?.scrollIntoView({ behavior: 'smooth' });
          setActiveSection('hero');
        }}
        className="fixed top-5 sm:top-6 left-4 sm:left-6 z-40 inline-flex items-center justify-center cursor-pointer select-none transition-opacity duration-200 hover:opacity-80"
        aria-label="Warble AI"
      >
        <img
          src="/logo.jpg"
          alt="Warble AI Logo"
          className="h-8 sm:h-10 w-auto object-contain"
        />
      </a>

      {/* Center-Aligned Apple Transparent Glass Dock */}
      <header className="fixed top-5 sm:top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <nav
          className="relative flex items-center gap-1.5 sm:gap-2.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-2xl sm:rounded-3xl border border-white/15 bg-neutral-900/40 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.18)] max-w-[96vw]"
          role="navigation"
          aria-label="Apple Glass Dock"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, index) => {
            const style = getDockStyle(index);

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center justify-center"
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  aria-label={item.label}
                  style={{
                    transform: style.transform,
                    backgroundColor: style.background,
                    borderColor: style.borderColor,
                    color: style.color,
                    boxShadow: style.boxShadow,
                    zIndex: style.zIndex,
                    transition: 'transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.25s ease, box-shadow 0.28s ease, border-color 0.25s ease',
                    willChange: 'transform',
                  }}
                  className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center cursor-pointer select-none"
                >
                  {/* Subtle active pulse border for current section */}
                  {activeIndex === index && hoveredIndex === null && (
                    <span className="absolute inset-0 rounded-full border border-accent/40 pointer-events-none animate-pulse"></span>
                  )}

                  {/* Icon */}
                  <span className="transition-transform duration-200">
                    {item.icon}
                  </span>
                </a>
              </div>
            );
          })}
        </nav>
      </header>
    </>
  );
};
