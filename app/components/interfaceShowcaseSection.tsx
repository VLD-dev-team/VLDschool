import React from 'react';

const InterfaceShowcaseSection = () => {
  return (
    <section className="relative py-40 bg-gradient-to-b from-[#03001C] via-[#3122b4]  to-[#03001C] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          Découvrez notre Interface Moderne
        </h2>
        <p className="mt-4 max-w-3xl text-lg md:text-l text-white">
          Une interface pensée pour maximiser votre expérience utilisateur. Simple, fluide et efficace pour vous accompagner tout au long de votre formation.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative z-0 py-12">
            <img src="/screenshots/vld-screen09.png" alt="Interface 1" className="w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500" />
            <p className="mt-4 text-center">Une page d'accueil simple d'utilisation et rapide d'accès</p>
          </div>
          <div className="relative z-0 py-12">
            <img src="/screenshots/vld-screen08.png" alt="Interface 2" className="w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500" />
            <p className="mt-4 text-center">Une interface de cours optimisée pour l'apprentissage</p>
          </div>
          <div className="relative z-0 py-12">
            <img src="/screenshots/vld-screen07.png" alt="Interface 3" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500" />
            <p className="mt-4 text-center">Une boutique simple de compréhension et accessible pour tous et toutes</p>
          </div>
          <div className="relative z-0 py-12">
            <img src="/screenshots/vld-screen06.png" alt="Interface 4" className="w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500" />
            <p className="mt-4 text-center">Un suivi simple pour apprécier vos progrès</p>
          </div>
        </div>

        <div className="mt-20 py-10 relative z-0">
          <a href="/auth" className="flex items-center justify-center gap-2 rounded bg-[var(--surface)] px-7 py-4 hover:bg-[var(--primary-hover)] transition-colors text-[var(--neutral)] hover:text-white">
            <p>Découvrez notre interface</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InterfaceShowcaseSection;
