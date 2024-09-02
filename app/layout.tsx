import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adhham Safwan',
  description: 'Portfolio of Adhham Safwan',
  keywords: [
    'portfolio',
    'web developer',
    'software engineer',
    'Adhham Safwan',
  ],
  authors: [{ name: 'Adhham Safwan' }],
  creator: 'Adhham Safwan',
  publisher: 'Adhham Safwan',
  openGraph: {
    title: "Adhham Safwan's Portfolio",
    description: 'Explore the work and projects of Adhham Safwan',
    url: 'https://adhhamdev.vercel.app',
    siteName: 'Adhham Safwan',
    images: [
      {
        url: 'https://adhham-safwan-portfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adhham Safwan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adhham Safwan',
    description: 'Explore the work and projects of Adhham Safwan',
    creator: '@adhham_safwan',
    images: ['https://adhham-safwan-portfolio.com/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
