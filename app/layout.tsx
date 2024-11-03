import { personSchema, resumeSchema, websiteSchema } from "@/lib/jsonld-schema";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://adhham.me"),
  title: "Adhham Safwan | Full Stack Web Developer",
  category: "Technology, Lifestyle, Education",
  appleWebApp: {
    capable: true,
    title: 'Adhham Safwan',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/icon.jpeg',
    ],
  },
  applicationName: "Adhham Safwan",
  description:
    "Experienced web developer and undergrauate specializing in modern web technologies. Explore my portfolio showcasing innovative projects and professional experiences.",
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
  authors: [{ name: "Adhham Safwan", url: "/" }],
  creator: "Adhham Safwan",
  publisher: "Adhham Safwan",
  openGraph: {
    title: "Adhham Safwan | Full Stack Web Developer",
    description:
      "Explore the innovative projects and professional experiences of Adhham Safwan, a skilled web developer and software engineer.",
    url: "/",
    siteName: "Adhham Safwan's Portfolio",
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
    title: "Adhham Safwan | Full Stack Web Developer",
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema, resumeSchema]) }} />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
