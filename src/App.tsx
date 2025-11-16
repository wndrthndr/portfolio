import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import More from './components/More';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Smooth scrolling for internal anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cursor press logic
    const handleMouseDown = () => {
      document.body.classList.add('cursor-pressed');
    };

    const handleMouseUp = () => {
      document.body.classList.remove('cursor-pressed');
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });

      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-vintage-cream relative overflow-x-hidden">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 opacity-30 pointer-events-none bg-paper-texture"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <More />
      <Contact />

      
    </div>
  );
}

export default App;
