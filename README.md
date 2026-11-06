# Warble AI 3.0 — React Web Experience

A high-performance, modern React application converted from the single-file HTML landing page for **Warble AI 3.0** ("Made in India. Built to know you.").

## 🚀 What Changed & Usability Improvements

The original HTML file (`Warble AI — Made in India. Built to know you.html`) contained raw base64-encoded video data (~1.7 MB) inside a static layout with dead links and passive viewing.

This React version transforms the experience with major usability, performance, and accessibility upgrades:

### 1. **Extracted & Optimized Media Stream**
- Extracted the embedded base64 video into a dedicated `/public/warble-hero.mp4` file.
- Enables standard browser streaming, caching, memory efficiency, and snappy zero-freeze load times.

### 2. **Interactive Hero & Video Reel Controls**
- **Chapter Navigation Pills**: Jump directly to `01 Overview`, `02 Custom Silicon`, `03 Made in India`, or `04 Optical Sensing` without waiting.
- **Scrubber Timeline**: Click anywhere on the progress bar to seek through the video timeline.
- **Playback Controls**: Play/pause toggle, mute/unmute audio control, and live timecode readout (`0:05 / 0:18`).

### 3. **Live Interactive Biometric Engine Simulator**
- Experience real-time biometrics across 4 modes:
  - **Daily Recovery** (HRV, Resting HR, Skin Temperature, SpO2)
  - **Cardiovascular Strain** (Active calories, Heart rate zones, Muscular load)
  - **Sleep Architect** (Deep sleep, REM, latency, restoration score)
  - **Desi Lifestyle Engine** (Calibrated for South Asian diet glycemic curves, late dinner digestion compensation, and monsoon heat)
- Dynamic pulsing PPG/ECG waveform visualizer.
- Scenario toggles: *Baseline Day*, *⚡ High Exertion Workout*, and *🍛 Late Dinner*.

### 4. **Hardware & In-House PCB Teardown Explorer**
- Deep dive into Warble AI's 4 proprietary hardware pillars:
  - Quad-Wavelength Optical PPG Array
  - Custom Warble Core V3 Processor (ARM Cortex-M33 + on-wrist NPU)
  - Grade 5 Aerospace Titanium & Bio-Ceramic Chassis
  - 5-Day Lithium-Silicon Anode Battery
- Live CAD schematic preview and medical device standard certification badges.

### 5. **Direct Competitor Comparison Matrix**
- Clear comparison between Warble AI 3.0, Imported subscription trackers (e.g. Whoop), and Smartwatches (e.g. Apple Watch).
- Highlights the **₹0 lifetime subscription**, **100% Indian DPDP data compliance**, and **5-day battery endurance**.

### 6. **VIP Pre-Order / Waitlist Reservation Flow**
- Interactive 3-step configuration drawer:
  - Finish selection: *Stealth Obsidian*, *Raw Titanium*, *Warble Ember*.
  - Sizing & strap selector: *S/M (135–180mm)* vs *L/XL (175–225mm)*; *SuperKnit* vs *HydroSport*.
  - City quick-selection for Indian tech hubs (Bengaluru, Mumbai, Delhi NCR, Hyderabad, etc.).
  - Instant waitlist spot allocation (`#1,482`), confetti celebration, copyable referral token, and persistent `localStorage` state.

### 7. **Interactive Searchable FAQ**
- Real-time instant search filter across common questions on data privacy, battery life, waterproofing (5 ATM), and shipment dates.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Barlow Condensed & Inter typography
- **Icons**: Lucide React
- **Animations**: CSS keyframes + Canvas Confetti

---

## 💻 Running the Application

### Development Server:
```bash
npm run dev
```
Runs at `http://localhost:3000`.

### Production Build:
```bash
npm run build
```
Creates production-ready bundle in `/dist`.

### Preview Production Build:
```bash
npm run preview
```

