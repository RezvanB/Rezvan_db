import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reza Boostani - Product Manager & Technical Builder | Toronto, Canada",
  description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology. Expert in SaaS, startups, and user-first product development.",
  keywords: [
    "Reza Boostani",
    "reza boostani",
    "Reza Boostani Toronto",
    "Reza Boostani Product Manager",
    "Reza Boostani EV charging",
    "Reza Boostani portfolio",
    "Reza Boostani McMaster",
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
    "Reza Boostani charging infrastructure"
  ],
  openGraph: {
    title: "Reza Boostani - Product Manager & Technical Builder | Toronto",
    description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology.",
    url: "https://www.rezaboostani.com/reza-boostani",
    type: "profile",
    images: ["/reza-profile-2025-v2.jpg"],
  },
  alternates: {
    canonical: "https://www.rezaboostani.com/reza-boostani",
  },
};

export default function RezaBoostaniPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Reza Boostani
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8">
              Product Manager & Technical Builder
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Based in <strong>Toronto, Canada</strong>, specializing in <strong>EV charging</strong> and <strong>sustainable technology</strong>. 
              Expert in <strong>SaaS</strong>, <strong>startups</strong>, and user-first product development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#work"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                View Portfolio
              </Link>
              <Link
                href="/#contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Reza Boostani
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <strong>Reza Boostani</strong> is a passionate product manager and technical builder 
                  with expertise in <strong>electric vehicle charging</strong> and <strong>sustainable technology</strong>.
                </p>
                <p>
                  Based in <strong>Toronto, Ontario, Canada</strong>, Reza specializes in building 
                  user-first products that drive business outcomes. With experience in <strong>SaaS</strong>, 
                  <strong>startups</strong>, and <strong>product development</strong>, Reza brings a unique 
                  blend of technical and business acumen to every project.
                </p>
                <p>
                  Reza&apos;s work focuses on <strong>climate tech</strong> and <strong>sustainable mobility</strong>, 
                  with particular expertise in <strong>EV charging infrastructure</strong> and 
                  <strong>renewable energy solutions</strong>.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/reza-profile-2025-v2.jpg"
                alt="Reza Boostani - Product Manager and Technical Builder based in Toronto"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• User Research & Strategy</li>
                <li>• Product Development</li>
                <li>• SaaS Product Management</li>
                <li>• Startup Product Strategy</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">EV Charging & Sustainable Tech</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• EV Charging Infrastructure</li>
                <li>• Sustainable Technology</li>
                <li>• Climate Tech Solutions</li>
                <li>• Renewable Energy</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Full Stack Development</li>
                <li>• Next.js & React</li>
                <li>• TypeScript</li>
                <li>• Technical Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Projects by Reza Boostani
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">WattShare</h3>
                <p className="text-gray-700 mb-4">
                  EV charging network platform connecting drivers with available charging stations.
                </p>
                <Link
                  href="/case-studies/watt-share"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ivy Charging</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive EV charging solution for commercial and residential properties.
                </p>
                <Link
                  href="/case-studies/ivy-charging"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">ThunderVolt</h3>
                <p className="text-gray-700 mb-4">
                  Portable battery solutions for sustainable energy storage and distribution.
                </p>
                <Link
                  href="/case-studies/thundervolt"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Work with Reza Boostani
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to build the next generation of sustainable technology products? 
            Let&apos;s discuss your project and how Reza can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/#work"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 