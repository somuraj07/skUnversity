"use client"

import { motion } from "framer-motion"

export default function Learning() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-sky-50 via-sky-100 to-white flex justify-center items-center px-4 py-16 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(14,165,233,0.35)] rounded-[2.5rem] p-6 md:p-14"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-sky-900 leading-snug sm:leading-tight md:leading-tight tracking-tight">
              A Leading and <br />
              <span className="text-sky-600">Diverse University</span> <br />
              with a strong <br />
              commitment.
            </h1>

            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src="/kk.webp"
                alt="University Campus"
                className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover transition-transform duration-700"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sky-800"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg mb-4 sm:mb-5"
            >
              Founded with a vision of excellence, our university began as a
              small institution with a bold dream to empower minds and shape
              the future.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg mb-6 sm:mb-8"
            >
              With innovation, research, and community impact at its core,
              the university continues to inspire leaders and changemakers.
            </motion.p>

            {/* FEATURE LIST */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="space-y-3 sm:space-y-4"
            >
              {[
                "Quality Education & Skill Development",
                "Career Opportunities & Higher Earning Potential",
                "Networking & Global Connections",
                "Personal Growth & Independence",
                "Access to Research & Innovation"
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 sm:gap-4 bg-white/70 border border-sky-200 rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-xl"
                >
                  <span className="bg-gradient-to-br from-sky-500 to-sky-700 text-white w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center rounded-full font-bold shadow-lg text-sm sm:text-base">
                    ✓
                  </span>
                  <p className="font-medium text-sm sm:text-base">{text}</p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
