
import React from 'react';

interface HeroProps {
  onMembershipClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onMembershipClick }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] pt-20 pb-20">
      {/* Background - Atmospheric Faceless Luxury */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale contrast-125 scale-100 transition-transform duration-[40000ms] animate-slow-zoom"></div>
        {/* Deep shadows to emphasize "Quiet Power" */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-[1400px] mx-auto space-y-12 md:space-y-16">
          <div className="overflow-hidden">
            <span className="gold-accent text-[8px] md:text-[10px] tracking-[2.8em] uppercase font-light block opacity-30 animate-reveal">
              GENTLEMEN'S CLUB SERBIA
            </span>
          </div>
          
          <h1 className="serif text-5xl md:text-[9rem] lg:text-[13rem] font-light leading-[0.75] tracking-tighter animate-fade-in-up">
            Tiha moć. <br />
            <span className="italic gold-accent font-light opacity-80">Nepokolebljiv karakter.</span>
          </h1>

          <div className="max-w-2xl mx-auto space-y-10 md:space-y-16 animate-fade-in-up delay-500">
            <p className="text-[9px] md:text-[11px] font-light opacity-30 tracking-[0.8em] uppercase leading-loose italic serif max-w-xl mx-auto">
              Nismo ovde da bismo bili viđeni. Ovde smo da bismo rasli zajedno. <br/> Standard življenja za odabranu manjinu.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 pt-12">
              <button 
                onClick={onMembershipClick}
                className="group relative px-20 py-8 bg-[#c5a059] text-[#050505] text-[10px] uppercase tracking-[0.8em] font-bold transition-all duration-1000 hover:bg-white overflow-hidden shadow-2xl"
              >
                <span className="relative z-10">Zatraži Članstvo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Vertical Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-12 opacity-10">
        <span className="text-[6px] uppercase tracking-[2em] gold-accent rotate-90 origin-left translate-x-1.5 mb-12">Investigation</span>
        <div className="w-px h-40 bg-gradient-to-b from-[#c5a059] via-[#c5a059]/20 to-transparent"></div>
      </div>
    </section>
  );
};
