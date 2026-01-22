
import React, { useState } from 'react';

const benefits = [
  { id: '01', title: 'High-Level Networking', desc: 'Povežite se sa ljudima koji oblikuju današnjicu u diskretnom i luksuznom okruženju.' },
  { id: '02', title: 'Gala Atmosfera', desc: 'Iskusite vrhunsku produkciju, od osvetljenja do svakog detalja na stolu.' },
  { id: '03', title: 'Statusni Signal', desc: 'Vaše prisustvo na RedCarpet-u je jasna poruka o vašim vrednostima i postignućima.' },
  { id: '04', title: 'Ekskluzivni Kontakti', desc: 'Direktan pristup preduzetnicima, umetnicima i liderima iz celog regiona.' },
  { id: '05', title: 'Vrhunski Hedonizam', desc: 'Selektovana vina, gurmanski specijaliteti i atmosfera koja slavi život.' },
  { id: '06', title: 'Umetnički Performans', desc: 'Pažljivo kuriran program koji spaja modernu umetnost i tradiciju.' },
  { id: '07', title: 'Medijski Prestiž', desc: 'Diskretno, ali snažno prisustvo u krugovima koji prepoznaju kvalitet.' },
  { id: '08', title: 'Globalna Vizija', desc: 'Deo veće mreže Gentlemen’s Club-a koja se prostire širom sveta.' },
  { id: '09', title: 'Trajne Uspomene', desc: 'Veče koje se ne zaboravlja, zabeleženo kroz vrhunsku fotografiju.' }
];

const faqs = [
  { q: 'Kako mogu dobiti pozivnicu?', a: 'RedCarpet je primarno događaj baziran na preporuci postojećih članova kluba. Ograničen broj karata je dostupan putem prijave na sajtu.' },
  { q: 'Šta ako ne ispoštujem Dress Code?', a: 'Dress Code je striktno Black Tie / Dark Elegance. Gostima koji ne ispoštuju propisani standard, ulaz će biti onemogućen bez refundacije.' },
  { q: 'Da li mogu povesti pratioca?', a: 'Svaka karta je individualna. Ukoliko želite doći sa pratiocem, potrebno je rezervisati dve karte ili poslati upit za partnerski paket.' },
  { q: 'Gde se održava događaj?', a: 'Tačna lokacija u Beogradu se otkriva isključivo potvrđenim gostima 48 sati pre početka događaja.' }
];

export const RedCarpetPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#0a0a0a]">
      {/* 1. HERO SEKCIJA */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 grayscale scale-110"
            alt="Red Carpet Ambience"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h4 className="text-[10px] md:text-xs tracking-[0.8em] uppercase gold-accent mb-8 font-light animate-fade-in">
            Elegancija | Uticaj | Pripadnost
          </h4>
          <h1 className="serif text-7xl md:text-[14rem] font-light leading-none mb-12 uppercase tracking-tight">
            RedCarpet
          </h1>
          <p className="serif text-xl md:text-3xl font-light italic opacity-60 mb-16">
            Veče koje se ne prepričava. Doživite ga!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12">
            <div className="text-center">
              <p className="text-[8px] uppercase tracking-widest opacity-40 mb-2">Datum</p>
              <p className="serif text-lg">Decembar 2024</p>
            </div>
            <div className="text-center">
              <p className="text-[8px] uppercase tracking-widest opacity-40 mb-2">Grad</p>
              <p className="serif text-lg">Beograd</p>
            </div>
            <div className="text-center">
              <p className="text-[8px] uppercase tracking-widest opacity-40 mb-2">Dress Code</p>
              <p className="serif text-lg">Black Tie</p>
            </div>
            <div className="text-center">
              <p className="text-[8px] uppercase tracking-widest opacity-40 mb-2">Gosti</p>
              <p className="serif text-lg">Invitation Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UVOD - ŠTA JE REDCARPET */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-12 block">Koncept večeri</span>
          <h2 className="serif text-4xl md:text-6xl font-light italic leading-tight mb-16 italic">
            Spoj biznisa, mode, <br /> umetnosti i sporta.
          </h2>
          <p className="serif text-2xl md:text-3xl font-light opacity-60 leading-relaxed italic">
            RedCarpet nije klasičan događaj. To je pažljivo režiran susret ljudi koji dele istu viziju izvrsnosti. Fokus je na ljudima i kontaktima koji menjaju život u atmosferi vrhunskog prestiža.
          </p>
        </div>
      </section>

      {/* 3. ZAŠTO ORGANIZUJEMO REDCARPET */}
      <section className="py-24 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-[#1a1a1a] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Club Event" />
            </div>
            <div className="absolute -bottom-8 -right-8 p-12 bg-[#0a0a0a] border border-white/5 hidden md:block">
               <p className="serif text-2xl gold-accent italic font-light">GC Serbia</p>
               <p className="text-[10px] uppercase tracking-widest opacity-30 mt-2">Domaćin večeri</p>
            </div>
          </div>
          <div className="space-y-12">
            <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Naša vizija</span>
            <h2 className="serif text-4xl md:text-7xl font-light italic leading-tight">Okupljanje <br /> ostvarenih ljudi.</h2>
            <div className="space-y-8 text-lg font-light opacity-50 leading-relaxed italic serif">
              <p>Gentlemen’s Club Serbia organizuje RedCarpet kao vrhunac godine. Naša misija je da stvorimo prostor gde se integritet i uspeh slave na pravi način.</p>
              <p className="text-white">Napomena: Ovo je poslednji događaj otvoren za kupovinu karata bez direktne preporuke kluba.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ŠTA MOŽETE DA OČEKUJETE */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Vrednost</span>
            <h2 className="serif text-4xl md:text-6xl font-light italic">9 Razloga za prisustvo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-1px bg-white/5 border border-white/5">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="bg-[#0a0a0a] p-12 hover:bg-[#1a1a1a] transition-all duration-500 group">
                <span className="text-[10px] gold-accent mb-8 block font-mono opacity-30 group-hover:opacity-100">{benefit.id}</span>
                <h3 className="serif text-2xl font-light mb-6">{benefit.title}</h3>
                <p className="text-sm font-light opacity-40 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ISKUSTVA (VIDEO PLACEHOLDER) */}
      <section className="py-24 md:py-48 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video bg-black border border-white/5 relative flex items-center justify-center group overflow-hidden shadow-2xl">
             <div className="absolute inset-0 grayscale opacity-40 group-hover:opacity-20 transition-opacity duration-1000">
                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" alt="Experience" className="w-full h-full object-cover" />
             </div>
             <div className="relative z-10 text-center">
                <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-[#c5a059] group-hover:scale-110 transition-all duration-500">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover:border-l-[#c5a059] transition-colors"></div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.5em] opacity-40">Emocija / recap</span>
             </div>
          </div>
        </div>
      </section>

      {/* 6. DRESS CODE */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white text-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] tracking-[0.4em] uppercase mb-8 block font-bold opacity-40">Standard</span>
            <h2 className="serif text-4xl md:text-7xl font-light italic uppercase">Dress Code</h2>
            <p className="mt-8 text-sm uppercase tracking-widest opacity-60">Uslov za ulaz na događaj</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[#0a0a0a]/10 border border-[#0a0a0a]/10">
            <div className="bg-white p-12 md:p-24 text-center">
               <h3 className="serif text-4xl md:text-5xl italic gold-accent mb-8">Gospoda</h3>
               <p className="text-sm uppercase tracking-widest font-bold mb-12">Black Tie / Smoking</p>
               <div className="w-12 h-12 border border-[#0a0a0a]/20 rounded-full mx-auto flex items-center justify-center mb-12">
                  <div className="w-4 h-4 bg-[#c5a059]"></div>
               </div>
               <p className="text-sm opacity-60 leading-relaxed italic">Klasičan smoking, tamno odelo, bela košulja i leptir mašna ili svedena kravata.</p>
            </div>
            <div className="bg-white p-12 md:p-24 text-center">
               <h3 className="serif text-4xl md:text-5xl italic gold-accent mb-8">Dame</h3>
               <p className="text-sm uppercase tracking-widest font-bold mb-12">Gala / Elegance</p>
               <div className="w-12 h-12 border border-[#0a0a0a]/20 rounded-full mx-auto flex items-center justify-center mb-12">
                  <div className="w-4 h-4 bg-[#c5a059] rotate-45"></div>
               </div>
               <p className="text-sm opacity-60 leading-relaxed italic">Duge haljine, elegantni krojevi i diskretan ali upečatljiv nakit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AGENDA VEČERI */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24 text-center">
            <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Plan večeri</span>
            <h2 className="serif text-4xl md:text-6xl font-light italic">Agenda</h2>
          </div>
          <div className="space-y-12">
            {[
              { time: "20:00", title: "Arrival & Red Carpet Walk", desc: "Dolazak gostiju, fotografisanje i welcome drink u foyer-u." },
              { time: "21:00", title: "Grand Opening", desc: "Zvanično otvaranje večeri. Moderatori: Miloš i Jovana." },
              { time: "22:00", title: "Gala Dinner & Performance", desc: "Selektovani meni uz umetničke nastupe koji prate ritam večeri." },
              { time: "23:30", title: "Networking & Lounge Hour", desc: "Intimni razgovori, cigar-lounge zona i povezivanje." },
              { time: "01:00", title: "Closing Note", desc: "Završetak zvaničnog dela programa." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-12 items-start border-l border-white/5 pl-8 md:pl-16 relative">
                <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] bg-[#c5a059] rounded-full"></div>
                <div className="md:w-32 flex-shrink-0">
                  <span className="serif text-2xl gold-accent italic">{item.time}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="serif text-2xl font-light italic">{item.title}</h4>
                  <p className="text-sm opacity-40 italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RECAP 2024 */}
      <section className="py-24 md:py-48 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-12 block">Retrospektiva</span>
          <h2 className="serif text-4xl md:text-7xl font-light italic leading-tight mb-12 italic">Veče koje se pamti.</h2>
          <p className="serif text-2xl font-light opacity-60 leading-relaxed italic mb-16">
            Prošlogodišnji RedCarpet je okupio preko 150 lidera iz različitih industrija. Atmosfera je bila ispunjena energijom koja inspiriše, ljudima koji se razumeju bez mnogo reči i trenucima koji su postali temelji novih saveza.
          </p>
        </div>
      </section>

      {/* 9. GALERIJA */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} className="aspect-square grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden border border-white/5">
              <img src={`https://picsum.photos/id/${100+i}/800/800?grayscale`} className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" alt="Gallery" />
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-24">
            <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Logistika</span>
            <h2 className="serif text-4xl md:text-6xl font-light italic">Često postavljena pitanja</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-white/5 bg-[#0a0a0a]">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className={`serif text-xl md:text-2xl font-light transition-colors ${openFaq === idx ? 'gold-accent' : 'opacity-80'}`}>
                    {faq.q}
                  </span>
                  <span className={`text-xl transition-transform duration-500 ${openFaq === idx ? 'rotate-45 gold-accent' : 'opacity-40'}`}>+</span>
                </button>
                <div className={`transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-8 pb-8 text-sm opacity-40 italic leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PRIJATELJI KLUBA */}
      <section className="py-24 md:py-48 px-6 md:px-12 text-center border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <span className="text-[8px] uppercase tracking-[0.6em] opacity-30 mb-16 block">Prijatelji i partneri kluba</span>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-20 grayscale">
            {['LuxuryBrand', 'VogueStyle', 'PrivateBank', 'EliteCars', 'CigarHouse'].map((partner) => (
              <span key={partner} className="serif text-2xl md:text-4xl font-light tracking-widest">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINALNI CTA */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white text-[#0a0a0a] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="serif text-4xl md:text-8xl font-light mb-16 uppercase italic">
            Vidimo se na <br /> crvenom tepihu.
          </h2>
          <div className="w-px h-24 bg-[#0a0a0a]/10 mx-auto mb-16"></div>
          <button className="px-24 py-6 bg-[#0a0a0a] text-white text-[10px] uppercase tracking-[0.5em] font-medium hover:bg-[#c5a059] transition-all duration-500">
            ZATRAŽITE POZIVNICU
          </button>
          <p className="mt-12 text-[10px] uppercase tracking-[0.4em] opacity-30 italic">Gentlemen’s Club Serbia Flagship Event</p>
        </div>
      </section>
    </div>
  );
};
