import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CVModal = ({ isOpen, onClose }) => {
  // Lock scroll and handle ESC key
  React.useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const skills = [
    "React.js", "Node.js", "Tailwind CSS", "Laravel", "MySQL", "Git"
  ];

  const projects = [
    { title: "Laundrykuy", type: "Web App", link: "Laundrykuy.hexanusa.com" },
    { title: "Hexanusa", type: "Company Profile", link: "hexanusa.com" },
    { title: "OSKA SMK", type: "Organization System", link: "oska.smakniscjr.sch.id" }
  ];

  const experience = [
    {
      company: 'Proyek Mandiri',
      year: '2025 — SKRG',
      role: 'Full Stack Developer',
      desc: 'Pengembangan ekosistem web modern dan optimasi kode.',
    },
    {
      company: 'Teaching Factory',
      year: '2024 — 2025',
      role: 'Technical Lead',
      desc: 'Memimpin tim dalam proyek nyata klien standar industri.',
    },
    {
      company: 'Organisasi SMK',
      year: '2022 — 2024',
      role: 'Pengurus Inti',
      desc: 'Mengelola koordinasi tim dan acara besar sekolah.',
    }
  ];

  const modalContent = (
    <AnimatePresence>
      <div 
        className="cv-modal-root fixed inset-0 z-[99999] flex justify-center items-start overflow-y-auto bg-black/95 backdrop-blur-xl p-0 md:p-12"
        onClick={onClose}
        data-lenis-prevent="true"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-white text-[#0a0a0a] w-full max-w-5xl md:rounded-2xl shadow-2xl relative overflow-hidden my-0 md:my-8"
          onClick={(e) => e.stopPropagation()}
          id="printable-cv-content"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/10 text-black md:text-gray-400 hover:text-black transition-all z-20 no-print"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>

          <div className="flex flex-row min-h-screen" id="cv-main-layout">
            {/* LEFT COLUMN */}
            <aside className="w-[35%] bg-[#f9fafb] p-8 md:p-10 border-r border-gray-100 flex flex-col gap-10 print-sidebar">
              <div className="flex flex-col items-center md:items-start gap-8">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-2xl overflow-hidden shadow-sm border-4 border-white">
                  <img src="/Nathan.jpeg" alt="NATHAN" className="w-full h-full object-cover grayscale contrast-125" />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-serif tracking-tighter uppercase mb-1">NATHAN</h1>
                  <p className="text-gray-400 font-sans uppercase tracking-[0.4em] text-[10px] font-black">Junior Coder</p>
                </div>
              </div>

              <section className="space-y-6">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-2">Kontak & Bio</h2>
                <div className="space-y-4 text-[11px] text-gray-600 font-medium">
                  <div>
                    <p className="text-gray-400 uppercase text-[8px] mb-1">Kelahiran</p>
                    <p>Cianjur, 17 Desember 2007</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase text-[8px] mb-1">Email</p>
                    <p className="lowercase">masadepanku1712@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase text-[8px] mb-1">Alamat</p>
                    <p className="leading-relaxed">Jl. Nasional III 47, Selajambe, Sukaluyu, Cianjur, 43284</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-2">Keahlian</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-2.5 py-1.5 bg-white text-[9px] font-bold uppercase tracking-wider rounded border border-gray-100 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-2">Pendidikan</h2>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg leading-tight">SMK Nurul Islam Cianjur</h3>
                  <p className="text-[9px] font-black text-gray-900 uppercase tracking-tighter">PPLG (RPL)</p>
                  <p className="text-[9px] text-gray-400 font-mono">2022 — 2025</p>
                </div>
              </section>
            </aside>

            {/* RIGHT COLUMN */}
            <main className="w-[65%] p-8 md:p-14 bg-white print-main">
              <section className="mb-12">
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-6 flex items-center gap-4">
                  <span className="w-12 h-px bg-gray-100"></span> Profil Profesional
                </h2>
                <p className="font-sans text-gray-700 leading-relaxed text-base font-light italic">
                  Lulusan baru dengan dedikasi tinggi dalam membangun aplikasi web yang efisien. Terampil dalam ekosistem JavaScript modern dengan kemampuan menyatukan logika presisi dan estetika digital yang bermakna.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-6 flex items-center gap-4">
                  <span className="w-12 h-px bg-gray-100"></span> Pengalaman Terpilih
                </h2>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-serif text-xl border-l-4 border-black pl-3">{exp.company}</h3>
                        <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{exp.year}</span>
                      </div>
                      <p className="text-[10px] text-gray-900 mb-2 font-bold uppercase tracking-wider">{exp.role}</p>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-light">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-6 flex items-center gap-4">
                  <span className="w-12 h-px bg-gray-100"></span> Katalog Karya
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {projects.map((proj, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                      <h3 className="font-serif text-base mb-1">{proj.title}</h3>
                      <p className="text-[8px] text-gray-400 uppercase font-black mb-1 tracking-tighter">{proj.type}</p>
                      <p className="text-[9px] text-gray-400 font-mono truncate">{proj.link}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-16 pt-8 border-t border-gray-50 text-center no-print">
                <button 
                  onClick={() => window.print()} 
                  className="px-10 py-5 bg-black text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-gray-800 transition-all rounded-full shadow-lg"
                >
                  Cetak CV Sekarang
                </button>
              </div>
            </main>
          </div>
        </motion.div>

        <style>{`
          @media screen {
            .cv-modal-root::-webkit-scrollbar { display: none; }
            .cv-modal-root { scrollbar-width: none; }
          }
          
          @media print {
            /* Sembunyikan SEMUA elemen di luar modal */
            body > *:not(.cv-modal-root) {
              display: none !important;
            }

            .cv-modal-root {
              position: static !important;
              display: block !important;
              background: white !important;
              padding: 0 !important;
              margin: 0 !important;
              overflow: visible !important;
            }

            #printable-cv-content {
              width: 210mm !important;
              min-height: 297mm !important;
              margin: 0 auto !important;
              box-shadow: none !important;
              border-radius: 0 !important;
              overflow: hidden !important;
            }

            #cv-main-layout {
              display: flex !important;
              flex-direction: row !important;
              height: 100% !important;
            }

            .print-sidebar {
              width: 35% !important;
              min-height: 297mm !important;
              background-color: #f9fafb !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            .print-main {
              width: 65% !important;
              background-color: white !important;
            }

            .no-print {
              display: none !important;
            }

            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            @page {
              size: A4;
              margin: 0;
            }
          }
        `}</style>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default CVModal;
