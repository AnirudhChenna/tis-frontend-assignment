'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Shield, Heart, Compass, CheckCircle2 } from 'lucide-react';

export default function ModernGurukulPhilosophy() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "scholastic",
      icon: <BookOpen className="w-5 h-5" />,
      title: "Scholastic Rigor & CBSE Excellence",
      subtitle: "Classes IV to XII with personalized evening preps",
      description: "Our curriculum emphasizes deep conceptual understanding rather than rote repetition. Faculty members reside on campus to conduct supervised evening prep hours, ensuring every student has immediate academic assistance whenever needed.",
      points: [
        "Structured evening faculty prep sessions in boarding houses",
        "State-of-the-art AI, Robotics, and experiential Science laboratories",
        "Targeted preparation for competitive exams alongside CBSE board syllabus",
        "Interactive audio-visual smart classrooms with low student-teacher ratio"
      ],
      image: "/images/tis/Image_1.0a814859.webp"
    },
    {
      id: "sports-discipline",
      icon: <Shield className="w-5 h-5" />,
      title: "Physical Conditioning & Olympic Discipline",
      subtitle: "Daily mandatory sports under certified NIS coaches",
      description: "Physical vitality forms the bedrock of mental stamina. With over 16 Olympic and heritage disciplines spread across our 22-acre sports complex, students build resilience, team spirit, and strategic agility under professional mentors.",
      points: [
        "Dedicated Olympic specification archery and precision shooting ranges",
        "Full-sized equestrian arena with trained horses and riding masters",
        "Semi-Olympic swimming pool with stroke refinement coaching",
        "Glass-back squash courts and DecoTurf tennis facilities"
      ],
      image: "/images/tis/Image_3.21dc9e69.webp"
    },
    {
      id: "pastoral",
      icon: <Heart className="w-5 h-5" />,
      title: "Pastoral Warmth & Character Formation",
      subtitle: "A home away from home with 24*7 resident house parents",
      description: "Boarding at TIS mirrors the ancient Gurukul where mentors and disciples live as a close-knit family. Dedicated house parents instill values of empathy, self-reliance, and impeccable personal hygiene in secure, comfortable dormitories.",
      points: [
        "Strictly segregated, biometric-controlled boys and girls boarding wings",
        "Nutritious 100% vegetarian multi-cuisine dining designed by dieticians",
        "24*7 infirmary with resident nurses and on-call physicians",
        "Weekly parent interaction schedules and transparent progress updates"
      ],
      image: "/images/tis/ladyInPink.c358aa8f.png"
    },
    {
      id: "global",
      icon: <Compass className="w-5 h-5" />,
      title: "Global Leadership & Cultural Roots",
      subtitle: "Traditional values seamlessly fused with modern international outlook",
      description: "Students participate in international student exchange programs, Trinity College London communication exams, Model United Nations conferences, and rural community outreach, preparing them to lead ethically on the world stage.",
      points: [
        "12+ international university and educational collaborations",
        "Trinity College London speech, drama, and communication certification",
        "Active participation in national MUN and debating circuits",
        "Clubs covering astronomy, debate, eco-warriors, and classical music"
      ],
      image: "/images/tis/manInBlue.46316cbf.png"
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-[#fdfbf7] dark:bg-[#0b0f19] border-b border-[#e5ded0] dark:border-[#24314c] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#940a24] dark:text-[#d6b46b]">
            Educational Ethos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171a21] dark:text-[#f8fafc]">
            The Modern Gurukul Philosophy
          </h2>
          <p className="text-sm sm:text-base text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
            Established in 2012 under the aegis of Rishabh Educational Trust to impart holistic education through seamless opportunities. Bridging ancient Indian values with modern scientific rigor.
          </p>
        </div>

        {/* Tab Buttons for Pillars (Architectural - NOT pill shaped) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {pillars.map((pillar, idx) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activePillar === idx
                  ? 'bg-[#940a24] text-white shadow-sm'
                  : 'bg-white dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c] text-[#4a5160] dark:text-[#cbd5e1] hover:border-[#940a24] dark:hover:border-[#d6b46b]'
              }`}
            >
              <span>{pillar.icon}</span>
              <span>{pillar.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Card (Interactive Showcase) */}
        <motion.div
          key={activePillar}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#111827] rounded-lg border border-[#e5ded0] dark:border-[#24314c] p-6 sm:p-10 shadow-sm"
        >
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#940a24] dark:text-[#d6b46b]">
                Pillar {activePillar + 1} of 4
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171a21] dark:text-[#f8fafc]">
                {pillars[activePillar].title}
              </h3>
              <p className="text-sm font-medium text-[#727a8a] dark:text-[#94a3b8]">
                {pillars[activePillar].subtitle}
              </p>
            </div>

            <p className="text-sm text-[#4a5160] dark:text-[#cbd5e1] leading-relaxed">
              {pillars[activePillar].description}
            </p>

            <div className="space-y-3 pt-2">
              {pillars[activePillar].points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#940a24] dark:text-[#d6b46b] mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#171a21] dark:text-[#cbd5e1]">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#e5ded0] dark:border-[#24314c]">
              <Image
                src={pillars[activePillar].image}
                alt={pillars[activePillar].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            
            {/* Authentic Quote Banner */}
            <div className="mt-4 p-4 rounded-md bg-[#f8f5ee] dark:bg-[#162033] border border-[#e5ded0] dark:border-[#24314c]">
              <p className="font-serif italic text-xs text-[#171a21] dark:text-[#f8fafc] leading-snug">
                &ldquo;We feel supported in what we do and nudged further to do more. School isn&apos;t just about lessons, it&apos;s about endless opportunities waiting to be explored.&rdquo;
              </p>
              <p className="text-[11px] font-semibold text-[#940a24] dark:text-[#d6b46b] mt-1.5 uppercase tracking-wider">
                Tulas Educational Charter
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
