"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface Slide {
  title: string;
  description: string;
  bgImg: string;
}

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const slides: Slide[] = [
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

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      if (!isAnimating) {
        handleNextSlide();
      }
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [currentSlide, isAnimating]);

  const handleSlideChange = (newSlide: number): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNextSlide = (): void => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const handlePrevSlide = (): void => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[500px] relative overflow-hidden rounded-lg">
      <div 
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50 transition-all duration-500"
              style={{ backgroundImage: `url(${slide.bgImg})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative flex flex-col items-center justify-center h-full z-10">
              <div className="w-[90%] h-[70%] bg-white/95 rounded-lg shadow-lg flex flex-col md:flex-row transform transition-all duration-500 hover:scale-105">
                <div className="flex-1 flex flex-col items-center justify-center p-6 transition-all duration-300 hover:bg-gray-50">
                  <div className="relative w-48 h-12">
                    <Image
                      alt="Indugal logo"
                      src="/logos/indugal-logo.png"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-6 transition-all duration-300 hover:bg-gray-50">
                  <div className="relative w-48 h-12">
                    <Image
                      alt="Galvanizados logo"
                      src="/logos/logo-galvanizados.png"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevSlide}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white backdrop-blur-sm
                 transition-all duration-300 hover:bg-white/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={handleNextSlide}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white backdrop-blur-sm
                 transition-all duration-300 hover:bg-white/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            disabled={isAnimating}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;