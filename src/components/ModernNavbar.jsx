import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ModernNavbar = ({ onOpenCV }) => {
  const [activeSection, setActiveSection] = useState('hero');

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
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center p-1.5 bg-white/10 backdrop-blur-md rounded-full shadow-lg mix-blend-difference"
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
      
      {/* CV Modal Button */}
      <div className="border-l border-gray-700 ml-2 pl-2">
        <button 
          onClick={onOpenCV}
          className="px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white bg-white/20 hover:bg-white hover:text-black rounded-full transition-all duration-500"
        >
          CV
        </button>
      </div>
    </motion.nav>
  );
};

export default ModernNavbar;
