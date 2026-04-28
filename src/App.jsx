import { useEffect, useState } from 'react';
import Lenis from 'lenis';

import ModernNavbar from './components/ModernNavbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';
import CVModal from './components/CVModal';

function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#fdfdfd] text-[#0a0a0a] min-h-screen selection:bg-black selection:text-white relative">
      <div className="grain-overlay"></div>
      <ModernNavbar onOpenCV={() => setIsCVOpen(true)} />
      <Hero />
      <Expertise />
      <Work />
      <Experience />
      <About />
      <Contact />
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}

export default App;
