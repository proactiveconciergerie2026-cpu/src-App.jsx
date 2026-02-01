import React from 'react';
import { Shield, Home, Star, MessageCircle, MapPin } from 'lucide-react';

/* DOCUMENT DE MISE À JOUR - PROACTIVE CONCIERGERIE 
   Contenu : SARL AU, 4 Villes, Assistance 24/7, Expertise Externe.
*/

const WHATSAPP = 'https://wa.me/212663088112';
const EMAIL = 'contact@proactive-conciergerie.com';
const TEL = '+212663088112';
const COMPANY_NAME = 'PROACTIVE CONCIERGERIE SARL AU';

const cities = [
  { name: 'Mohammédia', q: 'Mohammedia' },
  { name: 'Mansouria', q: 'Mansouria' },
  { name: 'Bouznika', q: 'Bouznika' },
  { name: 'Benslimane', q: 'Benslimane' },
];

const App = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_NAME,
    "url": "https://proactive-conciergerie.com",
    "email": EMAIL,
    "telephone": TEL,
    "sameAs": []
  };

  return (
    <div className="min-h-screen bg-white text-[#1A4275] selection:bg-[#E8A838]">

      {/* HEADER ACTUALISÉ */}
      <nav role="navigation" aria-label="Main navigation" className="flex justify-between items-center px-6 py-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tighter uppercase">PROACTIVE</span>
          <span className="text-[10px] text-[#E8A838] font-bold tracking-[0.3em] uppercase italic">Conciergerie</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest">
          <span className="bg-slate-100 px-3 py-1 rounded">SARL AU</span>
          <a href="#services" className="hover:text-[#E8A838] transition-colors">Services</a>
          <a href={WHATSAPP} className="text-[#E8A838]" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION - ANALYSÉE POUR CONVERSION */}
        <header className="py-24 px-6 text-center bg-slate-50" aria-label="Hero">
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            L'Excellence de la Gestion <br /> Locative à <span className="text-[#E8A838]">Mohammédia</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Propriétaires à <b>Mohammédia, Mansouria, Bouznika ou Benslimane</b> : maximisez vos revenus sur <b>Airbnb</b> et <b>Booking.com</b> avec une gestion 100% sereine et professionnelle.
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Audit de rentabilité gratuit via WhatsApp"
            className="bg-[#1A4275] text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-[#E8A838] transition-all transform hover:scale-105 inline-block"
          >
            Audit de rentabilité gratuit
          </a>
        </header>

        {/* SERVICES - TEXTES DÉFINITIFS */}
        <section id="services" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center" aria-label="Nos services">
          <div className="space-y-4 p-8 rounded-3xl bg-white shadow-sm border border-slate-50">
            <Home className="text-[#E8A838] mx-auto" size={48} aria-hidden="true" />
            <h3 className="text-xl font-bold italic">Optimisation Airbnb & Booking</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Création d'annonces professionnelles et stratégie de prix dynamique pour maximiser vos revenus locatifs toute l'année.</p>
          </div>

          <div className="space-y-4 p-8 rounded-3xl bg-white shadow-sm border border-slate-50">
            <Star className="text-[#E8A838] mx-auto" size={48} aria-hidden="true" />
            <h3 className="text-xl font-bold italic">Expérience Voyageur 5★</h3>
            <p className="text-gray-500 text-sm leading-relaxed"><b>Assistance 24/7</b> pour vos locataires. Nous assurons la communication et le support technique à chaque étape du séjour.</p>
          </div>

          <div className="space-y-4 p-8 rounded-3xl bg-white shadow-sm border border-slate-50">
            <Shield className="text-[#E8A838] mx-auto" size={48} aria-hidden="true" />
            <h3 className="text-xl font-bold italic">Expertise & Sécurité</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Collaboration avec des <b>cabinets externes (Droit & Fiscalité)</b> pour garantir une gestion conforme et sécurisée de votre patrimoine.</p>
          </div>
        </section>
      </main>

      {/* SLOGAN & GÉO-LOCALISATION */}
      <div className="bg-[#1A4275] py-20 px-6 text-center text-white">
        <h2 className="text-2xl md:text-4xl font-black mb-8 italic tracking-tighter">"Votre tranquillité, notre mission"</h2>
        <div className="flex flex-wrap justify-center gap-8 text-[12px] font-black uppercase tracking-[0.4em] text-[#E8A838]">
          {cities.map((c) => (
            <span key={c.name} className="flex items-center gap-2 underline decoration-1 underline-offset-8">
              <MapPin size={16} className="text-[#E8A838]" aria-hidden="true" />
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.q)}`} target="_blank" rel="noopener noreferrer">{c.name}</a>
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER - DONNÉES DE L'ENTREPRISE */}
      <footer className="py-16 border-t text-center text-gray-400 text-sm" role="contentinfo">
        <div className="mb-6">
          <p className="font-black text-[#1A4275] text-lg uppercase tracking-tighter">{COMPANY_NAME}</p>
          <p className="mt-1 text-xs">Gestion locative de standing & Intendance immobilière</p>
        </div>
        <p className="font-bold text-slate-600"><a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a> | <a href={`tel:${TEL}`} className="hover:underline">{TEL}</a></p>
        <div className="mt-12 text-[9px] opacity-40 uppercase tracking-[0.6em]">© 2026 Tous droits réservés</div>
      </footer>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <MessageCircle size={32} aria-hidden="true" />
      </a>

      {/* JSON-LD (SEO) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

    </div>
  );
};

export default App;
