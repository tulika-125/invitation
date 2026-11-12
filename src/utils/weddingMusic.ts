// Wedding Audio Player playing "Rote Gachey Khobor (Sarva Mangala)" by Rupak Tiary

class WeddingAudioPlayer {
  private audio: HTMLAudioElement | null = null;

  private getAudio(): HTMLAudioElement {
    if (!this.audio) {
      const base = import.meta.env.BASE_URL || './';
      const cleanBase = base.endsWith('/') ? base : `${base}/`;
      this.audio = new Audio(`${cleanBase}wedding-song.mp3`);
      this.audio.loop = true;
      this.audio.volume = 0.75;
      this.audio.preload = 'auto';
    }
    return this.audio;
  }

  public play(): Promise<void> {
    const audio = this.getAudio();
    return audio.play().catch((err) => {
      console.warn('Autoplay prevented or audio error:', err);
    });
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
    }
  }

  public toggle(): boolean {
    const audio = this.getAudio();
    if (audio.paused) {
      this.play();
      return true;
    } else {
      this.pause();
      return false;
    }
  }

  public getIsPlaying(): boolean {
    return this.audio ? !this.audio.paused : false;
  }
}

export const weddingMusic = new WeddingAudioPlayer();
