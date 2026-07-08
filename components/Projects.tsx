'use client';

import { Code, ExternalLink } from 'lucide-react';
import { m } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

type Platform = 'android' | 'ios' | 'web';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  platforms: Platform[];
  image?: string;
  imageFitHeight?: boolean;
  liveLink?: string;
  sourceLink?: string;
}

const platformMeta: Record<Platform, { icon: string; label: string }> = {
  android: { icon: 'devicon-android-plain colored', label: 'Android' },
  ios: { icon: 'devicon-apple-original colored', label: 'iOS' },
  web: { icon: 'devicon-chrome-plain colored', label: 'Web' },
};

function ProjectPlatforms({ platforms }: { platforms: Platform[] }) {
  return (
    <div className='flex flex-wrap items-center gap-2 mb-3'>
      {platforms.map((platform) => (
        <span
          key={platform}
          className='inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-background border border-border/60 px-2.5 py-1 rounded-full'>
          <i className={`${platformMeta[platform].icon} text-sm`} aria-hidden />
          {platformMeta[platform].label}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<
    'orbitra' | 'professional' | 'personal'
  >('orbitra');

  const orbitraProjects: Project[] = [
    {
      name: 'Orbitra Tech',
      description:
        'Company marketing site and Payload CMS admin for orbitratech.net — showcasing services, products, and client work for our Beruwala-based digital studio.',
      technologies: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'GSAP',
        'Payload CMS',
        'Supabase',
      ],
      platforms: ['web'],
      image: '/orbitra_logo.png',
      liveLink: 'https://orbitratech.net',
      sourceLink: 'https://github.com/orbitratechnology/orbitratech-landing',
    },
    {
      name: 'Worknet',
      description:
        'Location-based marketplace mobile app connecting customers with nearby service workers — featuring maps, emergency services, ratings, and Firebase-backed profiles. In active development.',
      technologies: [
        'Expo',
        'React Native',
        'Firebase',
        'Firestore',
        'Google Maps',
        'EAS',
      ],
      platforms: ['android', 'ios'],
      image: '/worknet-icon.png',
      sourceLink: 'https://github.com/orbitratechnology/worknet',
    },
    {
      name: 'GemFort',
      description:
        'Mobile platform for the Sri Lankan gem industry — GemNet verified business directory and GemTrack private inventory, cheque, and trip management for traders. In active development.',
      technologies: [
        'Expo',
        'React Native',
        'Firebase',
        'Firestore',
        'EAS',
        'TypeScript',
      ],
      platforms: ['android', 'ios'],
      image: '/orbitra_icon.png',
      sourceLink: 'https://github.com/orbitratechnology/gemfort',
    },
    {
      name: 'Ceylonbay',
      description:
        "Premium mobile-first men's fashion and accessories e-commerce store for the modern Sri Lankan market, with admin dashboard and Polar payments integration. In development.",
      technologies: [
        'Next.js',
        'Tailwind CSS',
        'Supabase',
        'Polar',
        'Zustand',
        'Zod',
      ],
      platforms: ['web'],
      image: '/ceylonbay-logo.jpg',
      sourceLink: 'https://github.com/orbitratechnology/ceylonbay',
    },
    {
      name: 'Rabeeyunil Awwal Mango Garden',
      description:
        'Digital record system for 104 Tom JC mango trees in Hambantota — interactive garden map, per-tree health profiles, and QR code scanning for maintenance history.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'shadcn/ui'],
      platforms: ['web'],
      image: '/rabeeyunil-awwal.png',
      imageFitHeight: true,
      sourceLink: 'https://github.com/orbitratechnology/rabeeyunil-awwal',
    },
    {
      name: 'Hey Gems International',
      description:
        'Professional showcase website for a Sri Lankan gem business — product galleries, brand storytelling, and a polished client-facing portfolio experience.',
      technologies: [
        'TanStack Start',
        'React',
        'Tailwind CSS',
        'Vite',
        'shadcn/ui',
      ],
      platforms: ['web'],
      liveLink: 'https://hey-gems-showcase.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/hey-gems-showcase',
    },
  ];

  const professionalProjects: Project[] = [
    {
      name: 'Kapruka Agent',
      description:
        'AI shopping assistant for Kapruka with live voice via Gemini, product search, basket management, delivery quotes, and checkout through Kapruka MCP. Built for the Kapruka Agent Challenge 2026.',
      technologies: [
        'Next.js',
        'Gemini API',
        'Gemini Live',
        'MCP',
        'Tailwind CSS',
        'Streamdown',
        'Vercel',
      ],
      platforms: ['web'],
      image: '/agent-kapruka.png',
      imageFitHeight: true,
      liveLink: 'https://agent-kapruka.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/kapruka-agent',
    },
    {
      name: 'OncsCare - Cancer Care Platform',
      description:
        'Patient mobile app and clinician web dashboard for a UK NHS-partnered cancer care platform — remote symptom tracking, secure Firebase backend, and clinician monitoring workflows.',
      technologies: [
        'Next.js',
        'FlutterFlow',
        'Firebase',
        'Firestore',
        'Cloud Functions',
        'TypeScript',
      ],
      platforms: ['android', 'ios', 'web'],
      image: '/oncscare-icon.PNG',
      sourceLink: 'https://github.com/adhhamdev/oncscare-app',
    },
    {
      name: 'EventHero - Event Management Platform',
      description:
        'Built a scalable event management platform serving 10k+ users with real-time inventory management.',
      technologies: [
        'Next.js',
        'TailwindCSS',
        'TypeScript',
        'Supabase',
        'Zod',
        'Motion',
        'Vercel',
      ],
      platforms: ['web'],
    },
  ];

  const personalProjects: Project[] = [
    {
      name: 'Islamic Center Management System',
      description:
        'A Fullstack web app for managing Islamic Center activities.',
      technologies: [
        'Next.js',
        'TailwindCSS',
        'TypeScript',
        'Supabase',
        'Supabase Auth',
        'Zod',
        'Motion',
      ],
      platforms: ['web'],
      liveLink: 'https://masjidos.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/masjid-os',
    },
    {
      name: 'Mirage AI',
      description:
        'Create stunning images with the AI-powered tool - outperforming many popular alternatives.',
      technologies: [
        'Next.js',
        'TailwindCSS',
        'REST API',
        'Hugging Face',
        'Vercel Blob',
        'Vercel AI SDK',
        'Motion',
      ],
      platforms: ['web'],
      liveLink: 'https://mirageai.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/mirage',
    },
    {
      name: 'Minar',
      description:
        'A web application that shows accurate prayer times for various locations worldwide.',
      technologies: ['Next.js', 'TailwindCSS', 'REST API', 'Motion'],
      platforms: ['web'],
      liveLink: 'https://minarapp.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/minar',
    },
    {
      name: 'Airflix',
      description: 'A movie browsing site powered by TMDB API.',
      technologies: ['React.js', 'REST API'],
      platforms: ['web'],
      liveLink: 'https://airflix.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/airflix',
    },
    {
      name: 'Pictoria',
      description:
        'A site to explore high quality photos powered by Unsplash API.',
      technologies: ['Next.js', 'TailwindCSS', 'REST API'],
      platforms: ['web'],
      liveLink: 'https://pictoria-adhham.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/pictoria',
    },
    {
      name: 'Startup Directory',
      description:
        'Full Stack web app with collection of Startups across the world to lookup.',
      technologies: ['Next.js', 'TailwindCSS', 'Mongoose', 'MongoDB'],
      platforms: ['web'],
      liveLink: 'https://startup-directory-adhham.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/startup-directory',
    },
    {
      name: 'TO-DO List',
      description:
        'To-do list web app built on LocalStorage API, for CodeAlpha as an Web Development Intern.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      platforms: ['web'],
      liveLink: 'https://code-alpha-to-do.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/CodeAlpha_To-do',
    },
  ];

  const tabs = [
    { id: 'orbitra' as const, label: 'Orbitra Tech' },
    { id: 'professional' as const, label: 'Client Work' },
    { id: 'personal' as const, label: 'Side Projects' },
  ];

  const currentProjects =
    activeTab === 'orbitra'
      ? orbitraProjects
      : activeTab === 'professional'
        ? professionalProjects
        : personalProjects;

  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Projects</h2>

        <div className='flex justify-center mb-8'>
          <div className='bg-muted p-1 rounded-lg flex flex-wrap gap-1 justify-center'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type='button'
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-background text-primary shadow-md'
                    : 'text-muted-foreground hover:text-white'
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <m.div
          key={activeTab}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {currentProjects.map((project, index) => (
            <m.div
              key={project.name}
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-muted p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col justify-between text-dark-bg-foreground'>
              <div>
                {project.image && (
                  <div
                    className={`relative w-full h-36 mb-4 rounded-md overflow-hidden flex items-center justify-center ${project.image === '/orbitra_logo.png' ? 'bg-white' : 'bg-background'}`}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={320}
                      height={144}
                      className={
                        project.imageFitHeight
                          ? 'h-full w-auto max-w-full object-contain'
                          : `object-contain max-h-28 w-auto ${project.image === '/oncscare-icon.PNG' ? 'rounded-full' : ''}`
                      }
                    />
                  </div>
                )}
                <h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
                <ProjectPlatforms platforms={project.platforms} />
                <p className='text-muted-foreground mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-accent text-foreground px-2 py-1 rounded-full text-sm'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='flex space-x-4'>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center hover:underline transition-colors duration-300'>
                    <ExternalLink className='w-4 h-4 mr-1' /> View
                  </a>
                )}
                {project.sourceLink && (
                  <a
                    href={project.sourceLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center hover:underline transition-colors duration-300'>
                    <Code className='w-4 h-4 mr-1' /> Source Code
                  </a>
                )}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
