
import React from 'react';
import { quickFacts } from '../constants';

const QuickFacts: React.FC = () => {
  return (
    <section id="quick-facts" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-12">
          Quick Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-[#111] p-6 rounded-lg border border-gray-800">
              <h3 className="font-bold text-[#00BFFF]">{fact.title}</h3>
              <p className="mt-2 text-gray-300">{fact.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
