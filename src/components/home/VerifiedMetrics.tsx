'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trees, Trophy, Users, HeartPulse, Landmark, Globe } from 'lucide-react';
import { VERIFIED_METRICS } from '@/data/tisData';

export default function VerifiedMetrics() {
  const iconMap: Record<string, React.ReactNode> = {
    Trees: <Trees className="w-6 h-6 text-[#940a24] dark:text-[#d6b46b]" />,
    Trophy: <Trophy className="w-6 h-6 text-[#940a24] dark:text-[#d6b46b]" />,
    Users: <Users className="w-6 h-6 text-[#940a24] dark:text-[#d6b46b]" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-[#940a24] dark:text-[#d6b46b]" />,
    Landmark: <Landmark className="w-6 h-6 text-[#940a24] dark:text-[#d6b46b]" />,
    Globe: <Globe className="w-6 h-6 text-[#940a24] dark:text-[#d6b46b]" />
  };

  return (
    <section className="py-14 bg-white dark:bg-[#0e1728] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#940a24] dark:text-[#d6b46b]">
            Institutional Credentials
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            Verified Campus Facts &amp; Infrastructure
          </h2>
          <p className="text-sm text-[#4a5160] dark:text-[#cbd5e1]">
            Authentic operational scale and residential facilities at Tulas International School, Dehradun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-[#fdfbf7] dark:bg-[#111827] hover:border-[#940a24] dark:hover:border-[#d6b46b] transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-md bg-[#f8f5ee] dark:bg-[#162033] flex items-center justify-center border border-[#e5ded0] dark:border-[#24314c] group-hover:scale-105 transition-transform">
                  {iconMap[metric.iconName]}
                </div>
                <span className="text-2xl font-serif font-black text-[#940a24] dark:text-[#d6b46b]">
                  {metric.value}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#171a21] dark:text-[#f8fafc] mb-1">
                {metric.label}
              </h3>
              <p className="text-xs text-[#727a8a] dark:text-[#94a3b8] leading-relaxed">
                {metric.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
