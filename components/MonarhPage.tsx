
import React from 'react';

export const MonarhPage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-[#c5a059] selection:text-[#0a0a0a]">
      {/* 1. HERO SEKCIJA - NE DIRATI PREMA INSTRUKCIJAMA */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 grayscale contrast-125 scale-105"
            alt="Monarh Riding"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h4 className="text-[10px] md:text-xs tracking-[0.8em] uppercase font-light mb-12 opacity-60 gold-accent">
            Gentlemen’s Riding Club
          </h4>
          <h1 className="serif text-7xl md:text-[12rem] font-light tracking-[0.2em] leading-none mb-16 uppercase">
            MONARH
          </h1>
          <div className="w-px h-32 bg-gradient-to-b from-[#c5a059] to-transparent mx-auto"></div>
        </div>
      </section>

      {/* 2. NAUČITE DA JAŠETE - TRADICIJA I PROMO (SLIKA 1) */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">Tradicija koja ne stari</span>
              <h2 className="serif text-4xl md:text-6xl font-light italic leading-tight">Naučite da jašete!</h2>
            </div>
            
            <div className="space-y-8 text-sm md:text-base font-light opacity-60 leading-relaxed uppercase tracking-widest italic serif">
              <p>Aristokratija bira jahanje. Jahanje nije samo sport.</p>
              <p>To je umetnost kretanja sa životinjom koja simbolizuje snagu, slobodu i plemenitost. Kroz istoriju, jahanje je bilo odlika aristokratije, vojnog plemstva i ljudi koji su razumeli da se kroz odnos sa konjem oblikuje karakter, strpljenje, odlučnost i uzvišena smirenost.</p>
              <p>Danas imate priliku da zakoračite u taj svet. Iskoristite PROMO ponudu:</p>
            </div>

            <p className="text-sm font-light opacity-40 leading-relaxed">
              Uživajte u učenju od iskusnih instruktora, u prirodi, na prostranstvima koja vraćaju osećaj slobode i kontrole.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center py-20 bg-[#0a0a0a] border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-1000">
              <img src="https://images.unsplash.com/photo-1598974357851-98166a9ebc6d?q=80&w=1976&auto=format&fit=crop" alt="Horse Close Up" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 text-center">
              <span className="text-[10px] tracking-[0.4em] uppercase mb-8 opacity-40 block">Individualni čas</span>
              <div className="relative inline-block mb-4">
                <p className="serif text-4xl md:text-5xl text-white font-light italic opacity-30">32 EUR</p>
                <div className="absolute top-1/2 left-[-10%] w-[120%] h-[1px] bg-[#ff3b30] -rotate-[15deg] shadow-[0_0_15px_rgba(255,59,48,0.8)]"></div>
              </div>
              <div className="flex flex-col items-center">
                <p className="serif text-8xl md:text-[11rem] gold-accent font-light italic leading-none">17</p>
                <p className="serif text-3xl md:text-4xl gold-accent italic font-light lowercase mt-[-10px] tracking-widest">eur/h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ISKUSTVO ZA DVOJE (SLIKA 2) */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="serif text-4xl md:text-7xl font-light gold-accent italic mb-4">ISKUSTVO ZA DVOJE</h2>
            <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 italic">Za one koji žele više od običnog dana u prirodi:</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 p-12 md:p-20 bg-[#0d0d0d] border border-white/5 relative">
              <ul className="space-y-6 text-sm md:text-base font-light opacity-70 serif italic leading-relaxed">
                <li className="flex items-start gap-4"><span className="text-[#c5a059]">-</span> Privatni sto na livadi, pod otvorenim nebom</li>
                <li className="flex items-start gap-4"><span className="text-[#c5a059]">-</span> Boca vina po izboru</li>
                <li className="flex items-start gap-4"><span className="text-[#c5a059]">-</span> Bokali sa svežom vodom</li>
                <li className="flex items-start gap-4">
                  <span className="text-[#c5a059]">-</span> 
                  <div>
                    Gurmanska plata
                    <span className="block text-[10px] opacity-40 uppercase tracking-widest mt-1">( pršuta, sirevi, orašasti plodovi, med, domaći namazi )</span>
                  </div>
                </li>
                <li className="flex items-start gap-4"><span className="text-[#c5a059]">-</span> Čas jahanja za dve osobe</li>
                <li className="flex items-start gap-4"><span className="text-[#c5a059]">-</span> Ukupno vreme boravka: 3 sata</li>
              </ul>

              <div className="mt-16 pt-12 border-t border-white/5">
                <p className="serif text-xl md:text-2xl italic font-light opacity-60 leading-relaxed">
                  Zamislite da sa <span className="text-white font-medium">voljenom osobom ili prijateljem</span> jašete kroz prirodu, a zatim uživate u vrhunskim zalogajima i vinu, daleko od gradske buke. Ovo nije samo izlazak — ovo je <span className="text-white uppercase tracking-widest font-bold">USPOMENA</span>.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
              <div className="mb-12 text-center">
                <div className="relative inline-block mb-6">
                  <p className="serif text-5xl md:text-7xl text-white font-light italic opacity-30">120 EUR</p>
                  <div className="absolute top-1/2 left-[-10%] w-[120%] h-[2px] bg-[#ff3b30] -rotate-[12deg] shadow-[0_0_20px_rgba(255,59,48,0.8)]"></div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="serif text-9xl md:text-[14rem] gold-accent font-light italic leading-none">85</p>
                  <p className="serif text-4xl md:text-6xl gold-accent italic font-light lowercase mt-[-20px] tracking-[0.2em]">eur</p>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 italic max-w-sm text-center leading-loose">
                Popunite prijavu ispod i zakoračite u svet onih koji znaju šta znači prava sloboda i stil života! Broj mesta je ograničen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REZERVACIJA TERMINA */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white text-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="serif text-4xl md:text-7xl font-light mb-8 italic uppercase leading-none">Rezervišite <br /> Svoj Termin</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-medium italic">Čekamo vas na imanju da zajedno napišemo vašu prvu priču na konju.</p>
          </div>

          <form className="space-y-16">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold italic">Ime i prezime*</label>
                <input type="text" className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-4 focus:border-[#c5a059] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold italic">Email adresa*</label>
                <input type="email" className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-4 focus:border-[#c5a059] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold italic">Telefon*</label>
                <input type="tel" className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-4 focus:border-[#c5a059] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold italic">Komentar (Opciono)</label>
                <input type="text" className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-4 focus:border-[#c5a059] outline-none transition-colors" />
              </div>
            </div>

            <div className="flex justify-center pt-12">
              <button type="submit" className="px-24 py-6 bg-[#0a0a0a] text-white text-[10px] uppercase tracking-[0.5em] font-medium hover:bg-[#c5a059] transition-all duration-500">
                REZERVIŠI SVOJ TERMIN
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 5. GENTLEMEN’S CLUB FOOTER CALL */}
      <section className="py-24 md:py-48 px-6 md:px-12 text-center bg-[#050505] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <p className="serif text-3xl md:text-5xl font-light italic opacity-60 mb-12 leading-relaxed">
            Monarh je ulaz u svet gde prestiž sreće karakter. Dobrodošli u klub.
          </p>
          <div className="w-px h-24 bg-gradient-to-b from-[#c5a059] to-transparent mx-auto"></div>
          <p className="mt-12 text-[10px] uppercase tracking-[0.4em] gold-accent">Gentlemen’s Club Serbia</p>
        </div>
      </section>
    </div>
  );
};
