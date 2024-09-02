'use client';

import { motion } from 'framer-motion';
import {
  Box,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  GitPullRequest,
  Globe,
  Server,
  Terminal,
  Users,
} from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', icon: <Terminal className='w-6 h-6' /> },
    { name: 'TypeScript', icon: <Terminal className='w-6 h-6' /> },
    { name: 'React', icon: <Cpu className='w-6 h-6' /> },
    { name: 'Next.js', icon: <Cpu className='w-6 h-6' /> },
    { name: 'Node.js', icon: <Server className='w-6 h-6' /> },
    { name: 'Express', icon: <Server className='w-6 h-6' /> },
    { name: 'MongoDB', icon: <Database className='w-6 h-6' /> },
    { name: 'PostgreSQL', icon: <Database className='w-6 h-6' /> },
    { name: 'GraphQL', icon: <Globe className='w-6 h-6' /> },
    { name: 'REST APIs', icon: <Globe className='w-6 h-6' /> },
    { name: 'AWS', icon: <Cloud className='w-6 h-6' /> },
    { name: 'Docker', icon: <Box className='w-6 h-6' /> },
    { name: 'Git', icon: <GitBranch className='w-6 h-6' /> },
    { name: 'CI/CD', icon: <GitPullRequest className='w-6 h-6' /> },
    { name: 'Agile Methodologies', icon: <Users className='w-6 h-6' /> },
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
