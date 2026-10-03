import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '@/data/tisData';

export const metadata = {
  title: 'Terms and Conditions | Tulas International School Dehradun',
  description: 'Official Terms and Conditions governing admissions, campus code of conduct, boarding guidelines, and website usage at Tulas International School, Dehradun.',
};

export default function TermsAndConditionsPage() {
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
            <FileText className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
              Institutional Regulations
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">
            Terms &amp; Conditions of Admission &amp; Service
          </h1>
          <p className="text-xs text-[#727a8a] dark:text-[#94a3b8]">
            Applicable to Academic Year 2026-2027 | Tulas International School, Dehradun (Under Rishabh Educational Trust)
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website (<span className="font-semibold text-[#171a21] dark:text-[#f8fafc]">tis.edu.in</span>), submitting an admissions registration form, or enrolling a student at Tulas International School (TIS), parents and legal guardians agree to be bound by the institutional rules, code of conduct, and fee regulations set forth herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              2. Admissions Criteria &amp; Provisional Enrollment
            </h2>
            <p>
              Admission to Classes IV through XII is granted based on seat availability, past academic performance, and performance in our age-appropriate diagnostic assessment. Submission of an online inquiry does not constitute guaranteed admission until:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Verification of original transfer certificate (TC), birth certificate, and previous mark sheets.</li>
              <li>Completion of medical clearance signed by a registered physician.</li>
              <li>Receipt of the non-refundable registration and admission processing charges.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              3. Boarding House Conduct &amp; Zero Tolerance Policy
            </h2>
            <p>
              To maintain the sanctity of our Modern Gurukul environment, TIS upholds strict residential standards:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-[#171a21] dark:text-[#f8fafc]">Anti-Ragging Mandate:</strong> In accordance with Supreme Court and CBSE directives, ragging, bullying, or intimidation of any nature is strictly prohibited and results in immediate expulsion.
              </li>
              <li>
                <strong className="text-[#171a21] dark:text-[#f8fafc]">Substance Prohibition:</strong> The possession or use of tobacco, alcohol, unauthorized electronic devices, or narcotics carries instantaneous termination of enrollment.
              </li>
              <li>
                <strong className="text-[#171a21] dark:text-[#f8fafc]">Electronic Device Regulations:</strong> Personal mobile phones are deposited with the hostel warden upon campus arrival and disbursed only during scheduled weekend family call hours.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              4. Fee Schedule &amp; Withdrawal Guidelines
            </h2>
            <p>
              Tuition, boarding, dining, and sports academy fees must be remitted strictly as per the institutional fee calendar published prior to term commencement. Key terms include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Annual fees cover tuition, boarding accommodation, pure vegetarian dining, sports training, and regular medical infirmary care.</li>
              <li>In the event of student withdrawal mid-term, written notice must be served to the Principal at least 60 calendar days prior to term end.</li>
              <li>Caution money deposits are refundable post verification of hostel inventory clearance and library returns.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              5. Medical Authorization &amp; Emergency Consent
            </h2>
            <p>
              Parents hereby grant permission to Tulas International School medical staff and certified resident nurses to administer first-aid, routine prophylactic care, and emergency hospital admittance in Dehradun in acute situations when parents cannot be immediately reached.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171a21] dark:text-[#f8fafc]">
              6. Legal Jurisdiction
            </h2>
            <p>
              Any legal dispute or claim arising in connection with admissions, contractual undertakings, or enrollment at Tulas International School shall be subject to the exclusive jurisdiction of the competent courts in Dehradun, Uttarakhand, India.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-[#e5ded0] dark:border-[#24314c] flex justify-between items-center text-xs text-[#727a8a] dark:text-[#94a3b8]">
          <span>&copy; {new Date().getFullYear()} Tulas International School, Dehradun</span>
          <Link href="/privacy-policy" className="hover:underline">
            View Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
}
