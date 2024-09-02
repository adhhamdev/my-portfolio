'use client';

import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'E-commerce Platform',
      description:
        'A full-stack e-commerce solution with real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveLink: 'https://example-ecommerce.com',
      sourceLink: 'https://github.com/yourusername/ecommerce-platform',
    },
    {
      name: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Auth0'],
      liveLink: 'https://example-taskmanager.com',
      sourceLink: 'https://github.com/yourusername/task-manager',
    },
    {
      name: 'Weather Dashboard',
      description:
        'A responsive weather dashboard with location-based forecasts.',
      technologies: ['React', 'OpenWeatherMap API', 'Chart.js'],
      liveLink: 'https://example-weather.com',
      sourceLink: 'https://github.com/yourusername/weather-dashboard',
    },
  ];

  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Projects</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-muted p-6 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105'>
              <h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
              <p className='text-muted-foreground mb-4'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='bg-primary/10 text-primary px-2 py-1 rounded-full text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex space-x-4'>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-primary hover:underline transition-colors duration-300'>
                  <ExternalLink className='w-4 h-4 mr-1' /> Live Demo
                </a>
                <a
                  href={project.sourceLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-primary hover:underline transition-colors duration-300'>
                  <Code className='w-4 h-4 mr-1' /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
