
import React from 'react';
import { faqItems } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details key={index} className="bg-[#111] border border-gray-800 rounded-lg p-5 group" name="faq">
              <summary className="flex justify-between items-center font-semibold text-white cursor-pointer list-none">
                {item.question}
                <span className="transition-transform duration-300 group-open:rotate-45">
                    <svg className="w-5 h-5 text-[#00BFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-400">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
