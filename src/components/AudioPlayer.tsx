import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingMusic } from '../utils/weddingMusic';

interface AudioPlayerProps {
  autoStarted?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ autoStarted = false }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (autoStarted) {
      weddingMusic.play();
      const frame = requestAnimationFrame(() => setIsPlaying(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [autoStarted]);

  const handleToggle = () => {
    const active = weddingMusic.toggle();
    setIsPlaying(active);
  };

  return (
    <aside aria-label="Music player control" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {isPlaying && (
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3b070f]/90 border border-[#d4af37]/40 text-[#f3e5c0] text-xs font-sans tracking-wide backdrop-blur-md shadow-lg animate-pulse max-w-xs truncate">
          <Music className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
          <span className="truncate">Rote Gachey Khobor (Sarva Mangala)</span>
          <div className="flex items-end gap-0.5 h-3 ml-1 shrink-0">
            <span className="w-0.5 bg-[#d4af37] animate-[pulse_0.6s_ease-in-out_infinite] h-2"></span>
            <span className="w-0.5 bg-[#d4af37] animate-[pulse_0.9s_ease-in-out_infinite] h-3"></span>
            <span className="w-0.5 bg-[#d4af37] animate-[pulse_0.4s_ease-in-out_infinite] h-1.5"></span>
          </div>
        </div>
      )}

      <button
        onClick={handleToggle}
        className={`relative group flex items-center justify-center w-13 h-13 rounded-full border-2 transition-all duration-300 shadow-xl backdrop-blur-md ${
          isPlaying
            ? 'bg-[#3b070f] border-[#d4af37] text-[#fbf5b7] gold-glow'
            : 'bg-[#faf5ec]/90 border-[#800020]/40 text-[#520c18] hover:border-[#800020]'
        }`}
        title={isPlaying ? 'Pause "Rote Gachey Khobor (Sarva Mangala)"' : 'Play "Rote Gachey Khobor (Sarva Mangala)"'}
        aria-label="Toggle wedding music"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6 text-[#6e1122]" />
        )}

        <span className="sr-only">{isPlaying ? 'Mute Music' : 'Play Music'}</span>
      </button>
    </aside>
  );
};
