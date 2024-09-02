'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className='min-h-screen text-foreground bg-gradient-to-t from-primary/20 to-background bg-grid-pattern bg-fixed'>
      <Header
        navItems={navItems}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-40 bg-background/95 backdrop-blur-md'>
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className='h-full flex flex-col justify-center items-center'>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`text-4xl font-bold mb-8 relative overflow-hidden group ${
                    activeSection === item.href.slice(1) ? 'text-primary' : ''
                  }`}
                  onClick={() => {
                    toggleMenu();
                    setActiveSection(item.href.slice(1));
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  {item.name}
                  <motion.span
                    className='absolute bottom-0 left-0 w-full h-1 bg-primary origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100'
                    initial={false}
                    animate={{
                      scaleX: activeSection === item.href.slice(1) ? 1 : 0,
                    }}
                  />
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
