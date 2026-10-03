# Loom Walkthrough Video Script & Technical Presentation Guide

**Project**: Tulas International School (TIS) – Animated Homepage Redesign  
**Candidate**: Anirudh Chenna  
**Repository**: [https://github.com/AnirudhChenna/tis-frontend-assignment](https://github.com/AnirudhChenna/tis-frontend-assignment)  
**Target Duration**: 2:30 - 3:30 Minutes  

---

## Video Outline & Timestamped Talking Points

### [0:00 - 0:30] Introduction & Project Overview
* **What to say**:
  > *"Hello, my name is Anirudh Chenna. Today I'm presenting my frontend redesign for the Tulas International School (TIS) homepage, a premier CBSE co-educational residential school in Dehradun. 
  > My core objective was to elevate the school's digital presence into a cutting-edge, high-converting, animated web experience while strictly maintaining the authentic heritage, copy, and real photography of TIS."*
* **What to show**:
  - Show the top announcement bar (`+91-9837983791`, CBSE Affiliation No. 3530464).
  - Show the Hero section with its clear headline: *"The Modern Gurukul: Premier Residential School in Dehradun"*.
  - Point out the absence of vague hero text, purple gradients, or pill buttons.

---

### [0:30 - 1:00] Advanced Feature 1 & 2: Reading Progress & Theme Switcher
* **What to say**:
  > *"To deliver a standout experience, I implemented three advanced features:
  > First, a top reading progress indicator powered by Framer Motion's useScroll and useSpring for 60fps physics-based scroll tracking.
  > Second, an institutional Day Mode to Evening Mode theme switcher that toggles between Heritage Day and Prestigious Evening with full contrast compliance and zero purple hues."*
* **What to show**:
  - Scroll down slightly to demonstrate the top crimson-gold progress bar filling smoothly.
  - Click the Sun/Moon toggle icon in the navbar to show the instant, polished theme switch to dark mode, then toggle back to day mode.

---

### [1:00 - 1:45] Sections Walkthrough: Academics & Campus Bento Grid
* **What to say**:
  > *"For the content architecture, I divided the page into 13 dedicated, reusable components:
  > In the About section, verified metrics show real numbers: 22-acre campus, 16+ Olympic sports, and a 6:1 student-teacher ratio.
  > In the Academics section, four distinct stages from Primary to Senior Secondary feature interactive 'Curriculum Details' modals.
  > In the Campus & Facilities section, a modern Bento Grid offers real-time filtering across athletics, boarding, and STEM laboratories."*
* **What to show**:
  - Click 'Curriculum Details' on the Middle School card to show the modal pop-up, then close it.
  - Click the category filter tabs on the Campus Bento Grid to demonstrate instant filter transitions.

---

### [1:45 - 2:20] Sports Academy, Testimonials & Admissions Form
* **What to say**:
  > *"Sports is a core foundation at TIS. I built a dynamic filter for the 16+ Olympic and heritage disciplines—featuring authentic campus photography of archery, horse riding, and shooting ranges.
  > The testimonials section showcases 100% verified parent reviews with real student names from public school records.
  > Near the footer, parents can interact with a four-step admissions roadmap and a contact inquiry form featuring complete client-side validation."*
* **What to show**:
  - Filter sports by 'Olympic Sports' or 'Equestrian'.
  - Highlight the parent review cards and Google Reviews badge.
  - Show the contact form with validation and the prominent Admissions CTA banner.

---

### [2:20 - 3:00] Architecture, Code Quality & Compliance
* **What to say**:
  > *"Under the hood:
  > - Framework: Next.js 16 App Router with React 19 and Turbopack.
  > - Styling: Tailwind CSS v4 using semantic CSS variables in globals.css.
  > - Icons: Lucide React pure vector SVGs—zero unicode emojis.
  > - Performance: All 52 assets are authentic high-resolution images from TIS, with pre-rendered static export in the out directory.
  > - Complete Legal Compliance: Connected custom domain tis.edu.in via CNAME, custom SVG shield favicon, and dedicated Privacy Policy and Terms & Conditions routes.
  > The repository is publicly hosted on GitHub at AnirudhChenna/tis-frontend-assignment with full CI/CD workflows for GitHub Pages, Vercel, and Netlify.
  > Thank you!"*
* **What to show**:
  - Show the footer with verified domain badge, Privacy Policy link, and Terms & Conditions link.
  - Briefly flash the GitHub repository page ([https://github.com/AnirudhChenna/tis-frontend-assignment](https://github.com/AnirudhChenna/tis-frontend-assignment)).
