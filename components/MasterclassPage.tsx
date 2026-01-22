
import React from 'react';

export const MasterclassPage: React.FC = () => {
  return (
    <div>
      {/* 1. HERO - Pozicioniranje */}
      <section className="h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 grayscale scale-105"
            alt="Mastermind Space"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xs tracking-[0.5em] uppercase gold-accent mb-6 font-medium">Limited Invitation Only</h4>
            <h1 className="serif text-5xl md:text-8xl font-light mb-8 tracking-tight leading-none uppercase">
              Gentlemen's <br /><span className="italic gold-accent">MasterClass</span>
            </h1>
            <p className="serif text-2xl md:text-3xl font-light opacity-80 mb-8 italic leading-relaxed">
              Događaj koji redefiniše standarde ličnog i profesionalnog uspeha.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
              <a href="#prijavi-se" className="px-12 py-5 bg-[#c5a059] text-[#0a0a0a] text-[10px] uppercase tracking-[0.4em] font-medium hover:bg-white transition-all duration-500">
                Prijavi se za više informacija
              </a>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] gold-accent">Mesta su ograničena</span>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-30">Maksimalno 12 učesnika</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ŠTA JE GENTLEMEN’S MASTERCLASS */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-12 block">Koncept iskustva</span>
          <h2 className="serif text-4xl md:text-6xl font-light mb-16 italic">Više od seminara. <br /> Više od predavanja.</h2>
          <div className="space-y-12 text-lg md:text-2xl font-light opacity-60 leading-relaxed italic serif">
            <p>
              Gentlemen’s MasterClass je intenzivno, višednevno iskustvo dizajnirano za muškarce koji su već postigli određeni nivo uspeha, ali traže novu dimenziju rasta.
            </p>
            <p>
              Fokus nije samo na informacijama, već na implementaciji, strategiji i okruženju koje vas tera da razmišljate šire nego ikada pre.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ISKUSTVO I VREDNOST VIKENDA */}
      <section className="py-24 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="aspect-[4/5] bg-[#1a1a1a] overflow-hidden grayscale">
                  <img src="https://images.unsplash.com/photo-1544648181-3bf43c580981?q=80&w=2070&auto=format&fit=crop" alt="The Experience" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-12 -right-12 p-12 bg-[#0a0a0a] border border-white/5 hidden md:block">
                  <span className="serif text-5xl gold-accent italic font-light">1%</span>
                  <p className="text-[10px] uppercase tracking-widest mt-4 opacity-30">Selekciona stopa</p>
                </div>
             </div>
             
             <div className="order-1 lg:order-2">
                <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block font-medium">Networking & Wealth</span>
                <h2 className="serif text-4xl md:text-7xl font-light mb-12 italic leading-tight">Mreža je vaš <br /> najveći kapital.</h2>
                <div className="space-y-8 text-base md:text-lg font-light opacity-50 leading-relaxed mb-12">
                  <p>Najveća vrednost MasterClass-a nije u onome što čujete sa bine, već u onome ko sedi pored vas. Povezivanje sa ljudima sličnih ambicija stvara prilike koje se ne nalaze na otvorenom tržištu.</p>
                  <p>Ovo je vikend gde se sklapaju savezi, a ne samo kontakti.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5">
                  <div>
                    <h4 className="serif text-2xl mb-4 italic">Diskrecija</h4>
                    <p className="text-xs opacity-40 uppercase tracking-widest">Sve što se kaže u sobi, ostaje u sobi.</p>
                  </div>
                  <div>
                    <h4 className="serif text-2xl mb-4 italic">Kvalitet</h4>
                    <p className="text-xs opacity-40 uppercase tracking-widest">Striktna selekcija učesnika.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. WEEKEND PLAN */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block font-medium">Itinerer</span>
            <h2 className="serif text-4xl md:text-6xl font-light italic mb-8">Weekend Plan</h2>
            <p className="text-sm font-light opacity-30 uppercase tracking-[0.2em]">Struktura vašeg napretka</p>
          </div>

          <div className="space-y-4">
            {[
              { day: "DAN 01", title: "Arrival & Strategic Setup", desc: "Dolazak, smeštaj u luksuzni ambijent i prvi radni blok posvećen analizi trenutnog stanja i postavljanju ciljeva." },
              { day: "DAN 02", title: "Mastermind & Strategy Blocks", desc: "Intenzivne sesije fokusirane na biznis, investicije, liderstvo i mentalni sklop. Večernji networking uz cigar-lounge atmosferu." },
              { day: "DAN 03", title: "Integration & Future Path", desc: "Finalna strategija za implementaciju naučenog u vaš životni i poslovni sistem. Zatvaranje i check-out." }
            ].map((item, idx) => (
              <div key={idx} className="group bg-[#0a0a0a] border border-white/5 p-12 hover:border-[#c5a059]/40 transition-all duration-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="md:w-1/3">
                    <span className="gold-accent text-[10px] tracking-[0.5em] font-mono mb-4 block opacity-40">{item.day}</span>
                    <h3 className="serif text-3xl font-light group-hover:gold-accent transition-colors italic">{item.title}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-sm md:text-base font-light opacity-40 leading-relaxed group-hover:opacity-70 transition-opacity">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. YOUTUBE VIDEO PLACEHOLDER */}
      <section className="py-24 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Atmosfera</span>
            <h2 className="serif text-4xl md:text-6xl font-light italic">Pogledajte kako je bilo</h2>
          </div>
          <div className="aspect-video bg-[#0d0d0d] border border-white/5 relative flex items-center justify-center group overflow-hidden">
             <div className="absolute inset-0 grayscale opacity-40 group-hover:opacity-20 transition-opacity duration-1000">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" alt="Video Preview" className="w-full h-full object-cover" />
             </div>
             <div className="relative z-10 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#c5a059] group-hover:scale-110 transition-all duration-500">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover:border-l-[#c5a059] transition-colors"></div>
             </div>
             <div className="absolute bottom-8 left-8">
                <span className="text-[10px] uppercase tracking-[0.5em] opacity-30">Play Video</span>
             </div>
          </div>
        </div>
      </section>

      {/* 6. LOKACIJA I CENA */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
           <div className="mb-24">
              <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Detalji</span>
              <h2 className="serif text-4xl md:text-6xl font-light italic mb-12">Trajanje i Cena</h2>
              <div className="inline-block p-12 border border-white/5 bg-[#0a0a0a]">
                 <p className="serif text-4xl md:text-5xl gold-accent font-light mb-4">3 Dana / 2 Noćenja</p>
                 <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-8">Luksuzna lokacija (Potvrda nakon prijave)</p>
                 <div className="w-px h-12 bg-white/5 mx-auto mb-8"></div>
                 <p className="serif text-3xl font-light italic opacity-60">Uključuje: Smeštaj, hranu, materijale i ekskluzivni networking.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 7. PRIJAVA ZA VIŠE INFORMACIJA */}
      <section id="prijavi-se" className="py-24 md:py-48 px-6 md:px-12 bg-white text-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl md:text-7xl font-light mb-8 italic leading-none">Prijavi se za <br /> više informacija</h2>
            <p className="text-sm font-light opacity-50 uppercase tracking-[0.2em]">Ovaj proces je selektivan. Kontaktiraćemo vas nakon pregleda prijave.</p>
          </div>

          <form className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-medium">Ime i prezime*</label>
                <input type="text" className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-2 focus:border-[#c5a059] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-medium">Email adresa*</label>
                <input type="email" className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-2 focus:border-[#c5a059] outline-none transition-colors" />
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-medium">Broj telefona (WhatsApp/Telegram)*</label>
                <input type="tel" className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-2 focus:border-[#c5a059] outline-none transition-colors" />
              </div>
            </div>

            <div className="pt-12 flex justify-center">
              <button type="submit" className="px-16 py-5 bg-[#0a0a0a] text-white text-[10px] uppercase tracking-[0.4em] font-medium hover:bg-[#c5a059] transition-all duration-500">
                Pošalji prijavu
              </button>
            </div>
          </form>

          <div className="mt-24 pt-12 border-t border-[#0a0a0a]/10 text-center">
            <p className="serif text-2xl font-light italic opacity-60">„Vreme je najvrednija valuta koju posedujete. Trošite je tamo gde se ona umnožava.“</p>
          </div>
        </div>
      </section>

      {/* FINAL SCARCITY NOTE */}
      <section className="py-24 px-6 md:px-12 text-center opacity-30">
        <p className="text-[10px] uppercase tracking-[0.6em] font-light italic">Napomena: Samo 12 mesta je dostupno po MasterClass terminu radi očuvanja kvaliteta iskustva.</p>
      </section>
    </div>
  );
};
