import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_NAME, SCHOOL_ADDRESS, SCHOOL_EMAIL, SCHOOL_PHONE } from '../constants';

// --- Logo Asset ---
// Use absolute path for logo to ensure it loads correctly from root on custom domains.
// Added ?v=1 to bust cache if image was recently updated/fixed.
const SCHOOL_LOGO = '/logo.png?v=1';


export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/KRRVirtualAcademy" },
    { icon: Instagram, url: "https://www.instagram.com/krrvirtualacademy" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle resizing: close menu if switching to desktop view to prevent lock
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-school-navy/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5 bg-gradient-to-b from-black/50 to-transparent'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left: Logo Image */}
          <div className="flex-1">
            <Link to="/" className="flex items-center w-fit">
              <img 
                src={SCHOOL_LOGO} 
                alt="KRR Academy" 
                className="h-16 md:h-24 w-auto object-contain transition-all duration-300"
              />
            </Link>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-medium tracking-wide transition-all relative py-2 whitespace-nowrap ${
                    isActive
                      ? 'text-school-gold after:w-full'
                      : scrolled
                      ? 'text-gray-300 hover:text-white after:w-0 hover:after:w-full'
                      : 'text-gray-200 hover:text-white after:w-0 hover:after:w-full'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-school-gold after:transition-all after:duration-300`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right: Admission Button & Mobile Menu Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Link
              to="/contact"
              className={`hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg ${
                scrolled 
                  ? 'bg-school-gold text-school-navy hover:bg-yellow-500' 
                  : 'bg-school-gold text-school-navy hover:bg-white hover:text-school-navy'
              }`}
            >
              Admission
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white focus:outline-none p-2 relative z-50 hover:text-school-gold transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved outside nav to prevent backdrop-filter clipping */}
      <div
        className={`fixed inset-0 z-[60] transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Background with Blur & Gradient */}
        <div className="absolute inset-0 bg-school-navy/98 backdrop-blur-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-school-navy"></div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-school-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative h-full flex flex-col p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <img 
              src={SCHOOL_LOGO} 
              alt="KRR Academy" 
              className="h-16 w-auto object-contain opacity-90"
            />
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:rotate-90 transition-all duration-300 border border-white/5"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 flex-1 justify-center px-2">
            {NAV_ITEMS.map((item, idx) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${150 + (idx * 75)}ms` : '0ms' }}
                className={({ isActive }) =>
                  `group flex items-center transition-all duration-700 transform ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                  } ${
                    isActive ? 'text-school-gold' : 'text-white/50 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`text-xs font-sans font-bold tracking-widest mr-5 mt-1 py-1 px-2.5 rounded-lg border transition-all duration-300 ${
                        isActive 
                          ? 'text-school-navy bg-school-gold border-school-gold shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                          : 'text-white/30 border-white/5 group-hover:border-white/20 group-hover:text-white/60'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="font-serif text-4xl md:text-5xl font-bold tracking-tight relative">
                        {item.label}
                        <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-school-gold to-yellow-500 transition-all duration-300 rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Action Button & Footer Info */}
          <div 
            style={{ transitionDelay: isOpen ? '500ms' : '0ms' }}
            className={`mt-10 transition-all duration-700 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-gradient-to-r from-school-gold to-yellow-500 text-school-navy py-4 px-6 rounded-2xl text-lg font-bold text-center flex items-center justify-center gap-3 shadow-lg shadow-school-gold/10 hover:shadow-school-gold/20 transition-all active:scale-95 border border-yellow-400/20 mb-8"
            >
              Apply for Admission <ArrowRight size={20} className="stroke-[3]" />
            </Link>

            {/* Footer Details */}
            <div className="border-t border-white/5 pt-8 flex flex-col gap-6">
               <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 text-slate-400 text-sm group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-school-gold group-hover:text-school-navy transition-colors">
                       <Phone size={18} />
                    </div>
                    <a href={`tel:${SCHOOL_PHONE}`} className="hover:text-white transition-colors tracking-wide text-base">{SCHOOL_PHONE}</a>
                 </div>
                 <div className="flex items-center gap-4 text-slate-400 text-sm group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-school-gold group-hover:text-school-navy transition-colors">
                       <Mail size={18} />
                    </div>
                    <a href={`mailto:${SCHOOL_EMAIL}`} className="truncate hover:text-white transition-colors tracking-wide text-base">{SCHOOL_EMAIL}</a>
                 </div>
               </div>

               {/* Social Icons */}
               <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                     <a 
                       key={idx}
                       href={social.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-school-gold hover:text-school-navy hover:border-school-gold transition-all duration-300 hover:-translate-y-1"
                     >
                       <social.icon size={22} />
                     </a>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/KRRVirtualAcademy" },
    { icon: Instagram, url: "https://www.instagram.com/krrvirtualacademy" },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden border-t-4 border-school-gold">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-school-gold/5 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-20">
          {/* Brand */}
          <div className="lg:w-1/3 space-y-8">
             <div className="flex items-center gap-3">
              <img 
                src={SCHOOL_LOGO} 
                alt="KRR Academy" 
                className="h-32 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering the leaders of tomorrow through holistic education and a value-based curriculum.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-school-gold hover:text-school-navy hover:border-school-gold hover:-translate-y-1 hover:shadow-lg hover:shadow-school-gold/20 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:w-auto">
            <h4 className="text-lg font-serif font-bold mb-8 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-school-gold rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', path: '/' },
                { label: 'Academics', path: '/academics' },
                { label: 'Coding Program', path: '/coding' },
                { label: 'Admissions', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-3 text-slate-400 hover:text-school-gold transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-school-gold transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:w-auto">
            <h4 className="text-lg font-serif font-bold mb-8 text-white relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-school-gold rounded-full"></span>
            </h4>
            <ul className="space-y-6 text-sm text-slate-400">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 group-hover:bg-school-gold group-hover:text-school-navy transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="leading-relaxed pt-2">{SCHOOL_ADDRESS}</span>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 group-hover:bg-school-gold group-hover:text-school-navy transition-colors">
                  <Phone size={18} />
                </div>
                <a href={`tel:${SCHOOL_PHONE}`} className="hover:text-white transition-colors">{SCHOOL_PHONE}</a>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 group-hover:bg-school-gold group-hover:text-school-navy transition-colors">
                  <Mail size={18} />
                </div>
                <a href={`mailto:${SCHOOL_EMAIL}`} className="hover:text-white transition-colors">{SCHOOL_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex justify-center items-center">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} KRR Virtual Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};