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

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="w-full p-4 border rounded-xl bg-white mb-6">
      <audio ref={audioRef} src={src} />

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