import React from 'react';
import { Shield, Home, Star, MessageCircle, MapPin } from 'lucide-react';

/* MISE À JOUR STRATÉGIQUE - WWW.PROACTIVE-CONCIERGERIE.COM */

const App = () => {
  const whatsappLink = "https://wa.me/212663088112";

  return (
    <div className="min-h-screen bg-white text-[#1A4275] font-sans">
      
      {/* HEADER */}
      <nav className="flex justify-between items-center px-6 py-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tighter uppercase">PROACTIVE</span>
          <span className="text-[10px] text-[#E8A838] font-bold tracking-[0.3em] uppercase italic">Conciergerie</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-widest">
          <span className="bg-slate-100 px-2 py-1 rounded text-[#1A4275]">SARL AU</span>
          <a href="#services" className="hover:text-[#E8A838] transition-colors">Services</a>
          <a href={whatsappLink} className="text-[#E8A838]">Contact</a>
        </div>
      </nav>

      {/* SECTION ACCUEIL ACTUALISÉE */}
      <header className="py-20 px-6 text-center bg-slate-50">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          L'Excellence de la Gestion <br/> Locative à <span className="text-[#E8A838]">Mohammédia</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
          Propriétaires à <b>Mohammédia, Mansouria, Bouznika ou Benslimane</b> : maximisez vos revenus sur <b>Airbnb</b> et <b>Booking.com</b> avec une gestion 100% sereine et professionnelle.
        </p>
        <button 
          onClick={() => window.open(whatsappLink)}
          className="bg-[#1A4275] text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-[#E8A838] transition-all transform hover:scale-105"
        >
          Audit de rentabilité gratuit
        </button>
      </header>

      {/* SERVICES - ANALYSE DE CONVERSION */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        <div className="space-y-4 p-8 rounded-3xl bg-white shadow-sm border border-slate-50 hover:border-[#E8A838] transition-colors">
          <Home className="text-[#E8A838] mx-auto" size={48} />
          <h3 className="text-xl font-bold italic text-[#1A4275]">Optimisation Airbnb & Booking</h3>
          <p className="text-gray-500 text-sm leading-relaxed">Création d'annonces professionnelles et stratégie de prix dynamique pour maximiser vos revenus locatifs toute l'année.</p>
        </div>

        <div className="space-y-4 p-8 rounded-3xl bg-white shadow-sm border border-slate-50 hover:border-[#E8A838] transition-colors">
          <Star className="text-[#E8A838] mx-auto" size={48} />
          <h3 className="text-xl font-bold italic text-[#1A4275]">Expérience Voyageur 5★</h3>
          <p className="text-gray-500 text-sm leading-relaxed"><b>Assistance 24/7</b> pour vos locataires. Nous assurons la communication et le support technique à chaque étape du séjour.</p>
        </div>

        <div className="space-y-4 p-8 rounded-3xl bg-white shadow-sm border border-slate-50 hover:border-[#E8A838] transition-colors">
          <Shield className="text-[#E8A838] mx-auto" size={48} />
          <h3 className="text-xl font-bold italic text-[#1A4275]">Expertise & Sécurité</h3>
          <p className="text-gray-500 text-sm leading-relaxed">Collaboration avec des <b>cabinets externes (Droit & Fiscalité)</b> pour garantir une gestion conforme et sécurisée de votre patrimoine.</p>
        </div>
      </section>

      {/* SLOGAN & GÉO-ZONES */}
      <div className="bg-[#1A4275] py-20 px-6 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-black mb-8 italic tracking-tight underline decoration-[#E8A838] decoration-2 underline-offset-8">"Votre tranquillité, notre mission"</h2>
        <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-[0.4em] text-[#E8A838]">
          <span className="flex items-center gap-2">Mohammédia</span>
          <span className="flex items-center gap-2">Mansouria</span>
          <span className="flex items-center gap-2">Bouznika</span>
          <span className="flex items-center gap-2">Benslimane</span>
        </div>
      </div>

      {/* FOOTER - DONNÉES FINALES */}
      <footer className="py-16 border-t border-gray-100 text-center text-gray-400 text-sm">
        <div className="mb-6">
            <p className="font-black text-[#1A4275] text-lg uppercase tracking-tighter">PROACTIVE CONCIERGERIE SARL AU</p>
            <p className="mt-1 text-xs font-semibold">Gestion locative de standing & Intendance immobilière</p>
        </div>
        <p className="font-bold text-slate-600">contact@proactive-conciergerie.com | +212 663 08 81 12</p>
        <div className="mt-12 text-[9px] opacity-40 uppercase tracking-[0.6em]">© 2026 Tous droits réservés</div>
      </footer>

      {/* BOUTON WHATSAPP FLOTTANT */}
      <button 
        onClick={() => window.open(whatsappLink)}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 shadow-green-200/50"
      >
        <MessageCircle size={32} />
      </button>

    </div>
  );
};

export default App;
