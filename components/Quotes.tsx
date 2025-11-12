
import React from 'react';
import { quotes } from '../constants';

const Quotes: React.FC = () => {
  return (
    <section id="quotes" className="py-16 md:py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-12">
          Key Quotes
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {quotes.map((quote, index) => (
            <figure key={index}>
              <blockquote className="border-l-4 border-[#00BFFF] pl-6">
                <p className="text-xl md:text-2xl font-medium text-white italic">
                  “{quote.text}”
                </p>
              </blockquote>
              <figcaption className="mt-4 text-right text-gray-400">
                — {quote.author}, <span className="text-gray-500">{quote.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
