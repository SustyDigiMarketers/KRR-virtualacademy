import React, { useState } from 'react';
import { 
  ArrowRight, BookOpen, Users, Trophy, 
  CheckCircle, Monitor, 
  Star, GraduationCap, Cpu, Terminal, Wifi,
  Globe, Code, Quote,
  Atom, FlaskConical, Dna,
  Calculator, Sigma, TrendingUp, Gamepad, Smartphone, Layers, 
  Rocket, Check, MapPin, Phone, Mail, ChevronDown,
  CreditCard, Camera, Clock, FileX, HelpCircle, Send,
  ShieldCheck, Zap, Award, Video, Calendar, Sparkles, Microscope, BrainCircuit,
  ThumbsUp, X as XIcon, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  TEACHERS, FACILITIES, EVENTS, TESTIMONIALS, 
  ADMISSION_STEPS, SCHOOL_TAGLINE, SCHOOL_NAME, SCHOOL_ADDRESS, SCHOOL_EMAIL, SCHOOL_PHONE,
  CONTACT_FORM_ACTION_URL
} from '../constants';

// --- Assets Imports ---
// Using absolute paths '/' to ensure they load from the domain root.
// Ensure these files exist in your public/root folder and case matches exactly.
// Added ?v=1 to bust cache if images were recently updated/fixed.
const digitalAgeImg = "/digital-age.jpg?v=1";
const gcseImg = "/gcse.jpg?v=1";
const alevelImg = "/alevel.jpg?v=1";
const codingImg = "/coding.jpg?v=1";


// --- Helper Components ---
export const SectionTitle = ({ title, subtitle, center = false, light = false }: { title: string, subtitle?: string, center?: boolean, light?: boolean }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <h3 className={`font-bold tracking-widest text-sm uppercase mb-2 ${light ? 'text-school-gold' : 'text-school-gold'}`}>
      {subtitle || SCHOOL_NAME}
    </h3>
    <h2 className={`text-3xl md:text-5xl font-serif font-bold ${light ? 'text-white' : 'text-school-navy'}`}>
      {title}
    </h2>
    <div className={`h-1 w-20 bg-school-gold mt-4 ${center ? 'mx-auto' : ''}`}></div>
  </div>
);

// --- Sections ---

export const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-school-navy">
      {/* Background Image with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
      >
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-school-navy via-school-navy/90 to-transparent"></div>

      {/* Floating Shapes/Glows */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-school-gold/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative container max-w-7xl mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12 mt-16">
        
        {/* Text Content */}
        <div className="md:w-3/5 text-left space-y-8 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-school-gold text-sm font-semibold tracking-wider hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              ADMISSIONS OPEN FOR 2026-27
           </div>
           
           <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
            Nurturing Minds, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-gold to-yellow-200 relative inline-block">
              Building Futures
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-school-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
           </h1>
           
           <p className="text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
            {SCHOOL_TAGLINE}. Experience a world-class virtual learning environment that empowers students to learn, lead, and excel in a digital age.
           </p>
           
           <div className="flex flex-wrap gap-4 pt-2">
            <Link 
              to="/contact" 
              className="bg-school-gold hover:bg-yellow-500 text-school-navy px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-1 flex items-center gap-2"
            >
              Apply Now <ArrowRight size={20} />
            </Link>
            <Link 
              to="/academics" 
              className="bg-white/5 border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 backdrop-blur-sm"
            >
              Explore Academics
            </Link>
           </div>
           
           <div className="flex items-center gap-8 pt-8 border-t border-white/10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                 <Globe size={18} className="text-school-gold" /> 
                 <span>Trusted by families in 15+ countries</span>
              </div>
              <div className="flex items-center gap-2">
                 <CheckCircle size={18} className="text-school-gold" /> 
                 <span>Personalized Learning Plans</span>
              </div>
           </div>
        </div>

        {/* Hero Image/Visual (Right side) */}
        <div className="md:w-2/5 hidden md:block relative animate-fade-in-up delay-300 h-[500px] flex items-center justify-center">
           {/* Animated Orbit Rings */}
           <div className="absolute w-[450px] h-[450px] border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
           <div className="absolute w-[380px] h-[380px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
           
           {/* Main Image Container with Unique Shape */}
           <div className="relative z-10 w-[380px] h-[480px] group perspective-1000">
              <div className="absolute inset-0 bg-school-gold rounded-[4rem_2rem_4rem_2rem] transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-white rounded-[4rem_2rem_4rem_2rem] overflow-hidden shadow-2xl border-4 border-white/10 transform transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Student Learning" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-10 -left-10 bg-white/95 backdrop-blur-sm p-4 pr-8 rounded-r-2xl rounded-bl-2xl shadow-xl flex items-center gap-4 transform transition-all duration-500 group-hover:translate-x-2 border-l-4 border-school-gold">
                 <div className="bg-school-navy p-3 rounded-xl text-school-gold">
                    <GraduationCap size={24} />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Success Rate</p>
                    <p className="text-2xl font-bold text-school-navy">100%</p>
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hover:text-white/80 transition-colors cursor-pointer" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
        <div className="flex flex-col items-center gap-2">
           <span className="text-[10px] uppercase tracking-widest">Scroll</span>
           <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center pt-2">
             <div className="w-1 h-1.5 bg-current rounded-full animate-scroll-dot"></div>
           </div>
        </div>
      </div>
      
      {/* Custom Styles for animation */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
        @keyframes scroll-dot {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(10px); opacity: 0; }
        }
        .animate-scroll-dot {
            animation: scroll-dot 1.5s infinite;
        }
        @keyframes scroll-vertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
            animation: scroll-vertical 40s linear infinite;
        }
        .animate-scroll-vertical:hover {
            animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    { label: "Years of Excellence", value: "25+", icon: Trophy, color: "text-amber-400", bg: "bg-amber-400/20", border: "border-amber-400/30" },
    { label: "Expert Faculty", value: "120+", icon: Users, color: "text-blue-400", bg: "bg-blue-400/20", border: "border-blue-400/30" },
    { label: "Active Students", value: "1500+", icon: GraduationCap, color: "text-emerald-400", bg: "bg-emerald-400/20", border: "border-emerald-400/30" },
    { label: "University Placements", value: "100%", icon: Star, color: "text-purple-400", bg: "bg-purple-400/20", border: "border-purple-400/30" },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-6 relative -mt-28 z-30">
      <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 py-12 rounded-[3rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] overflow-hidden group/stats">
        {/* Subtle Gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className={`relative flex flex-col items-center justify-center p-4 group/item transition-all duration-300 ${index !== stats.length - 1 ? 'lg:border-r border-white/5' : ''}`}>
              
              {/* Icon Circle */}
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} border ${stat.border} flex items-center justify-center mb-4 transform group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              
              {/* Text */}
              <div className="text-4xl lg:text-5xl font-serif font-bold text-white mb-2 tracking-tight group-hover/item:translate-y-[-2px] transition-transform">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] group-hover/item:text-white transition-colors">
                {stat.label}
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-b ${stat.bg.replace('/20', '/5')} to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-50/50 rounded-l-[5rem] -z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-school-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Visual Side with Organic Shape */}
          <div className="lg:w-1/2 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-school-gold/20 rounded-[3rem_10rem_3rem_10rem] animate-pulse"></div>
             
             <div className="relative z-10 rounded-[3rem_10rem_3rem_10rem] overflow-hidden shadow-2xl group border-4 border-white">
                <img 
                  src={digitalAgeImg} 
                  alt="Children Learning Online" 
                  className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-school-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute bottom-12 -right-2 lg:-right-6 bg-white p-6 rounded-[2rem_1rem_2rem_1rem] shadow-xl z-20 flex items-center gap-4 animate-fade-in-up border-b-4 border-school-gold">
                <div className="text-center">
                  <p className="font-serif text-4xl font-bold text-school-navy leading-none">20+</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Years of<br/>Excellence</p>
                </div>
                <div className="h-10 w-px bg-gray-200"></div>
                <Award className="text-school-gold w-8 h-8" />
             </div>
          </div>
          
          {/* Content Side */}
          <div className="lg:w-1/2">
             <div className="inline-block px-4 py-1 bg-school-navy/5 text-school-navy rounded-full text-sm font-bold tracking-wider mb-6">
                WELCOME TO KRR VIRTUAL ACADEMY
             </div>
             <h2 className="text-4xl lg:text-5xl font-serif font-bold text-school-navy mb-6 leading-tight">
                Redefining Education for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-gold to-amber-600 relative">
                    Digital Age
                    <svg className="absolute w-full h-2 -bottom-1 left-0 text-school-gold opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </span>
             </h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-6">
               KRR Virtual Academy offers highest quality online tuition. Our priority is to provide quality education for an affordable price, we believe that all students learn in different ways and that the assistance they need is individual to them. We provide a structured program to assist your child to reach their potential.
             </p>
             <p className="text-gray-600 text-lg leading-relaxed mb-10">
               All our tutors are highly qualified, experienced, vetted and referenced by us. We will select the right tutor for your child to ensure that a rapport develops where your child can progress.
             </p>
             
             {/* Feature Grid with Squircle Icons */}
             <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Holistic", icon: Users, desc: "Focus on academic & personal growth" },
                  { title: "Digital First", icon: Monitor, desc: "State-of-the-art virtual classrooms" },
                  { title: "Global", icon: Globe, desc: "Connecting minds worldwide" },
                  { title: "Certified", icon: ShieldCheck, desc: "Recognized international curriculum" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                     <div className="w-10 h-10 bg-school-gold/10 rounded-[10px] flex items-center justify-center mb-3 group-hover:bg-school-gold group-hover:text-school-navy transition-colors">
                        <item.icon className="text-school-gold w-5 h-5 group-hover:text-school-navy" />
                     </div>
                     <h4 className="font-bold text-school-navy text-lg">{item.title}</h4>
                     <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AcademicHighlights: React.FC = () => {
  const features = [
    { title: "GCSE", desc: "Comprehensive curriculum focusing on core subject mastery.", icon: BookOpen, targetId: "gcse-highlight", path: "/academics", color: "border-b-rose-500", iconBg: "bg-rose-50", iconColor: "text-rose-600" },
    { title: "A-Level", desc: "Pre-university education designed for top placements.", icon: GraduationCap, targetId: "alevel-highlight", path: "/academics", color: "border-b-indigo-500", iconBg: "bg-indigo-50", iconColor: "text-indigo-600" },
    { title: "Coding for Kids", desc: "Python, AI, and Robotics for young innovators.", icon: Monitor, targetId: "coding-highlight", path: "/coding", color: "border-b-emerald-500", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h4 className="text-school-gold font-bold tracking-widest uppercase text-sm mb-3">Academic Pathways</h4>
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-school-navy mb-6">Choose Your Journey</h2>
           <p className="text-gray-600 text-lg">
             Whether building a foundation or preparing for university, our tailored programs ensure every student finds their path to success.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {features.map((f, i) => (
            <button 
              key={i} 
              onClick={() => scrollToSection(f.targetId)}
              className={`bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full text-left relative overflow-hidden`}
            >
               {/* Color Bar */}
               <div className={`absolute top-0 left-0 w-full h-1.5 ${f.color.replace('border-b-', 'bg-')}`}></div>
               
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 rotate-12">
                 <f.icon size={150} />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`w-14 h-14 ${f.iconBg} rounded-2xl rotate-3 flex items-center justify-center group-hover:scale-110 group-hover:rotate-0 transition-all duration-300 shrink-0`}>
                  <f.icon className={f.iconColor} size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-school-navy whitespace-nowrap">{f.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-8 flex-grow relative z-10 leading-relaxed text-lg">{f.desc}</p>
              
              <div className="flex items-center gap-2 text-school-navy font-bold group-hover:gap-4 transition-all mt-auto relative z-10">
                <span className="border-b-2 border-transparent group-hover:border-school-gold transition-colors">View Curriculum</span>
                <ArrowRight size={18} className="text-school-gold" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Page & Form ---
export const ContactPageContent: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Handle CORS for Google Sheets if used as endpoint
      });
      setShowSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Submission error", error);
      // For no-cors, we can't detect failures easily, but show success for UX
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqData = [
    {
      q: "Am I signing up for a fixed term contract?",
      a: "There is no minimum commitment, no contract period, and no hidden fees. You pay only for the tutorials you book, and you can stop at any time (as long as you give us 48 hours notice)."
    },
    {
      q: "What is your cancellation policy?",
      a: "Our tutors require at least 48 hours’ notice if you wish to cancel your lesson. Any less than that, and we may ask you to pay for your tutorial."
    },
    {
      q: "What if my tutors do not meet my child’s needs?",
      a: "Please let us know and we will try to find you a different tutor, better suited to your needs."
    },
    {
      q: "How does KRR Academy work?",
      a: "KRR Academy is an online based learning platform helping children to meet their education goals from home. KRR Academy help your children to stay engaged with their learning and continue to make progress wherever they are!! We always make sure that we provide the service with high quality and beyond your expectations, we always find a way to take that extra mile to satisfy all our students. KRR Academy will work with you to create a completely individual programme that is mapped to the school curriculum, whilst inspiring a great set of attitudes towards learning."
    }
  ];

  return (
    <div className="bg-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-school-navy/5 -skew-y-3 origin-top-left -z-0"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-school-gold/10 rounded-full blur-3xl"></div>

      <section className="py-20 lg:py-32 container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 
            Desktop: Grid with 12 cols. Left col (Title+FAQ) and Right col (Form).
            Mobile: Flex Column. Order utility used to rearrange Title -> Form -> FAQ.
            'contents' display on the left wrapper allows its children to be direct flex children on mobile, enabling reordering.
        */}
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-20 items-start">
          
          {/* Left Column Wrapper (Title + FAQ) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-5 lg:gap-10">
              
              {/* Title - Order 1 on Mobile */}
              <div className="order-1 w-full">
                  <div className="mb-0">
                      <h3 className="font-bold tracking-widest text-xl uppercase mb-2 text-school-gold">
                        CONTACT US
                      </h3>
                      <h2 className="text-3xl md:text-5xl font-serif font-bold text-school-navy">
                        Get in Touch
                      </h2>
                      <div className="h-1 w-20 bg-school-gold mt-4"></div>
                  </div>
              </div>

              {/* FAQ - Order 3 on Mobile */}
              <div className="order-3 w-full pt-8 lg:pt-0 border-t border-gray-200 lg:border-none">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><HelpCircle size={24} /></div>
                    <h3 className="text-2xl font-serif font-bold text-school-navy">FAQ</h3>
                 </div>
                 <p className="text-sm text-gray-500 mb-4 italic pl-1">Would you like to know more about KRR Academy and how we operate? You can find answers to most frequently asked questions here:</p>
                 
                 <div className="space-y-4">
                 {faqData.map((faq, i) => (
                    <details key={i} className="group bg-white p-5 rounded-2xl border border-gray-200 open:shadow-md open:border-school-gold/30 transition-all duration-300">
                       <summary className="font-bold text-school-navy cursor-pointer flex justify-between items-center list-none select-none group-hover:text-school-gold transition-colors">
                          <span className="text-base pr-4 leading-snug">{faq.q}</span>
                          <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-open:bg-school-gold group-open:text-school-navy group-open:border-school-gold transition-all">
                             <ChevronDown className="w-5 h-5 text-gray-400 group-open:text-school-navy transform group-open:rotate-180 transition-transform duration-300" />
                          </div>
                       </summary>
                       <div className="text-gray-600 mt-4 text-sm leading-relaxed pl-2 border-l-2 border-school-gold/30 animate-fade-in-up">
                          {faq.a}
                       </div>
                    </details>
                 ))}
                 </div>
              </div>
          </div>

          {/* Right Column (Form) - Order 2 on Mobile */}
          <div className="order-2 w-full lg:col-span-7 lg:col-start-6">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden group">
               {/* Decorative top bar */}
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-school-gold via-yellow-400 to-school-gold"></div>
               
               <h3 className="text-2xl font-serif font-bold text-school-navy mb-2">To schedule a tutor or for any inquiries</h3>
               <p className="text-gray-500 mb-8">Please provide your contact details below.</p>
               
               <form 
                 className="space-y-6" 
                 onSubmit={handleSubmit}
                 method="POST"
                 action={CONTACT_FORM_ACTION_URL}
               >
                 <div className="space-y-2">
                   <label htmlFor="Name" className="text-sm font-bold text-school-navy ml-1">Name</label>
                   <input required type="text" name="Name" id="Name" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-school-gold focus:ring-4 focus:ring-school-gold/10 outline-none transition-all placeholder:text-slate-400" placeholder="Student Name" />
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label htmlFor="Age" className="text-sm font-bold text-school-navy ml-1">Student’s Age</label>
                     <input required type="text" name="Age" id="Age" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-school-gold focus:ring-4 focus:ring-school-gold/10 outline-none transition-all placeholder:text-slate-400" placeholder="Age" />
                   </div>
                    <div className="space-y-2">
                     <label htmlFor="Gender" className="text-sm font-bold text-school-navy ml-1">Gender</label>
                     <select required name="Gender" id="Gender" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-school-gold focus:ring-4 focus:ring-school-gold/10 outline-none transition-all text-slate-600 cursor-pointer">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                     </select>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label htmlFor="Subject" className="text-sm font-bold text-school-navy ml-1">Subject</label>
                      <input required type="text" name="Subject" id="Subject" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-school-gold focus:ring-4 focus:ring-school-gold/10 outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Maths" />
                   </div>
                   <div className="space-y-2">
                      <label htmlFor="Level" className="text-sm font-bold text-school-navy ml-1">Level</label>
                      <select required name="Level" id="Level" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-school-gold focus:ring-4 focus:ring-school-gold/10 outline-none transition-all text-slate-600 cursor-pointer">
                         <option value="">Select Level</option>
                         <option value="Year 8">Year 8</option>
                         <option value="Year 9">Year 9</option>
                         <option value="GCSE">GCSE</option>
                         <option value="A levels">A levels</option>
                         <option value="Coding">Coding</option>
                      </select>
                   </div>
                 </div>
                 
                 <div className="space-y-2">
                   <label htmlFor="Email" className="text-sm font-bold text-school-navy ml-1">Email</label>
                   <input required type="email" name="Email" id="Email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-school-gold focus:ring-4 focus:ring-school-gold/10 outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                 </div>
                 
                  <div className="space-y-2">
                   <label htmlFor="Phone" className="text-sm font-bold text-school-navy ml-1">Phone Number</label>
                   <input required type="tel" name="Phone" id="Phone" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-school-gold focus:ring-4 focus:ring-school-gold/10 outline-none transition-all placeholder:text-slate-400" placeholder="07453 697 795" />
                 </div>
                 
                 <div className="space-y-2">
                   <label htmlFor="Message" className="text-sm font-bold text-school-navy ml-1">Message</label>
                   <textarea name="Message" id="Message" rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-school-gold focus:ring-4 focus:ring-school-gold/10 outline-none transition-all placeholder:text-slate-400 resize-none" placeholder="How can we help you?"></textarea>
                 </div>
                 
                 <div className="space-y-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full bg-school-navy text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-school-navy/20 flex items-center justify-center gap-2 group/btn ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                            <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /> Send Message
                        </>
                      )}
                    </button>

                    <Link to="/terms" className="w-full bg-transparent border border-school-navy/20 text-school-navy font-bold py-3 rounded-xl hover:bg-school-navy/5 transition-all flex items-center justify-center gap-2 group/terms text-sm">
                        <FileText className="w-4 h-4" /> View Terms & Conditions
                    </Link>
                 </div>
               </form>
            </div>
          </div>
            
        </div>
        
      </section>

      {/* Success Popup (Portypop) */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-school-navy/60 backdrop-blur-sm transition-opacity" onClick={() => setShowSuccess(false)}></div>
          <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl max-w-md w-full text-center animate-fade-in-up border border-white/20 transform scale-100">
             <button 
               onClick={() => setShowSuccess(false)} 
               className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-500"
             >
               <XIcon size={20} />
             </button>
             
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp className="text-green-600 w-10 h-10 animate-bounce" />
             </div>
             
             <h3 className="text-3xl font-serif font-bold text-school-navy mb-3">Thank You!</h3>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               Your message has been sent successfully. <br/>
               <span className="text-sm text-gray-500">Our admissions team will contact you shortly.</span>
             </p>
             
             <button 
               onClick={() => setShowSuccess(false)}
               className="bg-school-gold hover:bg-yellow-500 text-school-navy font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full"
             >
               Close
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const TermsPageContent: React.FC = () => {
  const policies = [
    {
      title: "Payment terms",
      icon: CreditCard,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      items: [
        "Lessons are payable in advance to KRR Academy, based on the total number of classes per week/month and price agreed by KRR Academy and the Parent.",
        "The Parent is responsible for checking invoices to ensure that lessons have been correctly logged.",
        "In any event of non- payment, we reserve the right to terminate your contract.",
        "The Parent must not make direct payments to the tutor at any time, KRR Academy are not liable for any payments made direct to the tutor."
      ]
    },
    {
      title: "Child Visual image and publicity",
      icon: Camera,
      color: "text-rose-600",
      bg: "bg-rose-50",
      items: [
        "KRR Academy may use photographs, images, or videos of the students in its promotional materials such as websites and promotional videos. This might include (but is not limited to), the right to use them in our printed and online publicity and social media.",
        "I do give consent to the use of photographs and/ or images of my child for these purposes.",
        "If you do not agree it is every child / parents’ responsibility to notify KRR Academy in writing."
      ]
    },
    {
      title: "Absence / class cancellation policy",
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
      items: [
        "The Parent and the tutor are responsible for notifying one another in advance of any necessary changes to the tuition timetable. Wherever possible, and alternative date and time will be arranged.",
        "KRR Academy operates a 24 - hour cancelation policy and reserves the right to charge the parent in full if a lesson is cancelled at short notice, or if a lesson is missed."
      ]
    },
    {
      title: "Withdrawal Policy",
      icon: FileX,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      items: [
        "If you wish for your child to no longer attend KRR Academy, you must provide a 48-hour written notice to us in order to obtain your remaining class fees."
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden">
       {/* Background Decorations */}
       <div className="absolute top-0 left-0 w-full h-[600px] bg-school-navy/5 -skew-y-3 origin-top-left -z-0"></div>
       <div className="absolute top-20 right-0 w-64 h-64 bg-school-gold/10 rounded-full blur-3xl"></div>

       <div className="container max-w-7xl mx-auto px-6 py-20 relative z-10">
           {/* Header for the section */}
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-navy">Terms & Conditions</h2>
              <div className="w-24 h-1 bg-school-gold mx-auto mt-4 mb-6 rounded-full"></div>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Transparency and trust are key. Please review our policies below.
                <br/><span className="text-sm">KRR Academy reserves the right to alter these terms and conditions at any time.</span>
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {policies.map((policy, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                       <div className={`w-12 h-12 rounded-xl ${policy.bg} flex items-center justify-center ${policy.color} transition-transform group-hover:scale-110`}>
                          <policy.icon size={24} />
                       </div>
                       <h4 className="text-xl font-bold text-school-navy">{policy.title}</h4>
                    </div>
                    <ul className="space-y-3">
                       {policy.items.map((item, i) => (
                          <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                             <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${policy.bg.replace('bg-', 'bg-').replace('50', '400')}`}></span>
                             {item}
                          </li>
                       ))}
                    </ul>
                 </div>
              ))}
           </div>
       </div>
    </div>
  );
};

export const ModernShowcase: React.FC = () => {
  const SCROLL_TESTIMONIALS = [
    { name: "Lana", role: "Parent of year 8 student", content: "KRR Virtual Academy has been a game changer for my daughter in Year 8. The tutors explain everything so clearly, and the small online classes mean she gets the attention she needs. Her confidence in maths and science has grown massively. We’re really grateful for the consistent support and quality teaching." },
    { name: "Tom", role: "Parent of year 9 student", content: "My son has always struggled to stay focused, but the Year 9 sessions at KRR Virtual Academy have completely changed his attitude towards learning. The lessons are interactive and engaging, and his teachers truly care about his progress. His grades have improved, and he’s finally enjoying school again." },
    { name: "Senthuran", role: "Parent of GCSE student", content: "As GCSEs approached, we were getting worried about how underprepared our daughter felt. KRR Virtual Academy stepped in at the perfect time. The tutors are exceptional, the revision plans are well-structured, and the practice questions have made a huge difference. She now feels confident and ready for her exams. I highly recommend them to any parent." },
    { name: "Rebecca", role: "Parent of A Level student", content: "The A-Level support at KRR Virtual Academy is outstanding. The tutors have deep subject knowledge and explain difficult concepts in a way my son actually understands. His predicted grades have gone up, and he feels supported every step of the way. It’s been the best educational investment we’ve made." },
    { name: "Ramya", role: "Parent of Coding student", content: "My younger daughter absolutely loves the Coding for Kids course at KRR Virtual Academy. The sessions are fun, creative, and perfectly paced for children. She’s already building simple games and proudly showing them to us every week. It’s wonderful to see her developing real skills while having so much fun." }
  ];

  return (
    <div className="space-y-0 relative">
      
      {/* GCSE Section */}
      <section id="gcse-highlight" className="py-24 lg:py-32 w-full scroll-mt-48 relative overflow-hidden group">
        {/* Decorative elements - Full Width with Reduced Skew for Alignment */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-rose-50/40 -skew-x-6 -z-20 hidden lg:block origin-bottom-right"></div>
        
        {/* Content Container */}
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="absolute top-20 left-0 lg:left-0 text-[180px] lg:text-[240px] font-serif font-bold text-rose-100 -z-10 select-none leading-none opacity-60">01</div>
          
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-8 lg:pl-8 relative">
               {/* Decorative blob */}
               <div className="absolute -top-10 -right-10 w-24 h-24 bg-rose-400/20 rounded-full blur-2xl animate-pulse"></div>
  
              <div className="relative inline-block">
                 <h2 className="text-5xl lg:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-school-navy to-rose-900 uppercase tracking-wide leading-none drop-shadow-sm">
                   GCSE
                 </h2>
                 <div className="h-3 w-3/4 bg-rose-300 absolute bottom-2 left-0 -z-10 rounded-full opacity-40"></div>
              </div>
              
              <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-school-navy">Achieve Top Grades with Expert Online GCSE Tutors</h3>
                 <p className="text-gray-600 text-lg leading-relaxed">
                   Prepare confidently for your GCSE exams with structured lessons, personalised feedback, and experienced subject specialists. Our targeted approach helps students strengthen core skills, boost exam technique, and stay motivated throughout the academic year.
                 </p>
                 
                 {/* Feature Pills */}
                 <div className="flex flex-wrap gap-3 pt-2">
                    {["Live Classes", "Mock Exams", "1-on-1 Feedback", "Exam Board Specific"].map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 font-bold text-xs uppercase tracking-wide border border-rose-100">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>
              
              <div className="pt-4">
                 <Link 
                    to="/academics"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-school-navy text-white rounded-full font-bold hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-900/30 transform hover:-translate-y-1"
                 >
                   Explore our GCSE Subjects 
                   <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                 </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative perspective-1000">
               <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-rose-50 rounded-3xl lg:rounded-tr-[100px] lg:rounded-bl-[100px] transform -rotate-3 scale-95 z-0 transition-transform duration-500 group-hover:rotate-0"></div>
               <img 
                 src={gcseImg} 
                 alt="GCSE Classroom" 
                 className="relative z-10 w-full rounded-3xl lg:rounded-tr-[100px] lg:rounded-bl-[100px] shadow-2xl shadow-rose-900/10 object-cover h-[300px] md:h-[500px] lg:h-[600px] transform transition-transform duration-700 group-hover:scale-[1.02] border-4 border-white"
               />
            </div>
          </div>
        </div>
      </section>

      {/* A-Level Section */}
      <section id="alevel-highlight" className="py-24 lg:py-32 w-full scroll-mt-48 relative overflow-hidden group bg-slate-50/50">
        <div className="absolute top-0 left-0 w-[55%] h-full bg-indigo-50/40 skew-x-6 -z-20 hidden lg:block origin-bottom-left"></div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="absolute top-20 right-0 lg:right-0 text-[180px] lg:text-[240px] font-serif font-bold text-indigo-100 -z-10 select-none leading-none opacity-60">02</div>
  
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-8 relative">
               <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
  
              <div className="relative inline-block">
                 <h2 className="text-5xl lg:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-school-navy to-indigo-900 leading-none drop-shadow-sm">
                   A-LEVEL
                 </h2>
                 <div className="h-3 w-3/4 bg-indigo-300 absolute bottom-2 left-0 -z-10 rounded-full opacity-40"></div>
              </div>
  
              <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-indigo-500 relative overflow-hidden hover:shadow-2xl transition-shadow">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 z-0"></div>
                 <div className="relative z-10">
                    <h4 className="text-school-navy font-bold text-xl mb-3 flex items-center gap-2">
                       <GraduationCap className="text-indigo-500" />
                       Advanced Learning Designed for University Success
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Our A-Level tutors provide in-depth subject support, exam-focused strategies, and one-to-one guidance to help students reach their full potential. Whether aiming for top grades or preparing for competitive university applications, we offer the support needed to excel.
                    </p>
                 </div>
              </div>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                 {["University Prep", "Subject Mastery", "Exam Strategy", "Small Groups"].map((tag, i) => (
                   <span key={i} className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-wide border border-indigo-100">
                     {tag}
                   </span>
                 ))}
              </div>
              
              <div className="pt-2">
                 <Link 
                    to="/academics"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-school-navy text-white rounded-full font-bold hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-900/30 transform hover:-translate-y-1"
                 >
                   Explore our A-Level Subjects 
                   <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                 </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-gradient-to-bl from-indigo-200 to-indigo-50 rounded-3xl lg:rounded-t-[200px] transform rotate-3 scale-95 z-0 transition-transform duration-500 group-hover:rotate-0"></div>
               <img 
                 src={alevelImg} 
                 alt="A-Level Student at Library" 
                 className="relative z-10 w-full rounded-3xl lg:rounded-t-[200px] shadow-2xl shadow-indigo-900/10 object-cover h-[300px] md:h-[500px] lg:h-[600px] transform transition-transform duration-700 group-hover:scale-[1.02] border-4 border-white"
               />
               {/* Floating badge */}
               <div className="absolute top-10 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block animate-fade-in-up delay-200 ring-1 ring-gray-100">
                  <div className="flex items-center gap-4">
                     <div className="bg-indigo-100 p-3 rounded-full">
                        <Star className="text-indigo-600 w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Target</p>
                        <p className="text-lg font-bold text-school-navy">Top Universities</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coding Section */}
      <section id="coding-highlight" className="py-24 lg:py-32 w-full scroll-mt-48 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-emerald-50/40 -skew-x-6 -z-20 hidden lg:block origin-bottom-right"></div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="absolute top-20 left-0 lg:left-0 text-[180px] lg:text-[240px] font-serif font-bold text-emerald-100 -z-10 select-none leading-none opacity-60">03</div>
  
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-8 lg:pl-8 relative">
               <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
  
              <div className="relative inline-block">
                 <h2 className="text-5xl lg:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-school-navy to-emerald-900 uppercase tracking-wide leading-none drop-shadow-sm">
                   CODING <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 block text-4xl lg:text-5xl mt-2">FOR KIDS</span>
                 </h2>
              </div>
              
              <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-school-navy">Fun, Creative, and Future-Ready Coding Classes</h3>
                 <p className="text-gray-600 text-lg leading-relaxed">
                   Introduce your child to the world of programming with engaging, project-based lessons. Children learn to build games, apps, and animations while developing problem-solving skills and confidence in technology. No experience needed — just curiosity!
                 </p>
                 
                 {/* Feature Pills */}
                 <div className="flex flex-wrap gap-3 pt-2">
                    {["Python", "Web Development", "Game Design", "AI & Logic"].map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wide border border-emerald-100">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>
              
              <div className="pt-4">
                 <Link to="/coding" className="group inline-flex items-center gap-3 px-8 py-4 bg-school-navy text-white rounded-full font-bold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-900/30 transform hover:-translate-y-1">
                   Learn More 
                   <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                 </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-50 rounded-3xl transform -rotate-2 scale-95 z-0 transition-transform duration-500 group-hover:rotate-0"></div>
               <div className="absolute -inset-4 border-2 border-emerald-400/20 rounded-3xl transform rotate-2 z-0"></div>
               
               <img 
                 src={codingImg} 
                 alt="Kid Learning Coding" 
                 className="relative z-10 w-full rounded-3xl shadow-2xl shadow-emerald-900/10 object-cover h-[300px] md:h-[500px] lg:h-[600px] transform transition-transform duration-700 group-hover:scale-[1.02] border-4 border-white"
               />
               
               {/* Floating Elements for coding */}
               <div className="absolute -bottom-6 right-10 bg-slate-800 text-white p-4 rounded-xl shadow-xl hidden md:block animate-bounce duration-[3000ms] border border-slate-700 z-50">
                  <div className="flex items-center gap-3">
                     <div className="bg-emerald-500/20 p-2 rounded-lg">
                        <Code className="text-emerald-400 w-5 h-5" />
                     </div>
                     <span className="font-mono text-sm">print("Hello World")</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="py-24 container max-w-7xl mx-auto px-6">
        <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.1),transparent)]"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-school-gold/5 rounded-full blur-[100px]"></div>
           
           <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="md:w-1/2 p-8 md:p-16 relative">
                 {/* Decorative dots grid behind image */}
                 <div className="absolute top-10 left-10 w-24 h-24 opacity-20 bg-[radial-gradient(circle,theme(colors.slate.500)_1px,transparent_1px)] bg-[size:8px_8px] animate-pulse"></div>
                 
                 <div className="relative group">
                    <div className="absolute inset-0 bg-school-gold rounded-[2.5rem] transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <img 
                       src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                       alt="Community" 
                       className="relative z-10 rounded-[2.5rem] shadow-2xl w-full max-w-xs md:max-w-md mx-auto transform transition-transform duration-500 group-hover:scale-[1.02] border-4 border-white/10"
                    />
                 </div>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-16 md:pl-0 text-left">
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-gold to-yellow-200">KRR Virtual Academy</span>
                 </h2>
                 <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-2 border-school-gold/30 pl-6">
                    Enrich your academic journey to grow your future career.
                 </p>
                 <Link to="/contact" className="inline-flex items-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-school-navy transition-all shadow-lg hover:shadow-white/20 group">
                    Apply Now
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
         {/* World map background */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 500">
               <path d="M50,250 Q250,50 500,250 T950,250" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-900" />
            </svg>
         </div>

         <div className="container max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
               <div className="lg:w-2/5 sticky top-32">
                  <span className="text-school-gold font-bold tracking-widest text-sm uppercase">Testimonials</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-school-navy mt-4 mb-6">What Parents Say</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                     Don't just take our word for it. Hear from the families whose lives have been transformed by our virtual academy.
                  </p>
                  <div className="flex gap-2">
                     {[1,2,3,4,5].map(i => <Star key={i} className="text-school-gold fill-current w-6 h-6" />)}
                  </div>
                  <p className="text-sm font-bold text-school-navy mt-2">Rated 5.0 by 500+ Parents</p>
               </div>
               
               <div className="lg:w-3/5 h-[600px] overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
                  
                  <div className="animate-scroll-vertical space-y-6">
                     {[...SCROLL_TESTIMONIALS, ...SCROLL_TESTIMONIALS].map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                           <Quote className="text-school-gold/20 w-10 h-10 mb-4" />
                           <p className="text-slate-700 text-lg italic mb-6 leading-relaxed">"{t.content}"</p>
                           <div className="flex items-center gap-4">
                              <div>
                                 <h5 className="font-bold text-school-navy flex items-center gap-2">
                                    {t.name}
                                    <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">Verified</span>
                                 </h5>
                                 <p className="text-sm text-gray-500">{t.role}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export const ModernCodingUI: React.FC = () => {
  const codingModules = [
    { title: "Python Programming", level: "Beginner to Advanced", desc: "Master the language of AI and Data Science through interactive projects.", icon: Terminal },
    { title: "Web Development", level: "Intermediate", desc: "Build responsive websites using HTML, CSS, and JavaScript.", icon: Globe },
    { title: "Game Development", level: "All Levels", desc: "Create your own games and learn logic with Scratch and Unity.", icon: Gamepad },
    { title: "AI & Robotics", level: "Advanced", desc: "Explore machine learning concepts and program virtual robots.", icon: BrainCircuit }
  ];

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 container max-w-7xl mx-auto">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse"></div>

         <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-1/2 space-y-6">
               <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-sm mb-4">
                  &lt;Hello_World /&gt;
               </div>
               <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                  Unlock the Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Code</span>
               </h1>
               <p className="text-slate-400 text-xl leading-relaxed max-w-lg">
                  Empower your child with the skills of tomorrow. From Python to AI, we turn consumers of technology into creators.
               </p>
               <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 flex items-center gap-2">
                     Start Coding <ArrowRight size={20} />
                  </Link>
                  <a href="#modules" className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all">
                     View Curriculum
                  </a>
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 bg-slate-800 rounded-xl p-2 shadow-2xl border border-slate-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-slate-950 rounded-lg p-6 font-mono text-sm md:text-base overflow-hidden">
                     <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                     <div className="space-y-2 text-slate-300">
                        <p><span className="text-purple-400">def</span> <span className="text-blue-400">future_creator</span>(student):</p>
                        <p className="pl-4">skills = [<span className="text-green-400">"Creativity"</span>, <span className="text-green-400">"Logic"</span>, <span className="text-green-400">"Problem Solving"</span>]</p>
                        <p className="pl-4"><span className="text-purple-400">while</span> student.is_learning:</p>
                        <p className="pl-8">student.confidence += <span className="text-orange-400">100</span></p>
                        <p className="pl-8">student.build_amazing_things()</p>
                        <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">"Success"</span></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 bg-slate-900 relative">
         <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold mb-4">Coding Pathways</h2>
               <p className="text-slate-400 max-w-2xl mx-auto">Structured learning tracks designed for every age and skill level.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {codingModules.map((mod, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group">
                     <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                        <mod.icon className="text-emerald-400 w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{mod.title}</h3>
                     <span className="text-xs font-bold bg-slate-700 text-slate-300 px-2 py-1 rounded uppercase tracking-wider">{mod.level}</span>
                     <p className="text-slate-400 mt-4 leading-relaxed">{mod.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Stats / CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
         <div className="container max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to compile your future?</h2>
            <Link to="/contact" className="inline-block bg-white text-slate-900 font-bold px-10 py-5 rounded-full hover:bg-emerald-50 transition-colors text-lg">
               Join the Coding Club
            </Link>
         </div>
      </section>
    </div>
  );
};

export const SciencePageContent: React.FC = () => {
    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-full mb-6">
                    <FlaskConical className="w-8 h-8 text-rose-600" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-school-navy mb-4">Explore the Universe of Science</h2>
                <p className="text-gray-600 text-lg">
                    From the microscopic world of biology to the vast expanse of physics, our science curriculum ignites curiosity and fosters critical thinking.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Biology", icon: Dna, desc: "Understanding life processes, genetics, and ecology.", color: "rose" },
                    { title: "Chemistry", icon: FlaskConical, desc: "Exploring matter, reactions, and the periodic table.", color: "purple" },
                    { title: "Physics", icon: Atom, desc: "Mastering forces, energy, and the laws of the universe.", color: "blue" }
                ].map((subject, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div className={`w-12 h-12 rounded-xl bg-${subject.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <subject.icon className={`text-${subject.color}-600 w-6 h-6`} />
                        </div>
                        <h3 className="text-2xl font-bold text-school-navy mb-3">{subject.title}</h3>
                        <p className="text-gray-600">{subject.desc}</p>
                        <ul className="mt-6 space-y-2">
                            {["KS3 Foundation", "GCSE Core & Triple", "A-Level Specialization"].map((level, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                    <CheckCircle className={`w-4 h-4 text-${subject.color}-500`} /> {level}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
            <div className="bg-school-navy text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
                <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Virtual Labs & Experiments</h3>
                    <p className="text-gray-300">We utilize cutting-edge simulation software to bring practical science experiments to your screen, ensuring safety while maximizing learning.</p>
                </div>
                <div className="flex-none">
                     <Link to="/contact" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-bold transition-colors">Book a Science Trial</Link>
                </div>
            </div>
        </div>
    );
};

export const MathsPageContent: React.FC = () => {
    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
                 <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-6">
                    <Calculator className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-school-navy mb-4">Master the Language of Numbers</h2>
                <p className="text-gray-600 text-lg">
                    Mathematics is the foundation of logic. We make complex concepts accessible, building confidence from arithmetic to advanced calculus.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div className="space-y-8">
                     {[
                         { title: "Key Stage 3", desc: "Building strong foundations in algebra, geometry, and number theory.", icon: Sigma },
                         { title: "GCSE Maths", desc: "Comprehensive preparation for Foundation and Higher tier exams with focus on problem-solving.", icon: TrendingUp },
                         { title: "A-Level Maths & Further Maths", desc: "Rigorous training in pure maths, mechanics, and statistics for university preparation.", icon: BrainCircuit }
                     ].map((item, idx) => (
                         <div key={idx} className="flex gap-6">
                             <div className="flex-none w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center">
                                 <item.icon className="w-6 h-6 text-indigo-600" />
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-school-navy mb-2">{item.title}</h3>
                                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                             </div>
                         </div>
                     ))}
                 </div>
                 
                 <div className="bg-gray-100 rounded-3xl p-8 relative">
                     <div className="absolute -top-4 -right-4 bg-school-gold text-school-navy font-bold px-6 py-2 rounded-lg shadow-lg rotate-3">
                         100% Pass Rate
                     </div>
                     <h3 className="text-xl font-bold text-school-navy mb-6">Interactive Problem Solving</h3>
                     <div className="space-y-4">
                         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                             <p className="font-mono text-sm text-indigo-600 mb-2">Problem:</p>
                             <p className="text-gray-800 font-medium">Solve for x: 2x² + 5x - 3 = 0</p>
                         </div>
                         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                             <p className="font-mono text-sm text-green-600 mb-2">Solution:</p>
                             <p className="text-gray-800 font-medium">Factorising: (2x - 1)(x + 3) = 0</p>
                             <p className="text-gray-800 font-medium mt-1">x = 0.5, x = -3</p>
                         </div>
                     </div>
                     <div className="mt-8 text-center">
                         <Link to="/contact" className="inline-block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors">
                             Get Maths Support
                         </Link>
                     </div>
                 </div>
            </div>
        </div>
    );
};