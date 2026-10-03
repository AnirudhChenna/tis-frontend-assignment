'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '@/data/tisData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: 'Class VI',
    boardingType: 'Boarding (Residential)',
    state: 'Uttarakhand'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg rounded-lg border border-[#c8bda9] dark:border-[#374768] bg-white dark:bg-[#111827] shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-md text-[#727a8a] dark:text-[#94a3b8] hover:text-[#171a21] dark:hover:text-[#f8fafc] hover:bg-[#f8f5ee] dark:hover:bg-[#162033] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#171a21] dark:text-[#f8fafc]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
                  Your inquiry for <span className="font-semibold text-[#940a24] dark:text-[#d6b46b]">{formData.grade}</span> has been assigned to our senior admissions counselor. You will receive an official call on <span className="font-semibold">{formData.phone || '+91-XXXXXXXXXX'}</span> shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="px-5 py-2.5 rounded-md bg-[#940a24] text-white text-xs font-semibold tracking-wide cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 pr-6">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Official Admissions Desk 2026-27</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#171a21] dark:text-[#f8fafc]">
                    Enquire for Admission
                  </h3>
                  <p className="text-xs text-[#727a8a] dark:text-[#94a3b8]">
                    Tulas International School, Dehradun (Classes IV to XII)
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-[#fdfbf7] dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98379 83791"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-[#fdfbf7] dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="parent@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-[#fdfbf7] dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                        Select Grade / Class *
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-3 py-2 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-[#fdfbf7] dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none"
                      >
                        <option value="Class IV">Class IV</option>
                        <option value="Class V">Class V</option>
                        <option value="Class VI">Class VI</option>
                        <option value="Class VII">Class VII</option>
                        <option value="Class VIII">Class VIII</option>
                        <option value="Class IX">Class IX</option>
                        <option value="Class X">Class X</option>
                        <option value="Class XI - Science">Class XI - Science</option>
                        <option value="Class XI - Commerce">Class XI - Commerce</option>
                        <option value="Class XI - Humanities">Class XI - Humanities</option>
                        <option value="Class XII">Class XII</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                        Boarding Option *
                      </label>
                      <select
                        value={formData.boardingType}
                        onChange={(e) => setFormData({ ...formData, boardingType: e.target.value })}
                        className="w-full px-3 py-2 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-[#fdfbf7] dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none"
                      >
                        <option value="Boarding (Residential)">Full Boarding (Residential)</option>
                        <option value="Day-Boarding (Dehradun)">Day Boarding (Dehradun)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-md bg-[#940a24] hover:bg-[#74061a] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Request Callback &amp; Prospectus</span>
                  </button>
                </div>

                <div className="pt-2 border-t border-[#e5ded0] dark:border-[#24314c] flex items-center justify-between text-[11px] text-[#727a8a] dark:text-[#94a3b8]">
                  <span>Helpline: {SCHOOL_INFO.admissionsHelpline}</span>
                  <span>100% Confidential</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
