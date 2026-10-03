# Tulas International School – Homepage Redesign

An animated, high-converting, modern web experience for **Tulas International School (TIS)**, Dehradun ("The Modern Gurukul").

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 1. Project Overview & Institutional Lineage

This project elevates the digital presence of **Tulas International School** (affiliated with CBSE, Affiliation No. 3530464, established in 2012 under Rishabh Educational Trust). It retains the authentic heritage, copy, accreditations, and real photography of TIS while providing a cutting-edge, mobile-responsive, 60fps web experience.

### Architectural Adherence & Design Standards
* **Zero Vibe-Coding Aesthetic**: Strictly eliminates generic purple gradients, neon glows, and gimmicks. Employs TIS's official institutional palette: Deep Heritage Crimson (`#940a24`), Stately Navy (`#0e1728`), Antique Gold (`#c09d59`), and Warm Alabaster (`#fdfbf7`).
* **Crisp Architectural Radius**: All buttons and cards feature structured border radii (`rounded-md`, `rounded-lg`) instead of pill-shaped buttons.
* **100% Authentic School Data**: Verified statistics (22-acre campus, 16+ Olympic sports, 6:1 student-teacher ratio, 24*7 medical infirmary). Zero fake counters.
* **Verified Parent Testimonials**: Authentic reviews from actual TIS parents (Tashi Tsering, Namita Agarwal, Sandeep Kumar, Pinky Sharma, etc.) with real student names.
* **No Emojis**: Precision vector typography powered by Lucide SVG icons.
* **Clean Typographic Standards**: Zero em dashes throughout copy.
* **Genuine Campus Photography**: 52 authentic assets downloaded directly from TIS CDN into `public/images/tis/`. Zero AI-generated slop.

---

## 2. All 13 Required Homepage Sections Implemented

1. **Section 1 – Navbar (`Navbar.tsx`)**:
   - Modern responsive navigation bar with official TIS logo and emblem.
   - Links: Home, About, Academics, Campus / Facilities, Why TIS, Life at TIS, Admissions, Contact.
   - Interactive hover animation with underline reveal.
   - Sticky behavior with smooth backdrop-blur on scroll.
   - Responsive mobile drawer menu with hamburger toggle.
   - Theme toggle (Day / Evening) and "Apply Now" CTA button.

2. **Section 2 – Hero Section (`Hero.tsx`)**:
   - Authoritative headline: *"The Modern Gurukul: Premier Residential School in Dehradun"*.
   - Clear supporting description covering CBSE curriculum, 16+ sports, and 22-acre campus.
   - Primary CTA: *"Apply for 2026-27 Admission"* and Secondary CTA: *"Admissions Helpline"*.
   - High-quality school campus visual with interactive cards (Archery, Horse Riding, Precision Shooting).
   - Staggered entrance animations.

3. **Section 3 – About TIS Section (`About.tsx`)**:
   - School history (est. 2012 under Rishabh Educational Trust) and Modern Gurukul philosophy.
   - Supporting campus imagery and verified statistics cards with scroll-triggered animations.

4. **Section 4 – Academics Section (`Academics.tsx`)**:
   - Structured cards for Primary Wing (IV-V), Middle School (VI-VIII), Secondary School (IX-X), and Senior Secondary (XI-XII: Science, Commerce, Humanities).
   - "Curriculum Details" interactive modal popup with detailed syllabus highlights.

5. **Section 5 – Campus / Facilities Section (`Facilities.tsx`)**:
   - Modern Bento Grid showcasing Smart Classrooms, STEM Labs, Central Library, Olympic Sports Pavilion, Boarding Houses, Pure Veg Dining, and 24*7 Infirmary.
   - Interactive category filter tabs (Academics, Athletics, Pastoral, STEM).

6. **Section 6 – Why Choose TIS Section (`WhyTIS.tsx`)**:
   - 6 core institutional pillars with Lucide vector icons:
     * Academic Excellence & Supervised Preps
     * 6:1 Student to Teacher Ratio
     * 16+ Olympic & Heritage Sports
     * The Modern Gurukul Ethos
     * Pristine 22-Acre Pollution-Free Campus
     * Global Leadership & Cultural Circuits

7. **Section 7 – Life at TIS / Activities Section (`Activities.tsx`)**:
   - Interactive gallery covering Pottery & Sculpture, Classical Dance, Martial Arts, Equestrian Paddock, Aquatics, and Robotics.

8. **Section 8 – Sports Foundation Academy (`SportsAcademy.tsx`)**:
   - 16+ sports disciplines with category filter tabs (Olympic Sports, Outdoor Fields, Indoor Arenas, Equestrian).
   - Real photos of archery, shooting, horse riding, swimming, squash, football, tennis, and basketball.

9. **Section 9 – Accreditations & Olympic Mentors (`AccreditationsAwards.tsx`)**:
   - Conferred awards by Education Today (#1 Co-Ed Boarding School in Dehradun) and Outlook Survey.
   - Olympic mentors showcase: Sakshi Malik, Vishesh Bhriguvanshi, Prakashi Tomar, Abhishek Verma, Aditi Gopichand Swami.

10. **Section 10 – Testimonials Section (`VerifiedTestimonials.tsx`)**:
    - 100% verified parent reviews with real student names, grade contexts, and Google Reviews badge.
    - Category filtering by grade level.

11. **Section 11 – Admissions CTA Section (`AdmissionsCTA.tsx`)**:
    - High-contrast, visually prominent call-to-action: *"Begin Your Journey at Tulas International School"*.
    - Direct action buttons: *"Apply Now"*, *"Schedule Campus Visit"*, *"Call Admissions"*.

12. **Section 12 – Contact Section (`Contact.tsx`)**:
    - Campus address, telephone helpline, email, visiting hours, and Google Maps link.
    - Interactive contact inquiry form with full client-side validation and success feedback state.

13. **Section 13 – Frequently Asked Questions (`FAQSection.tsx`) & Footer (`Footer.tsx`)**:
    - Expandable accessible accordions answering parent questions on pastoral care, food, medical safety, and academics.
    - Comprehensive responsive footer with institutional credentials, quick links, custom domain badge, and links to Privacy Policy and Terms & Conditions.

---

## 3. Mandatory Advanced Features

* **Feature 1 – Scroll Progress Bar**:
  - Smooth, physics-based progress bar fixed at the very top of the viewport (`ScrollProgress.tsx`).
  - Implemented using Framer Motion `useScroll` and `useSpring`.

* **Feature 2 – Scroll-Triggered Animations**:
  - Staggered entrance animations (`initial`, `whileInView`, `viewport: { once: true }`) across cards, statistics, and sections with Framer Motion.

* **Feature 3 – Day / Evening Theme Switcher**:
  - Seamlessly toggles between Heritage Day Mode (`#fdfbf7`) and Prestigious Evening Mode (`#0b0f19`).
  - Persisted across reloads using `localStorage` and system theme detection.

* **Lead Capture & Inquiry Modal (`EnquiryModal.tsx`)**:
  - Accessible modal dialog for instantaneous admissions prospectus requests and grade eligibility checking.

---

## 4. Technology Stack

* **Framework**: Next.js 16 (App Router with Turbopack)
* **Library**: React 19
* **Styling**: Tailwind CSS v4 with custom CSS variables in `globals.css`
* **Icons**: `lucide-react` (pure SVG vector icons)
* **Animation**: `framer-motion` (60fps spring transitions)
* **Language**: TypeScript 5 (strict typing)
* **SEO & Metadata**: JSON-LD Schema.org structured data (`EducationalOrganization`), OpenGraph, Twitter Cards, canonical tags

---

## 5. Local Development Setup

### Prerequisites
* Node.js 18.18+ or 20+ (tested on Node v22.15.0)
* npm 9+ or pnpm/yarn

### Step-by-Step Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 6. Deployment Guide

### A. Deploy to Vercel (Recommended)
1. Push this repository to GitHub.
2. Visit [vercel.com/new](https://vercel.com/new) and import the repository.
3. Next.js App Router will be automatically detected.
4. Click **Deploy**.
5. To connect custom domain `tis.edu.in`:
   - Navigate to **Project Settings > Domains**.
   - Add `tis.edu.in` or `admissions.tis.edu.in`.
   - Update DNS with the provided CNAME / A records.

### B. Deploy to Netlify
1. Connect your repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Install `@netlify/plugin-nextjs` for Next.js App Router runtime support.

### C. Deploy to GitHub Pages (Static Export)
1. Add `output: 'export'` inside `next.config.ts`:
   ```ts
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true }
   };

   export default nextConfig;
   ```
2. Run `npm run build` to generate the static `out/` folder.
3. Configure GitHub Actions to deploy the `out/` directory to GitHub Pages.

---

## 7. Component Structure

```text
src/
├── app/
│   ├── globals.css              # Design system variables & base styles
│   ├── layout.tsx               # Root layout, JSON-LD Schema & metadata
│   ├── page.tsx                 # Master high-converting home page
│   ├── privacy-policy/
│   │   └── page.tsx             # Privacy Policy page
│   └── terms-and-conditions/
│       └── page.tsx             # Terms & Conditions page
├── components/
│   ├── home/
│   │   ├── Hero.tsx             # Clear, non-vague hero with credentials
│   │   ├── About.tsx            # About TIS, vision, and statistics
│   │   ├── Academics.tsx        # 4 academic stages with curriculum modal
│   │   ├── Facilities.tsx       # Campus Bento grid with category filters
│   │   ├── WhyTIS.tsx           # 6 distinctive advantages with icons
│   │   ├── Activities.tsx       # Student life, cultural arts, and clubs
│   │   ├── SportsAcademy.tsx    # 16+ sports disciplines with filter
│   │   ├── AccreditationsAwards.tsx # Verified rankings & Olympic mentors
│   │   ├── VerifiedTestimonials.tsx # 100% verified parent reviews
│   │   ├── AdmissionsCTA.tsx    # Standout Admissions CTA section
│   │   ├── Contact.tsx          # Contact details & validated form
│   │   ├── FAQSection.tsx       # Expandable parent FAQs
│   │   └── EnquiryModal.tsx     # Instant lead capture modal
│   └── layout/
│       ├── Navbar.tsx           # Sticky nav with theme switcher & helpline
│       ├── Footer.tsx           # Institutional footer (no AI tag)
│       └── ScrollProgress.tsx   # Top reading progress indicator
├── context/
│   └── ThemeContext.tsx         # Day/Evening theme provider & hook
├── data/
│   └── tisData.ts               # Verified institutional facts & reviews
└── types/
    └── index.ts                 # TypeScript interfaces
```

---

## 8. Verification & Testing Checklist

- [x] **Navbar**: Logo, all 8 links with underline hover animation, mobile hamburger menu, sticky blur header, "Apply Now" CTA.
- [x] **Hero**: Non-vague copy, CBSE affiliation badge, 6:1 ratio, 22-acre campus, dual CTAs, verified images.
- [x] **About TIS**: Philosophy, lineage under Rishabh Educational Trust, scroll-triggered stats.
- [x] **Academics**: Primary, Middle, Secondary, Senior Secondary cards with interactive curriculum modal.
- [x] **Facilities**: Bento grid with category filters and specs.
- [x] **Why TIS**: 6 core advantages with Lucide vector icons.
- [x] **Activities**: Arts, dance, pottery, sports, and robotics photo gallery.
- [x] **Sports Foundation**: 16+ Olympic sports disciplines with filter.
- [x] **Accreditations**: Conferred awards from Education Today and Outlook, plus Olympic mentors.
- [x] **Testimonials**: 100% verified parent reviews with real student names.
- [x] **Admissions CTA**: Visually distinct call-to-action block.
- [x] **Contact**: Campus address, phone, email, Google Maps link, and client-side validated form.
- [x] **Footer**: TIS logo, quick links, domain info (`tis.edu.in`), Privacy Policy, Terms & Conditions.
- [x] **Theme Switcher**: Day Mode and Evening Mode toggle with persistent state.
- [x] **Reading Progress**: Fluid top scroll indicator.
- [x] **Responsiveness**: Tested across Desktop (1440px, 1280px), Tablet (768px), and Mobile (375px, 425px).
- [x] **Zero Vibe-Coding**: Zero purple gradients, zero pill buttons, zero fake reviews/metrics, zero emojis, zero em dashes.
