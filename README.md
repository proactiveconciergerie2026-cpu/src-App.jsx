<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
# src-App.jsxAgency Name: Update to ProActive Conciergerie (SARL AU).

Scope: Include all 4 cities: Mohammédia, Mansouria, Bouznika, and Benslimane.

Services: Mention premium management for Airbnb and Booking.com, including professional photography, dynamic pricing, and 24/7 traveler assistance.

Legal/Security: Add that we collaborate with external legal and accounting experts for transparent asset management.

Contact: Update the contact person to M. Ayoub CHAO (Founder & Manager), the email to contact@proactive-conciergerie.com, and the WhatsApp link to https://wa.me/212663088112.

Style: Keep the tone professional, premium, and trustworthy. Use bullet points for readability."
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
# src-App.jsxREADME.md
import React from 'react';
import { Shield, Home, Star, MessageCircle, MapPin, CheckCircle } from 'lucide-react';

/* CONSEIL VS CODE : 
  1. Sélectionne tout (Ctrl+A) dans ton fichier App.jsx 
  2. Efface tout
  3. Colle ce code ci-dessous
*/

const App = () => {
  const whatsappLink = "https://wa.me/212663088112";

  return (
    <div className="min-h-screen bg-white text-[#1A4275] selection:bg-[#E8A838] selection:text-white">
      
      {/* HEADER - IDENTITÉ MISE À JOUR */}
      <nav className="flex justify-between items-center px-6 py-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tighter">PROACTIVE</span>
          <span className="text-[10px] text-[#E8A838] font-bold tracking-[0.3em] uppercase italic">Conciergerie</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
          <span className="bg-slate-100 px-3 py-1 rounded text-[10px]">SARL AU</span>
          <a href="#services" className="hover:text-[#E8A838] transition-colors">Services</a>
          <a href={whatsappLink} className="text-[#E8A838]">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION - ACCROCHE ACTUALISÉE */}
      <header className="py-20 px-6 text-center bg-slate-50">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          L'Excellence de la Gestion <br/> Locative à <span className="text-[#E8A838]">Mohammédia</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Propriétaires à <b>Mohammédia, Mansouria, Bouznika ou Benslimane</b> : maximisez vos revenus sur <b>Airbnb</b> et <b>Booking.com</b> avec une gestion 100% sereine et professionnelle.
        </p>
        <button 
          onClick={() => window.open(whatsappLink)}
          className="bg-[#1A4275] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#E8A838] transition-all transform hover:scale-105"
        >
          Audit de rentabilité gratuit
        </button>
      </header>

      {/* SERVICES - ANALYSÉS ET ACTUALISÉS */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="space-y-4 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-sm transition-all">
          <Home className="text-[#E8A838]" size={40} />
          <h3 className="text-xl font-bold">Optimisation Airbnb & Booking</h3>
          <p className="text-gray-500 leading-relaxed">Gestion experte de vos annonces et stratégie de prix dynamique pour maximiser votre taux d'occupation toute l'année.</p>
        </div>

        <div className="space-y-4 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-sm transition-all">
          <Star className="text-[#E8A838]" size={40} />
          <h3 className="text-xl font-bold">Expérience Voyageur 5★</h3>
          <p className="text-gray-500 leading-relaxed"><b>Assistance 24/7</b> pour vos locataires. Nous assurons une communication fluide et un support technique permanent durant chaque séjour.</p>
        </div>

        <div className="space-y-4 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-sm transition-all">
          <Shield className="text-[#E8A838]" size={40} />
          <h3 className="text-xl font-bold">Expertise & Sécurité</h3>
          <p className="text-gray-500 leading-relaxed">Collaboration avec des <b>cabinets externes (Droit & Fiscalité)</b> pour garantir une gestion conforme et la protection de votre patrimoine.</p>
        </div>
      </section>

      {/* BANDEAU DE CONFIANCE - SLOGAN */}
      <div className="bg-[#1A4275] py-16 px-6 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 italic tracking-tight">"Votre tranquillité, notre mission"</h2>
        <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8A838]">
          <span className="flex items-center gap-2 font-black"><MapPin size={14}/> Mohammédia</span>
          <span className="flex items-center gap-2 font-black"><MapPin size={14}/> Mansouria</span>
          <span className="flex items-center gap-2 font-black"><MapPin size={14}/> Bouznika</span>
          <span className="flex items-center gap-2 font-black"><MapPin size={14}/> Benslimane</span>
        </div>
      </div>

      {/* FOOTER - DONNÉES FINALES */}
      <footer className="py-12 border-t text-center text-gray-400 text-sm">
        <div className="mb-4">
            <p className="font-extrabold text-[#1A4275] uppercase tracking-wider">PROACTIVE CONCIERGERIE SARL AU</p>
            <p className="mt-1">Gestion locative de standing & Intendance immobilière</p>
        </div>
        <p className="font-medium text-slate-500 italic">contact@proactive-conciergerie.com | +212 663 08 81 12</p>
        <div className="mt-8 text-[10px] opacity-50 uppercase tracking-[0.4em]">© 2026 Tous droits réservés</div>
      </footer>

      {/* BOUTON WHATSAPP FLOTTANT */}
      <button 
        onClick={() => window.open(whatsappLink)}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <MessageCircle size={32} />
      </button>

    </div>
  );
};

export default App;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
