'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Compass, Trees, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO, VERIFIED_METRICS } from '@/data/tisData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0e1728] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <Compass className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              About Tulas International School
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            A Modern Gurukul for the Leaders of Tomorrow
          </h2>

          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            Established in 2012 under the aegis of Rishabh Educational Trust, Tulas International School imparts education through seamless opportunities. Nestled in the serene foothills of Dehradun, we merge ancient Indian Gurukul values with contemporary global pedagogy.
          </p>
        </div>

        {/* Two-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
                Vision &amp; Heritage
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171a21] dark:text-[#f8fafc] leading-tight">
                Where Ancient Mentorship Meets 21st-Century Scientific Inquiry
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
              At TIS, we believe in bringing out the best in every student, whether it is academics, sports, music, art, or drama. For us, school is not merely about scheduled lessons; it is an ecosystem of endless opportunities waiting to be explored.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#171a21] dark:text-[#cbd5e1]">
                  <strong>Affiliation:</strong> Central Board of Secondary Education (CBSE Affiliation No. 3530464).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#171a21] dark:text-[#cbd5e1]">
                  <strong>Co-Educational Boarding:</strong> Welcoming boys and girls from Class IV to Class XII with strictly segregated residential wings.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#171a21] dark:text-[#cbd5e1]">
                  <strong>Himalayan Setting:</strong> 22-acre pollution-free green expanse in Dehradun providing clean mountain air conducive to focused study.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#940a24] dark:text-[#d6b46b] flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#171a21] dark:text-[#f8fafc]">
                  Governed by Rishabh Educational Trust
                </p>
                <p className="text-[11px] text-[#727a8a] dark:text-[#94a3b8]">
                  Founded with a vision of ethical service, intellectual excellence, and nation-building.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Supporting Visual with Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-[#c8bda9] dark:border-[#374768] aspect-[4/3] shadow-lg">
              <Image
                src="/images/tis/Image_3.21dc9e69.webp"
                alt="TIS Campus Life & Mentorship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                  The Modern Gurukul Tradition
                </span>
                <p className="text-xs sm:text-sm font-serif leading-snug">
                  Mentors and scholars living in unison, fostering intellectual stamina, moral clarity, and Olympic athletic discipline.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll-Triggered Key Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {VERIFIED_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-4 rounded-md border border-[#e5ded0] dark:border-[#24314c] bg-[#fdfbf7] dark:bg-[#111827] text-center space-y-1 hover:border-[#940a24] dark:hover:border-[#d6b46b] transition-all"
            >
              <span className="font-serif text-2xl font-black text-[#940a24] dark:text-[#d6b46b] block">
                {metric.value}
              </span>
              <h4 className="text-xs font-bold text-[#171a21] dark:text-[#f8fafc] leading-tight">
                {metric.label}
              </h4>
              <p className="text-[10px] text-[#727a8a] dark:text-[#94a3b8] leading-tight">
                {metric.subtext.split(',')[0]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
