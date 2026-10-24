/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  Calendar,
  Sparkle,
  Layers,
  HeartHandshake
} from 'lucide-react';

/* ==========================================================================
   BUSINESS DETAILS & EDITABLE CONFIGURATION
   Edit your business information, services, and operating hours here.
   ========================================================================== */

export const BUSINESS_INFO = {
  name: "CitruSolution of Middle Tennessee",
  shortName: "CitruSolution",
  subTitle: "OF MIDDLE TENNESSEE",
  phoneDisplay: "+1 (629) 772-9670",
  phoneRaw: "+16297729670",
  address: "713 Overton Park, Nashville, TN 37215, United States",
  addressShort: "713 Overton Park, Nashville, TN 37215",
  mapsUrl: "https://maps.google.com/?q=713+Overton+Park,+Nashville,+TN+37215",
  serviceArea: "Nashville and Middle Tennessee",
  timeZone: "America/Chicago", // Central Time (Nashville, TN)
};

/**
 * EDITABLE SERVICES LIST
 * Easily modify title, description, or badges below.
 */
export const SERVICES_DATA = [
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    description: "Deep cleaning that lifts dirt, dust, and allergens from your carpets",
    tag: "Most Popular",
    iconType: "carpet",
  },
  {
    id: "pet-stain-odor",
    title: "Pet Stain & Odor Removal",
    description: "Targeted treatment for stubborn stains and lingering smells",
    tag: "Odor Neutralizer",
    iconType: "paw",
  },
  {
    id: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    description: "Refresh sofas, chairs, and cushions",
    tag: "Fabric Safe",
    iconType: "sofa",
  },
  {
    id: "area-rug-cleaning",
    title: "Area Rug Cleaning",
    description: "Gentle, effective cleaning for rugs of all sizes",
    tag: "Delicate Care",
    iconType: "rug",
  },
];

/**
 * EDITABLE OPERATING HOURS
 * Standard schedule: Monday to Friday: 9 AM to 4 PM, Saturday & Sunday: Closed
 */
export const BUSINESS_HOURS = [
  { dayIndex: 1, dayName: "Monday", hours: "9:00 AM – 4:00 PM", isOpenDay: true, openHour: 9, closeHour: 16 },
  { dayIndex: 2, dayName: "Tuesday", hours: "9:00 AM – 4:00 PM", isOpenDay: true, openHour: 9, closeHour: 16 },
  { dayIndex: 3, dayName: "Wednesday", hours: "9:00 AM – 4:00 PM", isOpenDay: true, openHour: 9, closeHour: 16 },
  { dayIndex: 4, dayName: "Thursday", hours: "9:00 AM – 4:00 PM", isOpenDay: true, openHour: 9, closeHour: 16 },
  { dayIndex: 5, dayName: "Friday", hours: "9:00 AM – 4:00 PM", isOpenDay: true, openHour: 9, closeHour: 16 },
  { dayIndex: 6, dayName: "Saturday", hours: "Closed", isOpenDay: false, openHour: 0, closeHour: 0 },
  { dayIndex: 0, dayName: "Sunday", hours: "Closed", isOpenDay: false, openHour: 0, closeHour: 0 },
];

/**
 * WHY CHOOSE CITRUSOLUTION STRIP POINTS
 */
export const WHY_CHOOSE_POINTS = [
  {
    title: "Locally Owned in Middle Tennessee",
    desc: "Proud neighbor serving Nashville families & businesses with authentic local care.",
  },
  {
    title: "Fresh & Effective Cleaning",
    desc: "Citrus-based formula cuts through grime without soap residue or harsh fumes.",
  },
  {
    title: "Careful With Your Home",
    desc: "Respectful technicians, corner guards, and fast drying times for zero hassle.",
  },
  {
    title: "Free Quotes",
    desc: "Straightforward, transparent pricing with no hidden surcharges or surprise fees.",
  },
];

/* ==========================================================================
   SVG CITRUS GRAPHICS & LOGO COMPONENTS
   ========================================================================== */

/**
 * Distinctive Citrus Slice + Green Leaf Logo Icon
 */
function CitrusLogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:rotate-12"
      >
        {/* Fresh Lime-Green Leaf on top */}
        <path
          d="M62 18 C78 12, 88 24, 82 38 C68 44, 58 32, 62 18 Z"
          fill="#7AB929"
        />
        <path
          d="M62 20 C68 28, 76 33, 82 38"
          stroke="#5A9A12"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Outer Citrus Rind */}
        <circle cx="50" cy="54" r="40" fill="#F28C1B" />
        {/* Inner White Pith */}
        <circle cx="50" cy="54" r="34" fill="#FFFDF8" />
        {/* Core background for slices */}
        <circle cx="50" cy="54" r="31" fill="#FFF1DD" />

        {/* Citrus Triangular Segments with rounded corners */}
        {/* 8 juice pulp segments */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 50 54)`}>
            <path
              d="M48 50 C44 42, 38 34, 44 28 C47 25, 53 25, 56 28 C62 34, 56 42, 52 50 Z"
              fill="#F28C1B"
              opacity="0.95"
            />
          </g>
        ))}

        {/* Center hub */}
        <circle cx="50" cy="54" r="4.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

/**
 * Decorative Floating Citrus Slice Accent
 */
function CitrusSliceDeco({ className = "w-32 h-32 opacity-25" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="54" stroke="#F28C1B" strokeWidth="8" fill="#FFF8EE" />
      <circle cx="60" cy="60" r="46" stroke="#FFFFFF" strokeWidth="4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, idx) => (
        <path
          key={idx}
          d="M60 60 L60 16"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          transform={`rotate(${deg} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="7" fill="#FFFFFF" />
      {/* Decorative leaf */}
      <path
        d="M75 14 C90 8, 100 20, 95 32 C84 36, 74 26, 75 14 Z"
        fill="#7AB929"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * Custom line icons for services
 */
function ServiceLineIcon({ type }: { type: string }) {
  if (type === 'carpet') {
    return (
      <div className="w-14 h-14 rounded-2xl bg-[#FFF1DD] flex items-center justify-center text-[#D4710A] group-hover:bg-[#F28C1B] group-hover:text-white transition-all duration-300">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Carpet layers & vacuum clean lines */}
          <path d="M3 6h18M3 18h18" />
          <path d="M5 6v12M19 6v12" />
          <path d="M8 9l4 6 4-6" />
          <circle cx="12" cy="12" r="1.5" />
          <path d="M3 10h2M19 10h2M3 14h2M19 14h2" />
        </svg>
      </div>
    );
  }
  if (type === 'paw') {
    return (
      <div className="w-14 h-14 rounded-2xl bg-[#EAF5DC] flex items-center justify-center text-[#5A9A12] group-hover:bg-[#7AB929] group-hover:text-white transition-all duration-300">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Paw print motif */}
          <circle cx="7" cy="8.5" r="2" />
          <circle cx="17" cy="8.5" r="2" />
          <circle cx="10" cy="5" r="1.8" />
          <circle cx="14" cy="5" r="1.8" />
          <path d="M12 11c-2.8 0-5 2-5 4.5 0 2 1.8 3.5 5 3.5s5-1.5 5-3.5c0-2.5-2.2-4.5-5-4.5z" />
        </svg>
      </div>
    );
  }
  if (type === 'sofa') {
    return (
      <div className="w-14 h-14 rounded-2xl bg-[#FFF1DD] flex items-center justify-center text-[#D4710A] group-hover:bg-[#F28C1B] group-hover:text-white transition-all duration-300">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Sofa/couch icon */}
          <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
          <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
          <path d="M4 18v2M20 18v2M8 11v3M16 11v3" />
        </svg>
      </div>
    );
  }
  // Area rug icon
  return (
    <div className="w-14 h-14 rounded-2xl bg-[#EAF5DC] flex items-center justify-center text-[#5A9A12] group-hover:bg-[#7AB929] group-hover:text-white transition-all duration-300">
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Decorative rug with fringe */}
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M5 8h14M5 16h14" />
        <path d="M2 5h3M2 19h3M19 5h3M19 19h3" />
        <path d="M9 12h6" />
      </svg>
    </div>
  );
}

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0].title);
  
  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES_DATA[0].title,
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Live Open / Closed indicator based on visitor local time compared against Central Time
  const [statusInfo, setStatusInfo] = useState<{
    isOpen: boolean;
    label: string;
    subLabel: string;
    todayIndex: number;
  }>({
    isOpen: false,
    label: 'Checking status...',
    subLabel: 'Hours: Mon-Fri 9 AM - 4 PM CT',
    todayIndex: 1,
  });

  // Calculate live hours against Nashville Central Time
  useEffect(() => {
    const checkBusinessStatus = () => {
      try {
        const now = new Date();
        // Extract Nashville (America/Chicago) day and time components
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: BUSINESS_INFO.timeZone,
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        });
        const parts = formatter.formatToParts(now);
        let weekdayStr = '';
        let hour = 0;
        let minute = 0;

        for (const p of parts) {
          if (p.type === 'weekday') weekdayStr = p.value;
          if (p.type === 'hour') hour = parseInt(p.value, 10);
          if (p.type === 'minute') minute = parseInt(p.value, 10);
        }

        const dayMap: { [k: string]: number } = {
          Sun: 0,
          Mon: 1,
          Tue: 2,
          Wed: 3,
          Thu: 4,
          Fri: 5,
          Sat: 6,
        };
        const currentDayIndex = dayMap[weekdayStr] ?? now.getDay();
        const currentDecimalHour = hour + minute / 60;

        // Check against Monday (1) to Friday (5), 9:00 AM (9.0) to 4:00 PM (16.0)
        const isWeekday = currentDayIndex >= 1 && currentDayIndex <= 5;
        const isDuringHours = currentDecimalHour >= 9.0 && currentDecimalHour < 16.0;

        if (isWeekday && isDuringHours) {
          setStatusInfo({
            isOpen: true,
            label: "Open Now",
            subLabel: "Closes today at 4:00 PM Central",
            todayIndex: currentDayIndex,
          });
        } else {
          let nextOpenText = "Opens Monday at 9:00 AM Central";
          if (currentDayIndex >= 1 && currentDayIndex <= 4) {
            if (currentDecimalHour < 9.0) {
              nextOpenText = "Opens today at 9:00 AM Central";
            } else {
              nextOpenText = "Opens tomorrow at 9:00 AM Central";
            }
          } else if (currentDayIndex === 5 && currentDecimalHour < 9.0) {
            nextOpenText = "Opens today at 9:00 AM Central";
          }

          setStatusInfo({
            isOpen: false,
            label: "Closed Now",
            subLabel: nextOpenText,
            todayIndex: currentDayIndex,
          });
        }
      } catch (e) {
        // Fallback gracefully
        setStatusInfo({
          isOpen: false,
          label: "Mon–Fri 9 AM – 4 PM",
          subLabel: "Nashville & Middle Tennessee",
          todayIndex: 1,
        });
      }
    };

    checkBusinessStatus();
    const interval = setInterval(checkBusinessStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please provide a valid phone number for quote follow-up.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormError('');
    setFormSubmitted(true);
  };

  const handleServiceSelectAndScroll = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2B2622] flex flex-col font-sans selection:bg-[#F28C1B]/20 selection:text-[#2B2622]">
      
      {/* ====================================================================
          1. STICKY HEADER (White)
          ==================================================================== */}
      {/* ====================================================================
          1. STICKY HEADER (White)
          Responsive across mobile phones, tablets, and desktop
          ==================================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#2B2622]/10 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
            
            {/* Logo: Round citrus slice icon + CitruSolution in bold charcoal + OF MIDDLE TENNESSEE */}
            <a
              href="#"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#F28C1B] rounded-xl p-1 shrink-0"
              aria-label="CitruSolution of Middle Tennessee Home"
            >
              <CitrusLogoIcon className="w-9 h-9 sm:w-11 sm:h-11" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-[#2B2622] leading-none group-hover:text-[#D4710A] transition-colors">
                  {BUSINESS_INFO.shortName}
                </span>
                <span className="text-[9px] sm:text-[11px] font-bold tracking-widest text-[#F28C1B] uppercase mt-0.5">
                  {BUSINESS_INFO.subTitle}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (visible on lg: screens to keep tablets uncluttered) */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#services"
                className="text-base font-semibold text-[#2B2622]/80 hover:text-[#D4710A] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-base font-semibold text-[#2B2622]/80 hover:text-[#D4710A] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-base font-semibold text-[#2B2622]/80 hover:text-[#D4710A] transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Call Now button in header - Responsive text for mobile, tablet, and desktop */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#F28C1B] hover:bg-[#D4710A] active:bg-[#D4710A] text-[#2B2622] hover:text-white px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm lg:text-base shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] shrink-0 whitespace-nowrap"
                aria-label={`Call ${BUSINESS_INFO.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#2B2622] group-hover:text-white" />
                {/* On small mobile: concise Call Now */}
                <span className="inline sm:hidden font-extrabold">Call Now</span>
                {/* On tablet: phone number */}
                <span className="hidden sm:inline lg:hidden font-extrabold tracking-tight">
                  {BUSINESS_INFO.phoneDisplay}
                </span>
                {/* On desktop: full call label */}
                <span className="hidden lg:inline font-extrabold tracking-tight">
                  Call Now: {BUSINESS_INFO.phoneDisplay}
                </span>
              </a>

              {/* Mobile & Tablet Hamburger Button: visible on < lg */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl text-[#2B2622] hover:bg-[#FFF8EE] focus:outline-none focus:ring-2 focus:ring-[#F28C1B] shrink-0 active:bg-[#FFF1DD]"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Collapsible Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#2B2622]/10 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-base font-bold text-[#2B2622] hover:bg-[#FFF8EE] hover:text-[#D4710A] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-base font-bold text-[#2B2622] hover:bg-[#FFF8EE] hover:text-[#D4710A] transition-colors"
              >
                About CitruSolution
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-base font-bold text-[#2B2622] hover:bg-[#FFF8EE] hover:text-[#D4710A] transition-colors"
              >
                Hours & Contact
              </a>
            </div>

            <div className="pt-3 border-t border-[#2B2622]/10 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#2B2622]/70">
                <span className={`w-2.5 h-2.5 rounded-full ${statusInfo.isOpen ? 'bg-[#7AB929]' : 'bg-[#D4710A]'}`} />
                {statusInfo.label} • {statusInfo.subLabel}
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full text-center bg-[#F28C1B] hover:bg-[#D4710A] text-[#2B2622] hover:text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ====================================================================
          2. HERO SECTION
          Soft cream-to-white gradient, decorative citrus slice, headline,
          subheadline, Open/Closed indicator, two buttons
          ==================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF8EE] via-[#FFFBF5] to-white pt-10 sm:pt-16 pb-16 lg:pb-24">
        {/* Decorative background citrus accents */}
        <div className="absolute top-10 right-4 lg:right-16 pointer-events-none opacity-20 lg:opacity-35">
          <CitrusSliceDeco className="w-48 h-48 sm:w-72 sm:h-72 citrus-glow-effect text-[#F28C1B]" />
        </div>
        <div className="absolute -bottom-8 left-[-2rem] pointer-events-none opacity-15">
          <CitrusSliceDeco className="w-40 h-40 text-[#7AB929]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Status Pill: Open Now / Closed Now */}
              <div className="inline-flex items-center gap-2.5 bg-white border border-[#2B2622]/10 shadow-xs px-3.5 py-1.5 rounded-full">
                <span className="relative flex h-3 w-3">
                  {statusInfo.isOpen ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7AB929] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7AB929]"></span>
                    </>
                  ) : (
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4710A]"></span>
                  )}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#2B2622]">
                  {statusInfo.label}
                </span>
                <span className="text-xs text-[#2B2622]/60 hidden sm:inline">•</span>
                <span className="text-xs text-[#2B2622]/70 font-medium hidden sm:inline">
                  {statusInfo.subLabel}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2622] tracking-tight leading-[1.12]">
                Fresh, Clean Carpets, <br className="hidden sm:inline" />
                <span className="text-[#D4710A]">Naturally Bright.</span>
              </h1>

              {/* Subheadline with required wording */}
              <p className="text-lg sm:text-xl text-[#2B2622]/80 leading-relaxed max-w-2xl font-normal">
                Professional carpet cleaning in Nashville and Middle Tennessee. Open Monday to Friday, 9 AM to 4 PM.
              </p>

              {/* Action Buttons: Solid Orange + Outlined Orange */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {/* Button 1: Solid Orange */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#F28C1B] hover:bg-[#D4710A] text-[#2B2622] hover:text-white px-7 py-4 rounded-xl font-extrabold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] text-center"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>

                {/* Button 2: Outlined Orange */}
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#F28C1B] text-[#D4710A] hover:bg-[#FFF1DD] px-7 py-4 rounded-xl font-extrabold text-base sm:text-lg transition-all duration-200 text-center"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </a>
              </div>

              {/* Highlights Micro-bar */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#2B2622]/10 max-w-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#7AB929]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#2B2622]/80">Citrus Natural</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#7AB929]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#2B2622]/80">Faster Dry Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#7AB929]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#2B2622]/80">Zero Sticky Soap</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card with Clean Living Room & Citrus Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1000&q=80"
                  alt="Bright, clean living room with pristine carpets and warm natural sunlight"
                  className="w-full h-72 sm:h-96 object-cover"
                  loading="eager"
                />
                
                {/* Floating Citrus Benefit Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#2B2622]/5 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF1DD] flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-[#D4710A]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#2B2622] leading-tight">
                      Nashville's Fresh Alternative
                    </h2>
                    <p className="text-xs text-[#2B2622]/70 mt-0.5">
                      Powered by natural citrus extracts for spotless, odor-free carpets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Gentle Curved Wave Divider into Section 3 */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-8 sm:h-12 text-white fill-current"
          >
            <path d="M0,0 C300,90 600,20 1200,80 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ====================================================================
          3. SERVICES + ABOUT SECTION
          4 attractive cards with line icons, title, one-line description
          Underneath: "Why Choose CitruSolution" strip with 4 check-icon points
          ==================================================================== */}
      <section id="services" className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#7AB929] uppercase bg-[#EAF5DC] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Specialized Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2622] tracking-tight">
              Our Professional Cleaning Services
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2B2622]/70">
              Middle Tennessee homeowners trust our gentle, citrus-based cleaning to lift heavy soil, stains, and pet odors without harsh chemicals.
            </p>
          </div>

          {/* 4 Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="group relative bg-[#FFF8EE]/60 hover:bg-[#FFF8EE] rounded-2xl p-7 border border-[#2B2622]/5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Line Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <ServiceLineIcon type={service.iconType} />
                    <span className="text-[11px] font-bold text-[#5A9A12] bg-[#EAF5DC] px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-[#2B2622] mb-2.5 group-hover:text-[#D4710A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#2B2622]/75 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Quick Select CTA */}
                <div className="pt-6 mt-6 border-t border-[#2B2622]/5">
                  <button
                    type="button"
                    onClick={() => handleServiceSelectAndScroll(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4710A] hover:text-[#2B2622] transition-colors"
                  >
                    Select & Request Quote
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* "Why Choose CitruSolution" Strip (About) */}
          <div id="about" className="mt-20 pt-16 border-t border-[#2B2622]/10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#F28C1B] uppercase bg-[#FFF1DD] px-3.5 py-1.5 rounded-full inline-block mb-3">
                The Natural Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B2622] tracking-tight">
                Why Choose CitruSolution
              </h2>
              <p className="text-sm sm:text-base text-[#2B2622]/70 mt-2">
                We combine the natural cleaning power of citrus with honest craftsmanship and local Middle Tennessee values.
              </p>
            </div>

            {/* 4 Check-Icon Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_CHOOSE_POINTS.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#2B2622]/8 shadow-xs flex items-start gap-4 hover:border-[#7AB929]/40 transition-colors"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#EAF5DC] flex items-center justify-center text-[#5A9A12] mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#2B2622] mb-1">
                      {point.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#2B2622]/70 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Banner Box */}
            <div className="mt-12 bg-gradient-to-r from-[#FFF8EE] to-[#FFF1DD] rounded-2xl p-6 sm:p-8 border border-[#F28C1B]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-7 h-7 text-[#7AB929]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2B2622]">
                    No Soap Scum, No Lingering Chemical Odors
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2B2622]/70">
                    Traditional shampooers leave behind sticky soap that attracts dirt. Our citrus solution cleans thoroughly and stays clean longer.
                  </p>
                </div>
              </div>
              <a
                href="#quote"
                className="shrink-0 bg-[#2B2622] hover:bg-[#D4710A] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-sm"
              >
                Get Free Estimate
              </a>
            </div>

          </div>

        </div>

        {/* Gentle Wave Divider into Section 4 */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-8 sm:h-12 text-[#FFF8EE] fill-current"
          >
            <path d="M0,0 C300,70 600,10 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ====================================================================
          4. CONTACT + FOOTER
          "Ready for Fresh Carpets?" split in two columns:
          - Left: Contact Form (Name, Phone, Email, Service dropdown, Message)
          - Right: Address, Clickable phone, Weekly Hours Table with highlighted
            current day, embedded Google Map iframe
          - Below: Slim dark charcoal footer
          ==================================================================== */}
      <section id="contact" className="py-16 sm:py-24 bg-[#FFF8EE] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14" id="quote">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#D4710A] uppercase bg-[#FFF1DD] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2622] tracking-tight">
              Ready for Fresh Carpets?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2B2622]/70">
              Request your free, straightforward quote online or call us directly. We’re here to make your home look and smell fresh.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-7 sm:p-9 shadow-sm border border-[#2B2622]/8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#2B2622]">
                  Request a Free Quote
                </h3>
                <p className="text-sm text-[#2B2622]/70 mt-1">
                  Fill out the form below and our team will get in touch promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-[#EAF5DC] border border-[#7AB929]/30 rounded-2xl p-6 sm:p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#7AB929] text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#2B2622]">
                    Thank You, {formData.name || 'Friend'}!
                  </h4>
                  <p className="text-sm text-[#2B2622]/80 leading-relaxed max-w-sm mx-auto">
                    We've received your request for <strong>{formData.service}</strong>. We will review your details and contact you at <strong>{formData.phone}</strong> with your personalized quote.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          service: SERVICES_DATA[0].title,
                          message: '',
                        });
                      }}
                      className="text-xs font-bold text-[#5A9A12] hover:text-[#2B2622] underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {formError && (
                    <div className="bg-red-50 text-red-700 text-sm font-semibold p-3.5 rounded-xl border border-red-200">
                      {formError}
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#2B2622] uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-[#D4710A]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g., Sarah Johnson"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#2B2622]/15 focus:outline-none focus:ring-2 focus:ring-[#F28C1B] focus:border-transparent text-sm text-[#2B2622] placeholder-[#2B2622]/40 bg-[#FFFDF8]"
                    />
                  </div>

                  {/* Phone and Email in two columns on larger screens */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#2B2622] uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-[#D4710A]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="(615) 555-0199"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#2B2622]/15 focus:outline-none focus:ring-2 focus:ring-[#F28C1B] focus:border-transparent text-sm text-[#2B2622] placeholder-[#2B2622]/40 bg-[#FFFDF8]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#2B2622] uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-[#D4710A]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#2B2622]/15 focus:outline-none focus:ring-2 focus:ring-[#F28C1B] focus:border-transparent text-sm text-[#2B2622] placeholder-[#2B2622]/40 bg-[#FFFDF8]"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-[#2B2622] uppercase tracking-wider mb-1.5">
                      Service Requested
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#2B2622]/15 focus:outline-none focus:ring-2 focus:ring-[#F28C1B] focus:border-transparent text-sm text-[#2B2622] bg-[#FFFDF8]"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#2B2622] uppercase tracking-wider mb-1.5">
                      Notes or Room Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="e.g., 3 bedrooms + living room carpet, hallway runner..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#2B2622]/15 focus:outline-none focus:ring-2 focus:ring-[#F28C1B] focus:border-transparent text-sm text-[#2B2622] placeholder-[#2B2622]/40 bg-[#FFFDF8] resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button: Outlined / Solid high contrast */}
                  <button
                    type="submit"
                    className="w-full bg-[#F28C1B] hover:bg-[#D4710A] text-[#2B2622] hover:text-white py-3.5 px-6 rounded-xl font-extrabold text-base transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    Request Free Quote
                  </button>
                  <p className="text-[11px] text-center text-[#2B2622]/60 pt-1">
                    No spam ever. We only contact you regarding your requested quote.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Address, Phone, Hours Table, and Map */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Contact Information Card */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#2B2622]/8 space-y-5">
                <h3 className="text-xl font-bold text-[#2B2622] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D4710A]" />
                  CitruSolution Nashville Office
                </h3>

                {/* Clickable Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF1DD] flex items-center justify-center shrink-0 text-[#D4710A] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2B2622]/50 uppercase tracking-wider block">
                      Address
                    </span>
                    <a
                      href={BUSINESS_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-[#2B2622] hover:text-[#D4710A] transition-colors leading-snug block mt-0.5"
                    >
                      {BUSINESS_INFO.address}
                    </a>
                    <span className="text-xs text-[#7AB929] font-semibold mt-1 inline-block">
                      Click to open in Google Maps &rarr;
                    </span>
                  </div>
                </div>

                {/* Clickable Phone */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#2B2622]/5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF5DC] flex items-center justify-center shrink-0 text-[#5A9A12] mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2B2622]/50 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-bold text-[#2B2622] hover:text-[#D4710A] transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <span className="text-xs text-[#2B2622]/60">
                      Service Area: {BUSINESS_INFO.serviceArea}
                    </span>
                  </div>
                </div>
              </div>

              {/* Weekly Hours Table with Today's Row Highlighted */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#2B2622]/8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#D4710A]" />
                    <h4 className="text-lg font-bold text-[#2B2622]">
                      Weekly Hours
                    </h4>
                  </div>
                  {/* Current Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${
                      statusInfo.isOpen
                        ? 'bg-[#EAF5DC] text-[#5A9A12]'
                        : 'bg-[#FFF1DD] text-[#D4710A]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        statusInfo.isOpen ? 'bg-[#7AB929]' : 'bg-[#D4710A]'
                      }`}
                    />
                    {statusInfo.isOpen ? 'Open Now' : 'Closed Now'}
                  </span>
                </div>

                {/* Hours Table */}
                <div className="overflow-hidden rounded-xl border border-[#2B2622]/10">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody className="divide-y divide-[#2B2622]/10">
                      {BUSINESS_HOURS.map((schedule) => {
                        const isToday = schedule.dayIndex === statusInfo.todayIndex;
                        return (
                          <tr
                            key={schedule.dayName}
                            className={`transition-colors ${
                              isToday
                                ? 'bg-[#FFF1DD]/70 font-bold text-[#2B2622]'
                                : 'hover:bg-[#FFF8EE]/50 text-[#2B2622]/80'
                            }`}
                          >
                            <td className="py-2.5 px-3.5 flex items-center gap-2">
                              <span>{schedule.dayName}</span>
                              {isToday && (
                                <span className="text-[10px] uppercase font-extrabold bg-[#F28C1B] text-[#2B2622] px-1.5 py-0.5 rounded">
                                  Today
                                </span>
                              )}
                            </td>
                            <td className="py-2.5 px-3.5 text-right font-medium">
                              {schedule.hours}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-[#2B2622]/60 mt-3 text-right">
                  All hours in Central Time (Nashville, TN)
                </p>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#2B2622]/8">
                <iframe
                  title="CitruSolution of Middle Tennessee Location"
                  src="https://maps.google.com/maps?q=713%20Overton%20Park,%20Nashville,%20TN%2037215&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  className="w-full h-56 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Map showing 713 Overton Park, Nashville, TN 37215"
                ></iframe>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          SLIM DARK CHARCOAL FOOTER (#2B2622)
          Logo, business name, address, phone, and copyright
          ==================================================================== */}
      {/* ====================================================================
          SLIM DARK CHARCOAL FOOTER (#2B2622)
          Logo, business name, address, phone, and copyright
          ==================================================================== */}
      <footer className="bg-[#2B2622] text-white pt-12 pb-28 sm:pb-24 lg:pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
            {/* Logo and Name */}
            <div className="flex items-center gap-3">
              <CitrusLogoIcon className="w-10 h-10" />
              <div>
                <div className="text-xl font-bold tracking-tight text-white leading-none">
                  {BUSINESS_INFO.shortName}
                </div>
                <div className="text-[10px] font-bold tracking-widest text-[#F28C1B] uppercase mt-1">
                  {BUSINESS_INFO.subTitle}
                </div>
              </div>
            </div>

            {/* Address & Phone Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left text-xs sm:text-sm text-white/80">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F28C1B] transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-[#F28C1B] shrink-0" />
                {BUSINESS_INFO.addressShort}
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="hover:text-[#F28C1B] transition-colors font-semibold flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#7AB929] shrink-0" />
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <p>
              Natural citrus carpet, rug & upholstery cleaning across Nashville, Brentwood, Franklin & Middle TN.
            </p>
          </div>

        </div>
      </footer>

      {/* ====================================================================
          RESPONSIVE STICKY FLOATING CALL BUTTON (Mobile & Tablet)
          Fully responsive and touch-optimized on all mobile phones & tablets (< 1024px)
          ==================================================================== */}
      <div className="lg:hidden fixed bottom-4 inset-x-3 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 pointer-events-none flex justify-center sm:justify-end">
        <div className="pointer-events-auto w-full max-w-sm sm:max-w-none shadow-2xl rounded-2xl bg-[#2B2622]/95 backdrop-blur-md p-1.5 border border-[#F28C1B]/50 flex items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 bg-[#F28C1B] hover:bg-[#D4710A] active:bg-[#D4710A] text-[#2B2622] font-black px-4 sm:px-6 py-3 rounded-xl transition-all duration-200 text-center active:scale-[0.98] shadow-md"
            aria-label={`Call CitruSolution at ${BUSINESS_INFO.phoneDisplay}`}
          >
            <span className="relative flex h-4 w-4 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2B2622] opacity-30"></span>
              <Phone className="relative inline-flex w-4 h-4 text-[#2B2622] fill-current" />
            </span>
            <span className="text-sm sm:text-base font-extrabold tracking-tight whitespace-nowrap">
              Call {BUSINESS_INFO.phoneDisplay}
            </span>
          </a>
          
          {/* Quick quote action for tablet & mobile */}
          <a
            href="#quote"
            className="hidden sm:inline-flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-bold text-xs px-3.5 py-3 rounded-xl transition-colors shrink-0 whitespace-nowrap"
            aria-label="Request quote"
          >
            Free Quote
          </a>
        </div>
      </div>

    </div>
  );
}
