import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';

interface RoyalOpeningCurtainProps {
  onOpen: () => void;
}

export const RoyalOpeningCurtain: React.FC<RoyalOpeningCurtainProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    // Launch celebratory gold and maroon confetti
    try {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#b8860b', '#800020', '#ffd700', '#f5e8c7'],
      });
    } catch {
      // safe fallback
    }

    onOpen();

    setTimeout(() => {
      setIsDismissed(true);
    }, 1200);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Left Curtain */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#200408] via-[#3d0811] to-[#4e0c17] transition-transform duration-1000 ease-in-out border-r border-[#d4af37]/40 shadow-2xl ${
          isOpening ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 opacity-15 film-grain" />
      </div>

      {/* Right Curtain */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#200408] via-[#3d0811] to-[#4e0c17] transition-transform duration-1000 ease-in-out border-l border-[#d4af37]/40 shadow-2xl ${
          isOpening ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 opacity-15 film-grain" />
      </div>

      {/* Center Royal Seal / Invitation Card */}
      <div
        className={`relative z-10 max-w-md mx-4 p-8 sm:p-10 text-center rounded-2xl bg-[#2a060d]/95 border-2 border-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.4)] backdrop-blur-md transform transition-all duration-700 ${
          isOpening ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Corner Ornaments */}
        <div className="absolute top-2 left-2 text-[#d4af37] text-lg select-none">❧</div>
        <div className="absolute top-2 right-2 text-[#d4af37] text-lg select-none scale-x-[-1]">❧</div>
        <div className="absolute bottom-2 left-2 text-[#d4af37] text-lg select-none scale-y-[-1]">❧</div>
        <div className="absolute bottom-2 right-2 text-[#d4af37] text-lg select-none scale-[-1]">❧</div>

        {/* Auspicious Ganesh Inscription */}
        <p className="text-[#f5e8c7] text-sm tracking-[0.3em] uppercase font-serif mb-2 text-amber-200/90 font-medium">
          ॥ श्री गणेशाय नमः ॥
        </p>

        {/* Royal Crest Motif */}
        <div className="mx-auto my-4 w-18 h-18 rounded-full border-2 border-[#d4af37] flex items-center justify-center bg-gradient-to-b from-[#520c18] to-[#250308] shadow-inner gold-glow-subtle animate-diya">
          <Heart className="w-8 h-8 text-[#ffd700] fill-[#d4af37]/30" />
        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-2">
          Royal Wedding Invitation
        </p>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#fbf5b7] font-bold tracking-wide mb-1 leading-tight">
          Anuj & Anupama
        </h1>

        <p className="text-xs sm:text-sm text-[#e6c280] font-sans tracking-widest mt-1 mb-6">
          25th November 2026 • Jamshedpur
        </p>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6" />

        <p className="text-xs text-[#eedec5] italic font-serif leading-relaxed mb-6">
          "With the divine grace of the Almighty and the blessings of our elders, step into a celebration of eternal togetherness."
        </p>

        {/* CTA Button */}
        <button
          onClick={handleOpen}
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e6a7] to-[#b8860b] text-[#2e050b] font-semibold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-[0_0_35px_rgba(255,215,0,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#2e050b] group-hover:rotate-12 transition-transform" />
          <span>Open Invitation</span>
          <Sparkles className="w-4 h-4 text-[#2e050b] group-hover:-rotate-12 transition-transform" />
        </button>

        <p className="text-[10px] text-[#e6c280]/70 tracking-wider uppercase mt-4">
          🎵 Tap to experience with festive music
        </p>
      </div>
    </div>
  );
};
