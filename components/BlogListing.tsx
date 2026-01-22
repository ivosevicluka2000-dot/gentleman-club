
import React from 'react';

interface BlogListingProps {
  onPostClick: (slug: string) => void;
}

const blogs = [
  {
    slug: 'disciplina-kao-osnova-slobode',
    title: 'Disciplina kao osnova slobode modernog muškarca',
    excerpt: 'Razmišljanje o tome zašto su striktna pravila jedini put ka istinskoj autonomiji u svetu punom distrakcija.',
    category: 'FILOZOFIJA',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop'
  },
  {
    slug: ' networking-bez-kartica',
    title: 'Zašto pravi networking nema veze sa karticama i LinkedIn-om',
    excerpt: 'Duboko pozicioniranje i izgradnja saveza. Strategije koje se ne uče na seminarima.',
    category: 'STRATEGIJA',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop'
  },
  {
    slug: 'zajednica-kao-leverage',
    title: 'Zajednica kao leverage – zašto sam ne ideš daleko',
    excerpt: 'Analiza moći kolektiva i zašto je vuk samotnjak relikt prošlosti koji ne preživljava u modernom sistemu.',
    category: 'ZAKONI MOĆI',
    image: 'https://images.unsplash.com/photo-1557426322-6c30b462193b?q=80&w=2000&auto=format&fit=crop'
  }
];

export const BlogListing: React.FC<BlogListingProps> = ({ onPostClick }) => {
  return (
    <div className="pt-48 pb-64 bg-[#050505] min-h-screen">
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-48 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <span className="gold-accent text-[11px] tracking-[1.2em] uppercase opacity-40 block">Perspective i Razmišljanja</span>
          <h1 className="serif text-7xl md:text-[9rem] font-light leading-[0.9] tracking-tighter">
            Hronike <br /><span className="italic gold-accent">Izvrsnosti.</span>
          </h1>
          <p className="text-[12px] uppercase tracking-[0.4em] opacity-20 font-light max-w-xl mx-auto italic serif leading-loose">
            Mesto gde se susreću tiha moć i duboka analiza. Zapisi namenjeni onima koji ne traže informacije, već uvid.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <article 
              key={blog.slug} 
              onClick={() => onPostClick(blog.slug)}
              className="group cursor-pointer flex flex-col h-full bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-[1200ms] hover:border-gold/30"
            >
              <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[2000ms]">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4000ms] opacity-40" />
              </div>
              <div className="p-16 space-y-10 flex-grow flex flex-col justify-between">
                <div className="space-y-8">
                  <span className="gold-accent text-[9px] tracking-[0.6em] uppercase opacity-40 group-hover:opacity-80 transition-opacity">{blog.category}</span>
                  <h3 className="serif text-3xl font-light italic leading-snug group-hover:gold-accent transition-colors duration-700">{blog.title}</h3>
                  <p className="text-sm font-light opacity-30 leading-relaxed italic opacity-40 group-hover:opacity-60 transition-opacity">
                    {blog.excerpt}
                  </p>
                </div>
                <button className="text-[9px] uppercase tracking-[0.8em] gold-accent opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] translate-y-4 group-hover:translate-y-0 text-left pt-12 border-t border-white/5">
                  Pročitaj →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
