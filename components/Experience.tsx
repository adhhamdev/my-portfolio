'use client';
import { Building2 } from 'lucide-react';
import Image from 'next/image';
import { Timeline } from './ui/timeline';

function ExperienceItem({
  title,
  company,
  href,
  description,
  logo,
  logoRound,
  logoLightBg,
}: {
  title: string;
  company: string;
  href: string;
  description: string;
  logo?: string;
  logoRound?: boolean;
  logoLightBg?: boolean;
}) {
  return (
    <div className='flex gap-4'>
      <div
        className={`shrink-0 w-14 h-14 overflow-hidden border border-border/60 flex items-center justify-center ${logoRound ? 'rounded-full' : 'rounded-xl'} ${logoLightBg ? 'bg-white' : 'bg-background'}`}>
        {logo ? (
          <Image
            src={logo}
            alt={`${company} logo`}
            width={56}
            height={56}
            className={`w-full h-full ${logoRound ? 'object-cover' : 'object-contain p-1.5'}`}
          />
        ) : (
          <Building2 className='w-6 h-6 text-muted-foreground' aria-hidden />
        )}
      </div>
      <div className='flex flex-col gap-2 min-w-0'>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p className='text-accent'>
          <a href={href} target='_blank' rel='noopener noreferrer'>
            {company}
          </a>
        </p>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      title: '2026 - Present',
      content: (
        <div className='flex flex-col gap-16'>
          <ExperienceItem
            title='Co-Founder & CTO'
            company='Orbitra Tech'
            href='https://orbitratech.net'
            logo='/orbitra_icon.png'
            logoLightBg
            description='Co-founded Orbitra Tech (Pvt) Ltd, a full-service digital studio in Beruwala, Sri Lanka. Lead engineering across client websites, mobile apps, e-commerce stores, and in-house products — including Worknet, GemFort, and Ceylonbay — using Next.js, Expo, Firebase, Supabase, and Payload CMS. Own technical direction, architecture, and production delivery for SME digital transformation projects.'
          />
        </div>
      ),
    },
    {
      title: '2025 - Present',
      content: (
        <div className='flex flex-col gap-16'>
          <ExperienceItem
            title='Full Stack Developer'
            company='UZEE Global'
            href='https://www.linkedin.com/company/uzee-global'
            logo='/uzeeglobal-logo.jpeg'
            description='Joined UZEE Global as a solo developer, building production-grade web applications for clients using Next.js, TypeScript, TailwindCSS, Supabase, and Vercel. I focus on delivering highly optimized, SEO-friendly, and responsive solutions. Currently leading the development of a real-time Event Management platform for an Australian client, including features like live chat and seamless user experience.'
          />
          <ExperienceItem
            title='Low-Code Mobile App Developer'
            company='OncsCare'
            href='https://www.linkedin.com/company/oncs-digital'
            logo='/oncscare-icon.PNG'
            logoRound
            description='Professionally designed and developed the patient mobile application and clinician web admin dashboard for OncsCare, a UK-based cancer care platform in partnership with NHS UK. Utilized Firebase, Firestore, and Firebase Cloud Functions to build a secure and scalable backend infrastructure. This system empowers clinicians to remotely monitor cancer patients and track their symptoms, significantly reducing the need for frequent in-person visits. By streamlining remote care, OncsCare addresses the challenge of clinician availability and enhances patient outcomes through timely, data-driven interventions.'
          />
        </div>
      ),
    },
    {
      title: '2024 - 2025',
      content: (
        <div className='flex flex-col gap-16'>
          <ExperienceItem
            title='Web Developer - Intern'
            company='CodeSec Global'
            href='https://codesec.global'
            logo='/codesec-global-logo.svg'
            description='Contributed to the development of client web applications using modern technologies, ensuring high-quality code and adherence to best practices.'
          />
        </div>
      ),
    },
    {
      title: '2023 - 2023',
      content: (
        <div className='flex flex-col gap-16'>
          <ExperienceItem
            title='Web Developer - Intern'
            company='CodeAlpha'
            href='https://codealpha.com'
            description='Developed a To-do List web application using HTML, CSS, and JavaScript, focusing on user experience and performance optimization.'
          />
        </div>
      ),
    },
  ];

  return (
    <section id='experience' className='py-20 bg-muted text-dark-bg-foreground'>
      <Timeline data={experiences} />
    </section>
  );
}
