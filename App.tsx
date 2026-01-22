
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Identity } from './components/Identity';
import { Programs } from './components/Programs';
import { AudienceFilter } from './components/AudienceFilter';
import { Experience } from './components/Experience';
import { BookPage } from './components/BookPage';
import { CheckoutPage } from './components/CheckoutPage';
import { CommunityPage } from './components/CommunityPage';
import { MasterclassPage } from './components/MasterclassPage';
import { MentorshipPage } from './components/MentorshipPage';
import { MonarhPage } from './components/MonarhPage';
import { RedCarpetPage } from './components/RedCarpetPage';
import { EventsHub } from './components/EventsHub';
import { MeetUpPage } from './components/MeetUpPage';
import { ConciergePage } from './components/ConciergePage';
import { Footer } from './components/Footer';
import { BlogListing } from './components/BlogListing';
import { BlogPost } from './components/BlogPost';
import { LeadMagnet } from './components/LeadMagnet';
import { ConciergeBot } from './components/ConciergeBot';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'book' | 'checkout' | 'community' | 'masterclass' | 'mentorship' | 'monarh' | 'redcarpet' | 'events' | 'meetup' | 'concierge' | 'blog' | string>('home');
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsMembershipModalOpen(false);
    }, 3000);
  };

  const isHiddenPage = ['meetup', 'concierge', 'redcarpet', 'checkout'].includes(currentPage);
  const isBlogPost = currentPage.startsWith('blog-post-');

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#c5a059] selection:text-[#0a0a0a] transition-colors duration-1000">
      {!isHiddenPage && <Navbar scrolled={scrolled} setPage={setCurrentPage} currentPage={currentPage} onMembershipClick={() => setIsMembershipModalOpen(true)} />}
      {isHiddenPage && (
        <nav className="fixed top-0 left-0 right-0 z-50 px-12 md:px-24 py-12 flex justify-center border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
          <div className="flex flex-col items-center cursor-pointer group" onClick={() => setCurrentPage('home')}>
            <span className="serif text-2xl md:text-3xl tracking-[0.2em] font-light gold-accent uppercase">GENTLEMEN'S CLUB</span>
            <span className="text-[8px] tracking-[0.8em] uppercase opacity-30 mt-1">Serbia</span>
          </div>
        </nav>
      )}
      
      <main className="animate-fade-in">
        {currentPage === 'home' && (
          <div className="space-y-0">
            <Hero onMembershipClick={() => setIsMembershipModalOpen(true)} />
            <Identity />
            <Programs setPage={setCurrentPage} />
            <AudienceFilter onMembershipClick={() => setIsMembershipModalOpen(true)} />
            <Experience />
            <LeadMagnet />
          </div>
        )}
        {currentPage === 'blog' && <BlogListing onPostClick={(slug) => setCurrentPage(`blog-post-${slug}`)} />}
        {isBlogPost && <BlogPost slug={currentPage.replace('blog-post-', '')} />}
        {currentPage === 'book' && <BookPage setPage={setCurrentPage} />}
        {currentPage === 'checkout' && <CheckoutPage />}
        {currentPage === 'community' && <CommunityPage />}
        {currentPage === 'masterclass' && <MasterclassPage />}
        {currentPage === 'mentorship' && <MentorshipPage />}
        {currentPage === 'monarh' && <MonarhPage />}
        {currentPage === 'redcarpet' && <RedCarpetPage />}
        {currentPage === 'events' && <EventsHub setPage={setCurrentPage} />}
        {currentPage === 'meetup' && <MeetUpPage />}
        {currentPage === 'concierge' && <ConciergePage />}
      </main>
      <Footer />
      <ConciergeBot />

      {/* GLOBAL MEMBERSHIP MODAL */}
      {isMembershipModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-[#050505]/98 backdrop-blur-2xl"
            onClick={() => setIsMembershipModalOpen(false)}
          ></div>
          
          <div className="relative bg-[#0a0a0a] border border-white/5 w-full max-w-2xl p-12 md:p-20 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button 
              onClick={() => setIsMembershipModalOpen(false)}
              className="absolute top-10 right-10 text-white/20 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {isSubmitted ? (
              <div className="py-24 text-center space-y-12 animate-fade-in">
                <span className="gold-accent text-6xl serif italic block">Inicijacija započeta.</span>
                <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 leading-loose max-w-sm mx-auto">
                  Vaša prijava je diskretno prosleđena odboru za članstvo. Očekujte odgovor u roku od 48 časova.
                </p>
                <div className="w-px h-16 bg-gold/20 mx-auto"></div>
              </div>
            ) : (
              <div className="space-y-16">
                <div className="space-y-6">
                  <span className="gold-accent text-[11px] tracking-[0.6em] uppercase opacity-40 block text-left">Application for Membership</span>
                  <h2 className="serif text-4xl md:text-6xl font-light italic text-left tracking-tight">Zatražite vašu <br /> pozivnicu</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12 text-left">
                  <div className="space-y-10">
                    <div className="relative group">
                      <label className="text-[10px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Puno ime i titula</label>
                      <input required type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors serif text-2xl" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="relative group">
                        <label className="text-[10px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Email adresa</label>
                        <input required type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors serif text-2xl" />
                      </div>
                      <div className="relative group">
                        <label className="text-[10px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Telefon / WhatsApp</label>
                        <input required type="tel" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors serif text-2xl" />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="text-[10px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Profesija / Društveni profil</label>
                      <input type="text" placeholder="LinkedIn ili Instagram profil" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors serif text-xl placeholder:opacity-5" />
                    </div>

                    <div className="relative group">
                      <label className="text-[10px] uppercase tracking-[0.4em] opacity-30 group-focus-within:opacity-100 group-focus-within:gold-accent transition-all">Zašto želite da postanete član?</label>
                      <textarea required className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors serif text-2xl h-32 resize-none"></textarea>
                    </div>
                  </div>

                  <div className="pt-12">
                    <button type="submit" className="w-full py-8 bg-[#c5a059] text-[#0a0a0a] text-[11px] uppercase tracking-[0.6em] font-bold hover:bg-white transition-all duration-1000 shadow-2xl">
                      POŠALJI PRIJAVU
                    </button>
                    <p className="mt-8 text-[9px] uppercase tracking-[0.4em] opacity-20 text-center italic">
                      Striktna poverljivost zagarantovana. Vaši podaci se nikada ne dele.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Fixed the missing default export to resolve the import error in index.tsx
export default App;
