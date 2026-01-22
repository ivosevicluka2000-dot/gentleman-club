
import React from 'react';

interface ProgramsProps {
  setPage: (page: 'home' | 'book' | 'community' | 'masterclass' | 'mentorship' | 'monarh' | 'redcarpet' | 'events' | 'meetup' | 'concierge' | 'blog') => void;
}

const programData = [
  {
    id: '01',
    pageId: 'community',
    title: 'Online Zajednica',
    desc: 'Privatna platforma za razmenu ideja, resursa i kontakata koji otvaraju vrata.',
  },
  {
    id: '02',
    pageId: 'masterclass',
    title: 'MasterClass',
    desc: 'Ekskluzivni uvidi od onih koji su već prešli put kojim vi koračate.',
  },
  {
    id: '03',
    pageId: 'mentorship',
    title: 'Mentorship',
    desc: 'Direktan rad sa mentorima na razvoju vašeg punog potencijala.',
  },
  {
    id: '04',
    pageId: 'events',
    title: 'Events',
    desc: 'Zatvoreni događaji na najprestižnijim lokacijama, gde se sklapaju savezi.',
  }
];

export const Programs: React.FC<ProgramsProps> = ({ setPage }) => {
  return (
    <section id="programi" className="py-32 md:py-48 bg-[#0a0a0a] border-y border-white/5 relative">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-16">
          <div className="max-w-5xl space-y-12">
            <span className="gold-accent text-[13px] tracking-[1em] uppercase opacity-40 block">Programi i Inicijative</span>
            <h2 className="serif text-6xl md:text-8xl font-light leading-[0.85] tracking-tighter">
              Stubovi rasta <br />
              <span className="italic gold-accent">unutar kluba.</span>
            </h2>
          </div>
          <div className="lg:max-w-sm text-[14px] font-light opacity-30 tracking-[0.3em] uppercase leading-[2.2] border-l border-gold/20 pl-12 italic">
            Pažljivo dizajnirani programi za modernog lidera. Svaki stub je ulaznica u novi krug uticaja.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {programData.map((prog) => (
            <div 
              key={prog.id} 
              onClick={() => setPage(prog.pageId as any)}
              className="bg-[#0a0a0a] p-10 md:p-16 group hover:bg-[#c5a059] transition-all duration-1000 flex flex-col h-[500px] relative cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-10 overflow-hidden pointer-events-none">
                 <span className="serif text-[10rem] font-light italic gold-accent/5 group-hover:text-black/5 transition-all duration-1000 leading-none">
                   {prog.id}
                 </span>
              </div>

              <span className="text-[13px] tracking-[0.8em] opacity-30 mb-24 block font-light group-hover:text-black group-hover:opacity-60 transition-colors">
                {prog.id} — 04
              </span>
              
              <div className="flex-grow space-y-10">
                <h3 className="serif text-3xl md:text-5xl font-light group-hover:text-black transition-colors duration-[1000ms] italic tracking-tight leading-tight">
                  {prog.title}
                </h3>
                <p className="text-[15px] font-light opacity-40 leading-relaxed tracking-[0.1em] uppercase group-hover:text-black group-hover:opacity-80 transition-all max-w-[280px]">
                  {prog.desc}
                </p>
              </div>
              
              <div className="pt-12 border-t border-white/5 group-hover:border-black/20 flex items-center justify-between">
                <span className="text-[12px] uppercase tracking-[0.6em] gold-accent opacity-0 group-hover:opacity-100 group-hover:text-black transition-all duration-1000 translate-x-[-40px] group-hover:translate-x-0">
                  Saznajte više
                </span>
                <div className="w-10 h-10 border border-white/10 group-hover:border-black/30 rounded-full flex items-center justify-center transition-all duration-1000">
                  <span className="gold-accent opacity-60 group-hover:opacity-100 group-hover:text-black transition-all text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
