import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const timeline = [
    {
      company: 'Proyek Mandiri',
      year: '2023 — SEKARANG',
      role: 'Full Stack Developer',
      desc: 'Fokus pada pengembangan ekosistem web modern dan optimasi kode murni untuk solusi digital yang skalabel.',
    },
    {
      company: 'Teaching Factory',
      year: '2025 — 2026',
      role: 'Technical Lead / Developer',
      desc: 'Bekerja dalam simulasi lingkungan industri di sekolah, menyelesaikan proyek nyata dari klien dengan standar profesional.',
    },
    {
      company: 'Organisasi SMK',
      year: '2023 — 2025',
      role: 'Pengurus Inti (2 Periode)',
      desc: 'Mengelola koordinasi tim, mengorganisir berbagai acara besar, dan melatih kemampuan komunikasi serta kepemimpinan antar angkatan.',
    },
    {
      company: 'Portofolio Akademik',
      year: '2022 — 2026',
      role: 'Junior Coder',
      desc: 'Membangun fondasi logika pemrograman dan menyelesaikan berbagai proyek studi kasus berbasis web dan data.',
    },
  ];

  return (
    <section id="experience" className="py-48 px-6 lg:px-24 bg-[#fdfdfd] text-[#0a0a0a] min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.8em] text-gray-400 mb-32 flex items-center gap-4">
          <span className="w-12 h-px bg-gray-200"></span>
          Rekam Jejak Profesional
        </h2>

        <div className="flex flex-col border-t border-gray-100">
          {timeline.map((item, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-gray-100 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="py-12 md:py-20 flex flex-col">
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between transition-all duration-500">
                    <div className="flex items-center gap-8 md:gap-16">
                      <span className="font-mono text-xs text-gray-300">0{index + 1}</span>
                      <motion.h3 
                        className={`text-5xl md:text-7xl lg:text-9xl font-serif tracking-tighter leading-none`}
                        animate={{ 
                          x: isHovered ? 40 : 0,
                          color: isHovered ? "#0a0a0a" : "#e5e5e5"
                        }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {item.company}
                      </motion.h3>
                    </div>

                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mt-8 lg:mt-0">
                      {item.year}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-12 pl-12 md:pl-48 flex flex-col md:flex-row gap-8 md:gap-32 items-start">
                          <div className="max-w-xs">
                            <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">Peran</h4>
                            <p className="font-serif text-xl">{item.role}</p>
                          </div>
                          <div className="max-w-md">
                            <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">Kontribusi</h4>
                            <p className="font-sans text-gray-500 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
