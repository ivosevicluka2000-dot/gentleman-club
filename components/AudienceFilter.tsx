
import React from 'react';

interface AudienceFilterProps {
  onMembershipClick: () => void;
}

export const AudienceFilter: React.FC<AudienceFilterProps> = ({ onMembershipClick }) => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-32 space-y-12">
          <span className="text-[13px] tracking-[1.5em] uppercase mb-8 block font-light gold-accent opacity-40">Filtriranje publike</span>
          <h2 className="serif text-6xl md:text-[10rem] font-light italic tracking-tighter leading-[0.75] mb-12">
            Klub nije <br /> za svakoga.
          </h2>
          <div className="w-px h-20 bg-[#c5a059]/20 mx-auto mt-16"></div>
          <p className="serif text-2xl md:text-4xl font-light opacity-30 italic tracking-wide mt-12 max-w-4xl mx-auto">
            I to je njegova najveća snaga.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 items-start mt-32">
          {[
            { title: "Ambiciozni", desc: "Tražimo ljude koji ne beže od odgovornosti i koji razumeju da je rast bolan ali neophodan." },
            { title: "Diskretni", desc: "U našem svetu, privatnost je najveći luksuz. Čuvamo integritet svakog člana kao svoj sopstveni." },
            { title: "Spremni", desc: "Ako tražite brze trikove ili lake prečice, ovaj klub nije prava adresa za vas." }
          ].map((item, idx) => (
            <div key={idx} className="space-y-10 group relative py-8">
              <span className="text-[12px] font-bold opacity-10 block tracking-[0.6em] gold-accent group-hover:opacity-40 transition-all duration-1000">ENTRY_CRITERIA_0{idx + 1}</span>
              <div className="space-y-8">
                <h4 className="serif text-4xl italic border-b border-white/5 pb-10 group-hover:border-[#c5a059]/40 transition-all duration-1000 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[14px] font-light leading-[2.2] opacity-30 tracking-[0.2em] uppercase">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center space-y-16">
          <div className="w-px h-32 bg-gradient-to-b from-[#c5a059]/40 via-[#c5a059]/5 to-transparent mx-auto"></div>
          <div className="inline-block group cursor-pointer" onClick={onMembershipClick}>
            <p className="text-[12px] uppercase tracking-[1em] font-light opacity-20 mb-10 transition-opacity group-hover:opacity-60 italic serif">
              Saznajte da li pripadate ovde
            </p>
            {/* CTA Button */}
            <button className="px-20 py-8 bg-[#c5a059] text-[#050505] border border-[#c5a059] group-hover:bg-[#050505] group-hover:text-[#c5a059] group-hover:border-[#c5a059] transition-all duration-1000 serif text-3xl md:text-5xl italic tracking-wider shadow-[0_40px_100px_rgba(197,160,89,0.1)]">
              Zatražite pozivnicu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
