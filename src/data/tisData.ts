import {
  MetricItem,
  SportItem,
  TestimonialItem,
  AwardItem,
  DignitaryItem,
  FAQItem,
  AdmissionStep,
  AcademicProgram,
  FacilityItem,
  WhyTISItem,
  ActivityItem
} from '@/types';

export const SCHOOL_INFO = {
  name: "Tulas International School",
  acronym: "TIS",
  affiliation: "CBSE Affiliated Co-Educational Residential School (Affiliation No. 3530464)",
  location: "Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun, Uttarakhand 248011, India",
  admissionsHelpline: "+91-9837983791",
  admissionsHelplineSecondary: "+91-9458319102",
  landlines: ["0135-2699444", "0135-2699666"],
  email: "info@tis.edu.in",
  establishedYear: 2012,
  parentTrust: "Rishabh Educational Trust",
  grades: "Classes IV to XII (Co-Educational Boarding & Day-Boarding)",
  campusArea: "22-Acre Pollution-Free Residential Foothill Campus",
};

export const VERIFIED_METRICS: MetricItem[] = [
  {
    id: "campus",
    value: "22 Acres",
    label: "Pollution-Free Green Campus",
    subtext: "Nestled in the pristine foothills of Dehradun, Uttarakhand",
    iconName: "Trees"
  },
  {
    id: "sports",
    value: "16+ Sports",
    label: "Olympic & Heritage Disciplines",
    subtext: "Professional arenas with certified national level coaches",
    iconName: "Trophy"
  },
  {
    id: "ratio",
    value: "6:1",
    label: "Student-Teacher Ratio",
    subtext: "Individual mentorship and dedicated pastoral care round the clock",
    iconName: "Users"
  },
  {
    id: "medical",
    value: "24*7",
    label: "Medical Care & Infirmary",
    subtext: "Resident nursing staff, doctor on call, and emergency transport",
    iconName: "HeartPulse"
  },
  {
    id: "history",
    value: "2012",
    label: "Established Lineage",
    subtext: "Founded under the aegis of Rishabh Educational Trust",
    iconName: "Landmark"
  },
  {
    id: "collaborations",
    value: "12+",
    label: "Global Partnerships",
    subtext: "International student exchange, Trinity speech, and MUN circuits",
    iconName: "Globe"
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "primary",
    title: "Primary Wing",
    gradeSpan: "Classes IV to V (Ages 9 to 11)",
    description: "Nurturing fundamental curiosity, phonetics, arithmetic reasoning, and experiential exploration in a warm pastoral environment.",
    keyFeatures: [
      "Activity-based foundational curriculum",
      "Dedicated house mother care and gentle boarding transition",
      "Early introduction to robotics, art, and music",
      "Daily guided reading and spoken English refinement"
    ],
    image: "/images/tis/Image_1.0a814859.webp",
    curriculumBadge: "CBSE Foundational Stage"
  },
  {
    id: "middle",
    title: "Middle School Wing",
    gradeSpan: "Classes VI to VIII (Ages 11 to 14)",
    description: "Developing analytical acumen, scientific inquiry, bilingual dexterity, and structured study routines with supervised evening preps.",
    keyFeatures: [
      "Experiential Science & Mathematics laboratory sessions",
      "Mandatory selection of two sports disciplines",
      "Trinity College London communication training",
      "Introductory coding, French/Sanskrit linguistic options"
    ],
    image: "/images/tis/Image_2.0c5295c9.webp",
    curriculumBadge: "CBSE Middle Preparatory"
  },
  {
    id: "secondary",
    title: "Secondary School Wing",
    gradeSpan: "Classes IX to X (Ages 14 to 16)",
    description: "Rigorous academic preparation aligning conceptual depth with CBSE Board examination excellence, balanced with competitive athletics.",
    keyFeatures: [
      "Comprehensive syllabus coverage and regular mock assessments",
      "Faculty guided evening prep sessions in residential houses",
      "Career aptitude mapping and psychometric guidance",
      "Leadership roles in inter-house competitions and clubs"
    ],
    image: "/images/tis/ladyInPink.c358aa8f.png",
    curriculumBadge: "CBSE All India Secondary"
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary Wing",
    gradeSpan: "Classes XI to XII (Ages 16 to 18)",
    description: "Specialized streams in Science, Commerce, and Humanities with integrated coaching modules for competitive university admissions.",
    keyFeatures: [
      "Science (PCM/PCB) with advanced experimental laboratory hours",
      "Commerce with Accountancy, Business Studies, Economics, and Maths",
      "Humanities with Political Science, Psychology, History, and Sociology",
      "Integrated guidance for JEE, NEET, CUET, CLAT, and SAT exams"
    ],
    image: "/images/tis/manInBlue.46316cbf.png",
    curriculumBadge: "CBSE Senior School Certificate"
  }
];

export const CAMPUS_FACILITIES: FacilityItem[] = [
  {
    id: "classrooms",
    title: "Interactive Smart Classrooms",
    category: "Academic Infrastructure",
    description: "Spacious, climate-regulated lecture rooms equipped with digital interactive display boards and ergonomic individual seating.",
    image: "/images/tis/Image_1.0a814859.webp",
    specs: "Smart AV Boards, Wi-Fi 6, 25-Student Cap"
  },
  {
    id: "laboratories",
    title: "STEM & Robotics Innovation Center",
    category: "Scientific Research",
    description: "High-grade laboratories for Physics, Chemistry, Biology, and Robotics equipped with sensors, 3D printers, and test benches.",
    image: "/images/tis/madeForFuture.e96fe7c1.png",
    specs: "Modern Sensors, AI Toolkits, Safety Showers"
  },
  {
    id: "library",
    title: "Central Knowledge Resource Library",
    category: "Academic Infrastructure",
    description: "Extensive repository comprising over 15,000 volumes, international periodicals, reference encyclopedias, and high-speed digital research terminals.",
    image: "/images/tis/Image_3.21dc9e69.webp",
    specs: "15,000+ Titles, Quiet Reading Bays, E-Journals"
  },
  {
    id: "sports-pavilion",
    title: "Olympic Sports Complex",
    category: "Athletics & Fitness",
    description: "Multi-acre athletic arenas including an archery range, shooting gallery, riding paddocks, semi-Olympic pool, and squash courts.",
    image: "/images/tis/archery.7a805345.png",
    specs: "16+ Sports, DecoTurf, WSF Squash, Floodlit"
  },
  {
    id: "hostels",
    title: "Residential Boarding Houses",
    category: "Pastoral Living",
    description: "Segregated hostels for boys and girls with climate control, en-suite washrooms, laundry service, recreational lounges, and resident house masters.",
    image: "/images/tis/ladyInPink.c358aa8f.png",
    specs: "Biometric Access, 24*7 Wardens, Solar Water"
  },
  {
    id: "dining",
    title: "Nutritious Vegetarian Dining Hall",
    category: "Pastoral Living",
    description: "Hygienic multi-cuisine dining serving four wholesome, balanced meals daily, planned by clinical nutritionists and prepared in stainless steel kitchens.",
    image: "/images/tis/Image_2.0c5295c9.webp",
    specs: "100% Pure Veg, 4 Meals/Day, RO Filtration"
  },
  {
    id: "infirmary",
    title: "24*7 Medical Health Center",
    category: "Health & Safety",
    description: "On-campus clinical infirmary staffed with certified resident nurses, visiting physicians, observation beds, and an emergency ambulance on standby.",
    image: "/images/tis/Image_3.21dc9e69.webp",
    specs: "Resident Nursing, Emergency Ambulance, Isolation Bay"
  },
  {
    id: "arts-centre",
    title: "Performing Arts & Craft Pavilion",
    category: "Creative Arts",
    description: "Dedicated acoustic music studios, dance halls with full mirror walls, pottery kilns, and fine art workshops.",
    image: "/images/tis/dance.88843edb.webp",
    specs: "Acoustic Rooms, Pottery Kiln, Mirror Studios"
  }
];

export const WHY_TIS_POINTS: WhyTISItem[] = [
  {
    id: "why-1",
    title: "Academic Excellence & Supervised Preps",
    shortDesc: "Individual attention with evening faculty preps ensuring top board performance.",
    detailedText: "Our residential teachers supervise mandatory evening study preps in hostel study halls, offering immediate doubt resolution and personalized academic intervention.",
    icon: "GraduationCap",
    statBadge: "100% Board Pass Rate"
  },
  {
    id: "why-2",
    title: "6:1 Student to Teacher Ratio",
    shortDesc: "One of India's most personalized educational and pastoral environments.",
    detailedText: "With small batch sizes of maximum 25 students per section, teachers notice every learner's cognitive pace, strengths, and pastoral well-being.",
    icon: "Users",
    statBadge: "6:1 Mentor Ratio"
  },
  {
    id: "why-3",
    title: "16+ Olympic & Heritage Sports",
    shortDesc: "Professional sports integrated as the fundamental pillar of daily routine.",
    detailedText: "Every student trains under certified NIS coaches in disciplines including Compound Archery, 10m Shooting, Equestrian Dressage, Semi-Olympic Aquatics, and Squash.",
    icon: "Trophy",
    statBadge: "16+ Disciplines"
  },
  {
    id: "why-4",
    title: "The Modern Gurukul Ethos",
    shortDesc: "Timeless Indian moral values fused with forward-thinking global competence.",
    detailedText: "Mentors and students coexist as an extended family. Respect, self-discipline, humility, and environmental stewardship are lived realities rather than mere textbook concepts.",
    icon: "Compass",
    statBadge: "Est. 2012 Lineage"
  },
  {
    id: "why-5",
    title: "Pristine 22-Acre Pollution-Free Campus",
    shortDesc: "Clean Himalayan mountain air fostering robust physical and mental wellness.",
    detailedText: "Located along Chakrata Road in Dehradun away from urban vehicular congestion, providing a secure, quiet, and revitalizing atmosphere for growth.",
    icon: "Trees",
    statBadge: "22-Acre Green Campus"
  },
  {
    id: "why-6",
    title: "Global Leadership & Cultural Circuits",
    shortDesc: "International collaborations, MUN summits, and Trinity certifications.",
    detailedText: "Students build global confidence through Trinity College London speech assessments, national debating championships, and cross-cultural exchanges.",
    icon: "Globe",
    statBadge: "12+ Collaborations"
  }
];

export const STUDENT_ACTIVITIES: ActivityItem[] = [
  {
    id: "act-pottery",
    title: "Pottery & Ceramic Sculpture",
    category: "arts",
    description: "Hands-on wheel throwing, hand-building, glazing, and kiln firing, fostering tactile creativity and mindfulness.",
    image: "/images/tis/pot.6f7c2ee3.webp",
    frequency: "Weekly Studio Workshops"
  },
  {
    id: "act-dance",
    title: "Classical Kathak & Contemporary Dance",
    category: "arts",
    description: "Rhythm, expression, posture, and choreography training culminating in annual school theatre productions.",
    image: "/images/tis/dance.88843edb.webp",
    frequency: "Daily Afternoon Ensembles"
  },
  {
    id: "act-martial-arts",
    title: "Martial Arts & Self-Defense Dojo",
    category: "sports",
    description: "Belt progression, defensive discipline, core agility, and mental focus under certified black belt masters.",
    image: "/images/tis/karate.4020fba5.webp",
    frequency: "Early Morning Conditioning"
  },
  {
    id: "act-equestrian",
    title: "Equestrian & Horse Riding Paddock",
    category: "sports",
    description: "Stable management, grooming, trot and canter mastery, and show jumping on trained thoroughbreds.",
    image: "/images/tis/polo.973ddbae.webp",
    frequency: "Morning Riding Slots"
  },
  {
    id: "act-aquatics",
    title: "Semi-Olympic Swimming & Aquatics",
    category: "sports",
    description: "Stroke refinement in freestyle, backstroke, breaststroke, and butterfly with water safety training.",
    image: "/images/tis/swimming.6fc81e65.webp",
    frequency: "Daily Squad Training"
  },
  {
    id: "act-robotics",
    title: "Robotics & Innovation Laboratory",
    category: "clubs",
    description: "Microcontroller programming, sensor integration, robotic chassis design, and national hackathons.",
    image: "/images/tis/madeForFuture.e96fe7c1.png",
    frequency: "Weekend Maker Sessions"
  }
];

export const VERIFIED_AWARDS: AwardItem[] = [
  {
    id: "award-1",
    title: "#1 Co-Educational Boarding School",
    awardedBy: "Education Today",
    category: "Dehradun Region",
    year: "2024-2025",
    badgeImage: "/images/tis/TopBoarding.e5405c1a.jpg"
  },
  {
    id: "award-2",
    title: "#1 Residential School in North India",
    awardedBy: "Outlook Education Survey",
    category: "Infrastructure & Pastoral Care",
    year: "2024",
    badgeImage: "/images/tis/BestResidential.5173db8d.jpg"
  },
  {
    id: "award-3",
    title: "Best Boarding School in Uttarakhand",
    awardedBy: "Education Today India Rankings",
    category: "Holistic Development & Sports",
    year: "2023-2024",
    badgeImage: "/images/tis/UTTARAKHAND.652376d5.jpg"
  }
];

export const REAL_SPORTS_FACILITIES: SportItem[] = [
  {
    id: "archery",
    name: "Archery Academy",
    category: "olympic",
    image: "/images/tis/archery.7a805345.png",
    description: "Olympic specification outdoor range with compound and recurve archery coaching led by national champions.",
    coachCredentials: "Coached by Dronacharya & Arjuna Awardee mentors"
  },
  {
    id: "horse-riding",
    name: "Equestrian & Horse Riding",
    category: "equestrian",
    image: "/images/tis/horseRiding.8f259127.png",
    description: "Paddock arena, stable maintenance, dressage, show-jumping, and horsemanship discipline.",
    coachCredentials: "Certified cavalry and equestrian instructors"
  },
  {
    id: "shooting",
    name: "Precision Shooting Range",
    category: "olympic",
    image: "/images/tis/shooting.b0b11d74.png",
    description: "10-meter indoor electronic target range for air rifle and air pistol target training.",
    coachCredentials: "State-of-the-art electronic target systems"
  },
  {
    id: "swimming",
    name: "Semi-Olympic Swimming Pool",
    category: "olympic",
    image: "/images/tis/swimming.d4285534.png",
    description: "Temperature-regulated half-Olympic swimming pool with dedicated life guards and stroke refinement trainers.",
    coachCredentials: "Certified NIS swimming faculty"
  },
  {
    id: "squash",
    name: "Glass-Back Squash Courts",
    category: "indoor",
    image: "/images/tis/squash.ffa0360a.png",
    description: "Air-conditioned WSF approved indoor courts for high-tempo tactical racquet training.",
    coachCredentials: "Tournament standard maple wood flooring"
  },
  {
    id: "football",
    name: "Full-Size Football Pitch",
    category: "field",
    image: "/images/tis/football.ca61e5d0.png",
    description: "Natural grass floodlit field hosting inter-school tournaments and rigorous conditioning.",
    coachCredentials: "AIFF certified coaching curriculum"
  },
  {
    id: "lawn-tennis",
    name: "DecoTurf Tennis Courts",
    category: "field",
    image: "/images/tis/lawnTennis.7b3b894a.png",
    description: "Synthetic cushioned hard courts designed for junior developmental circuits and daily drills.",
    coachCredentials: "ITF junior development format"
  },
  {
    id: "taekwondo",
    name: "Taekwondo & Martial Arts Dojo",
    category: "indoor",
    image: "/images/tis/taekwando.86e26406.png",
    description: "Specialized rubberized dojo focusing on defensive martial arts, posture, and belt progression.",
    coachCredentials: "Black belt Dan certified mentors"
  },
  {
    id: "badminton",
    name: "Indoor Badminton Courts",
    category: "indoor",
    image: "/images/tis/badminton.a314ff00.png",
    description: "Wooden indoor sports pavilion with non-marking court surfaces and high illumination.",
    coachCredentials: "BWF regulation court layout"
  },
  {
    id: "basketball",
    name: "Basketball Complex",
    category: "field",
    image: "/images/tis/basketball.fa70909d.png",
    description: "Multi-court asphalt and acrylic facility with floodlights for evening inter-house matches.",
    coachCredentials: "Led under guidance of FIBA Asia veterans"
  },
  {
    id: "cricket",
    name: "Cricket Oval & Practice Nets",
    category: "field",
    image: "/images/tis/Cricket.b06b18ca.png",
    description: "Turf pitches, bowling nets, and dedicated outfield training for junior and senior teams.",
    coachCredentials: "BCCI Level 1 qualified trainers"
  },
  {
    id: "table-tennis",
    name: "Table Tennis Hall",
    category: "indoor",
    image: "/images/tis/tableTennis.61f6bd56.png",
    description: "Multi-table recreation and competition room for hand-eye coordination and reflex training.",
    coachCredentials: "Stag tournament regulation boards"
  }
];

export const VERIFIED_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-tashi",
    parentName: "Tashi Tsering",
    relation: "Father of Jigmet Skaldon",
    studentName: "Jigmet Skaldon",
    gradeContext: "Senior School Boarder",
    quote: "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son. The pastoral care and residential warmth make parents feel completely assured.",
    rating: 5,
    image: "/images/tis/tashi.3807cb3c.png",
    verifiedSource: "Verified Google Review"
  },
  {
    id: "rev-namita",
    parentName: "Namita Agarwal",
    relation: "Mother of Krishna Agarwal",
    studentName: "Krishna Agarwal",
    gradeContext: "Middle School Boarder",
    quote: "Tulas gives a comprehensive environment for our child to grow. The balance of sports, academics, and extra-curricular activities has helped Krishna in knowing himself better and gaining supreme self-assurance.",
    rating: 5,
    image: "/images/tis/namita.86a0f799.png",
    verifiedSource: "Verified Google Review"
  },
  {
    id: "rev-sandeep",
    parentName: "Sandeep Kumar",
    relation: "Father of Aryan",
    studentName: "Aryan",
    gradeContext: "Secondary School Boarder",
    quote: "Our experience is very amazing with the school. Staff is cooperative and supportive. Our son always admires the school whenever we talk with him, especially the sports academy and dining facilities.",
    rating: 5,
    image: "/images/tis/sandeep.1b22b59e.png",
    verifiedSource: "Verified Google Review"
  },
  {
    id: "rev-pinky",
    parentName: "Pinky Sharma",
    relation: "Mother of Swastik Sharma",
    studentName: "Swastik Sharma",
    gradeContext: "Primary School Boarder",
    quote: "I am happy and satisfied with the wonderful experience of my son in this school. Teachers are deeply committed, especially during evening study preps. The faculty is always accessible whenever parents call.",
    rating: 5,
    image: "/images/tis/pinky.8d7145b0.png",
    verifiedSource: "Verified Google Review"
  },
  {
    id: "rev-suresh",
    parentName: "Suresh Kumar",
    relation: "Father of Aditya Kumar",
    studentName: "Aditya Kumar",
    gradeContext: "Senior Secondary Boarder",
    quote: "Tulas International School is doing excellent in all fields, especially giving wide exposure to children. The academic programme is nicely planned, thoroughly structured, and backed by sincere faculty.",
    rating: 5,
    image: "/images/tis/suresh.80d60e49.png",
    verifiedSource: "Verified Google Review"
  },
  {
    id: "rev-urja",
    parentName: "Mrs. Urja Bhayani",
    relation: "Mother of Shikha & Samarth Bhayani",
    studentName: "Shikha & Samarth Bhayani",
    gradeContext: "Middle & Senior School",
    quote: "Right from the beginning, the academic team has been exceptionally supportive. Both of our children have blossomed in their confidence, social grace, and scholastic performance.",
    rating: 5,
    image: "/images/tis/urja.03e3c3f3.png",
    verifiedSource: "Verified Google Review"
  },
  {
    id: "rev-amit",
    parentName: "Amit Agrawal",
    relation: "Father of Samruddhi Agrawal",
    studentName: "Samruddhi Agrawal",
    gradeContext: "Girls Boarding Wing",
    quote: "Being a parent, finding a boarding school that qualifies on rigorous parameters of safety, hygiene, academics, and self-discipline was vital. Tulas has exceeded all expectations on girls hostel security.",
    rating: 5,
    image: "/images/tis/amit.c7b6247e.png",
    verifiedSource: "Verified Google Review"
  },
  {
    id: "rev-ashu",
    parentName: "Ashu Arora",
    relation: "Mother of Manisha Changrani",
    studentName: "Manisha Changrani",
    gradeContext: "Secondary Boarder",
    quote: "It has been a fantastic journey for my daughter in Tulas International School. The boarding infrastructure and dining hygiene are top tier. We have seen significant maturity and focus in Manisha.",
    rating: 5,
    image: "/images/tis/ashu.9d447126.png",
    verifiedSource: "Verified Google Review"
  }
];

export const DISTINGUISHED_MENTORS: DignitaryItem[] = [
  {
    id: "mentor-sakshi",
    name: "Sakshi Malik",
    title: "Olympic Bronze Medalist (Rio 2016) & Padma Shri Awardee",
    credentials: "First Indian female wrestler to win an Olympic medal. Conducted wrestling and sports motivation workshops at TIS campus.",
    image: "/images/tis/SakshiMalik.91174bf4.webp"
  },
  {
    id: "mentor-vishesh",
    name: "Vishesh Bhriguvanshi",
    title: "Former Captain, Indian National Basketball Team",
    credentials: "Arjuna Awardee and Asian Games gold medalist. Led basketball clinic and youth conditioning sessions at TIS.",
    image: "/images/tis/VisheshBhriguvanshi.52af8bfd.webp"
  },
  {
    id: "mentor-prakashi",
    name: "Prakashi Tomar (Shooter Dadi)",
    title: "Veteran National Shooting Champion & Inspiration",
    credentials: "National shooting champion with 30+ medals. Mentored TIS shooting range cadets on focus, breath control, and grit.",
    image: "/images/tis/PrakashiTomar.339dbb95.webp"
  },
  {
    id: "mentor-abhishek",
    name: "Abhishek Verma",
    title: "World Rank #6 & Arjuna Awardee Archer",
    credentials: "Asian Games Gold Medalist. Guides the curriculum and developmental milestones for TIS archery scholars.",
    image: "/images/tis/AbhishekVerma.18f9d349.webp"
  },
  {
    id: "mentor-aditi",
    name: "Aditi Gopichand Swami",
    title: "World Champion & Arjuna Awardee",
    credentials: "World Archery Champion 2024. Guest mentor inspiring girl archers at Tulas International School.",
    image: "/images/tis/AditiGopichandSwami.b7afa246.webp"
  }
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    stepNumber: "01",
    title: "Submit Admissions Inquiry",
    description: "Fill the online registration form or reach out directly to the admissions desk at +91-9837983791 to receive the 2026-2027 prospectus.",
    timeline: "Step 1",
    actionLabel: "Online Registration"
  },
  {
    stepNumber: "02",
    title: "Campus Tour & Interaction",
    description: "Visit our 22-acre Dehradun campus to tour the boarding houses, sports academies, dining facility, and meet the Head of School.",
    timeline: "Step 2",
    actionLabel: "Schedule Visit"
  },
  {
    stepNumber: "03",
    title: "Diagnostic Assessment",
    description: "An age-appropriate aptitude evaluation in English, Mathematics, and General Awareness to identify your child's strengths and learning style.",
    timeline: "Step 3",
    actionLabel: "Assessment Guidelines"
  },
  {
    stepNumber: "04",
    title: "Offer & Pastoral Onboarding",
    description: "Upon provisional selection, receive the formal admission letter, complete fee formalities, and receive the boarding kit and house mentor introduction.",
    timeline: "Step 4",
    actionLabel: "Enrollment Confirmation"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What curriculum does Tulas International School follow?",
    answer: "TIS is affiliated with the Central Board of Secondary Education (CBSE), New Delhi (Affiliation No. 3530464). The school combines CBSE curriculum rigor with international pedagogical standards, robotics, arts, and competitive entrance preparation.",
    category: "academics"
  },
  {
    id: "faq-2",
    question: "What classes are eligible for boarding admission?",
    answer: "Boarding admissions are open for boys and girls from Class IV to Class XII. Day-boarding options are also available for local residents of Dehradun and surrounding districts.",
    category: "admissions"
  },
  {
    id: "faq-3",
    question: "How is student security and pastoral care managed on campus?",
    answer: "TIS maintains a completely secure 22-acre gated campus with 24x7 security personnel, biometric surveillance, and dedicated house parents residing in every hostel wing. Girls and boys have strictly segregated, access-controlled hostels.",
    category: "boarding"
  },
  {
    id: "faq-4",
    question: "What are the dining arrangements and dietary hygiene standards?",
    answer: "The school dining hall serves 100% vegetarian, balanced, and nutritious meals prepared under stringent food safety protocols. The menu includes 4 meals daily: breakfast, lunch, evening high-tea, and dinner, formulated by certified nutritionists.",
    category: "boarding"
  },
  {
    id: "faq-5",
    question: "How are sports integrated into the daily routine?",
    answer: "Every student participates in at least 2 sports disciplines daily under certified coaches. Early mornings feature conditioning, yoga, or horse riding, while late afternoons are dedicated to competitive squad training in archery, football, swimming, lawn tennis, or shooting.",
    category: "sports"
  },
  {
    id: "faq-6",
    question: "What medical facilities are available in case of emergency?",
    answer: "TIS houses a 24-hour on-campus infirmary with qualified nursing staff and a visiting medical practitioner. An ambulance is stationed on campus 24x7 for immediate transfer to top tertiary care hospitals in Dehradun if required.",
    category: "boarding"
  }
];
