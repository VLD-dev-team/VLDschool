import React from 'react';

const ProgrammingLanguagesSection = () => {
  const languages = [
    { name: 'Python', icon: 'https://s2.qwant.com/thumbr/0x380/f/5/3cf01c458bf156249973c93e511e0f839d987d47317c96da909f8f5f01b8b9/Python_logo_icon.png?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPython_logo_icon.png&q=0&b=1&p=0&a=0' },
    { name: 'Java', icon: 'https://s2.qwant.com/thumbr/474x474/c/a/00c2c9b32a36ceba8ec05a62fa69be1255356850f376d6587832fd65272e01/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP._XvQEHjvaRWnkX5EW_e5-gHaHa%26pid%3DApi&q=0&b=1&p=0&a=0' },
    { name: 'Linux', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png' },
    { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/256/174/174854.png' },
    { name: 'CSS', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' },
    { name: 'SQL', icon: 'https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png' },
  ];

  return (
    <section className="py-8 text-[var(--neutral)] flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">Nos formations</h2>
        <p className="text-gray-300 mt-4 max-w-xl">
          Découvrez les formations que nous proposons pour développer des compétences solides et efficaces.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-8 gap-8 animate-icons">
        {languages.map((language, index) => (
          <div
            key={index}
            className="w-20 h-20 md:w-24 md:h-24 p-4 flex items-center justify-center bg-[white] rounded-full hover:bg-[var(--primary-hover)] transition-all transform hover:scale-110"
          >
            <img src={language.icon} alt={language.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgrammingLanguagesSection;
