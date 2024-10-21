'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      name: 'JavaScript',
      icon: <i className='devicon-javascript-plain colored text-5xl'></i>,
    },
    {
      name: 'TailwindCSS',
      icon: <i className='devicon-tailwindcss-original colored text-5xl'></i>,
    },
    {
      name: 'Bootstrap',
      icon: <i className='devicon-bootstrap-plain colored text-5xl'></i>,
    },
    {
      name: 'TypeScript',
      icon: <i className='devicon-typescript-plain colored text-5xl'></i>,
    },
    {
      name: 'React.js',
      icon: <i className='devicon-react-original colored text-5xl'></i>,
    },
    {
      name: 'Next.js',
      icon: <i className='devicon-nextjs-plain colored text-5xl'></i>,
    },
    {
      name: 'Node.js',
      icon: <i className='devicon-nodejs-plain colored text-5xl'></i>,
    },
    {
      name: 'Express',
      icon: <i className='devicon-express-original colored text-5xl'></i>,
    },
    {
      name: 'MongoDB',
      icon: <i className='devicon-mongodb-plain colored text-5xl'></i>,
    },
    {
      name: 'Mongoose',
      icon: <i className='devicon-mongoose-original colored text-5xl'></i>,
    },
    {
      name: 'jQuery',
      icon: <i className='devicon-jquery-plain colored text-5xl'></i>,
    },
    {
      name: 'REST APIs',
      icon: <i className='devicon-javascript-plain colored text-5xl'></i>,
    },
    {
      name: 'Git',
      icon: <i className='devicon-git-plain colored text-5xl'></i>,
    },
    {
      name: 'GitHub',
      icon: <i className='devicon-github-original colored text-5xl'></i>,
    },
    {
      name: 'Supabase',
      icon: <i className='devicon-supabase-plain colored text-5xl'></i>,
    },
    {
      name: 'Vercel',
      icon: <i className='devicon-vercel-plain colored text-5xl'></i>,
    },
    {
      name: 'Figma',
      icon: <i className='devicon-figma-plain colored text-5xl'></i>,
    },
    {
      name: 'Framer Motion',
      icon: <i className='devicon-framermotion-original text-5xl'></i>,
    }
  ];

  return (
    <section id='skills' className='py-20 bg-muted'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Skills</h2>
        <div className='max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className='bg-background p-4 rounded-lg shadow-sm text-center flex flex-col items-center justify-center transition-transform duration-300 hover: scale-105'>
              {skill.icon}
              <span className='mt-2'>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
