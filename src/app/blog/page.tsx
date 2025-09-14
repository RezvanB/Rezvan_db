'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

// Sample blog data structure - you can add your content here later
const sampleBlogs = [
  {
    id: 1,
    title: "The EV BnB Model: Building a Peer-to-Peer Charger Sharing Platform from Scratch",
    excerpt: "A comprehensive analysis of the peer-to-peer EV charger sharing model, exploring market validation, technical challenges, and strategic development approaches for building scalable charging infrastructure.",
    date: " April 21, 2025",
    image: "https://wattshare-images.s3.us-east-1.amazonaws.com/pexels-zion-10029874.jpg",
    readingTime: "15 min read",
    author: "Reza Boostani"
  },
  {
    id: 2,
    title: "From Feedback to Feature: How I Turned User Pain into a WattShare Win",
    excerpt: "A real-world story of how user feedback led to a major product improvement for WattShare hosts, boosting engagement, earnings, and network reliability.",
    date: "December 12, 2024",
    image: "https://wattshare-images.s3.us-east-1.amazonaws.com/pexels-mikhail-nilov-6592672.jpg",
    readingTime: "10 min read",
    author: "Reza Boostani"
  },
  {
    id: 3,
    title: "Validating a Product in 30 Days: My Step-by-Step Framework (A WattShare Story)",
    excerpt: "A practical, week-by-week guide to rapidly validating product ideas and features, illustrated with a real WattShare case study.",
    date: "Jan 9, 2025",
    image: "https://wattshare-images.s3.us-east-1.amazonaws.com/pexels-kindelmedia-7054802.jpg",
    readingTime: "12 min read",
    author: "Reza Boostani"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow w-full bg-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-48">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gray-900">Reza</span>
              <span className="text-blue-600"> Boostani</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">Blog</h2>
            <div className="mb-12">
              <h3 className="text-lg sm:text-xl font-medium text-gray-600 mb-2">Insights & Perspectives</h3>
              <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto">
                Discover valuable articles, the latest news, and expert perspectives on product management, EV charging, and the broader tech industry.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sampleBlogs.map((blog) => (
              <Link href={`/blog/${blog.id}`} key={blog.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="h-48 sm:h-56 relative">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority={blog.id === 1}
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 line-clamp-2">{blog.title}</h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 line-clamp-3">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                      <span>{blog.date}</span>
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="h-4 w-4" />
                        <span>{blog.readingTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <ContactSection />
      <div className="mt-40 bg-white">
        <Footer />
      </div>   
    </div>
  );
} 