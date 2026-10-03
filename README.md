# Tulas International School (TIS) - Redesigned Homepage

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

## 2. Standout Features Implemented

1. **Top Reading Progress Bar**:
   - Smooth, fluid progress indicator fixed at the very top of the viewport (`ScrollProgress.tsx`).
   - Powered by Framer Motion's `useScroll` and `useSpring` for physics-based fluid tracking.

2. **Scroll-Triggered Reveals**:
   - Subtle, staggered entrance animations as cards and sections enter the viewport.
   - Refined 60fps micro-interactions with spring physics (`y: 20 -> 0`, `opacity: 0 -> 1`).

3. **Day / Evening Theme Switcher**:
   - Seamlessly toggles between Heritage Day Mode (`#fdfbf7`) and Prestigious Evening Mode (`#0b0f19`).
   - Persisted across reloads using `localStorage` and system theme detection.

4. **Interactive Modern Gurukul Philosophy**:
   - Tabbed exploration of the 4 educational pillars: *Scholastic Rigor*, *Physical Conditioning*, *Pastoral Warmth*, and *Global Leadership*.

5. **Sports Foundation Interactive Grid**:
   - Dynamic category filtering across 16+ Olympic, field, indoor, and equestrian disciplines with real campus photos.

6. **Lead Capture & Inquiry Modal**:
   - Accessible modal dialog for instantaneous admissions prospectus requests and grade eligibility checking.

7. **Mandatory Institutional Pages**:
   - Dedicated, comprehensive [Privacy Policy](file:///d:/net_puppys%20assignment/src/app/privacy-policy/page.tsx) page.
   - Dedicated, comprehensive [Terms and Conditions](file:///d:/net_puppys%20assignment/src/app/terms-and-conditions/page.tsx) page.
   - Real custom SVG emblem favicon in `public/favicon.svg` and `public/favicon.ico`.
   - Custom domain `public/CNAME` configuration (`tis.edu.in`).
   - Zero "Made with AI" tags or badges.

---

## 3. Technology Stack

* **Framework**: Next.js 16 (App Router with Turbopack)
* **Library**: React 19
* **Styling**: Tailwind CSS v4 with custom CSS variables in `globals.css`
* **Icons**: `lucide-react` (pure SVG vector icons)
* **Animation**: `framer-motion` (60fps spring transitions)
* **Language**: TypeScript 5 (strict typing)
* **SEO & Metadata**: JSON-LD Schema.org structured data (`EducationalOrganization`), OpenGraph, Twitter Cards, canonical tags

---

## 4. Local Development Setup

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

## 5. Deployment Guide

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

## 6. Directory Structure

```text
├── public/
│   ├── CNAME                        # Custom domain mapping (tis.edu.in)
│   ├── favicon.ico                  # TIS Favicon
│   ├── favicon.svg                  # Vector shield emblem favicon
│   └── images/
│       └── tis/                     # 52 genuine TIS high-resolution assets
├── src/
│   ├── app/
│   │   ├── globals.css              # Design system variables & base styles
│   │   ├── layout.tsx               # Root layout, JSON-LD Schema & metadata
│   │   ├── page.tsx                 # Master high-converting home page
│   │   ├── privacy-policy/
│   │   │   └── page.tsx             # Privacy Policy page
│   │   └── terms-and-conditions/
│   │       └── page.tsx             # Terms & Conditions page
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx             # Clear, non-vague hero with credentials
│   │   │   ├── VerifiedMetrics.tsx  # Genuine stats without fake counters
│   │   │   ├── ModernGurukulPhilosophy.tsx # 4-pillar interactive philosophy
│   │   │   ├── SportsAcademy.tsx    # 16+ sports disciplines with filter
│   │   │   ├── BoardingLife.tsx     # Residential pastoral care & dining
│   │   │   ├── AccreditationsAwards.tsx # Verified rankings & Olympic mentors
│   │   │   ├── VerifiedTestimonials.tsx # 100% verified parent reviews
│   │   │   ├── AdmissionsSection.tsx # 4-step roadmap & registration form
│   │   │   ├── FAQSection.tsx       # Expandable parent FAQs
│   │   │   └── EnquiryModal.tsx     # Instant lead capture modal
│   │   └── layout/
│   │       ├── Navbar.tsx           # Sticky nav with theme switcher & helpline
│   │       ├── Footer.tsx           # Institutional footer (no AI tag)
│   │       └── ScrollProgress.tsx   # Top reading progress indicator
│   ├── context/
│   │   └── ThemeContext.tsx         # Day/Evening theme provider & hook
│   ├── data/
│   │   └── tisData.ts               # Verified institutional facts & reviews
│   └── types/
│       └── index.ts                 # TypeScript interfaces
├── package.json
└── tsconfig.json
```

---

## 7. Institutional Attribution

* **Institution**: Tulas International School, Dehradun (Under Rishabh Educational Trust)
* **CBSE Affiliation**: No. 3530464
* **Campus Address**: Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand), India
* **Helpline**: +91-9837983791 / +91-9458319102
* **Email**: info@tis.edu.in
