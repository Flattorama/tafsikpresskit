
import React from 'react';
import { documents } from '../constants';

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        <path d="M10 9a.75.75 0 00-1.5 0v2.586l-1.293-1.293a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l2.5-2.5a.75.75 0 10-1.06-1.06L10.75 11.586V9z" />
    </svg>
);


const Documents: React.FC = () => {
  return (
    <section id="documents" className="py-16 md:py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-12">
          Documents & Statements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {documents.map((doc, index) => (
            <div key={index} className="bg-[#111] border border-gray-800 rounded-lg p-5 flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-white">{doc.title}</h3>
                    <p className="text-sm text-gray-500">{doc.fileName}</p>
                </div>
              <a href={doc.href} download className="flex-shrink-0 ml-4 inline-flex items-center justify-center p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-600">
                <span className="sr-only">Download {doc.title}</span>
                <DownloadIcon className="h-5 w-5 text-[#00BFFF]" />
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">Note: Any sealed or redacted materials will be labeled accordingly.</p>
      </div>
    </section>
  );
};

export default Documents;
