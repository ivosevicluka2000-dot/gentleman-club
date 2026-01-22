
import React, { useState } from 'react';

const modules = [
  {
    id: '01',
    title: 'Modul 1: Osnove Džentlmenstva',
    content: (
      <div className="space-y-16">
        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Od muškarca do džentlmena</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Promena mindset-a kao temelj razvoja</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Promena načina razmišljanja predstavlja osnovu svakog ličnog i profesionalnog napretka. Od mindset-a zavisi da li ćemo napredovati, kojim tempom i u kom pravcu.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
            <ul className="space-y-2">
              {['Lični razvoj', 'Lakše prilagođavanje promenama', 'Efikasnije rešavanje problema'].map(item => (
                <li key={item} className="text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-3">
                  <span className="w-1 h-1 bg-[#c5a059] rounded-full"></span> {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {['Profesionalni uspeh', 'Jačanje samopouzdanja', 'Unapređenje mentalnog zdravlja'].map(item => (
                <li key={item} className="text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-3">
                  <span className="w-1 h-1 bg-[#c5a059] rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Transformacija iznutra</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Koraci ka duhovnom razvoju</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Ova celina vodi učesnike kroz proces unutrašnje transformacije i duhovnog rasta. Kroz praktične vežbe i konkretne primere uči se kako prepoznati i osloboditi se negativnih obrazaca, koristiti molitvu za postizanje mira i povezati se sa višom svrhom.
          </p>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Savremeni bonton</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Od starih pravila do novih standarda</p>
          <p className="text-sm opacity-50 leading-relaxed">
            Poznavanje bontona, manira i društvene odgovornosti ima ključnu ulogu u izgradnji pozitivnih međuljudskih odnosa i profesionalnog integriteta. Obrađuju se savremeni bonton, poslovna etika i društvena odgovornost.
          </p>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Telo kao hram</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Fitness i ishrana za modernog muškarca</p>
          <p className="text-sm opacity-50 leading-relaxed">
            Razumevanje tela kao osnove snage, stabilnosti i mentalne izdržljivosti. Cilj je izgradnja tela koje odražava disciplinu, stil i posvećenost zdravlju.
          </p>
        </div>
      </div>
    )
  },
  {
    id: '02',
    title: 'Modul 2: Stil i Elegancija',
    content: (
      <div className="space-y-16">
        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Odeća kao sredstvo komunikacije</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Odabir kroja i materijala</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Odabir garderobe nije puko odevanje, već snažno sredstvo komunikacije koje govori o karakteru, statusu i stilu. Kroz ovu celinu učesnici uče kako pažljiv izbor kroja i materijala direktno utiče na profesionalni i lični imidž.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Značaj kroja u odnosu na građu',
              'Izbor materijala i njihova primena',
              'Pravilno kombinovanje garderobe',
              'Uticaj stila na samopouzdanje'
            ].map(item => (
              <li key={item} className="text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-3">
                <span className="w-1 h-1 bg-[#c5a059] rounded-full"></span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Majstorstvo detalja</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Satovi kao simbol statusa</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Pravilno odabran sat nije samo aksesoar, već simbol sofisticiranosti, discipline i statusa. Učesnici će naučiti kako sat utiče na imidž, simboliku različitih tipova satova i kako donositi promišljene odluke pri izboru.
          </p>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Elegancija i status</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Nakit kao Vaš lični pečat</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Ova celina posvećena je razumevanju nakita kao suptilnog, ali moćnog simbola ličnosti i pozicije. Obrađuju se prepoznavanje kvalitetnih komada, istorija nakita i balans između diskretnosti i autoriteta.
          </p>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Nega kao ritual</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Vodič kroz mušku kozmetiku</p>
          <p className="text-sm opacity-50 leading-relaxed">
            U savremenom svetu, nega nije luksuz već potreba. Učesnici će naučiti kako razviti personalizovanu rutinu nege, odabrati proverene proizvode i kako nega postaje svakodnevni ritual koji izdvaja.
          </p>
        </div>
      </div>
    )
  },
  {
    id: '03',
    title: 'Modul 3: Hedonizam i džentlmen kultura',
    content: (
      <div className="space-y-16">
        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Vinski kompas</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Putovanje kroz čula i istoriju</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Vinski kompas je ulaz u svet sofisticiranosti, gde vino nije samo piće, već umetnost i filozofija života. Ova celina vodi učesnike kroz razumevanje vina kao dela kulture, tradicije i društvenog identiteta.
          </p>
          <ul className="space-y-3">
            {[
              'Naučiti kako da sa sigurnošću birate vino za svaku priliku',
              'Razumeti osnovne principe vinske kulture i istorije',
              'Razviti ukus i znanje koje ostavlja snažan utisak'
            ].map(item => (
              <li key={item} className="text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-3">
                <span className="w-1 h-1 bg-[#c5a059] rounded-full"></span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Cigar kultura</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Ritual, elegancija i strast</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Ova celina predstavlja jedinstveno putovanje kroz svet cigara — od istorije i tradicije, do savremenog simbolizma prestiža i sofisticiranosti.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Poreklo i razvoj cigar kulture',
              'Pravilan izbor cigare za različite prilike',
              'Tehnike pravilnog rezanja i paljenja',
              'Načinima usklađivanja cigare sa pićem'
            ].map(item => (
              <li key={item} className="text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-3">
                <span className="w-1 h-1 bg-[#c5a059] rounded-full"></span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Gastro avantura</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Džentlmenski pristup kuhinji</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Ova celina donosi praktičan i sofisticiran pogled na kuhinju kao prostor izražavanja stila i hedonizma. Učesnici uče kako da kroz hranu ostave snažan utisak i podignu kvalitet svakodnevnog života.
          </p>
          <div className="aspect-video w-full max-w-2xl mx-auto bg-black border border-white/5 flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden my-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:border-[#c5a059] transition-all">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1 group-hover:border-l-[#c5a059]"></div>
            </div>
            <span className="text-[8px] uppercase tracking-[0.4em] opacity-30">Video insert sa predavanja</span>
          </div>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Plesni kodeks</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Osnove plesa za svaku priliku</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Plesni kodeks je celina posvećena razvoju samopouzdanja, elegancije i pravilnog ponašanja u društvenim situacijama. Fokus nije samo na koracima, već na stavu i prisutnosti.
          </p>
          <div className="aspect-video w-full max-w-2xl mx-auto bg-black border border-white/5 flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden my-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:border-[#c5a059] transition-all">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1 group-hover:border-l-[#c5a059]"></div>
            </div>
            <span className="text-[8px] uppercase tracking-[0.4em] opacity-30">Video insert sa predavanja</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '04',
    title: 'Modul 4: ALFA muškarac',
    content: (
      <div className="space-y-16">
        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Lična bezbednost</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Uvod u samoodbranu za svakodnevni život</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            U savremenom svetu, lična bezbednost predstavlja osnovu mirnog i stabilnog života. Ova celina osmišljena je da razvije svest, samopouzdanje i sposobnost reagovanja u realnim situacijama.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Osnovne tehnike samoodbrane',
              'Prepoznavanje rizičnih situacija',
              'Zaštita sebe i bližnjih',
              'Efikasnost pod pritiskom'
            ].map(item => (
              <li key={item} className="text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-3">
                <span className="w-1 h-1 bg-[#c5a059] rounded-full"></span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Prva pomoć</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Osnove za svakog muškarca</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Ova celina posvećena je veštinama koje svaki odgovoran muškarac treba da poseduje. Znanje prve pomoći može napraviti ključnu razliku u kriznim situacijama.
          </p>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Vatreno oružje</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Sve što treba da znaš</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Ova celina pruža temeljno razumevanje vatrenog oružja, sa fokusom na odgovornost, bezbednost i zakonitost. Obrađuju se rukovanje, bezbednosna pravila, zakonski okvir i psihološki aspekti.
          </p>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Urban Tactic</h4>
          <p className="text-xl serif italic opacity-80 mb-4">CQB tehnike pištolja</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Fokusirano na savladavanje osnovnih urbanih taktika i tehnika borbe na blizinu (CQB – Close Quarters Battle), razvoj mentalne oštrine i primenu taktika u realnim situacijama.
          </p>
        </div>

        {/* BONUS PREDAVANJE SECTION */}
        <div className="pt-12 mt-12 border-t border-white/10 bg-white/5 p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 uppercase text-[8px] tracking-[0.4em] font-bold">Additional tier</div>
          <h4 className="gold-accent text-[10px] uppercase tracking-[0.5em] mb-8 font-bold flex items-center gap-4">
             ➤ BONUS PREDAVANJE
          </h4>
          <h3 className="serif text-2xl md:text-4xl font-light italic mb-8">Komandos – marš, planinsko vojno borenje i preživljavanje</h3>
          <p className="text-sm opacity-50 leading-relaxed mb-12">
            Ovo predavanje predstavlja jedinstveno iskustvo namenjeno onima koji žele da testiraju svoje granice u ekstremnim uslovima. Kroz rad u zahtevnom planinskom okruženju, obrađuju se veštine preživljavanja, alpinizam i taktike marša.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-12 border-l border-white/5 pl-8">
             <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest gold-accent">Status</p>
                <p className="serif text-xl italic opacity-80">Po izboru</p>
             </div>
             <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest gold-accent">Investicija</p>
                <p className="serif text-xl italic opacity-80">Plaća se dodatno</p>
             </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 italic">Nije uključena u cenu programa. Namenjena je onima koji žele više.</p>
        </div>
      </div>
    )
  },
  {
    id: '05',
    title: 'Modul 5: Nasleđe i veštine heroja',
    content: (
      <div className="space-y-16">
        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Priroda kao lekar</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Prirodna medicina i prevencija</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Ova celina uvodi učesnike u svet prirodne medicine i preventivnog pristupa zdravlju. Fokus je na razumevanju prirode kao saveznika u očuvanju vitalnosti i dugoročnog zdravlja.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Upotreba lekovitih biljaka',
              'Pravilan izbor namirnica',
              'Principi prevencije kroz ishranu',
              'Mala promena za velike benefite'
            ].map(item => (
              <li key={item} className="text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-3">
                <span className="w-1 h-1 bg-[#c5a059] rounded-full"></span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Jahanje</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Elegancija u sedlu</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Konjički svet spaja tradiciju, disciplinu i eleganciju. Jahanje razvija ravnotežu, gracioznost i unutrašnju stabilnost, predstavljajući poseban stil života i umetnost kretanja.
          </p>
        </div>

        <div className="pt-12 mt-12 border-t border-white/10 bg-white/5 p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 uppercase text-[8px] tracking-[0.4em] font-bold">Additional tier</div>
          <h4 className="gold-accent text-[10px] uppercase tracking-[0.5em] mb-8 font-bold flex items-center gap-4">
             ➤ BONUS PREDAVANJE
          </h4>
          <h3 className="serif text-2xl md:text-4xl font-light italic mb-8">Vitez današnjeg doba – viteške veštine modernog muškarca</h3>
          <p className="text-sm opacity-50 leading-relaxed mb-12">
            Ekskluzivno predavanje o viteškim veštinama i principima koji su oblikovali ratnike prošlosti. Uključuje demonstracije drevnih tehnika borbe, srednjovekovne oklope i razvoj identiteta modernog viteza kroz čast i disciplinu.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-12 border-l border-white/5 pl-8">
             <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest gold-accent">Status</p>
                <p className="serif text-xl italic opacity-80">Po izboru</p>
             </div>
             <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest gold-accent">Investicija</p>
                <p className="serif text-xl italic opacity-80">Plaća se dodatno</p>
             </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 italic">Nije uključena u cenu programa. Izgradite mentalnu čvrstinu.</p>
        </div>
      </div>
    )
  },
  {
    id: '06',
    title: 'Modul 6: Preduzetništvo i finansije',
    content: (
      <div className="space-y-16">
        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Umetnost komunikacije</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Javni nastup i dikcija</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Razvoj jasne, sigurne i autoritativne komunikacije ključan je za svakog lidera. Rad na kontroli glasa, tona i dikcije omogućava ostavljanje snažnog utiska u svakom društvenom i poslovnom okruženju.
          </p>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Pregovaranje i prodaja</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Ključni alati za poslovni uspeh</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Savremene strategije za efikasnu komunikaciju u pregovorima, izgradnju poverenja i zaključivanje poslova na obostranu korist. Veštine koje imaju primenu u svim sferama života.
          </p>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Strast u biznisu</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Preduzetništvo i finansijska pismenost</p>
          <p className="text-sm opacity-50 leading-relaxed mb-6">
            Povezivanje energije preduzetništva sa mudrim upravljanjem novcem. Prepoznavanje prilika, smanjenje rizika i povećanje profita kroz informisane finansijske odluke.
          </p>
        </div>

        <div>
          <h4 className="gold-accent text-xs uppercase tracking-widest mb-6">➤ Transformacija biznisa</h4>
          <p className="text-xl serif italic opacity-80 mb-4">Uvod u digitalno preduzetništvo i marketing</p>
          <p className="text-sm opacity-50 leading-relaxed">
            Principi digitalnog poslovanja neophodni za rast u današnjem dobu. Strategije online prisustva i unapređenje komunikacije sa klijentima uz pametna ulaganja.
          </p>
        </div>
      </div>
    )
  }
];

export const MentorshipPage: React.FC = () => {
  const [openModule, setOpenModule] = useState<string | null>(null);

  return (
    <div className="pt-24 md:pt-32">
      {/* 1. HERO - EMOTIONAL TRIGGER */}
      <section className="h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-15 grayscale contrast-125"
            alt="The Ambition"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-xs tracking-[0.6em] uppercase gold-accent mb-12 font-medium italic">Viši nivo odgovornosti</h4>
            <h1 className="serif text-5xl md:text-8xl font-light mb-16 tracking-tight leading-none uppercase">
              Diplomat’s <br /><span className="italic gold-accent">Mentorship</span>
            </h1>
            <div className="space-y-8">
              <p className="serif text-2xl md:text-5xl font-light opacity-90 italic leading-tight max-w-2xl mx-auto">
                Diplomat's Mentorship je namenjen muškarcima koji su spremni da preuzmu odgovornost i naprave ozbiljan iskorak u poslu, razmišljanju i životu.
              </p>
              <div className="w-px h-24 bg-gradient-to-b from-[#c5a059] to-transparent mx-auto"></div>
              <p className="text-sm md:text-base font-light opacity-40 uppercase tracking-[0.4em] italic">
                Ovo nije motivacioni program. Ovo je mentorski proces.
              </p>
            </div>
            <div className="mt-16">
              <a href="#prijava" className="px-16 py-6 bg-[#c5a059] text-[#0a0a0a] text-[10px] uppercase tracking-[0.5em] font-medium hover:bg-white transition-all duration-500">
                Prijavi se za mentorship
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ŠTA JE DIPLOMAT’S MENTORSHIP */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-12 block">Definicija procesa</span>
              <h2 className="serif text-4xl md:text-6xl font-light mb-12 italic leading-tight">Direktan prenos <br /> iskustva i strukture.</h2>
              <p className="text-lg md:text-xl font-light opacity-60 leading-relaxed italic serif">
                Diplomat’s Mentorship je intenzivan mentorski program zasnovan na direktnom radu, strukturi i odgovornosti.
              </p>
            </div>
            <div className="bg-[#111] p-12 border border-white/5">
              <p className="text-xs uppercase tracking-[0.3em] gold-accent mb-8">Program je kreiran za one koji:</p>
              <ul className="space-y-6">
                {['žele jasnoću', 'traže strukturu', 'razumeju vrednost discipline', 'nisu zadovoljni prosekom'].map(item => (
                  <li key={item} className="serif text-2xl italic font-light opacity-70 flex items-center gap-6">
                    <span className="w-px h-6 bg-white/10"></span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-12 text-[10px] uppercase tracking-widest opacity-30 italic">
                Mentorship zahteva posvećenost, kontinuitet i spremnost na ličnu promenu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODULI (ACCORDION) */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24">
            <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">Kurikulum</span>
            <h2 className="serif text-4xl md:text-6xl font-light italic mb-8">Moduli programa</h2>
            <p className="text-xs opacity-30 uppercase tracking-[0.2em]">Samo jedna stavka otvorena u isto vreme</p>
          </div>

          <div className="space-y-4">
            {modules.map((mod) => (
              <div key={mod.id} className="border border-white/5 bg-[#0a0a0a] overflow-hidden">
                <button 
                  onClick={() => setOpenModule(openModule === mod.id ? null : mod.id)}
                  className="w-full px-12 py-10 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-[10px] gold-accent font-mono opacity-40">{mod.id}</span>
                    <span className={`serif text-2xl md:text-3xl font-light transition-all duration-500 ${openModule === mod.id ? 'gold-accent' : 'opacity-80 group-hover:opacity-100'}`}>
                      {mod.title}
                    </span>
                  </div>
                  <div className={`w-8 h-8 flex items-center justify-center relative transition-transform duration-500 ${openModule === mod.id ? 'rotate-180' : ''}`}>
                    <div className="w-4 h-[1px] bg-white/40"></div>
                    <div className={`absolute w-[1px] h-4 bg-white/40 transition-transform duration-500 ${openModule === mod.id ? 'rotate-90 scale-0' : ''}`}></div>
                  </div>
                </button>
                <div className={`transition-all duration-700 ease-in-out ${openModule === mod.id ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-12 pb-16 pt-8 border-t border-white/5">
                    {mod.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VIDEO PLACEHOLDER */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video bg-black border border-white/5 relative flex items-center justify-center group overflow-hidden shadow-2xl">
             <div className="absolute inset-0 grayscale opacity-40 group-hover:opacity-20 transition-opacity duration-1000">
                <img src="https://images.unsplash.com/photo-1557426322-6c30b462193b?q=80&w=2070&auto=format&fit=crop" alt="Mentor Insight" className="w-full h-full object-cover" />
             </div>
             <div className="relative z-10 text-center">
                <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-[#c5a059] group-hover:scale-110 transition-all duration-500">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover:border-l-[#c5a059] transition-colors"></div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.5em] opacity-40">Uvid u rad mentora</span>
             </div>
          </div>
        </div>
      </section>

      {/* 6. DIPLOMA */}
      <section className="py-24 md:py-48 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
           <span className="gold-accent text-[10px] tracking-[0.4em] uppercase mb-12 block">Sertifikacija</span>
           <h2 className="serif text-4xl md:text-7xl font-light mb-12 italic">Diploma Autoriteta</h2>
           <div className="p-16 border border-white/5 bg-[#0a0a0a] relative group overflow-hidden">
              <p className="serif text-2xl font-light italic opacity-60 leading-relaxed">
                Po završetku mentorski procesa, učesnici dobijaju <span className="gold-accent">Diploma Mentorship</span> sertifikat kao potvrdu uloženog rada i prolaska kroz program.
              </p>
           </div>
        </div>
      </section>

      {/* 7. TRAJANJE I CENA */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
           <div className="grid md:grid-cols-2 gap-12 text-center">
              <div className="p-12 border border-white/5 bg-[#0a0a0a]">
                 <p className="text-[10px] uppercase tracking-widest opacity-40 mb-4">Trajanje</p>
                 <p className="serif text-4xl gold-accent italic font-light">Intenzivno 2 meseca</p>
              </div>
              <div className="p-12 border border-white/5 bg-[#0a0a0a]">
                 <p className="text-[10px] uppercase tracking-widest opacity-40 mb-4">Investicija</p>
                 <p className="serif text-4xl gold-accent italic font-light">2400 EUR</p>
                 <p className="text-[10px] uppercase tracking-widest opacity-20 mt-2">Redovna: 3450 EUR</p>
              </div>
           </div>
           <div className="mt-24 text-center">
              <p className="serif text-3xl font-light italic opacity-60 mb-12">Mentorship nije otvoren za sve. Svaka prijava se razmatra individualno.</p>
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 italic">Ako razmišljaš predugo — verovatno nije za tebe.</p>
           </div>
        </div>
      </section>

      {/* 8. PRIJAVA */}
      <section id="prijava" className="py-24 md:py-48 px-6 md:px-12 bg-white text-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl md:text-7xl font-light mb-8 italic leading-none uppercase">Prijava za <br /> Mentorski Proces</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-medium">Budite deo selektovanog kruga</p>
          </div>

          <form className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold italic">Ime i prezime*</label>
                <input type="text" className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-3 focus:border-[#c5a059] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold italic">Email adresa*</label>
                <input type="email" className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-3 focus:border-[#c5a059] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold italic">Kontakt telefon*</label>
                <input type="tel" className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-3 focus:border-[#c5a059] outline-none transition-colors" />
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold italic">Zašto želiš Diplomat’s Mentorship?*</label>
                <textarea className="w-full bg-transparent border-b border-[#0a0a0a]/10 py-3 focus:border-[#c5a059] outline-none transition-colors h-32 resize-none"></textarea>
              </div>
            </div>

            <div className="pt-12 flex justify-center">
              <button type="submit" className="px-24 py-6 bg-[#0a0a0a] text-white text-[10px] uppercase tracking-[0.5em] font-medium hover:bg-[#c5a059] transition-all duration-500">
                Pošalji prijavu
              </button>
            </div>
          </form>

          <div className="mt-24 pt-12 border-t border-[#0a0a0a]/10 text-center">
             <p className="serif text-3xl font-light italic opacity-60">Postani deo Gentlemen’s Club-a</p>
             <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mt-4">Zajednica onih koji razumeju vrednost discipline.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
