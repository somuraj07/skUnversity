"use client";
import { motion } from 'framer-motion';

const staffData = [
  {
    name: "Shri S. Abdul Nazeer",
    role: "Chancellor",
    designation: "Governor of Andhra Pradesh",
    image: "/1.jpg" // Replace with actual URL
  },
  {
    name: "Prof. B ANITHA",
    role: "Vice-Chancellor",
    designation: "Vice-Chancellor",
image: "/2.jpg"  },
  {
    name: "Shri Ashish Kumar Chauhan",
    role: "Chancellor",
    designation: "Professor of Economics",
    image: "/3.jpg"
  },
  {
    name: "Dr. E. RAMESH BABU",
    role: "Registrar",
    designation: "Registrar",
    image: "/4.jpg"
  }
];

interface Person {
  name: string;
  role: string;
  designation: string;
  image: string;
}

const ProfileCard = ({ person }: { person: Person }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="flex flex-col group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl bg-sky-100 aspect-[4/5] shadow-md transition-shadow hover:shadow-xl">
        <img 
          src={person.image} 
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Skyblue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 via-transparent to-transparent opacity-80" />
        
        {/* Bottom Left Label (Role) */}
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-medium tracking-wide uppercase opacity-90">
            {person.role}
          </p>
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-bold text-sky-900 group-hover:text-sky-600 transition-colors">
          {person.name}
        </h3>
        <p className="text-xs font-semibold text-rose-600 uppercase tracking-tighter leading-tight">
          {person.designation}
        </p>
      </div>
    </motion.div>
  );
};

export default function LeadershipSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Optional Header */}
        <div className="mb-12 border-l-4 border-sky-500 pl-4">
          <h2 className="text-3xl font-bold text-sky-950">Our Leadership</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffData.map((person, index) => (
            <ProfileCard key={index} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}