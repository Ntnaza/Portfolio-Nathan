import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={containerRef} className="py-48 px-6 lg:px-24 bg-[#0a0a0a] text-white min-h-screen relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Image with Parallax */}
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[3/4] overflow-hidden bg-gray-900 border border-gray-800 relative">
              <motion.img 
                style={{ y: imgY, scale: 1.2 }}
                src="/Nathan.jpeg" 
                alt="Profil Nathan" 
                className="w-full h-full object-cover grayscale contrast-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Floating label */}
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <h3 className="text-2xl font-sans font-bold uppercase tracking-[0.5em] text-white opacity-20">
                SULTAN MALIK AHMAD
              </h3>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 lg:pl-12 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[10px] font-bold uppercase tracking-[0.8em] text-gray-600 mb-12 flex items-center gap-4">
                <span className="w-12 h-px bg-gray-800"></span>
                Filosofi & Profil
              </h2>

              <p className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tighter mb-12">
                Menyatukan <span>Logika Presisi</span> dengan Estetika Digital yang Bermakna.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
                <div className="space-y-12">
                  <div className="grid grid-cols-1 gap-12">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-6">Kelahiran</h3>
                        <p className="font-serif text-xl">Cianjur, 17 Des 2007</p>
                      </div>
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-6">Pendidikan</h3>
                        <div className="border-l border-gray-800 pl-6 space-y-2">
                          <p className="font-serif text-xl">SMK Nurul Islam Cianjur</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">PPLG</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-6">Alamat</h3>
                      <p className="font-sans text-gray-400 leading-relaxed font-light text-sm">
                        Jl. Nasional III 47, Selajambe, Kec. Sukaluyu, <br/>Kabupaten Cianjur, Jawa Barat 43284
                      </p>
                    </div>
                  </div>
                  
              
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-6">Keahlian Utama</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-4">
                      {["React.js", "Node.js", "Tailwind CSS", "Laravel", "MySQL", "Git"].map((skill) => (
                        <span key={skill} className="font-serif text-lg text-gray-300 hover:text-white transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="font-sans text-gray-400 leading-relaxed font-light">
                    Membangun solusi digital yang kompleks di balik layar, namun terasa ringan dan intuitif bagi pengguna akhir.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
