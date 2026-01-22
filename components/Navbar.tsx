
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
  currentPage: string;
  setPage: (page: 'home' | 'book' | 'community' | 'masterclass' | 'mentorship' | 'monarh' | 'redcarpet' | 'events' | 'meetup' | 'concierge' | 'blog') => void;
  onMembershipClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, currentPage, setPage, onMembershipClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Početna' },
    { id: 'blog', label: 'Blog' },
    { id: 'events', label: 'Events' },
    { id: 'monarh', label: 'Monarh' },
    { id: 'mentorship', label: 'Mentorship' },
    { id: 'masterclass', label: 'MasterClass' },
    { id: 'community', label: 'Zajednica' },
    { id: 'book', label: 'Knjiga' }
  ];

  const handlePageChange = (id: any) => {
    setPage(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-[1500ms] px-8 md:px-12 lg:px-24 py-8 md:py-12 flex justify-between items-center ${
          scrolled ? 'bg-[#050505]/95 backdrop-blur-3xl py-6 md:py-8 border-b border-white/5 shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="flex flex-col items-start cursor-pointer group" onClick={() => handlePageChange('home')}>
          <span className="serif text-2xl md:text-4xl tracking-[0.2em] font-light gold-accent uppercase transition-all duration-1000 group-hover:tracking-[0.25em]">GENTLEMEN'S CLUB</span>
          <span className="text-[12px] md:text-[14px] tracking-[1.2em] uppercase opacity-20 group-hover:opacity-60 transition-opacity duration-1000 ml-1">Serbia</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-12 xl:gap-20 text-[16px] uppercase tracking-[0.6em] font-light">
          {menuItems.map(item => (
            <button 
              key={item.id}
              onClick={() => handlePageChange(item.id as any)} 
              className={`relative py-2 group hover:text-white transition-colors duration-[800ms] ${currentPage === item.id ? 'text-white' : 'opacity-30 hover:opacity-100'}`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-[#c5a059] transition-all duration-1000 ${currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </div>

        {/* Hamburger Trigger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 z-[70] group"
        >
          <span className={`h-[1px] bg-[#c5a059] transition-all duration-500 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8 opacity-60 group-hover:opacity-100'}`}></span>
          <span className={`h-[1px] bg-[#c5a059] transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'w-6 opacity-40 group-hover:opacity-100'}`}></span>
          <span className={`h-[1px] bg-[#c5a059] transition-all duration-500 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8 opacity-60 group-hover:opacity-100'}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-[#050505] transition-all duration-[1000ms] flex items-center justify-center ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-12 text-center p-12">
          {menuItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handlePageChange(item.id as any)}
              className="serif text-3xl md:text-5xl font-light italic gold-accent hover:text-white transition-all duration-700 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
          <div className="w-px h-24 bg-gradient-to-b from-[#c5a059]/40 to-transparent mt-12 opacity-20"></div>
          <span className="text-[8px] tracking-[1em] uppercase opacity-20 gold-accent">Gentlemen's Club Serbia</span>
        </div>
      </div>
    </>
  );
};
