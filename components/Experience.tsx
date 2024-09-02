'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'CodeAlpha',
      period: '2024 - Present',
      description:
        'Developed a To-do List web applications with pure HTML, CSS, and vanilla JavaScript..',
    },
  ];

  return (
    <section id='experience' className='py-20 bg-muted'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Experience</h2>
        <div className='max-w-3xl mx-auto'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-primary">
              <h3 className='text-xl font-semibold'>{exp.title}</h3>
              <p className='text-muted-foreground'>{exp.company}</p>
              <p className='text-sm text-muted-foreground'>{exp.period}</p>
              <p className='mt-2'>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
