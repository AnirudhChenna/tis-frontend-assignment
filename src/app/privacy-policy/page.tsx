import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '@/data/tisData';

export const metadata = {
  title: 'Privacy Policy | Tulas International School Dehradun',
  description: 'Official Privacy Policy of Tulas International School, Dehradun covering admissions inquiries, student record confidentiality, and website data protection.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] dark:bg-[#0b0f19] text-[#171a21] dark:text-[#f8fafc] py-12 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#940a24] dark:text-[#d6b46b] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to TIS Homepage</span>
          </Link>
        </div>

        {/* Document Header */}
        <div className="border-b border-[#e5ded0] dark:border-[#24314c] pb-8 mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
            <ShieldCheck className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              Official Policy Document
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy &amp; Data Protection
          </h1>
          <p className="text-xs text-[#727a8a] dark:text-[#94a3b8]">
            Last Updated: January 2026 | Tulas International School, Dehradun (Under Rishabh Educational Trust)
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              1. Institutional Commitment to Privacy
            </h2>
            <p>
              Tulas International School (&quot;TIS&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;the School&quot;), governed by the Rishabh Educational Trust, respects the sacred privacy of students, prospective families, alumni, and faculty. This Privacy Policy outlines the categories of personal and academic information collected, our secure handling protocols, and your rights under applicable Indian privacy legislation, including the Digital Personal Data Protection Act (DPDP Act) and the Information Technology Act, 2000.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              2. Categories of Information Collected
            </h2>
            <p>
              When parents or legal guardians interact with our digital admissions portal, register for a campus tour, or submit an inquiry, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-[#171a21] dark:text-[#f8fafc]">Parent/Guardian Data:</strong> Full legal names, relationship to student, contact mobile number, email address, residential address, and state/country of residence.
              </li>
              <li>
                <strong className="text-[#171a21] dark:text-[#f8fafc]">Applicant Student Information:</strong> Student name, date of birth, gender, class currently enrolled in, proposed entry grade (Classes IV to XII), previous school credentials, and relevant medical/dietary notices.
              </li>
              <li>
                <strong className="text-[#171a21] dark:text-[#f8fafc]">Digital Technical Identifiers:</strong> IP addresses, browser specifications, and anonymous site interaction telemetry to ensure server uptime and optimal rendering speeds.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              3. Purpose and Legal Basis for Processing
            </h2>
            <p>
              All data gathered through the website <span className="font-semibold text-[#171a21] dark:text-[#f8fafc]">tis.edu.in</span> is processed strictly for legitimate institutional purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Facilitating admissions counseling, prospectus dispatch, and entrance assessment schedules.</li>
              <li>Maintaining academic, medical, and pastoral safety records for enrolled residential students.</li>
              <li>Complying with statutory CBSE reporting norms and local educational authority directives.</li>
              <li>Communicating emergency campus notices, term schedules, and institutional progress updates.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              4. Strict Non-Disclosure &amp; Security Measures
            </h2>
            <p>
              Tulas International School maintains a strict zero-commercialization guarantee: <strong className="text-[#171a21] dark:text-[#f8fafc]">we never sell, lease, or monetize parent or student information to third-party marketing brokers or advertisers</strong>. Data is accessible solely to authorized admissions officers, house wardens, and senior administrators bound by rigorous non-disclosure agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              5. Student Record Confidentiality
            </h2>
            <p>
              In alignment with child protection and pastoral safeguarding mandates, sensitive medical records, biometric hostel access logs, and psychometric assessments are stored on encrypted servers with role-based access control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              6. Grievance Officer &amp; Contact Details
            </h2>
            <p>
              For data access requests, rectification of parent contact details, or privacy concerns, please contact our designated Grievance Officer:
            </p>
            <div className="p-4 rounded-md border border-[#e5ded0] dark:border-[#24314c] bg-white dark:bg-[#162033] space-y-1.5 text-xs">
              <p className="font-bold text-[#171a21] dark:text-[#f8fafc]">Admissions Grievance &amp; Data Officer</p>
              <p>Tulas International School, Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun 248011 (Uttarakhand)</p>
              <p>Email: <a href="mailto:info@tis.edu.in" className="text-[#940a24] dark:text-[#d6b46b] underline">info@tis.edu.in</a></p>
              <p>Admissions Helpline: {SCHOOL_INFO.admissionsHelpline}</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-[#e5ded0] dark:border-[#24314c] flex justify-between items-center text-xs text-[#727a8a] dark:text-[#94a3b8]">
          <span>&copy; {new Date().getFullYear()} Tulas International School, Dehradun</span>
          <Link href="/terms-and-conditions" className="hover:underline">
            View Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </main>
  );
}
