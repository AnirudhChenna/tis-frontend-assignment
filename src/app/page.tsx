'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import VerifiedMetrics from '@/components/home/VerifiedMetrics';
import ModernGurukulPhilosophy from '@/components/home/ModernGurukulPhilosophy';
import SportsAcademy from '@/components/home/SportsAcademy';
import BoardingLife from '@/components/home/BoardingLife';
import AccreditationsAwards from '@/components/home/AccreditationsAwards';
import VerifiedTestimonials from '@/components/home/VerifiedTestimonials';
import AdmissionsSection from '@/components/home/AdmissionsSection';
import FAQSection from '@/components/home/FAQSection';
import EnquiryModal from '@/components/home/EnquiryModal';
import { Phone, MessageSquare } from 'lucide-react';
import { SCHOOL_INFO } from '@/data/tisData';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnquiryModal = () => setIsModalOpen(true);
  const closeEnquiryModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] dark:bg-[#0b0f19] text-[#171a21] dark:text-[#f8fafc] transition-colors">
      {/* Institutional Top Navbar */}
      <Navbar onOpenEnquiry={openEnquiryModal} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenEnquiry={openEnquiryModal} />

        {/* 2. Verified Campus Metrics */}
        <VerifiedMetrics />

        {/* 3. The Modern Gurukul Philosophy */}
        <ModernGurukulPhilosophy />

        {/* 4. Olympic Sports Foundation */}
        <SportsAcademy />

        {/* 5. Boarding & Residential Pastoral Life */}
        <BoardingLife />

        {/* 6. Accreditations & Olympic Mentors */}
        <AccreditationsAwards />

        {/* 7. Verified Parent Testimonials */}
        <VerifiedTestimonials />

        {/* 8. Admissions Roadmap & Registration Desk */}
        <AdmissionsSection onOpenEnquiry={openEnquiryModal} />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Quick-Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={closeEnquiryModal} />

      {/* Floating Quick Action Contact Bar (Clean architectural buttons) */}
      <aside aria-label="Quick Admissions Actions" className="fixed bottom-5 right-5 z-[9980] flex flex-col gap-2.5">
        <a
          href={`https://wa.me/919837983791?text=${encodeURIComponent('Hello TIS Admissions Office, I would like to inquire about boarding admission for Class IV to XII.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-[#25d366] text-white font-semibold text-xs shadow-lg hover:bg-[#20ba5a] transition-all cursor-pointer"
          title="Chat with Admissions on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Admissions</span>
        </a>

        <button
          onClick={openEnquiryModal}
          className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#940a24] text-white font-semibold text-xs shadow-lg hover:bg-[#74061a] transition-all cursor-pointer"
          title="Open Admissions Enquiry Form"
        >
          <Phone className="w-4 h-4" />
          <span>Enquire Now</span>
        </button>
      </aside>
    </div>
  );
}
