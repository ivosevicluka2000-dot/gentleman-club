
import React from 'react';

export const Identity: React.FC = () => {
  return (
    <section id="identitet" className="py-32 md:py-48 bg-[#050505] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          <div className="lg:col-span-9 space-y-32">
            <div className="space-y-16">
              <span className="gold-accent text-[13px] tracking-[1.2em] uppercase opacity-30 block">Ko je Gentlemen's Club</span>
              <h2 className="serif text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.8] text-white tracking-tighter">
                Identitet zasnovan na <br /> 
                <span className="italic gold-accent opacity-90">tradiciji budućnosti.</span>
              </h2>
            </div>
            
<div className="grid md:grid-cols-2 gap-24 lg:gap-32">
              <p className="italic serif text-2xl md:text-4xl font-light opacity-70 leading-[1.3] text-white/90">
                Gentlemen's Club Serbia nije još jedna online grupa. Mi smo utočište za one koji razumeju da pravi uspeh dolazi iz balansa unutrašnjeg mira i spoljašnjeg dostignuća.
              </p>
              <div className="space-y-16 md:pt-12">
                <p className="text-[14px] uppercase tracking-[0.3em] font-light opacity-30 leading-[2.5] max-w-md">
                  Naš fokus su vrednosti koje su bezvremene: čast, integritet, neprestana edukacija i snaga zajednice koja ne postavlja pitanja, već pruža odgovore.
                </p>
                <div className="flex gap-24 pt-16 border-t border-white/5">
                  <div className="space-y-4">
                    <p className="serif text-4xl gold-accent font-light italic opacity-80">Private</p>
                    <p className="text-[12px] uppercase tracking-[0.5em] opacity-20">Diskretna mreža</p>
                  </div>
                  <div className="space-y-4">
                    <p className="serif text-4xl gold-accent font-light italic opacity-80">Global</p>
                    <p className="text-[12px] uppercase tracking-[0.5em] opacity-20">Svetski standardi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 relative pt-16 lg:pt-32">
            <div className="aspect-[2/3] overflow-hidden grayscale border border-white/5 relative group">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                alt="Identity Concept" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[20000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-16 -left-16 md:-left-24 p-12 md:p-16 bg-[#0a0a0a] border border-white/5 shadow-2xl max-w-[280px] hidden xl:block">
              <p className="serif text-2xl mb-6 italic opacity-80 font-light leading-snug">"Man is what he does."</p>
              <div className="w-12 h-px bg-[#c5a059]/30 mb-6"></div>
              <p className="text-[12px] uppercase tracking-[0.6em] opacity-20 font-light">Filozofija kluba</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
