
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Media Contact
        </h2>
        <div className="mt-8 space-y-2 text-lg text-gray-300">
            <p className="font-bold text-xl text-white">Amir Epstein</p>
            <p><a href="tel:+11234567890" className="hover:text-[#00BFFF] transition-colors">+1 123 456 7890 (call/text)</a></p>
            <p><a href="mailto:media@tafsik.org" className="hover:text-[#00BFFF] transition-colors">media@tafsik.org</a></p>
            <p className="text-gray-500 text-base mt-2">123 Main Street, Toronto, ON</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/example" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-[#00BFFF] text-black font-bold py-3 px-8 rounded-full hover:bg-sky-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-sky-400">
                Book 10-minute Pre-Brief
            </a>
            <a href="mailto:media@tafsik.org" className="w-full sm:w-auto text-center bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-600">
                Email the Team
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
