'use client';

import { Inter } from "next/font/google";
import { Timeline } from './ui/timeline';

const inter = Inter({ subsets: ["latin"] });

function ExperienceItem({ title, company, href, description }: { title: string, company: string, href: string, description: string }) {
  return (
    <div className='flex flex-col gap-16'>
    <div className='flex flex-col gap-2'>
     <h3 className='text-2xl font-bold'>{title}</h3>
     <p className='text-accent'>
       <a  href={href} target='_blank' rel='noopener noreferrer'>{company}</a>
     </p>
     <p className='text-sm text-muted-foreground'>
       {description}
     </p>
   </div>
  </div>
  )
}

export default function Experience() {
  const experiences = [
    {
      title: '2025 - Present',
      content: 
      <div className='flex flex-col gap-16'>
        <ExperienceItem title='Full Stack Developer' company='UZEE Global' href='https://www.linkedin.com/company/uzee-global' description='Joined UZEE Global as a solo developer, building production-grade web applications for clients using Next.js, TypeScript, TailwindCSS, Supabase, and Vercel. I focus on delivering highly optimized, SEO-friendly, and responsive solutions. Currently leading the development of a real-time Event Management platform for an Australian client, including features like live chat and seamless user experience.' />
        <ExperienceItem title='Low-Code Mobile App Developer' company='OncsCare' href='https://www.linkedin.com/company/oncs-digital' description='Designed and developed the patient mobile application and clinician web admin dashboard for OncsCare, a UK-based cancer care platform in partnership with NHS UK. This system empowers clinicians to remotely monitor cancer patients and track their symptoms, significantly reducing the need for frequent in-person visits. By streamlining remote care, OncsCare addresses the challenge of clinician availability and enhances patient outcomes through timely, data-driven interventions.' />
      </div>
    },
    {
      title: '2024 - 2025',
      content: 
      <div className='flex flex-col gap-16'>
        <ExperienceItem title='Web Developer - Intern' company='CodeSec Global' href='https://codesec.global' description='Contributed to the development of client web applications using modern technologies, ensuring high-quality code and adherence to best practices.' />
      </div>
    },
    {
      title: '2023 - 2023',
      content: 
      <div className='flex flex-col gap-16'>
        <ExperienceItem title='Web Developer - Intern' company='CodeAlpha' href='https://codealpha.com' description='Developed a To-do List web application using HTML, CSS, and JavaScript, focusing on user experience and performance optimization.' />
      </div>
    },
  ];

  return (
    <section id='experience' className='py-20 bg-muted text-dark-bg-foreground'>
      <Timeline data={experiences} />
    </section>
  );
}
