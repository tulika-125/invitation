import React, { useState, useEffect } from 'react';
import { Menu, X, Share2, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'The Couple', href: '#couple' },
    { label: 'Events & Itinerary', href: '#events' },
    { label: 'Family & Blessings', href: '#family' },
  ];

  const handleShare = () => {
    const text = encodeURIComponent(
      "🌸 You are cordially invited to the Wedding of Anuj Kumar Mahato & Anupama Mahato on 25th November 2026! 🌸\n\nClick here to view the invitation, itinerary, venues & send your blessings:\n" +
        window.location.href
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#250308]/92 backdrop-blur-md border-b border-[#d4af37]/30 shadow-lg py-3'
          : 'bg-gradient-to-b from-[#1d0206]/80 via-[#250308]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-decoration-none"
        >
          <div className="w-9 h-9 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#420a13] shadow-md group-hover:scale-105 transition-transform">
            <span className="font-serif text-[#ffd700] text-sm font-bold tracking-tighter">
              A&A
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[#fbf5b7] text-base font-bold tracking-wider leading-none">
              Anuj & Anupama
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-sans font-medium mt-0.5">
              25 Nov 2026
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs lg:text-sm uppercase tracking-wider text-[#eedec5] hover:text-[#ffd700] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#d4af37]/50 text-[#fbf5b7] text-xs font-medium hover:bg-[#d4af37]/20 transition-all cursor-pointer"
            title="Share via WhatsApp"
          >
            <Share2 className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>Share</span>
          </button>

          <a
            href="#family"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#240308] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-md transition-all cursor-pointer"
          >
            <Heart className="w-3 h-3 fill-current" />
            <span>Family & Wishes</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-full border border-[#d4af37]/40 text-[#ffd700]"
            aria-label="Share invitation"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#fbf5b7] hover:text-[#ffd700] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#240308]/98 border-b border-[#d4af37]/40 px-6 py-6 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-serif tracking-wider text-[#f5e8c7] hover:text-[#ffd700] py-2 border-b border-[#4d0c18] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#d4af37]">❧</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#family"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#240308] font-bold text-xs uppercase tracking-widest shadow-md"
              >
                View Family & Well Wishes
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
