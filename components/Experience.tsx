'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      period: '2020 - Present',
      description:
        'Led development of scalable web applications using React, Node.js, and AWS.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2018 - 2020',
      description:
        'Developed and maintained multiple client websites and web applications.',
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      period: '2016 - 2018',
      description:
        'Assisted in the development of company website and internal tools.',
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
