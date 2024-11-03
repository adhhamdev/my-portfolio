export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://adhham.me',
  name: "Adhham Safwan's Portfolio",
  description:
    'Portfolio website of Adhham Safwan, showcasing web development projects and professional experience',
  author: {
    '@type': 'Person',
    name: 'Adhham Safwan',
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adhham Safwan',
  url: 'https://adhham.me',
  image: 'https://adhham.me/profile.jpg',
  sameAs: [
    'https://x.com/AdhhamDev',
    'https://github.com/adhhamdev',
    'https://linkedin.com/in/adhham',
    'https://instagram.com/msmadhhamdev',
  ],
  jobTitle: 'Full Stack Web Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  description:
    'Experienced web developer and undergraduate specializing in modern web technologies.',
  knowsAbout: [
    'Web Development',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
    'Responsive Design',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'BTEC Level 5 HND in Software Engineering',
    educationalLevel: 'Higher National Diploma',
    credentialCategory: 'Software Engineering',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Esoft Metro Campus',
    },
  },
};

export const resumeSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Adhham Safwan - Resume',
  url: 'https://adhham.me/Adhham_Safwan-Resume.pdf',
  author: {
    '@type': 'Person',
    name: 'Adhham Safwan',
  },
  description: 'Professional resume of Adhham Safwan, Full Stack Web Developer',
  encodingFormat: 'application/pdf',
  about: {
    '@type': 'Person',
    name: 'Adhham Safwan',
  },
  keywords:
    'web developer, software engineer, full stack developer, React, Next.js, TypeScript, Node.js',
  dateModified: '2024-11-03',
};
