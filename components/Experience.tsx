
import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section id="ekskluziva" className="relative min-h-screen py-32 md:py-48 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-6 space-y-20">
            <div className="space-y-10">
              <span className="gold-accent text-[13px] tracking-[1em] uppercase opacity-30 block">Iskustvo / Atmosfera</span>
              <h2 className="serif text-6xl md:text-8xl font-light leading-[0.85] italic tracking-tighter">
                Tihi luksuz <br /> 
                <span className="not-italic gold-accent opacity-90">Glasna dela.</span>
              </h2>
            </div>
            
            <p className="text-xl md:text-3xl font-light opacity-50 leading-relaxed tracking-wide max-w-xl italic serif">
              Naši događaji su pažljivo kurirani trenuci gde se vreme usporava, a konverzacija produbljuje. Od cigar-lounge susreta do biznis povlačenja u planine, svaki detalj je podređen prestižu.
            </p>
            
            <div className="flex items-center gap-16 pt-20 border-t border-white/5">
              <div className="space-y-6">
                <p className="text-[14px] uppercase tracking-[0.8em] font-light gold-accent opacity-60">Beograd / London / Dubai</p>
                <p className="text-[13px] uppercase tracking-[0.5em] opacity-20">Globalna mreža partnera</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-6 md:gap-10 items-start">
              <div className="space-y-6 md:space-y-10 pt-24">
                <div className="aspect-[3/4] grayscale border border-white/5 overflow-hidden group relative">
                  <img src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2083&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[8000ms] opacity-30 group-hover:opacity-70" alt="Detail 1" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-[2000ms]"></div>
                </div>
                <div className="aspect-square grayscale border border-white/5 overflow-hidden group relative">
                  <img src="https://images.unsplash.com/photo-1541535650810-10d26f5c2abb?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[8000ms] opacity-30 group-hover:opacity-70" alt="Detail 2" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-[2000ms]"></div>
                </div>
              </div>
              <div className="space-y-6 md:space-y-10">
                <div className="aspect-square grayscale border border-white/5 overflow-hidden group relative">
                  <img src="https://images.unsplash.com/photo-1510563393941-f296062114d2?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[8000ms] opacity-30 group-hover:opacity-70" alt="Detail 3" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-[2000ms]"></div>
                </div>
                <div className="aspect-[3/4] grayscale border border-white/5 overflow-hidden group relative">
                  <img src="https://images.unsplash.com/photo-1520038410233-7141f77e49aa?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[8000ms] opacity-30 group-hover:opacity-70" alt="Detail 4" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-[2000ms]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gold/5 blur-[200px] pointer-events-none"></div>
    </section>
  );
};
