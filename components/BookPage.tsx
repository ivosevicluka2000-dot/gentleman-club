
import React from 'react';

interface BookPageProps {
  setPage: (page: any) => void;
}

export const BookPage: React.FC<BookPageProps> = ({ setPage }) => {
  return (
    <div className="pt-24 md:pt-32">
      {/* 1. HERO SEKCIJA */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h4 className="text-xs tracking-[0.5em] uppercase gold-accent mb-8">Lični vodič za savremenog muškarca</h4>
            <h1 className="serif text-6xl md:text-9xl font-light mb-12 tracking-tight leading-none italic">
              DŽENTLMEN
            </h1>
            <p className="serif text-2xl md:text-3xl font-light opacity-80 mb-12 italic leading-relaxed">
              Da li ti je važno kakav prvi utisak ostavljaš na ljude oko sebe?
            </p>
            <p className="text-sm md:text-base font-light opacity-50 leading-relaxed max-w-lg mb-12">
              Način na koji govoriš, stojiš, donosiš odluke i odnosiš se prema drugima govori mnogo o tebi.
              Knjiga „Džentlmen“ je lični vodič za muškarce koji žele disciplinu, stil, integritet i jasno postavljene vrednosti u vremenu u kome se one sve češće gube.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => setPage('checkout')}
                className="px-10 py-4 bg-[#c5a059] text-[#0a0a0a] text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-white transition-all duration-500"
              >
                Poruči knjigu
              </button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative flex justify-center">
            <div className="w-full max-w-[400px] aspect-[3/4] bg-[#1a1a1a] shadow-2xl shadow-black relative group transform rotate-3 hover:rotate-0 transition-transform duration-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
              <img 
                src="https://picsum.photos/id/119/800/1200?grayscale" 
                alt="Knjiga Džentlmen" 
                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 border border-white/5 m-4">
                <span className="serif text-5xl tracking-[0.2em] font-light">DŽ</span>
                <div className="w-px h-12 bg-[#c5a059] my-6"></div>
                <span className="text-[10px] uppercase tracking-[0.5em] opacity-40">Liderstvo i karakter</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
           <span className="text-[10px] uppercase tracking-[0.5em] gold-accent">Džentlmen nije titula. Džentlmen je izbor.</span>
           <div className="w-px h-12 bg-gradient-to-b from-[#c5a059] to-transparent"></div>
        </div>
      </section>

      {/* 2. ŠTA JE KNJIGA „DŽENTLMEN“ */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Definicija vodiča</span>
          <h2 className="serif text-4xl md:text-6xl font-light mb-16 italic">Šta je knjiga „Džentlmen“?</h2>
          <div className="space-y-12 text-lg md:text-2xl font-light opacity-70 leading-relaxed italic serif">
            <p>
              „Džentlmen“ je praktičan vodič kroz lični razvoj, ponašanje i razmišljanje savremenog muškarca.
              Ona ne nudi motivacione fraze, već jasne principe koji pomažu da izgradiš karakter, samopouzdanje i unutrašnju stabilnost.
            </p>
            <p className="text-[#c5a059]">
              Ovo nije knjiga koju pročitaš jednom. <br />
              Ovo je knjiga kojoj se vraćaš.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ZAŠTO TI JE POTREBNA OVA KNJIGA */}
      <section className="py-24 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-32">
              <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Bezvremene vrednosti</span>
              <h2 className="serif text-4xl md:text-7xl font-light leading-none mb-12">
                Zašto ti je <br /> potrebna <br /><span className="italic">ova knjiga?</span>
              </h2>
            </div>
            
            <div className="space-y-24 border-l border-white/5 pl-8 md:pl-24 py-8">
              <div className="max-w-md">
                <p className="text-base md:text-lg font-light opacity-50 leading-relaxed mb-8">
                  U svetu u kome se vrednosti relativizuju, a odgovornost izbegava, razlika se vidi u sitnicama:
                  u stavu, disciplini, načinu razmišljanja i doslednosti.
                </p>
                <div className="space-y-4">
                  <p className="serif text-2xl italic flex gap-4 items-center">
                    <span className="gold-accent text-sm not-italic font-mono">01.</span> Ko si
                  </p>
                  <p className="serif text-2xl italic flex gap-4 items-center">
                    <span className="gold-accent text-sm not-italic font-mono">02.</span> Ko želiš da postaneš
                  </p>
                  <p className="serif text-2xl italic flex gap-4 items-center">
                    <span className="gold-accent text-sm not-italic font-mono">03.</span> Kako da se ponašaš kada te niko ne gleda
                  </p>
                </div>
              </div>

              <div className="p-12 bg-[#1a1a1a] border border-white/5">
                <p className="serif text-3xl font-light italic leading-relaxed">
                  „Džentlmen“ te ne uči kako da se dopadneš svima. <br />
                  <span className="gold-accent">Uči te kako da poštuješ sebe.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ŠTA TE OČEKUJE U KNJIZI */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Sadržaj i poglavlja</span>
            <h2 className="serif text-4xl md:text-6xl font-light mb-8 italic">Šta te očekuje u knjizi?</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">(Ovo nije lista saveta, već sistem razmišljanja.)</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              "Disciplinu", "Samopouzdanje", "Način razmišljanja",
              "Odnos prema novcu", "Odnos prema ženama", "Stil i ponašanje",
              "Odgovornost", "Karakter", "Lični razvoj",
              "Donošenje odluka", "Poštovanje sebe i drugih", "Životne navike",
              "Mušku energiju i stabilnost", "Doslednost u teškim trenucima", "Lični kodeks vrednosti"
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                <span className="text-[10px] gold-accent mt-1 opacity-40 font-mono">{(idx + 1).toString().padStart(2, '0')}</span>
                <h3 className="serif text-2xl font-light group-hover:gold-accent transition-colors">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FILTRIRANJE PUBLIKE */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white text-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif text-4xl md:text-7xl font-light mb-16 italic">
            Ova knjiga te neće <br /> promeniti ako...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 text-left mb-24">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-40">01</p>
              <p className="serif text-2xl font-light italic">Ako tražiš brz prečac.</p>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-40">02</p>
              <p className="serif text-2xl font-light italic">Ako nisi spreman da preuzmeš odgovornost.</p>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-40">03</p>
              <p className="serif text-2xl font-light italic">Ako želiš da neko drugi donosi odluke umesto tebe.</p>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-40">04</p>
              <p className="serif text-2xl font-light italic">Ako nisi spreman da radiš na sebi.</p>
            </div>
          </div>

          <div className="pt-24 border-t border-[#0a0a0a]/10">
             <p className="serif text-4xl font-light italic leading-tight">
               „Džentlmen“ nije za svakoga. <br />
               <span className="opacity-40">I tako treba da bude.</span>
             </p>
          </div>
        </div>
      </section>

      {/* 7. POZIV NA ODLUKU */}
      <section className="py-24 md:py-48 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Trenutak istine</span>
          <h2 className="serif text-4xl md:text-6xl font-light mb-12 italic">
            Da li si spreman da doneseš <br /> bolju odluku danas?
          </h2>
          <p className="text-lg font-light opacity-50 mb-16 max-w-lg mx-auto leading-relaxed">
            Svaka ozbiljna promena počinje jednom odlukom. <br />
            Ne sutra. Ne „jednog dana“. <br />
            <span className="text-white">Danas.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setPage('checkout')}
              className="px-12 py-5 bg-[#c5a059] text-[#0a0a0a] text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-white transition-all duration-500"
            >
              Poruči knjigu „Džentlmen“
            </button>
          </div>
        </div>
      </section>

      {/* 8. BONUS / POKLON SEKCIJA */}
      <section className="pb-24 md:pb-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1a1a1a] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 border border-white/5">
            <div className="md:w-1/2">
               <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Poklon koji ostaje</span>
               <h2 className="serif text-4xl md:text-5xl font-light mb-8 italic">Idealan poklon za muškarca</h2>
               <p className="text-base font-light opacity-50 leading-relaxed mb-8">
                 „Džentlmen“ nije samo knjiga — to je poruka, stav i vrednost koju poklanjaš.
                 Savršen poklon za muškarca koji drži do sebe, ili za onog koji želi da postane bolja verzija sebe.
               </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
               <div className="w-px h-32 bg-gradient-to-b from-[#c5a059] to-transparent hidden md:block"></div>
               <div className="text-center md:text-left md:pl-16">
                 <p className="serif text-2xl font-light italic mb-2">Simbolika karaktera.</p>
                 <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">Više od samog predmeta</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
