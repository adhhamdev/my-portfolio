import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-muted py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p>
            &copy; {new Date().getFullYear()} Adhham Safwan. All rights
            reserved.
          </p>
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <a
              href='https://github.com/adhhamdev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors duration-300'>
              <Github className='w-6 h-6' />
            </a>
            <a
              href='https://linkedin.com/in/adhham'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors duration-300'>
              <Linkedin className='w-6 h-6' />
            </a>
            <a
              href='https://twitter.com/AdhhamDev'
              target='_blank'
              className='text-muted-foreground hover:text-primary transition-colors duration-300'>
              <i className='devicon-twitter-original text-2xl'></i>
            </a>
            <a
              href='https://instagram.com/msmadhhamdev'
              target='_blank'
              className='text-muted-foreground hover:text-primary transition-colors duration-300'>
              <Instagram className='w-6 h-6' />
            </a>
            <a
              href='mailto:john@msmadhhamg@gmail.com'
              target='_blank'
              className='text-muted-foreground hover:text-primary transition-colors duration-300'>
              <Mail className='w-6 h-6' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
