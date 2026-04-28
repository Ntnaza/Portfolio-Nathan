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
    image: 'https://images.unsplash.com/photo-1635241161466-541f065683cb?q=80&w=1200&auto=format&fit=crop',
    links: { demo: 'https://oska.smakniscjr.sch.id', code: '#' }
  },
];

const ProjectCard = ({ project, scrollYProgress }) => {
  // Parallax effect for the image inside the frame
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="flex items-center gap-24 md:gap-48 shrink-0 group">
      {/* Massive Typographic Title */}
      <div className="relative">
        <motion.h3 
          className="text-[18vw] font-serif leading-none tracking-tighter text-outline-white group-hover:text-white transition-all duration-700 select-none"
        >
          {project.title}
        </motion.h3>
        <span className="absolute -top-8 -left-8 font-mono text-xs tracking-[0.5em] text-gray-600">
          PROJECT_{project.id}
        </span>
        
        {/* Project Links */}
        <div className="absolute top-1/2 -right-12 translate-x-full flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
          <a href={project.links.demo} className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] hover:text-gray-400 transition-colors">Lihat Demo &mdash;</a>
          <a href={project.links.code} className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] hover:text-gray-400 transition-colors">Source Code &mdash;</a>
        </div>

        <span className="absolute bottom-12 -right-24 font-sans text-[10px] font-bold uppercase tracking-[0.6em] text-white rotate-90 origin-left border-l border-white pl-4">
          {project.type}
        </span>
      </div>
      
      {/* Image Reveal block with Internal Parallax */}
      <div className="w-[70vw] md:w-[45vw] lg:w-[35vw] aspect-[2/3] overflow-hidden bg-gray-900 relative">
        <motion.img 
          style={{ y, scale: 1.2 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
        />
        {/* Decorative Overlay */}
        <div className="absolute inset-0 border-[20px] border-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      </div>
    </div>
  );
};

const Work = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="works" ref={targetRef} className="h-[500vh] bg-[#0a0a0a] text-white relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        <div className="absolute top-12 left-6 md:left-24 z-10">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.8em] text-gray-600 flex items-center gap-4">
            <span className="w-12 h-px bg-gray-800"></span>
            Katalog Karya Selektif
          </h2>
        </div>

        <motion.div style={{ x }} className="flex items-center gap-32 md:gap-64 px-24 md:px-48">
          {/* Intro Text */}
          <div className="w-[60vw] md:w-[40vw] shrink-0">
            <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              Menerjemahkan <br /> <span className="text-gray-500">Visi ke Realitas.</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-500 font-light max-w-sm tracking-wide leading-relaxed">
              Setiap proyek adalah dialog antara estetika mentah dan fungsionalitas presisi. Gulir untuk melihat bagaimana saya mendefinisikan ulang batas-batas digital.
            </p>
          </div>

          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} scrollYProgress={scrollYProgress} />
          ))}
          
          <div className="w-[20vw] shrink-0"></div>
        </motion.div>

        {/* Progress Bar at bottom */}
        <div className="absolute bottom-12 left-24 right-24 h-px bg-gray-900 overflow-hidden">
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
