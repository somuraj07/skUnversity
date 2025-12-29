"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="relative h-screen w-full">
      {!playVideo ? (
        <>
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/sku.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />

          {/* CONTENT WRAPPER */}
          <div className="relative z-10 h-full max-w-7xl mx-auto flex items-end pb-13 text-white px-4 md:px-0">
            <div className="flex flex-col md:flex-row w-full justify-between items-end md:items-end gap-8 md:gap-0">

              {/* LEFT CONTENT */}
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight mb-6 md:mb-8 animate-[fadeUp_0.8s_ease]">
                  Bridging Knowledge with <br className="hidden md:block" /> Real-World Impact.
                </h1>

                {/* SMALL CONTENT WITH VERTICAL LINE */}
                <div className="flex gap-4 md:gap-6 animate-[fadeUp_1s_ease]">
                  <div className="w-[3px] bg-sky-500/70" />
                  <p className="text-sm md:text-lg text-white/90 leading-relaxed max-w-xl">
                    Unlock your potential with world-class education, innovative
                    research, and a vibrant academic community. We inspire
                    leaders, foster innovation, and prepare you for success in a
                    rapidly evolving world.
                  </p>
                </div>
              </div>

              {/* RIGHT PLAY BUTTON */}
              <div className="flex flex-col items-center animate-[fadeUp_1.2s_ease] mt-6 md:mt-0">
                <button
                  onClick={() => setPlayVideo(true)}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sky-600 hover:bg-sky-700 transition flex items-center justify-center shadow-xl"
                >
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-1" />
                </button>
                <span className="mt-2 md:mt-4 text-xs md:text-sm tracking-wide uppercase">
                  Watch Tour
                </span>
              </div>

            </div>
          </div>
        </>
      ) : (
        <video
          className="w-full h-full object-cover"
          src="/your-video.mp4"
          autoPlay
          controls
        />
      )}
    </section>
  );
}
