import type { Metadata } from "next";
import Script from "next/script"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adhham Safwan | Web Developer & Software Engineer",
  description:
    "Experienced web developer and software engineer specializing in modern web technologies. Explore my portfolio showcasing innovative projects and professional experiences.",
  keywords: [
    "portfolio",
    "web developer",
    "software engineer",
    "Adhham Safwan",
    "frontend development",
    "backend development",
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "responsive design",
  ],
  authors: [{ name: "Adhham Safwan", url: "https://adhham.vercel.app" }],
  creator: "Adhham Safwan",
  publisher: "Adhham Safwan",
  openGraph: {
    title: "Adhham Safwan | Web Developer & Software Engineer",
    description:
      "Explore the innovative projects and professional experiences of Adhham Safwan, a skilled web developer and software engineer.",
    url: "https://adhham.vercel.app",
    siteName: "Adhham Safwan Portfolio",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Adhham Safwan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhham Safwan | Web Developer & Software Engineer",
    description:
      "Explore the innovative projects and professional experiences of Adhham Safwan, a skilled web developer and software engineer.",
    creator: "@AdhhamDev",
    site: "@AdhhamDev",
    images: ["/opengraph-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://adhham.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <Script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Adhham Safwan",
              "url": "https://adhham.vercel.app",
              "sameAs": [
                "https://x.com/AdhhamDev",
                "https://github.com/adhhamdev"
              ],
              "jobTitle": "Web Developer & Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Experienced web developer and software engineer specializing in modern web technologies."
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
