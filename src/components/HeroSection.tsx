import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Copy, Check, Sparkles, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const hashtag = '#AnujWedsAnupama';

  // Live countdown to November 25, 2026, 00:00:00 IST
  const targetDate = new Date('2026-11-25T00:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const copyHashtag = () => {
    navigator.clipboard.writeText(hashtag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-gradient-to-b from-[#1a0205] via-[#2d050c] to-[#3f0812] text-center"
    >
      {/* Cinematic Spotlight & Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 cinematic-vignette pointer-events-none" />

      {/* Rotating Background Mandala Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] opacity-10 pointer-events-none animate-[spin_120s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#d4af37] stroke-[0.3]">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="25" />
          <circle cx="50" cy="50" r="15" strokeDasharray="2 1" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse
              key={deg}
              cx="50"
              cy="50"
              rx="40"
              ry="12"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Cinematic Film Production Billing */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#e6c280]/80 font-sans mb-6">
          Dhirendranath Mahato & Family Cordially Presents
        </p>

        {/* The Formal Invitation Line */}
        <div className="max-w-2xl px-4 py-3 rounded-xl bg-[#230308]/60 border border-[#d4af37]/20 backdrop-blur-sm mb-8">
          <p className="font-serif italic text-sm sm:text-base lg:text-lg text-[#f7eedc] leading-relaxed">
            “Mr. & Mrs. Dhirendranath Mahato request the pleasure of your company on the auspicious occasion of the marriage ceremony of their only son”
          </p>
        </div>

        {/* Grand Cinematic Movie Title Typography */}
        <div className="space-y-2 mb-6">
          <div className="inline-block relative">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              <span className="gold-text-gradient block">Anuj Kumar Mahato</span>
            </h1>
          </div>

          {/* Golden Amper & Knot */}
          <div className="flex items-center justify-center gap-4 py-1">
            <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            <span className="font-script text-4xl sm:text-5xl text-[#ffd700] drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]">
              weds
            </span>
            <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          </div>

          <div className="inline-block relative">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              <span className="gold-text-gradient block">Anupama Mahato</span>
            </h1>
          </div>
        </div>

        {/* Date & Location Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-2.5 rounded-full bg-[#1b0306]/80 border border-[#d4af37]/40 shadow-lg text-xs sm:text-sm text-[#f5e8c7] font-serif mb-6">
          <div className="flex items-center gap-1.5 text-[#ffd700]">
            <Calendar className="w-4 h-4" />
            <span className="font-semibold tracking-wider">Wednesday, 25th November 2026</span>
          </div>
          <span className="text-[#d4af37] hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-[#e6c280]">
            <span>Shakuntala Udyan & Guriya Maidan, Jamshedpur</span>
          </div>
        </div>

        {/* Wedding Hashtag */}
        <div className="flex items-center gap-2 mb-10">
          <button
            onClick={copyHashtag}
            className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#410a12]/80 border border-[#d4af37]/30 hover:border-[#d4af37] text-xs sm:text-sm font-sans tracking-wider text-[#ffd700] transition-all cursor-pointer shadow-md"
            title="Click to copy wedding hashtag"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-semibold">{hashtag}</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-[#d4af37] opacity-70 group-hover:opacity-100" />
            )}
          </button>
          {copied && (
            <span className="text-[11px] text-[#ffd700] font-sans animate-fadeIn">
              Copied to clipboard!
            </span>
          )}
        </div>

        {/* Cinematic Live Countdown to Nov 25, 2026 */}
        <div id="countdown" className="w-full max-w-2xl px-4 py-6 rounded-2xl bg-gradient-to-b from-[#2a060e]/90 to-[#1b0307]/95 border-2 border-[#d4af37]/50 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-[#ffd700]" />
            <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Grand Auspicious Countdown
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#390812]/80 border border-[#d4af37]/30 shadow-inner group hover:border-[#d4af37] transition-all"
              >
                <span className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#fdf4c9] drop-shadow-md">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] mt-1 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#eedec5]/70 italic font-serif mt-4">
            Counting down every blessed second until the sacred Pheras
          </p>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#couple"
          className="mt-12 flex flex-col items-center text-[#d4af37] opacity-80 hover:opacity-100 transition-opacity cursor-pointer group"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans mb-1 text-[#e6c280]">
            Scroll to Witness The Journey
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
