'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-background'>
      <div className='text-center'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl md:text-6xl font-bold mb-4'>
          Adhham Safwan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-xl md:text-2xl mb-8'>
          Full Stack Web Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='space-x-4'>
          <Button
            asChild
            className='transition-transform duration-300 hover:scale-105'>
            <a href='/resume.pdf' download>
              Download Resume
            </a>
          </Button>
          <Button
            asChild
            variant='outline'
            className='transition-transform duration-300 hover:scale-105'>
            <a href='#contact'>Contact Me</a>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className='absolute bottom-8'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}>
          <ChevronDown className='w-8 h-8 mx-auto mb-2' />
        </motion.div>
        <p className='text-sm'>Scroll to explore</p>
      </motion.div>
    </section>
  );
}
