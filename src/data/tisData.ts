import { MetricItem, SportItem, TestimonialItem, AwardItem, DignitaryItem, FAQItem, AdmissionStep } from '@/types';

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
