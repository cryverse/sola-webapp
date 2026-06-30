"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
};

export default function AudioPlayer({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  return (
    <div className="w-full p-4 border rounded-xl bg-white mb-6">

      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      <button
        onClick={togglePlay}
        className="w-full py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
      >
        {playing ? "⏸ Пауза" : "▶ Прослушать"}
      </button>

      <p className="text-xs text-slate-400 mt-2 text-center">
        Аудирование
      </p>
    </div>
  );
}