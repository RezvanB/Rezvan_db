import React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Reza Boostani - Product Manager & Technical Builder | EV Innovation | Toronto",
  description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology. Expert in SaaS, startups, and user-first product development. View portfolio, experience, and projects.",
  keywords: [
    "Reza Boostani",
    "reza boostani",
    "Reza Boostani Toronto",
    "Reza Boostani Product Manager",
    "Reza Boostani EV charging",
    "Reza Boostani portfolio",
    "Reza Boostani McMaster",
    "Reza Boostani WattShare",
    "Reza Boostani Ivy Charging",
    "Reza Boostani ThunderVolt",
    "Reza Boostani Canada",
    "Reza Boostani Ontario",
    "Reza Boostani sustainable technology",
    "Reza Boostani SaaS",
    "Reza Boostani startup",
    "Reza Boostani entrepreneur",
    "Reza Boostani technical builder",
    "Reza Boostani full stack",
    "Reza Boostani Next.js",
    "Reza Boostani React",
    "Reza Boostani TypeScript",
    "Reza Boostani product development",
    "Reza Boostani user research",
    "Reza Boostani product strategy",
    "Reza Boostani climate tech",
    "Reza Boostani electric vehicle",
    "Reza Boostani charging infrastructure",
    "product manager",
    "product owner",
    "technical builder",
    "EV charging",
    "sustainable tech",
    "Toronto",
    "startup",
    "product development",
    "Watt Share",
    "Ivy Charging",
    "ThunderVolt",
    "McMaster University",
    "MTEI",
    "portfolio",
    "SaaS",
    "user research",
    "product strategy",
    "full-stack development",
    "Next.js",
    "React",
    "TypeScript",
    "electric vehicle",
    "climate tech",
    "sustainable mobility",
    "entrepreneur",
    "innovation",
    "technology leader"
  ],
  authors: [{ name: "Reza Boostani", url: "https://www.rezaboostani.com" }],
  creator: "Reza Boostani",
  publisher: "Reza Boostani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.rezaboostani.com'),
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rezaboostani.com",
    title: "Reza Boostani - Product Manager & Technical Builder | EV Innovation | Toronto",
    description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology. Expert in SaaS, startups, and user-first product development.",
    siteName: "Reza Boostani Portfolio",
    images: [
      {
        url: "/reza-profile-2025-v2.jpg",
        width: 800,
        height: 960,
        alt: "Reza Boostani - Product Manager and Technical Builder based in Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Boostani - Product Manager & Technical Builder | EV Innovation | Toronto",
    description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in sustainable technology.",
    images: ["/reza-profile-2025-v2.jpg"],
    creator: "@rezaboostani",
  },
  alternates: {
    canonical: "https://www.rezaboostani.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`bg-transparent text-gray-900 ${dmSans.variable} font-sans`}>
      <head>
        <title>Reza Boostani | Product Manager &amp; Technical Builder | Toronto</title>
        <meta name="description" content="Reza Boostani - Product Manager and Technical Builder based in Toronto. Specializing in EV charging, sustainable technology, SaaS, and startups. View portfolio, experience, and projects." />
        <meta name="keywords" content="Reza Boostani, reza boostani, Reza Boostani Toronto, Reza Boostani Product Manager, Reza Boostani EV charging, Reza Boostani portfolio, Reza Boostani McMaster, Reza Boostani WattShare, Reza Boostani Canada, Reza Boostani Ontario, product manager, technical builder, EV charging, sustainable tech, Toronto, startup, SaaS, entrepreneur" />
        <meta name="author" content="Reza Boostani" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Reza Boostani | Product Manager &amp; Technical Builder | Toronto" />
        <meta property="og:description" content="Reza Boostani - Product Manager and Technical Builder based in Toronto. Specializing in EV charging, sustainable technology, SaaS, and startups." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rezaboostani.com/" />
        <meta property="og:image" content="https://www.rezaboostani.com/reza-profile-2025-v2.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="960" />
        <meta property="og:image:alt" content="Reza Boostani - Product Manager and Technical Builder based in Toronto" />
        <meta property="og:site_name" content="Reza Boostani Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reza Boostani | Product Manager &amp; Technical Builder | Toronto" />
        <meta name="twitter:description" content="Reza Boostani - Product Manager and Technical Builder based in Toronto. Specializing in EV charging, sustainable technology, SaaS, and startups." />
        <meta name="twitter:image" content="https://www.rezaboostani.com/reza-profile-2025-v2.jpg" />
        <meta name="twitter:image:alt" content="Reza Boostani - Product Manager and Technical Builder based in Toronto" />
        <meta name="twitter:creator" content="@rezaboostani" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />
        <meta name="DC.title" content="Reza Boostani - Product Manager & Technical Builder" />
        <meta name="DC.creator" content="Reza Boostani" />
        <meta name="DC.subject" content="Product Management, EV Charging, Sustainable Technology" />
        <meta name="DC.description" content="Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology." />
        <meta name="DC.publisher" content="Reza Boostani" />
        <meta name="DC.contributor" content="Reza Boostani" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://www.rezaboostani.com/" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Toronto, Canada" />
        <meta name="DC.rights" content="Copyright 2024 Reza Boostani" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="subject" content="Product Management, EV Charging, Sustainable Technology" />
        <meta name="classification" content="Portfolio, Professional, Technology" />
        <meta name="category" content="Technology" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="copyright" content="Reza Boostani" />
        <meta name="reply-to" content="reza@rezaboostani.com" />
        <meta name="owner" content="Reza Boostani" />
        <meta name="url" content="https://www.rezaboostani.com" />
        <meta name="identifier-URL" content="https://www.rezaboostani.com" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Reza Boostani Portfolio" />
        <meta name="resource-type" content="Document" />
        <meta name="document-type" content="Public" />
        <meta name="document-classification" content="Business" />
        <meta name="document-rating" content="Safe for Kids" />
        <meta name="revisit" content="7 days" />
        <meta name="robots" content="ALL" />
        <meta name="googlebot" content="ALL" />
        <meta name="slurp" content="ALL" />
        <meta name="msnbot" content="ALL" />
        <meta name="teoma" content="ALL" />
        <meta name="alexa" content="ALL" />
        <meta name="google" content="notranslate" />
        
        <link rel="canonical" href="https://www.rezaboostani.com/" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Reza Boostani" />
      </head>
      
      {/* Structured Data for Person */}
      <Script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Reza Boostani",
            "alternateName": "Reza Boostani",
            "url": "https://www.rezaboostani.com",
            "image": "https://www.rezaboostani.com/reza-profile-2025-v2.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/rezaboostani",
              "https://github.com/rezaboostani",
              "https://twitter.com/rezaboostani"
            ],
            "jobTitle": "Product Manager & Technical Builder",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "alumniOf": {
              "@type": "Organization",
              "name": "McMaster University"
            },
            "knowsAbout": [
              "Product Management",
              "EV Charging",
              "Sustainable Technology",
              "SaaS",
              "Startups",
              "User Research",
              "Product Strategy",
              "Full Stack Development",
              "Next.js",
              "React",
              "TypeScript"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toronto",
              "addressRegion": "Ontario",
              "addressCountry": "Canada"
            },
            "description": "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology."
          })
        }}
      />

      {/* Structured Data for Website */}
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Reza Boostani Portfolio",
            "url": "https://www.rezaboostani.com",
            "description": "Reza Boostani - Product Manager and Technical Builder based in Toronto",
            "author": {
              "@type": "Person",
              "name": "Reza Boostani"
            },
            "publisher": {
              "@type": "Person",
              "name": "Reza Boostani"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.rezaboostani.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Structured Data for Organization */}
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Reza Boostani",
            "url": "https://www.rezaboostani.com",
            "logo": "https://www.rezaboostani.com/reza-profile-2025-v2.jpg",
            "description": "Product Manager and Technical Builder specializing in EV charging and sustainable technology",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toronto",
              "addressRegion": "Ontario",
              "addressCountry": "Canada"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": "English"
            }
          })
        }}
      />
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4EJCV66F7N"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4EJCV66F7N', {
              page_title: 'Reza Boostani Portfolio',
              page_location: 'https://www.rezaboostani.com/',
              custom_map: {
                'custom_dimension1': 'user_type',
                'custom_dimension2': 'page_section'
              }
            });
          `,
        }}
      />
      
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
