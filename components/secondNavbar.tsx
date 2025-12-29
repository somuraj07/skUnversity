"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menu = [
    { title: "Home", items: [], href: "/" },

    {
        title: "About",
        items: [
            { label: "About University", href: "/about" },
            { label: "Mission & Vision", href: "/misson" },
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
            { label: "Chancellor", href: "/syed-abdul-nazeer" },
            { label: "Vice Chancellor", href: "/vice-chancellor" },
            { label: "Rector", href: "/rector" },
            { label: "Registrar", href: "/registrar" },
            { label: "Deans", href: "/administration/deans" },
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
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!mobileOpen) setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mobileOpen]);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <header className="fixed top-0 w-full z-50">

            {/* 🔵 UNIVERSITY NAME ROW */}
            <div
                className={`transition-all duration-500 ${scrolled ? "bg-sky-800 shadow-md" : "bg-sky-800"}`}
            >
                <div className="flex items-center justify-between md:justify-center gap-4 py-3 px-4 md:px-0">
<Link href="/" legacyBehavior>
      <a>
        <Image
          src="/sku logo.png"
          alt="Logo"
          width={60}
          height={60}
          priority
        />
      </a>
    </Link>                    <h1 className="text-2xl font-bold text-white tracking-wide md:block hidden">
                        SRI KRISHNADEVARAYA UNIVERSITY
                    </h1>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {mobileOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* 🌫️ Desktop Menu */}
            <div className={`transition-all duration-500 ${scrolled ? "bg-white shadow-sm" : "bg-white"}`}>
                <nav className="hidden md:flex justify-center gap-2 py-2">
                    {menu.map((menuItem) => (
                        <div key={menuItem.title} className="relative group">
                            {menuItem.href ? (
                                <Link
                                    href={menuItem.href}
                                    className="px-4 py-2 font-medium cursor-pointer transition text-gray-900 hover:text-sky-600"
                                >
                                    {menuItem.title}
                                </Link>
                            ) : (
                                <span className="px-4 py-2 font-medium cursor-pointer transition text-gray-900 hover:text-sky-600">
                                    {menuItem.title}
                                </span>
                            )}

                            {menuItem.items.length > 0 && (
                                <div className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/30 opacity-0 invisible translate-y-4 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100">
                                    <ul className="py-4 text-sm text-gray-800">
                                        {menuItem.items.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className="block px-5 py-2.5 rounded-lg mx-2 transition-all duration-200 hover:bg-sky-500/10 hover:text-sky-700 hover:pl-7"
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

            {/* 🌫️ Mobile Menu */}
            {mobileOpen && (
                <div className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white/30 backdrop-blur-lg shadow-2xl rounded-r-3xl p-6 z-50 animate-slide-in overflow-y-auto">
                    
                    {/* Close Icon on LEFT side */}
                    <div className="flex justify-start mb-6">
                        <button
                            className="text-gray-900"
                            onClick={() => setMobileOpen(false)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <nav className="space-y-3">
                        {menu.map((menuItem, index) => (
                            <div
                                key={menuItem.title}
                                className="bg-white/50 rounded-xl p-3 backdrop-blur-md shadow-md transition-all hover:shadow-lg hover:translate-y-1"
                            >
                                <button
                                    className="w-full text-left font-semibold text-gray-900 py-1 flex justify-between items-center"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span>{menuItem.title}</span>
                                    <span className="text-gray-500">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                {activeIndex === index && menuItem.items.length > 0 && (
                                    <ul className="pl-3 pt-1 space-y-1">
                                        {menuItem.items.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className="block py-1 text-gray-700 hover:text-sky-600 hover:pl-1 transition-all duration-200"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}

            {/* Mobile Slide Animation */}
            <style jsx>{`
                .animate-slide-in {
                    transform: translateX(100%);
                    animation: slideIn 0.35s forwards ease-out;
                }
                @keyframes slideIn {
                    to {
                        transform: translateX(0%);
                    }
                }
            `}</style>
        </header>
    );
}
