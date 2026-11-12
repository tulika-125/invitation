import React, { useState } from 'react';
import { Share2, Heart, Copy, Check, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "🌸 Wedding Invitation 🌸\n\nMr. & Mrs. Dhirendranath Mahato request the pleasure of your company on the auspicious marriage ceremony of their only son\n\n💍 ANUJ KUMAR MAHATO weds ANUPAMA MAHATO 💍\n\n🗓️ Date: 25th & 26th November 2026\n📍 Venue: Shakuntala Udyan & Guriya Maidan, Birsanagar, Jamshedpur\n\nView the full royal card, directions & send your blessings:\n" +
        window.location.href
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#140103] text-[#ebd498] pt-16 pb-24 border-t-2 border-[#d4af37]/40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Monogram Crest */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#d4af37] flex items-center justify-center bg-[#29050b] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          <span className="font-serif text-[#ffd700] text-2xl font-bold tracking-tight">
            A&A
          </span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-wide mb-2">
          Anuj & Anupama
        </h3>

        <p className="text-xs sm:text-sm text-[#d4af37] uppercase tracking-[0.3em] font-sans mb-8">
          #AnujWedsAnupama • 25th November 2026
        </p>

        {/* WhatsApp & Share CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Share via WhatsApp</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#390812] hover:bg-[#4a0d16] border border-[#d4af37]/60 text-[#ffd700] font-semibold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Copy Invite Link'}</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#28050c] hover:bg-[#3d0912] border border-[#d4af37]/40 text-[#ffd700] transition-all cursor-pointer"
            title="Scroll to Top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mb-6" />

        <p className="text-xs text-[#eedec5]/70 font-serif italic max-w-lg mx-auto leading-relaxed">
          "Created with endless love, blessings, and cherished family heritage. We look forward to creating unforgettable memories with you in Jamshedpur."
        </p>

        <p className="text-[11px] text-[#998782] font-sans mt-6 flex items-center justify-center gap-1.5">
          <span>© 2026 Mahato Family</span>
          <span className="text-[#d4af37]">•</span>
          <Heart className="w-3 h-3 text-[#d4af37] fill-current" />
          <span>All auspicious blessings welcome</span>
        </p>
      </div>
    </footer>
  );
};
