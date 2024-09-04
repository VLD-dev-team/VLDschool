import React from 'react';

const InterfacePreviewSection = () => {
  const interfaces = [
    {
      description: "Une interface adaptative à vos préférences, la page d'accueil home en mode sombre",
      imageUrl: "/screenshots/vld_screen01.png",
    },
    {
      description: "Une interface dans laquel vous pourrez retrouver facilement tous vos cours, vos professeurs ainsi que votre progression",
      imageUrl: "/screenshots/vld_screen02.png",
    },
    {
      description: "Un lecteur de cours adapté à vos besoins, pour apprendre de la manière la plus efficace possible.",
      imageUrl: "/screenshots/vld_screen03.png",
    },
    {
      description: "Comprenez et apprenez rapidement et facilement",
      imageUrl: "/screenshots/vld_screen05.png",
    },
  ];

  return (
    <section className="py-10 bg-[var(--surface)] text-[var(--neutral)]">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-center mb-8">Aperçu des Interfaces VLD</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interfaces.map((iface, index) => (
            <div key={index} className="bg-[var(--primary-container)] rounded-lg overflow-hidden shadow-md">
              <img src={iface.imageUrl} alt={iface.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{iface.title}</h3>
                <p className="text-gray-300 mt-2">{iface.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterfacePreviewSection;
