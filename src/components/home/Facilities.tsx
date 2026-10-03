'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { CAMPUS_FACILITIES } from '@/data/tisData';

export default function Facilities() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 22-Acre Infrastructure' },
    { id: 'Academic Infrastructure', label: 'Academics & Library' },
    { id: 'Athletics & Fitness', label: 'Olympic Sports' },
    { id: 'Pastoral Living', label: 'Boarding & Dining' },
    { id: 'Scientific Research', label: 'STEM & Labs' },
  ];

  const filtered = activeCategory === 'all'
    ? CAMPUS_FACILITIES
    : CAMPUS_FACILITIES.filter(f => f.category === activeCategory);

  return (
    <section id="facilities" className="py-20 bg-white dark:bg-[#0e1728] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <Building2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              World-Class Infrastructure
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            Campus &amp; State-of-the-Art Facilities
          </h2>

          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            Spread over 22 pollution-free acres in Dehradun, our campus provides safe, modern spaces designed for holistic intellectual and physical growth.
          </p>
        </div>

        {/* Category Filters (Architectural - NOT pill shaped) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#940a24] text-white shadow-sm'
                  : 'bg-[#fdfbf7] dark:bg-[#111827] border border-[#e5ded0] dark:border-[#24314c] text-[#4a5160] dark:text-[#cbd5e1] hover:border-[#940a24] dark:hover:border-[#d6b46b]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-[#fdfbf7] dark:bg-[#111827] overflow-hidden flex flex-col justify-between hover:border-[#940a24] dark:hover:border-[#d6b46b] hover:shadow-md transition-all"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f8f5ee] dark:bg-[#162033]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/60 px-2 py-0.5 rounded">
                  {item.category}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#171a21] dark:text-[#f8fafc] group-hover:text-[#940a24] dark:group-hover:text-[#d6b46b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4a5160] dark:text-[#cbd5e1] mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e5ded0] dark:border-[#24314c] flex items-center justify-between text-[11px] text-[#727a8a] dark:text-[#94a3b8]">
                  <span className="font-medium text-[#171a21] dark:text-[#cbd5e1]">
                    {item.specs}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#940a24] dark:text-[#d6b46b]">
                    TIS Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
