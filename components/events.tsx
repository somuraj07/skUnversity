"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementPage = () => {
  // Your real events data
  const announcements = [
    { id: 1, date: '17-06-2025', title: 'Tender Notification: Run University Canteen (Janamabhoomi Canteen), Ladies Hostels and Shopping complex.', deadline: '30.06.2025', isNew: true },
    { id: 2, date: '21-05-2025', title: 'Tender Notification: Supply of 4 Nos. of Rear Tyres for University Vehicle (Ford Aspire).', deadline: '28.05.2025', isNew: true },
    { id: 3, date: '09-09-2025', title: 'Tender Notification: New 24 port / 1 GB switches to Examination Building.', deadline: '23.09.2025', isNew: true },
    { id: 4, date: '01-09-2025', title: 'Tender Notification: Supply of Laptop (HP Intel Core 13th Gen) for RUSA 2.0 Project.', deadline: '15.09.2025', isNew: false },
    { id: 5, date: '02-09-2025', title: 'Tender Notification: New cloth for seats and chairs in Science Block-IV e-class room.', deadline: '09.09.2025', isNew: false },
    { id: 6, date: '28-08-2025', title: 'Tender Notification: Supply of Uniform cloth to Watch & Ward Staff.', deadline: '06.09.2025', isNew: false },
    { id: 7, date: '10-06-2022', title: 'MEGA JOB MELA: SKU with American Telugu Association (ATA).', deadline: 'Closed', isNew: false },
    { id: 8, date: '17-06-2022', title: 'B.Ed. (ODL) Workshop schedule for Second Year (Session July-2019).', deadline: '22/06/2022', isNew: false },
    { id: 9, date: '28-02-2022', title: 'Tender Notification: Food and beverages for VIPs/Staff for XX Convocation.', deadline: '05-03-2022', isNew: false },
    { id: 10, date: '17-02-2022', title: 'Tender Notification: Supply of 81 Gold Medals for XX Convocation.', deadline: '24-02-2022', isNew: false },
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-10 font-sans">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-black text-gray-800 tracking-tighter uppercase whitespace-nowrap">
          Announcement
        </h2>
        <div className="h-[2px] w-full bg-gray-100 relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-sky-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
     {/* Left Side: Vice Chancellor / Hero Section (Redesigned) */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="lg:col-span-5 space-y-6"
>
  {/* Image Card */}
  <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-sky-200 hover:shadow-3xl transition-shadow duration-500">
    <img
      src="/2.jpg"
      alt="Vice Chancellor"
      className="w-full h-[550px] object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
    {/* Badge / Date */}
    <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-sky-500/80 px-3 py-1 rounded-full backdrop-blur-sm">
      📅 Jan 07, 2024
    </span>
  </div>

  {/* Text Content */}
  <div className="px-4 py-3 bg-white rounded-2xl shadow-lg -mt-16 relative z-10 transform transition hover:-translate-y-2 hover:shadow-2xl">
    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
      New Year Greeting from <br /> Hon'ble Vice-Chancellor
    </h3>
    <p className="mt-2 text-gray-600 text-sm md:text-base">
      Wishing all students, staff, and faculty a year full of knowledge, success, and innovation.
    </p>
    <button className="mt-4 inline-block px-6 py-2 bg-sky-600 text-white font-bold rounded-full hover:bg-sky-700 transition-all uppercase text-xs tracking-widest shadow-md hover:shadow-lg">
      View Details
    </button>
  </div>
</motion.div>

        {/* Right Side: Animated Events (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col h-[775px]">
          <div className="flex-1 overflow-hidden relative mask-fade">
            
            {/* The Moving Track */}
            <motion.div 
              className="space-y-4"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              // PAUSE ON HOVER logic
              whileHover={{ animationPlayState: "paused" }}
            >
              {/* Duplicate list for seamless loop */}
              {[...announcements, ...announcements].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 border-l-4 border-transparent hover:border-sky-500 hover:bg-sky-50/50 transition-all cursor-pointer border-b border-gray-100"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sky-500 font-bold text-xs uppercase tracking-wider">
                      Date: {item.date}
                    </span>
                    {item.isNew && (
                      <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-black animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-gray-800 font-bold text-lg leading-snug group-hover:text-sky-700">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-500 text-sm mt-2 font-medium">
                    Deadline: <span className="text-red-500">{item.deadline}</span>
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Action */}
          <div className="mt-6 flex justify-end">
            <button className="group flex items-center gap-3 text-red-700 font-black uppercase text-sm tracking-tighter border-b-2 border-red-700 pb-1 hover:text-red-500 hover:border-red-500 transition-all">
              Read All News 
              <span className="bg-red-700 group-hover:bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center transition-colors">→</span>
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </div>
  );
};

export default AnnouncementPage;