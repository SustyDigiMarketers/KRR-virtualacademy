import { NavItem, Teacher, Event, Testimonial, Facility } from './types';

export const SCHOOL_NAME = "KRR Academy";
export const SCHOOL_TAGLINE = "Nurturing Minds, Building Futures";
export const SCHOOL_ADDRESS = "71–75 Shelton Street, Covent Garden, London, WC2H 9JQ";
export const SCHOOL_PHONE = "07453 697 795";
export const SCHOOL_EMAIL = "Krrvirtualacademy@gmail.com";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Academics', path: '/academics' },
  { label: 'Coding', path: '/coding' },
  { label: 'Contact us', path: '/contact' },
];

export const PRICING_PLANS = [
  {
    title: "SATs",
    price: "£18",
    period: "per session",
    description: "Build foundational skills and core confidence in Maths and English to ensure your child feels fully prepared and stress-free for their Year 6 national assessments.",
    features: [
      "Mathematics Mastery",
      "English & SPaG",
      "Reading Comprehension",
      "Mock Exam Practice",
      "Confidence Building",
      "Progress Tracking"
    ],
    popular: true,
    color: "amber"
  },
  {
    title: "Years 7- 9",
    price: "£20",
    period: "per session",
    description: "Strengthen subject knowledge and bridge the gap between primary education and GCSEs with targeted, engaging support in core subjects.",
    features: [
      "Core Subject Support",
      "Bridge to GCSE",
      "Interactive Lessons",
      "Subject Mastery",
      "Critical Thinking",
      "Regular Assessments"
    ],
    popular: false,
    color: "rose"
  },
  {
    title: "GCSEs",
    price: "£22",
    period: "per session",
    description: "Achieve top grades with expert coaching, mock exam practice, and structured lessons designed to master the curriculum and boost exam technique.",
    features: [
      "Expert Coaching",
      "Mock Exam Practice",
      "Exam Technique",
      "Curriculum Mastery",
      "Revision Strategies",
      "1-on-1 Feedback"
    ],
    popular: true,
    color: "indigo"
  },
  {
    title: "A levels",
    price: "£30",
    period: "per session",
    description: "Rigorous, specialized support from subject experts to help students master advanced concepts, refine essay skills, and secure top university placements.",
    features: [
      "Specialized Support",
      "Advanced Concepts",
      "Mock Exam Practice",
      "University Placements",
      "Past Paper Analysis",
      "Expert Coaching"
    ],
    popular: false,
    color: "emerald"
  },
  {
    title: "Coding",
    price: "£20",
    period: "per session",
    description: "Future-ready skills from industry experts to help students master programming logic, build real-world projects, and jumpstart a career in technology.",
    features: [
      "Programming Logic",
      "Real-world Projects",
      "Industry Experts",
      "Tech Career Prep",
      "Python & AI",
      "Creative Coding"
    ],
    popular: true,
    color: "cyan"
  }
];

export const FLEXIBLE_PRICING_FEATURES = [
  {
    title: "Flexible Payment Plans",
    description: "Choose to pay your child's tuition either weekly or monthly—whichever is most convenient for you.",
    icon: "CreditCard"
  },
  {
    title: "Sibling Discount",
    description: "Education is a family journey. Enrolling more than one child? Enjoy a special reduced rate for every additional sibling who joins us.",
    icon: "Users"
  },
  {
    title: "Referral Rewards",
    description: "Share the success! Recommend KRR Virtual Academy to a friend, and when they sign up, both of you will receive an exclusive discount on your tuition.",
    icon: "Gift"
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    subject: "Physics & Robotics",
    experience: "15 Years",
    image: "https://picsum.photos/id/64/300/300",
    bio: "Ph.D. in Astrophysics, leading our STEM integration program."
  },
  {
    id: 2,
    name: "Mr. James Alcott",
    subject: "English Literature",
    experience: "12 Years",
    image: "https://picsum.photos/id/91/300/300",
    bio: "Published author and head of the Drama Club."
  },
  {
    id: 3,
    name: "Ms. Anita Roy",
    subject: "Mathematics",
    experience: "8 Years",
    image: "https://picsum.photos/id/65/300/300",
    bio: "Specializes in making complex calculus accessible to everyone."
  },
  {
    id: 4,
    name: "Coach David Kim",
    subject: "Physical Education",
    experience: "10 Years",
    image: "https://picsum.photos/id/177/300/300",
    bio: "Former national-level athlete, focusing on holistic health."
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 1,
    title: "Advanced Robotics Lab",
    description: "State-of-the-art equipment for hands-on STEM learning.",
    image: "https://picsum.photos/id/20/600/400"
  },
  {
    id: 2,
    title: "Olympic Size Pool",
    description: "Fostering champions with professional aquatic facilities.",
    image: "https://picsum.photos/id/28/600/400"
  },
  {
    id: 3,
    title: "Digital Library",
    description: "Access to over 50,000 digital resources and quiet study zones.",
    image: "https://picsum.photos/id/24/600/400"
  }
];

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "Nov 15, 2024",
    description: "Students showcase innovative projects in green energy.",
    image: "https://picsum.photos/id/36/400/250"
  },
  {
    id: 2,
    title: "Winter Concert",
    date: "Dec 10, 2024",
    description: "A magical evening of music by our orchestra and choir.",
    image: "https://picsum.photos/id/42/400/250"
  },
  {
    id: 3,
    title: "Regional Debate Championship",
    date: "Jan 05, 2025",
    description: "Hosting top schools for the regional debate finals.",
    image: "https://picsum.photos/id/5/400/250"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Emily Thompson",
    role: "Parent of Grade 10 Student",
    content: "KRR Academy has transformed my son's approach to learning. The faculty genuinely cares.",
    image: "https://picsum.photos/id/77/100/100"
  },
  {
    id: 2,
    name: "Raj Patel",
    role: "Alumni, Class of 2018",
    content: "The foundation I received here was instrumental in my acceptance to Ivy League universities.",
    image: "https://picsum.photos/id/53/100/100"
  }
];

export const ADMISSION_STEPS = [
  "Submit Online Inquiry",
  "Schedule Campus Visit / Virtual Tour",
  "Assessment & Interaction",
  "Document Submission & Fee Payment"
];

// Context for the AI Chatbot
export const SCHOOL_CONTEXT = JSON.stringify({
  name: SCHOOL_NAME,
  tagline: SCHOOL_TAGLINE,
  address: SCHOOL_ADDRESS,
  contact: { phone: SCHOOL_PHONE, email: SCHOOL_EMAIL },
  curriculum: "CBSE & Cambridge IGCSE options available.",
  levels: "Kindergarten (KG) to Grade 12",
  facilities: FACILITIES.map(f => f.title).join(", "),
  admissions: "Open for 2024-25. Apply online via our portal. Process involves inquiry, visit, and assessment.",
  values: "Excellence, Integrity, Empathy, Innovation",
  fees: "Fee structure varies by grade. Approx range $2k - $5k per annum. Contact admissions for details.",
  events: EVENTS.map(e => `${e.title} on ${e.date}`).join("; "),
  coding: "We offer advanced coding programs including Python, AI, and Robotics as part of our core curriculum."
});

export const CONTACT_FORM_ACTION_URL = "https://script.google.com/macros/s/AKfycbzR0B1eBPRWse-bZaFanQRXL989yDfb8uj--l5C_kcjmtB-Wat5hPZIlUyu-Uj27EvoNg/exec";