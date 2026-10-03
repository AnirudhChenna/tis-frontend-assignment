'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Utensils, HeartPulse, Clock, Sparkles } from 'lucide-react';

export default function BoardingLife() {
  const highlights = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
      title: "Segregated Hostel Wings",
      desc: "Distinct, biometric-monitored residential buildings for boys and girls with strict 24*7 security perimeter."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
      title: "Resident House Parents",
      desc: "Experienced resident mentors providing emotional warmth, daily discipline, and personalized care."
    },
    {
      icon: <Utensils className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
      title: "Pure Vegetarian Dining",
      desc: "Four wholesome, dietician-formulated daily meals cooked in an ultra-clean, stainless steel modern kitchen."
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
      title: "24*7 On-Campus Infirmary",
      desc: "Round the clock resident nursing staff, physician on call, and emergency transport always ready."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
      title: "Supervised Evening Preps",
      desc: "Dedicated two-hour evening study periods with resident teachers available for one-on-one doubt clearance."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
      title: "Weekend Enrichment",
      desc: "Trekking in Mussoorie, inter-house debates, drama productions, robotics hackathons, and cultural evenings."
    }
  ];

  return (
    <section id="boarding" className="py-20 bg-[#fdfbf7] dark:bg-[#0b0f19] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#940a24] dark:text-[#d6b46b]">
            Pastoral Living
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            A Secure, Joyful Home Away From Home
          </h2>
          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            Residential education at Tulas International School is designed around trust, camaraderie, and character. We ensure students build lifelong bonds of brotherhood and sisterhood while cultivating self-reliance.
          </p>
        </div>

        {/* 6 Grid Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="p-6 rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-white dark:bg-[#111827] hover:border-[#940a24] dark:hover:border-[#d6b46b] transition-all"
            >
              <div className="w-10 h-10 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-serif text-base font-bold text-[#171a21] dark:text-[#f8fafc] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#727a8a] dark:text-[#94a3b8] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#e5ded0] dark:border-[#24314c]">
            <Image
              src="/images/tis/pot.6f7c2ee3.webp"
              alt="Pottery and Arts at TIS"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <span className="text-white text-xs font-semibold tracking-wide">
                Pottery &amp; Sculpture Studio
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#e5ded0] dark:border-[#24314c]">
            <Image
              src="/images/tis/dance.88843edb.webp"
              alt="Performing Arts at TIS"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <span className="text-white text-xs font-semibold tracking-wide">
                Classical &amp; Contemporary Dance
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#e5ded0] dark:border-[#24314c]">
            <Image
              src="/images/tis/karate.4020fba5.webp"
              alt="Martial Arts at TIS"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <span className="text-white text-xs font-semibold tracking-wide">
                Martial Arts &amp; Self Defense
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#e5ded0] dark:border-[#24314c]">
            <Image
              src="/images/tis/swimming.6fc81e65.webp"
              alt="Swimming Pool at TIS"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <span className="text-white text-xs font-semibold tracking-wide">
                Semi-Olympic Aquatics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
