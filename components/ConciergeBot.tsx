
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

export const ConciergeBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user', text: string }[]>([
    { role: 'bot', text: 'Dobrodošli u Gentlemen’s Club. Kako vam mogu biti od pomoći danas?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: `Ti si premium concierge AI za Gentlemen’s Club Serbia. 
          Uloga: Senior Concierge privatnog kluba.
          Ton: Aristokratski, smiren, kulturan, diskretan. 
          Stil: Kratke, smislene rečenice. Bez emodžija. Bez slenga. Bez AI terminologije. 
          Kontekst: Članstvo je privatno, knjiga se naručuje na sajtu, događaji su u sekciji Events.
          Ako je pitanje van tvog znanja, uputi ih da nas kontaktiraju direktno.`,
          temperature: 0.7,
        },
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || 'Za detaljnije informacije, najbolje je da nas kontaktirate direktno. Rado ćemo vam se javiti.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Izvinjavam se, trenutno nisam u mogućnosti da odgovorim. Molim vas, pokušajte kasnije.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestions = [
    "Kako mogu postati član?",
    "Koje događaje organizujete?",
    "Gde mogu poručiti knjigu?"
  ];

  return (
    <div className="fixed bottom-10 right-10 z-[100] font-sans">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-700 hover:border-[#c5a059]/50 group ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="serif text-xl gold-accent tracking-tighter group-hover:scale-110 transition-transform">GC</span>
        )}
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-[#0a0a0a] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] backdrop-blur-3xl transition-all duration-1000 origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <div>
            <h3 className="serif text-xl gold-accent italic">Concierge</h3>
            <p className="text-[8px] uppercase tracking-[0.4em] opacity-30">Private Assistance</p>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/40 animate-pulse"></div>
        </div>

        <div ref={scrollRef} className="h-[400px] overflow-y-auto p-8 space-y-8 scrollbar-hide">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              <div className={`max-w-[85%] text-[13px] leading-relaxed tracking-wide ${msg.role === 'user' ? 'opacity-40 italic text-right' : 'serif opacity-90'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start opacity-20">
              <span className="text-[10px] tracking-widest animate-pulse">Diskretno pretražujem...</span>
            </div>
          )}
        </div>

        {messages.length === 1 && (
          <div className="px-8 pb-4 flex flex-wrap gap-2">
            {suggestions.map((s, i) => (
              <button 
                key={i} 
                onClick={() => { setInput(s); setTimeout(() => handleSend(), 100); }}
                className="text-[9px] uppercase tracking-widest px-4 py-2 border border-white/5 hover:border-gold/30 hover:gold-accent transition-all duration-500"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={handleSend} className="p-6 border-t border-white/5 flex items-center gap-4">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Vaš upit..." 
            className="flex-grow bg-transparent outline-none text-sm serif italic placeholder:opacity-20"
          />
          <button type="submit" className="gold-accent opacity-40 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};
