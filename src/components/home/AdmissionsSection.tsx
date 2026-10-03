'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, CheckCircle2, FileText, HelpCircle, Send } from 'lucide-react';
import { SCHOOL_INFO, ADMISSION_STEPS } from '@/data/tisData';

interface AdmissionsProps {
  onOpenEnquiry: () => void;
}

export default function AdmissionsSection({ onOpenEnquiry }: AdmissionsProps) {
  const [selectedGrade, setSelectedGrade] = useState('Grade 6');
  const [boardingType, setBoardingType] = useState('full-boarding');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    mobileNumber: '',
    email: '',
    state: 'Uttarakhand',
    grade: 'Class VI',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="admissions" className="py-20 bg-white dark:bg-[#0e1728] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <Calendar className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              Admissions Open 2026-27
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            Admissions Pathway &amp; Registration
          </h2>

          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            Welcoming boys and girls for Classes IV through XII. Follow our straightforward four-step roadmap to join Tulas International School.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ADMISSION_STEPS.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-[#fdfbf7] dark:bg-[#111827] flex flex-col justify-between space-y-4 hover:border-[#940a24] dark:hover:border-[#d6b46b] transition-all"
            >
              <div className="space-y-3">
                <span className="font-serif text-3xl font-extrabold text-[#940a24] dark:text-[#d6b46b] block">
                  {step.stepNumber}
                </span>
                <h3 className="font-serif text-base font-bold text-[#171a21] dark:text-[#f8fafc]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#e5ded0] dark:border-[#24314c] flex items-center justify-between text-xs text-[#727a8a] dark:text-[#94a3b8]">
                <span>{step.timeline}</span>
                <span className="font-semibold text-[#940a24] dark:text-[#d6b46b]">
                  {step.actionLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Admissions Quick-Registration Form Card */}
        <div id="contact" className="rounded-lg border border-[#c8bda9] dark:border-[#374768] bg-[#fdfbf7] dark:bg-[#111827] overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Panel */}
            <div className="lg:col-span-5 bg-[#0e1728] text-white p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d6b46b]">
                  Direct Admissions Office
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  Schedule a Campus Visit or Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                  Our admissions counselors assist parents with class eligibility, fee structures, curriculum details, and hostel room allotment queries.
                </p>

                <div className="space-y-3 pt-2 text-xs text-[#cbd5e1]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#d6b46b] flex-shrink-0" />
                    <span>Helpline: {SCHOOL_INFO.admissionsHelpline}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#d6b46b] flex-shrink-0" />
                    <span>Landlines: {SCHOOL_INFO.landlines.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#d6b46b] flex-shrink-0" />
                    <span>Email: {SCHOOL_INFO.email}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-[#162033] border border-[#24314c] space-y-2">
                <p className="text-xs font-semibold text-white">Visiting Hours:</p>
                <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                  Monday to Saturday: 9:00 AM - 5:00 PM IST.<br />
                  Prior appointment recommended for residential campus walkthrough.
                </p>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#171a21] dark:text-[#f8fafc]">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a5160] dark:text-[#cbd5e1] max-w-md mx-auto">
                    Thank you, {formData.parentName || 'Parent'}. Our admissions officer will contact your mobile ({formData.mobileNumber || '+91-XXXXXXXXXX'}) within 24 working hours with the 2026-27 Prospectus.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-md bg-[#940a24] text-white text-xs font-semibold tracking-wide cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#e5ded0] dark:border-[#24314c] pb-3 mb-4">
                    <h4 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
                      Admissions Registration Form 2026-2027
                    </h4>
                    <p className="text-xs text-[#727a8a] dark:text-[#94a3b8]">
                      Please furnish authentic details for prospectus delivery and counseling.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                        Parent / Guardian Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-white dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                        Contact Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-white dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-white dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                        Applying for Class *
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-white dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none"
                      >
                        <option value="Class IV">Class IV (Grade 4)</option>
                        <option value="Class V">Class V (Grade 5)</option>
                        <option value="Class VI">Class VI (Grade 6)</option>
                        <option value="Class VII">Class VII (Grade 7)</option>
                        <option value="Class VIII">Class VIII (Grade 8)</option>
                        <option value="Class IX">Class IX (Grade 9)</option>
                        <option value="Class X">Class X (Grade 10)</option>
                        <option value="Class XI - Science">Class XI - Science (PCM / PCB)</option>
                        <option value="Class XI - Commerce">Class XI - Commerce</option>
                        <option value="Class XI - Humanities">Class XI - Humanities</option>
                        <option value="Class XII">Class XII</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                      Residential Preference
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setBoardingType('full-boarding')}
                        className={`p-2.5 rounded-md border text-xs font-semibold transition-all text-left cursor-pointer ${
                          boardingType === 'full-boarding'
                            ? 'border-[#940a24] bg-[#f8f5ee] dark:bg-[#162033] text-[#940a24] dark:text-[#d6b46b]'
                            : 'border-[#c8bda9] dark:border-[#374768] bg-white dark:bg-[#111827] text-[#4a5160] dark:text-[#cbd5e1]'
                        }`}
                      >
                        Full Boarding (Residential)
                      </button>
                      <button
                        type="button"
                        onClick={() => setBoardingType('day-boarding')}
                        className={`p-2.5 rounded-md border text-xs font-semibold transition-all text-left cursor-pointer ${
                          boardingType === 'day-boarding'
                            ? 'border-[#940a24] bg-[#f8f5ee] dark:bg-[#162033] text-[#940a24] dark:text-[#d6b46b]'
                            : 'border-[#c8bda9] dark:border-[#374768] bg-white dark:bg-[#111827] text-[#4a5160] dark:text-[#cbd5e1]'
                        }`}
                      >
                        Day Boarding (Dehradun)
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-md bg-[#940a24] hover:bg-[#74061a] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry &amp; Request Prospectus</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#727a8a] dark:text-[#94a3b8] text-center pt-1">
                    By submitting, you agree to receive official admission information from TIS Dehradun in compliance with our Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
