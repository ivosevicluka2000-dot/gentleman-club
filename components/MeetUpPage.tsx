
import React, { useState } from 'react';

export const MeetUpPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-light">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 grayscale" 
            alt="Meetup Ambience" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl">
          <span className="gold-accent text-[10px] tracking-[0.6em] uppercase mb-12 block font-medium">Dobrodošli na</span>
          <h1 className="serif text-6xl md:text-9xl font-light mb-12 italic tracking-tighter leading-none">
            Ladies & Gentlemen <br /> MeetUp
          </h1>
          <div className="w-px h-24 bg-gradient-to-b from-[#c5a059] to-transparent mx-auto mt-16"></div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-32 md:py-64 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-24 text-center">
          <p className="serif text-2xl md:text-4xl leading-relaxed italic opacity-80">
            Ladies & Gentlemen MeetUp je ekskluzivno druženje namenjeno damama i džentlmenima koji teže ličnom razvoju, kvalitetnim poznanstvima i sofisticiranom načinu života.
          </p>
          <div className="space-y-12">
            <h2 className="text-[10px] uppercase tracking-[0.5em] gold-accent">Suština susreta</h2>
            <p className="text-sm md:text-base opacity-40 leading-[2] tracking-wide max-w-2xl mx-auto">
              Ovo nije klasičan događaj. Ovo je prostor gde se susreću ljudi sličnih vrednosti — oni koji razumeju značaj kulture, manira, ličnog stila i smislenih razgovora.
            </p>
          </div>
        </div>
      </section>

      {/* TOPICS SECTION */}
      <section className="py-32 md:py-64 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-24">
            <div className="md:w-1/3">
              <h2 className="serif text-5xl italic gold-accent">Razgovaramo o:</h2>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                'ličnom razvoju',
                'biznisu i preduzetništvu',
                'gastronomiji i vinu',
                'modi i eleganciji',
                'automobilima i putovanjima'
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-6 border-b border-white/5 pb-8 group">
                  <span className="text-[10px] gold-accent font-mono opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <span className="serif text-2xl md:text-3xl italic opacity-60 group-hover:opacity-100 transition-all group-hover:translate-x-2">{topic}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-32 text-center italic opacity-30 text-xs tracking-widest uppercase">
            Sve u atmosferi uzajamnog poštovanja, inspiracije i istinske povezanosti.
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-32 md:py-64 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <h2 className="serif text-5xl md:text-7xl font-light italic leading-tight">Zašto Ladies & Gentlemen MeetUp?</h2>
              <div className="w-24 h-px bg-black/10"></div>
              <p className="serif text-xl md:text-2xl opacity-60 italic leading-relaxed">
                Ladies & Gentlemen MeetUp je nastao iz potrebe da se stvori sigurno i inspirativno okruženje u kojem se kvalitetni ljudi mogu upoznati bez pritiska, bez površnih tema i bez buke savremenog sveta.
              </p>
            </div>
            <div className="space-y-16 pt-12 md:pt-32">
              <p className="text-sm font-light leading-loose opacity-70 tracking-wide italic">
                Ovde se ne dolazi da bi se neko impresionirao — ovde se dolazi da bi se pronašli ljudi sličnog pogleda na život.
              </p>
              <div className="space-y-8">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Kroz pažljivo osmišljene večeri, okupljamo pojedince koji žele:</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 serif text-xl italic opacity-80">
                    <span className="gold-accent mt-2">●</span> da šire svoj krug kvalitetnih poznanstava
                  </li>
                  <li className="flex items-start gap-4 serif text-xl italic opacity-80">
                    <span className="gold-accent mt-2">●</span> da razmenjuju ideje i iskustva
                  </li>
                  <li className="flex items-start gap-4 serif text-xl italic opacity-80">
                    <span className="gold-accent mt-2">●</span> da budu deo zajednice koja neguje prave vrednosti
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRESS CODE & MOMENTS */}
      <section className="py-32 md:py-64 px-6 text-center space-y-32">
        <div className="max-w-2xl mx-auto">
          <span className="gold-accent text-[10px] tracking-[0.6em] uppercase mb-12 block">Standard</span>
          <h2 className="serif text-4xl md:text-6xl font-light italic mb-8">Dress Code</h2>
          <div className="text-3xl md:text-5xl serif tracking-[0.2em] font-light uppercase border-y border-white/5 py-12">
            FORMAL ELEGANT
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="serif text-4xl md:text-6xl italic">MeetUp V Moments</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-[#0a0a0a] border border-white/5 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1541535650810-10d26f5c2abb?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Recap 1" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
               </div>
            </div>
            <div className="aspect-video bg-[#0a0a0a] border border-white/5 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Recap 2" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
               </div>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 italic">Atmosfera. Energija. Ljudi. Trenuci koji se pamte.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-64 bg-[#0a0a0a] text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="serif text-4xl md:text-7xl font-light italic mb-16">Postanite deo kluba <br /> uspešnih ljudi.</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-16 py-6 border border-gold/40 gold-accent text-[10px] uppercase tracking-[0.5em] hover:bg-gold hover:text-black transition-all duration-700"
          >
            Prijavi interesovanje
          </button>
        </div>
      </section>

      {/* MODAL FORM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-[#0a0a0a] border border-white/5 w-full max-w-2xl p-10 md:p-16 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {isSubmitted ? (
              <div className="py-20 text-center space-y-8 animate-fade-in">
                <span className="gold-accent text-5xl serif italic">Hvala vam.</span>
                <p className="text-sm uppercase tracking-[0.3em] opacity-40 leading-loose">
                  Vaše interesovanje za MeetUp je zabeleženo. <br /> Naš tim će vas kontaktirati čim se otvori sledeći termin za nove članove.
                </p>
                <div className="w-px h-12 bg-gold/30 mx-auto"></div>
              </div>
            ) : (
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="gold-accent text-[10px] tracking-[0.5em] uppercase opacity-60 block">MeetUp Application</span>
                  <h2 className="serif text-3xl md:text-5xl font-light italic">Prijavite se za susret</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-8">
                    <div className="relative group">
                      <label className="text-[9px] uppercase tracking-widest opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Ime i Prezime</label>
                      <input required type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors serif text-xl" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <label className="text-[9px] uppercase tracking-widest opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Email Adresa</label>
                        <input required type="email" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors serif text-xl" />
                      </div>
                      <div className="relative group">
                        <label className="text-[9px] uppercase tracking-widest opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Telefon</label>
                        <input required type="tel" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors serif text-xl" />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="text-[9px] uppercase tracking-widest opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Primarno polje interesovanja</label>
                      <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors serif text-xl appearance-none cursor-pointer">
                        <option className="bg-[#0a0a0a]" value="networking">Networking & Biznis</option>
                        <option className="bg-[#0a0a0a]" value="lifestyle">Elegancija & Lifestyle</option>
                        <option className="bg-[#0a0a0a]" value="razvoj">Lični Razvoj</option>
                        <option className="bg-[#0a0a0a]" value="drugo">Ostalo</option>
                      </select>
                    </div>

                    <div className="relative group">
                      <label className="text-[9px] uppercase tracking-widest opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Zašto želite da prisustvujete?</label>
                      <textarea required className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors serif text-xl h-24 resize-none"></textarea>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button type="submit" className="w-full py-6 bg-gold text-[#0a0a0a] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all duration-700">
                      PRIJAVI INTERESOVANJE
                    </button>
                    <p className="mt-6 text-[8px] uppercase tracking-[0.3em] opacity-20 text-center">
                      Vaši podaci su sigurni i koristiće se isključivo za selekciju gostiju.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
