"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UsefulLinks() {
  const links = [
    { title: "INFLIBNET", img: "/image copy 6.png", url: "#" },
    { title: "UP CM Office", img: "/image copy 7.png", url: "#" },
    { title: "UGC", img: "/image copy 8.png", url: "#" },
    { title: "UGC MOOCs", img: "/image copy 9.png", url: "#" },
    { title: "Swayam Prabha", img: "/image copy 10.png", url: "#" },
    { title: "Cyber Dost", img: "/image copy 11.png", url: "#" },
  ];

  return (
    <section className="relative w-full py-16 bg-gradient-to-b  to-white">
      
      {/* Decorative Blur */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-sky-800 text-center mb-14 tracking-widest"
        >
          USEFUL LINKS
        </motion.h2>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 place-items-center"
        >
          {links.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.08,
                y: -6,
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full max-w-[220px] 
              bg-white/90 backdrop-blur-lg 
              border border-sky-200 rounded-xl 
              shadow-md hover:shadow-[0_18px_40px_rgba(14,165,233,0.35)]
              p-5 flex justify-center items-center"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-md" />

              {/* Image */}
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={80}
                className="relative z-10 object-contain h-20"
              />

              {/* Tooltip Title */}
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition text-sm font-semibold text-sky-700">
                {item.title}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
