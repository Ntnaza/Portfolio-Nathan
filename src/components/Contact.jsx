import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen pt-48 pb-16 px-6 lg:px-12 bg-[#0a0a0a] text-[#fdfdfd] relative overflow-hidden flex flex-col justify-between">
      
      {/* Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center opacity-[0.02] pointer-events-none">
        <h2 className="text-[20vw] font-serif leading-none tracking-tighter">HELLO</h2>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-24 relative z-10">
        
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-12">
              Mari Mulai <br/> <span>Sesuatu.</span>
            </h2>
            
            <div className="space-y-8 mt-24">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-4">Email</p>
                <a href="mailto:masadepanku1712@gmail.com" className="text-2xl md:text-3xl font-serif hover:text-gray-400 transition-all duration-500 underline underline-offset-8 decoration-gray-800">masadepanku1712@gmail.com</a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-4">Sosial</p>
                <div className="flex gap-8 text-lg font-serif">
                  <a href="https://www.instagram.com/nathanxda" className="hover:text-gray-400 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a>
                  <a href="https://github.com/Ntnaza" className="hover:text-gray-400 transition-colors">Github</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2">
          <motion.form
            className="w-full flex flex-col gap-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative group">
              <input type="text" required className="w-full bg-transparent border-b border-gray-800 py-4 text-xl md:text-2xl focus:outline-none focus:border-white transition-all text-white placeholder-transparent peer" id="name" placeholder="Nama" />
              <label htmlFor="name" className="absolute left-0 top-4 text-gray-600 text-xl transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.4em] peer-focus:text-gray-400">Nama Lengkap</label>
            </div>

            <div className="relative group">
              <input type="email" required className="w-full bg-transparent border-b border-gray-800 py-4 text-xl md:text-2xl focus:outline-none focus:border-white transition-all text-white placeholder-transparent peer" id="email" placeholder="Email" />
              <label htmlFor="email" className="absolute left-0 top-4 text-gray-600 text-xl transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.4em] peer-focus:text-gray-400">Alamat Email</label>
            </div>

            <div className="relative group">
              <textarea rows="3" required className="w-full bg-transparent border-b border-gray-800 py-4 text-xl md:text-2xl focus:outline-none focus:border-white transition-all text-white placeholder-transparent peer resize-none" id="message" placeholder="Pesan"></textarea>
              <label htmlFor="message" className="absolute left-0 top-4 text-gray-600 text-xl transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.4em] peer-focus:text-gray-400">Ceritakan Proyek Anda</label>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative self-start px-12 py-6 overflow-hidden border border-gray-800"
            >
              <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.5em] group-hover:text-black transition-colors duration-500">Kirim Sekarang</span>
              <motion.div 
                className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]"
              />
            </motion.button>
          </motion.form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center mt-32 pt-8 border-t border-gray-900 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 gap-4">
        <p>&copy; {new Date().getFullYear()} NATHAN STUDIO &mdash; SEMUA HAK DILINDUNGI.</p>
        <p>DIBUAT DENGAN GAIRAH DAN KODE MURNI.</p>
      </div>
    </section>
  );
};

export default Contact;
