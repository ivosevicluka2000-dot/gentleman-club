
import React, { useState, useEffect } from 'react';

export const LeadMagnet: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('leadMagnetDismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 5000); // 5s delay for a more premium entrance
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('leadMagnetDismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('leadMagnetDismissed', 'true');
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12 animate-fade-in">
      <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-2xl" onClick={handleDismiss}></div>
      
      <div className="relative bg-[#0a0a0a] border border-white/5 w-full max-w-3xl p-12 md:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-gold/20 m-8"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-gold/20 m-8"></div>

        <button 
          onClick={handleDismiss}
          className="absolute top-10 right-10 text-white/10 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="py-24 text-center space-y-12 animate-fade-in">
            <span className="gold-accent text-5xl md:text-6xl serif italic block leading-tight">Zahvaljujemo na <br /> interesovanju.</span>
            <p className="text-[11px] uppercase tracking-[0.5em] opacity-30 leading-loose max-w-sm mx-auto serif italic">
              Link za pristup materijalu je poslat na vašu adresu. Dobrodošli na prag zajednice.
            </p>
            <div className="w-px h-24 bg-gold/20 mx-auto"></div>
          </div>
        ) : (
          <div className="space-y-20 relative">
            <div className="space-y-10 text-center">
              <span className="gold-accent text-[11px] tracking-[1em] uppercase opacity-40 block">Inicijacija u viziju</span>
              <h2 className="serif text-4xl md:text-7xl font-light italic leading-none tracking-tight">Pristup uvodnom materijalu Gentlemen’s Club-a</h2>
              <p className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] opacity-40 leading-loose max-w-2xl mx-auto italic serif">
                Kratko štivo koje objašnjava principe, vrednosti i način razmišljanja zajednice.
              </p>
            </div>

            <div className="space-y-12 text-center">
               <p className="text-[12px] font-light opacity-30 leading-relaxed max-w-lg mx-auto italic serif">
                 Ovo nije javni sadržaj. Materijal je namenjen onima koji razumeju dugoročnu vrednost discipline, reda i okruženja.
               </p>

               <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-12">
                  <div className="relative group text-left">
                    <label className="text-[9px] uppercase tracking-[0.6em] opacity-20 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all block mb-4">E-mail adresa kojoj imate pristup</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="vas@email.rs"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors serif text-2xl placeholder:opacity-5 text-center" 
                    />
                  </div>

                  <button type="submit" className="w-full py-8 bg-[#c5a059] text-[#050505] text-[11px] uppercase tracking-[0.8em] font-bold hover:bg-white transition-all duration-1000 shadow-2xl">
                    ZATRAŽI PRISTUP
                  </button>
               </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
