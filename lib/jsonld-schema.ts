export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: "Adhham Safwan's Portfolio",
  url: 'https://adhham.me',
  description:
    'Explore the innovative projects and professional experiences of Adhham Safwan, a skilled web developer and software engineer.',
  author: {
    '@type': 'Person',
    name: 'Adhham Safwan',
  },
  publisher: {
    '@type': 'Person',
    name: 'Adhham Safwan',
  },
  inLanguage: 'en-US',
  copyrightYear: new Date().getFullYear(),
  image: {
    '@type': 'ImageObject',
    url: 'https://adhham.me/opengraph-image.svg',
    width: '1200',
    height: '630',
    caption: "Adhham Safwan's Portfolio",
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adhham Safwan',
  givenName: 'Adhham',
  familyName: 'Safwan',
  url: 'https://adhham.me',
  image: {
    '@type': 'ImageObject',
    url: 'https://adhham.me/profile.jpg',
    width: '800',
    height: '800',
  },
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
    url: 'https://adhham.me',
  },
  description:
    'Experienced web developer and undergraduate specializing in modern web technologies.',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Esoft Metro Campus',
    url: 'https://esoft.lk',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'BTEC Level 5 HND in Software Engineering',
      educationalLevel: 'Higher National Diploma',
      recognizedBy: {
        '@type': 'EducationalOrganization',
        name: 'Esoft Metro Campus',
        url: 'https://esoft.lk',
      },
    },
  ],
  knowsAbout: [
    {
      '@type': 'Thing',
      name: 'Web Development',
    },
    {
      '@type': 'Thing',
      name: 'JavaScript',
    },
    {
      '@type': 'Thing',
      name: 'TypeScript',
    },
    {
      '@type': 'Thing',
      name: 'React.js',
    },
    {
      '@type': 'Thing',
      name: 'Next.js',
    },
    {
      '@type': 'Thing',
      name: 'Node.js',
    },
    {
      '@type': 'Thing',
      name: 'Full Stack Development',
    },
    {
      '@type': 'Thing',
      name: 'Frontend Development',
    },
    {
      '@type': 'Thing',
      name: 'Backend Development',
    },
    {
      '@type': 'Thing',
      name: 'Responsive Design',
    },
  ],
};

export const resumeSchema = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  name: 'Adhham Safwan - Resume',
  url: 'https://adhham.me/Adhham_Safwan-Resume.pdf',
  author: {
    '@type': 'Person',
    name: 'Adhham Safwan',
    url: 'https://adhham.me',
  },
  description: 'Professional resume of Adhham Safwan, Full Stack Web Developer',
  encodingFormat: 'application/pdf',
  dateModified: '2024-11-03',
  about: {
    '@type': 'Person',
    name: 'Adhham Safwan',
    jobTitle: 'Full Stack Web Developer',
  },
  keywords: [
    'web developer',
    'software engineer',
    'full stack developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
  ],
};

export const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Adhham Safwan',
    alternateName: 'AdhhamDev',
    description:
      'Experienced web developer and undergraduate specializing in modern web technologies.',
    image: 'https://adhham.me/profile.jpg',
    url: 'https://adhham.me',
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
      url: 'https://adhham.me',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Esoft Metro Campus',
      url: 'https://esoft.lk',
    },
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
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://adhham.me',
      },
    ],
  },
};
