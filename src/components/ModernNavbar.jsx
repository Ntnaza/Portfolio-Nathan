import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernNavbar = ({ onOpenCV }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', id: 'hero' },
    { label: 'Music', id: 'expertise' },
    { label: 'Karya', id: 'works' },
    { label: 'Karir', id: 'experience' },
    { label: 'Profil', id: 'about' },
    { label: 'Kontak', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'expertise', 'works', 'experience', 'about', 'contact'];
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav 
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-center p-1.5 bg-white/10 backdrop-blur-md rounded-full shadow-lg mix-blend-difference"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 z-10 ${
                  isActive ? 'text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
        
        <div className="border-l border-gray-700 ml-2 pl-2">
          <button 
            onClick={onOpenCV}
            className="px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white bg-white/20 hover:bg-white hover:text-black rounded-full transition-all duration-500"
          >
            CV
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navbar Toggle */}
      <div className="fixed top-6 right-6 z-[60] md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-xl border border-white/10"
        >
          <div className="w-6 flex flex-col gap-1.5 items-end">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 6, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="h-0.5 bg-white rounded-full block"
            ></motion.span>
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 w-2/3 bg-white rounded-full block"
            ></motion.span>
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -6, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
              className="h-0.5 bg-white rounded-full block"
            ></motion.span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-black md:hidden flex flex-col p-12 justify-center"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  className={`text-4xl font-serif tracking-tighter ${
                    activeSection === link.id ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-8 border-t border-gray-900"
              >
                <button 
                  onClick={() => { setIsOpen(false); onOpenCV(); }}
                  className="w-full py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs"
                >
                  Download CV
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernNavbar;
