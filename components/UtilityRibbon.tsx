
import React from 'react';

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const UtilityRibbon: React.FC = () => {
  return (
    <div className="bg-black text-white text-xs sticky top-0 z-50 h-[44px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        <div className="flex-grow text-center lg:text-left">
          <span className="hidden sm:inline">Media contact: </span>
          <a href="mailto:media@tafsik.org" className="hover:text-[#00BFFF] transition-colors">media@tafsik.org</a>
          <span className="mx-2 hidden md:inline"> • </span>
          <a href="tel:+11234567890" className="hover:text-[#00BFFF] transition-colors hidden md:inline">+1 123 456 7890</a>
        </div>
        <a 
          href="/Tafsik-Press-Release-Injunction-City-Hall.pdf" 
          download
          className="flex-shrink-0 flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-1.5 px-3 rounded-2xl transition-colors text-xs"
        >
          <DownloadIcon className="h-4 w-4" />
          <span>Download PDF</span>
        </a>
      </div>
    </div>
  );
};

export default UtilityRibbon;
