"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Landmark,
  Users,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { div } from "framer-motion/client";
import Navbar from "@/components/secondNavbar";

export default function Page() {
  return (
    <div>
       <div>
         <Navbar/>
    </div>
    <div>
        <main className="relative min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-white px-6 py-20 overflow-hidden">

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-24">

        {/* ================= HERO ================= */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          {/* TEXT */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900">
              Dr. E. Ramesh Babu
            </h1>

            <p className="text-xl font-semibold text-sky-700">
              Registrar
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. E. Ramesh Babu serves as the <strong>Registrar of Sri
              Krishnadevaraya University, Anantapur</strong>. He is a key
              administrative authority responsible for overseeing university
              governance, academic administration, and regulatory compliance
              as per statutory provisions.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: Landmark, text: "University Administration" },
                { icon: FileText, text: "Academic Records & Notifications" },
                { icon: ShieldCheck, text: "Regulatory & Statutory Compliance" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-sky-100 shadow-lg rounded-xl px-4 py-2"
                >
                  <item.icon className="text-sky-600 w-5 h-5" />
                  <span className="text-sm font-semibold text-gray-800">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative mx-auto w-[420px] h-[520px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(14,165,233,0.35)]"
          >
            <Image
              src="/4.jpg" // 🔁 replace with your actual image path
              alt="Dr. E. Ramesh Babu - Registrar"
              fill
              className="object-cover"
              priority
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </motion.section>

        {/* ================= RESPONSIBILITIES ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-12 space-y-6 border border-sky-100"
        >
          <h2 className="text-3xl font-extrabold text-sky-900">
            Roles & Responsibilities
          </h2>

          <p className="text-gray-700 text-lg leading-loose">
            As Registrar, Dr. E. Ramesh Babu is responsible for coordinating
            administrative and academic functions of the University. He
            ensures the proper execution of decisions taken by statutory
            bodies and supports the Vice-Chancellor in institutional
            governance.
          </p>

          <p className="text-gray-700 text-lg leading-loose">
            His role includes maintaining official university records,
            issuing notifications and proceedings, facilitating examinations,
            and ensuring transparency and efficiency in university
            administration.
          </p>
        </motion.section>

        {/* ================= COMMITMENT ================= */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-sky-200 via-sky-100 to-white rounded-[2.8rem] p-14 shadow-[0_40px_100px_rgba(14,165,233,0.35)]"
        >
          <h2 className="text-3xl font-extrabold text-sky-900 mb-6">
            Commitment to the Institution
          </h2>

          <p className="text-gray-800 text-lg leading-loose">
            Dr. E. Ramesh Babu is committed to strengthening administrative
            transparency, institutional efficiency, and academic integrity at
            Sri Krishnadevaraya University. His work supports the university’s
            mission of excellence in higher education and public service.
          </p>
        </motion.section>

      </div>
    </main>
    </div>  
    </div>
   
    
  );
}
