import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- PENGATURAN SINKRONISASI ---
// Jika lirik kurang pas dengan lagu Anda, ubah angka OFFSET ini:
// Positif (+) jika lirik terlalu cepat | Negatif (-) jika lirik terlalu lambat
const LYRIC_OFFSET = -0.4; 

const lyrics = [
  { time: 0, text: "— Sailor Song —" },
  { time: 24.96, text: "I saw her in the rightest way" },
  { time: 30.26, text: "Looking like Anne Hathaway" },
  { time: 35.11, text: "Laughing while she hit her pen" },
  { time: 39.69, text: "And coughed, and coughed" },
  { time: 45.03, text: "And then she came up to my knees" },
  { time: 50.32, text: "Begging, \"Baby, would you please" },
  { time: 55.47, text: "Do the things you said you'd do" },
  { time: 59.83, text: "To me, to me?\"" },
  { time: 64.23, text: "Oh, won't you kiss me on the mouth and love me like a sailor?" },
  { time: 70.34, text: "And when you get a taste, can you tell me what's my flavor?" },
  { time: 75.23, text: "I don't believe in God, but I believe that you're my savior" },
  { time: 80.49, text: "My mom says that she's worried, but I'm covered in this favor" },
  { time: 85.49, text: "And when we're getting dirty, I forget all that is wrong" },
  { time: 90.39, text: "I sleep so I can see you, 'cause I hate to wait so long" },
  { time: 95.56, text: "I sleep so I can see you, and I hate to wait so long" },
  { time: 101.46, text: "..." },
  { time: 105.56, text: "She took my fingers to her mouth" },
  { time: 110.83, text: "The kind of thing that makes you proud" },
  { time: 115.74, text: "That nothing else had ever" },
  { time: 120.54, text: "Worked out, worked out" },
  { time: 125.82, text: "And lately, I've tried other things" },
  { time: 131.07, text: "But nothing can capture the sting" },
  { time: 136.28, text: "Of the venom she's gonna" },
  { time: 140.60, text: "Spit out right now" },
  { time: 145.44, text: "Oh, won't you kiss me on the mouth and love me like a sailor?" },
  { time: 150.90, text: "And when you get a taste, can you tell me what's my flavor?" },
  { time: 156.37, text: "I don't believe in God, but I believe that you're my savior" },
  { time: 161.36, text: "I know that you've been worried, but you're dripping in my favor" },
  { time: 166.27, text: "And when we're getting dirty, I forget all that is wrong" },
  { time: 171.27, text: "I sleep so I can see you, 'cause I hate to wait so long" },
  { time: 176.33, text: "I sleep so I can see you, and I hate to wait so long" },
  { time: 182.99, text: "..." },
  { time: 186.40, text: "And we can run away to the walls inside your house" },
  { time: 191.73, text: "I can be the cat, baby, you can be the mouse" },
  { time: 196.70, text: "And we can laugh off things that we know nothing about" },
  { time: 201.92, text: "We can go forever until you wanna sit it out" },
  { time: 205.87, text: "..." },
];

const Expertise = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      // Menghitung waktu sekarang ditambah offset untuk sinkronisasi
      setCurrentTime(audioRef.current.currentTime - LYRIC_OFFSET);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => alert("File 'sailor-song.mp3' tidak ditemukan di folder public!"));
    }
    setIsPlaying(!isPlaying);
  };

  const currentLyric = [...lyrics].reverse().find(lyric => currentTime >= lyric.time) || lyrics[0];

  return (
    <section id="expertise" className="min-h-screen bg-[#0a0a0a] text-[#fdfdfd] relative flex flex-col items-center justify-center py-32 md:py-48 px-6 overflow-hidden border-t border-gray-900">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none">
        <h2 className="text-[40vw] md:text-[30vw] font-serif leading-none tracking-tighter">MUSIC</h2>
      </div>

      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        
        <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] md:tracking-[0.8em] text-gray-500 mb-16 md:mb-24 flex items-center gap-4 text-center">
          <span className="w-8 md:w-12 h-px bg-gray-800 hidden sm:block"></span>
          Audio Visual Experience
          <span className="w-8 md:w-12 h-px bg-gray-800 hidden sm:block"></span>
        </h2>

        <div className="h-64 md:h-96 flex flex-col items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentLyric.text}
              initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(20px)", y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-9xl leading-tight tracking-tighter italic"
            >
              {currentLyric.text}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-8 mt-12 md:mt-16">
          <button 
            onClick={togglePlay}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-800 flex items-center justify-center group hover:bg-white transition-all duration-500"
          >
            {isPlaying ? (
              <div className="flex gap-2 items-center">
                <div className="w-1 md:w-1.5 h-6 md:h-8 bg-white group-hover:bg-black"></div>
                <div className="w-1 md:w-1.5 h-6 md:h-8 bg-white group-hover:bg-black"></div>
              </div>
            ) : (
              <div className="w-0 h-0 border-t-[10px] md:border-t-[12px] border-t-transparent border-l-[16px] md:border-l-[20px] border-l-white border-b-[10px] md:border-b-[12px] border-b-transparent ml-2 group-hover:border-l-black"></div>
            )}
          </button>
          
          <div className="flex flex-col items-center gap-4">
            <p className="font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-400 text-center">Sailor Song &mdash; Gigi Perez</p>
            <div className="w-48 md:w-64 h-px bg-gray-900 relative">
              <motion.div 
                className="absolute inset-0 bg-white origin-left"
                style={{ scaleX: audioRef.current && audioRef.current.duration ? audioRef.current.currentTime / audioRef.current.duration : 0 }}
              />
            </div>
          </div>
        </div>

        <audio 
          ref={audioRef} 
          src="/sailor-song.mp3" 
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          preload="auto"
        />

      </div>
    </section>
  );
};

export default Expertise;
