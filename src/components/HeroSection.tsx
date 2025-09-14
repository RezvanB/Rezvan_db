import Image from "next/image";

// Add a cache buster that changes on each deployment
const CACHE_BUSTER = `?v=${process.env.VERCEL_GIT_COMMIT_SHA || Date.now()}`;

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 px-0 sm:px-0 lg:px-0 bg-white overflow-hidden w-full">
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/pexels-daniel-andraski-197681005-11554666.jpg"
          alt="Background - Reza Boostani Portfolio"
          width={3840}
          height={2460}
          quality={90}
          className="w-full h-full object-cover object-center opacity-5"
        />
        <div className="absolute inset-0 w-full h-full bg-white/70" />
      </div>
      
      {/* Centered content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 bg-white/95">
        <div className="flex flex-col lg:flex-row items-center justify-between shadow-lg p-4 sm:p-6 lg:p-8 gap-6 sm:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <header>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Business outcomes start with the right product decisions.{" "}
                <span className="text-blue-600">I help make those.</span>
              </h1>
            </header>
            
            <div itemScope itemType="https://schema.org/Person">
              <meta itemProp="name" content="Reza Boostani" />
              <meta itemProp="jobTitle" content="Product Manager & Technical Builder" />
              <meta itemProp="address" content="Toronto, Ontario, Canada" />
              <meta itemProp="knowsAbout" content="Product Management, EV Charging, Sustainable Technology, SaaS, Startups" />
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl lg:mx-0 mx-auto font-medium" itemProp="description">
                <strong>Reza Boostani</strong> - Product Management & Entrepreneurship 
              </p>
              
              <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl lg:mx-0 mx-auto">
                Based in <strong>Toronto, Canada</strong>
              </p>
            </div>
            
            <nav className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#work"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                aria-label="View Reza Boostani's work portfolio and projects"
              >
                See What I&apos;ve Built
              </a>
              <a
                href="#about"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                aria-label="Learn more about Reza Boostani's background and experience"
              >
                Explore the Portfolio
              </a>
            </nav>
          </div>
          
          <div className="flex-1 flex rounded justify-center lg:justify-end">
            <figure>
              <Image
                src={"/reza-profile-2025-v2.jpg" + CACHE_BUSTER}
                alt="Reza Boostani - Product Manager and Technical Builder based in Toronto, specializing in EV charging and sustainable technology. Professional headshot of Reza Boostani."
                width={850}
                height={1200}
                quality={95}
                className="w-80 h-132 sm:w-100 sm:h-132 rounded border-white border-4 object-cover border-0 border-gray-200 shadow-lg"
                priority
                loading="eager"
                fetchPriority="high"
                itemProp="image"
              />
              <figcaption className="sr-only">
                Reza Boostani - Product Manager and Technical Builder based in Toronto
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
} 