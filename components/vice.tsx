"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Briefcase,
  Calendar,
} from "lucide-react";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-white px-6 py-20 overflow-hidden">

      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-24">

        {/* ================= HERO ================= */}
       <motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
>
  {/* Text Content */}
  <div className="space-y-6 md:space-y-7 text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-900 tracking-tight">
      Dr. Bommagowni Anitha
    </h1>

    <p className="text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed">
      Dr. Bommagowni Anitha is a highly respected academician and
      administrator, currently serving as the
      <strong> Vice-Chancellor of Sri Krishnadevaraya University</strong>.
      With nearly three decades of dedicated service in higher
      education, she is widely recognized for her excellence in
      teaching, research, leadership, and community engagement.
    </p>

    <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2">
      {[
        { icon: Briefcase, text: "30 Years Academic Experience" },
        { icon: GraduationCap, text: "Professor – Management Studies" },
        { icon: Users, text: "Vice-Chancellor, S.K. University" },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.08 }}
          className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-sky-100 shadow-lg rounded-xl px-3 py-2 sm:px-4 sm:py-2"
        >
          <item.icon className="text-sky-600 w-5 h-5" />
          <span className="text-xs sm:text-sm font-semibold text-gray-800">
            {item.text}
          </span>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Image */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative mx-auto w-full max-w-[420px] aspect-[5/6] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(14,165,233,0.35)]"
  >
    <Image
      src="/2.jpg"
      alt="Dr. Bommagowni Anitha"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
  </motion.div>
</motion.section>

        {/* ================= PROFILE HIGHLIGHTS ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-10"
        >
          {[
            {
              icon: Calendar,
              title: "Experience",
              desc:
                "30 years of teaching and academic service, including 14 years as Professor, 8 years as Associate Professor, and 8 years as Assistant Professor at S.K. University.",
            },
            {
              icon: BookOpen,
              title: "Specialization",
              desc:
                "Human Resource Management, Organizational Behavior, Quality of Work Life, Strategic Management, and Business Ethics.",
            },
            {
              icon: Award,
              title: "Recognition",
              desc:
                "Recipient of the Distinguished Woman Award (2019) by Venus International Women Awards Foundation for excellence in HR research.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-7 shadow-xl border border-sky-100 transition"
            >
              <card.icon className="w-11 h-11 text-sky-600 mb-5" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* ================= ACADEMIC BACKGROUND ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-12 space-y-7 border border-sky-100"
        >
          <h2 className="text-3xl font-extrabold text-sky-900">
            Academic Qualifications
          </h2>

          <p className="text-gray-700 leading-loose text-lg">
            Dr. Bommagowni Anitha holds a Ph.D. in Management with specialization
            in Human Resource Management from Sri Krishnadevaraya University.
            Her doctoral research titled
            <em>
              “Quality of Work Life in Commercial Banks – With Special Reference
              to Andhra Bank and Vysya Bank”
            </em>
            reflects her early and sustained commitment to improving workplace
            practices and organizational effectiveness.
          </p>

          <p className="text-gray-700 leading-loose text-lg">
            She also earned an MBA from Sri Krishnadevaraya University and a
            B.Com. degree from Sri Venkateswara University, Tirupati, building a
            strong foundation in management and commerce.
          </p>
        </motion.section>

        {/* ================= RESEARCH & SEMINARS ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-extrabold text-sky-900">
            Research, Seminars & Conferences
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "National & International Events",
                text:
                  "Dr. Anitha has organized several high-impact academic events, including national seminars on global economic turbulence, international conferences on business strategy shifts, and workshops on gender sensitivity and global trade transformation, addressing emerging challenges in management education.",
              },
              {
                title: "Funded Research",
                text:
                  "She has successfully completed a major UGC-funded research project on “Consumer Behaviour in Rural and Urban Areas,” contributing valuable insights to policy formulation and marketing strategy development.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white/85 backdrop-blur-lg rounded-3xl p-9 shadow-xl border border-sky-100"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= ADMIN & EXTENSION ================= */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-sky-200 via-sky-100 to-white rounded-[2.8rem] p-14 shadow-[0_40px_100px_rgba(14,165,233,0.35)] space-y-7"
        >
          <h2 className="text-3xl font-extrabold text-sky-900">
            Administration & Community Engagement
          </h2>

          <p className="text-gray-800 text-lg leading-loose">
            Dr. Anitha has held several key administrative roles, including
            Additional Warden of women’s hostels and Director of the Centre for
            Women Studies at S.K. University. She has actively contributed to
            institutional governance through various academic and administrative
            committees.
          </p>

          <p className="text-gray-800 text-lg leading-loose">
            Beyond the university, she has conducted executive development and
            communication training programs for public sector organizations and
            banking professionals. Her extension activities reflect a deep
            commitment to educational quality, leadership development, and
            societal progress.
          </p>
        </motion.section>

      </div>
    </main>
  );
}
