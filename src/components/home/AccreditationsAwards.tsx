'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { VERIFIED_AWARDS, DISTINGUISHED_MENTORS } from '@/data/tisData';

export default function AccreditationsAwards() {
  return (
    <section id="accreditations" className="py-20 bg-white dark:bg-[#0e1728] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <Award className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              Recognitions &amp; Leadership
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            National Accreditations &amp; Distinguished Mentors
          </h2>

          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            Consistently recognized by leading national education surveys for exceptional co-educational boarding standards, sports infrastructure, and student leadership.
          </p>
        </div>

        {/* Awards Badges Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {VERIFIED_AWARDS.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-[#fdfbf7] dark:bg-[#111827] flex flex-col items-center text-center space-y-4 hover:border-[#940a24] dark:hover:border-[#d6b46b] transition-all"
            >
              {award.badgeImage && (
                <div className="relative w-full h-44 rounded-md overflow-hidden border border-[#e5ded0] dark:border-[#24314c] bg-[#f8f5ee] dark:bg-[#162033]">
                  <Image
                    src={award.badgeImage}
                    alt={award.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b] block">
                  {award.category} ({award.year})
                </span>
                <h3 className="font-serif text-lg font-bold text-[#171a21] dark:text-[#f8fafc]">
                  {award.title}
                </h3>
                <p className="text-xs text-[#727a8a] dark:text-[#94a3b8]">
                  Surveyed and Conferred by {award.awardedBy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Distinguished Mentors Sub-Section */}
        <div className="border-t border-[#e5ded0] dark:border-[#24314c] pt-14">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="font-serif text-2xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              Mentorship by Olympic Legends &amp; Champions
            </h3>
            <p className="text-xs sm:text-sm text-[#4a5160] dark:text-[#cbd5e1]">
              National sports icons and leaders who personally guide workshops and training clinics for TIS students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DISTINGUISHED_MENTORS.map((mentor) => (
              <div
                key={mentor.id}
                className="p-4 rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-[#fdfbf7] dark:bg-[#111827] flex flex-col items-center text-center space-y-3"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#940a24] dark:border-[#d6b46b] flex-shrink-0">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-bold text-[#171a21] dark:text-[#f8fafc]">
                    {mentor.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-[#940a24] dark:text-[#d6b46b]">
                    {mentor.title}
                  </p>
                  <p className="text-[10px] text-[#727a8a] dark:text-[#94a3b8] leading-tight">
                    {mentor.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
