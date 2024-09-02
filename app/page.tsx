'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Box,
  ChevronDown,
  Cloud,
  Code,
  Cpu,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  GitPullRequest,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Server,
  Terminal,
  Users,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

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

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Tech University',
      period: '2014 - 2016',
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'State College',
      period: '2010 - 2014',
    },
  ];

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
    <div className='min-h-screen bg-background text-foreground'>
      <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b'>
        <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <a href='#home' className='text-2xl font-bold'>
            Adhham Safwan
          </a>
          {isLargeScreen ? (
            <div className='flex space-x-4'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-lg relative overflow-hidden group ${
                    activeSection === item.href.slice(1) ? 'text-primary' : ''
                  }`}
                  onClick={() => setActiveSection(item.href.slice(1))}>
                  {item.name}
                  <motion.span
                    className='absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100'
                    initial={false}
                    animate={{
                      scaleX: activeSection === item.href.slice(1) ? 1 : 0,
                    }}
                  />
                </a>
              ))}
            </div>
          ) : (
            <button
              className='z-50 relative'
              onClick={toggleMenu}
              aria-label='Toggle menu'>
              <AnimatePresence mode='wait'>
                {isMenuOpen ? (
                  <motion.div
                    key='close'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    <X className='w-6 h-6' />
                  </motion.div>
                ) : (
                  <motion.div
                    key='menu'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    <Menu className='w-6 h-6' />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )}
        </nav>
      </header>
      <AnimatePresence>
        {!isLargeScreen && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-40 flex items-center justify-center bg-background/80 backdrop-blur-sm'>
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className='bg-background border rounded-lg shadow-lg p-8'>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`block text-2xl mb-4 relative overflow-hidden group ${
                    activeSection === item.href.slice(1) ? 'text-primary' : ''
                  }`}
                  onClick={() => {
                    toggleMenu();
                    setActiveSection(item.href.slice(1));
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}>
                  {item.name}
                  <motion.span
                    className='absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100'
                    initial={false}
                    animate={{
                      scaleX: activeSection === item.href.slice(1) ? 1 : 0,
                    }}
                  />
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main>
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

        <section id='about' className='py-20'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>About Me</h2>
            <div className='max-w-2xl mx-auto'>
              <p className='mb-4'>
                I&apos;m a passionate full stack developer with over 5 years of
                experience in creating robust and scalable web applications. My
                expertise spans across front-end and back-end technologies, with
                a strong focus on JavaScript ecosystems.
              </p>
              <p>
                I thrive in collaborative environments and am always eager to
                take on new challenges that push the boundaries of what&apos;s
                possible in web development.
              </p>
            </div>
          </div>
        </section>

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

        <section id='contact' className='py-20 bg-muted'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>Contact Me</h2>
            <div className='max-w-md mx-auto'>
              <form onSubmit={(e) => e.preventDefault()} className='space-y-4'>
                <Input type='text' placeholder='Your Name' required />
                <Input type='email' placeholder='Your Email' required />
                <Textarea placeholder='Your Message' required />
                <Button
                  type='submit'
                  className='w-full transition-transform duration-300 hover:scale-105'>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-muted py-8'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p>&copy; 2023 Adhham Safwan. All rights reserved.</p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <a
                href='https://github.com/johndoe'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                <Github className='w-6 h-6' />
              </a>
              <a
                href='https://linkedin.com/in/johndoe'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                <Linkedin className='w-6 h-6' />
              </a>
              <a
                href='mailto:john@example.com'
                className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                <Mail className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
