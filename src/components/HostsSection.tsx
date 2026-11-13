import React, { useState } from 'react';
import { Phone, Users, Sparkles, Heart, FileText, Check, Star, MessageCircleHeart } from 'lucide-react';

export const HostsSection: React.FC = () => {
  const [showTraditionalCard, setShowTraditionalCard] = useState(false);

  // All Family Well-Wishes & RSVP merged together
  const familyBlessingsAndRsvp = [
    {
      id: 'parents-groom',
      names: 'Mr. Dhirendranath Mahato & Mrs. Anita Mahato',
      relation: 'Groom’s Loving Parents',
      icon: '🪷',
      message:
        'May Lord Ganesha always bestow peace, prosperity, and boundless happiness upon our beloved children Anuj and Anupama. Welcome to our family, dear Anupama!',
      highlight: true,
    },
    {
      id: 'parents-bride',
      names: 'Mr. Sanjay Kumar Mahato & Mrs. Rubi Mahato',
      relation: 'Bride’s Proud Parents',
      icon: '🪷',
      message:
        'Wishing Anuj and our darling daughter Anupama a lifetime of pure devotion, laughter, and unbreakable harmony. Always keep smiling together.',
      highlight: true,
    },
    {
      id: 'kabita-pitambar',
      names: 'Kabita & Pitambar',
      relation: 'Family & Best Compliments',
      icon: '🌟',
      message:
        'Warmest blessings and heartfelt congratulations to Anuj & Anupama! May you walk through life hand-in-hand with immense prosperity, strength, and boundless joy.',
      highlight: false,
    },
    {
      id: 'susmita-ranjan',
      names: 'Susmita & Ranjan',
      relation: 'Family & Best Compliments',
      icon: '🌟',
      message:
        'Wishing dearest Anuj and Anupama a lifetime filled with sweet laughter, deep understanding, and everlasting togetherness. Heartiest congratulations!',
      highlight: false,
    },
    {
      id: 'banashree-deepak',
      names: 'Banashree & Deepak',
      relation: 'Family & Best Compliments',
      icon: '🌟',
      message:
        'May your sacred bond grow stronger and sweeter with every passing day. Heartiest congratulations and a very warm welcome to our family, dear Anupama!',
      highlight: false,
    },
    {
      id: 'tanushree-sanjay',
      names: 'Tanushree & Sanjay',
      relation: 'Family & Best Compliments',
      icon: '🌟',
      message:
        'May your wedding ceremony be the beginning of a lifetime filled with wonderful moments, everlasting love, and joyous milestones together!',
      highlight: false,
    },
    {
      id: 'brothers',
      names: 'Debashish, Goutam & Rahul',
      relation: '🤝 Brothers',
      icon: '🤝',
      message:
        'The countdown has officially begun! We are ready with the grand Baraat celebration and welcoming our dearest Bhabhi home with open arms!',
      highlight: false,
    },
    {
      id: 'little-stars',
      names: 'Sneha, Tulika, Shreyash, Shanvi, Sankalp, Reyansh & Shaurya',
      relation: '✨ Little Stars',
      icon: '✨',
      message:
        'Congratulations Anuj Mamu & Anupama Mami! We are so excited for all the sweets, music, celebrations, and dancing at the wedding!',
      highlight: false,
    },
  ];

  return (
    <section
      id="family"
      className="relative py-24 px-4 bg-gradient-to-b from-[#250308] via-[#35060e] to-[#1a0205] text-[#f7eedc] overflow-hidden"
    >
      {/* Anchor targets so any links to #blessings or #rsvp seamlessly land here */}
      <div id="blessings" className="absolute -top-12" />
      <div id="rsvp" className="absolute -top-12" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#420a13] border border-[#d4af37]/40 text-[#ffd700] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>Kutumb, R.S.V.P. & Blessings</span>
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
            Hosts, Family & Well Wishes
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#d4af37]" />
            <span className="text-lg text-[#ffd700]">❧</span>
            <div className="h-px w-16 bg-[#d4af37]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#ebd498]/90 font-serif italic">
            "With the heartfelt warmth, affectionate invitations, and eternal blessings from our cherished family."
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
            "Your gracious presence and warm blessings will illuminate this auspicious milestone for our son Anuj and our daughter Anupama."
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

        {/* 2. Unified R.S.V.P. & Family Well-Wishes Container */}
        <div className="rounded-3xl bg-[#28050c]/90 border-2 border-[#d4af37]/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#d4af37]/30 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#4a0d16] border border-[#d4af37] flex items-center justify-center text-[#ffd700] shadow-md">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#fdf4c9] font-bold tracking-widest uppercase">
                  R. S. V. P. & Shubh Sandesh
                </h4>
                <p className="text-xs text-[#d4af37] font-sans tracking-wider">
                  Cordially Welcoming You with Warm Well Wishes
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
                    • <strong>Kabita & Pitambar</strong>
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#240308]">
                    • <strong>Susmita & Ranjan</strong>
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#240308]">
                    • <strong>Banashree & Deepak</strong>
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#240308]">
                    • <strong>Tanushree & Sanjay</strong>
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#240308]">
                    • <strong>Brothers:</strong> Debashish, Goutam, Rahul
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#240308]">
                    • <strong>Little Stars:</strong> Sneha, Tulika, Shreyash, Shanvi, Sankalp, Reyansh, Shaurya
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Highlighted Full Names Ribbon */}
          <div className="mb-10 p-5 rounded-2xl bg-[#390812]/80 border border-[#d4af37]/40 text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2 flex items-center justify-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-[#ffd700] fill-current" />
              <span>The Complete Family Roll of Honor</span>
              <Star className="w-3.5 h-3.5 text-[#ffd700] fill-current" />
            </p>
            <p className="font-serif text-sm sm:text-base text-[#fef9e7] leading-relaxed font-semibold">
              Kabita & Pitambar • Susmita & Ranjan • Banashree & Deepak • Tanushree & Sanjay • Debashish • Goutam • Rahul • Sneha • Tulika • Shreyash • Shanvi • Sankalp • Reyansh • Shaurya
            </p>
          </div>

          {/* Merged Family Cards: Names + Well-Wishes in One Unified Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {familyBlessingsAndRsvp.map((item) => (
              <div
                key={item.id}
                className={`group relative p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-gradient-to-b from-[#440b16] to-[#29050c] border-2 border-[#ffd700]/70 shadow-[0_0_25px_rgba(212,175,55,0.25)]'
                    : 'bg-gradient-to-b from-[#340710]/80 to-[#1f0308]/90 border border-[#d4af37]/35 hover:border-[#ffd700] shadow-lg hover:shadow-2xl'
                }`}
              >
                {/* Corner ornament */}
                <div className="absolute top-2.5 right-3 text-[#d4af37]/40 text-xs font-serif select-none">❧</div>

                <div>
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#520c1a] border border-[#d4af37]/50 flex items-center justify-center text-lg shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#fdf4c9] group-hover:text-[#ffd700] transition-colors leading-tight">
                        {item.names}
                      </h4>
                      <p className="text-xs font-sans font-semibold text-[#d4af37] mt-0.5">
                        {item.relation}
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent my-3.5" />

                  <p className="font-serif italic text-xs sm:text-sm text-[#f5eedf]/90 leading-relaxed">
                    "{item.message}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#d4af37]/20 flex items-center justify-between text-[11px] text-[#ebd498]/75">
                  <span className="flex items-center gap-1 text-[#ffd700]">
                    <MessageCircleHeart className="w-3.5 h-3.5" />
                    <span>Family Blessing</span>
                  </span>
                  <span className="font-serif text-[#ffd700]/90 font-medium">Mahato Parivar</span>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Pill */}
          <div className="mt-10 pt-6 border-t border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-[#eedec5]/80">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#ffd700]" />
              <span className="font-semibold text-[#fdf4c9]">
                All family members and well-wishes united with love
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
