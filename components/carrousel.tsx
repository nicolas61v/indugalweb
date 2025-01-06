"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bienvenidos",
      description: "Este es el primer slide de nuestra presentación",
      bgImg: "/images/p1.jpg"
    },
    {
      title: "Características",
      description: "Descubre todas nuestras características increíbles",
      bgImg: "/images/p2.jpg"
    },
    {
      title: "Conclusión",
      description: "Gracias por su atención",
      bgImg: "/images/p3.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[700px] relative overflow-hidden shadow-lg">
      <div 
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ 
              backgroundImage: `url(${slide.bgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top'
            }}
            className="flex flex-col items-center justify-center flex-shrink-0 w-full h-full p-8 text-white"
          >
            <div className='flex flex-row w-[80%] h-[80%] bg-white/90'>
              <div className='flex flex-col items-center justify-center flex-1'>
                <Image alt='Indugal logo' src={'/logos/indugal-logo.png'} width={250} height={55} />
              </div>
              <div className='flex flex-col items-center justify-center flex-1'>
                <Image alt='Galvanizados logo' src={'/logos/logo-galvanizados.png'} width={250} height={55} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute p-2 text-white transition-all -translate-y-1/2 bg-opacity-50 rounded-full bg-primary left-4 top-1/2 hover:bg-opacity-75"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 text-white transition-all -translate-y-1/2 bg-opacity-50 rounded-full bg-primary right-4 top-1/2 hover:bg-opacity-75"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 mb-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;