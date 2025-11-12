
import React from 'react';
import { mediaAssets } from '../constants';

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v.008l.008.008.012.011.016.012.02.012.024.012.028.011.032.011.036.01.04.008.044.008.048.007.052.006.056.005.06.004.064.004.068.003.072.002.076.002.08.001.084.001h.092a.75.75 0 010 1.5H9.25V10a.75.75 0 01-1.5 0V5.25H3.5a.75.75 0 010-1.5h4.414L10 1.59l2.086 2.086h4.414a.75.75 0 010 1.5H12.25V10a.75.75 0 01-1.5 0V5.25h-.008l-.008-.001-.012-.001-.016-.002-.02-.002-.024-.003-.028-.003-.032-.004-.036-.004-.04-.005-.044-.005-.048-.006-.052-.007-.056-.008-.06-.008-.064-.009-.068-.01-.072-.012l-.004-.002z" clipRule="evenodd" />
        <path d="M3.5 6.75a.75.75 0 00-1.5 0v7.5c0 1.657 1.343 3 3 3h8a3 3 0 003-3v-7.5a.75.75 0 00-1.5 0v7.5a1.5 1.5 0 01-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5v-7.5z" />
    </svg>
);


const MediaAssets: React.FC = () => {
  return (
    <section id="media" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-12">
          Media Assets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaAssets.map((asset, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-[#111] border border-gray-800">
                <img src={asset.imgSrc} alt={asset.title} className="aspect-square object-cover w-full group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="font-semibold text-white">{asset.title}</h3>
                    <p className="text-sm text-gray-400">{asset.description}</p>
                    <a href={asset.href} download className="mt-2 inline-flex items-center gap-2 text-sm text-[#00BFFF] hover:text-sky-300 font-bold">
                        <DownloadIcon className="w-4 h-4" />
                        Download
                    </a>
                </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">Usage: Free for editorial coverage of this story. Credit “Tafsik.”</p>
      </div>
    </section>
  );
};

export default MediaAssets;
