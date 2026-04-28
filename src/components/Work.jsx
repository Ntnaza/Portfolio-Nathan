import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { 
    id: '01', 
    title: 'LAUNDRY', 
    type: 'SITUS WEB',
    image: '/laundrykuyhp.jpeg',
    links: { demo: 'https://Laundrykuy.hexanusa.com', code: '#' }
  },
  { 
    id: '02', 
    title: 'PROFIL', 
    type: 'IDENTITAS',
    image: '/hexanusahp.jpeg',
    links: { demo: 'https://hexanusa.com', code: '#' }
  },
  { 
    id: '03', 
    title: 'ORGANISASI', 
    type: 'EKOSISTEM',
    image: '/oska.jpeg',
    links: { demo: 'https://oska.smakniscjr.sch.id', code: '#' }
  },
];

const ProjectCard = ({ project, scrollYProgress }) => {
  // Parallax effect for the image inside the frame
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-48 shrink-0 group">
      {/* Massive Typographic Title */}
      <div className="relative order-2 md:order-1">
        <motion.h3 
          className="text-[25vw] md:text-[18vw] font-serif leading-none tracking-tighter text-outline-white group-hover:text-white transition-all duration-700 select-none"
        >
          {project.title}
        </motion.h3>
        <span className="absolute -top-4 md:-top-8 -left-4 md:-left-8 font-mono text-[8px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] text-gray-600">
          PROJECT_{project.id}
        </span>
        
        {/* Project Links */}
        <div className="absolute -bottom-12 left-0 md:top-1/2 md:-right-12 md:translate-x-full md:bottom-auto flex flex-row md:flex-col gap-6 md:gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:delay-300">
          <a href={project.links.demo} className="font-sans text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] hover:text-gray-400 transition-colors border-b border-gray-800 pb-1 md:border-0 md:pb-0">Lihat Demo &mdash;</a>
          <a href={project.links.code} className="font-sans text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] hover:text-gray-400 transition-colors border-b border-gray-800 pb-1 md:border-0 md:pb-0">Source Code &mdash;</a>
        </div>

        <span className="absolute top-0 -right-4 md:bottom-12 md:-right-24 md:top-auto font-sans text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-white rotate-90 origin-left border-l border-white pl-2 md:pl-4">
          {project.type}
        </span>
      </div>
      
      {/* Image Reveal block with Internal Parallax */}
      <div className="w-[80vw] md:w-[45vw] lg:w-[35vw] aspect-[4/5] md:aspect-[2/3] overflow-hidden bg-gray-900 relative order-1 md:order-2">
        <motion.img 
          style={{ y, scale: 1.2 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale opacity-60 md:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
        />
      </div>
    </div>
  );
};

const Work = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section id="works" ref={targetRef} className="h-[400vh] md:h-[500vh] bg-[#0a0a0a] text-white relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        <div className="absolute top-12 left-6 md:left-24 z-10">
          <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] md:tracking-[0.8em] text-gray-600 flex items-center gap-4">
            <span className="w-8 md:w-12 h-px bg-gray-800"></span>
            Katalog Karya Selektif
          </h2>
        </div>

        <motion.div style={{ x }} className="flex items-center gap-24 md:gap-64 px-8 md:px-48">
          {/* Intro Text */}
          <div className="w-[85vw] md:w-[40vw] shrink-0">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 md:mb-8">
              Menerjemahkan <br /> <span className="text-gray-500 italic">Visi ke Realitas.</span>
            </h2>
            <p className="font-sans text-xs md:text-base text-gray-500 font-light max-w-sm tracking-wide leading-relaxed">
              Setiap proyek adalah dialog antara estetika mentah dan fungsionalitas presisi. Gulir untuk melihat bagaimana saya mendefinisikan ulang batas-batas digital.
            </p>
          </div>

          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} scrollYProgress={scrollYProgress} />
          ))}
          
          <div className="w-[10vw] md:w-[20vw] shrink-0"></div>
        </motion.div>

        {/* Progress Bar at bottom */}
        <div className="absolute bottom-10 md:bottom-12 left-8 md:left-24 right-8 md:right-24 h-px bg-gray-900 overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-white origin-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
