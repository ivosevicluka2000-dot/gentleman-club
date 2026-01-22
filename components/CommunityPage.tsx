
import React, { useState } from 'react';

const communityFeatures = [
  { id: '01', title: 'Live gostovanja', desc: 'Ekskluzivna live gostovanja uspešnih ljudi iz oblasti biznisa, finansija, ličnog razvoja i strategije.' },
  { id: '02', title: 'Members only', desc: 'Zatvorena zajednica bez buke i neozbiljnosti. Samo članovi posvećeni ličnom rastu.' },
  { id: '03', title: 'Office & Freelance', desc: 'Razvoj karijere, poslovnih veština i freelance znanja uz podršku zajednice.' },
  { id: '04', title: 'Gentlemen’s Habit', desc: 'Izgradnja discipline, fokusa, rutine i odgovornosti.' },
  { id: '05', title: 'Business & Invest', desc: 'Razumevanje novca, biznisa i dugoročnog razmišljanja.' },
  { id: '06', title: 'Block & Control', desc: 'Kontrola emocija i ponašanja u stresnim situacijama.' },
  { id: '07', title: 'Fitness & Health', desc: 'Fizičko zdravlje kao osnova snage i mentalne stabilnosti.' },
  { id: '08', title: 'Um i duhovnost', desc: 'Rad na svesti, samokontroli i unutrašnjem balansu.' },
  { id: '09', title: 'Geopolitika & strategija', desc: 'Razumevanje sveta, moći i donošenja odluka.' },
  { id: '10', title: 'Tactics & Survival', desc: 'Praktične veštine i mentalni sklop za zahtevne situacije.' },
  { id: '11', title: 'Events & Networking', desc: 'Povezivanje sa članovima kroz događaje i susrete.' },
  { id: '12', title: 'Offline Meetings', desc: 'Offline susreti članova zajednice – razgovori, razmena iskustava i povezivanje uživo.' }
];

const pricingPackages = [
  {
    name: "Mesečna pretplata",
    price: "28 EUR / mesec",
    regular: "58 EUR",
    desc: "Pristup online zajednici i diskusijama unutar Gentlemen’s Heritage zajednice.",
    includesBook: false
  },
  {
    name: "3 meseca + poklon knjiga",
    price: "84 EUR / 3 meseca",
    regular: "199 EUR",
    desc: "3 meseca pristupa online zajednici uz poklon knjigu „Džentlmen“.",
    includesBook: true
  },
  {
    name: "12 meseci + poklon knjiga",
    price: "280 EUR / 12 meseci",
    regular: "721 EUR",
    desc: "Godinu dana pristupa zajednici, poklon knjiga „Džentlmen“ i maksimalan nivo podrške.",
    includesBook: true
  }
];

export const CommunityPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<typeof pricingPackages[0] | null>(null);

  const closeModal = () => setSelectedPackage(null);

  return (
    <div className="pt-24 md:pt-32">
      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 relative overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Gentlemen's Heritage Ambience"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="serif text-3xl md:text-5xl gold-accent mb-6 block font-light italic animate-fade-in">Gentlemen’s Heritage</span>
          <h1 className="serif text-5xl md:text-8xl font-light mb-12 tracking-tight leading-none uppercase">
            Online zajednica
          </h1>
          <p className="serif text-2xl md:text-4xl font-light opacity-60 mb-12 italic">
            Fale ti veštine za uspeh u poslu i životu?
          </p>
          <p className="text-sm md:text-base font-light opacity-40 leading-relaxed max-w-2xl mx-auto mb-16">
            Gentlemen’s Heritage je online zajednica namenjena muškarcima koji žele disciplinu, znanje i karakter, okruženi ljudima istih vrednosti.
          </p>
          <div className="flex flex-col items-center gap-6">
             <div className="w-px h-24 bg-gradient-to-b from-[#c5a059] to-transparent"></div>
             <p className="text-[10px] uppercase tracking-[0.5em] gold-accent">Ovo nije još jedna online grupa. Ovo je zatvoren krug ozbiljnih ljudi.</p>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block font-medium">Stubovi rasta</span>
            <h2 className="serif text-4xl md:text-6xl font-light italic">Šta te očekuje u zajednici?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
            {communityFeatures.map((feat) => (
              <div key={feat.id} className="bg-[#0a0a0a] p-12 hover:bg-[#1a1a1a] transition-all duration-500 group">
                <span className="text-[10px] gold-accent mb-8 block font-mono opacity-40 group-hover:opacity-100">{feat.id}</span>
                <h3 className="serif text-2xl font-light mb-6">{feat.title}</h3>
                <p className="text-sm font-light opacity-40 leading-relaxed group-hover:opacity-60 transition-opacity">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PACKAGES */}
      <section id="paketi" className="py-24 md:py-48 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Selekcija članstva</span>
            <h2 className="serif text-4xl md:text-7xl font-light italic mb-8">Paketi članstva</h2>
            <p className="text-sm font-light opacity-30 uppercase tracking-[0.2em]">Odaberite nivo posvećenosti</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0a0a] border border-white/5 p-12 flex flex-col items-center text-center group hover:border-[#c5a059]/40 transition-all duration-700"
              >
                <h3 className="serif text-2xl font-light mb-8 italic">{pkg.name}</h3>
                <div className="mb-8">
                  <p className="text-3xl serif gold-accent font-light mb-2">{pkg.price}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-30">Regularna vrednost: {pkg.regular}</p>
                </div>
                <p className="text-sm font-light opacity-40 leading-relaxed mb-12 flex-grow">
                  {pkg.desc}
                </p>
                <button 
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full py-4 border border-white/10 text-[10px] uppercase tracking-[0.3em] hover:bg-[#c5a059] hover:text-[#0a0a0a] hover:border-[#c5a059] transition-all duration-500"
                >
                  Izaberi paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl" onClick={closeModal}></div>
          <div className="relative bg-[#111111] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 md:p-16 shadow-2xl">
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-12">
              <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">Prijava za Gentlemen’s Heritage</span>
              <h2 className="serif text-3xl md:text-5xl font-light">
                Odabrali ste: <br />
                <span className="italic">{selectedPackage.name}</span>
              </h2>
            </div>

            <form className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Ime i prezime*</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#c5a059] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Zemlja iz koje dolaziš*</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#c5a059] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Email adresa*</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#c5a059] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Kontakt telefon*</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#c5a059] outline-none transition-colors" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Niša interesovanja / Zanimanje*</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#c5a059] outline-none transition-colors" />
                </div>
              </div>

              {selectedPackage.includesBook && (
                <div className="pt-8 border-t border-white/5 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h3 className="serif text-xl italic font-light">Dostava poklon knjige</h3>
                    <p className="text-[10px] uppercase tracking-widest opacity-30">Napomena: Cena dostave van Srbije iznosi 9 EUR.</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-40">Adresa (Ulica, Broj, Grad, Poštanski Broj, Država)*</label>
                    <textarea className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#c5a059] outline-none transition-colors h-20 resize-none"></textarea>
                  </div>
                </div>
              )}

              <div className="pt-12 flex justify-center">
                <button type="submit" className="px-16 py-5 bg-[#c5a059] text-[#0a0a0a] text-[10px] uppercase tracking-[0.4em] font-medium hover:bg-white transition-all duration-500">
                  Priključi se zajednici
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
