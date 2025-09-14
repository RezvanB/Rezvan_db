export default function AboutSection() {
  return (
    <section id="about" className="py-8 sm:py-16 px-2 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4">
            The Story
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Product Management, Technology and Entrepreneurship
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
            With my roots in engineering, I found my passion in turning big-picture strategy into a product people can actually use. My approach to product management is hands-on—I enjoy digging into the system architecture with engineers just as much as I enjoy validating ideas with users. My ultimate drive is to build and launch products that truly matter.

My time in the startup world taught me how to do a bit of everything—from securing funding to launching first versions. I learned that the best products are born from a genuine curiosity about user problems and the technical skill to solve them. I&apos;m at my best in dynamic environments where I can jump between user interviews, coding, and leading my team toward a common goal. My focus is clear: I want to help build a future with technology that is both sustainable and genuinely centered on people.
            </p>
            
         
          </div>
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              What I Bring
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Strategic Product Leadership</h4>
                  <p className="text-xs sm:text-sm">From roadmap to launch, with deep market understanding</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-xs sm:text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Full-Stack Development</h4>
                  <p className="text-xs sm:text-sm">Write code, understand architecture, ship faster</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-xs sm:text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">User Research & Validation</h4>
                  <p className="text-xs sm:text-sm">300+ interviews, rapid prototyping, PMF validation</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-xs sm:text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Startup & Fundraising</h4>
                  <p className="text-xs sm:text-sm">Secured funding, built partnerships, scaled teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 