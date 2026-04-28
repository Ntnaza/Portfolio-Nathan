import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Mengirim....");
    
    const formData = new FormData(event.target);

    // Masukkan Access Key Anda di sini setelah mendapatkannya dari web3forms.com
    formData.append("access_key", "5af4ca9c-3510-4fc7-b6aa-ef0ac577c6d8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Pesan Berhasil Terkirim!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="min-h-screen pt-32 md:pt-48 pb-16 px-6 lg:px-12 bg-[#0a0a0a] text-[#fdfdfd] relative overflow-hidden flex flex-col justify-between">
      
      {/* Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center opacity-[0.02] pointer-events-none">
        <h2 className="text-[30vw] md:text-[20vw] font-serif leading-none tracking-tighter">HELLO</h2>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">
        
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8 md:mb-12">
              Mari Mulai <br/> <span className="italic">Sesuatu.</span>
            </h2>
            
            <div className="space-y-6 md:space-y-8 mt-12 md:mt-24">
              <div>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-3 md:mb-4">Email</p>
                <a href="mailto:masadepanku1712@gmail.com" className="text-xl md:text-3xl font-serif hover:text-gray-400 transition-all duration-500 underline underline-offset-8 decoration-gray-800 break-all">masadepanku1712@gmail.com</a>
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-3 md:mb-4">Sosial</p>
                <div className="flex gap-6 md:gap-8 text-base md:text-lg font-serif">
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
            className="w-full flex flex-col gap-10 md:gap-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={onSubmit}
          >
            <div className="relative group">
              <input type="text" name="name" required className="w-full bg-transparent border-b border-gray-800 py-3 md:py-4 text-lg md:text-2xl focus:outline-none focus:border-white transition-all text-white placeholder-transparent peer" id="name" placeholder="Nama" />
              <label htmlFor="name" className="absolute left-0 top-3 text-gray-600 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.4em] peer-focus:text-gray-400">Nama Lengkap</label>
            </div>

            <div className="relative group">
              <input type="email" name="email" required className="w-full bg-transparent border-b border-gray-800 py-3 md:py-4 text-lg md:text-2xl focus:outline-none focus:border-white transition-all text-white placeholder-transparent peer" id="email" placeholder="Email" />
              <label htmlFor="email" className="absolute left-0 top-3 text-gray-600 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.4em] peer-focus:text-gray-400">Alamat Email</label>
            </div>

            <div className="relative group">
              <textarea name="message" rows="3" required className="w-full bg-transparent border-b border-gray-800 py-3 md:py-4 text-lg md:text-2xl focus:outline-none focus:border-white transition-all text-white placeholder-transparent peer resize-none" id="message" placeholder="Pesan"></textarea>
              <label htmlFor="message" className="absolute left-0 top-3 text-gray-600 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.4em] peer-focus:text-gray-400">Ceritakan Proyek Anda</label>
            </div>

            <div className="flex flex-col gap-4">
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative self-start px-8 md:px-12 py-4 md:py-6 overflow-hidden border border-gray-800 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="relative z-10 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] group-hover:text-black transition-colors duration-500">
                  {isSubmitting ? 'Mengirim...' : 'Kirim Sekarang'}
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]"
                />
              </motion.button>
              
              {result && (
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${result.includes('Berhasil') ? 'text-green-500' : 'text-red-500'}`}>
                  {result}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center mt-24 md:mt-32 pt-8 border-t border-gray-900 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-600 gap-4 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} NATHAN STUDIO &mdash; SEMUA HAK DILINDUNGI.</p>
        <p>DIBUAT DENGAN GAIRAH DAN KODE MURNI.</p>
      </div>
    </section>
  );
};

export default Contact;

