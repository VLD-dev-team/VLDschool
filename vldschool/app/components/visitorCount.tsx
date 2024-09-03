import React from 'react';

const VisitorSection = () => {
  // Exemple de données pour les visiteurs
  const visitorData = [
    { label: 'Nombre de formations', count: 2 },
    { label: 'Nombre de chapitres', count: 30 },
    { label: 'Nombre de leçons', count: 30 },
    { label: "Nombre d'exercices", count: 35 },
    { label: 'Nombre de vidéos', count: 65 },
    { label: 'Nombre de niveaux', count: 5 },
  ];

  return (
    <section className="py-12 bg-[var(--surface)] text-[var(--neutral)]">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Notre contenu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visitorData.map((data, index) => (
            <div key={index} className="bg-[var(--primary-container)] p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <span className="text-4xl font-bold mb-2">{data.count}</span>
              <p className="text-lg">{data.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitorSection;
