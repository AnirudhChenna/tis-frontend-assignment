'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Trophy, Compass, Trees, Globe, CheckCircle2 } from 'lucide-react';
import { WHY_TIS_POINTS } from '@/data/tisData';

export default function WhyTIS() {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
    Users: <Users className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
    Trophy: <Trophy className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
    Compass: <Compass className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
    Trees: <Trees className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
    Globe: <Globe className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b]" />,
  };

  return (
    <section id="why-tis" className="py-20 bg-[#fdfbf7] dark:bg-[#0b0f19] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              Why Choose TIS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            Distinctive Advantages for Every Scholar
          </h2>

          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            Discover why parents across India entrust their children to Tulas International School for residential boarding and day-boarding education.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_TIS_POINTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="p-6 rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-white dark:bg-[#111827] hover:border-[#940a24] dark:hover:border-[#d6b46b] transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[item.icon]}
                  </div>
                  {item.statBadge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#f8f5ee] dark:bg-[#162033] text-[#940a24] dark:text-[#d6b46b] border border-[#e5ded0] dark:border-[#24314c]">
                      {item.statBadge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-base font-bold text-[#171a21] dark:text-[#f8fafc] group-hover:text-[#940a24] dark:group-hover:text-[#d6b46b] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
                  {item.detailedText}
                </p>
              </div>

              <div className="pt-3 border-t border-[#e5ded0] dark:border-[#24314c] text-[11px] font-semibold text-[#940a24] dark:text-[#d6b46b]">
                {item.shortDesc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
