'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock } from 'lucide-react';
import { STUDENT_ACTIVITIES } from '@/data/tisData';

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Life at TIS' },
    { id: 'arts', label: 'Arts & Culture' },
    { id: 'sports', label: 'Sports & Dojo' },
    { id: 'clubs', label: 'Clubs & Innovation' },
  ];

  const filtered = selectedCategory === 'all'
    ? STUDENT_ACTIVITIES
    : STUDENT_ACTIVITIES.filter(a => a.category === selectedCategory);

  return (
    <section id="life-at-tis" className="py-20 bg-white dark:bg-[#0e1728] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <Sparkles className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              Beyond Academics
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            Life at TIS: Creativity, Culture &amp; Leadership
          </h2>

          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            School is more than just textbooks. At Tulas International School, students discover latent passions through pottery studios, classical kathak, robotics hackathons, and riding stables.
          </p>
        </div>

        {/* Filter Tabs (Architectural - NOT pill shaped) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#940a24] text-white shadow-sm'
                  : 'bg-[#fdfbf7] dark:bg-[#111827] border border-[#e5ded0] dark:border-[#24314c] text-[#4a5160] dark:text-[#cbd5e1] hover:border-[#940a24] dark:hover:border-[#d6b46b]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Activities Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((activity, idx) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="group rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-[#fdfbf7] dark:bg-[#111827] overflow-hidden flex flex-col justify-between hover:border-[#940a24] dark:hover:border-[#d6b46b] hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f5ee] dark:bg-[#162033]">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-base font-bold leading-tight">
                    {activity.title}
                  </h3>
                </div>
              </div>

              {/* Description & Timing */}
              <div className="p-4 space-y-3 flex-grow flex flex-col justify-between">
                <p className="text-xs text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
                  {activity.description}
                </p>

                <div className="pt-2.5 border-t border-[#e5ded0] dark:border-[#24314c] flex items-center justify-between text-[11px] text-[#727a8a] dark:text-[#94a3b8]">
                  <span className="flex items-center gap-1.5 font-medium text-[#171a21] dark:text-[#cbd5e1]">
                    <Clock className="w-3.5 h-3.5 text-[#940a24] dark:text-[#d6b46b]" />
                    {activity.frequency}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-[#940a24] dark:text-[#d6b46b]">
                    Explore
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
