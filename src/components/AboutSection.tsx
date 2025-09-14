export default function AboutSection() {
  return (
    <section id="about" className="py-8 sm:py-16 px-2 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            UX Design and Strategy Leadership
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
              Hi, I'm Rezvan.
            </p>
            <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
              I'm a UX design and strategy lead at Amazon talent management and development technology, leading design initiatives related to AI experiences.
            </p>
            <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
              I develop cross-organizational goals and strategies, lead projects from concept to execution, and deliver impactful solutions for complex, ambiguous problems.
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
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">UX Design Leadership</h4>
                  <p className="text-xs sm:text-sm">Leading design initiatives for AI experiences at Amazon</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-xs sm:text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Strategic Planning</h4>
                  <p className="text-xs sm:text-sm">Cross-organizational goals and strategy development</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-xs sm:text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Project Leadership</h4>
                  <p className="text-xs sm:text-sm">Leading projects from concept to execution</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-xs sm:text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Complex Problem Solving</h4>
                  <p className="text-xs sm:text-sm">Delivering impactful solutions for ambiguous challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 