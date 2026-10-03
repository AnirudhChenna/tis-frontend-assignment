'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '@/data/tisData';

interface AdmissionsCTAProps {
  onOpenEnquiry: () => void;
}

export default function AdmissionsCTA({ onOpenEnquiry }: AdmissionsCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#0e1728] text-white py-16 sm:py-20 border-b border-[#24314c] transition-colors">
      {/* Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#c09d59 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#162033] border border-[#24314c] text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Limited Seats for Academic Year 2026-27</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Begin Your Journey at <br />
          <span className="text-[#d6b46b]">Tulas International School</span>
        </h2>

        <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed">
          Give your child the lifelong gift of character, Olympic sports discipline, and CBSE academic distinction on our 22-acre Dehradun residential campus.
        </p>

        {/* 3 Prominent Action Buttons (Architectural - NOT pill shaped) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-6 py-3.5 rounded-md bg-[#940a24] hover:bg-[#b90124] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-6 py-3.5 rounded-md bg-white hover:bg-[#f8f5ee] text-[#0e1728] font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Schedule Campus Visit</span>
            <Calendar className="w-4 h-4 text-[#940a24]" />
          </button>

          <a
            href={`tel:${SCHOOL_INFO.admissionsHelpline.replace(/[^0-9+]/g, '')}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-md border border-[#c8bda9]/40 bg-[#162033] hover:bg-[#1c273e] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#d6b46b]" />
            <span>Call: {SCHOOL_INFO.admissionsHelpline}</span>
          </a>
        </div>

        <div className="pt-4 text-xs text-[#94a3b8] flex items-center justify-center gap-4 flex-wrap">
          <span>Co-Ed Residential (Classes IV - XII)</span>
          <span>•</span>
          <span>Day-Boarding Available for Dehradun</span>
          <span>•</span>
          <span>Merit Scholarships Available</span>
        </div>
      </div>
    </section>
  );
}
