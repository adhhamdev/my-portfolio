'use client';

import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface HeaderProps {
  navItems: {
    name: string;
    href: string;
  }[];
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export default function Header({
  navItems,
  toggleMenu,
  isMenuOpen,
}: HeaderProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-sm border-b'
        : 'bg-transparent'
        }`}>
      <nav className='container mx-auto px-4 md:px-8 py-4 flex justify-between items-center'>
        <a href='#home' className='text-2xl font-bold'>
          Adhham Safwan
        </a>
        {isLargeScreen ? (
          <div className='flex space-x-5'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg relative overflow-hidden group`}>
                {item.name}
                <span
                  className='absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100'
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
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}>
                  <X className='w-6 h-6' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}>
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
