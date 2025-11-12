
import React from 'react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-16 md:py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          The Short Version
        </h2>
        <div className="mt-6 text-gray-300 space-y-4 text-lg">
            <p>
                Tafsik Organization has applied for an injunction to stop a flag-raising event planned for September 2025 at Toronto City Hall. Our application argues that the approval process conflicts with City policy and that proceeding as scheduled would pose operational and public-safety challenges.
            </p>
            <p>
                We’re asking the court for timely relief so that the City can follow its own rules consistently and equitably. Our goal is straightforward: a predictable, fair process that keeps everyone safe and treats all groups by the same standard.
            </p>
        </div>
        <div className="mt-8 space-x-6">
            <a href="#documents" className="text-[#00BFFF] hover:text-sky-300 font-semibold transition-colors">Read the full release →</a>
            <a href="#timeline" className="text-[#00BFFF] hover:text-sky-300 font-semibold transition-colors">See the timeline →</a>
        </div>
      </div>
    </section>
  );
};

export default Overview;
