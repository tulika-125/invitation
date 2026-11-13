import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

interface WeddingEvent {
  id: string;
  chapter: string;
  title: string;
  subtitle: string;
  dateStr: string;
  timeStr: string;
  venueName: string;
  venueAddress: string;
  dressCode: string;
}

export const EventsSection: React.FC = () => {
  const events: WeddingEvent[] = [
    {
      id: 'haldi',
      chapter: 'Chapter I',
      title: 'Haldi Ceremony',
      subtitle: 'The Sacred Golden Glow & Auspicious Rituals',
      dateStr: 'Wednesday, 25th November 2026',
      timeStr: '10:00 AM Onwards',
      venueName: 'Barada Bhawan (Family Residence)',
      venueAddress: 'H.no. 241, Zone no. 1, Birsanagar, Jamshedpur',
      dressCode: 'Sunlit Yellows, Amber & Festive Florals',
    },
    {
      id: 'vivah',
      chapter: 'Chapter II',
      title: 'Marriage Ceremony',
      subtitle: 'The Sacred Seven Vows & Holy Matrimony',
      dateStr: 'Wednesday, 25th November 2026',
      timeStr: '07:00 PM Onwards (Baraat & Shubha Vivah)',
      venueName: 'Shakuntala Udyan',
      venueAddress: 'Zone no. 8, Birsanagar, Jamshedpur, East Singhbhum',
      dressCode: 'Royal Maroon, Crimson & Champagne Gold Ethnic',
    },
    {
      id: 'reception',
      chapter: 'Chapter III',
      title: 'Reception & Dinner',
      subtitle: 'Grand Celebration, Blessings & Royal Feast (Priti Bhoj)',
      dateStr: 'Thursday, 26th November 2026',
      timeStr: '07:30 PM Onwards',
      venueName: 'Jeera Udyan, Barada Bhawan',
      venueAddress: 'Birsanagar, Jamshedpur, East Singhbhum',
      dressCode: 'Elegant Formal Indian & Indo-Western Attire',
    },
  ];

  return (
    <section
      id="events"
      className="relative py-24 px-4 bg-[#210408] text-[#f7eedc] overflow-hidden"
    >
      {/* Background Decorative Motifs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4a0c16_0%,#180205_100%)] opacity-95" />
      <div className="absolute inset-0 cinematic-vignette pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#390812] border border-[#d4af37]/40 text-[#ffd700] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>Celebration Itinerary</span>
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
            Wedding Events & Schedule
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#d4af37]" />
            <span className="text-lg text-[#ffd700]">❧</span>
            <div className="h-px w-16 bg-[#d4af37]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#ebd498]/90 font-serif italic leading-relaxed">
            "Three momentous chapters of joyous rituals, timeless traditions, and joyous laughter."
          </p>
        </div>

        {/* Itinerary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {events.map((ev, index) => (
            <div
              key={ev.id}
              className="group relative rounded-3xl bg-gradient-to-b from-[#2e060e] to-[#1a0206] border-2 border-[#d4af37]/40 shadow-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#ffd700] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500"
            >
              {/* Corner Traditional Accents */}
              <div className="absolute top-3 left-3 text-[#d4af37]/40 text-xs font-serif select-none">❖</div>
              <div className="absolute top-3 right-3 text-[#d4af37]/40 text-xs font-serif select-none">❖</div>

              <div>
                {/* Chapter & Timeline Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#d4af37]">
                    {ev.chapter}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#3e0914] border border-[#d4af37]/50 flex items-center justify-center text-xs text-[#ffd700] font-bold">
                    0{index + 1}
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#fdf4c9] font-bold tracking-wide mb-1 group-hover:text-[#ffd700] transition-colors">
                  {ev.title}
                </h3>
                <p className="text-xs text-[#ebd498]/80 font-serif italic mb-6">
                  {ev.subtitle}
                </p>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mb-6" />

                {/* Details List */}
                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Date */}
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#d4af37]/80">Date</p>
                      <p className="font-semibold text-white">{ev.dateStr}</p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#d4af37]/80">Auspicious Time</p>
                      <p className="font-semibold text-white">{ev.timeStr}</p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#d4af37]/80">Venue</p>
                      <p className="font-bold text-[#fef3c7] text-sm">{ev.venueName}</p>
                      <p className="text-[#ebd498]/75 text-xs mt-0.5 leading-snug">{ev.venueAddress}</p>
                    </div>
                  </div>

                  {/* Dress Code */}
                  <div className="p-3.5 rounded-xl bg-[#390812]/60 border border-[#d4af37]/25 mt-4">
                    <p className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">
                      Suggested Attire
                    </p>
                    <p className="text-xs text-[#f5e8c7] font-medium mt-0.5">
                      {ev.dressCode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Divider */}
              <div className="mt-6 pt-4 border-t border-[#d4af37]/20 flex items-center justify-center gap-2 text-xs text-[#d4af37]/60 font-serif">
                <span>❧</span>
                <span className="text-[10px] uppercase tracking-widest text-[#ebd498]/70">Mahato Parivar Celebrations</span>
                <span>❧</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
