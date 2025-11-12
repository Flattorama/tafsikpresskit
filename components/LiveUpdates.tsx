
import React, { useState } from 'react';
import { liveUpdates } from '../constants';

const LiveUpdates: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleUpdates = showAll ? liveUpdates : liveUpdates.slice(0, 3);

  return (
    <section id="updates" className="py-16 md:py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-12">
          Live Updates
        </h2>
        <div className="space-y-8">
          {/* X/Twitter Embed Placeholder */}
          <div className="bg-[#111] border border-gray-800 rounded-lg p-5 text-center">
            <p className="text-gray-300">Follow our live thread on X for real-time updates.</p>
            <a 
              href="https://x.com/tafsikorg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-[#00BFFF] text-black font-bold py-2 px-4 rounded-full hover:bg-sky-300 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              @TAFSIKORG
            </a>
          </div>

          {/* Time-stamped updates */}
          <div className="space-y-4">
            {visibleUpdates.map((update, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-sm font-mono text-gray-500 flex-shrink-0 w-20">{update.time}</span>
                <p className="text-gray-300">{update.text}</p>
              </div>
            ))}
          </div>

          {liveUpdates.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#00BFFF] hover:text-sky-300 font-semibold transition-colors"
              >
                {showAll ? 'View fewer updates' : 'View all updates'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveUpdates;
