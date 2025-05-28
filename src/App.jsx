import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './Header.jsx';
import About from './About/About.jsx';
import Welcome from './Welcome/Welcome.jsx';
import Experience from './Experience/Experience.jsx';
import LandingModel from './Component/LandingModel.jsx';
import SpinningModelViewer from './Component/SpinningModelViewer.jsx';
import Papers from './Papers/Papers.jsx';

import Contact from './Contact/Contact.jsx';

import Projects from './Projects/Projects.jsx';
function App() {
  const [showCornerModel, setShowCornerModel] = useState(false);
  const welcomeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!welcomeRef.current) return;

      const rect = welcomeRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.9;
      const isOutOfView = rect.bottom <= triggerPoint;

      setShowCornerModel(isOutOfView);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      <Header />

      <div className="flex flex-col">
        <div ref={welcomeRef} className=" flex  flex-col-reverse sm:flex-row justify-center items-center h-dvh ">
          <Welcome />
          <AnimatePresence mode="wait">
            {!showCornerModel && (
              <motion.div
                key={showCornerModel ? 'invisible' : 'landing-model'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <LandingModel />
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      <div className="flex flex-col justify-center items-center z-1 ">
        <div style={{backgroundColor:'var(--color-outer)' }} className="flex flex-col justify-center items-center w-7/8 sm:w-2/3  rounded-lg mb-10" >

          <AnimatePresence>
            {showCornerModel && (
              <motion.div
                key="corner-model"
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <SpinningModelViewer />
              </motion.div>
            )}
          </AnimatePresence>

          <About />
          <Experience />
          <Papers />
          <Projects/>
          <Contact />
        </div>
      </div>

    </div>
  );
}

export default App;
