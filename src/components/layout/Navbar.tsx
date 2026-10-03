'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Sun, Moon, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { SCHOOL_INFO } from '@/data/tisData';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Olympic Sports', href: '#sports' },
    { label: 'Boarding Life', href: '#boarding' },
    { label: 'Accreditations', href: '#accreditations' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-[9990] w-full transition-all duration-300">
      {/* Top Notification / Helpline Bar */}
      <div className="bg-[#940a24] text-white py-2 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-amber-200 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              {SCHOOL_INFO.affiliation}
            </span>
            <span className="hidden md:inline text-amber-300/40">|</span>
            <span className="hidden md:inline text-white/90">
              Co-Educational Residential Boarding (Grades IV to XII)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${SCHOOL_INFO.admissionsHelpline.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Helpline: {SCHOOL_INFO.admissionsHelpline}</span>
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href={`mailto:${SCHOOL_INFO.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-amber-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#0e1728]/95 backdrop-blur-md shadow-md py-3 border-b border-[#e5ded0] dark:border-[#24314c]'
            : 'bg-white dark:bg-[#0e1728] py-4 border-b border-[#e5ded0] dark:border-[#24314c]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/tis/schoolLogo.95f6e121.png"
                alt="Tulas International School Logo"
                fill
                priority
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#171a21] dark:text-[#f8fafc] leading-tight">
                TULAS
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#940a24] dark:text-[#d6b46b] leading-tight">
                International School
              </span>
              <span className="text-[9px] font-medium text-[#727a8a] dark:text-[#94a3b8] tracking-widest uppercase">
                Dehradun - The Modern Gurukul
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[#4a5160] hover:text-[#940a24] dark:text-[#cbd5e1] dark:hover:text-[#d6b46b] transition-colors tracking-wide py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button (Refined day/evening switcher) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="p-2 rounded-md border border-[#e5ded0] dark:border-[#24314c] bg-[#f8f5ee] dark:bg-[#162033] text-[#4a5160] dark:text-[#cbd5e1] hover:text-[#940a24] dark:hover:text-[#d6b46b] transition-all cursor-pointer"
              title={`Switch to ${theme === 'light' ? 'Evening Mode' : 'Day Mode'}`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-amber-300" />
              )}
            </button>

            {/* Enquire Now CTA (Crisp architectural button - NOT pill shaped) */}
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#940a24] hover:bg-[#74061a] text-white text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md border border-[#e5ded0] dark:border-[#24314c] text-[#171a21] dark:text-[#f8fafc] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e5ded0] dark:border-[#24314c] bg-white dark:bg-[#0e1728] px-4 pt-3 pb-6 space-y-3 mt-2">
            <div className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#4a5160] dark:text-[#cbd5e1] hover:text-[#940a24] hover:bg-[#f8f5ee] dark:hover:bg-[#162033] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#e5ded0] dark:border-[#24314c] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="w-full py-2.5 px-4 rounded-md bg-[#940a24] text-white text-sm font-semibold text-center tracking-wide"
              >
                Apply Online &amp; Admissions Inquiry
              </button>
              <a
                href={`tel:${SCHOOL_INFO.admissionsHelpline.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2 px-4 rounded-md border border-[#e5ded0] dark:border-[#24314c] text-center text-xs font-semibold text-[#171a21] dark:text-[#f8fafc] flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#940a24]" />
                Call Admissions: {SCHOOL_INFO.admissionsHelpline}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
