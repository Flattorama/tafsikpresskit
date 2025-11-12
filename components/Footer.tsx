
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Tafsik Organization • Registered Charity #123456789</p>
        <div className="mt-2 space-x-4">
            <a href="https://tafsik.com/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="https://tafsik.com" className="hover:text-gray-300 transition-colors">Back to tafsik.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
