
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-black py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-16 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="font-extrabold tracking-tighter text-white font-step-5">
              We’ve Had <span className="text-[#00BFFF]">Enough.</span> Here’s What We’re Doing.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Tafsik has filed for an injunction to halt a planned City Hall flag-raising. We’re asking the court to uphold City policy and protect public safety.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Toronto • September 2025 • Court file: CV-25-12345
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="/Tafsik-Press-Release-Injunction-City-Hall.pdf" download className="w-full sm:w-auto text-center bg-[#00BFFF] text-black font-bold py-3 px-8 rounded-full hover:bg-sky-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-sky-400">
                Download Press Release
              </a>
              <a href="mailto:media@tafsik.org?subject=Interview request – Injunction" className="w-full sm:w-auto text-center bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-600">
                Book an Interview
              </a>
            </div>
             <a href="#documents" className="mt-6 inline-block text-gray-400 hover:text-[#00BFFF] transition-colors">
              View Court Documents →
            </a>
          </div>
          <div className="lg:col-span-2 mt-12 lg:mt-0">
             <div className="relative grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/cityhall/400/500" alt="Toronto City Hall exterior" className="rounded-lg shadow-lg object-cover aspect-[4/5]" loading="eager" />
                <div className="space-y-4">
                    <img src="https://picsum.photos/seed/tafsikevent/400/400" alt="Tafsik event photo" className="rounded-lg shadow-lg object-cover aspect-square" loading="eager" />
                    <img src="https://picsum.photos/seed/spokesperson/400/400" alt="Spokesperson headshot" className="rounded-lg shadow-lg object-cover aspect-square" loading="eager" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
