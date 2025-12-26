"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menu = [
  { title: "Home", items: [] },

  {
    title: "About",
    items: [
      { label: "About University", href: "/about" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Acts and Statutes", href: "/about/acts-and-statutes" },
      { label: "Ordinance", href: "/about/ordinance" },
      { label: "CCS (Conduct) Rules", href: "/about/ccs-conduct-rules" },
      { label: "University MoU's", href: "/about/university-mous" },
      { label: "RTI", href: "/about/rti" },
      { label: "Budget Information", href: "/about/budget-information" },
      { label: "Internal Quality Assurance Cell", href: "/about/iqac" },
      { label: "IAIP", href: "/about/iaip" },
      { label: "IERB", href: "/about/ierb" },
      { label: "IBSC", href: "/about/ibsc" },
      { label: "University Report", href: "/about/university-report" },
      { label: "Archives", href: "/about/archives" },
    ],
  },

  {
    title: "Administration",
    items: [
      { label: "Visitor", href: "/administration/visitor" },
      { label: "Chief Rector", href: "/administration/chief-rector" },
      { label: "Chancellor", href: "/administration/chancellor" },
      { label: "Vice Chancellor", href: "/administration/vice-chancellor" },
      { label: "Deans", href: "/administration/deans" },
      { label: "Registrar", href: "/administration/registrar" },
      { label: "Finance Officer", href: "/administration/finance-officer" },
      { label: "PRO", href: "/administration/pro" },
      { label: "Legal Cell", href: "/administration/legal-cell" },
      { label: "Statutory Bodies", href: "/administration/statutory-bodies" },
      { label: "Head of Departments", href: "/administration/hods" },
      { label: "Proctor", href: "/administration/proctor" },
      { label: "Librarian", href: "/administration/librarian" },
      { label: "Controller of Examinations", href: "/administration/controller-of-examinations" },
      { label: "Directors / Coordinators", href: "/administration/directors-coordinators" },
      { label: "Telephone Directory", href: "/administration/telephone-directory" },
      { label: "Rajbhasha Cell", href: "/administration/rajbhasha-cell" },
      { label: "Purchase & Store", href: "/administration/purchase-store" },
      { label: "Former Chancellors", href: "/administration/former-chancellors" },
      { label: "Former Vice Chancellors", href: "/administration/former-vice-chancellors" },
    ],
  },

  {
    title: "Academics",
    items: [
      { label: "Departments", href: "/academics/departments" },
      { label: "Institutes", href: "/academics/institutes" },
      { label: "Centres", href: "/academics/centres" },
      { label: "Faculties", href: "/academics/faculties" },
      { label: "Courses", href: "/academics/courses" },
      { label: "UGC Malaviya Mission (HRDC)", href: "/academics/hrdc" },
      { label: "University Industry Interface Cell", href: "/academics/industry-interface-cell" },
      { label: "Rajiv Gandhi Chair", href: "/academics/rajiv-gandhi-chair" },
      { label: "Nehru Studies Centre", href: "/academics/nehru-studies-centre" },
      { label: "Awards", href: "/academics/awards" },
      { label: "Academic Calendar", href: "/academics/academic-calendar" },
      { label: "Downloads", href: "/academics/downloads" },
      { label: "Seminars / Conferences", href: "/academics/seminars-conferences" },
      { label: "List of Holidays", href: "/academics/holidays" },
      { label: "Program Outcomes", href: "/academics/program-outcomes" },
    ],
  },

  {
    title: "Student",
    items: [
      { label: "ABC ID", href: "/student/abc-id" },
      { label: "Achievements", href: "/student/achievements" },
      { label: "Anti Ragging Cell", href: "/student/anti-ragging" },
      { label: "Admit Card", href: "/student/admit-card" },
      { label: "Results", href: "/student/results" },
      { label: "Admissions", href: "/student/admissions" },
      { label: "Pay Fees", href: "/student/pay-fees" },
      { label: "Scholarships / Awards", href: "/student/scholarships-awards" },
      { label: "International Students", href: "/student/international" },
      { label: "University Medals", href: "/student/university-medals" },
      { label: "Placement Cell", href: "/student/placement-cell" },
      { label: "Employment Guidance Bureau", href: "/student/employment-guidance" },
      { label: "UGC Grievance Portal", href: "/student/ugc-grievance" },
      { label: "Internal Complaints Committee", href: "/student/icc" },
      { label: "Curtailed Syllabus", href: "/student/curtailed-syllabus" },
      { label: "List of Admitted Students", href: "/student/admitted-students" },
    ],
  },

  {
    title: "Research",
    items: [
      { label: "Research Projects", href: "/research/projects" },
      { label: "Publications", href: "/research/publications" },
      { label: "Book Published", href: "/research/books" },
      { label: "IPR / Patent", href: "/research/ipr-patent" },
      { label: "Ph.D Data", href: "/research/phd-data" },
      { label: "UGC Funded Projects", href: "/research/ugc-projects" },
      { label: "Central Instrumentation Facility", href: "/research/cif" },
    ],
  },

  {
    title: "Facilities",
    items: [
      { label: "Central Library", href: "/facilities/library" },
      { label: "Computer Centre", href: "/facilities/computer-centre" },
      { label: "Hostels", href: "/facilities/hostels" },
      { label: "Health Centre", href: "/facilities/health-centre" },
      { label: "NCC", href: "/facilities/ncc" },
      { label: "NSS", href: "/facilities/nss" },
      { label: "Incubation Centre", href: "/facilities/incubation-centre" },
      { label: "Counselling Centre", href: "/facilities/counselling-centre" },
      { label: "Athletic Association", href: "/facilities/athletics" },
      { label: "Guest House", href: "/facilities/guest-house" },
    ],
  },

  {
    title: "Gallery",
    items: [
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" },
    ],
  },

  {
    title: "Alumni",
    items: [
      { label: "Distinguished Alumni", href: "/alumni/distinguished" },
      { label: "Alumni Meet", href: "/alumni/meet" },
      { label: "Wall of Donors", href: "/alumni/donors" },
    ],
  },

  { title: "Endowment", items: [] },
  { title: "IQAC", items: [] },
  { title: "Newsletter", items: [] },
  { title: "Convocation", items: [] },
]

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
          scrolled ? "bg-sky-800 shadow-md" : "bg-transparent"
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
    <li key={item.href}>
      <Link
        href={item.href}
        className="
          block px-5 py-2.5
          rounded-lg mx-2
          transition-all duration-200
          hover:bg-sky-500/10
          hover:text-sky-700
          hover:pl-7
        "
      >
        {item.label}
      </Link>
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
