export interface HeroChapter {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  align: 'center' | 'left';
  startRatio: number;
  endRatio: number;
  jumpRatio: number;
}

export const HERO_CHAPTERS: HeroChapter[] = [
  {
    id: 1,
    eyebrow: "",
    title: "Know your\nbody. Fully.",
    description: "A health band engineered in India, from the first trace on the board to the last line of code.",
    align: "center",
    startRatio: 0,
    endRatio: 0.21,
    jumpRatio: 0.05,
  },
  {
    id: 2,
    eyebrow: "",
    title: "Every trace.\nOurs.",
    description: "Designed, routed and assembled by our own team. Nothing off-the-shelf between you and your data.",
    align: "left",
    startRatio: 0.22,
    endRatio: 0.44,
    jumpRatio: 0.26,
  },
  {
    id: 3,
    eyebrow: "Patented. Proprietary. Indian.",
    title: "Made in\nIndia",
    description: "Embedded systems, board design and AI architecture, all protected by our own patents.",
    align: "center",
    startRatio: 0.46,
    endRatio: 0.70,
    jumpRatio: 0.50,
  },
  {
    id: 4,
    eyebrow: "",
    title: "It listens\nto your pulse.",
    description: "Medical-grade optical sensing feeds our proprietary AI, turning raw signal into recovery, strain and sleep insight.",
    align: "left",
    startRatio: 0.72,
    endRatio: 1.01,
    jumpRatio: 0.78,
  },
];

export const STATS = [
  {
    value: "100%",
    label: "Designed in-house: hardware, firmware and AI.",
    detail: "Zero third-party proprietary black boxes.",
  },
  {
    value: "24/7",
    label: "Continuous heart, sleep and strain sensing on the wrist.",
    detail: "Sub-second photoplethysmography sampling.",
  },
  {
    value: "3.0",
    label: "Third-generation Warble AI architecture.",
    detail: "Edge ML inference right on the wrist.",
  },
  {
    value: "IN",
    label: "Patented and built in India.",
    detail: "Engineered in Bangalore & Hyderabad R&D facilities.",
  },
];

export const PILLARS = [
  {
    number: "01",
    title: "Embedded systems",
    tagline: "Ultra-low-power microkernel",
    description: "Low-power firmware written for one job: reading your body accurately, all day without thermal throttling or wake latency.",
    highlights: ["Custom RTOS scheduler", "Microamp standby current", "Over-the-air cryptographically signed updates"],
  },
  {
    number: "02",
    title: "Custom PCB",
    tagline: "High-density 8-layer interconnect",
    description: "Our own board layout keeps the band compact, efficient and tightly integrated with zero wasted millimeters.",
    highlights: ["Sub-millimeter trace routing", "Electro-magnetic shielded sensor cavity", "Rigid-flex biocompatible substrate"],
  },
  {
    number: "03",
    title: "Proprietary AI",
    tagline: "Indian physiological calibration",
    description: "On-device models trained for Indian physiology and lifestyle—from circadian shift to regional dietary metabolic responses.",
    highlights: ["Trained on diverse South Asian biometrics", "Circadian adaptation for late dinner cycles", "Monsoon humidity & heat compensation"],
  },
];

export const BIOMETRIC_MODES = [
  {
    id: 'recovery',
    title: 'Daily Recovery',
    score: '89%',
    status: 'Prime Performance Zone',
    color: '#10b981', // green
    description: 'Calculated using baseline HRV, resting heart rate, respiratory rate, and sleep quality.',
    metrics: [
      { label: 'Heart Rate Variability', value: '72 ms', change: '+14% vs 30-day baseline' },
      { label: 'Resting Heart Rate', value: '51 bpm', change: '-3 bpm optimal' },
      { label: 'Skin Temperature', value: '36.4 °C', change: 'Normal range' },
      { label: 'Blood Oxygen (SpO2)', value: '98.5%', change: 'Steady overnight' },
    ],
    insight: 'Your cardiovascular system is fully recovered. Ideal window for high-intensity training or endurance work today.',
  },
  {
    id: 'strain',
    title: 'Cardiovascular Strain',
    score: '14.8',
    status: 'Optimal Target Met',
    color: '#e8562a', // warble orange
    description: 'Dynamic load calculation balancing cardiovascular exertion and cumulative musculoskeletal stress.',
    metrics: [
      { label: 'Active Caloric Burn', value: '840 kcal', change: '2,420 total daily burn' },
      { label: 'Peak Heart Rate', value: '174 bpm', change: '28 mins in Zone 4/5' },
      { label: 'Cardio Workload', value: '112 min', change: 'Aerobic threshold' },
      { label: 'Muscular Load Index', value: '8.4 / 10', change: 'Moderate tension' },
    ],
    insight: 'You achieved your target strain at 6:45 PM. Cooldown protocol initiated to protect tomorrow morning’s recovery score.',
  },
  {
    id: 'sleep',
    title: 'Sleep Architect',
    score: '93%',
    status: 'Restorative Sleep Cycle',
    color: '#6366f1', // indigo
    description: 'Multi-stage sleep tracking with micro-arousal detection and circadian rhythm alignment.',
    metrics: [
      { label: 'Total Duration', value: '8h 12m', change: 'Time in bed: 8h 35m' },
      { label: 'Deep Sleep', value: '2h 14m', change: '27% of total cycle' },
      { label: 'REM Sleep', value: '1h 55m', change: 'Cognitive restoration' },
      { label: 'Sleep Latency', value: '11 mins', change: 'Immediate sleep onset' },
    ],
    insight: 'Deep sleep phase exceeded your monthly average by 22 minutes. Neuro-muscular repair score is at its highest this week.',
  },
  {
    id: 'indian-ai',
    title: 'Desi Lifestyle Engine',
    score: '98%',
    status: 'Active Localization',
    color: '#f59e0b', // amber
    description: 'Algorithmic models tuned specifically for South Asian diets, spices, and non-Western circadian patterns.',
    metrics: [
      { label: 'Post-Prandial Strain', value: 'Low', change: 'Carb spike buffering' },
      { label: 'Late Dinner Window', value: '9:30 PM', change: 'Digestion delta accounted' },
      { label: 'Thermal Humidity Offset', value: '34°C / 78%', change: 'Sweat rate compensated' },
      { label: 'Caffeine Half-life', value: 'Chai / Coffee', change: 'Metabolic decay curve' },
    ],
    insight: 'Warble AI accounted for your 9:15 PM dinner without penalizing early sleep HRV, distinguishing metabolic digestion from stress.',
  },
];

export const HARDWARE_FEATURES = [
  {
    id: 'sensor',
    name: 'Quad-Wavelength Optical PPG',
    category: 'Optical Architecture',
    detail: 'Green, Red, and Dual-Infrared LEDs coupled with medical-grade photodiodes for sub-millisecond pulse transit time calculation.',
    spec: '100 Hz continuous sampling rate',
  },
  {
    id: 'silicon',
    name: 'Custom Warble Core V3 Processor',
    category: 'Embedded Silicon',
    detail: 'Bespoke ARM Cortex-M33 architecture featuring dedicated Neural Processing Unit (NPU) for on-wrist machine learning inferencing.',
    spec: 'Sub-1.2 mW active power draw',
  },
  {
    id: 'unibody',
    name: 'Grade 5 Titanium & Bio-Ceramic',
    category: 'Chassis & Materials',
    detail: 'Hypoallergenic aerospace titanium bezel paired with diamond-polished medical zirconia ceramic for skin contact.',
    spec: '5 ATM water resistance (50m depth)',
  },
  {
    id: 'battery',
    name: 'Lithium-Silicon Anode Cell',
    category: 'Energy Density',
    detail: 'Next-generation solid-state hybrid battery delivering 5 continuous days of 24/7 telemetry on a single 35-minute quick charge.',
    spec: '120 hours uninterrupted runtime',
  },
];

export const COMPARISONS = [
  {
    feature: 'Monthly Subscription Cost',
    warble: '₹0 / Lifetime Free',
    whoop: '₹2,400+ / month (Mandatory)',
    apple: '₹0 (Watch) / ₹999/mo Fitness+',
    budget: '₹0',
    highlight: true,
  },
  {
    feature: 'Data Privacy & Sovereignty',
    warble: '100% Indian Servers & On-device DPDP Compliant',
    whoop: 'Foreign US Cloud Servers',
    apple: 'Apple Cloud Servers',
    budget: 'Third-party foreign trackers',
    highlight: true,
  },
  {
    feature: 'Engineered for Indian Physiology',
    warble: 'Yes (Custom trained ML models)',
    whoop: 'No (Western baseline)',
    apple: 'Generic Global dataset',
    budget: 'None',
    highlight: true,
  },
  {
    feature: 'Battery Life',
    warble: '5 Days (Continuous 24/7)',
    whoop: '4 - 5 Days',
    apple: '18 - 36 Hours (Daily charge)',
    budget: '3 - 7 Days (Infrequent sensing)',
    highlight: false,
  },
  {
    feature: 'Custom Silicon & In-House PCB',
    warble: '100% Proprietary Indian Silicon & PCB',
    whoop: 'Proprietary Hardware',
    apple: 'Apple S-series',
    budget: 'Generic Off-the-shelf Chinese SoC',
    highlight: true,
  },
  {
    feature: 'Display Distraction',
    warble: 'Zero-Screen Calm Technology',
    whoop: 'Screenless',
    apple: 'Full AMOLED Screen (Notifications)',
    budget: 'Budget LCD / AMOLED',
    highlight: false,
  },
];

export const FAQS = [
  {
    question: "Is there any mandatory monthly subscription fee?",
    answer: "No. Unlike other premium health bands that lock your biometrics behind a ₹2,000–₹3,000 monthly paywall, Warble AI gives you lifetime access to your recovery, strain, sleep analysis, and AI insights with the one-time hardware purchase.",
  },
  {
    question: "Where is my health data stored and processed?",
    answer: "Your privacy is non-negotiable. Warble AI processes core inferencing on-device using our custom silicon. Any synced data is encrypted using AES-256 and stored exclusively on secure Indian data centers complying with India's Digital Personal Data Protection (DPDP) Act.",
  },
  {
    question: "What makes Warble AI specifically tuned for Indian physiology?",
    answer: "Most global wearables calibrate metrics like cardiovascular recovery against Western diets, sleep habits, and temperate climates. Warble AI's neural models account for South Asian dietary glycemic responses, late dinner digestion curves, tropical heat/humidity sweat factors, and regional lifestyle patterns.",
  },
  {
    question: "Can I wear Warble AI while swimming or showering?",
    answer: "Yes. The Warble AI band is rated 5 ATM water-resistant, making it fully submersible up to 50 meters. It is sealed with laser-welded titanium and medical ceramic, perfect for open water, swimming pools, high-intensity sweaty workouts, and showers.",
  },
  {
    question: "How long does the battery last and how does it charge?",
    answer: "Warble AI delivers up to 5 full days (120 hours) of continuous 24/7 continuous health tracking. The band includes our snap-on magnetic fast charger that reaches 80% charge in just 25 minutes, meaning you never miss an overnight sleep reading.",
  },
  {
    question: "When will Pre-order Batch 01 ship?",
    answer: "Batch 01 pre-orders will commence dispatch in Q1 2027. Waitlist members get early access 48 hours before public launch, priority serial numbers, and an exclusive complimentary titanium weave strap.",
  },
];

export const CITIES_INDIA = [
  "Bengaluru",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Kochi",
  "Jaipur",
  "Chandigarh",
  "Indore",
];

