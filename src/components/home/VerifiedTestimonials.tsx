'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { VERIFIED_TESTIMONIALS } from '@/data/tisData';

export default function VerifiedTestimonials() {
  const [activeTab, setActiveTab] = useState<'all' | 'primary' | 'middle' | 'senior'>('all');

  const filteredTestimonials = activeTab === 'all'
    ? VERIFIED_TESTIMONIALS
    : VERIFIED_TESTIMONIALS.filter(t => {
        if (activeTab === 'primary') return t.gradeContext.toLowerCase().includes('primary');
        if (activeTab === 'middle') return t.gradeContext.toLowerCase().includes('middle');
        if (activeTab === 'senior') return t.gradeContext.toLowerCase().includes('senior') || t.gradeContext.toLowerCase().includes('secondary');
        return true;
      });

  return (
    <section id="testimonials" className="py-20 bg-[#fdfbf7] dark:bg-[#0b0f19] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <CheckCircle className="w-4 h-4 text-[#007a83] dark:text-[#3d9fa7]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#007a83] dark:text-[#3d9fa7]">
              Verified Parent Feedback
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            Words From Our Boarding School Parents
          </h2>

          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            Real experiences from families across India whose children reside, study, and thrive at Tulas International School, Dehradun.
          </p>
        </div>

        {/* Filter Buttons (Architectural - NOT pill shaped) */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'primary', label: 'Primary School' },
            { id: 'middle', label: 'Middle School' },
            { id: 'senior', label: 'Senior & Secondary' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#940a24] text-white shadow-sm'
                  : 'bg-white dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c] text-[#4a5160] dark:text-[#cbd5e1] hover:border-[#940a24]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid (Staggered Entrance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="p-6 rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-white dark:bg-[#111827] flex flex-col justify-between hover:border-[#940a24] dark:hover:border-[#d6b46b] transition-all shadow-sm group"
            >
              <div className="space-y-4">
                {/* 5 Star Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-[#727a8a] dark:text-[#94a3b8] tracking-wider uppercase">
                    {review.verifiedSource}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author & Student Details */}
              <div className="pt-4 mt-4 border-t border-[#e5ded0] dark:border-[#24314c] flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#c8bda9] dark:border-[#374768] flex-shrink-0 bg-[#f8f5ee] dark:bg-[#162033]">
                  <Image
                    src={review.image}
                    alt={review.parentName}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>

                <div>
                  <h4 className="font-serif text-sm font-bold text-[#171a21] dark:text-[#f8fafc]">
                    {review.parentName}
                  </h4>
                  <p className="text-[11px] text-[#940a24] dark:text-[#d6b46b] font-medium">
                    {review.relation}
                  </p>
                  <span className="text-[10px] text-[#727a8a] dark:text-[#94a3b8] block">
                    {review.gradeContext}
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
