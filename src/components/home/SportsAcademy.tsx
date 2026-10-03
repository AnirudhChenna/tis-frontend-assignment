'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { REAL_SPORTS_FACILITIES } from '@/data/tisData';

export default function SportsAcademy() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 16+ Disciplines' },
    { id: 'olympic', label: 'Olympic Sports' },
    { id: 'field', label: 'Outdoor Fields' },
    { id: 'indoor', label: 'Indoor Arenas' },
    { id: 'equestrian', label: 'Equestrian & Riding' },
  ];

  const filteredSports = selectedCategory === 'all'
    ? REAL_SPORTS_FACILITIES
    : REAL_SPORTS_FACILITIES.filter(s => s.category === selectedCategory);

  return (
    <section id="sports" className="py-20 bg-white dark:bg-[#0e1728] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <Trophy className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              Sports Foundation
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            It&apos;s Not Just a Facility. At Tulas It&apos;s The Foundation.
          </h2>

          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            16+ sports curated to bring joy, physical fortitude, and strategic discipline to your child&apos;s daily boarding life. Led by certified NIS instructors and national championship mentors.
          </p>
        </div>

        {/* Filter Tabs (Architectural - NOT pill shaped) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-md text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#940a24] text-white shadow-sm'
                  : 'bg-[#fdfbf7] dark:bg-[#111827] border border-[#e5ded0] dark:border-[#24314c] text-[#4a5160] dark:text-[#cbd5e1] hover:border-[#940a24] dark:hover:border-[#d6b46b]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sports Cards Grid (Staggered Entrance) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSports.map((sport, idx) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-[#fdfbf7] dark:bg-[#111827] overflow-hidden hover:shadow-lg hover:border-[#940a24] dark:hover:border-[#d6b46b] transition-all flex flex-col"
            >
              {/* Image Container with Real Photo */}
              <div className="relative aspect-[4/3] w-full bg-[#f8f5ee] dark:bg-[#162033] overflow-hidden border-b border-[#e5ded0] dark:border-[#24314c]">
                <Image
                  src={sport.image}
                  alt={sport.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[10px] font-semibold tracking-wider uppercase text-white">
                  {sport.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#171a21] dark:text-[#f8fafc] group-hover:text-[#940a24] dark:group-hover:text-[#d6b46b] transition-colors">
                    {sport.name}
                  </h3>
                  <p className="text-xs text-[#4a5160] dark:text-[#cbd5e1] mt-1.5 leading-relaxed">
                    {sport.description}
                  </p>
                </div>

                {sport.coachCredentials && (
                  <div className="pt-2 border-t border-[#e5ded0] dark:border-[#24314c] flex items-center gap-1.5 text-[11px] font-medium text-[#727a8a] dark:text-[#94a3b8]">
                    <Award className="w-3.5 h-3.5 text-[#940a24] dark:text-[#d6b46b] flex-shrink-0" />
                    <span>{sport.coachCredentials}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
