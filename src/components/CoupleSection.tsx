import React from 'react';
import { Users, Heart, Sparkles } from 'lucide-react';

export const CoupleSection: React.FC = () => {
  return (
    <section
      id="couple"
      className="relative py-24 px-4 bg-[#FAF5EE] overflow-hidden"
    >
      {/* Subtle traditional damask / floral background tint */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d4af37_0.75px,transparent_0.75px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f3e5c0]/60 border border-[#d4af37]/40 text-[#6e1122] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b89326]" />
            <span>The Royal Union</span>
            <Sparkles className="w-3.5 h-3.5 text-[#b89326]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#3b070f] font-bold tracking-tight mb-4">
            Meet The Couple & Families
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#d4af37]" />
            <span className="text-lg text-[#d4af37]">❦</span>
            <div className="h-px w-16 bg-[#d4af37]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#5c4a45] font-serif italic leading-relaxed">
            "Two distinct paths crossing under starlit skies, blessed by cherished traditions and unconditional family love."
          </p>
        </div>

        {/* Groom & Bride Royal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* THE GROOM */}
          <div className="relative group rounded-3xl bg-white/90 border-2 border-[#d4af37]/40 shadow-xl overflow-hidden hover:shadow-2xl hover:border-[#d4af37] transition-all duration-500 flex flex-col">
            {/* Top Arch Motif */}
            <div className="h-3 bg-gradient-to-r from-[#3b070f] via-[#d4af37] to-[#3b070f]" />

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                {/* Royal Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-[#3b070f] text-[#fbf5b7] text-[11px] uppercase tracking-[0.2em] font-medium shadow">
                    The Groom
                  </span>
                  <span className="font-serif text-[#d4af37] text-xl">❧</span>
                </div>

                {/* Royal Framed Photo */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6 rounded-full border-4 border-[#d4af37] p-1.5 bg-gradient-to-tr from-[#3b070f] via-[#d4af37] to-[#6e1122] shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                  <img
                    src="./anuj.jpeg"
                    alt="Anuj Kumar Mahato - The Groom"
                    className="w-full h-full rounded-full object-cover object-center shadow-inner border-2 border-[#d4af37]/60"
                    loading="lazy"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3b070f] font-bold tracking-wide">
                    Anuj Kumar Mahato
                  </h3>
                </div>

                <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-6" />

                {/* Parentage & Heritage */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#faf5ee] border border-[#ebd498]/50 shadow-sm">
                    <div className="p-2.5 rounded-xl bg-[#3b070f] text-[#fdf4c9] shrink-0 mt-0.5 shadow">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#735a54] font-semibold mb-1">
                        Cherished Son of
                      </p>
                      <p className="font-serif text-lg text-[#240308] font-bold leading-snug">
                        Mr. Dhirendranath Mahato
                      </p>
                      <p className="font-serif text-lg text-[#240308] font-bold leading-snug">
                        & Mrs. Anita Mahato
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warm Blessing Footer */}
              <div className="mt-8 pt-4 border-t border-[#ebd498]/50 text-center">
                <p className="font-serif italic text-xs text-[#6e1122]">
                  "Elegance, integrity, and warmth rooted in generational values."
                </p>
              </div>
            </div>
          </div>

          {/* THE BRIDE */}
          <div className="relative group rounded-3xl bg-white/90 border-2 border-[#d4af37]/40 shadow-xl overflow-hidden hover:shadow-2xl hover:border-[#d4af37] transition-all duration-500 flex flex-col">
            {/* Top Arch Motif */}
            <div className="h-3 bg-gradient-to-r from-[#d4af37] via-[#6e1122] to-[#d4af37]" />

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                {/* Royal Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-[#6e1122] text-[#fbf5b7] text-[11px] uppercase tracking-[0.2em] font-medium shadow">
                    The Bride
                  </span>
                  <span className="font-serif text-[#d4af37] text-xl">❧</span>
                </div>

                {/* Royal Framed Photo */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6 rounded-full border-4 border-[#d4af37] p-1.5 bg-gradient-to-tr from-[#6e1122] via-[#d4af37] to-[#b89326] shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                  <img
                    src="./mami.jpeg"
                    alt="Anupama Mahato - The Bride"
                    className="w-full h-full rounded-full object-cover object-center shadow-inner border-2 border-[#d4af37]/60"
                    loading="lazy"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3b070f] font-bold tracking-wide">
                    Anupama Mahato
                  </h3>
                </div>

                <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-6" />

                {/* Parentage & Heritage */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#faf5ee] border border-[#ebd498]/50 shadow-sm">
                    <div className="p-2.5 rounded-xl bg-[#6e1122] text-[#fdf4c9] shrink-0 mt-0.5 shadow">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#735a54] font-semibold mb-1">
                        Beloved Daughter of
                      </p>
                      <p className="font-serif text-lg text-[#240308] font-bold leading-snug">
                        Mr. Sanjay Kumar Mahato
                      </p>
                      <p className="font-serif text-lg text-[#240308] font-bold leading-snug">
                        & Mrs. Rubi Mahato
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warm Blessing Footer */}
              <div className="mt-8 pt-4 border-t border-[#ebd498]/50 text-center">
                <p className="font-serif italic text-xs text-[#6e1122]">
                  "Grace, poise, and joyous kindness illuminating every life she touches."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Union Emblem Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#3b070f] via-[#590e1b] to-[#3b070f] border border-[#d4af37]/50 text-center text-[#fbf5b7] shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <Heart className="w-8 h-8 text-[#ffd700] fill-[#ffd700]/20 animate-pulse" />
            <div className="max-w-xl text-center sm:text-left">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#fef9e7]">
                A Sacred Bond of Love, Tradition & Respect
              </h4>
              <p className="text-xs sm:text-sm text-[#ebd498] mt-1 font-serif italic">
                Together with their families, Anuj & Anupama eagerly anticipate your blessings as they embark on this sacred journey of seven vows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
