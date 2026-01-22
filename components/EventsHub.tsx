
import React from 'react';

interface EventsHubProps {
  setPage: (page: any) => void;
}

export const EventsHub: React.FC<EventsHubProps> = ({ setPage }) => {
  const events = [
    {
      id: 'meetup',
      title: 'Ladies & Gentlemen MeetUp',
      desc: 'Susret sofisticiranosti i društvenog prestiža u diskretnom okruženju.',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'redcarpet',
      title: 'RedCarpet Gala',
      desc: 'Vrhunac godine. Veče koje slavi uspeh, uticaj i pripadnost eliti.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'concierge',
      title: 'Concierge Services',
      desc: 'Bespoke podrška za stil života koji ne poznaje kompromise.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="h-screen flex flex-col justify-center bg-[#050505]">
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-32">
            <span className="gold-accent text-[10px] tracking-[0.5em] uppercase opacity-60 block mb-8">Inicijative i Iskustva</span>
            <h1 className="serif text-6xl md:text-8xl font-light mb-12">Gentlemen’s Club <br /><span className="italic">Events Hub</span></h1>
            <p className="text-sm md:text-base font-light opacity-40 leading-relaxed tracking-wide italic">
              Događaji kluba nisu samo datumi u kalendaru. To su strateški kurirani trenuci dizajnirani da povežu ljude sličnih vrednosti, visokih ambicija i neospornog integriteta.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {events.map((event) => (
              <div key={event.id} className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]" />
                </div>
                <div className="p-12 space-y-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="serif text-3xl italic font-light mb-4 group-hover:gold-accent transition-colors">{event.title}</h3>
                    <p className="text-xs font-light opacity-40 leading-relaxed uppercase tracking-widest">{event.desc}</p>
                  </div>
                  <button 
                    onClick={() => setPage(event.id)}
                    className="w-full py-4 border border-white/10 text-[9px] uppercase tracking-[0.4em] gold-accent hover:bg-gold hover:text-black transition-all duration-500"
                  >
                    Saznaj više
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
