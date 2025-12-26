"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const menu = [
  { title: "Home", items: [] },
  {
    title: "About",
    items: [
      "About University",
      "Mission & Vision",
      "Acts and Statutes",
      "Ordinance",
      "CCS (Conduct) Rules",
      "University MoU's",
      "RTI",
      "Budget Information",
      "Internal Quality Assurance Cell",
      "IAIP",
      "IERB",
      "IBSC",
      "University Report",
      "Archives",
    ],
  },
  {
    title: "Administration",
    items: [
      "Visitor",
      "Chief Rector",
      "Chancellor",
      "Vice Chancellor",
      "Deans",
      "Registrar",
      "Finance Officer",
      "PRO",
      "Legal Cell",
      "Statutory Bodies",
      "Head of Departments",
      "Proctor",
      "Librarian",
      "Controller of Examinations",
      "Directors / Coordinators",
      "Telephone Directory",
      "Rajbhasha Cell",
      "Purchase & Store",
      "Former Chancellors",
      "Former Vice Chancellors",
    ],
  },
  {
    title: "Academics",
    items: [
      "Departments",
      "Institutes",
      "Centres",
      "Faculties",
      "Courses",
      "UGC Malaviya Mission (HRDC)",
      "University Industry Interface Cell",
      "Rajiv Gandhi Chair",
      "Nehru Studies Centre",
      "Awards",
      "Academic Calendar",
      "Downloads",
      "Seminars / Conferences",
      "List of Holidays",
      "Program Outcomes",
    ],
  },
  {
    title: "Student",
    items: [
      "ABC ID",
      "Achievements",
      "Anti Ragging Cell",
      "Admit Card",
      "Results",
      "Admissions",
      "Pay Fees",
      "Scholarships / Awards",
      "International Students",
      "University Medals",
      "Placement Cell",
      "Employment Guidance Bureau",
      "UGC Grievance Portal",
      "Internal Complaints Committee",
      "Curtailed Syllabus",
      "List of Admitted Students",
    ],
  },
  {
    title: "Research",
    items: [
      "Research Projects",
      "Publications",
      "Book Published",
      "IPR / Patent",
      "Ph.D Data",
      "UGC Funded Projects",
      "Central Instrumentation Facility",
    ],
  },
  {
    title: "Facilities",
    items: [
      "Central Library",
      "Computer Centre",
      "Hostels",
      "Health Centre",
      "NCC",
      "NSS",
      "Incubation Centre",
      "Counselling Centre",
      "Athletic Association",
      "Guest House",
    ],
  },
  { title: "Gallery", items: ["Photo Gallery", "Video Gallery"] },
  { title: "Alumni", items: ["Distinguished Alumni", "Alumni Meet", "Wall of Donors"] },
  { title: "Endowment", items: [] },
  { title: "IQAC", items: [] },
  { title: "Newsletter", items: [] },
  { title: "Convocation", items: [] },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">

      {/* 🔵 UNIVERSITY NAME ROW */}
      <div
        className={`transition-all duration-500 ${
          scrolled ? "bg-sky-500 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-center gap-4 py-3">
          <Image src="/sku logo.png" alt="Logo" width={60} height={60} />
          <h1 className="text-2xl font-bold text-white tracking-wide">
            SRI KRISHNADEVARAYA UNIVERSITY
          </h1>
        </div>
      </div>

      {/* 🌫️ MENU ROW */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-lg bg-white/20 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="flex justify-center gap-2 py-2">
          {menu.map((menuItem) => (
            <div key={menuItem.title} className="relative group">
              <span
                className={`px-4 py-2 font-medium cursor-pointer transition ${
                  scrolled
                    ? "text-gray-900 hover:text-sky-600"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {menuItem.title}
              </span>

              {menuItem.items.length > 0 && (
<div
  className="
    absolute top-full left-0 mt-3 w-80
    rounded-2xl
    bg-white/90 backdrop-blur-xl
    shadow-[0_20px_40px_rgba(0,0,0,0.15)]
    border border-white/30

    opacity-0 invisible
    translate-y-4 scale-95
    transition-all duration-300 ease-out

    group-hover:opacity-100
    group-hover:visible
    group-hover:translate-y-0
    group-hover:scale-100

    transition-all duration-300 ease-out
+ delay-75

  "
>
                  <ul className="py-4 text-sm text-gray-800">
  {menuItem.items.map((item) => (
    <li
      key={item}
      className="
        px-5 py-2.5
        rounded-lg mx-2
        transition-all duration-200
        hover:bg-sky-500/10
        hover:text-sky-700
        hover:pl-7
        cursor-pointer
      "
    >
      {item}
    </li>
  ))}
</ul>

                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
