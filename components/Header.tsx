
import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import type { NavLink } from '../types';

const TafsikLogo: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0V30H20V70H50V100H80V0H50Z" fill="#00BFFF"/>
    <path d="M45 45L55 55M55 45L45 55" stroke="white" strokeWidth="4"/>
  </svg>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const NavLinks: React.FC<{ items: NavLink[], mobile?: boolean }> = ({ items, mobile = false }) => (
    items.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className={`
          ${mobile ? 'block text-2xl py-4' : 'text-sm font-medium'}
          ${activeSection === link.href.substring(1) && !mobile ? 'text-[#00BFFF]' : 'text-gray-300 hover:text-white'}
          transition-colors duration-200
        `}
      >
        {link.label}
      </a>
    ))
  );

  return (
    <header className="bg-[#0B0B0B]/80 backdrop-blur-sm sticky top-[44px] z-40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="https://tafsik.com" className="flex-shrink-0" aria-label="Tafsik Home">
            <TafsikLogo />
          </a>
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks items={navLinks} />
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0B0B0B] z-50 lg:hidden flex flex-col items-center justify-center text-center">
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-6 p-2 text-gray-400">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <NavLinks items={navLinks.filter(l => ['#overview', '#documents', '#media', '#contact'].includes(l.href))} mobile />
        </div>
      )}
    </header>
  );
};

export default Header;
