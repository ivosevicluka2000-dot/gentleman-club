
import React from 'react';

interface BlogPostProps {
  slug: string;
}

const blogData: Record<string, { title: string, subtitle: string, category: string, image: string, content: React.ReactNode }> = {
  'disciplina-kao-osnova-slobode': {
    category: 'FILOZOFIJA',
    title: 'Disciplina kao osnova slobode modernog muškarca',
    subtitle: 'Zašto su striktna pravila jedini put ka istinskoj autonomiji.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop',
    content: (
      <div className="space-y-12">
        <p className="serif text-3xl italic opacity-80 leading-relaxed mb-24">Moderan muškarac živi u paradoksu. Nikada nismo imali više opcija, a nikada nismo bili manje slobodni.</p>
        <div className="space-y-12 text-lg font-light opacity-60 leading-loose tracking-wide">
          <p>U svetu koji prodaje instant gratifikaciju na svakom koraku, disciplina se često doživljava kao teret, kao ograničenje koje nas sprečava da "uživamo u životu". Međutim, istina je upravo suprotna. Bez discipline, mi nismo ništa drugo do robovi sopstvenih impulsa i tuđih algoritama.</p>
          <p>Prava sloboda ne dolazi iz mogućnosti da radimo šta god poželimo u bilo kom trenutku. To je recept za anarhiju duha i postepeno propadanje karaktera. Prava sloboda je sposobnost da kažete "ne" onome što vas slabi, kako biste mogli da kažete "da" onome što vas gradi. To je svesna odluka da podredite kratkoročni užitak dugoročnom cilju.</p>
          <p>Kada džentlmen postavi svoju jutarnju rutinu, kada se drži svog plana treninga i kada striktno upravlja svojim vremenom, on ne gubi slobodu. On je stvara. On gradi strukturu unutar koje može da deluje sa apsolutnom sigurnošću i fokusom. On uklanja buku nevažnih odluka i oslobađa svoj mentalni kapacitet za stvari koje zaista pomeraju granice.</p>
          <p>Disciplina je unutrašnja arhitektura uspeha. Ona je razlika između čoveka koji reaguje na svet oko sebe i čoveka koji taj svet oblikuje. U Gentlemen’s Club-u, mi ne gledamo na disciplinu kao na kaznu, već kao na privilegiju. To je alat koji nam omogućava da ostanemo dosledni svojim vrednostima i kada je teško, i kada niko ne gleda, i kada je lakše odustati.</p>
          <p>Na kraju dana, sloboda bez discipline je samo iluzija. To je lutanje bez kompasa. Tek kada ovladate sobom, možete se nadati da ćete ovladati bilo čime drugim u životu.</p>
        </div>
      </div>
    )
  },
  'networking-bez-kartica': {
    category: 'STRATEGIJA',
    title: 'Zašto pravi networking nema veze sa karticama i LinkedIn-om',
    subtitle: 'Duboko pozicioniranje i izgradnja saveza koji traju generacijama.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop',
    content: (
      <div className="space-y-12">
        <p className="serif text-3xl italic opacity-80 leading-relaxed mb-24">Pravi networking se dešava u tišini. On se ne meri brojem konekcija, već dubinom poverenja.</p>
        <div className="space-y-12 text-lg font-light opacity-60 leading-loose tracking-wide">
          <p>Danas je networking postao sinonim za transakciju. Ljudi odlaze na događaje sa ciljem da "pokupe" što više vizit karti ili da dodaju nepoznate ljude na digitalne platforme. To nije networking; to je sakupljanje podataka. Pravi džentlmen razume da se savezi grade na zajedničkim vrednostima i dokazanom karakteru.</p>
          <p>U visokim krugovima, vaša vrednost nije definisana onim što tražite, već onim što donosite za sto. Najmoćniji ljudi ne traže nove kontakte; oni traže saveznike. Oni traže ljude na koje se mogu osloniti kada se situacija zakomplikuje, ljude koji drže svoju reč i ljude čiji integritet nije na prodaju.</p>
          <p>Izgradnja mreže uticaja zahteva vreme i diskreciju. To je proces koji se ne može ubrzati. On počinje malim gestovima, pružanjem vrednosti bez očekivanja trenutne protivusluge i pažljivim slušanjem. U svetu gde svi pričaju, onaj ko sluša i razume potrebe drugih postaje najvrednija osoba u prostoriji.</p>
          <p>Zaboravite na "pitch" i prodaju. Fokusirajte se na izgradnju reputacije čoveka koji rešava probleme i koji spaja ljude. Kada postanete čvor u mreži kroz koji prolaze rešenja, vaša pozicija postaje neosporna. Vaš "networking" tada prestaje da bude rad, a postaje prirodna posledica vašeg karaktera.</p>
          <p>Pravi savezi se sklapaju uz cigare, dugačke razgovore i zajedničke izazove. Oni su nevidljivi za javnost, ali su najjača poluga koju možete imati u biznisu i životu. Budite selektivni. Čuvajte svoju mrežu kao najvredniji kapital. Jer u kriznim vremenima, vaša jedina prava sigurnost su ljudi koji će vam se javiti na telefon u 3 ujutru.</p>
        </div>
      </div>
    )
  },
  'zajednica-kao-leverage': {
    category: 'ZAKONI MOĆI',
    title: 'Zajednica kao leverage – zašto sam ne ideš daleko',
    subtitle: 'Zašto je "self-made" mit koji usporava vaš istinski napredak.',
    image: 'https://images.unsplash.com/photo-1557426322-6c30b462193b?q=80&w=2000&auto=format&fit=crop',
    content: (
      <div className="space-y-12">
        <p className="serif text-3xl italic opacity-80 leading-relaxed mb-24">Vuk samotnjak je figura romantizma, ali u realnosti – on je prvi koji strada.</p>
        <div className="space-y-12 text-lg font-light opacity-60 leading-loose tracking-wide">
          <p>Ideja "self-made" čoveka je jedan od najopasnijih mitova modernog doba. Niko ko je postigao značajan uspeh nije to uradio potpuno sam. Svaki veliki lider je imao mentore, saveznike i zajednicu koja mu je čuvala leđa. Razlika između uspeha i izvrsnosti leži u vašoj sposobnosti da koristite polugu kolektiva.</p>
          <p>Zajednica nije samo grupa ljudi; to je sistem razmene znanja, iskustva i resursa. Kada ste deo elitnog kruga, vi ne rešavate probleme samo svojom pameću – vi koristite kolektivnu inteligenciju stotina ljudi koji su prošli slične puteve. To je ultimativni leverage. Ono što bi vam samom trebalo 10 godina da naučite, u pravoj zajednici možete razumeti za 10 minuta razgovora.</p>
          <p>Međutim, pripadnost takvoj zajednici se ne kupuje samo novcem. Ona se zarađuje doprinosom. U Gentlemen’s Club-u, mi verujemo u radikalnu odgovornost prema grupi. Ako ste vi jači, ceo klub je jači. Ako klub raste, raste i vaša moć. To je simbioza koja stvara nezaustavljivu silu na tržištu i u društvu.</p>
          <p>Ljudska istorija je istorija plemena i bratstava. Oni koji su razumeli moć organizovane grupe uvek su vladali onima koji su pokušavali sve sami. U modernom svetu, gde su izazovi globalni i kompleksni, potreba za čvrstim, diskretnim i moćnim krugom ljudi je veća nego ikada.</p>
          <p>Prestanite da pokušavate da budete heroj sopstvene tragedije kroz izolaciju. Pronađite svoje ljude. Postavite standarde koji vas obavezuju jedne prema drugima. Tek kada se povežete sa izvorom veće snage, otkrićete koliko daleko zaista možete stići.</p>
        </div>
      </div>
    )
  }
};

export const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const post = blogData[slug];

  if (!post) return <div className="pt-64 text-center serif text-3xl italic opacity-40">Post not found.</div>;

  return (
    <article className="bg-[#050505] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src={post.image} className="w-full h-full object-cover opacity-30 grayscale contrast-125" alt={post.title} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-12">
          <span className="gold-accent text-[10px] tracking-[1em] uppercase opacity-40 block">{post.category}</span>
          <h1 className="serif text-5xl md:text-8xl font-light leading-tight italic tracking-tight uppercase">
            {post.title}
          </h1>
          <p className="text-[12px] uppercase tracking-[0.5em] opacity-40 italic font-light max-w-2xl mx-auto">
            {post.subtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-48 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {post.content}
          
          <div className="mt-48 pt-24 border-t border-white/5 flex flex-col items-center space-y-16">
            <div className="w-px h-24 bg-gradient-to-b from-[#c5a059] to-transparent"></div>
            <div className="text-center space-y-8">
              <p className="text-[10px] uppercase tracking-[0.5em] opacity-30">Zanima vas više?</p>
              <h4 className="serif text-4xl italic font-light opacity-80">Postanite deo diskretnog kruga.</h4>
              <button className="px-16 py-6 bg-[#c5a059] text-[#050505] text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-white transition-all duration-1000">
                SAZNAJ VIŠE O KLUBU
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
