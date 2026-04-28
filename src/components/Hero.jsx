import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [0.05, 0]);

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-[30vw] md:text-[25vw] font-serif whitespace-nowrap tracking-tighter text-[#0a0a0a]">NATHAN</h1>
      </motion.div>

      <div className="z-10 text-center w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.5em] mb-6 md:mb-8 text-gray-500">
            Fresh Graduate &mdash; 2026
          </p>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.9] md:leading-[0.85] tracking-tighter mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Junior <br /> <span className="italic">Coder.</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-24 md:mt-32 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.3em] max-w-4xl mx-auto border-t border-gray-100 pt-10 md:pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="md:text-left">Tersedia untuk Proyek Eksklusif</span>
          <span className="md:text-center text-gray-400 font-serif lowercase text-base md:text-lg tracking-normal normal-case">berbasis di internet</span>
          <span className="md:text-right">Gulir untuk Pengalaman</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
