"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

/* ================= DATA ================= */

const footerSections = [
  {
    title: "Contact",
    links: [
      { label: "University of SKU", href: "#" },
      {
        label:
          "Senate House Campus, University Road, Old Katra, Prayagraj (Allahabad), Uttar Pradesh - 211002",
        href: "#",
      },
      { label: "0532-2461083", href: "tel:05322461083" },
    ],
  },
  {
    title: "For Visitors",
    links: [
      { label: "Address", href: "#" },
      { label: "Map & Directions", href: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Directory", href: "#" },
      { label: "NEP 2020", href: "#" },
      { label: "Sankalpana", href: "#" },
      { label: "Tender", href: "#" },
      { label: "Academic Calendar", href: "#" },
      { label: "Download Forms", href: "#" },
    ],
  },
  {
    title: "Student Services",
    links: [
      { label: "Pay Fees", href: "#" },
      { label: "Admit Card", href: "#" },
      { label: "Student Feedback Form", href: "#" },
      { label: "Holidays - 2025", href: "#" },
      { label: "Holidays - 2026", href: "#" },
      { label: "Public Self-Disclosure", href: "#" },
      { label: "Study in India", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Annual Report", href: "#" },
      { label: "Alumni Portal", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Web Mail", href: "#" },
      { label: "University Ranking", href: "#" },
      { label: "NCTE, New Delhi", href: "#" },
      { label: "Code Of Conduct", href: "#" },
    ],
  },
];

/* ================= FOOTER ================= */

export default function UniversityFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 text-white overflow-hidden">

      {/* ================= TOP INFO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* LOGO & DESCRIPTION */}
        <div className="space-y-4 animate-fade-up">
          <Image
            src="/sku logo.png" // 🔁 replace with SKU logo path
            alt="University Logo"
            width={70}
            height={70}
            priority
          />
          <p className="text-sm text-white/80 leading-relaxed max-w-sm">
            University of sku is a premier institution committed to
            academic excellence, research, and innovation, nurturing
            responsible citizens for the nation.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="flex gap-3 pt-2">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="
                  group flex h-9 w-9 items-center justify-center
                  rounded-full border border-white/30
                  transition-all duration-300
                  hover:bg-white hover:text-blue-700
                  hover:-translate-y-1
                "
              >
                <Icon size={16} className="group-hover:scale-110 transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-4 animate-fade-up [animation-delay:120ms]">
          <h4 className="text-sm font-semibold uppercase tracking-wide">
            Contact Information
          </h4>

          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2 hover:text-white transition">
              <MapPin size={16} />
              Anantapur, Andra Pradesh – 211002
            </li>
            <li className="flex gap-2 hover:text-white transition">
              <Phone size={16} />
              0532-2461083
            </li>
            <li className="flex gap-2 hover:text-white transition">
              <Mail size={16} />
              info@allduniv.ac.in
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-4 animate-fade-up [animation-delay:240ms]">
          <h4 className="text-sm font-semibold uppercase tracking-wide">
            Newsletter
          </h4>

          <div className="
            flex overflow-hidden rounded-sm
            border border-white/30
            focus-within:border-white
            transition
          ">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                bg-transparent px-4 py-2 text-sm w-full
                text-white placeholder:text-white/60
                focus:outline-none
              "
            />
            <button className="bg-white px-4 text-blue-700 hover:bg-blue-50 transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="h-px bg-white/30 w-full" />

      {/* ================= LINKS GRID (UNCHANGED) ================= */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {footerSections.map((section, i) => (
          <div
            key={section.title}
            className="animate-fade-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              {section.title}
            </h4>

            <ul className="space-y-3 text-sm text-white/80">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="
                      group inline-flex items-start gap-1
                      transition-all duration-300
                      hover:text-white hover:translate-x-1
                    "
                  >
                    <span>{link.label}</span>
                    <ExternalLink
                      size={12}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/20 px-6 py-5 text-xs text-white/80 flex flex-col md:flex-row justify-between gap-3">
        <span>© Copyright University of sku. All Rights Reserved.</span>
        <span className="hover:text-white transition">
          Visitors: Web Counter
        </span>
      </div>

      {/* DECORATIVE BLUR */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
    </footer>
  );
}
