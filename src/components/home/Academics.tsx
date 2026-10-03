'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, CheckCircle2, ChevronRight, X, Sparkles } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '@/data/tisData';
import { AcademicProgram } from '@/types';

export default function Academics() {
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);

  return (
    <section id="academics" className="py-20 bg-[#fdfbf7] dark:bg-[#0b0f19] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <BookOpen className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              Curriculum &amp; Scholastic Rigor
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            Academic Offerings &amp; Learning Stages
          </h2>

          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            From Class IV through Class XII, TIS pairs the Central Board of Secondary Education (CBSE) syllabus with experiential STEM laboratories, linguistic mastery, and supervised evening study hours.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMIC_PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-white dark:bg-[#111827] overflow-hidden flex flex-col justify-between hover:border-[#940a24] dark:hover:border-[#d6b46b] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Card Top Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f8f5ee] dark:bg-[#162033] border-b border-[#e5ded0] dark:border-[#24314c]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[10px] font-semibold text-amber-200 uppercase tracking-wider">
                    {program.curriculumBadge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-[#940a24] dark:text-[#d6b46b] block">
                      {program.gradeSpan}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#171a21] dark:text-[#f8fafc] group-hover:text-[#940a24] dark:group-hover:text-[#d6b46b] transition-colors">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
                    {program.description}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {program.keyFeatures.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-[#727a8a] dark:text-[#94a3b8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#940a24] dark:text-[#d6b46b] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="w-full py-2 px-3 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-[#f8f5ee] dark:bg-[#162033] hover:bg-[#940a24] hover:text-white dark:hover:bg-[#940a24] dark:hover:text-white text-xs font-semibold text-[#171a21] dark:text-[#f8fafc] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Curriculum Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal on Learn More */}
        <AnimatePresence>
          {selectedProgram && (
            <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProgram(null)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg rounded-lg border border-[#c8bda9] dark:border-[#374768] bg-white dark:bg-[#111827] p-6 sm:p-8 z-10 shadow-2xl space-y-4"
              >
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 p-2 rounded-md text-[#727a8a] dark:text-[#94a3b8] hover:text-black dark:hover:text-white cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-1 pr-6">
                  <span className="text-[11px] font-bold text-[#940a24] dark:text-[#d6b46b] uppercase tracking-wider">
                    {selectedProgram.curriculumBadge}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#171a21] dark:text-[#f8fafc]">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-xs text-[#727a8a] dark:text-[#94a3b8]">
                    {selectedProgram.gradeSpan}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
                  {selectedProgram.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#171a21] dark:text-[#f8fafc]">
                    Pedagogical Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProgram.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#4a5160] dark:text-[#cbd5e1]">
                        <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#e5ded0] dark:border-[#24314c] flex justify-end">
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="px-4 py-2 rounded-md bg-[#940a24] text-white text-xs font-semibold cursor-pointer"
                  >
                    Close Overview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
