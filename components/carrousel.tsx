"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample slides data - replace with your own content
  const slides = [
    {
      title: "Bienvenidos",
      description: "Este es el primer slide de nuestra presentación",
      bgColor: "bg-gray-500"
    },
    {
      title: "Características",
      description: "Descubre todas nuestras características increíbles",
      bgColor: "bg-green-500"
    },
    {
      title: "Conclusión",
      description: "Gracias por su atención",
      bgColor: "bg-purple-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[calc(100vh-64px)] sm:h-[calc(100vh-88px)] relative overflow-hidden shadow-lg">
      <div 
        className="h-full w-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full flex-shrink-0 ${slide.bgColor} flex flex-col items-center justify-center text-white p-8`}
          >
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl text-center">{slide.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;