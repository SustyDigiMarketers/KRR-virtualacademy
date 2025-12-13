import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { 
  HeroSection, StatsSection, AboutPreview, AcademicHighlights, 
  ContactPageContent, ModernShowcase,
  ModernCodingUI, SciencePageContent, MathsPageContent, TermsPageContent
} from './components/PageSections';
import { SCHOOL_NAME, SCHOOL_TAGLINE } from './constants';

// --- Assets Imports ---
// pointing to local files in the public/root directory.
// Ensure a file named exactly "contact-hero.jpg" exists in your public folder.
// Using absolute path for GitHub Pages compatibility with custom domain
// Added ?v=1 to bust cache if image was recently updated/fixed.
const contactHeroImg = "/contact-hero.jpg?v=1";

// --- Page Wrappers ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Dynamic Title Update for Browser Tab
    let pageTitle = SCHOOL_NAME;
    switch(pathname) {
      case '/academics': pageTitle = `Academics | ${SCHOOL_NAME}`; break;
      case '/coding': pageTitle = `Coding Program | ${SCHOOL_NAME}`; break;
      case '/contact': pageTitle = `Contact Us | ${SCHOOL_NAME}`; break;
      case '/terms': pageTitle = `Terms & Conditions | ${SCHOOL_NAME}`; break;
      case '/': 
      default:
        pageTitle = `${SCHOOL_NAME} - ${SCHOOL_TAGLINE}`; break;
    }
    document.title = pageTitle;
    
  }, [pathname]);
  return null;
};

const PageHeader: React.FC<{ title: string; bgImage?: string }> = ({ title, bgImage }) => (
  <div className="relative h-64 md:h-80 flex items-center justify-center bg-school-navy">
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-40" 
      style={{ backgroundImage: `url(${bgImage || 'https://picsum.photos/id/180/1920/600'})` }}
    ></div>
    <div className="relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{title}</h1>
      <div className="w-20 h-1 bg-school-gold mx-auto"></div>
    </div>
  </div>
);

// --- Pages ---

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <StatsSection />
    <AboutPreview />
    <AcademicHighlights />
    <ModernShowcase />
  </>
);

const AcademicsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('science');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky nav (Navbar ~120px desktop / ~88px mobile + Subnav ~70px)
      // We'll use a safer offset of 190px for desktop, slightly less for mobile implicitly via smooth scroll behavior
      const y = element.getBoundingClientRect().top + window.pageYOffset - 190;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <PageHeader title="Academic" bgImage="https://picsum.photos/id/20/1920/600" />
      
      {/* Sticky Sub-Navigation 
          Mobile navbar is ~88px scrolled, Desktop is ~120px scrolled.
          Added buffer (92px) for mobile to ensure buttons are not covered by navbar shadow/border.
      */}
      <div className="sticky top-[92px] md:top-[120px] z-30 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-4 transition-all duration-300">
         <div className="container mx-auto px-6 flex justify-center gap-8">
            {['science', 'maths'].map((section) => (
               <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm md:text-base font-bold uppercase tracking-wider transition-colors px-4 py-2 rounded-full cursor-pointer select-none ${
                     activeSection === section 
                     ? 'bg-school-navy text-white shadow-lg' 
                     : 'text-gray-500 hover:text-school-navy hover:bg-gray-100'
                  }`}
               >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
               </button>
            ))}
         </div>
      </div>

      <div className="py-16 bg-gray-50">
         <div id="science" className="scroll-mt-48">
            <SciencePageContent />
         </div>
         <div className="container mx-auto px-6"><div className="h-px bg-gray-200 my-12"></div></div>
         <div id="maths" className="scroll-mt-48">
            <MathsPageContent />
         </div>
      </div>
    </>
  );
};

const CodingPage: React.FC = () => (
  <>
    <ModernCodingUI />
  </>
);

const ContactPage: React.FC = () => (
  <>
    <PageHeader title="Contact Us" bgImage={contactHeroImg} />
    <ContactPageContent />
  </>
);

const TermsPage: React.FC = () => (
  <>
    <PageHeader title="Terms & Conditions" bgImage="https://picsum.photos/id/450/1920/600" />
    <TermsPageContent />
  </>
);


function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-slate-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/coding" element={<CodingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* Fallback for other routes mapping to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        {/* Z-index lowered to 30 to stay below Navbar (40) and Mobile Menu Overlay */}
        <a
          href="https://wa.me/447453697795"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-30 p-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </div>
    </HashRouter>
  );
}

export default App;