'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Academics from '@/components/home/Academics';
import Facilities from '@/components/home/Facilities';
import WhyTIS from '@/components/home/WhyTIS';
import Activities from '@/components/home/Activities';
import SportsAcademy from '@/components/home/SportsAcademy';
import AccreditationsAwards from '@/components/home/AccreditationsAwards';
import VerifiedTestimonials from '@/components/home/VerifiedTestimonials';
import AdmissionsCTA from '@/components/home/AdmissionsCTA';
import Contact from '@/components/home/Contact';
import FAQSection from '@/components/home/FAQSection';
import EnquiryModal from '@/components/home/EnquiryModal';
import { Phone, MessageSquare } from 'lucide-react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnquiryModal = () => setIsModalOpen(true);
  const closeEnquiryModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] dark:bg-[#0b0f19] text-[#171a21] dark:text-[#f8fafc] transition-colors">
      {/* 1. Navigation Bar */}
      <Navbar onOpenEnquiry={openEnquiryModal} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenEnquiry={openEnquiryModal} />

        {/* 3. About TIS Section */}
        <About />

        {/* 4. Academics Section */}
        <Academics />

        {/* 5. Campus / Facilities Section */}
        <Facilities />

        {/* 6. Why Choose TIS Section */}
        <WhyTIS />

        {/* 7. Life at TIS / Activities Section */}
        <Activities />

        {/* 8. Sports Foundation Academy */}
        <SportsAcademy />

        {/* 9. Accreditations & Olympic Mentors */}
        <AccreditationsAwards />

        {/* 10. Testimonials Section */}
        <VerifiedTestimonials />

        {/* 11. Admissions CTA Section */}
        <AdmissionsCTA onOpenEnquiry={openEnquiryModal} />

        {/* 12. Contact Section */}
        <Contact />

        {/* 13. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 14. Institutional Footer */}
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
