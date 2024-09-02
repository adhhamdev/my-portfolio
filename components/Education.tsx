'use client';

import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: 'BTEC Level 5 HND in Software Engineering',
      school: 'Esoft Metro Campus',
      period: '2024 - 2025',
    },
    {
      degree: 'Diploma in Information technology',
      school: 'Esoft Metro Campus',
      period: '2023 - 2024',
    },
  ];

  return (
    <section id='education' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Education</h2>
        <div className='max-w-3xl mx-auto'>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-primary">
              <h3 className='text-xl font-semibold'>{edu.degree}</h3>
              <p className='text-muted-foreground'>{edu.school}</p>
              <p className='text-sm text-muted-foreground'>{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
