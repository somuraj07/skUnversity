"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-sky-500 text-white py-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Sri Krishnadevaraya University
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90">
            Anantapur, Andhra Pradesh
          </p>
        </div>
      </motion.section>

      {/* INTRODUCTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-600 mb-4">
            About the University
          </h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            Sri Krishnadevaraya University (SKU) is a prestigious public university
            located in Anantapur, Andhra Pradesh. Established to promote higher
            education in the Rayalaseema region, the university has emerged as a
            center of academic excellence, research, and social responsibility.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Named after the legendary Vijayanagara emperor Sri Krishnadevaraya,
            the university reflects values of knowledge, discipline, leadership,
            and cultural heritage. SKU continuously strives to empower students
            with quality education and ethical values.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-xl">
          <Image
            src="/sku1.jpg"
            alt="SKU Campus"
            width={600}
            height={400}
            className="object-cover w-full h-auto sm:h-80 md:h-96"
          />
        </div>
      </motion.section>

      {/* HISTORY */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-sky-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-xl">
            <Image
              src="/sku1.jpg"
              alt="SKU Building"
              width={600}
              height={400}
              className="object-cover w-full h-auto sm:h-80 md:h-96"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-600 mb-4">
              Our History & Legacy
            </h2>
            <p className="leading-relaxed mb-4 text-sm sm:text-base">
              Sri Krishnadevaraya University was established in 1981 with the goal
              of expanding access to higher education in economically and socially
              backward regions of Andhra Pradesh.
            </p>
            <p className="leading-relaxed text-sm sm:text-base">
              Over the decades, the university has grown into a multidisciplinary
              institution offering undergraduate, postgraduate, and doctoral
              programs. Thousands of students have graduated from SKU and are
              serving the nation in academics, industry, government, and research.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ACADEMICS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-sky-600 mb-6 text-center">
          Academic Excellence
        </h2>
        <p className="text-center max-w-4xl mx-auto leading-relaxed mb-10 text-sm sm:text-base">
          SKU offers a wide range of academic programs across Arts, Science,
          Commerce, Engineering, Management, Education, and Law. Modern teaching
          methodologies combined with strong academic foundations ensure students
          are ready for industry and research.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Undergraduate Programs", "Postgraduate Programs", "Research & PhD"].map((title, i) => (
            <motion.div
              key={i}
              className="bg-white shadow rounded-xl p-6 transform transition hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-sky-600 mb-2">{title}</h3>
              <p className="leading-relaxed text-sm sm:text-base">
                {title === "Undergraduate Programs" &&
                  "Strong foundation programs designed to build subject knowledge, communication skills, and professional readiness."}
                {title === "Postgraduate Programs" &&
                  "Advanced studies focusing on specialization, research orientation, and industry relevance."}
                {title === "Research & PhD" &&
                  "Research programs that encourage innovation, interdisciplinary learning, and knowledge creation."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* STUDENT LIFE */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-sky-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-600 mb-4">
              Student Life at SKU
            </h2>
            <p className="leading-relaxed mb-4 text-sm sm:text-base">
              Student life at Sri Krishnadevaraya University is vibrant and
              enriching. Cultural activities, sports, seminars, workshops, and
              social outreach programs keep the campus lively and engaged.
            </p>
            <p className="leading-relaxed text-sm sm:text-base">
              Clubs, associations, and student organizations play an active role
              in developing leadership, teamwork, creativity, and social values.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-xl">
            <Image
              src="/sku1.jpg"
              alt="SKU Students"
              width={600}
              height={400}
              className="object-cover w-full h-auto sm:h-80 md:h-96"
            />
          </div>
        </div>
      </motion.section>

      {/* VISION & MISSION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-white shadow rounded-xl p-6 sm:p-8 transform transition hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-sky-600 mb-3">Our Vision</h3>
          <p className="leading-relaxed text-sm sm:text-base">
            To be a globally recognized university that fosters academic excellence,
            innovative research, ethical values, and social responsibility.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 sm:p-8 transform transition hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-sky-600 mb-3">Our Mission</h3>
          <p className="leading-relaxed text-sm sm:text-base">
            To provide quality education, promote research and innovation, empower
            students with skills and values, and contribute to national and societal
            development.
          </p>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-sky-500 text-white text-center py-6 text-sm sm:text-base">
        <p>
          © {new Date().getFullYear()} Sri Krishnadevaraya University, Anantapur
        </p>
      </footer>
    </div>
  );
}
