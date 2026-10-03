export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface SportItem {
  id: string;
  name: string;
  category: 'olympic' | 'field' | 'indoor' | 'equestrian';
  image: string;
  description: string;
  coachCredentials?: string;
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  relation: string;
  studentName: string;
  gradeContext: string;
  quote: string;
  rating: number;
  image: string;
  verifiedSource: string;
}

export interface AwardItem {
  id: string;
  title: string;
  awardedBy: string;
  category: string;
  year: string;
  badgeImage?: string;
}

export interface DignitaryItem {
  id: string;
  name: string;
  title: string;
  credentials: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'admissions' | 'boarding' | 'academics' | 'sports';
}

export interface AdmissionStep {
  stepNumber: string;
  title: string;
  description: string;
  timeline: string;
  actionLabel: string;
}
