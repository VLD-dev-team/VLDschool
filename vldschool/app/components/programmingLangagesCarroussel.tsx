import React from 'react';

// Composant principal pour la section
const ProgrammingLanguagesSection = () => {
  const languages = [
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'C++', icon: '/icons/cplusplus.svg' },
    { name: 'Ruby', icon: '/icons/ruby.svg' },
    { name: 'PHP', icon: '/icons/php.svg' },
  ];

  return (
    <section className="py-16 bg-[var(--surface)] text-[var(--neutral)] flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Langages de Programmation</h2>
        <p className="text-gray-300 mt-4 max-w-2xl">
          Découvrez les langages de programmation que nous utilisons pour développer des solutions modernes et efficaces.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-8 gap-8 animate-icons">
        {languages.map((language, index) => (
          <div
            key={index}
            className="w-20 h-20 md:w-24 md:h-24 p-4 flex items-center justify-center bg-[var(--primary-container)] rounded-full hover:bg-[var(--primary-hover)] transition-all transform hover:scale-110"
          >
            <img src={language.icon} alt={language.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgrammingLanguagesSection;
