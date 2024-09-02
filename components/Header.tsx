'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeaderProps {
  navItems: {
    name: string;
    href: string;
  }[];
  toggleMenu: () => void;
  isMenuOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({
  navItems,
  toggleMenu,
  isMenuOpen,
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b'>
      <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <a href='#home' className='text-2xl font-bold'>
          Adhham Safwan
        </a>
        {isLargeScreen ? (
          <div className='flex space-x-4'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg relative overflow-hidden group ${
                  activeSection === item.href.slice(1) ? 'text-primary' : ''
                }`}
                onClick={() => setActiveSection(item.href.slice(1))}>
                {item.name}
                <motion.span
                  className='absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100'
                  initial={false}
                  animate={{
                    scaleX: activeSection === item.href.slice(1) ? 1 : 0,
                  }}
                />
              </a>
            ))}
          </div>
        ) : (
          <button
            className='z-50 relative'
            onClick={toggleMenu}
            aria-label='Toggle menu'>
            <AnimatePresence mode='wait'>
              {isMenuOpen ? (
                <motion.div
                  key='close'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}>
                  <X className='w-6 h-6' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}>
                  <Menu className='w-6 h-6' />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        )}
      </nav>
    </header>
  );
}
