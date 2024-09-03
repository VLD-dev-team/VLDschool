import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSection = () => {
  const settings = {
    dots: true, // Affiche des points de navigation
    infinite: true, // Carrousel infini
    speed: 500, // Vitesse de défilement en ms
    slidesToShow: 3, // Nombre d'éléments visibles en même temps
    slidesToScroll: 1, // Nombre d'éléments à faire défiler
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-[var(--surface)] text-[var(--neutral)]">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Notre Carrousel</h2>
        <Slider {...settings}>
          <div className="p-4">
            <img src="/screenshots/vld_screen01.png" alt="Image 1" className="rounded-lg shadow-md" />
          </div>
          <div className="p-4">
            <img src="/screenshots/vld_screen02.png" alt="Image 2" className="rounded-lg shadow-md" />
          </div>
          <div className="p-4">
            <img src="/path/to/image3.jpg" alt="Image 3" className="rounded-lg shadow-md" />
          </div>
          <div className="p-4">
            <img src="/path/to/image4.jpg" alt="Image 4" className="rounded-lg shadow-md" />
          </div>
          <div className="p-4">
            <img src="/path/to/image5.jpg" alt="Image 5" className="rounded-lg shadow-md" />
          </div>
          <div className="p-4">
            <img src="/path/to/image6.jpg" alt="Image 6" className="rounded-lg shadow-md" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default CarouselSection;
