'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import AnimatedGridPattern from './ui/animated-grid-pattern';

export default function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center'>
      <AnimatedGridPattern
        numSquares={100}
        maxOpacity={0.5}
        duration={10}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 fixed",
        )}
      />
      <div className='text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='mb-8'>
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg'>
            <Image
              priority
              width={200}
              height={200}
              src='/profile.jpg'
              alt='Adhham Safwan'
              className='rounded-full'
            />
          </motion.div>
        </motion.div>
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
            <a href='/cv.pdf' title='Download CV in PDF' download>
              Download CV
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
