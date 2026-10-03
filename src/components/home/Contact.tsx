'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SCHOOL_INFO } from '@/data/tisData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ \-]{8,15}$/.test(formData.phone)) {
      errs.phone = 'Please provide a valid contact number';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message or query';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#fdfbf7] dark:bg-[#0b0f19] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <MapPin className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              Campus Contact &amp; Location
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            Connect with Tulas International School
          </h2>

          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            Our admissions team and campus administration are here to guide you through admission guidelines, fee structures, and campus visit scheduling.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Campus Info & Map Link */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-white dark:bg-[#111827] space-y-5 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
                Campus Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#4a5160] dark:text-[#cbd5e1]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#171a21] dark:text-[#f8fafc] block">Campus Address:</strong>
                    <p className="text-xs text-[#727a8a] dark:text-[#94a3b8] mt-0.5 leading-relaxed">
                      {SCHOOL_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#171a21] dark:text-[#f8fafc] block">Admissions Helpline:</strong>
                    <a href={`tel:${SCHOOL_INFO.admissionsHelpline.replace(/[^0-9+]/g, '')}`} className="text-xs text-[#940a24] dark:text-[#d6b46b] font-semibold hover:underline block mt-0.5">
                      {SCHOOL_INFO.admissionsHelpline} / {SCHOOL_INFO.admissionsHelplineSecondary}
                    </a>
                    <span className="text-[11px] text-[#727a8a] dark:text-[#94a3b8]">
                      Landlines: {SCHOOL_INFO.landlines.join(', ')}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#171a21] dark:text-[#f8fafc] block">Admissions Email:</strong>
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="text-xs text-[#940a24] dark:text-[#d6b46b] hover:underline block mt-0.5">
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#940a24] dark:text-[#d6b46b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#171a21] dark:text-[#f8fafc] block">Office Hours:</strong>
                    <p className="text-xs text-[#727a8a] dark:text-[#94a3b8] mt-0.5">
                      Monday to Saturday: 9:00 AM - 5:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps External Action */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Tulas+International+School+Dehradun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md border border-[#c8bda9] dark:border-[#374768] bg-[#f8f5ee] dark:bg-[#162033] hover:bg-[#940a24] hover:text-white dark:hover:bg-[#940a24] dark:hover:text-white text-xs font-semibold text-[#171a21] dark:text-[#f8fafc] flex items-center justify-center gap-2 transition-all"
                >
                  <span>Open Campus in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg border border-[#e5ded0] dark:border-[#24314c] bg-white dark:bg-[#111827] shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#171a21] dark:text-[#f8fafc]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a5160] dark:text-[#cbd5e1] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been forwarded to our admissions desk. We will respond via email ({formData.email}) or phone ({formData.phone}) promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-md bg-[#940a24] text-white text-xs font-semibold tracking-wide cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#e5ded0] dark:border-[#24314c] pb-3 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
                      Send Us an Inquiry
                    </h3>
                    <p className="text-xs text-[#727a8a] dark:text-[#94a3b8]">
                      Complete the form below and an admissions officer will be in touch.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-md border bg-[#fdfbf7] dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-[#c8bda9] dark:border-[#374768]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-md border bg-[#fdfbf7] dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none ${
                          errors.email ? 'border-red-500' : 'border-[#c8bda9] dark:border-[#374768]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-md border bg-[#fdfbf7] dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none ${
                          errors.phone ? 'border-red-500' : 'border-[#c8bda9] dark:border-[#374768]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171a21] dark:text-[#cbd5e1] mb-1">
                      Your Message / Inquiry Details *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know which class you are inquiring for and any specific boarding or sports queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-md border bg-[#fdfbf7] dark:bg-[#162033] text-xs text-[#171a21] dark:text-[#f8fafc] focus:outline-none ${
                        errors.message ? 'border-red-500' : 'border-[#c8bda9] dark:border-[#374768]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-md bg-[#940a24] hover:bg-[#74061a] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
