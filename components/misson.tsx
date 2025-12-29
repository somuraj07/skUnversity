"use client";

import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Globe, Users, BookOpen, Briefcase, Heart } from "lucide-react";

export default function VisionMissionPage() {
  const visionPoints = [
    {
      icon: <GraduationCap className="w-10 h-10 text-sky-500" />,
      title: "Academic Excellence",
      bullets: [
        "Encourage critical thinking and problem-solving skills.",
        "Blend theoretical knowledge with practical applications.",
        "Develop lifelong learning habits among students.",
        "Foster scholarly research and knowledge dissemination.",
      ],
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-sky-500" />,
      title: "Innovative Research",
      bullets: [
        "Promote interdisciplinary research collaborations.",
        "Develop solutions for societal and technological challenges.",
        "Encourage creativity, innovation, and curiosity.",
        "Support student and faculty-led research initiatives.",
      ],
    },
    {
      icon: <Globe className="w-10 h-10 text-sky-500" />,
      title: "Global Recognition",
      bullets: [
        "Attract diverse talent from across the world.",
        "Collaborate with international academic institutions.",
        "Maintain high academic standards and global benchmarks.",
        "Prepare students for international career opportunities.",
      ],
    },
  ];

  const missionPoints = [
    {
      icon: <Users className="w-10 h-10 text-sky-500" />,
      title: "Student Development",
      bullets: [
        "Build leadership skills and ethical values.",
        "Encourage social responsibility and civic engagement.",
        "Develop emotional intelligence and resilience.",
        "Support personal growth alongside academic excellence.",
      ],
    },
    {
      icon: <BookOpen className="w-10 h-10 text-sky-500" />,
      title: "Quality Education",
      bullets: [
        "Provide innovative curriculum aligned with global standards.",
        "Offer experiential learning and practical exposure.",
        "Mentor students to achieve academic and professional success.",
        "Promote interdisciplinary knowledge and critical thinking.",
      ],
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-sky-500" />,
      title: "Research & Innovation",
      bullets: [
        "Encourage knowledge creation and intellectual property generation.",
        "Support start-ups and entrepreneurial initiatives.",
        "Promote impactful discoveries for societal benefit.",
        "Collaborate across departments for innovative solutions.",
      ],
    },
    {
      icon: <Briefcase className="w-10 h-10 text-sky-500" />,
      title: "Industry Collaboration",
      bullets: [
        "Bridge the gap between academia and industry.",
        "Offer internships, projects, and practical training.",
        "Prepare students to meet workforce demands.",
        "Promote entrepreneurial mindset and professional excellence.",
      ],
    },
    {
      icon: <Heart className="w-10 h-10 text-sky-500" />,
      title: "Social Responsibility",
      bullets: [
        "Encourage community engagement and volunteerism.",
        "Promote sustainable development and ethical practices.",
        "Instill compassion, integrity, and civic responsibility.",
        "Foster students who positively impact society.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-16 px-6 flex flex-col items-center">
      {/* HEADER */}
      <motion.h1
        className="text-5xl font-bold text-sky-700 mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Vision & Mission
      </motion.h1>

      {/* VISION SECTION */}
      <section className="max-w-8xl w-full mb-20">
        <motion.h2
          className="text-3xl font-semibold text-sky-600 mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Vision
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {visionPoints.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-start hover:scale-105 transition-transform duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-sky-700">{item.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="max-w-8xl w-full">
        <motion.h2
          className="text-3xl font-semibold text-sky-600 mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Mission
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {missionPoints.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-start hover:scale-105 transition-transform duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-sky-700">{item.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <motion.p
        className="mt-20 text-gray-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Sri Krishnadevaraya University, Anantapur
      </motion.p>
    </main>
  );
}
