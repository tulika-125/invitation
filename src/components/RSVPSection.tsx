import React from 'react';
import { Heart, Sparkles, MessageCircleHeart } from 'lucide-react';

interface Blessing {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  attending: string;
}

const BLESSINGS: Blessing[] = [
  {
    id: 'b1',
    name: 'Mr. Dhirendranath Mahato & Mrs. Anita Mahato',
    relation: 'Groom’s Loving Parents',
    message: 'May Lord Ganesha always bestow peace, prosperity, and boundless happiness upon our beloved children Anuj and Anupama. Welcome to our family, dear Anupama!',
    timestamp: 'Family Blessing',
    attending: 'Host & Family',
  },
  {
    id: 'b2',
    name: 'Mr. Sanjay Kumar Mahato & Mrs. Rubi Mahato',
    relation: 'Bride’s Proud Parents',
    message: 'Wishing Anuj and our darling daughter Anupama a lifetime of pure devotion, laughter, and unbreakable harmony. Always keep smiling together.',
    timestamp: 'Family Blessing',
    attending: 'Host & Family',
  },
  {
    id: 'b3',
    name: 'Pitambar, Ranjan, Deepak & Sanjay',
    relation: '🏛️ Pillars of the Family',
    message: 'Warmest blessings and heartfelt congratulations to Anuj & Anupama! May you walk through life hand-in-hand with immense prosperity, strength, and joy.',
    timestamp: 'Family Blessing',
    attending: 'Attending with family',
  },
  {
    id: 'b4',
    name: 'Debashish & Goutam',
    relation: '🤝 Brothers',
    message: 'The countdown has officially begun! We are ready with the grand Baraat at Shakuntala Udyan and welcoming our dearest Bhabhi home with open arms!',
    timestamp: 'Family Blessing',
    attending: 'Attending',
  },
  {
    id: 'b5',
    name: 'Kabita, Susmita, Banashree & Tanushree',
    relation: '🌸 Sisters',
    message: 'Dearest Anuj and Anupama, wishing you eternal togetherness, sweet laughter, and everlasting love. Heartiest congratulations to both our families!',
    timestamp: 'Family Blessing',
    attending: 'Attending with family',
  },
  {
    id: 'b6',
    name: 'Sneha, Tulika, Shreyash, Shanvi, Sankalp, Reyansh & Shaurya',
    relation: '✨ Little Stars',
    message: 'Congratulations Anuj Mamu & Anupama Mami! We are so excited for all the sweets, music, celebrations, and dancing at the wedding!',
    timestamp: 'Family Blessing',
    attending: 'Attending with family',
  },
];

export const RSVPSection: React.FC = () => {
  return (
    <section
      id="blessings"
      className="relative py-24 px-4 bg-[#FAF5EE] overflow-hidden"
    >
      <div id="rsvp" className="absolute -top-10" />

      {/* Traditional background texture */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d4af37_0.75px,transparent_0.75px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f3e5c0]/60 border border-[#d4af37]/40 text-[#6e1122] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 text-[#b89326] fill-[#b89326]" />
            <span>Sacred Wishes</span>
            <Heart className="w-3.5 h-3.5 text-[#b89326] fill-[#b89326]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#3b070f] font-bold tracking-tight mb-4">
            Wall of Blessings (Shubh Sandesh)
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#d4af37]" />
            <span className="text-lg text-[#d4af37]">❦</span>
            <div className="h-px w-16 bg-[#d4af37]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#5c4a45] font-serif italic leading-relaxed">
            "Heartfelt blessings and affectionate wishes from our cherished parents and beloved family members as Anuj & Anupama embark on their eternal journey."
          </p>
        </div>

        {/* Grand Grid of Blessings (Full-width 2-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {BLESSINGS.map((b) => (
            <div
              key={b.id}
              className="group relative p-7 sm:p-8 rounded-3xl bg-white/95 border-2 border-[#ebd498]/70 hover:border-[#d4af37] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner Traditional Accents */}
              <div className="absolute top-3 left-3 text-[#d4af37]/40 text-xs font-serif select-none">❧</div>
              <div className="absolute top-3 right-3 text-[#d4af37]/40 text-xs font-serif select-none scale-x-[-1]">❧</div>

              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3b070f] text-[#ffd700] flex items-center justify-center shrink-0 shadow">
                      <MessageCircleHeart className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg text-[#240308] font-bold leading-tight">
                        {b.name}
                      </h3>
                      <p className="text-xs font-sans font-semibold text-[#b89326] mt-0.5">
                        {b.relation}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#fcf8ee] border border-[#ebd498] text-[#735a54] font-semibold shrink-0">
                    {b.attending}
                  </span>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ebd498]/60 to-transparent my-4" />

                <p className="font-serif italic text-sm sm:text-base text-[#4d3a36] leading-relaxed">
                  "{b.message}"
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#f3ece1] flex items-center justify-between text-xs text-[#998782]">
                <div className="flex items-center gap-1 text-[#d4af37]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-medium text-[#b89326]">Eternal Blessings</span>
                </div>
                <span className="font-serif italic">{b.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
