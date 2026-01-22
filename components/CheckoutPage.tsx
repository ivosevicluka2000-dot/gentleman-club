
import React, { useState } from 'react';

export const CheckoutPage: React.FC = () => {
  const [color, setColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const colors = [
    { id: 'black', name: 'CRNA', label: 'Classic', hex: '#000000' },
    { id: 'red', name: 'CRVENA', label: 'Rubin', hex: '#5b0a0a' },
    { id: 'green', name: 'ZELENA', label: 'Smaragd', hex: '#0a3a2a' }
  ];

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment gateway redirect
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] px-6">
        <div className="text-center space-y-12 animate-fade-in">
          <div className="w-px h-24 bg-[#c5a059]/30 mx-auto"></div>
          <h1 className="serif text-5xl md:text-7xl italic gold-accent font-light">Izbor je učinjen.</h1>
          <p className="text-sm uppercase tracking-[0.4em] opacity-40 leading-loose max-w-sm mx-auto">
            Vaša porudžbina je uspešno primljena. <br /> Detalji i potvrda plaćanja su poslati na vašu e-mail adresu.
          </p>
          <div className="w-px h-12 bg-gold/10 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-64 px-6 md:px-12 bg-[#050505] min-h-screen flex flex-col items-center">
      <div className="w-full max-w-2xl space-y-24">
        
        {/* HEADER */}
        <header className="text-center space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.6em] gold-accent opacity-40">Finalize your choice</span>
            <h1 className="serif text-5xl md:text-7xl font-light italic">Poruči knjigu</h1>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-30 italic serif leading-loose">
            Izaberite opcije, unesite podatke i završite plaćanje.
          </p>
          <div className="pt-8 border-t border-white/5 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.3em] opacity-20">
            <span>Bezbedno plaćanje</span>
            <span className="w-1 h-1 bg-gold rounded-full"></span>
            <span>Diskrecija podataka</span>
          </div>
        </header>

        <form onSubmit={handleOrder} className="space-y-32">
          
          {/* PRODUCT OPTIONS */}
          <section className="space-y-16">
            <div className="space-y-10">
              <label className="text-[10px] uppercase tracking-[0.5em] gold-accent opacity-60">BOJA KNJIGE*</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {colors.map((c) => (
                  <label 
                    key={c.id} 
                    className={`cursor-pointer group relative p-8 border transition-all duration-700 flex flex-col items-center gap-4 ${
                      color === c.id ? 'border-[#c5a059] bg-[#0a0a0a]' : 'border-white/5 hover:border-white/20'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="color" 
                      className="hidden" 
                      checked={color === c.id} 
                      onChange={() => setColor(c.id)} 
                    />
                    <div 
                      className="w-12 h-12 rounded-full border border-white/10 shadow-inner group-hover:scale-110 transition-transform" 
                      style={{ backgroundColor: c.hex }}
                    ></div>
                    <div className="text-center">
                      <p className="text-[8px] uppercase tracking-widest opacity-30 mb-1">{c.label}</p>
                      <p className="serif text-xl italic tracking-wide">{c.name}</p>
                    </div>
                    {color === c.id && (
                      <div className="absolute top-2 right-2 text-[#c5a059] animate-pulse">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </label>
                ))}
              </div>
              <p className="text-[9px] uppercase tracking-widest opacity-20 text-center italic">Izaberite svoju boju knjige.</p>
            </div>

            <div className="flex flex-col items-center space-y-6 pt-8">
              <label className="text-[10px] uppercase tracking-[0.5em] gold-accent opacity-60">Količina</label>
              <div className="flex items-center gap-12 border border-white/10 p-4">
                <button 
                  type="button" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-xl opacity-40 hover:opacity-100 hover:gold-accent transition-all"
                >–</button>
                <span className="serif text-3xl italic w-8 text-center">{quantity}</span>
                <button 
                  type="button" 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-xl opacity-40 hover:opacity-100 hover:gold-accent transition-all"
                >+</button>
              </div>
            </div>
          </section>

          {/* SHIPPING FORM */}
          <section className="space-y-20">
            <div className="border-l border-gold/20 pl-10 mb-12">
              <h2 className="serif text-4xl italic font-light opacity-80">Podaci za isporuku</h2>
              <p className="text-[9px] uppercase tracking-[0.4em] opacity-20 mt-2">Dostava isključivo putem proverenih kurira</p>
            </div>

            <div className="space-y-12">
              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Ime i prezime*</label>
                <input required type="text" placeholder="Gospodin / Gospođa..." className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#c5a059] outline-none transition-colors serif text-2xl placeholder:opacity-5" />
              </div>

              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Ulica i broj*</label>
                <input required type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#c5a059] outline-none transition-colors serif text-2xl" />
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Grad i poštanski broj*</label>
                  <input required type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#c5a059] outline-none transition-colors serif text-2xl" />
                </div>
                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Kontakt telefon*</label>
                  <input required type="tel" placeholder="+381..." className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#c5a059] outline-none transition-colors serif text-2xl placeholder:opacity-5" />
                </div>
              </div>

              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">E-mail adresa*</label>
                <input required type="email" placeholder="vas@email.rs" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#c5a059] outline-none transition-colors serif text-2xl placeholder:opacity-5" />
              </div>

              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Napomena (opciono)</label>
                <textarea className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#c5a059] outline-none transition-colors serif text-xl h-24 resize-none"></textarea>
              </div>
            </div>
          </section>

          {/* CONSENT & PAYMENT */}
          <section className="space-y-16 py-16 border-t border-white/5">
            <label className="flex items-start gap-6 cursor-pointer group">
              <div className="relative flex items-center justify-center mt-1">
                <input required type="checkbox" className="peer appearance-none w-5 h-5 border border-white/20 checked:border-[#c5a059] transition-all" />
                <div className="absolute w-2 h-2 bg-[#c5a059] scale-0 peer-checked:scale-100 transition-transform"></div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity leading-relaxed max-w-sm">
                Želim da budem obavešten/a o svim daljim Gentlemen's Club proizvodima i uslugama. <br /> <span className="gold-accent italic">Da, slažem se.</span>
              </span>
            </label>

            <div className="text-center space-y-12">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-30 italic leading-relaxed">
                Nakon popunjene forme, izvršite bezbedno plaćanje klikom na dugme ispod.
              </p>
              
              <div className="relative inline-block w-full">
                <button 
                  disabled={isProcessing}
                  type="submit"
                  className="w-full py-8 bg-[#c5a059] text-[#050505] text-[11px] uppercase tracking-[0.6em] font-bold hover:bg-white transition-all duration-700 shadow-[0_30px_60px_rgba(197,160,89,0.15)] relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className={`relative z-10 transition-opacity ${isProcessing ? 'opacity-0' : 'opacity-100'}`}>
                    Poruči plaćanjem ovde
                  </span>
                  {isProcessing && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-[#050505]/20 border-t-[#050505] rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-[9px] uppercase tracking-[0.4em] opacity-20">
                  Plaćanje je sigurno. Potvrda porudžbine stiže na e-mail.
                </p>
                {isProcessing && (
                  <p className="text-[8px] uppercase tracking-[0.5em] gold-accent animate-pulse">
                    Preusmeravamo vas na bezbedno plaćanje...
                  </p>
                )}
              </div>
            </div>
          </section>

        </form>
      </div>
    </div>
  );
};
