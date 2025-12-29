"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Briefcase,
  Calendar,
  LineChart,
} from "lucide-react";

export default function Page() {
  return (
   
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-sky-50 px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= HERO ================= */}
        <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center"
>
  {/* Text Content */}
  <div className="space-y-6 text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-800">
      Dr. Gonuguntla Venkata Naidu
    </h1>

    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
      Dr. Gonuguntla Venkata Naidu is a distinguished Professor of
      Economics at Sri Krishnadevaraya University, Anantapur. With
      more than three decades of experience in teaching, research,
      and academic administration, he currently serves as the
      <strong> Rector of S.K. University (since June 2024)</strong>,
      contributing significantly to institutional governance and
      academic excellence.
    </p>

    <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
      {[
        { icon: Briefcase, text: "Rector, S.K. University (2024–Present)" },
        { icon: GraduationCap, text: "Professor of Economics" },
        { icon: Calendar, text: "28+ Years Teaching Experience" },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2 bg-white/90 backdrop-blur shadow-md rounded-xl px-3 py-2 sm:px-4 sm:py-2 hover:shadow-xl hover:scale-105 transition"
        >
          <item.icon className="text-sky-600 w-5 h-5" />
          <span className="text-xs sm:text-sm font-medium text-gray-800">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* IMAGE */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative mx-auto w-full max-w-[420px] aspect-[5/6] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(14,165,233,0.35)]"
  >
    <Image
      src="/3.jpg" // replace with actual image path
      alt="Dr. Gonuguntla Venkata Naidu"
      fill
      className="object-cover"
      priority
    />
    {/* Soft overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
  </motion.div>
</motion.section>


        {/* ================= PROFILE OVERVIEW ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: GraduationCap,
              title: "Academic Qualifications",
              desc:
                "M.A. and Ph.D. in Economics with third-rank distinction at the postgraduate level, demonstrating academic excellence from early in his career.",
            },
            {
              icon: BookOpen,
              title: "Teaching Expertise",
              desc:
                "Extensive teaching across postgraduate subjects including Macro Economics, Environmental Economics, Agricultural Economics, and Public Finance.",
            },
            {
              icon: LineChart,
              title: "Research Focus",
              desc:
                "Specialization in Rural Development through Institutional Finance, agricultural economics, public finance, and environmental economics.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <card.icon className="w-10 h-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* ================= RESEARCH & PUBLICATIONS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-10 space-y-6"
        >
          <h2 className="text-3xl font-bold text-sky-800">
            Research & Publications
          </h2>
          <p className="text-gray-700 leading-loose text-lg">
            Dr. Naidu has a rich research career spanning over 30 years, with
            focused contributions to rural development, institutional finance,
            poverty alleviation, women’s empowerment, and agricultural economics.
            He has successfully guided <strong>12 Ph.D. scholars</strong> and
            <strong> 3 M.Phil. students</strong>, shaping the next generation of
            economists and researchers.
          </p>
          <p className="text-gray-700 leading-loose text-lg">
            His scholarly output includes more than <strong>48 research papers</strong>
            published in reputed national and international journals. He has
            also completed significant funded research, including a UGC project
            on the Mahatma Gandhi National Rural Employment Guarantee Scheme
            (MGNREGS), analyzing its impact on rural livelihoods and employment.
          </p>
        </motion.section>

        {/* ================= BOOKS & SEMINARS ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-sky-800">
            Books, Seminars & Professional Engagement
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Authored Books
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dr. Naidu has authored and co-authored several academic books,
                including <em>Role of Banking in Rural Development</em> and
                <em> Micro Economic Analysis</em>, which are widely used as
                reference materials by students and researchers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Seminars & Associations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                He has actively participated in and presented papers at numerous
                national and international seminars. His professional
                affiliations include membership in the Andhra Pradesh Economic
                Association and the Indian Economic Association.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ================= ADMINISTRATIVE ROLE ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-sky-200 to-sky-100 rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-sky-900 mb-6">
            Administrative Leadership as Rector
          </h2>
          <p className="text-gray-800 text-lg leading-loose">
            As Rector of Sri Krishnadevaraya University, Dr. Gonuguntla Venkata
            Naidu plays a pivotal role in academic planning, policy
            implementation, and institutional development. His leadership
            reflects a strong commitment to transparency, academic quality,
            and the holistic growth of the university community.
          </p>
        </motion.section>

      </div>
    </main>
  );
}
