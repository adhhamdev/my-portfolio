'use client';

import { Code, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  sourceLink?: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');

  const professionalProjects: Project[] = [
    {
      name: 'EventHero - Event Management Platform',
      description: 'Built a scalable event management platform serving 10k+ users with real-time inventory management.',
      technologies: ['Next.js', 'TailwindCSS', 'TypeScript', 'Supabase', 'Zod', 'Motion', 'Vercel'],
    },
    {
      name: 'OncsCare - Cancer Care Platform',
      description: 'Developed a comprehensive analytics dashboard for tracking customer behavior and sales metrics.',
      technologies: ['Next.js', 'FlutterFlow', 'TailwindCSS', 'TypeScript', 'Supabase', 'Firebase', 'Zod', 'Motion', 'Vercel'],
    }
  ];

  const personalProjects: Project[] = [
    {
      name: 'Islamic Center Management System',
      description: 'A Fullstack web app for managing Islamic Center activities.',
      technologies: ['Next.js', 'TailwindCSS', 'TypeScript', 'Supabase', 'Supabase Auth', 'Zod', 'Motion'],
      liveLink: 'https://masjidos.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/masjid-os',
    },
    {
      name: 'Mirage AI',
      description: 'Create stunning images with the AI-powered tool - outperforming many popular alternatives.',
      technologies: ['Next.js', 'TailwindCSS', 'REST API', 'Hugging Face', 'Vercel Blob', 'Vercel AI SDK', 'Motion'],
      liveLink: 'https://mirageai.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/mirage',
    },
    {
      name: 'Minar',
      description: 'A web application that shows accurate prayer times for various locations worldwide.',
      technologies: ['Next.js', 'TailwindCSS', 'REST API', 'Motion'],
      liveLink: 'https://minarapp.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/minar',
    },
    {
      name: 'Airflix',
      description: 'A movie browsing site powered by TMDB API.',
      technologies: ['React.js', 'REST API'],
      liveLink: 'https://airflix.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/airflix',
    },
    {
      name: 'Pictoria',
      description:
        'A site to explore high quality photos powered by Unsplash API.',
      technologies: ['Next.js', 'TailwindCSS', 'REST API'],
      liveLink: 'https://pictoria-adhham.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/pictoria',
    },
    {
      name: 'Startup Directory',
      description:
        'Full Stack web app with collection of Startups across the world to lookup.',
      technologies: [
        'Next.js',
        'TailwindCSS',
        'Mongoose',
        'MongoDB',
      ],
      liveLink: 'https://startup-directory-adhham.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/startup-directory',
    },
    {
      name: 'TO-DO List',
      description:
        'To-do list web app built on LocalStorage API, for CodeAlpha as an Web Development Intern.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://code-alpha-to-do.vercel.app',
      sourceLink: 'https://github.com/adhhamdev/CodeAlpha_To-do',
    },
  ];

  const currentProjects = activeTab === 'professional' ? professionalProjects : personalProjects;

  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Projects</h2>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-8'>
          <div className='bg-muted p-1 rounded-lg flex gap-1'>
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${activeTab === 'professional'
                ? 'bg-background text-primary shadow-md'
                : 'text-muted-foreground hover:text-white'
                }`}>
              Professional Experience
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${activeTab === 'personal'
                ? 'bg-background text-primary shadow-md'
                : 'text-muted-foreground hover:text-white'
                }`}>
              Side Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-muted p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col justify-between text-dark-bg-foreground'>
              <div>
                <h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
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
                {project.liveLink && <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center hover:underline transition-colors duration-300'>
                  <ExternalLink className='w-4 h-4 mr-1' /> Live Demo
                </a>}
                {project.sourceLink && <a
                  href={project.sourceLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center hover:underline transition-colors duration-300'>
                  <Code className='w-4 h-4 mr-1' /> Source Code
                </a>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
