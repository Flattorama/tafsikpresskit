
import React from 'react';
import { timelineEvents } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-16">
          Timeline
        </h2>
        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative border-l-2 border-gray-700 ml-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#00BFFF] rounded-full -left-4 ring-8 ring-black">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{event.title}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{event.date}</time>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative flex justify-between items-center w-full">
            <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gray-700 -translate-y-1/2"></div>
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative z-10 text-center">
                 <div className="w-6 h-6 bg-[#00BFFF] rounded-full mx-auto ring-8 ring-black"></div>
                 <p className="mt-4 font-semibold text-white">{event.title}</p>
                 <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
