"use client"

import { motion } from "framer-motion"

export default function Learning() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br  flex justify-center items-center px-4 md:px-12 py-16 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(14,165,233,0.35)] rounded-[2.5rem] p-8 md:p-14"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >

            {/* HEADING */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-sky-900 leading-tight tracking-tight">
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
                className="w-full h-[320px] object-cover transition-transform duration-700"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sky-800"
          >

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg mb-5"
            >
              Founded with a vision of excellence, our university began as a
              small institution with a bold dream  to empower minds and shape
              the future.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg mb-8"
            >
              With innovation, research, and community impact at its core,
              the university continues to inspire leaders and changemakers.
            </motion.p>

            {/* FEATURE LIST */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="space-y-4"
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
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 bg-white/70 border border-sky-200 rounded-2xl p-4 shadow-md hover:shadow-xl"
                >
                  <span className="bg-gradient-to-br from-sky-500 to-sky-700 text-white w-9 h-9 flex justify-center items-center rounded-full font-bold shadow-lg">
                    ✓
                  </span>
                  <p className="font-semibold">{text}</p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
