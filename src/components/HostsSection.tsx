import React, { useState } from 'react';
import { Phone, Users, Sparkles, Heart, FileText, Check, Star } from 'lucide-react';

export const HostsSection: React.FC = () => {
  const [showTraditionalCard, setShowTraditionalCard] = useState(false);

  // All 17 RSVP family members explicitly categorized
  const allRsvpNames = [
    'Pitambar',
    'Ranjan',
    'Deepak',
    'Sanjay',
    'Debashish',
    'Goutam',
    'Kabita',
    'Susmita',
    'Banashree',
    'Tanushree',
    'Sneha',
    'Tulika',
    'Shreyash',
    'Shanvi',
    'Sankalp',
    'Reyansh',
    'Shaurya',
  ];

  const familyGroups = [
    {
      group: 'Pillars of the Family',
      icon: '🏛️',
      tagline: 'Guiding Wisdom & Strength',
      badgeColor: 'from-amber-600/30 to-amber-900/40 border-amber-500/50 text-[#ffd700]',
      members: ['Pitambar', 'Ranjan', 'Deepak', 'Sanjay'],
    },
    {
      group: 'Brothers',
      icon: '🤝',
      tagline: 'Enduring Bond & Warmth',
      badgeColor: 'from-rose-800/30 to-rose-950/40 border-rose-500/50 text-[#fbf5b7]',
      members: ['Debashish', 'Goutam'],
    },
    {
      group: 'Sisters',
      icon: '🌸',
      tagline: 'Grace, Care & Affection',
      badgeColor: 'from-pink-800/30 to-pink-950/40 border-pink-400/50 text-[#fceda6]',
      members: ['Kabita', 'Susmita', 'Banashree', 'Tanushree'],
    },
    {
      group: 'Little Stars',
      icon: '✨',
      tagline: 'The Sunshine & Joy of the House',
      badgeColor: 'from-yellow-700/30 to-amber-950/40 border-yellow-400/50 text-[#fff2a8]',
      members: ['Sneha', 'Tulika', 'Shreyash', 'Shanvi', 'Sankalp', 'Reyansh', 'Shaurya'],
    },
  ];

  return (
    <section
      id="family"
      className="relative py-24 px-4 bg-gradient-to-b from-[#250308] via-[#35060e] to-[#1a0205] text-[#f7eedc] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#420a13] border border-[#d4af37]/40 text-[#ffd700] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>Kutumb & Compliments</span>
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
            Hosts & R.S.V.P.
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#d4af37]" />
            <span className="text-lg text-[#ffd700]">❧</span>
            <div className="h-px w-16 bg-[#d4af37]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#ebd498]/90 font-serif italic">
            "With the heartfelt warmth and affectionate invitation from every single member of the Mahato family."
          </p>
        </div>

        {/* 1. Grand Host Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#33070f]/90 to-[#1f0308]/95 border-2 border-[#d4af37]/60 shadow-[0_15px_40px_rgba(0,0,0,0.7)] p-8 sm:p-12 mb-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />

          <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-3">
            With Best Compliments From
          </p>

          <h3 className="font-serif text-3xl sm:text-5xl text-[#fdf4c9] font-bold tracking-wide mb-3">
            Mr. Dhirendranath Mahato and Family
          </h3>

          <p className="font-serif italic text-sm sm:text-base text-[#ebd498]/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            "Your gracious presence, warm wishes, and blessings will illuminate this auspicious milestone for our son Anuj and our daughter Anupama."
          </p>

          {/* Contact Numbers with Direct Click-to-Call */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="tel:8210986292"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#4a0d16] hover:bg-[#5e111d] border border-[#d4af37]/60 text-[#ffd700] text-sm sm:text-base font-semibold tracking-wide shadow-lg hover:scale-105 transition-all group"
            >
              <Phone className="w-4 h-4 text-[#ffd700] group-hover:rotate-12 transition-transform" />
              <span>+91 8210986292</span>
            </a>

            <a
              href="tel:06573589708"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#4a0d16] hover:bg-[#5e111d] border border-[#d4af37]/60 text-[#ffd700] text-sm sm:text-base font-semibold tracking-wide shadow-lg hover:scale-105 transition-all group"
            >
              <Phone className="w-4 h-4 text-[#ffd700] group-hover:rotate-12 transition-transform" />
              <span>0657-3589708</span>
            </a>
          </div>
        </div>

        {/* 2. R.S.V.P. Grand Family Section — ALL NAMES FULLY CATEGORIZED */}
        <div className="rounded-3xl bg-[#28050c]/90 border-2 border-[#d4af37]/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#d4af37]/30 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#4a0d16] border border-[#d4af37] flex items-center justify-center text-[#ffd700] shadow-md">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#fdf4c9] font-bold tracking-widest uppercase">
                  R. S. V. P.
                </h4>
                <p className="text-xs text-[#d4af37] font-sans tracking-wider">
                  Pillars • Brothers • Sisters • Little Stars
                </p>
              </div>
            </div>

            {/* Toggle Traditional Card Modal/View */}
            <button
              onClick={() => setShowTraditionalCard(!showTraditionalCard)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#3d0912] border border-[#d4af37]/50 text-[#ffd700] text-xs font-semibold hover:bg-[#520d19] transition-all cursor-pointer shadow"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{showTraditionalCard ? 'Hide Traditional Card' : 'View Traditional Card Layout'}</span>
            </button>
          </div>

          {/* Traditional Card Format View if Toggled */}
          {showTraditionalCard && (
            <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#fdfaf5] border-2 border-[#b89326] text-[#240308] shadow-inner animate-fadeIn">
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#6e1122] font-bold">
                  ॥ श्री गणेशाय नमः ॥
                </p>
                <h5 className="font-serif text-xl sm:text-2xl font-bold text-[#3b070f]">
                  Shree Vivah Nimantran Patrika
                </h5>
                <p className="text-xs sm:text-sm font-serif italic text-[#4a3530] leading-relaxed">
                  Mr. & Mrs. Dhirendranath Mahato request the pleasure of your company on the auspicious occasion of the marriage ceremony of their only son <strong>Anuj Kumar Mahato</strong> with <strong>Anupama Mahato</strong> (Daughter of Mr. Sanjay Kumar Mahato & Mrs. Rubi Mahato) on Wednesday, 25th November 2026.
                </p>

                <div className="h-px w-32 mx-auto bg-[#b89326]" />

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#6e1122] font-bold mb-1">
                    With Best Compliments From:
                  </p>
                  <p className="font-serif text-sm font-bold text-[#240308]">
                    Mr. Dhirendranath Mahato and family
                  </p>
                  <p className="text-xs text-[#523d38]">
                    Tel: 8210986292, 0657-3589708
                  </p>
                </div>

                <div className="pt-2 text-left bg-[#f5ede1] p-4 rounded-xl border border-[#d4af37]/30 space-y-2">
                  <p className="text-xs uppercase tracking-widest text-[#6e1122] font-bold text-center mb-2">
                    — R. S. V. P. —
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#240308]">
                    <strong>🏛️ Pillars:</strong> Pitambar, Ranjan, Deepak, Sanjay
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#240308]">
                    <strong>🤝 Brothers:</strong> Debashish, Goutam
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#240308]">
                    <strong>🌸 Sisters:</strong> Kabita, Susmita, Banashree, Tanushree
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#240308]">
                    <strong>✨ Little Stars:</strong> Sneha, Tulika, Shreyash, Shanvi, Sankalp, Reyansh, Shaurya
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Highlighted Full Names Ribbon (All 17 Names) */}
          <div className="mb-10 p-5 rounded-2xl bg-[#390812]/80 border border-[#d4af37]/40 text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2 flex items-center justify-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-[#ffd700] fill-current" />
              <span>Complete Roll of Honor ({allRsvpNames.length} Family Members)</span>
              <Star className="w-3.5 h-3.5 text-[#ffd700] fill-current" />
            </p>
            <p className="font-serif text-sm sm:text-base text-[#fef9e7] leading-relaxed font-semibold">
              Pitambar • Ranjan • Deepak • Sanjay • Debashish • Goutam • Kabita • Susmita • Banashree • Tanushree • Sneha • Tulika • Shreyash • Shanvi • Sankalp • Reyansh • Shaurya
            </p>
          </div>

          {/* Categorized Royal Sections with User's Exact Groups */}
          <div className="space-y-10">
            {familyGroups.map((grp) => (
              <div key={grp.group} className="rounded-2xl p-5 bg-[#340710]/60 border border-[#d4af37]/25">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#d4af37]/20">
                  <div className="flex items-center gap-2">
                    <span className="text-xl select-none">{grp.icon}</span>
                    <h5 className="font-serif text-lg sm:text-xl font-bold text-[#ffd700] tracking-wide">
                      {grp.group}
                    </h5>
                  </div>
                  <span className="text-[11px] font-serif italic text-[#ebd498]/80">
                    {grp.tagline}
                  </span>
                </div>

                {/* Member Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {grp.members.map((name) => (
                    <div
                      key={name}
                      className="group relative p-3.5 rounded-xl bg-gradient-to-b from-[#3e0914] to-[#200308] border border-[#d4af37]/30 hover:border-[#ffd700] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 text-center flex flex-col items-center justify-center cursor-default hover:scale-105"
                    >
                      <div className="w-8 h-8 mb-2 rounded-full bg-[#520c1a] border border-[#d4af37]/40 flex items-center justify-center text-xs font-serif font-bold text-[#ffd700] group-hover:scale-110 transition-transform shadow-inner">
                        {name.charAt(0)}
                      </div>
                      <span className="font-serif text-base font-bold text-[#fef9e7] group-hover:text-[#ffd700] transition-colors leading-tight">
                        {name}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#d4af37]/75 mt-1 font-medium">
                        Mahato
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Verification Pill */}
          <div className="mt-10 pt-6 border-t border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-[#eedec5]/80">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#ffd700]" />
              <span className="font-semibold text-[#fdf4c9]">
                All {allRsvpNames.length} family members warmly welcoming you
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-[#ffd700] fill-current" />
              <span className="italic font-serif">
                Please treat this digital invitation as an affectionate personal visit.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
