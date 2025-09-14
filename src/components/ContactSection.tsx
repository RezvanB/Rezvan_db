import { trackPortfolioInteraction } from "@/utils/analytics";

export default function ContactSection() {
  const handleContactClick = (method: string) => {
    trackPortfolioInteraction.contactClick(method);
  };

  return (
    <section id="contact" className="py-8 sm:py-16 px-2 sm:px-4 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          talk shop?
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8">
          I&apos;m open to collaborations, questions, or coffee.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="mailto:r.boostani.93@gmail.com"
            onClick={() => handleContactClick('email')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/rezaboostani"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleContactClick('linkedin')}
            className="border-2 border-gray-300 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Marshico"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleContactClick('github')}
            className="border-2 border-gray-300 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
} 