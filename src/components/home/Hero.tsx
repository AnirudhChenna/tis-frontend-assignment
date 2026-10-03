'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '@/data/tisData';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section id="overview" className="relative overflow-hidden bg-[#fdfbf7] dark:bg-[#0b0f19] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      {/* Subtle Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#940a24 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Authoritative Editorial Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
              <ShieldCheck className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
              <span className="text-xs font-semibold text-[#171a21] dark:text-[#f8fafc] tracking-wide uppercase">
                CBSE Affiliated Co-Ed Residential School | Dehradun
              </span>
            </div>

            {/* Clear, Prestigious Headline (No Vague Copy) */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171a21] dark:text-[#f8fafc] leading-[1.15]">
              The Modern Gurukul: <br />
              <span className="text-[#940a24] dark:text-[#d6b46b]">
                Premier Residential School
              </span> in Dehradun
            </h1>

            {/* Direct, Grounded Subtitle */}
            <p className="text-base sm:text-lg text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed max-w-2xl">
              Fostering academic distinction, 16+ Olympic sports disciplines, and character leadership across a 22-acre pollution-free residential campus in the Himalayan foothills for Classes IV to XII.
            </p>

            {/* Key Verified Institutional Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-[#171a21] dark:text-[#cbd5e1]">
                <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] flex-shrink-0" />
                <span>6:1 Student-Teacher Ratio</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#171a21] dark:text-[#cbd5e1]">
                <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] flex-shrink-0" />
                <span>16+ Olympic Sports</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#171a21] dark:text-[#cbd5e1]">
                <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] flex-shrink-0" />
                <span>24*7 Medical Assistance</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#171a21] dark:text-[#cbd5e1]">
                <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] flex-shrink-0" />
                <span>Segregated Boarding Wings</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#171a21] dark:text-[#cbd5e1]">
                <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] flex-shrink-0" />
                <span>Pure Vegetarian Dining</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#171a21] dark:text-[#cbd5e1]">
                <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] flex-shrink-0" />
                <span>Robotics &amp; AI Labs</span>
              </div>
            </div>

            {/* Call to Actions (Crisp architectural buttons - NOT pill shaped) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#940a24] hover:bg-[#74061a] text-white font-semibold text-sm tracking-wide transition-all shadow-md cursor-pointer"
              >
                <span>Apply for 2026-27 Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${SCHOOL_INFO.admissionsHelpline.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-white dark:bg-[#162033] hover:bg-[#f8f5ee] dark:hover:bg-[#1c273e] text-[#171a21] dark:text-[#f8fafc] font-semibold text-sm tracking-wide transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
                <span>Helpline: {SCHOOL_INFO.admissionsHelpline}</span>
              </a>
            </div>

            {/* Quick Location Footnote */}
            <div className="flex items-center gap-2 text-xs text-[#727a8a] dark:text-[#94a3b8] pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#940a24] dark:text-[#d6b46b]" />
              <span>Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)</span>
            </div>
          </motion.div>

          {/* Right Column: Authentic Campus Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-[#c8bda9] dark:border-[#374768] shadow-xl bg-white dark:bg-[#111827]">
              {/* Primary Visual: Real Campus Life */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/tis/Image_2.0c5295c9.webp"
                  alt="Tulas International School Campus Students"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                
                {/* Overlay Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Holistic Excellence</span>
                  </div>
                  <p className="text-sm font-serif font-medium leading-snug">
                    Balancing CBSE scholastic rigor with Olympic sports and residential pastoral warmth.
                  </p>
                </div>
              </div>

              {/* Sub-strip with authentic activity photography */}
              <div className="grid grid-cols-3 divide-x divide-[#e5ded0] dark:divide-[#24314c] border-t border-[#e5ded0] dark:border-[#24314c] bg-[#f8f5ee] dark:bg-[#162033]">
                <div className="p-3 text-center">
                  <div className="relative w-full h-12 mb-1.5">
                    <Image
                      src="/images/tis/archery.7a805345.png"
                      alt="Archery at TIS"
                      fill
                      className="object-contain"
                      sizes="120px"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#171a21] dark:text-[#f8fafc] block">
                    Archery Academy
                  </span>
                </div>

                <div className="p-3 text-center">
                  <div className="relative w-full h-12 mb-1.5">
                    <Image
                      src="/images/tis/horseRiding.8f259127.png"
                      alt="Horse Riding at TIS"
                      fill
                      className="object-contain"
                      sizes="120px"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#171a21] dark:text-[#f8fafc] block">
                    Horse Riding
                  </span>
                </div>

                <div className="p-3 text-center">
                  <div className="relative w-full h-12 mb-1.5">
                    <Image
                      src="/images/tis/shooting.b0b11d74.png"
                      alt="Shooting Range at TIS"
                      fill
                      className="object-contain"
                      sizes="120px"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#171a21] dark:text-[#f8fafc] block">
                    Precision Shooting
                  </span>
                </div>
              </div>
            </div>

            {/* Official Ranking Floating Badge (Real Verified Data) */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-[#0e1728] text-white px-4 py-3 rounded-md shadow-lg border border-[#24314c]">
              <div className="w-9 h-9 rounded-md bg-[#940a24] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-amber-300" />
              </div>
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                  Ranked #1 Boarding School
                </p>
                <p className="text-xs text-[#cbd5e1]">
                  Co-Ed Residential in Dehradun by Education Today
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
