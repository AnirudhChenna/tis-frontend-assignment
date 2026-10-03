import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';
import { SCHOOL_INFO } from '@/data/tisData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e1728] text-white border-t border-[#24314c] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#24314c]">
          {/* Col 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/tis/schoolLogo.95f6e121.png"
                  alt="Tulas International School"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                  TULAS
                </h4>
                <p className="text-xs uppercase tracking-widest text-[#d6b46b] font-semibold">
                  International School
                </p>
              </div>
            </div>

            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Established in 2012 under the aegis of Rishabh Educational Trust to impart holistic education through seamless opportunities. A modern Gurukul dedicated to academic distinction, physical valor, and timeless ethical integrity.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#cbd5e1]">
              <ShieldCheck className="w-4 h-4 text-[#d6b46b] flex-shrink-0" />
              <span>CBSE Affiliated No. 3530464</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase font-bold tracking-wider text-[#d6b46b]">
              Campus &amp; Academics
            </h5>
            <ul className="space-y-2 text-xs text-[#94a3b8]">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Overview &amp; Gurukul Ethos
                </a>
              </li>
              <li>
                <a href="#sports" className="hover:text-white transition-colors">
                  16+ Olympic Sports Academy
                </a>
              </li>
              <li>
                <a href="#boarding" className="hover:text-white transition-colors">
                  Residential Boarding Life
                </a>
              </li>
              <li>
                <a href="#accreditations" className="hover:text-white transition-colors">
                  Rankings &amp; Accreditations
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Verified Parent Testimonials
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Admissions Criteria &amp; Steps
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Helpline */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase font-bold tracking-wider text-[#d6b46b]">
              Admissions Desk
            </h5>
            <div className="space-y-2.5 text-xs text-[#cbd5e1]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d6b46b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-[#94a3b8]">Admissions Helpline</p>
                  <a href={`tel:${SCHOOL_INFO.admissionsHelpline.replace(/[^0-9+]/g, '')}`} className="font-semibold text-white hover:text-[#d6b46b] transition-colors">
                    {SCHOOL_INFO.admissionsHelpline}
                  </a>
                  <span className="text-[11px] text-[#94a3b8] block">/ {SCHOOL_INFO.admissionsHelplineSecondary}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d6b46b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-[#94a3b8]">Campus Landlines</p>
                  <p className="text-white">{SCHOOL_INFO.landlines.join(', ')}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#d6b46b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-[#94a3b8]">Admissions &amp; General Email</p>
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="text-white hover:text-[#d6b46b] transition-colors">
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Campus Address & Affiliation */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase font-bold tracking-wider text-[#d6b46b]">
              Residential Campus
            </h5>
            <div className="space-y-3 text-xs text-[#94a3b8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d6b46b] mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed text-[#cbd5e1]">
                  {SCHOOL_INFO.location}
                </p>
              </div>

              <div className="p-3 rounded-md bg-[#142036] border border-[#24314c] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <Award className="w-3.5 h-3.5 text-[#d6b46b]" />
                  <span>Ranked #1 Boarding School</span>
                </div>
                <p className="text-[11px] text-[#94a3b8]">
                  Recognized by Education Today &amp; Outlook Surveys across North India.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="https://maps.google.com/?q=Tulas+International+School+Dehradun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#d6b46b] hover:underline"
                >
                  <span>Locate Campus on Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Policy & Domain Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>
              &copy; {currentYear} {SCHOOL_INFO.name}, Dehradun. All rights reserved.
            </span>
            <span className="hidden sm:inline text-[#24314c]">|</span>
            <span>Managed under Rishabh Educational Trust</span>
          </div>

          {/* Policy Links & Verified Custom Domain */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link
              href="/privacy-policy"
              className="text-[#cbd5e1] hover:text-[#d6b46b] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#24314c]">|</span>
            <Link
              href="/terms-and-conditions"
              className="text-[#cbd5e1] hover:text-[#d6b46b] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-[#24314c]">|</span>
            <span className="text-[11px] text-[#94a3b8] px-2 py-0.5 rounded border border-[#24314c] bg-[#142036]">
              Domain: tis.edu.in
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
