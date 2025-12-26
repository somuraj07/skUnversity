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
          <div className="relative z-10 h-full max-w-7xl mx-auto flex items-end pb-13 text-white">
            <div className="flex w-full justify-between items-end">
              
              {/* LEFT CONTENT */}
              <div className="max-w-3xl">
                <h1 className="text-5xl font-bold leading-tight mb-8 animate-[fadeUp_0.8s_ease]">
                  Bridging Knowledge with <br /> Real-World Impact.
                </h1>

                {/* SMALL CONTENT WITH VERTICAL LINE */}
                <div className="flex gap-6 animate-[fadeUp_1s_ease]">
                  <div className="w-[3px] bg-sky-500/70" />

                  <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                    Unlock your potential with world-class education, innovative
                    research, and a vibrant academic community. We inspire
                    leaders, foster innovation, and prepare you for success in a
                    rapidly evolving world.
                  </p>
                </div>
              </div>

              {/* RIGHT PLAY BUTTON */}
               <div className="flex flex-col items-center animate-[fadeUp_1.2s_ease]">
                <button
                  onClick={() => setPlayVideo(true)}
                  className="w-20 h-20 rounded-full bg-sky-600 hover:bg-sky-700 transition flex items-center justify-center shadow-xl"
                >
  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </button>
                <span className="mt-4 text-sm tracking-wide uppercase">
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
