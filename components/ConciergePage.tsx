
import React, { useState } from 'react';

export const ConciergePage: React.FC = () => {
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
      <section className="h-[100dvh] flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-12 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-10 grayscale" 
            alt="Concierge Background" 
          />
        </div>
        <div className="relative z-10 text-center max-w-5xl">
          <span className="gold-accent text-[10px] tracking-[0.8em] uppercase mb-12 block font-medium">Bespoke Lifestyle Management</span>
          <h1 className="serif text-6xl md:text-[10rem] font-light mb-12 tracking-tighter leading-none">
            Gentlemen’s <br /> <span className="italic gold-accent">Concierge</span>
          </h1>
          <p className="serif text-2xl md:text-4xl font-light opacity-50 italic">Vaše vreme je najvrednija valuta. Čuvamo je.</p>
        </div>
      </section>

      {/* MISSION / WHAT IS */}
      <section className="py-32 md:py-64 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <h2 className="serif text-5xl md:text-7xl font-light italic leading-tight">Umetnost <br /> besprekorne usluge.</h2>
          <div className="space-y-12 text-lg md:text-2xl font-light opacity-60 leading-relaxed italic serif">
            <p>
              Gentlemen’s Concierge Services predstavljaju visoko personalizovan i diskretan pristup ispunjavanju zahteva modernog džentlmena.
            </p>
            <p className="text-white opacity-80">
              Naša usluga nije luksuz — ona je alat za ljude koji cene svoje vreme, komfor i reputaciju.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-32 md:py-64 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <span className="gold-accent text-[10px] tracking-[0.5em] uppercase opacity-40 block mb-8">Šta nudimo?</span>
            <h2 className="serif text-4xl md:text-6xl font-light italic">Sveobuhvatna podrška lifestyle-u.</h2>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { 
                t: 'Ekskluzivne rezervacije', 
                d: 'Obezbeđujemo rezervacije u najprestižnijim restoranima i klubovima, čak i kada su mesta zvanično popunjena.' 
              },
              { 
                t: 'Personalizovana putovanja', 
                d: 'Kreiramo individualne planove putovanja u skladu sa vašim stilom života — od destinacije i smeštaja, do restorana i aktivnosti.' 
              },
              { 
                t: 'VIP pristup događajima', 
                d: 'Omogućavamo VIP ulaznice i pristup odabranim događajima, večerama i privatnim okupljanjima.' 
              },
              { 
                t: 'Limo & premium transport', 
                d: 'Organizujemo luksuzni transport, profesionalne vozače i diskretne usluge prevoza.' 
              },
              { 
                t: 'Diskretna podrška 24/7', 
                d: 'Naš tim je dostupan kada vam je potreban — brzo, efikasno i bez suvišnih pitanja.' 
              },
              { 
                t: 'Bespoke rešenja', 
                d: 'Svaki zahtev posmatramo individualno i prilagođavamo ga vašim navikama, potrebama i očekivanjima.' 
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#050505] p-16 space-y-8 group hover:bg-[#0d0d0d] transition-all duration-700">
                <span className="text-[10px] gold-accent opacity-30 font-mono">0{i+1}</span>
                <h4 className="serif text-3xl italic gold-accent">{item.t}</h4>
                <p className="text-sm opacity-40 leading-relaxed tracking-wide font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-32 md:py-64 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">Zašto odabrati nas?</span>
          <h2 className="serif text-5xl md:text-7xl font-light italic">Ne nudimo katalog usluga. <br /> Nudimo rešenja.</h2>
          <p className="serif text-xl md:text-2xl font-light italic opacity-60 leading-relaxed max-w-2xl mx-auto">
            Diskrecija, brzina i pouzdanost su standard — ne opcija. Svaki detalj vašeg zahteva tretira se sa najvišim stepenom poverljivosti.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-32 md:py-64 px-6 bg-[#050505] text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <span className="gold-accent text-[10px] tracking-[0.5em] uppercase opacity-60 block">Kontakt</span>
          <h2 className="serif text-4xl md:text-6xl font-light italic">Naš concierge tim vam stoji na raspolaganju.</h2>
          <p className="text-sm font-light opacity-30 uppercase tracking-[0.3em] italic">Za upite i saradnju, kontaktirajte nas direktno.</p>
          <div className="pt-12">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-20 py-8 border border-gold/40 gold-accent text-[11px] uppercase tracking-[0.6em] font-medium hover:bg-gold hover:text-black transition-all duration-1000"
            >
              [ KONTAKTIRAJ NAS ]
            </button>
          </div>
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
                  Vaš upit je primljen. <br /> Naš tim će vas kontaktirati u najkraćem roku sa predlogom rešenja.
                </p>
                <div className="w-px h-12 bg-gold/30 mx-auto"></div>
              </div>
            ) : (
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="gold-accent text-[10px] tracking-[0.5em] uppercase opacity-60 block">Concierge Inquiry</span>
                  <h2 className="serif text-3xl md:text-5xl font-light italic">Pošaljite vaš zahtev</h2>
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
                      <label className="text-[9px] uppercase tracking-widest opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Tip Usluge</label>
                      <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors serif text-xl appearance-none cursor-pointer">
                        <option className="bg-[#0a0a0a]" value="rezervacije">Ekskluzivne Rezervacije</option>
                        <option className="bg-[#0a0a0a]" value="putovanja">Personalizovana Putovanja</option>
                        <option className="bg-[#0a0a0a]" value="dogadjaji">VIP Pristup Događajima</option>
                        <option className="bg-[#0a0a0a]" value="transport">Premium Transport</option>
                        <option className="bg-[#0a0a0a]" value="ostalo">Ostalo / Bespoke Zahtev</option>
                      </select>
                    </div>

                    <div className="relative group">
                      <label className="text-[9px] uppercase tracking-widest opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Opis vašeg zahteva</label>
                      <textarea required className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors serif text-xl h-24 resize-none"></textarea>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button type="submit" className="w-full py-6 bg-gold text-[#0a0a0a] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all duration-700">
                      POŠALJI ZAHTEV
                    </button>
                    <p className="mt-6 text-[8px] uppercase tracking-[0.3em] opacity-20 text-center">
                      Vaša diskrecija je naš prioritet. Podaci su šifrovani.
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
