"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Gavel,
  GraduationCap,
  MapPin,
  Calendar,
  Landmark,
  Users,
} from "lucide-react";
import Navbar from "@/components/secondNavbar";

export default function Page() {
  return (
    <div>
        <div>
            <Navbar/>
    </div>
    <div>
  <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-200 px-6 py-16">
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
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-transparent">
      Syed Abdul Nazeer
    </h1>

    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
      Syed Abdul Nazeer is a distinguished Indian jurist and public
      servant, currently serving as the <strong>22nd Governor of Andhra Pradesh</strong>.
      Known for his integrity, constitutional wisdom, and judicial excellence,
      his career spans nearly four decades in India’s legal and governance framework.
    </p>

    <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
      {[
        { icon: Landmark, text: "Governor of Andhra Pradesh (2023–Present)" },
        { icon: Gavel, text: "Former Judge, Supreme Court of India" },
        { icon: Briefcase, text: "Judicial Career: 1983–2023" },
        { icon: Users, text: "Chancellor, S.K. University" },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2 bg-gradient-to-r from-white to-sky-50 border border-sky-100 shadow-md rounded-xl px-3 py-2 sm:px-4 sm:py-2 hover:shadow-xl hover:scale-105 transition"
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
      src="/1.jpg"
      alt="Syed Abdul Nazeer"
      fill
      className="object-cover"
      priority
    />
    {/* Soft overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
  </motion.div>
</motion.section>


        {/* ================= PERSONAL DETAILS ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Calendar,
              title: "Born",
              desc: "5 January 1958, Beluvai, Mysore State (present-day Karnataka)",
            },
            {
              icon: MapPin,
              title: "Residence",
              desc: "Raj Bhavan, Vijayawada, Andhra Pradesh, India",
            },
            {
              icon: GraduationCap,
              title: "Education",
              desc:
                "B.Com – Mahaveera College, Moodbidri | B.A & LL.B – SDM Law College, Mangalore",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition border border-sky-100"
            >
              <card.icon className="w-10 h-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* ================= EARLY LIFE ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-sky-100 rounded-3xl shadow-xl p-10 space-y-6 border border-sky-100"
        >
          <h2 className="text-3xl font-bold text-sky-800">Early Life</h2>
          <p className="text-gray-700 leading-loose text-lg">
            Syed Abdul Nazeer was born into an Urdu-speaking family from the
            Dakshina Kannada district of coastal Karnataka. He grew up in
            Beluvai and Moodbidri, developing a strong academic foundation and
            discipline early in life. Inspired by constitutional values and
            public service, he pursued commerce and later transitioned into
            law, laying the groundwork for a remarkable judicial career.
          </p>
        </motion.section>

        {/* ================= JUDICIAL CAREER ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-sky-800">
            Judicial Career (1983–2023)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Supreme Court of India",
                desc:
                  "Elevated to the Supreme Court in 2017, Justice Nazeer played a vital role in landmark constitutional cases including Triple Talaq, Ayodhya verdict, and demonetisation.",
              },
              {
                title: "Karnataka High Court",
                desc:
                  "Serving from 2003 to 2017, he contributed significantly to judicial administration and legal interpretation, earning national recognition.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-sky-100"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================= GOVERNOR ROLE ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-sky-200 via-sky-100 to-sky-200 rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-sky-900 mb-6">
            Governor of Andhra Pradesh
          </h2>
          <p className="text-gray-800 text-lg leading-loose">
            Appointed on 12 February 2023 by the President of India, Syed Abdul
            Nazeer assumed office as the 24th Governor of Andhra Pradesh on
            24 February 2023. As Governor, he plays a pivotal role in
            constitutional governance, legislative oversight, and promoting
            harmony between the state administration and the Union government.
          </p>
        </motion.section>

      </div>
    </main>
    </div>
    </div>
  
  );
}
