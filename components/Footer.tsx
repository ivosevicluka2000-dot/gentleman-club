
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-48 pb-16 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-24 mb-64">
          <div className="md:col-span-6 space-y-16">
            <div className="flex flex-col">
              <span className="serif text-4xl md:text-5xl tracking-[0.1em] font-light gold-accent mb-4">GENTLEMEN'S CLUB</span>
              <span className="text-[14px] tracking-[1em] uppercase opacity-20">Serbia & Worldwide Prestige</span>
            </div>
            <p className="max-w-md text-[16px] font-light opacity-20 leading-loose uppercase tracking-[0.3em]">
              Dizajnirano za one koji ne traže pažnju, već rezultate. Privatna zajednica posvećena muškoj izvrsnosti kroz karakter i disciplinu.
            </p>
          </div>

          <div className="md:col-span-3 space-y-12">
            <h5 className="text-[14px] uppercase tracking-[0.6em] gold-accent opacity-40 mb-12">Navigacija</h5>
            <ul className="space-y-8 text-[14px] tracking-[0.5em] uppercase font-light opacity-20">
              <li><a href="#" className="hover:text-white transition-all hover:tracking-[0.6em] duration-700">Početna</a></li>
              <li><a href="#identitet" className="hover:text-white transition-all hover:tracking-[0.6em] duration-700">O Klubu</a></li>
              <li><a href="#programi" className="hover:text-white transition-all hover:tracking-[0.6em] duration-700">Programi</a></li>
              <li><a href="#ekskluziva" className="hover:text-white transition-all hover:tracking-[0.6em] duration-700">Članstvo</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-12">
            <h5 className="text-[14px] uppercase tracking-[0.6em] gold-accent opacity-40 mb-12">Kontakt</h5>
            <ul className="space-y-8 text-[14px] tracking-[0.5em] uppercase font-light opacity-20">
              <li>Belgrade, Private Office</li>
              <li>contact@gentlemensclub.rs</li>
              <li className="italic serif text-xl normal-case tracking-normal gold-accent opacity-40">Standard of Living</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-white/5 text-[14px] uppercase tracking-[0.8em] opacity-10">
          <p>&copy; {new Date().getFullYear()} Gentlemen’s Club Serbia. Strictly Private.</p>
          <div className="flex gap-24">
            <a href="#" className="hover:text-white transition-colors duration-700">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors duration-700">Terms of Membership</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
